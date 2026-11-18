/* Print Cost & Profit - almacenamiento local en PC, compatible con localStorage */
(function () {
  'use strict';
  if (!window.PCP_STORAGE_DIRECT && (location.protocol !== 'http:' || location.port !== '8700')) return;
  // El puente SQLite escucha en 127.0.0.1:8700. Normaliza localhost para
  // no dejar que la aplicación guarde silenciosamente en el localStorage del navegador.
  if (!window.PCP_STORAGE_DIRECT && location.hostname === 'localhost') {
    location.replace('http://127.0.0.1:8700' + location.pathname + location.search + location.hash);
    return;
  }
  if (!window.PCP_STORAGE_DIRECT && location.hostname !== '127.0.0.1') return;
  var nativeStorage;
  try { nativeStorage = window.localStorage; }
  catch (_) {
    if (!window.PCP_STORAGE_DIRECT) return;
    nativeStorage = { getItem:function(){return null;}, setItem:function(){}, removeItem:function(){} };
  }
  var cache = Object.create(null), revisions = Object.create(null), initialized = false;
  function request(method, path, body) {
    if (window.PCP_STORAGE_DIRECT && method === 'GET' && path === '/api/storage/snapshot') {
      var direct = window.PCP_STORAGE_DIRECT.snapshotSync();
      if (!direct || direct.ok === false) throw new Error((direct && direct.error) || 'No se pudo leer SQLite mediante Electron IPC.');
      return direct;
    }
    var startedAt = (window.performance && performance.now) ? performance.now() : Date.now();
    var xhr = new XMLHttpRequest();
    xhr.open(method, path, false);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    if (body !== undefined) xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    try { xhr.send(body === undefined ? null : JSON.stringify(body)); }
    catch (e) {
      var failedMs = ((window.performance && performance.now) ? performance.now() : Date.now()) - startedAt;
      console.warn('[PCP storage] fallo', method, path, Math.round(failedMs) + ' ms', e.message);
      window.PCP_LOG?.error('Almacenamiento', 'Fallo al contactar con SQLite', {method:method,path:path,durationMs:Math.round(failedMs),error:e.message});
      throw new Error(window.PCP_I18N?.format('No se pudo contactar con el almacenamiento del PC: {message}', {message:e.message}) || ('No se pudo contactar con el almacenamiento del PC: ' + e.message));
    }
    var elapsedMs = ((window.performance && performance.now) ? performance.now() : Date.now()) - startedAt;
    if (elapsedMs >= 100) {
      console.warn('[PCP storage] operación lenta', method, path, Math.round(elapsedMs) + ' ms', 'HTTP', xhr.status);
      if (elapsedMs >= 1000) window.PCP_LOG?.warn('Almacenamiento', 'Operación SQLite lenta', {method:method,path:path,durationMs:Math.round(elapsedMs),status:xhr.status});
    }
    var parsed = null; try { parsed = xhr.responseText ? JSON.parse(xhr.responseText) : {}; } catch (_) {}
    if (xhr.status < 200 || xhr.status >= 300) {
      if (xhr.status === 409) {
        var conflict = new Error('PCP_STORAGE_CONFLICT');
        conflict.status = 409;
        throw conflict;
      }
      const message=(parsed && parsed.error) || (window.PCP_I18N ? window.PCP_I18N.format('Error de almacenamiento HTTP {status}', {status:xhr.status}) : ('Error de almacenamiento HTTP ' + xhr.status));
      window.PCP_LOG?.error('Almacenamiento', message, {method:method,path:path,status:xhr.status});
      throw new Error(message);
    }
    return parsed || {};
  }
  function installSnapshot(snap) {
    cache = Object.create(null); revisions = Object.create(null);
    var vals = snap && snap.values || {}, revs = snap && snap.revisions || {};
    Object.keys(vals).forEach(function (k) { cache[k] = String(vals[k]); });
    Object.keys(revs).forEach(function (k) { revisions[k] = Number(revs[k]) || 0; });
    Object.keys(cache).forEach(function (k) { if (!(k in revisions)) revisions[k] = 0; });
    initialized = true;
  }
  function init() {
    var snap = request('GET', '/api/storage/snapshot');
    // v1.243: base de datos nueva y vacía; no importar datos antiguos del navegador.
    installSnapshot(snap);
  }
  // Recupera valores Y revisiones en conjunto. Una revisión antigua provoca 409
  // aunque el valor local ya haya sido sincronizado desde otra ventana.
  function refreshKeyRevision(key) {
    var snap = request('GET', '/api/storage/snapshot');
    var vals = snap && snap.values || {}, revs = snap && snap.revisions || {};
    if (Object.prototype.hasOwnProperty.call(vals, key)) {
      cache[key] = String(vals[key]);
      revisions[key] = Number(revs[key]) || 0;
    } else {
      delete cache[key];
      revisions[key] = Number(revs[key]) || 0;
    }
  }
  try { init(); } catch (e) {
    window.alert(window.PCP_I18N ? window.PCP_I18N.format('No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n{message}', {message:e.message}) : ('No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n' + e.message));
    throw e;
  }
  // Escrituras asíncronas: la API localStorage sigue siendo síncrona para
  // compatibilidad con el código existente, pero SQLite nunca bloquea el hilo UI.
  var pendingWrites = Object.create(null), writeQueue = [], writeInFlight = false, activeWriteXhr = null, activeWriteKeys = [], writePumpScheduled = false;
  function asyncRequest(method, path, body, timeout, done) {
    if (window.PCP_STORAGE_DIRECT && ((method === 'POST' && path === '/api/storage/batch') || (method === 'GET' && path === '/api/storage/snapshot'))) {
      var directPromise = window.PCP_STORAGE_DIRECT.request(method, path, body);
      directPromise.then(function(result){done(null,result);},function(error){done(Object.assign(new Error(error && error.message || 'Error SQLite IPC'),{status:error && error.status || 500}));});
      return { abort:function(){} };
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, path, true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    if (body !== undefined) xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.timeout = timeout || 30000;
    var completed = false;
    function complete(err, result) { if (completed) return; completed = true; done(err, result); }
    xhr.onload = function () {
      var parsed = {}; try { parsed = xhr.responseText ? JSON.parse(xhr.responseText) : {}; } catch (_) {}
      complete(null, xhr.status >= 200 && xhr.status < 300 ? parsed : Object.assign(new Error((parsed && parsed.error) || ('HTTP ' + xhr.status)), {status:xhr.status, response:parsed}));
    };
    xhr.onerror = function () { complete(new Error('Error de red al guardar en SQLite')); };
    xhr.ontimeout = function () { complete(new Error('Tiempo de espera agotado al guardar en SQLite')); };
    xhr.onabort = function () { complete(new Error('Solicitud SQLite interrumpida al reanudar el equipo')); };
    try { xhr.send(body === undefined ? null : JSON.stringify(body)); } catch (e) { complete(e); }
    return xhr;
  }
  function reportAsyncStorageError(err, key) {
    console.error('[PCP storage] escritura asíncrona pendiente', key, err && err.message);
    window.PCP_LOG?.error('Almacenamiento', 'No se pudo confirmar una escritura SQLite; se conserva pendiente para reintentar', {key:key,error:err && err.message,status:err && err.status});
  }
  function readSnapshotAsync(done) { asyncRequest('GET', '/api/storage/snapshot', undefined, 15000, done); }
  function queueWriteKey(key) {
    if (writeQueue.indexOf(key) !== -1 || activeWriteKeys.indexOf(key) !== -1) return;
    if (/^pcp_temperature_history_/.test(key)) { writeQueue.push(key); return; }
    if (/^pcp_active_job_by_printer_/.test(key)) {
      var telemetryIndex = writeQueue.findIndex(function (k) { return /^pcp_temperature_history_/.test(k); });
      if (telemetryIndex >= 0) writeQueue.splice(telemetryIndex, 0, key); else writeQueue.push(key);
      return;
    }
    if (/^(pcp_u1_manual_ip_v180|pcp_printers_detail_selected_ip)$/.test(key)) { writeQueue.unshift(key); return; }
    var backgroundIndex = writeQueue.findIndex(function (k) { return /^pcp_(?:active_job_by_printer_|temperature_history_)/.test(k); });
    if (backgroundIndex >= 0) writeQueue.splice(backgroundIndex, 0, key); else writeQueue.push(key);
  }
  function scheduleWritePump() { if (writePumpScheduled || retryPumpTimer !== null) return; writePumpScheduled=true; setTimeout(function(){writePumpScheduled=false;processWriteQueue();},20); }
  function enqueueWrite(key, operation, value) {
    var entry = pendingWrites[key];
    if (!entry) entry = pendingWrites[key] = {key:key, operation:operation, value:value, retries:0, generation:1, failed:false};
    else { entry.operation=operation; entry.value=value; entry.retries=0; entry.generation=(entry.generation||0)+1; entry.failed=false; }
    queueWriteKey(key); scheduleWritePump();
  }
  var retryPumpTimer = null;
  function retryDelayForBatch(keys, base) {
    var retries = 0;
    keys.forEach(function (key) {
      var entry = pendingWrites[key];
      if (entry) retries = Math.max(retries, Number(entry.retries) || 0);
    });
    // Backoff progresivo para no crear una tormenta de snapshots/escrituras
    // cuando el puente SQLite está ocupado o Windows acaba de reanudar.
    return Math.min(30000, Math.max(Number(base) || 0, 500 * Math.pow(2, Math.min(6, Math.max(0, retries - 1)))));
  }
  function scheduleRetryPump(delay) {
    if (retryPumpTimer !== null) return;
    retryPumpTimer = setTimeout(function () {
      retryPumpTimer = null;
      processWriteQueue();
    }, Math.max(0, Number(delay) || 0));
  }
  function releaseBatch(keys) { activeWriteKeys=[]; writeInFlight=false; activeWriteXhr=null; }
  function requeueBatch(keys, delay) {
    keys.forEach(function(k){ if (pendingWrites[k] && writeQueue.indexOf(k)===-1) writeQueue.unshift(k); });
    releaseBatch(keys);
    if (delay !== undefined && delay !== null) scheduleRetryPump(retryDelayForBatch(keys, delay));
    else scheduleWritePump();
  }
  function processWriteQueue() {
    if (writeInFlight || !writeQueue.length) return;
    var keys=[], batch=[];
    while (writeQueue.length && keys.length<25) {
      var key=writeQueue.shift(), entry=pendingWrites[key];
      if (!entry || activeWriteKeys.indexOf(key)!==-1) continue;
      keys.push(key); batch.push({key:key,operation:entry.operation,value:entry.value,generation:entry.generation||0,expectedRevision:Number(revisions[key]||0)});
    }
    if (!batch.length) { if (writeQueue.length) processWriteQueue(); return; }
    writeInFlight=true; activeWriteKeys=keys.slice();
    var started=Date.now();
    activeWriteXhr=asyncRequest('POST','/api/storage/batch',{items:batch.map(function(x){var o={key:x.key,operation:x.operation,expectedRevision:x.expectedRevision};if(x.operation!=='remove')o.value=x.value;return o;})},30000,function(err,result){
      if (err) {
        // Resultado ambiguo: consultar una sola instantánea para reconciliar el lote completo.
        readSnapshotAsync(function(snapErr,snap){
          if (snapErr) {
             batch.forEach(function(x){var e=pendingWrites[x.key];if(e)e.retries=(e.retries||0)+1;});
             if (batch.some(function(x){return (pendingWrites[x.key]||{}).retries>=8;})) {
               batch.forEach(function(x){if((pendingWrites[x.key]||{}).retries>=8)reportAsyncStorageError(snapErr,x.key);});
             }
             requeueBatch(keys,1200); return;
           }
          var vals=snap.values||{}, revs=snap.revisions||{};
          batch.forEach(function(x){
            var e=pendingWrites[x.key]; if(!e)return;
            var exists=Object.prototype.hasOwnProperty.call(vals,x.key), server=exists?String(vals[x.key]):null;
            revisions[x.key]=Number(revs[x.key])||0;
            var committed=x.operation==='remove'?!exists:(exists&&server===String(x.value));
            if(committed&&(e.generation||0)===x.generation){if(x.operation==='remove')delete cache[x.key];else cache[x.key]=String(x.value);delete pendingWrites[x.key];}
            else if(e.retries<8)e.retries++;
            else reportAsyncStorageError(err,x.key);
          });
          requeueBatch(keys,400);
        });
        return;
      }
      var successes=Object.create(null), conflicts=Object.create(null), needsRetry=false;
      (result.results||[]).forEach(function(x){successes[x.key]=x;});
      (result.conflicts||[]).forEach(function(x){conflicts[x.key]=x;});
      batch.forEach(function(x){
        var e=pendingWrites[x.key]; if(!e)return;
        if(successes[x.key]){
          revisions[x.key]=Number(successes[x.key].revision)||0;
          if((e.generation||0)===x.generation)delete pendingWrites[x.key];
          else if(writeQueue.indexOf(x.key)===-1)writeQueue.push(x.key);
        } else if(conflicts[x.key]){
          revisions[x.key]=Number(conflicts[x.key].currentRevision)||0;
          if(x.operation==='remove'&&!conflicts[x.key].currentExists&&(e.generation||0)===x.generation){delete cache[x.key];delete pendingWrites[x.key];}
          else {e.retries=(e.retries||0)+1;needsRetry=true;if(writeQueue.indexOf(x.key)===-1)writeQueue.push(x.key);if(e.retries===8||e.retries%10===0)reportAsyncStorageError(new Error('Conflicto de revisión SQLite; se conserva la última escritura pendiente'),x.key);}
        } else { needsRetry=true;var pending=pendingWrites[x.key];if(pending){pending.retries=(pending.retries||0)+1;if(pending.retries===8||pending.retries%10===0)reportAsyncStorageError(new Error('SQLite no confirmó esta clave; se reintentará'),x.key);}if(writeQueue.indexOf(x.key)===-1)writeQueue.push(x.key); }
      });
      if(Date.now()-started>=1000)console.warn('[PCP storage] lote de escrituras lento',batch.length,'claves',Date.now()-started,'ms');
      releaseBatch(keys);
      if (needsRetry) scheduleRetryPump(retryDelayForBatch(keys, 400)); else scheduleWritePump();
    });
  }
  function isWritePending(key) { return Object.prototype.hasOwnProperty.call(pendingWrites,key); }
  var api = {
    get length() { return Object.keys(cache).length; },
    key: function (i) { var ks = Object.keys(cache); return (i >= 0 && i < ks.length) ? ks[i] : null; },
    getItem: function (key) { key = String(key); return Object.prototype.hasOwnProperty.call(cache, key) ? cache[key] : null; },
    setItem: function (key, value) {
      key = String(key); value = String(value);
      if (Object.prototype.hasOwnProperty.call(cache, key) && cache[key] === value && !isWritePending(key)) return;
      cache[key] = value;
      enqueueWrite(key,'write',value);
    },
    removeItem: function (key) {
      key = String(key);
      if (!Object.prototype.hasOwnProperty.call(cache, key) && !isWritePending(key)) return;
      delete cache[key];
      enqueueWrite(key,'remove',null);
    },
    clear: function () {
      Object.keys(cache).forEach(function (k) { api.removeItem(k); });
    }
  };
  try { Object.defineProperty(window, 'localStorage', { configurable: false, enumerable: true, get: function () { return api; } }); }
  catch (e) { window.alert(window.PCP_I18N ? window.PCP_I18N.format('No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. {message}', {message:e.message}) : ('No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. ' + e.message)); throw e; }
  // Sincroniza cambios de otras ventanas en segundo plano.
  // Importante: este sondeo usa XHR asíncrono para no bloquear la interfaz cada 2,5 s.
  var syncInFlight = false;
  function syncSnapshotAsync() {
    if (syncInFlight || document.visibilityState === 'hidden') return;
    syncInFlight = true;
    if (window.PCP_STORAGE_DIRECT) {
      window.PCP_STORAGE_DIRECT.request('GET','/api/storage/snapshot').then(function(snap){
        syncInFlight=false; var vals=snap.values||{}, revs=snap.revisions||{}, changed=false;
        Object.keys(cache).forEach(function(k){if(!Object.prototype.hasOwnProperty.call(vals,k)&&!isWritePending(k)){delete cache[k];delete revisions[k];changed=true;}});
        Object.keys(vals).forEach(function(k){if(isWritePending(k))return;var rev=Number(revs[k])||0,val=String(vals[k]);if(cache[k]!==val||(Number(revisions[k])||0)!==rev)changed=true;cache[k]=val;revisions[k]=rev;});
        if(changed)window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));
      }).catch(function(){syncInFlight=false;});
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/storage/snapshot', true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.timeout = 5000;
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      syncInFlight = false;
      if (xhr.status < 200 || xhr.status >= 300) return;
      var snap;
      try { snap = JSON.parse(xhr.responseText || '{}'); } catch (_) { return; }
      var vals = snap.values || {}, revs = snap.revisions || {}, keys = Object.keys(vals), changed = false;
      Object.keys(cache).forEach(function (k) {
        if (!Object.prototype.hasOwnProperty.call(vals, k) && !isWritePending(k)) {
          delete cache[k];
          delete revisions[k];
          changed = true;
        }
      });
      keys.forEach(function (k) {
        if (isWritePending(k)) return;
        var serverRevision = Number(revs[k]) || 0;
        var serverValue = String(vals[k]);
        if (cache[k] !== serverValue || (Number(revisions[k]) || 0) !== serverRevision) changed = true;
        cache[k] = serverValue;
        revisions[k] = serverRevision;
      });
      // No despertar todos los módulos cada cinco segundos si SQLite no cambió.
      if (changed) window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));
    };
    xhr.onerror = xhr.ontimeout = function () { syncInFlight = false; };
    try { xhr.send(); } catch (_) { syncInFlight = false; }
  }
  window.setInterval(syncSnapshotAsync, 15000);
  // Las copias automáticas se ejecutan fuera de la ruta de escritura interactiva.
  // Un bloqueo compartido evita que varias ventanas creen la misma copia a la vez.
  var backupTimer = null;
  function runScheduledBackup() {
    if (document.visibilityState === 'hidden' || !navigator.onLine) return;
    var lockKey = 'pcp_sqlite_backup_lock_v2141', now = Date.now(), lockUntil = 0;
    try { lockUntil = Number(nativeStorage.getItem(lockKey)) || 0; } catch (_) {}
    if (lockUntil > now) return;
    try { nativeStorage.setItem(lockKey, String(now + 240000)); } catch (_) {}
    var released = false;
    function release() { if (released) return; released = true; try { if (Number(nativeStorage.getItem(lockKey)) <= now + 240000) nativeStorage.removeItem(lockKey); } catch (_) {} }
    if (window.PCP_LOCAL_API) {
      window.PCP_LOCAL_API.request('POST','/api/storage/backup/auto',{}).then(release).catch(function(err){console.warn('[PCP backup] copia automática no completada',err&&err.message);release();});
      return;
    }
    var xhr = new XMLHttpRequest(); xhr.open('POST', '/api/storage/backup/create', true);
    xhr.setRequestHeader('Cache-Control', 'no-cache'); xhr.timeout = 120000;
    xhr.onload = release; xhr.onerror = release; xhr.ontimeout = release;
    try { xhr.send('{}'); } catch (_) { release(); }
  }
  backupTimer = window.setTimeout(function () { runScheduledBackup(); window.setInterval(runScheduledBackup, 300000); }, 60000);
  // Tras suspensión/hibernación Windows puede dejar una petición XHR abierta y
  // la cola de SQLite detenida. Al volver, abortamos esa petición y reintentamos
  // las escrituras pendientes sin bloquear el hilo de interfaz.
  var lastLifecycleAt = Date.now();
  function recoverAfterSleep(reason) {
    var now = Date.now(), gap = now - lastLifecycleAt; lastLifecycleAt = now;
    if (document.visibilityState === 'hidden' && reason !== 'online') return;
    var shouldRecover = gap > 15000 || reason === 'online' || reason === 'pageshow' || reason === 'visible';
    if (!shouldRecover) return;
    // No abortar una escritura en curso: el servidor podría confirmar SQLite
    // aunque el navegador cancele el XHR. El timeout propio resolverá la petición;
    // su resultado ambiguo se reconciliará contra snapshot antes de reintentar.
    syncInFlight = false;
    Object.keys(pendingWrites).forEach(function (key) {
      var entry = pendingWrites[key];
      if (!entry) return;
      entry.failed = false; entry.retries = 0;
      if (writeQueue.indexOf(key) === -1 && activeWriteKeys.indexOf(key) === -1) writeQueue.push(key);
    });
    if (shouldRecover) {
      window.PCP_LOG?.info('Almacenamiento', 'Recuperación de conexión tras suspensión o reanudación', {reason:reason,gapMs:gap,pending:Object.keys(pendingWrites).length});
      setTimeout(syncSnapshotAsync, 250);
      setTimeout(processWriteQueue, 400);
      window.dispatchEvent(new CustomEvent('pcp-app-resumed', {detail:{reason:reason,gapMs:gap}}));
    }
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') recoverAfterSleep('visible'); else lastLifecycleAt = Date.now(); });
  window.addEventListener('pageshow', function () { recoverAfterSleep('pageshow'); });
  window.addEventListener('online', function () { recoverAfterSleep('online'); });
  window.addEventListener('focus', function () { recoverAfterSleep('focus'); });
  window.PCP_EXTERNAL_STORAGE = {
    type: 'pc',
    get ready() { return initialized; },
    get pendingWrites() { return Object.keys(pendingWrites).length; },
    refresh: function () { readSnapshotAsync(function (err,snap) { if (err) { reportAsyncStorageError(err,'snapshot'); return; } Object.keys(snap.values||{}).forEach(function(k){ if(!isWritePending(k)){cache[k]=String(snap.values[k]);revisions[k]=Number((snap.revisions||{})[k])||0;} }); }); },
    flush: function () { Object.keys(pendingWrites).forEach(function(k){ pendingWrites[k].failed=false; pendingWrites[k].retries=0; if(writeQueue.indexOf(k)===-1 && activeWriteKeys.indexOf(k)===-1)writeQueue.push(k); }); processWriteQueue(); }
  };
})();
