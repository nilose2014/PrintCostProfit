"""SQLite storage core for Print Cost & Profit. Connections are explicitly closed.

The PowerShell local server calls this module through pcp_sqlite_api.py.
"""
from __future__ import annotations
import json, os, sqlite3, time, shutil
from contextlib import closing
from pathlib import Path
from typing import Any

SCHEMA_VERSION = 1

def _timing_log(message: str) -> None:
    """Append optional diagnostic timings; never let logging affect storage."""
    target = os.environ.get('PCP_SQLITE_TIMING_LOG')
    if not target:
        return
    try:
        with open(target, 'a', encoding='utf-8') as fh:
            fh.write(time.strftime('%Y-%m-%d %H:%M:%S') + ' [SQLite] ' + message + '\n')
    except OSError:
        pass

class StorageError(RuntimeError): pass
class RevisionConflict(StorageError): pass

class SQLiteStore:
    def __init__(self, db_path: str | Path, backup_dir: str | Path | None = None,
                 backup_interval_seconds: int = 300, max_backups: int = 100):
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.backup_dir = Path(backup_dir) if backup_dir else self.db_path.parent / 'backups'
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        self.backup_interval_seconds = max(0, int(backup_interval_seconds))
        self.max_backups = max(1, int(max_backups))
        self._init_db()
        with closing(self._connect()) as con:
            self.backup_interval_seconds = max(60, min(86400, self._meta_int(con, 'backup_interval_seconds') or self.backup_interval_seconds))
            self.max_backups = max(5, min(500, self._meta_int(con, 'max_backups') or self.max_backups))

    def _connect(self):
        con = sqlite3.connect(str(self.db_path), timeout=15, isolation_level=None)
        con.row_factory = sqlite3.Row
        con.execute('PRAGMA busy_timeout=15000')
        con.execute('PRAGMA foreign_keys=ON')
        con.execute('PRAGMA journal_mode=WAL')
        con.execute('PRAGMA synchronous=FULL')
        return con

    def _init_db(self):
        with closing(self._connect()) as con:
            con.execute('''CREATE TABLE IF NOT EXISTS kv (
                key TEXT PRIMARY KEY NOT NULL,
                value TEXT NOT NULL,
                revision INTEGER NOT NULL DEFAULT 1,
                updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
            )''')
            con.execute('''CREATE TABLE IF NOT EXISTS meta (
                key TEXT PRIMARY KEY NOT NULL,
                value TEXT NOT NULL
            )''')
            con.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('schema_version',?)", (str(SCHEMA_VERSION),))
            con.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('global_revision','0')")
            con.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('last_backup_epoch','0')")
            con.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('backup_interval_seconds','300')")
            con.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('max_backups','100')")

    def _meta_int(self, con, key):
        row = con.execute('SELECT value FROM meta WHERE key=?', (key,)).fetchone()
        return int(row['value']) if row else 0

    def _backup_if_due(self, con):
        now = time.time()
        last = self._meta_int(con, 'last_backup_epoch')
        if self.db_path.exists() and self.db_path.stat().st_size and now - last >= self.backup_interval_seconds:
            # SQLite's backup API gives a consistent snapshot even when WAL is active.
            stamp = time.strftime('%Y%m%d_%H%M%S', time.localtime(now))
            target = self.backup_dir / f'printcostprofit_{stamp}_{int(now*1000)%1000000:06d}.db'
            backup_started = time.perf_counter()
            dest = sqlite3.connect(str(target), timeout=15)
            try:
                con.backup(dest)
                dest.commit()
            finally:
                dest.close()
            _timing_log(f'backup duration_ms={((time.perf_counter()-backup_started)*1000):.1f} file={target.name}')
            con.execute("UPDATE meta SET value=? WHERE key='last_backup_epoch'", (str(int(now)),))
            self._prune_backups()

    def backup_config(self, interval_minutes=None, max_backups=None):
        with closing(self._connect()) as con:
            if interval_minutes is not None:
                interval_minutes = max(1, min(1440, int(interval_minutes)))
                con.execute("UPDATE meta SET value=? WHERE key='backup_interval_seconds'", (str(interval_minutes * 60),))
            if max_backups is not None:
                max_backups = max(5, min(500, int(max_backups)))
                con.execute("UPDATE meta SET value=? WHERE key='max_backups'", (str(max_backups),))
            interval = max(60, min(86400, self._meta_int(con, 'backup_interval_seconds') or 300))
            limit = max(5, min(500, self._meta_int(con, 'max_backups') or 100))
        self.backup_interval_seconds, self.max_backups = interval, limit
        self._prune_backups()
        return {'ok': True, 'backupIntervalMinutes': interval // 60, 'maxBackups': limit}

    def _prune_backups(self):
        backups = sorted(self.backup_dir.glob('printcostprofit_*.db'), key=lambda p: p.stat().st_mtime, reverse=True)
        for old in backups[self.max_backups:]:
            try: old.unlink()
            except OSError: pass

    def backup_now(self):
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        now = time.time()
        stamp = time.strftime('%Y%m%d_%H%M%S', time.localtime(now))
        target = self.backup_dir / f'printcostprofit_{stamp}_{int(now*1000)%1000000:06d}.db'
        with closing(self._connect()) as con:
            dest = sqlite3.connect(str(target), timeout=15)
            try:
                con.backup(dest)
                dest.commit()
            finally: dest.close()
            con.execute("UPDATE meta SET value=? WHERE key='last_backup_epoch'", (str(int(now)),))
        check = self.validate_backup(target.name)
        if not check.get('ok'):
            try: target.unlink()
            except OSError: pass
            raise StorageError('La copia recién creada no ha superado la validación: ' + str(check.get('result')))
        self._prune_backups()
        return {'ok': True, 'name': target.name, 'path': str(target), 'bytes': target.stat().st_size,
                'createdAt': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(now)), 'integrity': check['result']}

    def validate_backup(self, name):
        name = Path(str(name)).name
        if not name.startswith('printcostprofit_') or not name.endswith('.db'):
            raise StorageError('Nombre de copia no válido.')
        target = self.backup_dir / name
        if not target.is_file(): raise StorageError('No se encuentra esa copia de seguridad.')
        with closing(sqlite3.connect(str(target), timeout=10)) as con:
            result = [r[0] for r in con.execute('PRAGMA integrity_check')]
            count = con.execute('SELECT COUNT(*) FROM kv').fetchone()[0] if result == ['ok'] else 0
        return {'ok': result == ['ok'], 'name': name, 'result': result, 'count': count,
                'bytes': target.stat().st_size, 'modifiedAt': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(target.stat().st_mtime))}

    def list_backups(self):
        items=[]
        for p in sorted(self.backup_dir.glob('printcostprofit_*.db'), key=lambda p:p.stat().st_mtime, reverse=True):
            try: items.append({'name':p.name,'bytes':p.stat().st_size,'modifiedAt':time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(p.stat().st_mtime))})
            except OSError: pass
        with closing(self._connect()) as con:
            interval=max(60,min(86400,self._meta_int(con,'backup_interval_seconds') or 300))
            limit=max(5,min(500,self._meta_int(con,'max_backups') or 100))
        return {'ok':True,'backups':items,'backupIntervalMinutes':interval//60,'maxBackups':limit,'backupDirectory':str(self.backup_dir)}

    def restore_backup(self, name):
        """Restore a validated backup only after creating a fresh pre-restore backup."""
        checked = self.validate_backup(name)
        if not checked.get('ok'):
            raise StorageError('La copia seleccionada no supera PRAGMA integrity_check.')
        source = self.backup_dir / Path(str(name)).name
        # Always preserve the current database before replacing it.
        safety = self.backup_now()
        temp = self.db_path.with_name(self.db_path.name + '.restore.tmp')
        try:
            with closing(sqlite3.connect(f'file:{source.as_posix()}?mode=ro', uri=True, timeout=15)) as src:
                with closing(sqlite3.connect(str(temp), timeout=15)) as dst:
                    src.backup(dst)
                    dst.commit()
            with closing(sqlite3.connect(str(temp), timeout=10)) as verify:
                result = [r[0] for r in verify.execute('PRAGMA integrity_check')]
                if result != ['ok']:
                    raise StorageError('La copia temporal no ha superado la validación final: ' + ', '.join(result))
                verify.execute('SELECT COUNT(*) FROM kv').fetchone()
            # Close all handles before replacement; this operation is only called by the local server.
            for suffix in ('-wal', '-shm'):
                sidecar = Path(str(self.db_path) + suffix)
                if sidecar.exists():
                    try: sidecar.unlink()
                    except OSError: pass
            os.replace(str(temp), str(self.db_path))
            # Reopen through the store and verify the active database after replacement.
            final = self.integrity_check()
            if not final.get('ok'):
                raise StorageError('La base restaurada no supera la validación final.')
            return {'ok': True, 'restored': Path(str(name)).name, 'safetyBackup': safety.get('name'),
                    'count': self.snapshot().get('count', 0), 'integrity': final}
        finally:
            try:
                if temp.exists(): temp.unlink()
            except OSError: pass

    def snapshot(self):
        with closing(self._connect()) as con:
            rows = con.execute('SELECT key,value,revision FROM kv ORDER BY key').fetchall()
            return {'ok': True, 'count': len(rows), 'revision': self._meta_int(con,'global_revision'),
                    'values': {r['key']: r['value'] for r in rows},
                    'revisions': {r['key']: r['revision'] for r in rows}}

    def get_item(self, key: str):
        with closing(self._connect()) as con:
            row = con.execute('SELECT value,revision FROM kv WHERE key=?', (str(key),)).fetchone()
            return None if row is None else {'value': row['value'], 'revision': row['revision']}

    def write(self, key: str, value: str, expected_revision: int):
        key, value = str(key), str(value)
        if not key or len(key) > 500: raise StorageError('Clave de almacenamiento no válida.')
        with closing(self._connect()) as con:
            self._backup_if_due(con)
            con.execute('BEGIN IMMEDIATE')
            row = con.execute('SELECT revision FROM kv WHERE key=?', (key,)).fetchone()
            actual = int(row['revision']) if row else 0
            if actual != int(expected_revision):
                con.rollback(); raise RevisionConflict(f'El dato ha cambiado en otra ventana (revisión actual {actual}).')
            next_rev = actual + 1
            con.execute('''INSERT INTO kv(key,value,revision,updated_at)
                VALUES(?,?,?,strftime('%Y-%m-%dT%H:%M:%fZ','now'))
                ON CONFLICT(key) DO UPDATE SET value=excluded.value,revision=excluded.revision,updated_at=excluded.updated_at''',
                (key, value, next_rev))
            con.execute("UPDATE meta SET value=CAST(value AS INTEGER)+1 WHERE key='global_revision'")
            con.commit()
            return {'ok': True, 'revision': next_rev, 'globalRevision': self.snapshot()['revision']}

    def remove(self, key: str, expected_revision: int):
        key = str(key)
        with closing(self._connect()) as con:
            self._backup_if_due(con)
            con.execute('BEGIN IMMEDIATE')
            row = con.execute('SELECT revision FROM kv WHERE key=?', (key,)).fetchone()
            actual = int(row['revision']) if row else 0
            if actual != int(expected_revision):
                con.rollback(); raise RevisionConflict(f'El dato ha cambiado en otra ventana (revisión actual {actual}).')
            con.execute('DELETE FROM kv WHERE key=?', (key,))
            con.execute("UPDATE meta SET value=CAST(value AS INTEGER)+1 WHERE key='global_revision'")
            con.commit()
            return {'ok': True, 'revision': 0, 'globalRevision': self.snapshot()['revision']}

    def import_values(self, values: dict[str, Any], only_if_empty: bool = True):
        with closing(self._connect()) as con:
            con.execute('BEGIN IMMEDIATE')
            count = con.execute('SELECT COUNT(*) FROM kv').fetchone()[0]
            if only_if_empty and count:
                con.rollback(); raise StorageError('La base de datos ya contiene datos; no se importó para evitar sobrescribirlos.')
            for key, value in values.items():
                con.execute('INSERT OR IGNORE INTO kv(key,value,revision) VALUES(?,?,1)', (str(key), value if isinstance(value,str) else json.dumps(value,ensure_ascii=False,separators=(',',':'))))
            con.execute("UPDATE meta SET value=CAST(value AS INTEGER)+1 WHERE key='global_revision'")
            con.commit()
        return self.snapshot()

    def integrity_check(self):
        with closing(self._connect()) as con:
            result = [r[0] for r in con.execute('PRAGMA integrity_check')]
            return {'ok': result == ['ok'], 'result': result, 'count': self.snapshot()['count']}

def extract_legacy_values(obj: Any) -> dict[str, str]:
    """Accept current datos.json envelope, old flat localStorage export, or snapshot response."""
    if not isinstance(obj, dict): raise StorageError('El archivo de origen no contiene un objeto JSON.')
    if isinstance(obj.get('values'), dict):
        values = obj['values']
    elif isinstance(obj.get('values'), list):
        values = dict(obj['values'])
    else:
        # Older exports may be a flat map of localStorage key -> JSON/text value.
        values = {k:v for k,v in obj.items() if k not in {'schema','revision','revisions','count','ok'}}
    result = {}
    for k, v in values.items():
        if isinstance(v, str): result[str(k)] = v
        else: result[str(k)] = json.dumps(v, ensure_ascii=False, separators=(',',':'))
    return result

def migrate_json(source: str | Path, db_path: str | Path, backup_dir: str | Path | None = None):
    source, db_path = Path(source), Path(db_path)
    # Read/validate the source completely before creating/importing anything.
    with source.open('r', encoding='utf-8-sig') as f: raw = json.load(f)
    values = extract_legacy_values(raw)
    store = SQLiteStore(db_path, backup_dir)
    if store.snapshot()['count']:
        raise StorageError('La base de datos destino ya contiene datos. No se modificó.')
    result = store.import_values(values, only_if_empty=True)
    check = store.integrity_check()
    if not check['ok'] or check['count'] != len(values):
        raise StorageError(f'La verificación posterior falló: {check}')
    return {'ok': True, 'source': str(source), 'database': str(db_path), 'imported_keys': len(values),
            'integrity': check, 'snapshot_count': result['count']}
