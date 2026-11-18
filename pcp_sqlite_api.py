#!/usr/bin/env python3
"""Local SQLite adapter for Print Cost & Profit. Uses only Python stdlib."""
import sys, json, os, time, traceback
from pathlib import Path
from pcp_sqlite_store import SQLiteStore, StorageError, RevisionConflict, extract_legacy_values

def emit(obj): print(json.dumps(obj, ensure_ascii=True, separators=(',', ':')), flush=True)
def serve(db_arg, backup_arg):
    """Persistent line-oriented worker: one process and one store per server session."""
    store = SQLiteStore(Path(db_arg), Path(backup_arg))
    emit({'ok': True, 'ready': True})
    operations = {
        'snapshot': lambda body: store.snapshot(),
        'import': lambda body: store.import_values(body.get('values') or {}, only_if_empty=True),
        'write': lambda body: store.write(body.get('key', ''), body.get('value', ''), body.get('expectedRevision', 0)),
        'remove': lambda body: store.remove(body.get('key', ''), body.get('expectedRevision', 0)),
        'write_batch': lambda body: store.write_batch(body.get('items') or []),
        'integrity': lambda body: store.integrity_check(),
        'backup_list': lambda body: store.list_backups(),
        'backup_now': lambda body: store.backup_now(),
        'backup_config': lambda body: store.backup_config(body.get('intervalMinutes'), body.get('maxBackups')),
        'backup_validate': lambda body: store.validate_backup(body.get('name', '')),
        'backup_restore': lambda body: store.restore_backup(body.get('name', '')),
    }
    for raw in sys.stdin:
        try:
            request = json.loads(raw)
            op = str(request.get('op', ''))
            body = request.get('body') or {}
            if op == 'shutdown':
                emit({'ok': True, 'shutdown': True})
                return 0
            fn = operations.get(op)
            if fn is None:
                emit({'ok': False, 'error': 'Operación SQLite desconocida.'})
                continue
            started = time.perf_counter()
            try:
                result = fn(body)
                target = os.environ.get('PCP_SQLITE_TIMING_LOG')
                if target:
                    try:
                        with open(target, 'a', encoding='utf-8') as fh:
                            fh.write(time.strftime('%Y-%m-%d %H:%M:%S') + f' [SQLiteWorker] op={op} operation_ms={(time.perf_counter()-started)*1000:.1f}\n')
                    except OSError: pass
                emit(result)
            except RevisionConflict as exc:
                emit({'ok': False, 'error': str(exc), 'conflict': True,
                      'currentRevision': exc.revision, 'currentExists': exc.exists})
            except Exception as exc:
                emit({'ok': False, 'error': str(exc)})
        except Exception as exc:
            emit({'ok': False, 'error': 'Solicitud del adaptador no válida: ' + str(exc)})
    return 0

def main():
    if len(sys.argv) >= 4 and sys.argv[1] == 'serve':
        return serve(sys.argv[2], sys.argv[3])
    if len(sys.argv) < 4:
        emit({'ok':False,'error':'Uso interno inválido del adaptador SQLite.'}); return 2
    op, db_arg, backup_arg = sys.argv[1:4]
    request_file = sys.argv[4] if len(sys.argv)>4 else ''
    db=Path(db_arg); backup_dir=Path(backup_arg)
    started = time.perf_counter()
    try:
        if op == 'init':
            legacy = Path(sys.argv[5]) if len(sys.argv)>5 and sys.argv[5] else None
            existed = db.exists()
            store=SQLiteStore(db, backup_dir)
            if not existed and legacy and legacy.exists():
                try:
                    with legacy.open('r',encoding='utf-8-sig') as f: raw=json.load(f)
                    vals=extract_legacy_values(raw)
                    if vals: store.import_values(vals, only_if_empty=True)
                except (json.JSONDecodeError, UnicodeError, OSError) as e:
                    raise StorageError('No se pudo migrar datos.json; el archivo original se conserva: '+str(e))
            emit({'ok':True,'database':str(db),'snapshot':store.snapshot(),'integrity':store.integrity_check()}); return 0
        phase = time.perf_counter()
        store=SQLiteStore(db, backup_dir)
        init_ms = (time.perf_counter()-phase)*1000
        body={}
        if request_file and request_file != '-':
            with open(request_file,'r',encoding='utf-8-sig') as f: body=json.load(f)
        phase = time.perf_counter()
        if op == 'snapshot': result = store.snapshot()
        elif op == 'import': result=store.import_values(body.get('values') or {},only_if_empty=True)
        elif op == 'write': result=store.write(body.get('key',''),body.get('value',''),body.get('expectedRevision',0))
        elif op == 'remove': result=store.remove(body.get('key',''),body.get('expectedRevision',0))
        elif op == 'write_batch': result=store.write_batch(body.get('items') or [])
        elif op == 'integrity': result=store.integrity_check()
        elif op == 'backup_list': result=store.list_backups()
        elif op == 'backup_now': result=store.backup_now()
        elif op == 'backup_config': result=store.backup_config(body.get('intervalMinutes'), body.get('maxBackups'))
        elif op == 'backup_validate': result=store.validate_backup(body.get('name',''))
        elif op == 'backup_restore': result=store.restore_backup(body.get('name',''))
        else: raise StorageError('Operación SQLite desconocida.')
        operation_ms = (time.perf_counter()-phase)*1000
        target = os.environ.get('PCP_SQLITE_TIMING_LOG')
        if target:
            try:
                with open(target,'a',encoding='utf-8') as fh:
                    fh.write(time.strftime('%Y-%m-%d %H:%M:%S') + f' [SQLite] op={op} init_ms={init_ms:.1f} operation_ms={operation_ms:.1f} total_ms={(time.perf_counter()-started)*1000:.1f}\n')
            except OSError: pass
        emit(result)
        return 0
    except RevisionConflict as e:
        emit({'ok':False,'error':str(e),'conflict':True,'currentRevision':e.revision,'currentExists':e.exists}); return 3
    except Exception as e:
        emit({'ok':False,'error':str(e)}); return 1
if __name__=='__main__': sys.exit(main())
