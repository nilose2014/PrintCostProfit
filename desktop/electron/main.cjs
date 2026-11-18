'use strict';

const { app, BrowserWindow, shell, ipcMain, dialog, screen } = require('electron');
const { spawn, execFile } = require('node:child_process');
const { promisify } = require('node:util');
const execFileAsync = promisify(execFile);
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');
const net = require('node:net');
const os = require('node:os');
const { fileURLToPath } = require('node:url');

const APP_NAME = 'Print Cost & Profit';
const PUBLIC_VERSION = '2.0';
const APP_URL = 'http://127.0.0.1:8700/';
const APP_ORIGIN = new URL(APP_URL).origin;
const isWindows = process.platform === 'win32';

app.setName(APP_NAME);
app.setAppUserModelId('com.printcostprofit.desktop');

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  let mainWindow = null;
  let splashWindow = null;
  let starting = false;
  let integrationInboxWatcher = null;
  let pendingIntegrationPayload = null;
  let orcaProcess = null;
  let orcaExternalProcess = null;
  let orcaWindowHandle = null;
  let orcaWindowProcessId = null;
  let orcaExecutable = null;
  let orcaResizeTimer = null;
  let directStorageDb = null;
  let shutdownInProgress = false;


  // Almacenamiento directo de Electron: el renderer conserva su API localStorage,
  // pero las lecturas/escrituras se ejecutan en el proceso principal mediante IPC.
  // Comparte el archivo y el control optimista de revisiones con el servidor Orca/U1.
  function getDirectStorageDb() {
    if (directStorageDb) return directStorageDb;
    const base = process.env.LOCALAPPDATA || app.getPath('userData');
    const dbPath = path.join(base, 'PrintCostProfit_SQLite_v1.249', 'data', 'printcostprofit.db');
    if (!fs.existsSync(dbPath)) throw new Error(`No se encuentra la base SQLite existente: ${dbPath}`);
    directStorageDb = new DatabaseSync(dbPath);
    directStorageDb.exec('PRAGMA busy_timeout=15000; PRAGMA foreign_keys=ON;');
    return directStorageDb;
  }
  function directSnapshot() {
    const db = getDirectStorageDb();
    const rows = db.prepare('SELECT key,value,revision FROM kv ORDER BY key').all();
    const values = Object.create(null), revisions = Object.create(null);
    for (const row of rows) { values[String(row.key)] = String(row.value); revisions[String(row.key)] = Number(row.revision) || 0; }
    const meta = db.prepare("SELECT value FROM meta WHERE key='global_revision'").get();
    return {ok:true,count:rows.length,revision:Number(meta && meta.value) || 0,values,revisions};
  }
  function directWriteBatch(items) {
    if (!Array.isArray(items) || !items.length || items.length > 50) throw new Error('Lote de almacenamiento no válido (1-50 operaciones).');
    const db = getDirectStorageDb(), results = [], conflicts = [], seen = new Set();
    db.exec('BEGIN IMMEDIATE');
    try {
      const select = db.prepare('SELECT revision FROM kv WHERE key=?');
      const put = db.prepare("INSERT INTO kv(key,value,revision,updated_at) VALUES(?,?,?,strftime('%Y-%m-%dT%H:%M:%fZ','now')) ON CONFLICT(key) DO UPDATE SET value=excluded.value,revision=excluded.revision,updated_at=excluded.updated_at");
      const del = db.prepare('DELETE FROM kv WHERE key=?');
      const bump = db.prepare("UPDATE meta SET value=CAST(value AS INTEGER)+1 WHERE key='global_revision'");
      for (const item of items) {
        if (!item || typeof item !== 'object') throw new Error('Operación del lote no válida.');
        const key = String(item.key || ''), operation = String(item.operation || 'write');
        if (!key || key.length > 500 || seen.has(key) || !['write','remove'].includes(operation)) throw new Error('Clave u operación duplicada/no válida en el lote.');
        seen.add(key);
        const row = select.get(key), actual = row ? Number(row.revision) : 0;
        if (actual !== Number(item.expectedRevision || 0)) { conflicts.push({key,currentRevision:actual,currentExists:!!row}); continue; }
        if (operation === 'remove') { del.run(key); results.push({key,revision:0,operation}); }
        else { const next = actual + 1; put.run(key,String(item.value ?? ''),next); results.push({key,revision:next,operation}); }
        bump.run();
      }
      db.exec('COMMIT');
    } catch (error) { try { db.exec('ROLLBACK'); } catch (_) {} throw error; }
    const meta = db.prepare("SELECT value FROM meta WHERE key='global_revision'").get();
    return {ok:true,results,conflicts,globalRevision:Number(meta && meta.value) || 0};
  }
  ipcMain.on('pcp-storage:snapshot-sync', event => {
    try { event.returnValue = directSnapshot(); }
    catch (error) { event.returnValue = {ok:false,error:error.message}; }
  });
  ipcMain.handle('pcp-storage:request', async (_event, method, urlPath, body) => {
    try {
      if (method === 'GET' && urlPath === '/api/storage/snapshot') return directSnapshot();
      if (method === 'POST' && urlPath === '/api/storage/batch') return directWriteBatch(body && body.items);
      throw new Error(`Operación IPC de almacenamiento no admitida: ${method} ${urlPath}`);
    } catch (error) {
      if (error && /busy|locked/i.test(error.message || '')) writeLog(`[SQLite IPC] base ocupada: ${error.message}`);
      const wrapped = new Error(error.message || String(error));
      wrapped.status = error && error.currentRevision !== undefined ? 409 : 500;
      throw wrapped;
    }
  });


  // API local de escritorio: reemplaza los antiguos endpoints HTTP del puente.
  // Todo se ejecuta en el proceso principal y usa la misma base SQLite.
  const localLogFile = () => path.join(app.getPath('userData'), 'printcostprofit_app.jsonl');
  const backupDirectory = () => path.join((process.env.LOCALAPPDATA || app.getPath('userData')), 'PrintCostProfit_SQLite_v1.249', 'data', 'backups');
  function readLocalLogs() {
    const file=localLogFile(); if(!fs.existsSync(file)) return [];
    return fs.readFileSync(file,'utf8').split(/\r?\n/).filter(Boolean).slice(-1000).flatMap(line=>{try{const item=JSON.parse(line);return item&&item.level==='error'?[item]:[];}catch(_){return [];}}).slice(-500);
  }
  function appendLocalLog(entry) {
    if(!entry || !entry.message) throw new Error('El mensaje del registro está vacío.');
    // El registro de actividad se reserva exclusivamente para fallos y errores.
    if(String(entry.level||'error').toLowerCase()!=='error') return {ok:true,ignored:true,reason:'errors-only'};
    fs.mkdirSync(path.dirname(localLogFile()),{recursive:true});
    const normalized={...entry,level:'error',timestamp:entry.timestamp||new Date().toISOString()};
    try { const tail=fs.existsSync(localLogFile())?fs.readFileSync(localLogFile(),'utf8').split(/\r?\n/).filter(Boolean).slice(-12):[]; const now=Date.parse(normalized.timestamp)||Date.now(); for(const line of tail){try{const old=JSON.parse(line);if(old.level==='error'&&old.module===normalized.module&&old.message===normalized.message&&Math.abs(now-(Date.parse(old.timestamp)||0))<2500)return {ok:true,deduplicated:true};}catch(_){}} } catch(_){}
    fs.appendFileSync(localLogFile(),JSON.stringify(normalized)+'\n','utf8');
    return {ok:true};
  }
  function listDirectBackups() {
    const dir=backupDirectory(); fs.mkdirSync(dir,{recursive:true});
    const backups=fs.readdirSync(dir,{withFileTypes:true}).filter(x=>x.isFile()&&/^printcostprofit_.*\.db$/i.test(x.name)).map(x=>{const p=path.join(dir,x.name),st=fs.statSync(p);return {name:x.name,bytes:st.size,modifiedAt:st.mtime.toLocaleString('sv-SE')};}).sort((a,b)=>b.modifiedAt.localeCompare(a.modifiedAt));
    let interval=300,limit=100;try{const db=getDirectStorageDb();const rows=db.prepare("SELECT key,value FROM meta WHERE key IN ('backup_interval_seconds','max_backups')").all();for(const r of rows){if(r.key==='backup_interval_seconds')interval=Number(r.value)||300;if(r.key==='max_backups')limit=Number(r.value)||100;}}catch(_){}
    return {ok:true,backups,backupDirectory:dir,backupIntervalMinutes:Math.max(1,Math.round(interval/60)),maxBackups:limit};
  }
  function validateDirectBackup(name) {
    const safe=path.basename(String(name||'')); if(!/^printcostprofit_.*\.db$/i.test(safe))throw new Error('Nombre de copia no válido.');
    const file=path.join(backupDirectory(),safe); if(!fs.existsSync(file))throw new Error('No se encuentra esa copia de seguridad.');
    const db=new DatabaseSync(file); try {
      const result=db.prepare('PRAGMA integrity_check').all().map(x=>Object.values(x)[0]);
      const count=result[0]==='ok'?Number(db.prepare('SELECT COUNT(*) AS n FROM kv').get().n):0;
      return {ok:result.length===1&&result[0]==='ok',name:safe,result,count,bytes:fs.statSync(file).size,modifiedAt:fs.statSync(file).mtime.toLocaleString('sv-SE')};
    } finally {db.close();}
  }
  function createDirectBackup() {
    const dir=backupDirectory();fs.mkdirSync(dir,{recursive:true});
    const db=getDirectStorageDb(); try{db.exec('PRAGMA wal_checkpoint(FULL)');}catch(_){}
    db.close();directStorageDb=null;
    const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z').replace('T','_');
    const name=`printcostprofit_${stamp}_${Date.now()%1000000}.db`,target=path.join(dir,name);
    fs.copyFileSync(path.join((process.env.LOCALAPPDATA||app.getPath('userData')),'PrintCostProfit_SQLite_v1.249','data','printcostprofit.db'),target);
    const check=validateDirectBackup(name);
    if(!check.ok){fs.unlinkSync(target);throw new Error('La copia creada no ha superado la comprobación de integridad.');}
    const active=getDirectStorageDb();active.prepare("INSERT INTO meta(key,value) VALUES('last_backup_epoch',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(String(Math.floor(Date.now()/1000)));
    const max=listDirectBackups().maxBackups;for(const old of listDirectBackups().backups.slice(max)){try{fs.rmSync(path.join(dir,old.name),{force:true});}catch(_){}}
    return {ok:true,name,path:target,bytes:check.bytes,createdAt:new Date().toLocaleString('sv-SE'),integrity:'ok'};
  }
  function restoreDirectBackup(name) {
    const check=validateDirectBackup(name);if(!check.ok)throw new Error('La copia seleccionada no supera la comprobación de integridad.');
    const safety=createDirectBackup();
    const base=(process.env.LOCALAPPDATA||app.getPath('userData')),dbPath=path.join(base,'PrintCostProfit_SQLite_v1.249','data','printcostprofit.db');
    if(directStorageDb){try{directStorageDb.close();}catch(_){}directStorageDb=null;}
    for(const suffix of ['-wal','-shm']){try{fs.rmSync(dbPath+suffix,{force:true});}catch(_){}}
    fs.copyFileSync(path.join(backupDirectory(),path.basename(name)),dbPath);
    const finalDb=getDirectStorageDb();const integrity=finalDb.prepare('PRAGMA integrity_check').all().map(x=>Object.values(x)[0]);
    if(integrity.length!==1||integrity[0]!=='ok')throw new Error('La base restaurada no ha superado la comprobación final.');
    return {ok:true,restored:path.basename(name),safetyBackup:safety.name,count:Number(finalDb.prepare('SELECT COUNT(*) AS n FROM kv').get().n),integrity:{ok:true,result:integrity}};
  }
  ipcMain.handle('pcp-local-api:request',async(_event,method,rawPath,body)=>{
    const parsed=new URL(String(rawPath||'/'), 'http://pcp.local'), route=parsed.pathname, verb=String(method||'GET').toUpperCase();
    try {
      if(route==='/api/storage/snapshot'&&verb==='GET')return directSnapshot();
      if(route==='/api/version'&&verb==='GET')return {ok:true,version:PUBLIC_VERSION,build:'v'+PUBLIC_VERSION,desktopDirect:true};
      if(route==='/api/logs'){
        if(verb==='POST')return appendLocalLog(body);
        if(verb==='GET')return {ok:true,entries:readLocalLogs(),path:localLogFile(),exists:fs.existsSync(localLogFile())};
        if(verb==='DELETE'){try{fs.writeFileSync(localLogFile(),'','utf8');}catch(_){}return {ok:true};}
      }
      if(route==='/api/storage/health'&&verb==='GET'){
        const db=getDirectStorageDb(), integrity=db.prepare('PRAGMA integrity_check').all().map(x=>Object.values(x)[0]);
        const dbPath=path.join((process.env.LOCALAPPDATA||app.getPath('userData')),'PrintCostProfit_SQLite_v1.249','data','printcostprofit.db');
        const backups=listDirectBackups();
        return {ok:integrity.length===1&&integrity[0]==='ok',version:PUBLIC_VERSION,database:dbPath,databaseExists:fs.existsSync(dbPath),databaseBytes:fs.statSync(dbPath).size,integrity:{ok:integrity.length===1&&integrity[0]==='ok',result:integrity},backupDirectory:backups.backupDirectory,backupCount:backups.backups.length,latestBackup:backups.backups[0]?.modifiedAt||null,maxBackups:100,backupIntervalMinutes:5,checkedAt:new Date().toLocaleString('sv-SE')};
      }
      if(route==='/api/storage/backups'&&verb==='GET')return listDirectBackups();
      if(route==='/api/storage/backup/create'&&verb==='POST')return createDirectBackup();
      if(route==='/api/storage/backup/auto'&&verb==='POST'){
        const db=getDirectStorageDb(),meta=db.prepare("SELECT key,value FROM meta WHERE key IN ('last_backup_epoch','backup_interval_seconds')").all(),values=Object.fromEntries(meta.map(x=>[x.key,Number(x.value)||0]));
        if(Date.now()/1000-(values.last_backup_epoch||0)<Math.max(60,values.backup_interval_seconds||300))return {ok:true,skipped:true};
        return createDirectBackup();
      }
      if(route==='/api/storage/backup/config'&&verb==='POST'){
        const db=getDirectStorageDb(),interval=Math.max(1,Math.min(1440,Number(body?.intervalMinutes)||5)),limit=Math.max(5,Math.min(500,Number(body?.maxBackups)||100));
        db.prepare("INSERT INTO meta(key,value) VALUES('backup_interval_seconds',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(String(interval*60));
        db.prepare("INSERT INTO meta(key,value) VALUES('max_backups',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(String(limit));
        return {ok:true,backupIntervalMinutes:interval,maxBackups:limit};
      }
      if(route==='/api/storage/backup/validate'&&verb==='POST')return validateDirectBackup(body?.name);
      if(route==='/api/storage/backup/restore'&&verb==='POST')return restoreDirectBackup(body?.name);
      if(route==='/api/printers/logs'&&verb==='GET')return {ok:true,entries:readPrinterEvents(parsed.searchParams.get('ip')||'')};
      throw new Error(`Operación local no compatible: ${verb} ${route}`);
    } catch(error) { const e=new Error(error.message||String(error));e.status=500;throw e; }
  });


  function integrationInboxPath() {
    return path.join(process.env.LOCALAPPDATA || app.getPath('userData'), 'PrintCostProfit', 'integration-inbox');
  }
  function deliverIntegrationPayload(payload) {
    if(!payload||!Array.isArray(payload.filaments))return;
    if(!mainWindow||mainWindow.isDestroyed()||mainWindow.webContents.isLoading()){pendingIntegrationPayload=payload;return;}
    mainWindow.webContents.executeJavaScript("window.dispatchEvent(new CustomEvent('pcp-integration-data',{detail:"+JSON.stringify(payload)+"}));")
      .then(()=>{
        writeLog(`[GCODE] Datos importados desde Orca: ${payload.filename||'archivo sin nombre'}.`);
        // No forzar RedrawWindow/UpdateWindow sobre las superficies nativas.
        // Ese repintado cruzado provocaba el oscurecimiento de la ventana Electron.
      })
      .catch(error=>{pendingIntegrationPayload=payload;writeLog(`[GCODE] No se pudo entregar el G-code a la interfaz: ${error.message}`);});
  }
  function processIntegrationInbox() {
    const dir=integrationInboxPath();try{fs.mkdirSync(dir,{recursive:true});}catch(error){writeLog(`[GCODE] No se pudo preparar la bandeja de integración: ${error.message}`);return;}
    let files=[];try{files=fs.readdirSync(dir).filter(name=>/^gcode_.*\.json$/i.test(name)).sort();}catch(_){}
    for(const name of files){
      const file=path.join(dir,name);
      try{const payload=JSON.parse(fs.readFileSync(file,'utf8'));deliverIntegrationPayload(payload);fs.rmSync(file,{force:true});}
      catch(error){writeLog(`[GCODE] Archivo de integración no válido (${name}): ${error.message}`);try{fs.renameSync(file,file+'.error');}catch(_){}}
    }
  }
  function startIntegrationInboxWatcher() {
    if(integrationInboxWatcher)return;
    const dir=integrationInboxPath();fs.mkdirSync(dir,{recursive:true});
    try{integrationInboxWatcher=fs.watch(dir,()=>setTimeout(processIntegrationInbox,120));}
    catch(error){writeLog(`[GCODE] No se pudo vigilar la bandeja de integración: ${error.message}`);}
    processIntegrationInbox();
  }

  function projectRoot() {
    return app.isPackaged
      ? path.join(process.resourcesPath, 'pcp-app')
      : path.resolve(__dirname, '..', '..');
  }

  function logFile() {
    return path.join(app.getPath('userData'), 'desktop-shell.log');
  }


  // Acceso directo a Moonraker desde Electron. Las consultas de impresoras
  // no pasan por el servidor HttpListener/PowerShell de localhost.
  const directPrinterCache = new Map();
  const directHistoryCache = new Map();
  const directPrinterInflight = new Map();
  const directGcodeJobs = new Map();
  const directGcodeJobsByKey = new Map();
  const directPrinterLastLog = new Map();
  const printerEventLogFile = () => path.join(app.getPath('userData'),'printer-events.jsonl');
  function appendPrinterEvent(ip,value) {
    const status=value?.status||{},stats=status.print_stats||{},state=String(stats.state||status.webhooks?.state||'unknown'),filename=String(stats.filename||'');
    const previous=directPrinterLastLog.get(ip);
    if(previous&&previous.state===state&&previous.filename===filename)return;
    const entry={ip,state,filename,at:new Date().toISOString(),online:true};
    directPrinterLastLog.set(ip,{state,filename});
    try{fs.mkdirSync(path.dirname(printerEventLogFile()),{recursive:true});fs.appendFileSync(printerEventLogFile(),JSON.stringify(entry)+'\n','utf8');}catch(_){}
  }
  function readPrinterEvents(ip) {
    const file=printerEventLogFile();if(!fs.existsSync(file))return [];
    return fs.readFileSync(file,'utf8').split(/\r?\n/).filter(Boolean).flatMap(line=>{try{const e=JSON.parse(line);return !ip||e.ip===ip?[e]:[];}catch(_){return [];}}).slice(-500);
  }
  function defaultPrinterIp() {
    try{const db=getDirectStorageDb();for(const key of ['pcp_u1_manual_ip_v180','pcp_u1_manual_ip_v178','pcp_u1_manual_ip','pcp_printers_detail_selected_ip']){const row=db.prepare('SELECT value FROM kv WHERE key=?').get(key);if(row){const value=String(row.value||'').trim();if(/^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/.test(value))return value;}}}catch(_){}return '';
  }
  function validatePrinterIp(ip) {
    const value = String(ip || '').trim();
    if (!/^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/.test(value)) throw new Error('Dirección IPv4 de impresora no válida.');
    return value;
  }
  function printerBase(ip) { return `http://${validatePrinterIp(ip)}:7125`; }
  async function moonrakerFetch(ip, route, options = {}) {
    if (typeof route !== 'string' || !route.startsWith('/') || route.startsWith('//')) throw new Error('Ruta Moonraker no válida.');
    const controller = options.controller || new AbortController();
    const timeout = setTimeout(() => controller.abort(new Error('Tiempo de espera agotado al conectar con la impresora.')), Math.max(1000, Number(options.timeout) || 6500));
    try {
      const response = await fetch(printerBase(ip) + route, { method: options.method || 'GET', headers: options.headers || {}, body: options.body, signal: controller.signal, cache: 'no-store' });
      if (!response.ok) { let detail=''; try { detail=(await response.text()).slice(0,400); } catch (_) {} throw new Error(`Moonraker HTTP ${response.status}${detail ? ': '+detail : ''}`); }
      return response;
    } finally { clearTimeout(timeout); }
  }
  async function moonrakerJson(ip, route, options={}) { return (await moonrakerFetch(ip,route,options)).json(); }
  async function directPrinterStatus(ip, force=false) {
    const key=validatePrinterIp(ip), old=directPrinterCache.get(key);
    if (!force && old && Date.now()-old.at<1200) return {...old.value,cached:true};
    if (directPrinterInflight.has(key)) return directPrinterInflight.get(key);
    const task=(async()=>{
      const listed=await moonrakerJson(key,'/printer/objects/list');
      const available=Array.isArray(listed?.result?.objects)?listed.result.objects:[];
      const wanted=available.filter(name=>/^(print_stats|display_status|virtual_sdcard|webhooks|toolhead|gcode_move|heater_bed|extruder\d*|fan|fan_generic .+|heater_fan .+|temperature_sensor .+|temperature_fan .+|filament_switch_sensor .+|filament_motion_sensor .+|bed_mesh|probe|configfile|print_task_config|filament_detect|filament_inventory_manager|box)$/i.test(name));
      if(!wanted.includes('print_stats')) throw new Error('Moonraker no publica el objeto print_stats.');
      const data=await moonrakerJson(key,'/printer/objects/query?'+wanted.map(encodeURIComponent).join('&'));
      const status=data?.result?.status;
      if(!status||!Object.keys(status).length) throw new Error('Moonraker devolvió un estado vacío.');
      const stamp=new Date().toISOString();
      // El historial es un endpoint independiente de Moonraker. Se consulta de forma
      // tolerante: impresoras sin el componente history siguen mostrando su estado.
      let historyTotals={},historyJobs=[];
      const cachedHistory=directHistoryCache.get(key);
      if(cachedHistory&&Date.now()-cachedHistory.at<30000){historyTotals=cachedHistory.historyTotals;historyJobs=cachedHistory.historyJobs;}
      else{
        const historyResults=await Promise.allSettled([
          moonrakerJson(key,'/server/history/totals',{timeout:5000}),
          moonrakerJson(key,'/server/history/list?limit=8&start=0',{timeout:5000})
        ]);
        if(historyResults[0].status==='fulfilled')historyTotals=historyResults[0].value?.result||historyResults[0].value||{};
        if(historyResults[1].status==='fulfilled'){
          const result=historyResults[1].value?.result||historyResults[1].value||{};
          historyJobs=Array.isArray(result)?result:(Array.isArray(result.jobs)?result.jobs:Array.isArray(result.history)?result.history:[]);
        }
        directHistoryCache.set(key,{at:Date.now(),historyTotals,historyJobs});
      }
      // Snapmaker U1 publica los cuatro canales en objetos propios de su firmware.
      // Solo lectura: no se envían comandos ni se modifica la configuración de la máquina.
      const taskConfig=status.print_task_config||{},detect=status.filament_detect||{};
      const asArray=v=>Array.isArray(v)?v:[];
      const infoSlots=asArray(detect.info);
      const boolAt=(v,i)=>Array.isArray(v)?v[i]===true:(v&&typeof v==='object'?v[i]===true:false);
      const valueAt=(v,i)=>Array.isArray(v)?v[i]:undefined;
      const colorHex=(raw)=>{
        if(raw===undefined||raw===null||raw==='')return '';
        let n=String(raw).trim().replace(/^#/,'');
        if(/^\d+$/.test(n)){const num=Number(n)>>>0;n=(num&0xFFFFFF).toString(16).padStart(6,'0');}
        else if(/^[0-9a-f]{8}$/i.test(n))n=n.slice(0,6);
        return /^[0-9a-f]{6}$/i.test(n)?('#'+n.toUpperCase()):'';
      };
      const u1Filaments=Array.from({length:4},(_,i)=>{
        const info=infoSlots[i]&&typeof infoSlots[i]==='object'?infoSlots[i]:{};
        const material=String(valueAt(taskConfig.filament_type,i)||info.MAIN_TYPE||'').trim();
        const subtype=String(valueAt(taskConfig.filament_sub_type,i)||info.SUB_TYPE||'').trim();
        const vendor=String(valueAt(taskConfig.filament_vendor,i)||info.MANUFACTURER||info.VENDOR||'').trim();
        const color=colorHex(valueAt(taskConfig.filament_color_rgba,i)??info.RGB_1??info.ARGB_COLOR);
        const exists=boolAt(taskConfig.filament_exist,i)||boolAt(taskConfig.extruders_used,i)||boolAt(detect.filament_exist,i)||!!(material||vendor||info.CARD_UID);
        const official=boolAt(taskConfig.filament_official,i)||info.OFFICIAL===true;
        const weight=Number(info.WEIGHT);
        const sku=valueAt(taskConfig.filament_sku,i)??info.SKU??null;
        return {channel:i+1,exists,material,subtype,vendor,color,official,sku:sku===null?null:String(sku),tagWeightGrams:Number.isFinite(weight)&&weight>0?weight:null,rfidDetected:!!(info.CARD_UID||info.SKU||info.MAIN_TYPE||info.MANUFACTURER),scanState:valueAt(detect.state,i)??null};
      });
      // Modelo universal: los extrusores y sensores estándar de Klipper/Moonraker
      // se exponen aunque la máquina no sea Snapmaker. No inventamos material/color:
      // solo se declaran si el firmware publica esos metadatos.
      const sensorNames=available.filter(name=>/^filament_(switch|motion)_sensor\s+.+$/i.test(name)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
      const genericFilaments=[];
      const extruderNames=available.filter(name=>/^extruder\d*$/i.test(name)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
      const sensorIndex=(sensorName)=>{const tail=String(sensorName).replace(/^filament_(?:switch|motion)_sensor\s+/i,'').toLowerCase();const m=tail.match(/(?:extruder|tool|filament)?[_ -]?(\d+)$/i);return m?Math.max(0,Number(m[1])):(/^(?:filament_sensor|filament|runout|runout_sensor)$/i.test(tail)?0:-1);};
      const sensorForExtruder=(extruderName,index)=>{
        const explicit=sensorNames.find(n=>sensorIndex(n)===index);
        if(explicit)return explicit;
        // En impresoras Creality de un solo extrusor suele llamarse simplemente
        // "filament_sensor". Solo asociamos por defecto si no hay ambigüedad.
        if(extruderNames.length===1&&sensorNames.length===1)return sensorNames[0];
        return sensorNames.length===extruderNames.length?sensorNames[index]||'':'';
      };
      const sensorDetected=(sensor)=>{
        for(const key of ['filament_detected','filament_present','has_filament','detected'])if(typeof sensor[key]==='boolean')return sensor[key];
        if(typeof sensor.filament==='boolean')return sensor.filament;
        return null;
      };
      extruderNames.forEach((name,index)=>{
        const sensorName=sensorForExtruder(name,index);
        const sensor=sensorName?status[sensorName]||{}:{};
        const extruder=status[name]||{};
        const material=String(extruder.filament_type||extruder.material||extruder.filament_material||'').trim();
        const color=colorHex(extruder.filament_colour||extruder.filament_color||extruder.color||'');
        const detected=sensorName?sensorDetected(sensor):null;
        const channelName='Extrusor '+(index+1);
        genericFilaments.push({channel:index+1,channelName,exists:detected===true||(!sensorName&&!!(material||color)),presenceKnown:detected!==null,material,subtype:'',vendor:'',color,sku:null,official:false,tagWeightGrams:null,rfidDetected:false,sensor:sensorName||null,sensorEnabled:typeof sensor.enabled==='boolean'?sensor.enabled:null,sensorDetected:detected,source:'klipper-generic'});
      });
      // Adaptador multibobina: un solo extrusor puede recibir filamento desde
      // varios slots (CFS/AMS u otros sistemas). Buscamos estructuras publicadas
      // por Moonraker sin asumir un nombre/modelo concreto ni enviar comandos.
      const multiSlots=[];
      const normKey=k=>String(k||'').toLowerCase().replace(/[^a-z0-9]/g,'');
      const pick=(o,keys)=>{for(const k of keys){if(o&&o[k]!==undefined&&o[k]!==null&&o[k]!=='')return o[k];const found=Object.keys(o||{}).find(x=>normKey(x)===normKey(k));if(found&&o[found]!==undefined&&o[found]!==null&&o[found]!=='')return o[found];}return undefined;};
      const walkSlots=(node,path,depth=0)=>{
        if(depth>5||node==null)return;
        if(Array.isArray(node)){node.forEach((v,i)=>walkSlots(v,path+'['+i+']',depth+1));return;}
        if(typeof node!=='object')return;
        const material=pick(node,['material','filament_type','type','材质']);
        const colorRaw=pick(node,['color','colour','filament_color','filament_colour','rgb','color_hex']);
        const vendor=pick(node,['vendor','brand','manufacturer']);
        const slot=pick(node,['slot','slot_id','index','position','tray_id','filament_id']);
        const state=pick(node,['存在','filament_exist','loaded','present','detected','is_loaded']);
        const color=colorHex(colorRaw);
        const hasSpoolMeta=material!==undefined||color!==''||vendor!==undefined;
        // Los objetos raíz de algunos firmwares (p. ej. CFS-mini) describen el
        // módulo y pueden publicar slot=-1. No son una bobina ni una posición.
        // Solo aceptamos posiciones explícitas válidas o elementos dentro de un
        // array de slots; nunca inventamos un índice secuencial para un módulo.
        const slotNumber=slot!==undefined?Number(slot):NaN;
        const arrayMatch=String(path).match(/\[(\d+)\]/);
        const arrayIndex=arrayMatch?Number(arrayMatch[1]):NaN;
        const hasExplicitSlot=slot!==undefined&&Number.isInteger(slotNumber)&&slotNumber>=0&&slotNumber<32;
        const hasArraySlot=slot===undefined&&Number.isInteger(arrayIndex)&&arrayIndex>=0&&arrayIndex<32;
        const isSlot=hasExplicitSlot||hasArraySlot;
        const slotIndex=hasExplicitSlot?slotNumber:arrayIndex;
        const rawSku=pick(node,['sku','serial','uuid']);
        const skuText=String(rawSku??'').trim();
        const validSku=skuText&&!/^(none|null|undefined|-1|n\/a)$/i.test(skuText)?skuText:null;
        const hasRfid=!!pick(node,['rfid','tag_uid','card_uid']);
        if(isSlot&&(hasSpoolMeta||typeof state==='boolean'||validSku||hasRfid)){
          const channel=slotIndex+1;
          const slotName=pick(node,['slot_name','label','tray_name']);
          multiSlots.push({channel,channelName:String(slotName||('Bobina '+channel)),exists:state===false?false:(state===true||hasSpoolMeta||!!validSku||hasRfid),presenceKnown:typeof state==='boolean',material:String(material||'').trim(),subtype:String(pick(node,['subtype','material_type'])||'').trim(),vendor:String(vendor||'').trim(),color,sku:validSku,official:false,tagWeightGrams:null,rfidDetected:!!(hasRfid||validSku),source:'klipper-multispool',sourcePath:path});
        }
        for(const [k,v] of Object.entries(node))if(/slot|spool|filament|material|cfs|ams|rack|tray|bay/i.test(k))walkSlots(v,path+'.'+k,depth+1);
      };
      for(const objectName of wanted.filter(n=>/^(cfs|ams|spool|multi.?color|filament_hub)(?:[_ .-].*)?$/i.test(n))){if(status[objectName]!==undefined)walkSlots(status[objectName],objectName);}
      // Creality CFS (Moonraker box object): one physical extruder can be fed
      // by 4 slots per connected CFS unit. The firmware publishes T1..T4,
      // each with arrays material_type[4] and color_value[4].
      let crealityBoxStatus=null;
      try {
        const boxResponse=await moonrakerJson(key,'/printer/objects/query?box',{timeout:6000});
        crealityBoxStatus=boxResponse?.result?.status?.box||null;
      } catch (_) {}
      const crealitySlots=[];
      if(crealityBoxStatus&&typeof crealityBoxStatus==='object'){
        const materialTypes={
          '000001':'PLA','000002':'ABS','000003':'PETG','000004':'TPU',
          '000005':'ASA','000006':'PA','000007':'PC','000008':'PLA-CF',
          '000009':'PETG-CF','000010':'PA-CF'
        };
        const sameMaterialTypes=new Map();
        if(Array.isArray(crealityBoxStatus.same_material)){
          for(const entry of crealityBoxStatus.same_material){
            if(Array.isArray(entry)&&entry.length>=4&&typeof entry[0]==='string'&&typeof entry[3]==='string'&&entry[0]&&entry[3]){
              sameMaterialTypes.set(entry[0],entry[3]);
            }
          }
        }
        for(let unit=1;unit<=4;unit++){
          const tray=crealityBoxStatus['T'+unit];
          if(!tray||typeof tray!=='object'||String(tray.state||'').toLowerCase()!=='connect')continue;
          for(let slot=0;slot<4;slot++){
            const materialId=String(Array.isArray(tray.material_type)?(tray.material_type[slot]??''):'').trim();
            let material=materialTypes[materialId]||sameMaterialTypes.get(materialId)||'';
            const rawColor=String(Array.isArray(tray.color_value)?(tray.color_value[slot]??''):'').trim();
            let color='';
            if(rawColor&&rawColor!=='-1'&&rawColor!=='0'&&rawColor!=='00000000'){
              const normalized=rawColor.replace(/^0(?=[0-9a-fA-F]{6}$)/,'').replace(/^#|^0x/i,'');
              if(/^[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(normalized))color='#'+normalized.slice(0,6).toUpperCase();
            }
            const hasFilament=!!material||!!color;
            const channel=(unit-1)*4+slot+1;
            crealitySlots.push({
              channel,channelName:'Slot '+unit+String.fromCharCode(65+slot),
              exists:hasFilament,presenceKnown:true,material,subtype:'',
              vendor:'Creality',color,sku:null,official:false,
              tagWeightGrams:null,rfidDetected:!!materialId&&materialId!=='-1',
              source:'creality-cfs-box',sourcePath:'box.T'+unit,
              statusLabel:hasFilament?'Filamento detectado':'Slot vacío'
            });
          }
        }
      }
      // Deduplicar por ubicación de origen y posición; limitar por seguridad.
      const multicolorPattern=/^(box|filament_inventory_manager)$/i;
      const multicolorObjects=[...new Set([...wanted.filter(n=>multicolorPattern.test(n)),...Object.keys(status).filter(n=>multicolorPattern.test(n))])];
      const byChannel=new Map();
      for(const f of multiSlots){
        const channel=Number(f.channel);
        if(!Number.isInteger(channel)||channel<1||channel>32)continue;
        const prior=byChannel.get(channel);
        const score=x=>(x.material?1:0)+(x.color?1:0)+(x.vendor?1:0)+(x.sku?1:0)+(x.presenceKnown?1:0);
        if(!prior||score(f)>score(prior))byChannel.set(channel,f);
      }
      const detectedMulti=[...byChannel.values()].sort((a,b)=>a.channel-b.channel);
      // Obtener el número real de posiciones declarado por el módulo/firmware.
      // CFS-mini dispone de cuatro alojamientos; no confundirlos con el único extrusor.
      let slotCountHint=0;
      const inspectSlotCount=(node,depth=0)=>{
        if(depth>6||!node||typeof node!=='object')return;
        if(Array.isArray(node)){for(const v of node)inspectSlotCount(v,depth+1);return;}
        for(const [k,v] of Object.entries(node)){
          const nk=normKey(k);
          if(/^(slotcount|slotscount|numslots|numberofslots|traycount|spoolcount|filamentcount|capacity)$/.test(nk)){
            const n=Number(v);if(Number.isInteger(n)&&n>slotCountHint&&n<=32)slotCountHint=n;
          }
          if(/^(slots|trays|spools|filaments|filamentslots|cfs_slots|ams_slots)$/i.test(k)&&Array.isArray(v)&&v.length>slotCountHint&&v.length<=32)slotCountHint=v.length;
          if(v&&typeof v==='object')inspectSlotCount(v,depth+1);
        }
      };
      for(const objectName of multicolorObjects)inspectSlotCount(status[objectName]);
      const moduleText=(multicolorObjects.join(' ')+' '+JSON.stringify(status)).toLowerCase();
      const cfsMiniDetected=/cfs[\s_-]*mini/.test(moduleText);
      if(!slotCountHint&&cfsMiniDetected)slotCountHint=4;
      if(!slotCountHint&&/(?:^|[^a-z])(?:cfs|ams)(?:$|[^a-z])/.test(multicolorObjects.join(' ').toLowerCase()))slotCountHint=4;
      slotCountHint=Math.max(slotCountHint,detectedMulti.reduce((n,f)=>Math.max(n,Number(f.channel)||0),0));
      if(multicolorObjects.length&&slotCountHint>0){
        const existing=new Set(detectedMulti.map(f=>Number(f.channel)));
        for(let channel=1;channel<=Math.min(slotCountHint,32);channel++){
          if(existing.has(channel))continue;
          detectedMulti.push({
            channel,channelName:'Slot '+channel,exists:false,presenceKnown:false,
            material:'',subtype:'',vendor:'',color:'',sku:null,official:false,
            tagWeightGrams:null,rfidDetected:false,source:'klipper-multispool-slot',
            statusLabel:'Posición detectada; datos de bobina no disponibles',
            detailText:'El módulo tiene esta posición, pero el firmware no ha comunicado los datos de la bobina'
          });
        }
        detectedMulti.sort((a,b)=>a.channel-b.channel);
      }
      const hasU1=u1Filaments.some(f=>f.rfidDetected||f.material||f.vendor||f.exists);
      const multicolorSystemDetected=multicolorObjects.length>0||/(?:cfs|ams)[\s_-]*(?:mini|\w*)|filament_hub|filament_manager/i.test(JSON.stringify(status));
      // Un sensor situado junto al extrusor solo informa del filamento que llega
      // al cabezal; no representa las bobinas almacenadas en un CFS/AMS.
      if(multicolorSystemDetected&&!detectedMulti.length){
        for(const f of genericFilaments){f.presenceKnown=false;f.statusLabel='Sensor del extrusor: estado no representativo de las bobinas';f.detailText='Sistema multicolor detectado; posiciones de bobina aún no identificadas';}
      }
      const printerFilaments=hasU1?u1Filaments:(crealitySlots.length?crealitySlots:(multicolorSystemDetected?detectedMulti:genericFilaments));
      const filamentAdapter=hasU1?'snapmaker-u1':crealitySlots.length?'creality-cfs-box':multicolorSystemDetected?(detectedMulti.length?'klipper-multispool':'klipper-multicolor-pending'):'klipper-generic';
      const printerFilamentObjectNames=available.filter(name=>/^(box|filament_inventory_manager|filament_detect|print_task_config)$/i.test(name)||/^(cfs|ams|filament_hub|filament_manager)(?:[_ .-].*)?$/i.test(name));
      const printerFilamentObjectSummary={};
      for(const name of printerFilamentObjectNames){
        const value=status[name];
        if(value&&typeof value==='object'&&!Array.isArray(value)){
          printerFilamentObjectSummary[name]=Object.fromEntries(Object.entries(value).map(([k,v])=>[k,Array.isArray(v)?'array['+v.length+']':v===null?'null':typeof v==='object'?'object':typeof v]));
        }else if(value!==undefined)printerFilamentObjectSummary[name]=typeof value;
      }
      const value={ok:true,online:true,printerOffline:false,status,historyTotals,historyJobs,u1Filaments,printerFilaments,filamentAdapter,extruderCount:extruderNames.length,multicolorSlotCount:crealitySlots.length||detectedMulti.length,multicolorSystemDetected:multicolorSystemDetected||crealitySlots.length>0,multicolorObjects,printerFilamentObjectNames,printerFilamentObjectSummary,crealityBoxDetected:!!crealityBoxStatus,printerStatusKeys:Object.keys(status),updatedAt:stamp,lastSuccessAt:stamp,source:'electron-direct-moonraker',printerIp:key};
      directPrinterCache.set(key,{at:Date.now(),value}); appendPrinterEvent(key,value); return value;
    })();
    directPrinterInflight.set(key,task);
    try { return await task; } finally { if(directPrinterInflight.get(key)===task) directPrinterInflight.delete(key); }
  }

  function parseDirectGcode(buffer,filename) {
    // Se analiza el archivo completo: los laminadores no comparten una cabecera
    // única y algunos escriben metadatos adicionales después de las primeras líneas.
    const text=buffer.toString('utf8');
    const lines=text.split(/\r?\n/);
    const firstValue=(patterns)=>{
      for(const pattern of patterns){const line=lines.find(x=>pattern.test(x));if(line){const m=line.match(pattern);if(m&&m[1])return m[1].trim();}}
      return '';
    };
    const list=value=>String(value||'').split(/[;,]/).map(x=>x.trim()).filter(Boolean);
    const numericList=value=>list(value).map(x=>Number(String(x).replace(',','.'))).filter(x=>Number.isFinite(x)&&x>=0);
    const gramsPatterns=[
      /^;\s*(?:total\s+)?filament\s+used\s*\[g\]\s*=\s*(.+)$/i,
      /^;\s*filament\s+(?:weight|mass)\s*(?:\[g\]|\(g\)|\(grams?\))?\s*[:=]\s*(.+)$/i,
      /^;\s*filament_weights\s*=\s*(.+)$/i,
      /^;\s*filament\s+used\s*[:=]\s*(.+?)\s*g\b/i,
      /^;\s*material\s+weight\s*[:=]\s*(.+?)\s*g\b/i
    ];
    let gramsRaw=firstValue(gramsPatterns), grams=numericList(gramsRaw);
    // Cura suele indicar longitud por extrusor; no convertir mm a gramos sin
    // conocer diámetro y densidad, porque produciría un consumo inventado.
    if(!grams.length) throw new Error('El archivo se ha leído completo, pero no contiene metadatos de gramos reconocibles. No se estimará ni se inventará el consumo.');
    const colorsRaw=firstValue([/^;\s*filament_colour\s*=\s*(.+)$/i,/^;\s*filament\s+colour\s*=\s*(.+)$/i,/^;\s*extruder_colour\s*=\s*(.+)$/i]);
    const typesRaw=firstValue([/^;\s*filament_type\s*=\s*(.+)$/i,/^;\s*filament\s+type\s*=\s*(.+)$/i,/^;\s*material_type\s*=\s*(.+)$/i]);
    const colors=list(colorsRaw),types=list(typesRaw);
    const items=grams.map((g,i)=>{const color=String(colors[i]||colors[0]||'').trim(),material=String(types[i]||types[0]||'Filamento').trim()||'Filamento';return {extruder:i+1,material,name:`${material} ${color}`.trim(),color,colorName:color,grams:g};});
    let thumbnailData='', bestArea=0; const re=/^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$/gim; let m;
    while((m=re.exec(text))){const area=Number(m[1])*Number(m[2]);if(!Number.isFinite(area)||area<=bestArea)continue;const b64=m[3].split(/\r?\n/).map(x=>x.replace(/^;\s?/,'').replace(/\s/g,'')).join('');if(!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))continue;try{const b=Buffer.from(b64,'base64');let mime='';if(b.length>12&&b[0]===137&&b[1]===80&&b[2]===78&&b[3]===71)mime='image/png';else if(b.length>4&&b[0]===255&&b[1]===216)mime='image/jpeg';else if(b.length>12&&b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP')mime='image/webp';if(mime){thumbnailData=`data:${mime};base64,${b.toString('base64')}`;bestArea=area;}}catch(_){}}
    return {ok:true,state:'completed',progress:100,filename,items,totalGrams:Number(items.reduce((a,x)=>a+x.grams,0).toFixed(2)),thumbnailData,source:'Metadatos del archivo G-code completo leídos directamente de Moonraker',message:'Lectura completada.'};
  }
  async function startDirectGcodeRead(ip,filename) {
    const key=validatePrinterIp(ip),name=String(filename||'').split(/[\\/]/).pop().trim();
    if(!name||name.includes('..')||name.includes('/')||name.includes('\\'))throw new Error('Nombre de G-code no válido.');
    const jobKey=key+'|'+name.toLowerCase(), existingId=directGcodeJobsByKey.get(jobKey), existing=existingId&&directGcodeJobs.get(existingId);
    if(existing&&(['reading','completed'].includes(existing.state))&&Date.now()-(existing.createdAt||0)<10*60*1000)return {ok:true,started:true,shared:true,jobId:existing.id,filename:name,direct:true};
    const id=require('node:crypto').randomBytes(16).toString('hex'), controller=new AbortController();
    const job={id,ip:key,filename:name,state:'reading',progress:0,message:'Conectando directamente con Moonraker…',controller,result:null,createdAt:Date.now()};directGcodeJobs.set(id,job);directGcodeJobsByKey.set(jobKey,id);
    const hardTimeout=setTimeout(()=>controller.abort(new Error('La lectura completa del G-code superó 300 segundos.')),300000);
    (async()=>{try{
      const route='/server/files/gcodes/'+name.split('/').map(encodeURIComponent).join('/');
      const response=await moonrakerFetch(key,route,{controller,timeout:300000});
      const reader=response.body?.getReader?.();if(!reader)throw new Error('No se pudo leer progresivamente la respuesta completa de Moonraker.');
      const chunks=[];let total=0;const maxBytes=512*1024*1024,contentLength=Number(response.headers?.get?.('content-length'))||0;
      if(contentLength>maxBytes)throw new Error('El G-code supera el límite de seguridad de 512 MiB.');
      while(true){const {done,value}=await reader.read();if(done)break;if(value?.byteLength){total+=value.byteLength;if(total>maxBytes){try{await reader.cancel();}catch(_){}throw new Error('El G-code supera el límite de seguridad de 512 MiB.');}chunks.push(Buffer.from(value));job.progress=contentLength?Math.min(90,Math.max(5,Math.floor(total*90/contentLength))):Math.min(85,Math.max(5,Math.floor(total/(total+16*1024*1024)*85)));job.message=contentLength?`Lectura del G-code completo en curso… ${job.progress}%`:`Lectura del G-code completo en curso… ${(total/1024/1024).toFixed(1)} MiB`;}}
      const parsed=parseDirectGcode(Buffer.concat(chunks,total),name);Object.assign(job,parsed,{state:'completed',progress:100,result:parsed,controller:null});
    }catch(error){job.state=controller.signal.aborted?'cancelled':'error';job.error=error.message||String(error);job.message=job.state==='cancelled'?'Lectura cancelada.':'No se pudo leer el G-code.';job.controller=null;}finally{clearTimeout(hardTimeout);if(job.state!=='completed'&&directGcodeJobsByKey.get(jobKey)===id)directGcodeJobsByKey.delete(jobKey);}})();
    return {ok:true,started:true,jobId:id,filename:name,direct:true};
  }
  async function scanDirectPrinters() {
    const prefixes=new Set();for(const entries of Object.values(os.networkInterfaces()))for(const item of entries||[]){if(item.family==='IPv4'&&!item.internal){const p=item.address.split('.');if(p.length===4)prefixes.add(p.slice(0,3).join('.'));}}
    const queue=[];for(const prefix of prefixes)for(let i=1;i<=254;i++)queue.push(`${prefix}.${i}`);
    const found=[];let active=0;await new Promise(resolve=>{const pump=()=>{while(active<48&&queue.length){const ip=queue.shift();active++;const socket=new net.Socket();let done=false;const finish=async connected=>{if(done)return;done=true;socket.destroy();active--;if(connected){try{const info=await moonrakerJson(ip,'/printer/info',{timeout:1800});if(info?.result)found.push({ip,hostname:info.result.hostname||'',softwareVersion:info.result.software_version||'',state:info.result.state||'ready',online:true});}catch(_){}}if(!queue.length&&!active)resolve();else pump();};socket.setTimeout(650);socket.once('connect',()=>finish(true));socket.once('timeout',()=>finish(false));socket.once('error',()=>finish(false));socket.connect(7125,ip);}if(!queue.length&&!active)resolve();};pump();});
    return {ok:true,printers:found,ip:found[0]?.ip||'',printerInfo:found[0]||null,message:found.length?'':'No se encontraron impresoras Moonraker en la red local.'};
  }
  ipcMain.handle('pcp-printer:request',async(_event,ip,action,params={})=>{
    const operation=String(action||'');
    if(operation==='discover') return scanDirectPrinters();
    const job=String(params.id||'')?directGcodeJobs.get(String(params.id)):null;
    const key=validatePrinterIp(ip||job?.ip||defaultPrinterIp());
    switch(operation){
      case 'config': return {ok:true,ip:key,online:null,direct:true};
      case 'status': return directPrinterStatus(key,!!params.force);
      case 'printer': {const info=await moonrakerJson(key,'/printer/info'),status=await directPrinterStatus(key,true),ps=status.status?.print_stats||{},wh=status.status?.webhooks||{};return {ok:true,online:true,printerOffline:false,ip:key,baseUrl:printerBase(key),name:info.result?.hostname||key,softwareVersion:info.result?.software_version||'',state:ps.state||wh.state||'ready',filename:ps.filename||'',status:status.status,direct:true};}
      case 'gcode-start': return startDirectGcodeRead(key,params.filename);
      case 'gcode-progress': {if(!job||job.ip!==key)return {ok:false,state:'error',progress:0,error:'La lectura G-code ya no está disponible.'};const {controller,...safe}=job;return safe.state==='completed'?{...safe,...safe.result}:safe;}
      case 'gcode-cancel': {if(job&&job.ip===key&&job.controller){job.controller.abort();job.state='cancelled';job.progress=0;job.message='Lectura cancelada.';for(const [jobKey,value] of directGcodeJobsByKey)if(value===job.id)directGcodeJobsByKey.delete(jobKey);}return {ok:true,cancelled:true};}
      default: throw new Error('Operación directa de impresora no permitida.');
    }
  });

  function writeLog(message) {
    try {
      fs.mkdirSync(path.dirname(logFile()), { recursive: true });
      fs.appendFileSync(logFile(), `[${new Date().toISOString()}] ${message}\n`, 'utf8');
    } catch (_) {
      // Logging must never prevent the desktop app from starting.
    }
  }

  function startupTranslations() {
    const fallback = {
      preparing: 'Preparando Print Cost & Profit...',
      checking: 'Preparando almacenamiento local SQLite...',
      opening: 'Abriendo la aplicación...',
      delayed: 'Iniciando el programa, espera por favor…'
    };
    try {
      const source = fs.readFileSync(path.join(projectRoot(), 'js', 'traducciones.js'), 'utf8');
      const start = source.indexOf('const D={');
      if (start < 0) return fallback;
      const objectStart = source.indexOf('{', start);
      let depth = 0;
      let quote = null;
      let escaped = false;
      let objectEnd = -1;
      for (let i = objectStart; i < source.length; i++) {
        const ch = source[i];
        if (quote) {
          if (escaped) escaped = false;
          else if (ch === '\\') escaped = true;
          else if (ch === quote) quote = null;
          continue;
        }
        if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
        if (ch === '{') depth++;
        else if (ch === '}' && --depth === 0) { objectEnd = i + 1; break; }
      }
      if (objectEnd < 0) return fallback;
      const dictionary = vm.runInNewContext(`(${source.slice(objectStart, objectEnd)})`, Object.create(null), { timeout: 1000 });
      const locale = String(app.getLocale() || 'es').toLowerCase();
      const language = locale.startsWith('zh') ? 'zh-CN' : locale.startsWith('ar') ? 'ar' : locale.slice(0, 2);
      const index = ({ en: 0, fr: 1, de: 2, it: 3, pl: 4, ar: 5, 'zh-CN': 6 })[language];
      const get = key => {
        const values = dictionary[key];
        return language === 'es' || index === undefined ? key : (Array.isArray(values) && values[index]) || key;
      };
      return {
        preparing: get('Preparando Print Cost & Profit...'),
        checking: get('Preparando almacenamiento local SQLite...'),
        opening: get('Abriendo la aplicación...'),
        delayed: get('Iniciando el programa, espera por favor…')
      };
    } catch (error) {
      writeLog(`No se pudieron cargar las traducciones de la pantalla inicial: ${error.message}`);
      return fallback;
    }
  }

  function showStartupSplash() {
    const labels = startupTranslations();
    const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${APP_NAME}</title><style>
      *{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;font-family:Segoe UI,Arial,sans-serif;background:#0b1220;color:#eef4ff}
      body{display:flex;align-items:center;justify-content:center;border:1px solid #263954;border-radius:14px;overflow:hidden}
      .wrap{width:100%;padding:34px 38px;text-align:center}.mark{width:64px;height:64px;margin:0 auto 18px;border-radius:18px;background:linear-gradient(145deg,#16b8a6,#5865df);display:flex;align-items:center;justify-content:center;font-size:29px;font-weight:800;color:white;box-shadow:0 10px 30px #0006}
      h1{font-size:21px;letter-spacing:.2px;margin:0 0 24px;font-weight:650}.status{font-size:13px;color:#c2d0e4;min-height:20px}.track{height:5px;margin:22px auto 0;max-width:300px;background:#1c2b43;border-radius:9px;overflow:hidden}.bar{height:100%;width:35%;border-radius:9px;background:linear-gradient(90deg,#18b8a6,#7184ff);animation:move 1.5s ease-in-out infinite alternate}@keyframes move{from{transform:translateX(-10%)}to{transform:translateX(205%)}}
      .hint{font-size:11px;color:#7489a7;margin-top:17px}
    </style></head><body><main class="wrap"><div class="mark">PCP</div><h1>Print Cost &amp; Profit</h1><div id="status" class="status">${labels.preparing}</div><div class="track"><div class="bar"></div></div><div class="hint">${labels.delayed}</div></main><script>window.setStatus=t=>{document.getElementById('status').textContent=t};</script></body></html>`;
    splashWindow = new BrowserWindow({
      width: 500, height: 330, frame: false, resizable: false, movable: true,
      minimizable: false, maximizable: false, show: false, center: true,
      alwaysOnTop: true, backgroundColor: '#0b1220',
      webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true }
    });
    splashWindow.once('ready-to-show', () => { if (splashWindow) splashWindow.show(); });
    splashWindow.on('closed', () => { splashWindow = null; });
    splashWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`).catch(error => {
      writeLog(`No se pudo mostrar la pantalla de carga: ${error.message}`);
      if (splashWindow) { splashWindow.destroy(); splashWindow = null; }
    });
  }

  function updateStartupSplash(stage) {
    if (!splashWindow || splashWindow.isDestroyed()) return;
    const labels = startupTranslations();
    const message = labels[stage] || labels.preparing;
    splashWindow.webContents.executeJavaScript(`window.setStatus(${JSON.stringify(message)})`).catch(() => {});
  }

  function closeStartupSplash() {
    if (splashWindow && !splashWindow.isDestroyed()) splashWindow.close();
    splashWindow = null;
  }

  function isLocalOrBlobUrl(value) {
    if (value.startsWith('file://')) {
      try { const target=path.resolve(fileURLToPath(value)); const root=path.resolve(projectRoot()); return target===root || target.startsWith(root+path.sep); } catch (_) { return false; }
    }
    if (value === APP_ORIGIN || value.startsWith(`${APP_ORIGIN}/`)) return true;
    return value.startsWith(`blob:${APP_ORIGIN}/`) || value.startsWith('blob:file://');
  }

  function createMainWindow() {
    mainWindow = new BrowserWindow({
      width: 1480,
      height: 940,
      minWidth: 760,
      minHeight: 520,
      show: false,
      title: APP_NAME,
      backgroundColor: '#0b1220',
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true,
        preload: path.join(__dirname, 'preload.cjs'),
        webSecurity: true,
        spellcheck: true
      }
    });

    mainWindow.setMenuBarVisibility(false);
    // Orca permanece como ventana Qt de nivel superior propiedad de PCP.
    // Es necesario para que sus diálogos modales (Crear proyecto, Abrir, Guardar)
    // sigan funcionando. Se reposiciona y limita al área visible de PCP.
    const scheduleOrcaBoundsSync=()=>{
      if(!orcaWindowHandle||!mainWindow||mainWindow.isDestroyed()||mainWindow.isMinimized())return;
      if(orcaResizeTimer)clearTimeout(orcaResizeTimer);
      orcaResizeTimer=setTimeout(()=>{
        orcaResizeTimer=null;
        if(orcaWindowHandle&&orcaLastRect)runOrcaEmbed('Resize',orcaLastRect).catch(error=>writeLog(`[ORCA] No se pudo sincronizar el laminador: ${error.message}`));
      },140);
    };
    mainWindow.on('move',scheduleOrcaBoundsSync);
    mainWindow.on('resize',scheduleOrcaBoundsSync);
    mainWindow.on('maximize',scheduleOrcaBoundsSync);
    mainWindow.on('unmaximize',scheduleOrcaBoundsSync);
    mainWindow.on('minimize',()=>{if(orcaWindowHandle)runOrcaEmbed('Hide').catch(()=>{});});
    mainWindow.on('restore',()=>{if(orcaWindowHandle){runOrcaEmbed('Show').then(()=>scheduleOrcaBoundsSync()).catch(()=>{});}});

    mainWindow.webContents.setWindowOpenHandler(({ url, frameName }) => {
      // Los documentos PDF se preparan en una ventana about:blank y después
      // navegan a un blob: del mismo origen. Electron bloquea about:blank
      // por defecto si no se autoriza explícitamente aquí.
      if (url === 'about:blank') {
        writeLog(`Ventana auxiliar local autorizada para documento (frame=${frameName || 'sin nombre'}).`);
        return {
          action: 'allow',
          overrideBrowserWindowOptions: {
            width: 980,
            height: 760,
            minWidth: 640,
            minHeight: 480,
            autoHideMenuBar: true,
            backgroundColor: '#0b1220',
            webPreferences: {
              nodeIntegration: false,
              contextIsolation: true,
              sandbox: true,
              webSecurity: true
            }
          }
        };
      }
      if (isLocalOrBlobUrl(url)) return { action: 'allow' };
      try {
        const parsed = new URL(url);
        if (['https:', 'http:', 'mailto:'].includes(parsed.protocol)) {
          shell.openExternal(url).catch(error => writeLog(`No se pudo abrir enlace externo: ${error.message}`));
        }
      } catch (_) {
        // Reject malformed or unsupported URL schemes.
      }
      return { action: 'deny' };
    });

    mainWindow.webContents.on('will-navigate', (event, url) => {
      if (isLocalOrBlobUrl(url)) return;
      event.preventDefault();
      try {
        const parsed = new URL(url);
        if (['https:', 'http:', 'mailto:'].includes(parsed.protocol)) {
          shell.openExternal(url).catch(error => writeLog(`No se pudo abrir navegación externa: ${error.message}`));
        }
      } catch (_) {
        writeLog(`Navegación bloqueada: ${url}`);
      }
    });

    // Diagnóstico persistente del proceso de renderizado. Captura errores que
    // dejan la interfaz sin interacción aunque los archivos se descarguen bien.
    mainWindow.webContents.on('console-message', (_event, details) => {
      const level = details && details.level !== undefined ? details.level : 'desconocido';
      const message = details && details.message ? details.message : String(details || 'Mensaje de consola vacío');
      const source = details && details.sourceId ? details.sourceId : 'origen desconocido';
      const line = details && details.lineNumber ? details.lineNumber : '?';
      writeLog(`[RENDERER][console:${level}] ${message} (${source}:${line})`);
    });

    mainWindow.webContents.on('render-process-gone', (_event, details) => {
      writeLog(`[RENDERER][process-gone] reason=${details && details.reason}; exitCode=${details && details.exitCode}`);
    });
    mainWindow.webContents.on('unresponsive', () => writeLog('[RENDERER] La interfaz ha dejado de responder.'));
    mainWindow.webContents.on('responsive', () => writeLog('[RENDERER] La interfaz ha recuperado la respuesta.'));

    mainWindow.webContents.on('dom-ready', () => {
      writeLog('[RENDERER] DOM listo; documento principal cargado y analizado.');
      mainWindow.webContents.executeJavaScript(`(() => {
        if (window.__pcpRuntimeDiagnosticsInstalled) return;
        window.__pcpRuntimeDiagnosticsInstalled = true;
        window.addEventListener('error', event => {
          try { console.error('[PCP_RUNTIME_ERROR]', event.message || 'Error sin mensaje', event.filename || '', event.lineno || 0, event.colno || 0, event.error && event.error.stack ? event.error.stack : ''); } catch (_) {}
        }, true);
        window.addEventListener('unhandledrejection', event => {
          try { const reason = event.reason; console.error('[PCP_UNHANDLED_REJECTION]', reason && reason.stack ? reason.stack : String(reason)); } catch (_) {}
        });
        console.info('[PCP_DIAGNOSTICS] Captura de errores de ejecución instalada.');
      })();`).catch(error => writeLog(`[RENDERER] No se pudo instalar captura adicional: ${error.message}`));
    });

    mainWindow.webContents.on('did-fail-load', (_event, code, description, validatedURL, isMainFrame) => {
      writeLog(`[RENDERER][did-fail-load] code=${code}; description=${description}; url=${validatedURL}; mainFrame=${isMainFrame}`);
    });
    mainWindow.webContents.on('did-finish-load', () => {
      writeLog('[RENDERER] Carga principal finalizada.');
      if(pendingIntegrationPayload){const payload=pendingIntegrationPayload;pendingIntegrationPayload=null;deliverIntegrationPayload(payload);}
      processIntegrationInbox();
    });

    // DevTools disponibles también en la versión instalada.
    // Ctrl+Shift+I o F12 abre/cierra las herramientas sin compilación especial.
    mainWindow.webContents.on('before-input-event', (event, input) => {
      const isDevToolsShortcut = input.key === 'F12' || ((input.control || input.meta) && input.shift && input.key.toLowerCase() === 'i');
      if (!isDevToolsShortcut) return;
      event.preventDefault();
      if (mainWindow && !mainWindow.isDestroyed()) {
        if (mainWindow.webContents.isDevToolsOpened()) mainWindow.webContents.closeDevTools();
        else mainWindow.webContents.openDevTools({ mode: 'detach' });
      }
    });

    mainWindow.once('ready-to-show', () => {
      if (mainWindow) mainWindow.show();
      closeStartupSplash();
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    mainWindow.loadFile(path.join(projectRoot(), 'Print_Cost_Profit.html')).catch(error => {
      writeLog(`No se pudo cargar la interfaz: ${error.message}`);
    });

    if (!app.isPackaged && process.env.PCP_DESKTOP_DEVTOOLS === '1') {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
    writeLog('Diagnóstico del renderizador activo. DevTools: Ctrl+Shift+I o F12.');
  }


  function nativeHandleToHex(buffer) {
    try { return `0x${buffer.readBigUInt64LE(0).toString(16)}`; } catch (_) { return '0x0'; }
  }

  function orcaScreenRect(rect) {
    if (!mainWindow || mainWindow.isDestroyed()) throw new Error('La ventana principal no está disponible.');
    const content=mainWindow.getContentBounds();
    if(!rect||![rect.x,rect.y,rect.width,rect.height].every(Number.isFinite)||rect.width<100||rect.height<100)throw new Error('El área del laminador todavía no tiene un tamaño válido.');
    if(mainWindow.isMinimized())throw new Error('La ventana principal está minimizada; se pospondrá la colocación de Orca.');
    const display=screen.getDisplayMatching(content);
    const scale=display && display.scaleFactor ? display.scaleFactor : 1;
    const left=Math.max(0,Math.min(content.width-1,Number(rect.x)||0));
    const top=Math.max(0,Math.min(content.height-1,Number(rect.y)||0));
    const width=Math.max(1,Math.min(Number(rect.width)||1,content.width-left));
    const height=Math.max(1,Math.min(Number(rect.height)||1,content.height-top));
    return {
      x:Math.round((content.x + left)*scale),
      y:Math.round((content.y + top)*scale),
      width:Math.max(1,Math.round(width*scale)),
      height:Math.max(1,Math.round(height*scale))
    };
  }

  async function runOrcaEmbed(action, rect = null, scrollSteps = 0) {
    if (!isWindows) throw new Error('La integración nativa de Orca está disponible actualmente en Windows.');
    const script=path.join(projectRoot(),'desktop','electron','orca-window.ps1');
    if(!fs.existsSync(script))throw new Error('No se encuentra el componente de integración de ventana de Orca.');
    const args=['-NoLogo','-NoProfile','-ExecutionPolicy','Bypass','-File',script,'-Action',action];
    if(action==='ScrollOptions')args.push('-ScrollSteps',String(scrollSteps));
    if(action==='Attach'){
      if(!orcaProcess||!mainWindow||mainWindow.isDestroyed())throw new Error('Orca o la ventana principal no están preparados.');
      const r=orcaScreenRect(rect||orcaLastRect);
      args.push('-ProcessId',String(orcaProcess.pid),'-OwnerHandle',nativeHandleToHex(mainWindow.getNativeWindowHandle()),'-ExecutablePath',orcaExecutable,
        '-X',String(r.x),'-Y',String(r.y),'-Width',String(r.width),'-Height',String(r.height));
    }else if(orcaWindowHandle){
      args.push('-WindowHandle',orcaWindowHandle);
      if(action==='Refresh'&&mainWindow&&!mainWindow.isDestroyed())args.push('-OwnerHandle',nativeHandleToHex(mainWindow.getNativeWindowHandle()));
      if(action==='Resize'){
        if(!mainWindow||mainWindow.isDestroyed())throw new Error('La ventana principal no está disponible.');
        const r=orcaScreenRect(rect||orcaLastRect);
        args.push('-OwnerHandle',nativeHandleToHex(mainWindow.getNativeWindowHandle()),
          '-X',String(r.x),'-Y',String(r.y),'-Width',String(r.width),'-Height',String(r.height));
      }
    }
    const {stdout,stderr}=await execFileAsync('powershell.exe',args,{windowsHide:true,timeout:105000,maxBuffer:1024*1024});
    const match=String(stdout||'').match(/HWND=(0x[0-9a-f]+)/i);
    const pidMatch=String(stdout||'').match(/(?:^|;)PID=(\d+)/i);
    const titleMatch=String(stdout||'').match(/(?:^|;)TITLE=([^;\r\n]+)/i);
    if(action==='Attach'&&(!match||!pidMatch))throw new Error('Orca respondió sin un identificador de ventana o proceso válido.');
    if(match)orcaWindowHandle=match[1];
    if(pidMatch)orcaWindowProcessId=Number(pidMatch[1]);
    if(stderr&&String(stderr).trim())writeLog(`[ORCA] ${String(stderr).trim()}`);
    writeLog(`[ORCA] ${action} completado. ${String(stdout||'').trim()}`);
    return {ok:true,output:String(stdout||'').trim(),windowTitle:titleMatch?.[1]?.trim()||''};
  }

  ipcMain.handle('pcp-orca:launch', async () => {
    if (!isWindows) return {ok:false,error:'La integración nativa está disponible actualmente en Windows.'};
    if (orcaWindowProcessId && orcaWindowHandle) {
      try { await runOrcaEmbed('Show'); return {ok:true,alreadyRunning:true}; } catch (_) {}
    }
    const candidates=[
      path.join(process.env.ProgramFiles||'C:\\Program Files','Snapmaker_Orca','snapmaker-orca.exe'),
      path.join(process.env['ProgramFiles(x86)']||'C:\\Program Files (x86)','Snapmaker_Orca','snapmaker-orca.exe'),
      path.join(process.env.LOCALAPPDATA||'','Programs','Snapmaker Orca','snapmaker-orca.exe')
    ];
    const detected=candidates.find(candidate=>candidate&&fs.existsSync(candidate));
    if(detected){orcaExecutable=detected;writeLog(`[ORCA] Ejecutable detectado automáticamente: ${orcaExecutable}`);}
    else{
      const picked=await dialog.showOpenDialog(mainWindow,{title:'Seleccionar Snapmaker Orca',properties:['openFile'],filters:[{name:'Aplicación Windows',extensions:['exe']}]});
      if(picked.canceled||!picked.filePaths[0])return {ok:false,canceled:true};
      orcaExecutable=picked.filePaths[0];
    }
    try{
      writeLog(`[ORCA] Inicio integrado mediante ventana nativa superpuesta solicitado. Ejecutable=${orcaExecutable}`);
      orcaProcess=spawn(orcaExecutable,[],{cwd:path.dirname(orcaExecutable),detached:false,windowsHide:false,stdio:'ignore'});
      writeLog(`[ORCA] Proceso lanzador creado. PID=${orcaProcess.pid||'desconocido'}`);
      orcaProcess.once('error',e=>writeLog(`[ORCA] Error al iniciar: ${e.message}`));
      orcaProcess.once('exit',(code,signal)=>writeLog(`[ORCA] Proceso lanzador finalizado: código=${code}; señal=${signal||'ninguna'}; PID=${orcaProcess?.pid||'desconocido'}; ventana=${orcaWindowHandle||'no asociada'}; PID ventana=${orcaWindowProcessId||'desconocido'}.`));
      const attached=await runOrcaEmbed('Attach',orcaLastRect);
      if(mainWindow&&!mainWindow.isDestroyed())mainWindow.focus();
      return {ok:true,path:orcaExecutable,windowHandle:orcaWindowHandle,windowPid:orcaWindowProcessId,windowTitle:attached.windowTitle||''};
    }catch(error){
      writeLog(`[ORCA] No se pudo mostrar el laminador en el área integrada: ${error.stack||error.message}`);
      orcaWindowHandle=null;orcaWindowProcessId=null;
      return {ok:false,error:error.message};
    }
  });

  // Modo de diagnóstico: inicia Orca como ventana independiente, sin SetParent entre Qt y Electron.
  ipcMain.handle('pcp-orca:launch-external', async () => {
    if (!isWindows) return { ok:false, error:'La apertura independiente está disponible actualmente en Windows.' };
    if (orcaExternalProcess && orcaExternalProcess.exitCode === null && !orcaExternalProcess.killed) {
      try { orcaExternalProcess.kill(0); return {ok:true,alreadyRunning:true}; } catch (_) {}
    }
    if (orcaWindowProcessId) return {ok:false,error:'Cierra o separa primero la instancia integrada de Orca antes de abrir otra ventana.'};
    const picked = await dialog.showOpenDialog(mainWindow,{title:'Seleccionar Snapmaker Orca para abrir en ventana independiente',properties:['openFile'],filters:[{name:'Aplicación Windows',extensions:['exe']}]});
    if (picked.canceled || !picked.filePaths[0]) return {ok:false,canceled:true};
    const executable=picked.filePaths[0];
    try {
      const child=spawn(executable,[],{cwd:path.dirname(executable),detached:true,windowsHide:false,stdio:'ignore'});
      orcaExternalProcess=child;
      child.once('error',error=>writeLog(`[ORCA-EXTERNO] Error al iniciar ${executable}: ${error.message}`));
      child.once('exit',(code,signal)=>{writeLog(`[ORCA-EXTERNO] Proceso lanzador finalizado. código=${code}; señal=${signal||'ninguna'}; ejecutable=${executable}`);if(orcaExternalProcess===child)orcaExternalProcess=null;});
      child.unref();
      writeLog(`[ORCA-EXTERNO] Inicio solicitado sin reparentar ventana. Ejecutable=${executable}; PID=${child.pid||'desconocido'}`);
      return {ok:true,path:executable,pid:child.pid||null};
    } catch(error) {writeLog(`[ORCA-EXTERNO] No se pudo iniciar: ${error.stack||error.message}`);return {ok:false,error:error.message};}
  });

  ipcMain.handle('pcp-orca:detach', async () => {
    try{await runOrcaEmbed('Detach');return {ok:true};}
    catch(error){return {ok:false,error:error.message};}
  });
  ipcMain.handle('pcp-orca:close', async () => {
    try{if(orcaWindowHandle)await runOrcaEmbed('Detach');}catch(error){writeLog(`[ORCA] No se pudo separar antes de cerrar: ${error.message}`);}
    if(orcaWindowProcessId&&isWindows){
      try{await execFileAsync('taskkill.exe',['/PID',String(orcaWindowProcessId),'/T','/F'],{windowsHide:true,timeout:8000});}
      catch(error){writeLog(`[ORCA] No se pudo finalizar el proceso de ventana ${orcaWindowProcessId}: ${error.message}`);}
    }
    if(orcaProcess&&!orcaProcess.killed){try{orcaProcess.kill();}catch(_){}}
    orcaProcess=null;orcaWindowHandle=null;orcaWindowProcessId=null;
    return {ok:true};
  });
  let orcaLastRect={x:220,y:110,width:900,height:650};
  ipcMain.handle('pcp-orca:place', async (_event,rect) => {
    if(!mainWindow||mainWindow.isDestroyed()||mainWindow.isMinimized()||!rect||typeof rect!=='object')return {ok:false};
    const b=mainWindow.getContentBounds();
    if(![rect.x,rect.y,rect.width,rect.height].every(v=>Number.isFinite(Number(v))))return {ok:false,error:'Medidas del panel no válidas.'};
    const x=Math.max(0,Math.round(Number(rect.x)||0));
    const y=Math.max(0,Math.round(Number(rect.y)||0));
    const width=Math.max(1,Math.min(Math.max(1,b.width-x),Math.round(Number(rect.width)||1)));
    const height=Math.max(1,Math.min(Math.max(1,b.height-y),Math.round(Number(rect.height)||1)));
    orcaLastRect={x,y,width,height};
    if(orcaWindowHandle){
      try{await runOrcaEmbed('Resize',orcaLastRect);}
      catch(error){
        writeLog(`[ORCA] El identificador anterior dejó de ser válido; se volverá a localizar la ventana estable de Orca: ${error.message}`);
        orcaWindowHandle=null;orcaWindowProcessId=null;
        try{await runOrcaEmbed('Attach',orcaLastRect);}
        catch(recoveryError){writeLog(`[ORCA] No se pudo recuperar la ventana principal de Orca: ${recoveryError.message}`);return {ok:false,error:recoveryError.message};}
      }
    }
    return {ok:true,bounds:orcaLastRect};
  });
  ipcMain.handle('pcp-orca:scroll-options', async (_event,steps) => {
    if(!orcaWindowHandle||!mainWindow||mainWindow.isDestroyed()||mainWindow.isMinimized())return {ok:false,error:'Laminador no iniciado'};
    const amount=Math.max(-12,Math.min(12,Math.trunc(Number(steps)||0)));
    if(!amount)return {ok:true};
    try{return await runOrcaEmbed('ScrollOptions',null,amount);}
    catch(error){writeLog(`[ORCA] No se pudieron desplazar las opciones de impresión: ${error.message}`);return {ok:false,error:error.message};}
  });
  ipcMain.handle('pcp-orca:visibility', async (_event,visible) => {
    if(orcaWindowHandle){
      try{await runOrcaEmbed(visible?'Show':'Hide');}
      catch(error){writeLog(`[ORCA] Error al cambiar visibilidad: ${error.message}`);}
    }
    return {ok:true,running:Boolean(orcaProcess||orcaWindowProcessId)};
  });

  function showStartupError() {
    closeStartupSplash();
    try {
      const errorPage = path.join(projectRoot(), 'desktop-error.html');
      if (!fs.existsSync(errorPage)) return;
      mainWindow = new BrowserWindow({
        width: 720,
        height: 520,
        minWidth: 520,
        minHeight: 420,
        resizable: true,
        show: false,
        title: APP_NAME,
        backgroundColor: '#0b1220',
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          sandbox: true,
          webSecurity: true
        }
      });
      mainWindow.setMenuBarVisibility(false);
      mainWindow.once('ready-to-show', () => mainWindow && mainWindow.show());
      mainWindow.on('closed', () => { mainWindow = null; });
      mainWindow.loadFile(errorPage).catch(loadError => {
        writeLog(`No se pudo mostrar la pantalla de error: ${loadError.message}`);
        app.quit();
      });
    } catch (error) {
      writeLog(`No se pudo crear la pantalla de error: ${error.message}`);
      app.quit();
    }
  }

  async function startDesktopApp() {
    if (starting) return;
    starting = true;
    try {
      writeLog(`Inicio de ${APP_NAME} ${PUBLIC_VERSION}.`);
      updateStartupSplash('checking');
      // v2.0.246: Electron carga el HTML local y atiende SQLite/servicios por IPC.
      // No se inicia, consulta ni detiene ningún servidor HTTP de localhost.
      getDirectStorageDb();
      updateStartupSplash('opening');
      createMainWindow();
      startIntegrationInboxWatcher();
    } catch (error) {
      writeLog(`No se pudo iniciar la aplicación de escritorio: ${error.stack || error.message}`);
      // La pantalla de error está centralizada en traducciones.js y no toca SQLite.
      showStartupError();
    } finally {
      starting = false;
    }
  }

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  // Registra cierres inesperados de procesos Chromium asociados a la aplicación.
  // Es especialmente útil para distinguir un fallo de la interfaz PCP de un
  // cierre del proceso anfitrión durante las pruebas del laminador integrado.
  app.on('child-process-gone', (_event, details) => {
    const type = details && details.type ? details.type : 'desconocido';
    const reason = details && details.reason ? details.reason : 'desconocido';
    const exitCode = details && details.exitCode !== undefined ? details.exitCode : 'desconocido';
    writeLog(`[CHILD-PROCESS-GONE] type=${type}; reason=${reason}; exitCode=${exitCode}.`);
  });

  app.whenReady().then(() => {
    showStartupSplash();
    startDesktopApp();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) startDesktopApp();
  });

  app.on('before-quit', event => {
    // Cierre coordinado: finalizar Orca y sus procesos descendientes antes de salir.
    if (shutdownInProgress) return;
    event.preventDefault();
    shutdownInProgress = true;
    (async () => {
      if (orcaResizeTimer) { clearTimeout(orcaResizeTimer); orcaResizeTimer = null; }
      if (integrationInboxWatcher) { try { integrationInboxWatcher.close(); } catch (_) {} integrationInboxWatcher = null; }
      // No ejecutar PowerShell de separación durante el cierre: terminar el árbol
      // del proceso de Orca libera también su ventana Qt sin bloquear la salida.
      const pids = [...new Set([orcaWindowProcessId, orcaProcess?.pid, orcaExternalProcess?.pid].map(Number).filter(pid => Number.isInteger(pid) && pid > 0 && pid !== process.pid))];
      for (const pid of pids) {
        try {
          await execFileAsync('taskkill.exe', ['/PID', String(pid), '/T', '/F'], { windowsHide: true, timeout: 10000 });
          writeLog(`[CIERRE] Árbol de procesos finalizado: PID ${pid}.`);
        } catch (error) { writeLog(`[CIERRE] PID ${pid}: ${error.message}`); }
      }
      if (orcaProcess && !orcaProcess.killed) { try { orcaProcess.kill(); } catch (_) {} }
      if (orcaExternalProcess && !orcaExternalProcess.killed) { try { orcaExternalProcess.kill(); } catch (_) {} }
      orcaProcess = null; orcaExternalProcess = null; orcaWindowHandle = null; orcaWindowProcessId = null;
      if (directStorageDb) { try { directStorageDb.close(); } catch (_) {} directStorageDb = null; }
    })().catch(error => writeLog(`[CIERRE] Error durante la limpieza: ${error.stack || error.message}`)).finally(() => app.quit());
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
