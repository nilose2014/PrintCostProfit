#!/usr/bin/env python3
"""Smoke tests for the Print Cost & Profit Linux server and SQLite API.

Run from the repository root with:
    python3 -m unittest discover -s linux/tests -v
Each test gets an isolated data directory and an ephemeral localhost port.
"""
from __future__ import annotations

import json
import os
from pathlib import Path
from html.parser import HTMLParser
import socket
import subprocess
import sys
import tempfile
import time
import unittest
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[2]
SERVER = ROOT / "linux" / "pcp_linux_server.py"


class LocalAssetParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.assets = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for attr in ("src", "href"):
            value = attrs.get(attr, "")
            if value and not value.startswith(("http://", "https://", "data:", "#", "javascript:")):
                self.assets.append(value.split("?", 1)[0].split("#", 1)[0])


class LinuxServerSmokeTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="pcp-linux-test-")
        self.data_home = Path(self.temp.name) / "xdg"
        with socket.socket() as sock:
            sock.bind(("127.0.0.1", 0))
            self.port = sock.getsockname()[1]
        self.base = f"http://127.0.0.1:{self.port}"
        env = os.environ.copy()
        env["XDG_DATA_HOME"] = str(self.data_home)
        env["PCP_LINUX_PORT"] = str(self.port)
        self.process = subprocess.Popen(
            [sys.executable, str(SERVER)],
            cwd=ROOT,
            env=env,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        deadline = time.monotonic() + 12
        while time.monotonic() < deadline:
            if self.process.poll() is not None:
                self.fail("El servidor Linux terminó antes de iniciar.")
            try:
                self.request("GET", "/api/version")
                break
            except (URLError, TimeoutError, OSError):
                time.sleep(0.15)
        else:
            self.fail("El servidor Linux no respondió en 12 segundos.")

    def tearDown(self):
        if getattr(self, "process", None) and self.process.poll() is None:
            self.process.terminate()
            try:
                self.process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.process.kill()
                self.process.wait(timeout=5)
        if getattr(self, "temp", None):
            self.temp.cleanup()

    def request(self, method, path, payload=None, expected_status=200):
        data = None if payload is None else json.dumps(payload).encode("utf-8")
        req = Request(
            self.base + path,
            data=data,
            method=method,
            headers={"Content-Type": "application/json; charset=utf-8"} if data is not None else {},
        )
        try:
            with urlopen(req, timeout=4) as response:
                status, raw = response.status, response.read()
        except HTTPError as exc:
            status, raw = exc.code, exc.read()
        if status != expected_status:
            self.fail(
                f"{method} {path}: HTTP {status}, esperado {expected_status}; "
                f"respuesta={raw[:500]!r}"
            )
        if not raw:
            return {}
        return json.loads(raw.decode("utf-8"))

    def test_version_health_and_main_assets(self):
        version = self.request("GET", "/api/version")
        expected = (ROOT / "VERSION").read_text(encoding="utf-8").strip()
        self.assertTrue(version.get("ok"))
        self.assertEqual(version.get("version"), expected)
        health = self.request("GET", "/api/storage/health")
        self.assertTrue(health.get("ok"), health)
        self.assertTrue(health.get("databaseExists"))
        self.assertEqual(health.get("version"), expected)
        page = urlopen(self.base + "/", timeout=4).read().decode("utf-8")
        self.assertIn("Print Cost", page)
        parser = LocalAssetParser()
        parser.feed(page)
        missing = []
        for asset in sorted(set(parser.assets)):
            path = asset.lstrip("/")
            if not path or path.startswith(("mailto:", "tel:")):
                continue
            local_path = ROOT / path
            if not local_path.is_file():
                missing.append(asset)
                continue
            response = urlopen(self.base + "/" + path, timeout=4)
            self.assertEqual(response.status, 200, asset)
        self.assertEqual(missing, [], "Recursos locales que faltan: " + ", ".join(missing))
        translations = urlopen(self.base + "/js/traducciones.js", timeout=4).read()
        self.assertGreater(len(translations), 100_000)
        license_config = (ROOT / "licencias-config.js").read_text(encoding="utf-8")
        self.assertRegex(license_config, r"enabled\s*:\s*false")

    def test_sqlite_write_snapshot_conflict_and_remove(self):
        initial = self.request("GET", "/api/storage/snapshot")
        self.assertEqual(initial["count"], 0)
        saved = self.request("POST", "/api/storage/write", {
            "key": "smoke.test", "value": "valor-ñ", "expectedRevision": 0
        })
        self.assertTrue(saved["ok"])
        self.assertEqual(saved["revision"], 1)
        snapshot = self.request("GET", "/api/storage/snapshot")
        self.assertEqual(snapshot["values"]["smoke.test"], "valor-ñ")
        self.assertEqual(snapshot["revisions"]["smoke.test"], 1)
        self.request("POST", "/api/storage/write", {
            "key": "smoke.test", "value": "sobrescritura", "expectedRevision": 0
        }, expected_status=409)
        removed = self.request("POST", "/api/storage/remove", {
            "key": "smoke.test", "expectedRevision": 1
        })
        self.assertTrue(removed["ok"])
        self.assertNotIn("smoke.test", self.request("GET", "/api/storage/snapshot")["values"])

    def test_import_and_protect_existing_data(self):
        imported = self.request("POST", "/api/storage/import", {
            "values": {"smoke.import": "dato", "smoke.number": 12}
        })
        self.assertEqual(imported["values"]["smoke.import"], "dato")
        self.assertEqual(imported["values"]["smoke.number"], "12")
        self.request("POST", "/api/storage/import", {
            "values": {"smoke.import": "reemplazado"}
        }, expected_status=500)
        self.assertEqual(
            self.request("GET", "/api/storage/snapshot")["values"]["smoke.import"],
            "dato",
        )

    def test_backup_validation_and_restore(self):
        self.request("POST", "/api/storage/write", {
            "key": "smoke.restore", "value": "original", "expectedRevision": 0
        })
        backup = self.request("POST", "/api/storage/backup/create")
        self.assertTrue(backup["ok"])
        self.assertTrue(backup["name"].startswith("printcostprofit_"))
        checked = self.request("POST", "/api/storage/backup/validate", {"name": backup["name"]})
        self.assertTrue(checked["ok"], checked)
        self.request("POST", "/api/storage/write", {
            "key": "smoke.restore", "value": "cambio", "expectedRevision": 1
        })
        restored = self.request("POST", "/api/storage/backup/restore", {"name": backup["name"]})
        self.assertTrue(restored["ok"], restored)
        snapshot = self.request("GET", "/api/storage/snapshot")
        self.assertEqual(snapshot["values"]["smoke.restore"], "original")
        backups = self.request("GET", "/api/storage/backups")
        self.assertGreaterEqual(len(backups["backups"]), 2)

    def test_invalid_printer_ip_and_unknown_api(self):
        self.request("GET", "/api/u1/config?" + urlencode({"ip": "not-an-ip"}), expected_status=400)
        response = self.request("GET", "/api/u1/status", expected_status=502)
        self.assertFalse(response.get("ok"))
        self.request("GET", "/api/not-implemented", expected_status=501)


if __name__ == "__main__":
    unittest.main(verbosity=2)
