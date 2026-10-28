#!/usr/bin/env python3
"""Print Cost & Profit Linux local server with initial Moonraker/U1 support.
Keeps the existing SQLite API and binds only to 127.0.0.1:8700.
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, unquote, parse_qs, quote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from concurrent.futures import ThreadPoolExecutor, as_completed
import base64, ipaddress, json, os, re, socket, sys, threading, time, uuid

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(os.environ.get('XDG_DATA_HOME', Path.home() / '.local' / 'share')) / 'PrintCostProfit' / 'data'
DB = DATA / 'printcostprofit.db'
BACKUPS = DATA / 'backups'
U1_DIR = DATA / 'u1-read-jobs'
U1_CONFIG = DATA / 'u1-config.json'
sys.path.insert(0, str(ROOT))
from pcp_sqlite_store import SQLiteStore, StorageError, RevisionConflict, extract_legacy_values
STORE = SQLiteStore(DB, BACKUPS)
_jobs_lock = threading.Lock()
_jobs = {}
_status_lock = threading.Lock()
_status_cache = {'value': None, 'at': 0.0}


def _read_config():
    try:
        obj = json.loads(U1_CONFIG.read_text(encoding='utf-8'))
        ip = str(obj.get('ip', '')).strip()
        ipaddress.ip_address(ip)
        return {'ip': ip}
    except Exception:
        return {'ip': ''}


def _save_config(ip):
    U1_DIR.mkdir(parents=True, exist_ok=True)
    tmp = U1_CONFIG.with_suffix('.tmp')
    tmp.write_text(json.dumps({'ip': ip}, ensure_ascii=False), encoding='utf-8')
    tmp.replace(U1_CONFIG)


def _http_json(url, timeout=2.0):
    req = Request(url, headers={'Accept': 'application/json', 'User-Agent': 'PrintCostProfit-Linux/1.0'})
    with urlopen(req, timeout=timeout) as resp:
        raw = resp.read(8_000_000)
    return json.loads(raw.decode('utf-8-sig'))


def _printer_url():
    ip = _read_config()['ip']
    if not ip:
        raise RuntimeError('No hay una IP de impresora configurada. Introduce la IP y pulsa Guardar IP manual.')
    return ip, 'http://' + ip + ':7125'


def _moonraker_info(ip, timeout=0.7):
    data = _http_json(f'http://{ip}:7125/printer/info', timeout)
    result = data.get('result', data)
    if not isinstance(result, dict):
        raise RuntimeError('Moonraker devolvió una respuesta no válida.')
    return result


def _query_status(base, timeout=1.6):
    data = _http_json(base + '/printer/objects/query?print_stats&virtual_sdcard&webhooks', timeout)
    result = data.get('result', {})
    status = result.get('status', result) if isinstance(result, dict) else {}
    if not isinstance(status, dict):
        raise RuntimeError('Moonraker no devolvió el estado de la impresora.')
    return status


def _filename_from_status(status):
    ps = status.get('print_stats') or {}
    fn = str(ps.get('filename') or '').replace('\\', '/').strip()
    return fn


def _discover_local_ips():
    # En WSL, la red virtual no coincide con la LAN física de las impresoras.
    # Se incluyen las IP conocidas y se examina la red física confirmada.
    candidates = {
        "192.168.1.48",
        "192.168.1.51",
        "192.168.1.54",
    }
    network = ipaddress.ip_network("192.168.1.0/24")
    candidates.update(str(ip) for ip in network.hosts())
    return sorted(candidates, key=lambda ip: tuple(int(x) for x in ip.split(".")))



def _probe_printer(ip):
    try:
        info = _moonraker_info(ip, timeout=0.45)
        return {'ip': ip, 'hostname': str(info.get('hostname') or info.get('machine') or 'Snapmaker U1'),
                'softwareVersion': str(info.get('software_version') or info.get('version') or '')}
    except Exception:
        return None


def _resolve_gcode_path(base, requested):
    requested = requested.replace('\\', '/').strip().lstrip('/')
    if not requested or '\x00' in requested or any(part == '..' for part in requested.split('/')):
        raise RuntimeError('El nombre del G-code no es válido.')
    # Ask Moonraker for the files and resolve paths with/without gcodes/ prefix.
    listing = _http_json(base + '/server/files/list?root=gcodes', timeout=5)
    result = listing.get('result', {})
    files = result.get('files', []) if isinstance(result, dict) else result if isinstance(result, list) else []
    wanted_leaf = requested.rsplit('/', 1)[-1]
    matches = []
    for entry in files if isinstance(files, list) else []:
        if not isinstance(entry, dict):
            continue
        path = str(entry.get('path') or entry.get('filename') or '').replace('\\', '/').lstrip('/')
        if not path:
            continue
        if path.lower() == requested.lower() or path.lower() == ('gcodes/' + requested).lower() or path.rsplit('/', 1)[-1].lower() == wanted_leaf.lower():
            matches.append(path)
    # Prefer exact relative path, then exact leaf name.
    resolved = next((p for p in matches if p.lower() == requested.lower()), None)
    if not resolved:
        resolved = next((p for p in matches if p.lower() == ('gcodes/' + requested).lower()), None)
    if not resolved and matches:
        resolved = matches[0]
    if not resolved:
        # Let Moonraker try the requested path directly; it may accept paths not listed.
        resolved = requested
    return resolved


def _read_gcode_job(job_id, base, filename, requested_path):
    U1_DIR.mkdir(parents=True, exist_ok=True)
    temp_path = U1_DIR / (uuid.uuid4().hex + '.gcode.tmp')
    def save(state, **extra):
        payload = {'ok': state not in ('error',), 'state': state, 'progress': 0, 'filename': filename, **extra}
        with _jobs_lock:
            _jobs[job_id] = payload
    try:
        save('reading', progress=0, bytesRead=0, totalBytes=0, message='Conectando con Moonraker…')
        resolved = _resolve_gcode_path(base, requested_path or filename)
        candidates = []
        for c in (resolved, filename, resolved[7:] if resolved.lower().startswith('gcodes/') else ''):
            c = str(c or '').strip().lstrip('/')
            if c and c not in candidates and '..' not in c.split('/'):
                candidates.append(c)
        response = None
        last_error = None
        for candidate in candidates:
            encoded = '/'.join(quote(seg, safe='') for seg in candidate.split('/'))
            try:
                req = Request(base + '/server/files/gcodes/' + encoded, headers={'User-Agent': 'PrintCostProfit-Linux/1.0'})
                response = urlopen(req, timeout=30)
                break
            except Exception as exc:
                last_error = str(exc)
        if response is None:
            raise RuntimeError('Moonraker no encontró el G-code. Rutas probadas: ' + ' | '.join(candidates) + '. ' + str(last_error or ''))
        total = int(response.headers.get('Content-Length') or 0)
        read_total = 0
        last_update = 0.0
        with response, temp_path.open('wb') as out:
            while True:
                chunk = response.read(1024 * 1024)
                if not chunk:
                    break
                out.write(chunk)
                read_total += len(chunk)
                now = time.monotonic()
                if now - last_update >= 0.25:
                    pct = min(99, int(read_total * 100 / total)) if total else 0
                    save('reading', progress=pct, bytesRead=read_total, totalBytes=total, message=f'Leyendo datos del G-code… {pct}%')
                    last_update = now
        save('parsing', progress=99, bytesRead=read_total, totalBytes=total, message='Analizando los metadatos de los filamentos…')
        gm = cm = tm = None
        patterns = {
            'grams': re.compile(r'^;\s*filament used \[g\]\s*=\s*(.+)$', re.I),
            'colors': re.compile(r'^;\s*filament_colour\s*=\s*(.+)$', re.I),
            'types': re.compile(r'^;\s*filament_type\s*=\s*(.+)$', re.I),
        }
        with temp_path.open('r', encoding='utf-8-sig', errors='replace') as stream:
            for line in stream:
                line = line.rstrip('\r\n')
                if gm is None:
                    m = patterns['grams'].match(line)
                    if m: gm = m.group(1).strip()
                if cm is None:
                    m = patterns['colors'].match(line)
                    if m: cm = m.group(1).strip()
                if tm is None:
                    m = patterns['types'].match(line)
                    if m: tm = m.group(1).strip()
                if gm is not None and cm is not None and tm is not None:
                    break
        if gm is None:
            raise RuntimeError('El G-code completo no contiene el metadato filament used [g].')
        try:
            grams = [float(x.strip()) for x in re.split(r'\s*,\s*', gm) if x.strip()]
        except ValueError as exc:
            raise RuntimeError('El metadato de gramos de filamento no tiene un formato válido.') from exc
        colors = cm.split(';') if cm is not None else []
        types = tm.split(';') if tm is not None else []
        items = []
        for i, amount in enumerate(grams):
            color = colors[i].strip() if i < len(colors) else ''
            material = types[i].strip() if i < len(types) and types[i].strip() else 'Filamento'
            items.append({'extruder': i + 1, 'material': material, 'name': (material + ' ' + color).strip(),
                          'color': color, 'colorName': color, 'grams': amount})
        if not items:
            raise RuntimeError('No se encontraron filamentos en el G-code completo.')
        save('completed', progress=100, bytesRead=read_total, totalBytes=total, items=items,
             totalGrams=round(sum(grams), 2), source='G-code completo leído de Moonraker', message='Lectura completada.')
    except Exception as exc:
        save('error', progress=0, error=str(exc), message='No se pudo leer el G-code.')
    finally:
        try: temp_path.unlink(missing_ok=True)
        except Exception: pass


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):
        print('[PCP Linux] ' + (fmt % args), flush=True)

    def send_json(self, obj, status=200):
        data = json.dumps(obj, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def read_body(self):
        length = min(int(self.headers.get('Content-Length', '0') or 0), 20_000_000)
        return json.loads(self.rfile.read(length).decode('utf-8')) if length else {}

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        qs = parse_qs(parsed.query)
        try:
            if path == '/api/storage/snapshot': return self.send_json(STORE.snapshot())
            if path == '/api/storage/health':
                integrity = STORE.integrity_check(); backups = STORE.list_backups()
                files = sorted(BACKUPS.glob('printcostprofit_*.db'), key=lambda p: p.stat().st_mtime, reverse=True)
                ok = bool(integrity.get('ok'))
                return self.send_json({'ok': ok, 'version':'linux-dev', 'database':str(DB), 'databaseExists':DB.exists(), 'databaseBytes':DB.stat().st_size if DB.exists() else 0, 'integrity':integrity, 'backupDirectory':str(BACKUPS), 'backupCount':len(files), 'latestBackup':time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(files[0].stat().st_mtime)) if files else None, 'maxBackups':backups.get('maxBackups',100), 'backupIntervalMinutes':backups.get('backupIntervalMinutes',5), 'checkedAt':time.strftime('%Y-%m-%d %H:%M:%S')}, 200 if ok else 500)
            if path == '/api/storage/backups': return self.send_json(STORE.list_backups())
            if path == '/api/version': return self.send_json({'ok':True,'version':'linux-dev','build':'linux-dev'})
            if path == '/api/u1/config':
                ip = str((qs.get('ip') or [''])[0]).strip()
                if not ip:
                    return self.send_json({'ok':True, 'ip':_read_config()['ip']})
                try: ip = str(ipaddress.ip_address(ip))
                except ValueError: return self.send_json({'ok':False,'error':'La IP introducida no es válida.'}, 400)
                info = _moonraker_info(ip, timeout=4)
                _save_config(ip)
                with _status_lock: _status_cache.update(value=None, at=0.0)
                return self.send_json({'ok':True,'ip':ip,'printerInfo':{'hostname':info.get('hostname') or info.get('machine') or 'Snapmaker U1','softwareVersion':info.get('software_version') or info.get('version') or ''}})
            if path == '/api/u1/discover':
                ips = _discover_local_ips()
                found = []
                with ThreadPoolExecutor(max_workers=48) as pool:
                    futures = [pool.submit(_probe_printer, ip) for ip in ips]
                    for f in as_completed(futures, timeout=18):
                        try:
                            item = f.result()
                            if item: found.append(item)
                        except Exception: pass
                found.sort(key=lambda x: x['ip'])
                configured = _read_config()['ip']
                chosen = configured if any(x['ip'] == configured for x in found) else (found[0]['ip'] if len(found) == 1 else '')
                info = next((x for x in found if x['ip'] == chosen), None)
                if chosen and len(found) == 1 and chosen != configured: _save_config(chosen)
                return self.send_json({'ok':True,'ip':chosen or None,'printers':found,'printerInfo':info,'message':'No se encontraron impresoras Moonraker en la red local.' if not found else ''})
            if path == '/api/u1/printer':
                ip, base = _printer_url(); info = _http_json(base + '/printer/info', timeout=3)
                info = info.get('result', info)
                status = _query_status(base, timeout=2)
                ps = status.get('print_stats') or {}
                return self.send_json({'ok':True,'name':info.get('hostname') or info.get('machine') or 'Snapmaker U1','ip':ip,'state':ps.get('state') or (status.get('webhooks') or {}).get('state') or 'unknown','filename':_filename_from_status(status),'softwareVersion':info.get('software_version') or info.get('version') or ''})
            if path == '/api/u1/status':
                ip, base = _printer_url()
                with _status_lock:
                    cached = _status_cache['value']; age = time.monotonic() - _status_cache['at']
                if cached is not None and age < 1.0:
                    return self.send_json({'ok':True,'status':cached,'updatedAt':time.strftime('%Y-%m-%d %H:%M:%S')})
                status = _query_status(base, timeout=2.0)
                with _status_lock: _status_cache.update(value=status, at=time.monotonic())
                return self.send_json({'ok':True,'status':status,'updatedAt':time.strftime('%Y-%m-%d %H:%M:%S')})
            if path == '/api/u1/filaments':
                ip, base = _printer_url()
                encoded = str((qs.get('filenameB64') or [''])[0]).strip()
                filename = str((qs.get('filename') or [''])[0]).strip()
                if encoded:
                    try:
                        encoded += '=' * ((4 - len(encoded) % 4) % 4)
                        filename = base64.urlsafe_b64decode(encoded.encode('ascii')).decode('utf-8')
                    except Exception: return self.send_json({'ok':False,'error':'El nombre del G-code codificado no es válido.'}, 400)
                filename = filename.replace('\\','/').split('/')[-1].strip()
                if not filename or filename in ('.','..') or '\x00' in filename: return self.send_json({'ok':False,'error':'No se recibió un nombre de G-code válido.'}, 400)
                status = _query_status(base, timeout=2)
                active = _filename_from_status(status)
                requested = active if active and active.rsplit('/',1)[-1] == filename else filename
                job_id = uuid.uuid4().hex
                with _jobs_lock: _jobs[job_id] = {'ok':True,'state':'starting','progress':0,'filename':filename,'message':'Preparando lectura del G-code…'}
                threading.Thread(target=_read_gcode_job, args=(job_id,base,filename,requested), daemon=True).start()
                return self.send_json({'ok':True,'started':True,'jobId':job_id,'filename':filename,'message':'Lectura del G-code iniciada.'})
            if path == '/api/u1/filaments/progress':
                job_id = str((qs.get('id') or [''])[0]).strip()
                if not re.fullmatch(r'[0-9a-fA-F]{32}', job_id): return self.send_json({'ok':False,'error':'Identificador de lectura no válido.'}, 400)
                with _jobs_lock: state = _jobs.get(job_id)
                if state is None: return self.send_json({'ok':True,'state':'starting','progress':0,'message':'Preparando lectura…'})
                return self.send_json(state)
            if path.startswith('/api/'): return self.send_json({'ok':False,'error':'Este endpoint todavía no está implementado en Linux: '+path}, 501)
            if path == '/': self.path = '/Print_Cost_Profit.html'
            return super().do_GET()
        except Exception as e:
            return self.send_json({'ok':False,'error':str(e)}, 502 if path.startswith('/api/u1/') else 500)

    def do_POST(self):
        path = urlparse(self.path).path
        try:
            body = self.read_body()
            if path == '/api/storage/import': return self.send_json(STORE.import_values(body.get('values') or {}, only_if_empty=True))
            if path == '/api/storage/write': return self.send_json(STORE.write(body.get('key',''), body.get('value',''), body.get('expectedRevision',0)))
            if path == '/api/storage/remove': return self.send_json(STORE.remove(body.get('key',''), body.get('expectedRevision',0)))
            if path == '/api/storage/backup/create': return self.send_json(STORE.backup_now())
            if path == '/api/storage/backup/config': return self.send_json(STORE.backup_config(body.get('intervalMinutes'), body.get('maxBackups')))
            if path == '/api/storage/backup/validate': return self.send_json(STORE.validate_backup(body.get('name','')))
            if path == '/api/storage/backup/restore': return self.send_json(STORE.restore_backup(body.get('name','')))
            if path.startswith('/api/'): return self.send_json({'ok':False,'error':'Este endpoint todavía no está implementado en Linux: '+path}, 501)
            return self.send_json({'ok':False,'error':'Ruta no encontrada'}, 404)
        except RevisionConflict as e: return self.send_json({'ok':False,'error':str(e),'conflict':True}, 409)
        except (ValueError, json.JSONDecodeError) as e: return self.send_json({'ok':False,'error':'Solicitud JSON no válida: '+str(e)}, 400)
        except Exception as e: return self.send_json({'ok':False,'error':str(e)}, 500)


def main():
    DATA.mkdir(parents=True, exist_ok=True); BACKUPS.mkdir(parents=True, exist_ok=True); U1_DIR.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(('127.0.0.1', 8700), Handler)
    print('Print Cost & Profit para Linux — almacenamiento SQLite + monitor U1', flush=True)
    print('Interfaz: http://127.0.0.1:8700/', flush=True)
    print('Base de datos:', DB, flush=True)
    print('Configuración U1:', U1_CONFIG, flush=True)
    print('Solo escucha en 127.0.0.1; no está expuesto a la red.', flush=True)
    try: server.serve_forever()
    except KeyboardInterrupt: print('\nCerrando servidor…', flush=True)
    finally: server.server_close()

if __name__ == '__main__': main()
