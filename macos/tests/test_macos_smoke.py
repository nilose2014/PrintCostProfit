#!/usr/bin/env python3
"""Focused macOS smoke test for the shared Python server and SQLite API."""
from __future__ import annotations
import json, os, socket, subprocess, sys, tempfile, time
from pathlib import Path
import http.client


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
            proc = subprocess.Popen([sys.executable, "-u", str(SERVER)], cwd=ROOT, env=env,
                                    stdout=output, stderr=subprocess.STDOUT)
            try:
                deadline = time.monotonic() + 30
                last_error = None
                version = None
                while time.monotonic() < deadline:
                    if proc.poll() is not None:
                        break
                    try:
                        conn = http.client.HTTPConnection("127.0.0.1", port, timeout=2)
                        conn.request("GET", "/api/version", headers={"Connection":"close"})
                        response = conn.getresponse()
                        raw = response.read()
                        if response.status != 200:
                            raise RuntimeError("HTTP " + str(response.status) + ": " + raw.decode("utf-8", "replace"))
                        version = json.loads(raw.decode("utf-8"))
                        conn.close()
                        break
                    except (OSError, TimeoutError, ValueError, RuntimeError) as exc:
                        last_error = repr(exc)
                        try: conn.close()
                        except Exception: pass
                        time.sleep(.25)
                if version is None:
                    raise RuntimeError("El servidor no respondió en 30 segundos; proceso=" + str(proc.poll()) + "; último error=" + str(last_error))
                if proc.poll() is not None:
                    raise RuntimeError("El servidor terminó con código " + str(proc.returncode))
                expected = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
                assert version.get("version") == expected, version
                def get_json(path):
                    conn = http.client.HTTPConnection("127.0.0.1", port, timeout=5)
                    conn.request("GET", path, headers={"Connection":"close"})
                    response = conn.getresponse()
                    raw = response.read()
                    conn.close()
                    if response.status != 200: raise RuntimeError("GET "+path+" HTTP "+str(response.status)+": "+raw.decode("utf-8","replace"))
                    return json.loads(raw.decode("utf-8"))
                def post_json(path, obj):
                    body = json.dumps(obj).encode("utf-8")
                    conn = http.client.HTTPConnection("127.0.0.1", port, timeout=5)
                    conn.request("POST", path, body=body, headers={"Content-Type":"application/json","Connection":"close"})
                    response = conn.getresponse()
                    raw = response.read()
                    conn.close()
                    if response.status != 200: raise RuntimeError("POST "+path+" HTTP "+str(response.status)+": "+raw.decode("utf-8","replace"))
                    return json.loads(raw.decode("utf-8"))
                health = get_json("/api/storage/health")
                assert health.get("ok") and health.get("databaseExists"), health
                saved = post_json("/api/storage/write", {"key":"macos.smoke","value":"ok","expectedRevision":0})
                assert saved.get("ok") and saved.get("revision") == 1, saved
                snapshot = get_json("/api/storage/snapshot")
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
