#!/usr/bin/env python3
"""Print Cost & Profit Linux server; API-compatible adaptation of Windows v1.4.
Uses only Python standard library and the shared SQLiteStore implementation.
Binds exclusively to loopback; it does not send print/cancel commands to printers.
"""
from __future__ import annotations
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse, unquote, parse_qs, quote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from concurrent.futures import ThreadPoolExecutor, as_completed, TimeoutError as FuturesTimeoutError
import base64, ipaddress, json, os, re, socket, subprocess, sys, threading, time, uuid, mimetypes, html

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(os.environ.get('XDG_DATA_HOME', str(Path.home()/'.local'/'share'))) / 'PrintCostProfit' / 'data'
DB = DATA / 'printcostprofit.db'
BACKUPS = DATA / 'backups'
U1_DIR = DATA / 'u1-read-jobs'
U1_CONFIG = DATA / 'u1-config.json'
STATUS_CACHE = DATA / 'u1_status_cache.json'
LOG_PATH = DATA / 'printcostprofit.log'
sys.path.insert(0, str(ROOT))
from pcp_sqlite_store import SQLiteStore, StorageError, RevisionConflict
STORE = SQLiteStore(DB, BACKUPS)
APP_VERSION = (ROOT / 'VERSION').read_text(encoding='utf-8').strip() or 'unknown'
HOST = '127.0.0.1'
PORT = int(os.environ.get('PCP_LINUX_PORT', '8700'))
_jobs_lock = threading.Lock(); _jobs: dict[str, dict] = {}
_status_lock = threading.Lock(); _status_cache = {'value': None, 'at': 0.0}; _status_refreshing = False


def read_config():
    try:
        obj=json.loads(U1_CONFIG.read_text(encoding='utf-8')); ip=str(obj.get('ip','')).strip(); ipaddress.IPv4Address(ip); return {'ip':ip}
    except Exception: return {'ip':''}

def save_config(ip):
    U1_DIR.mkdir(parents=True,exist_ok=True); tmp=U1_CONFIG.with_suffix('.tmp')
    tmp.write_text(json.dumps({'ip':ip},ensure_ascii=False),encoding='utf-8'); tmp.replace(U1_CONFIG)

def printer_base():
    ip=read_config()['ip']
    if not ip: raise RuntimeError('No hay una IP de impresora configurada. Introduce la IP y pulsa Guardar IP manual.')
    return ip, f'http://{ip}:7125'

def http_json(url, timeout=2.0):
    req=Request(url,headers={'Accept':'application/json','User-Agent':f'PrintCostProfit-Linux/{APP_VERSION}'})
    with urlopen(req,timeout=timeout) as r: raw=r.read(8_000_000)
    return json.loads(raw.decode('utf-8-sig'))

def moonraker_info(ip, timeout=1.5):
    data=http_json(f'http://{ip}:7125/printer/info',timeout); result=data.get('result',data)
    if not isinstance(result,dict): raise RuntimeError('Moonraker devolvió una respuesta no válida.')
    return result

def query_status(base, timeout=1.6):
    data=http_json(base+'/printer/objects/query?print_stats&virtual_sdcard&webhooks',timeout)
    result=data.get('result',{}); status=result.get('status',result) if isinstance(result,dict) else {}
    if not isinstance(status,dict): raise RuntimeError('Moonraker no devolvió el estado de la impresora.')
    return status

def discover_networks():
    nets=set()
    # ip route provides actual interface/subnet data on Linux/WSL.
    try:
        out=subprocess.run(['ip','-o','-4','addr','show','scope','global'],capture_output=True,text=True,timeout=3).stdout
        for line in out.splitlines():
            m=re.search(r'\binet\s+(\d+\.\d+\.\d+\.\d+/\d+)',line)
            if m:
                n=ipaddress.ip_interface(m.group(1)).network
                if n.prefixlen >= 20: nets.add(n)
    except Exception: pass
    if not nets:
        try:
            host=socket.gethostbyname(socket.gethostname())
            if not host.startswith(('127.','169.254.')): nets.add(ipaddress.ip_network(host+'/24',strict=False))
        except Exception: pass
    return nets

def tcp_open(ip, port=7125, timeout=.20):
    try:
        with socket.create_connection((str(ip),port),timeout=timeout): return True
    except OSError: return False

def discover_printers():
    nets=discover_networks(); candidates=set()
    for net in nets:
        if net.num_addresses > 4096: continue
        candidates.update(str(ip) for ip in net.hosts())
    current=read_config()['ip']
    if current: candidates.add(current)
    found=[]
    with ThreadPoolExecutor(max_workers=96) as pool:
        futures={pool.submit(tcp_open,ip):ip for ip in candidates}
        try:
            for f in as_completed(futures,timeout=3):
                ip=futures[f]
                try:
                    if f.result():
                        try:
                            info=moonraker_info(ip,1.2)
                            found.append({'ip':ip,'hostname':info.get('hostname',''),'softwareVersion':info.get('software_version',''),'state':'ready','online':True})
                        except Exception: pass
                except Exception: pass
        except FuturesTimeoutError:
            pass
    found.sort(key=lambda x: tuple(int(p) for p in x['ip'].split('.')))
    if current and not any(x['ip']==current for x in found):
        found.append({'ip':current,'hostname':'','softwareVersion':'','state':'offline','online':False})
    if len(found)==1 and found[0]['online']: save_config(found[0]['ip'])
    return found

def write_log(entry):
    DATA.mkdir(parents=True,exist_ok=True)
    if not isinstance(entry,dict): raise ValueError('Entrada de registro no válida.')
    if not str(entry.get('message','')).strip(): raise ValueError('El mensaje del registro está vacío.')
    row=dict(entry); row.setdefault('timestamp',time.strftime('%Y-%m-%dT%H:%M:%S%z'))
    line=json.dumps(row,ensure_ascii=False,separators=(',',':'))+'\n'
    with open(LOG_PATH,'a',encoding='utf-8') as f:
        f.write(line); f.flush()
        if LOG_PATH.stat().st_size > 2_000_000:
            rotated=LOG_PATH.with_suffix('.log.1')
            try: rotated.unlink()
            except FileNotFoundError: pass
            LOG_PATH.replace(rotated)

def read_logs():
    if not LOG_PATH.exists(): return []
    out=[]
    with LOG_PATH.open(encoding='utf-8',errors='replace') as f:
        for line in f.readlines()[-500:]:
            try: out.append(json.loads(line))
            except Exception: pass
    return out

def set_job(job_id, payload):
    U1_DIR.mkdir(parents=True,exist_ok=True); path=U1_DIR/(job_id+'.json'); tmp=path.with_suffix('.tmp')
    tmp.write_text(json.dumps(payload,ensure_ascii=False),encoding='utf-8'); tmp.replace(path)

def read_job(job_id):
    path=U1_DIR/(job_id+'.json')
    if not path.exists(): return {'ok':True,'state':'starting','progress':0,'message':'Preparando lectura…'}
    return json.loads(path.read_text(encoding='utf-8'))

def safe_moonraker_file_url(base, candidate):
    parts=[quote(p,safe='') for p in candidate.strip('/').split('/') if p]
    return base+'/server/files/gcodes/'+'/'.join(parts)

def parse_gcode_file(path, filename, job_id):
    total=path.stat().st_size; read=0; grams_line=colors_line=types_line=None; thumbnail=''; thumb_area=0
    set_job(job_id,{'ok':True,'state':'reading','progress':0,'bytesRead':0,'totalBytes':total,'filename':filename,'message':'Conectando con Moonraker…'})
    # Inspect thumbnail header (up to 1 MiB) without loading the full file.
    with path.open('rb') as f: head=f.read(min(1_048_576,total))
    head_text=head.decode('utf-8','replace')
    for m in re.finditer(r'(?im)^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$',head_text):
        area=int(m.group(1))*int(m.group(2))
        if area<=thumb_area: continue
        b64=''.join(re.sub(r'^;\s?','',ln).strip() for ln in m.group(3).splitlines())
        try: raw=base64.b64decode(b64,validate=True)
        except Exception: continue
        mime='image/png' if raw.startswith(b'\x89PNG') else 'image/jpeg' if raw.startswith(b'\xff\xd8') else 'image/webp' if raw.startswith(b'RIFF') and raw[8:12]==b'WEBP' else ''
        if mime: thumbnail=f'data:{mime};base64,{b64}'; thumb_area=area
    # Stream entire file: metadata is not guaranteed to be in the header.
    with path.open('r',encoding='utf-8-sig',errors='replace') as f:
        for line in f:
            read += len(line.encode('utf-8',errors='replace'))
            if grams_line is None:
                m=re.match(r'(?i)^;\s*filament used \[g\]\s*=\s*(.+)$',line.rstrip('\r\n'))
                if m: grams_line=m.group(1).strip()
            if colors_line is None:
                m=re.match(r'(?i)^;\s*filament_colour\s*=\s*(.+)$',line.rstrip('\r\n'))
                if m: colors_line=m.group(1).strip()
            if types_line is None:
                m=re.match(r'(?i)^;\s*filament_type\s*=\s*(.+)$',line.rstrip('\r\n'))
                if m: types_line=m.group(1).strip()
            if read % (2*1024*1024) < 65536:
                pct=min(98,int(read*100/max(total,1)))
                set_job(job_id,{'ok':True,'state':'reading','progress':pct,'bytesRead':read,'totalBytes':total,'filename':filename,'message':f'Leyendo datos del G-code… {pct}%'})
    if not grams_line: raise RuntimeError('El G-code completo no contiene el metadato filament used [g].')
    try: grams=[float(x.strip().replace(',','.')) for x in grams_line.split(',')]
    except Exception: raise RuntimeError('El metadato de gramos del G-code no tiene un formato válido.')
    colors=colors_line.split(';') if colors_line else []; types=types_line.split(';') if types_line else []
    items=[]
    for i,g in enumerate(grams):
        color=colors[i].strip() if i<len(colors) else ''
        material=types[i].strip() if i<len(types) and types[i].strip() else 'Filamento'
        items.append({'extruder':i+1,'material':material,'name':(material+' '+color).strip(),'color':color,'colorName':color,'grams':max(0,g)})
    if not items: raise RuntimeError('No se encontraron filamentos en el G-code completo.')
    result={'ok':True,'state':'completed','progress':100,'bytesRead':total,'totalBytes':total,'filename':filename,'items':items,'totalGrams':round(sum(x['grams'] for x in items),2),'thumbnailData':thumbnail,'source':'G-code completo leído de Moonraker','message':'Lectura completada.'}
    set_job(job_id,result)


def moonraker_file_entries(listing):
    """Normalize Moonraker file-list responses across API versions."""
    result = listing.get('result', listing) if isinstance(listing, dict) else listing
    if isinstance(result, list):
        entries = result
    elif isinstance(result, dict):
        entries = result.get('files', [])
    else:
        entries = []
    return entries if isinstance(entries, list) else []


def read_gcode_worker(job_id, base, filename):
    temp=U1_DIR/(job_id+'.gcode.tmp')
    try:
        set_job(job_id,{'ok':True,'state':'reading','progress':0,'bytesRead':0,'totalBytes':0,'filename':filename,'message':'Conectando con Moonraker…'})
        listing=http_json(base+'/server/files/list?root=gcodes',8)
        entries=moonraker_file_entries(listing)
        resolved=filename
        for ent in entries:
            if isinstance(ent, str):
                entry_path = ent
            elif isinstance(ent, dict):
                entry_path = ent.get('path') or ent.get('filename') or ent.get('name') or ''
            else:
                continue
            p=str(entry_path).replace('\\\\','/').strip()
            if Path(p).name.casefold()==filename.casefold():
                resolved=p
                break
        candidates=[resolved,filename]
        if resolved.lower().startswith('gcodes/'): candidates.append(resolved[7:])
        last=None; response=None
        for cand in dict.fromkeys(candidates):
            try:
                req=Request(safe_moonraker_file_url(base,cand),headers={'User-Agent':f'PrintCostProfit-Linux/{APP_VERSION}'})
                response=urlopen(req,timeout=30); break
            except Exception as e: last=e
        if response is None: raise RuntimeError('Moonraker no encontró el G-code. Último error: '+str(last))
        with response, temp.open('wb') as out:
            total=int(response.headers.get('Content-Length') or 0); read=0
            while True:
                chunk=response.read(1024*1024)
                if not chunk: break
                out.write(chunk); read+=len(chunk)
                pct=min(99,int(read*100/total)) if total else 0
                set_job(job_id,{'ok':True,'state':'reading','progress':pct,'bytesRead':read,'totalBytes':total,'filename':filename,'message':f'Leyendo datos del G-code… {pct}%'})
        set_job(job_id,{'ok':True,'state':'parsing','progress':99,'filename':filename,'message':'Analizando los metadatos de los filamentos…'})
        parse_gcode_file(temp,filename,job_id)
    except Exception as e:
        set_job(job_id,{'ok':False,'state':'error','progress':0,'filename':filename,'error':str(e),'message':'No se pudo leer el G-code.'})
    finally:
        try: temp.unlink()
        except OSError: pass

def refresh_status_worker(ip):
    global _status_refreshing
    try:
        status=query_status(f'http://{ip}:7125',8)
        value={'ok':True,'status':status,'updatedAt':time.strftime('%Y-%m-%dT%H:%M:%S%z')}
    except Exception as e:
        value={'ok':False,'error':str(e),'updatedAt':time.strftime('%Y-%m-%dT%H:%M:%S%z')}
    with _status_lock:
        _status_cache['value']=value; _status_cache['at']=time.time(); _status_refreshing=False
    try:
        DATA.mkdir(parents=True,exist_ok=True); STATUS_CACHE.write_text(json.dumps(value,ensure_ascii=False),encoding='utf-8')
    except OSError: pass

def get_status():
    global _status_refreshing
    ip=read_config()['ip']
    if not ip: return {'ok':True,'online':None,'connecting':True,'printerOffline':False,'error':'Configura la IP de la Snapmaker U1.','cached':True,'updatedAt':None}
    with _status_lock:
        if _status_cache['value'] is None and STATUS_CACHE.exists():
            try: _status_cache['value']=json.loads(STATUS_CACHE.read_text(encoding='utf-8')); _status_cache['at']=time.time()-10
            except Exception: pass
        if time.time()-_status_cache['at']>5 and not _status_refreshing:
            _status_refreshing=True; threading.Thread(target=refresh_status_worker,args=(ip,),daemon=True).start()
        cached=_status_cache['value']
    if cached is None: return {'ok':True,'online':None,'connecting':True,'printerOffline':False,'error':'Esperando la primera respuesta de la Snapmaker U1.','cached':True,'updatedAt':None}
    if cached.get('ok'): return {'ok':True,'status':cached['status'],'cached':True,'updatedAt':cached.get('updatedAt')}
    return {'ok':True,'online':False,'printerOffline':True,'error':cached.get('error','Impresora sin conexión'),'cached':True,'updatedAt':cached.get('updatedAt')}

class Handler(SimpleHTTPRequestHandler):
    protocol_version='HTTP/1.1'
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def log_message(self,fmt,*args): sys.stdout.write('[%s] %s\n'%(self.log_date_time_string(),fmt%args))
    def send_json(self,obj,status=200):
        raw=json.dumps(obj,ensure_ascii=False,separators=(',',':')).encode('utf-8')
        self.send_response(status); self.send_header('Content-Type','application/json; charset=utf-8'); self.send_header('Cache-Control','no-store'); self.send_header('Content-Length',str(len(raw))); self.end_headers(); self.wfile.write(raw)
    def body_json(self):
        n=int(self.headers.get('Content-Length','0') or 0)
        if n>10_000_000: raise ValueError('La solicitud supera el tamaño permitido.')
        raw=self.rfile.read(n) if n else b'{}'
        obj=json.loads(raw.decode('utf-8-sig') or '{}')
        if not isinstance(obj,dict): raise ValueError('El cuerpo JSON debe ser un objeto.')
        return obj
    def do_GET(self):
        path=urlparse(self.path).path
        try:
            if path=='/api/storage/snapshot': return self.send_json(STORE.snapshot())
            if path=='/api/storage/health':
                integrity=STORE.integrity_check(); backups=STORE.list_backups(); files=sorted(BACKUPS.glob('printcostprofit_*.db'),key=lambda p:p.stat().st_mtime,reverse=True)
                ok=bool(integrity.get('ok'))
                return self.send_json({'ok':ok,'version':APP_VERSION,'database':str(DB),'databaseExists':DB.exists(),'databaseBytes':DB.stat().st_size if DB.exists() else 0,'integrity':integrity,'backupDirectory':str(BACKUPS),'backupCount':len(files),'latestBackup':time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(files[0].stat().st_mtime)) if files else None,'maxBackups':backups.get('maxBackups',100),'backupIntervalMinutes':backups.get('backupIntervalMinutes',5),'checkedAt':time.strftime('%Y-%m-%d %H:%M:%S')},200 if ok else 500)
            if path=='/api/storage/backups': return self.send_json(STORE.list_backups())
            if path=='/api/version': return self.send_json({'ok':True,'version':APP_VERSION,'build':'v'+APP_VERSION,'logsApi':True})
            if path=='/api/logs': return self.send_json({'ok':True,'entries':read_logs(),'path':str(LOG_PATH),'exists':LOG_PATH.exists()})
            if path=='/api/u1/config':
                q=parse_qs(urlparse(self.path).query)
                requested=(q.get('ip') or [''])[0].strip()
                if requested:
                    ipaddress.IPv4Address(requested)
                    save_config(requested)
                    # Reset cached state so a previous printer is never shown for the new IP.
                    global _status_refreshing
                    with _status_lock:
                        _status_cache['value']=None; _status_cache['at']=0.0; _status_refreshing=False
                    try:
                        info=moonraker_info(requested,2.0)
                        return self.send_json({'ok':True,'ip':requested,'online':True,'printerOffline':False,'message':'IP comprobada y guardada para el puente.','printerInfo':info})
                    except Exception as e:
                        return self.send_json({'ok':True,'ip':requested,'online':False,'printerOffline':True,'error':str(e),'message':'IP guardada. La impresora está fuera de línea.'})
                return self.send_json({'ok':True,'ip':read_config()['ip']})
            if path=='/api/u1/discover':
                printers=discover_printers(); current=read_config()['ip']
                if len([p for p in printers if p['online']])==1:
                    chosen=next(p for p in printers if p['online']); save_config(chosen['ip']); current=chosen['ip']
                    return self.send_json({'ok':True,'ip':current,'printers':printers,'message':'Impresora detectada y configurada automáticamente.','printerInfo':{'hostname':chosen['hostname'],'software_version':chosen['softwareVersion']}})
                if len(printers)>1: return self.send_json({'ok':True,'ip':current or None,'printers':printers,'message':'Se encontraron varias impresoras. Selecciona cuál quieres usar.'})
                return self.send_json({'ok':True,'ip':None,'printers':[],'message':'No se encontró ninguna impresora Moonraker en la red IPv4 detectada.'})
            if path=='/api/u1/printer':
                ip=read_config()['ip']
                if not ip: return self.send_json({'ok':True,'online':False,'printerOffline':True,'ip':'','error':'No hay impresora configurada.'})
                try:
                    info=moonraker_info(ip,2); st=query_status(f'http://{ip}:7125',2); ps=st.get('print_stats',{})
                    return self.send_json({'ok':True,'online':True,'printerOffline':False,'ip':ip,'baseUrl':f'http://{ip}:7125','name':info.get('hostname',''),'softwareVersion':info.get('software_version',''),'state':ps.get('state',''),'filename':ps.get('filename',''),'message':'Impresora conectada y verificada.'})
                except Exception as e: return self.send_json({'ok':True,'online':False,'printerOffline':True,'ip':ip,'error':str(e),'message':'La impresora configurada está fuera de línea. La IP se conserva.'})
            if path=='/api/u1/status': return self.send_json(get_status())
            if path=='/api/u1/filaments':
                q=parse_qs(urlparse(self.path).query); fn=''
                if q.get('filenameB64'):
                    token=q['filenameB64'][0].replace('-','+').replace('_','/'); token+='='*((4-len(token)%4)%4); fn=base64.b64decode(token,validate=True).decode('utf-8')
                else: fn=q.get('filename',[''])[0]
                fn=fn.strip()
                if not fn or '/' in fn or '\\' in fn or '..' in fn: raise ValueError('Nombre de G-code no válido.')
                ip,base=printer_base(); job_id=uuid.uuid4().hex
                threading.Thread(target=read_gcode_worker,args=(job_id,base,fn),daemon=True).start()
                return self.send_json({'ok':True,'started':True,'jobId':job_id,'filename':fn,'message':'Lectura completa iniciada en segundo plano.'})
            if path=='/api/u1/filaments/progress':
                q=parse_qs(urlparse(self.path).query); job_id=(q.get('id') or [''])[0]
                if not re.fullmatch(r'[a-fA-F0-9]{32}',job_id): raise ValueError('Identificador de lectura no válido.')
                return self.send_json(read_job(job_id))
            if path.startswith('/api/'): return self.send_json({'ok':False,'error':'Este endpoint todavía no está implementado en Linux: '+path},501)
            if path in ('/','/index.html'):
                integrated=ROOT/'Print_Cost_Profit_Integrado.html'
                self.path='/Print_Cost_Profit_Integrado.html' if integrated.is_file() else '/Print_Cost_Profit.html'
            return super().do_GET()
        except Exception as e:
            status=502 if path.startswith('/api/u1/') else 500
            return self.send_json({'ok':False,'error':str(e)},status)
    def do_POST(self):
        path=urlparse(self.path).path
        try:
            if path=='/api/logs':
                write_log(self.body_json()); return self.send_json({'ok':True})
            body=self.body_json()
            if path=='/api/storage/import': return self.send_json(STORE.import_values(body.get('values') or {},only_if_empty=True))
            if path=='/api/storage/write':
                try: return self.send_json(STORE.write(body.get('key',''),body.get('value',''),body.get('expectedRevision',0)))
                except RevisionConflict as e: return self.send_json({'ok':False,'error':str(e),'conflict':True},409)
            if path=='/api/storage/remove':
                try: return self.send_json(STORE.remove(body.get('key',''),body.get('expectedRevision',0)))
                except RevisionConflict as e: return self.send_json({'ok':False,'error':str(e),'conflict':True},409)
            if path=='/api/storage/backup/create': return self.send_json(STORE.backup_now())
            if path=='/api/storage/backup/config': return self.send_json(STORE.backup_config(body.get('intervalMinutes'),body.get('maxBackups')))
            if path=='/api/storage/backup/validate': return self.send_json(STORE.validate_backup(body.get('name','')))
            if path=='/api/storage/backup/restore': return self.send_json(STORE.restore_backup(body.get('name','')))
            if path.startswith('/api/'): return self.send_json({'ok':False,'error':'Este endpoint todavía no está implementado en Linux: '+path},501)
            return self.send_json({'ok':False,'error':'Método no permitido.'},405)
        except Exception as e: return self.send_json({'ok':False,'error':str(e)},409 if isinstance(e,RevisionConflict) else 500)
    def do_DELETE(self):
        path=urlparse(self.path).path
        if path=='/api/logs':
            try:
                for p in (LOG_PATH,LOG_PATH.with_suffix('.log.1')):
                    try: p.unlink()
                    except FileNotFoundError: pass
                return self.send_json({'ok':True})
            except Exception as e: return self.send_json({'ok':False,'error':str(e)},500)
        return self.send_json({'ok':False,'error':'Método no permitido.'},405)
    def translate_path(self,path):
        # Reject traversal, including encoded separators and symlink escapes.
        raw=unquote(urlparse(path).path).lstrip('/')
        candidate=(ROOT/raw).resolve()
        try: candidate.relative_to(ROOT.resolve())
        except ValueError: return str(ROOT/'__not_found__')
        return str(candidate)
    def end_headers(self):
        self.send_header('X-Content-Type-Options','nosniff')
        super().end_headers()

def main():
    DATA.mkdir(parents=True,exist_ok=True); U1_DIR.mkdir(parents=True,exist_ok=True)
    server=ThreadingHTTPServer((HOST,PORT),Handler); server.daemon_threads=True
    print(f'Print Cost & Profit Linux v{APP_VERSION}')
    print(f'Servidor local: http://{HOST}:{PORT}/')
    print(f'Datos SQLite: {DB}')
    print('API de almacenamiento, copias de seguridad, logs y Snapmaker U1 disponible.')
    print('Escucha únicamente en 127.0.0.1. Ctrl+C para detener.')
    try: server.serve_forever(poll_interval=.25)
    except KeyboardInterrupt: print('\nCerrando servidor…')
    finally: server.server_close()

if __name__=='__main__': main()
