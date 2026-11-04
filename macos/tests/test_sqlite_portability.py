#!/usr/bin/env python3
"""Direct cross-platform SQLite persistence checks; does not start HTTP server."""
import tempfile, unittest, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))
from pcp_sqlite_store import SQLiteStore, RevisionConflict

class SQLitePortabilityTests(unittest.TestCase):
    def test_write_read_revision_conflict_and_integrity(self):
        with tempfile.TemporaryDirectory(prefix='pcp-macos-sqlite-') as tmp:
            root = Path(tmp)
            store = SQLiteStore(root / 'data' / 'printcostprofit.db', root / 'backups', backup_interval_seconds=0)
            first = store.write('macos.smoke', 'ok', 0)
            self.assertEqual(first['revision'], 1)
            self.assertEqual(store.get_item('macos.smoke')['value'], 'ok')
            with self.assertRaises(RevisionConflict):
                store.write('macos.smoke', 'wrong', 0)
            second = store.write('macos.smoke', 'updated', 1)
            self.assertEqual(second['revision'], 2)
            self.assertEqual(store.snapshot()['values']['macos.smoke'], 'updated')
            self.assertTrue(store.integrity_check()['ok'])

if __name__ == '__main__': unittest.main(verbosity=2)
