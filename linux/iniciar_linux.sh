#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"
if ! command -v python3 >/dev/null 2>&1; then
  echo "ERROR: falta Python 3. En Ubuntu/WSL ejecuta: sudo apt update && sudo apt install -y python3"
  exit 1
fi
python3 - <<'PY'
import sqlite3, sys
print(f"Python {sys.version.split()[0]} y SQLite {sqlite3.sqlite_version} disponibles.")
PY
python3 -m py_compile pcp_sqlite_store.py linux/pcp_linux_server.py linux/integracion_orca.py
python3 -m unittest discover -s linux/tests -v
exec python3 "$SCRIPT_DIR/pcp_linux_server.py"
