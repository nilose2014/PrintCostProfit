/* Print Cost & Profit - almacenamiento local en PC, compatible con localStorage */
(function () {
  'use strict';
  if (location.protocol !== 'http:' || location.port !== '8700') return;
  // El puente SQLite escucha en 127.0.0.1:8700. Normaliza localhost para
  // no dejar que la aplicación guarde silenciosamente en el localStorage del navegador.
  if (location.hostname === 'localhost') {
    location.replace('http://127.0.0.1:8700' + location.pathname + location.search + location.hash);
    return;
  }
  if (location.hostname !== '127.0.0.1') return;
  var nativeStorage;
  try { nativeStorage = window.localStorage; } catch (_) { return; }
  var cache = Object.create(null), revisions = Object.create(null), initialized = false, conflictShown = false;
  function request(method, path, body) {
    var startedAt = (window.performance && performance.now) ? performance.now() : Date.now();
    var xhr = new XMLHttpRequest();
    xhr.open(method, path, false);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    if (body !== undefined) xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    try { xhr.send(body === undefined ? null : JSON.stringify(body)); }
    catch (e) {
      var failedMs = ((window.performance && performance.now) ? performance.now() : Date.now()) - startedAt;
      console.warn('[PCP storage] fallo', method, path, Math.round(failedMs) + ' ms', e.message);
      throw new Error('No se pudo contactar con el almacenamiento del PC: ' + e.message);
    }
    var elapsedMs = ((window.performance && performance.now) ? performance.now() : Date.now()) - startedAt;
    if (elapsedMs >= 100) console.warn('[PCP storage] operación lenta', method, path, Math.round(elapsedMs) + ' ms', 'HTTP', xhr.status);
    var parsed = null; try { parsed = xhr.responseText ? JSON.parse(xhr.responseText) : {}; } catch (_) {}
    if (xhr.status < 200 || xhr.status >= 300) {
      if (xhr.status === 409) {
        if (!conflictShown) { conflictShown = true; window.alert(window.PCP_I18N ? window.PCP_I18N.t('Print Cost & Profit: otra ventana ha cambiado este dato. Para evitar perder información, este cambio no se ha sobrescrito. Copia lo que estabas editando si es necesario y recarga esta ventana antes de continuar.') : 'Print Cost & Profit: otra ventana ha cambiado este dato. Para evitar perder información, este cambio no se ha sobrescrito. Copia lo que estabas editando si es necesario y recarga esta ventana antes de continuar.'); }
        throw new Error('Conflicto de almacenamiento: el dato ha cambiado en otra ventana.');
      }
      throw new Error((parsed && parsed.error) || (window.PCP_I18N ? window.PCP_I18N.format('Error de almacenamiento HTTP {status}', {status:xhr.status}) : ('Error de almacenamiento HTTP ' + xhr.status)));
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
  try { init(); } catch (e) {
    window.alert(window.PCP_I18N ? window.PCP_I18N.format('No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n{message}', {message:e.message}) : ('No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n' + e.message));
    throw e;
  }
  var api = {
    get length() { return Object.keys(cache).length; },
    key: function (i) { var ks = Object.keys(cache); return (i >= 0 && i < ks.length) ? ks[i] : null; },
    getItem: function (key) { key = String(key); return Object.prototype.hasOwnProperty.call(cache, key) ? cache[key] : null; },
    setItem: function (key, value) {
      key = String(key); value = String(value);
      // Evita bloquear la interfaz con una petición SQLite cuando el valor no ha cambiado.
      // Las escrituras que sí cambian datos siguen confirmándose en SQLite antes de retornar.
      if (Object.prototype.hasOwnProperty.call(cache, key) && cache[key] === value) return;
      var result = request('POST', '/api/storage/write', { key: key, value: value, expectedRevision: Number(revisions[key] || 0) });
      cache[key] = value; revisions[key] = Number(result.revision) || (Number(revisions[key] || 0) + 1);
    },
    removeItem: function (key) {
      key = String(key);
      // Eliminar una clave inexistente no necesita consultar SQLite.
      if (!Object.prototype.hasOwnProperty.call(cache, key)) return;
      request('POST', '/api/storage/remove', { key: key, expectedRevision: Number(revisions[key] || 0) });
      delete cache[key]; delete revisions[key];
    },
    clear: function () { Object.keys(cache).forEach(function (k) { api.removeItem(k); }); }
  };
  try { Object.defineProperty(window, 'localStorage', { configurable: false, enumerable: true, get: function () { return api; } }); }
  catch (e) { window.alert(window.PCP_I18N ? window.PCP_I18N.format('No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. {message}', {message:e.message}) : ('No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. ' + e.message)); throw e; }
  // Sincroniza cambios de otras ventanas en segundo plano.
  // Importante: este sondeo usa XHR asíncrono para no bloquear la interfaz cada 2,5 s.
  var syncInFlight = false;
  function syncSnapshotAsync() {
    if (syncInFlight || document.visibilityState === 'hidden') return;
    syncInFlight = true;
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
      var vals = snap.values || {}, revs = snap.revisions || {}, keys = Object.keys(vals);
      Object.keys(cache).forEach(function (k) {
        if (!Object.prototype.hasOwnProperty.call(vals, k)) {
          delete cache[k];
          // Conserva la revisión anterior para detectar escrituras desde una vista obsoleta.
        }
      });
      keys.forEach(function (k) {
        var serverRevision = Number(revs[k]) || 0;
        if (!Object.prototype.hasOwnProperty.call(revisions, k)) {
          cache[k] = String(vals[k]);
          // No se acepta la revisión nueva silenciosamente.
        } else {
          cache[k] = String(vals[k]);
          // No actualizamos revisions[k] si cambió en el servidor: evita sobrescribir cambios remotos.
        }
      });
      window.dispatchEvent(new CustomEvent('pcp-external-storage-sync'));
    };
    xhr.onerror = xhr.ontimeout = function () { syncInFlight = false; };
    try { xhr.send(); } catch (_) { syncInFlight = false; }
  }
  window.setInterval(syncSnapshotAsync, 5000);
  window.PCP_EXTERNAL_STORAGE = { type: 'pc', get ready() { return initialized; }, refresh: function () { installSnapshot(request('GET', '/api/storage/snapshot')); } };
})();
