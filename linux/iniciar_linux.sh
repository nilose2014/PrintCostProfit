#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"
if ! command -v python3 >/dev/null 2>&1; then
  echo "ERROR: falta Python 3. Instala con: sudo apt update && sudo apt install python3"
  read -r -p "Pulsa Intro para cerrar..." _ || true
  exit 1
fi
python3 - <<'PY' || { echo "ERROR: tu Python no incluye SQLite3. Instala python3-sqlite3 (si está disponible) o el paquete python3 completo."; exit 1; }
import sqlite3
print('Python y SQLite disponibles.')
PY
python3 "$SCRIPT_DIR/pcp_linux_server.py"
