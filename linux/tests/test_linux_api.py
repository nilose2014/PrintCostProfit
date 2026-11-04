import json, os, socket, subprocess, sys, tempfile, time, unittest
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError

ROOT=Path(__file__).resolve().parents[2]
SERVER=ROOT/'linux'/'pcp_linux_server.py'

class LinuxApiSmokeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp=tempfile.TemporaryDirectory(prefix='pcp-linux-test-')
        with socket.socket() as sock:
            sock.bind(('127.0.0.1',0)); cls.port=sock.getsockname()[1]
        env=os.environ.copy(); env['XDG_DATA_HOME']=str(Path(cls.tmp.name)/'xdg'); env['PCP_LINUX_PORT']=str(cls.port)
        cls.proc=subprocess.Popen([sys.executable,str(SERVER)],cwd=ROOT,env=env,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        cls.base=f'http://127.0.0.1:{cls.port}'
        for _ in range(80):
            try:
                with urlopen(cls.base+'/api/version',timeout=.3): break
            except Exception: time.sleep(.1)
        else: raise RuntimeError('El servidor Linux no arrancó para las pruebas.')

    @classmethod
    def tearDownClass(cls):
        cls.proc.terminate()
        try: cls.proc.wait(timeout=5)
        except subprocess.TimeoutExpired: cls.proc.kill()
        cls.tmp.cleanup()

    def request(self,path,method='GET',body=None):
        data=None if body is None else json.dumps(body).encode()
        req=Request(self.base+path,data=data,method=method,headers={'Content-Type':'application/json'})
        try:
            with urlopen(req,timeout=5) as r: return r.status,json.loads(r.read().decode())
        except HTTPError as e: return e.code,json.loads(e.read().decode())

    def test_version(self):
        status,data=self.request('/api/version'); self.assertEqual(status,200); self.assertEqual(data['version'],'1.4'); self.assertTrue(data['logsApi'])

    def test_snapshot_and_revision_control(self):
        status,snap=self.request('/api/storage/snapshot'); self.assertEqual(status,200)
        status,w=self.request('/api/storage/write','POST',{'key':'test-key','value':'hello','expectedRevision':0}); self.assertEqual(status,200); self.assertEqual(w['revision'],1)
        status,conflict=self.request('/api/storage/write','POST',{'key':'test-key','value':'bad','expectedRevision':0}); self.assertEqual(status,409); self.assertTrue(conflict['conflict'])
        status,snap=self.request('/api/storage/snapshot'); self.assertEqual(snap['values']['test-key'],'hello')

    def test_logs_api(self):
        self.assertEqual(self.request('/api/logs','POST',{'level':'info','module':'test','message':'smoke'})[0],200)
        status,data=self.request('/api/logs'); self.assertEqual(status,200); self.assertTrue(any(x.get('message')=='smoke' for x in data['entries']))
        self.assertEqual(self.request('/api/logs','DELETE')[0],200)

    def test_backup_api(self):
        status,data=self.request('/api/storage/backup/create','POST',{}); self.assertEqual(status,200); self.assertTrue(data['ok'])
        status,items=self.request('/api/storage/backups'); self.assertEqual(status,200); self.assertTrue(any(x['name']==data['name'] for x in items['backups']))

    def test_u1_config_saved_when_printer_is_offline(self):
        status,data=self.request('/api/u1/config?ip=127.0.0.1')
        self.assertEqual(status,200); self.assertTrue(data['ok']); self.assertEqual(data['ip'],'127.0.0.1'); self.assertFalse(data['online'])
        status,config=self.request('/api/u1/config')
        self.assertEqual(status,200); self.assertEqual(config['ip'],'127.0.0.1')

    def test_static_app_served(self):
        with urlopen(self.base+'/',timeout=5) as r:
            body=r.read().decode('utf-8'); self.assertEqual(r.status,200); self.assertIn('Print Cost',body)


    def test_moonraker_file_listing_shapes(self):
        # Verify the normalization used by read_gcode_worker for both Moonraker
        # response formats: result=[...] and result={files:[...]}.
        import ast
        source=SERVER.read_text(encoding='utf-8')
        tree=ast.parse(source)
        fn=next(n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name=='moonraker_file_entries')
        module=ast.Module(body=[fn],type_ignores=[])
        ns={}
        exec(compile(module,str(SERVER),'exec'),ns)
        normalize=ns['moonraker_file_entries']
        expected=[{'path':'folder/test.gcode'}]
        self.assertEqual(normalize({'result':expected}),expected)
        self.assertEqual(normalize({'result':{'files':expected}}),expected)
        self.assertEqual(normalize(expected),expected)
        self.assertEqual(normalize({'result':None}),[])


if __name__=='__main__': unittest.main()
