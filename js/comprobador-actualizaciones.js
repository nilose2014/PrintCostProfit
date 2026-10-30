/* Print Cost & Profit v1.2 — comprobación de nuevas versiones publicadas.
 * Solo informa y abre la página oficial de descarga; nunca instala ni sustituye archivos automáticamente.
 */
(function () {
  'use strict';
  const RELEASE_API = 'https://api.github.com/repos/nilose2014/PrintCostProfit/releases/latest';
  const CHECK_INTERVAL = 6 * 60 * 60 * 1000;
  const DISMISS_KEY = 'pcp.update.dismissed';
  let checking = false;

  function t(value) {
    return window.PCP_I18N && typeof window.PCP_I18N.t === 'function'
      ? window.PCP_I18N.t(value) : value;
  }
  function parseVersion(value) {
    const match = String(value || '').trim().replace(/^v/i, '').match(/^(\d+)\.(\d+)(?:\.(\d+))?/);
    return match ? match.slice(1).map(n => Number(n || 0)) : null;
  }
  function isNewer(remote, local) {
    const a = parseVersion(remote), b = parseVersion(local);
    if (!a || !b) return false;
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) return true;
      if (a[i] < b[i]) return false;
    }
    return false;
  }
  async function localVersion() {
    try {
      const response = await fetch('/api/version', { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        if (data && data.version) return String(data.version);
      }
    } catch (_) {}
    const footer = document.getElementById('pcp-version-footer');
    const match = footer && footer.textContent.match(/(?:v|versión\s*)(\d+\.\d+(?:\.\d+)?)/i);
    return match ? match[1] : '1.2';
  }
  function showNotice(release, installed) {
    const tag = String(release.tag_name || '').trim();
    const latest = tag.replace(/^v/i, '');
    if (!release.html_url || !isNewer(latest, installed)) return;
    if (sessionStorage.getItem(DISMISS_KEY) === tag) return;
    if (document.getElementById('pcp-update-notice')) return;

    const style = document.createElement('style');
    style.id = 'pcp-update-style';
    style.textContent = '#pcp-update-notice{position:relative;display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin:12px auto;padding:14px 16px;max-width:1500px;border:1px solid #d89a32;border-left:5px solid #e4a43b;border-radius:12px;background:linear-gradient(110deg,rgba(229,164,59,.16),rgba(229,164,59,.05));color:var(--text,#e8edf5);box-shadow:0 4px 18px rgba(0,0,0,.12)}#pcp-update-notice .pcp-update-copy{flex:1;min-width:220px}#pcp-update-notice strong{display:block;margin-bottom:4px}#pcp-update-notice p{margin:0;font-size:13px;color:var(--muted,#aab4c4)}#pcp-update-notice .pcp-update-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}#pcp-update-notice a{display:inline-block;padding:9px 13px;border-radius:8px;background:#d99a32;color:#172033;font-weight:700;text-decoration:none}#pcp-update-notice button{padding:8px 10px;border:1px solid var(--line,#526071);border-radius:8px;background:transparent;color:inherit;cursor:pointer}';
    document.head.appendChild(style);

    const box = document.createElement('section');
    box.id = 'pcp-update-notice';
    box.setAttribute('role', 'status');
    const copy = document.createElement('div');
    copy.className = 'pcp-update-copy';
    const title = document.createElement('strong');
    title.textContent = t('Hay una nueva versión de Print Cost & Profit disponible');
    const detail = document.createElement('p');
    detail.textContent = t('Versión instalada: {installed} · Nueva versión: {latest}. Antes de actualizar, crea una copia de seguridad de tus datos.').replace('{installed}', installed).replace('{latest}', latest);
    copy.append(title, detail);
    const actions = document.createElement('div');
    actions.className = 'pcp-update-actions';
    const link = document.createElement('a');
    link.href = release.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = t('Ver actualización y descargar');
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = t('Recordármelo más tarde');
    close.addEventListener('click', function () {
      try { sessionStorage.setItem(DISMISS_KEY, tag); } catch (_) {}
      box.remove();
    });
    actions.append(link, close);
    box.append(copy, actions);
    const header = document.querySelector('header');
    if (header && header.parentNode) header.insertAdjacentElement('afterend', box);
    else document.body.insertBefore(box, document.body.firstChild);
  }
  async function check() {
    if (checking || !navigator.onLine) return;
    checking = true;
    try {
      const installed = await localVersion();
      const response = await fetch(RELEASE_API, {
        cache: 'no-store',
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) return;
      const release = await response.json();
      if (!release || release.draft || release.prerelease) return;
      showNotice(release, installed);
    } catch (_) {
      // La comprobación es opcional: sin conexión o si GitHub no responde, la app sigue funcionando.
    } finally { checking = false; }
  }
  function start() {
    check();
    window.setInterval(check, CHECK_INTERVAL);
    window.addEventListener('online', check);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
