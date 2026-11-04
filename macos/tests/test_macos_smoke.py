#!/usr/bin/env python3
"""Focused macOS smoke test for the shared Python server and SQLite API."""
from __future__ import annotations
import json, os, socket, subprocess, sys, tempfile, time
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

ROOT = Path(__file__).resolve().parents[2]
SERVER = ROOT / "linux" / "pcp_linux_server.py"

def main():
    with tempfile.TemporaryDirectory(prefix="pcp-macos-smoke-") as tmp:
        with socket.socket() as sock:
            sock.bind(("127.0.0.1", 0))
            port = sock.getsockname()[1]
        env = os.environ.copy()
        env["XDG_DATA_HOME"] = str(Path(tmp) / "Application Support")
        env["PCP_LINUX_PORT"] = str(port)
        log = Path(tmp) / "server.log"
        with log.open("w+") as output:
            proc = subprocess.Popen([sys.executable, str(SERVER)], cwd=ROOT, env=env,
                                    stdout=output, stderr=subprocess.STDOUT)
            try:
                base = f"http://127.0.0.1:{port}"
                deadline = time.monotonic() + 30
                last_error = None
                while time.monotonic() < deadline:
                    if proc.poll() is not None:
                        break
                    try:
                        with urlopen(base + "/api/version", timeout=1) as response:
                            version = json.loads(response.read().decode("utf-8"))
                        break
                    except (URLError, TimeoutError, OSError, ValueError) as exc:
                        last_error = repr(exc)
                        time.sleep(.25)
                else:
                    raise RuntimeError("El servidor no respondió en 30 segundos: " + str(last_error))
                if proc.poll() is not None:
                    raise RuntimeError("El servidor terminó con código " + str(proc.returncode))
                expected = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
                assert version.get("version") == expected, version
                with urlopen(base + "/api/storage/health", timeout=5) as response:
                    health = json.loads(response.read().decode("utf-8"))
                assert health.get("ok") and health.get("databaseExists"), health
                payload = json.dumps({"key":"macos.smoke","value":"ok","expectedRevision":0}).encode()
                request = Request(base + "/api/storage/write", data=payload, method="POST",
                                  headers={"Content-Type":"application/json"})
                with urlopen(request, timeout=5) as response:
                    saved = json.loads(response.read().decode("utf-8"))
                assert saved.get("ok") and saved.get("revision") == 1, saved
                with urlopen(base + "/api/storage/snapshot", timeout=5) as response:
                    snapshot = json.loads(response.read().decode("utf-8"))
                assert snapshot.get("values", {}).get("macos.smoke") == "ok", snapshot
                print("macOS server, HTTP API, SQLite persistence and version checks: OK")
            except Exception:
                output.flush()
                print("----- server output -----", file=sys.stderr)
                print(log.read_text(encoding="utf-8", errors="replace"), file=sys.stderr)
                raise
            finally:
                if proc.poll() is None:
                    proc.terminate()
                    try: proc.wait(timeout=5)
                    except subprocess.TimeoutExpired:
                        proc.kill()
                        proc.wait(timeout=5)

if __name__ == "__main__":
    main()
