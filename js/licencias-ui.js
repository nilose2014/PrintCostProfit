/* Print Cost & Profit v1.554 — catálogo central de funciones y bloqueo visual Pro.
 * Solo aparece cuando licencias-config.js establece enabled: true.
 * La interfaz no habilita funciones de pago; eso requiere autorización validada por el servidor.
 */
(function (global) {
  'use strict';
  function cfg() { return global.PCP_LICENSES && global.PCP_LICENSES.getConfig ? global.PCP_LICENSES.getConfig() : { enabled: false, webUrl: 'https://print-cost-profit-web.web.app/' }; }
  function t(s) { return global.PCP_I18N && global.PCP_I18N.t ? global.PCP_I18N.t(s) : s; }
  function el(tag, attrs, text) { const n = document.createElement(tag); Object.entries(attrs || {}).forEach(([k,v]) => { if (k === 'style') n.style.cssText = v; else if (k === 'class') n.className = v; else n.setAttribute(k,v); }); if (text != null) n.textContent = text; return n; }
  function init() {
    const c = cfg(); if (!c.enabled || document.getElementById('pcpLicenseOpen')) return;
    const style = el('style', { id:'pcp-license-theme' }); style.textContent = `#pcpLicenseDialog{backdrop-filter:blur(5px);background:rgba(3,7,18,.78)!important}#pcpLicenseDialog #pcpLicenseCard{color:#eef4ff!important}#pcpLicenseDialog label{color:#d8e3f5!important}#pcpLicenseDialog h2{color:#f8fbff!important;letter-spacing:-.025em}#pcpLicenseDialog p{line-height:1.55}#pcpLicenseDialog input{background:#f8fbff!important;color:#111827!important;border:1px solid #9db3d1!important;min-height:44px}#pcpLicenseDialog #pcpLicenseStatus{color:#e5edf9!important;background:#0b1426;border:1px solid #344865;border-radius:10px;padding:12px;overflow-wrap:anywhere}#pcpLicenseDialog #pcpLicenseStatus.pcp-license-ok{border-color:#10b981;background:#08291f;color:#bbf7d0!important}#pcpLicenseDialog #pcpLicenseStatus.pcp-license-error{border-color:#f59e0b;background:#33200b;color:#ffedd5!important}#pcpLicenseDialog a{color:#93c5fd!important;text-decoration:underline;text-underline-offset:3px}#pcpLicenseDialog button{min-height:40px;transition:filter .15s,transform .15s}#pcpLicenseDialog button:hover{filter:brightness(1.08)}#pcpLicenseDialog button:disabled{opacity:.65;cursor:wait}.pcp-pro-locked{position:relative!important}.pcp-pro-locked::after{content:'🔒 PRO';display:inline-flex;align-items:center;gap:3px;margin-left:7px;padding:2px 5px;border-radius:5px;background:#854d0e;color:#fef3c7;font-size:9px;font-weight:800;letter-spacing:.04em;vertical-align:middle}.tab-button.pcp-pro-locked{opacity:.9}.tab-button.pcp-pro-locked:hover{opacity:1}#pcpLicenseOpen{background:linear-gradient(135deg,#2563eb,#0d9488)!important;border-color:#67e8f9!important;color:#fff!important}#pcpLicenseProNote{margin:12px 0 0;padding:12px;border:1px solid #f59e0b;border-radius:10px;background:#2a1c0c;color:#ffedd5;font-size:13px;line-height:1.5}.tab-button.pcp-pro-locked{position:relative;opacity:.82}.tab-button.pcp-pro-locked::after{content:'PRO';font-size:9px;font-weight:800;letter-spacing:.06em;margin-left:7px;padding:2px 5px;border-radius:5px;background:#854d0e;color:#fef3c7;vertical-align:middle}.tab-button.pcp-pro-locked:hover{opacity:1}`; document.head.append(style);
    function showProNotice() {
      let n = document.getElementById('pcpProToast');
      if (!n) {
        n = document.createElement('div');
        n.id = 'pcpProToast';
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:10001;max-width:calc(100vw - 32px);padding:10px 14px;border-radius:10px;background:#1f2937;color:#fff7ed;border:1px solid #f59e0b;box-shadow:0 8px 28px #0005;font:14px/1.4 system-ui,sans-serif;display:none';
        document.body.appendChild(n);
      }
      n.textContent = t('Esta función requiere una licencia Pro activa. Inicia sesión o actualiza tu licencia para comprobar tus permisos.');
      n.style.display = 'block';
      if (n._pcpTimer) clearTimeout(n._pcpTimer);
      n._pcpTimer = setTimeout(function(){ n.style.display='none'; }, 2800);
    }
    const open = el('button', { id:'pcpLicenseOpen', type:'button', 'aria-haspopup':'dialog', style:'position:fixed;right:14px;top:14px;z-index:9998;padding:9px 13px;border:1px solid #64748b;border-radius:9px;background:#172033;color:#fff;font:600 13px system-ui;cursor:pointer;box-shadow:0 3px 12px #0003' }, t('Iniciar sesión'));
    const overlay = el('div', { id:'pcpLicenseDialog', role:'dialog', 'aria-modal':'true', 'aria-labelledby':'pcpLicenseTitle', style:'display:none;position:fixed;inset:0;z-index:9999;background:#0009;align-items:center;justify-content:center;padding:18px;box-sizing:border-box' });
    const card = el('section', { id:'pcpLicenseCard', style:'width:min(460px,100%);max-height:calc(100vh - 36px);overflow:auto;box-sizing:border-box;background:linear-gradient(160deg,#17243b,#0d1728);color:#eef4ff;border:1px solid #405574;border-radius:20px;padding:26px;box-shadow:0 28px 90px #0009;font:14px/1.5 system-ui,sans-serif' });
    const title = el('h2', { id:'pcpLicenseTitle', style:'margin:0 0 6px;font-size:22px' }, 'Print Cost & Profit');
    const intro = el('p', { style:'margin:0 0 18px;color:var(--muted,#64748b)' }, t('Inicia sesión con tu cuenta de la web de licencias.'));
    const form = el('form', { id:'pcpLicenseForm' });
    const emailLabel = el('label', { for:'pcpLicenseEmail', style:'display:block;margin:10px 0 5px;font-weight:600' }, t('Correo electrónico'));
    const email = el('input', { id:'pcpLicenseEmail', name:'email', type:'email', autocomplete:'username', required:'required', style:'width:100%;box-sizing:border-box;padding:11px;border:1px solid #94a3b8;border-radius:8px;background:var(--input-bg,#fff);color:inherit' });
    const passLabel = el('label', { for:'pcpLicensePassword', style:'display:block;margin:12px 0 5px;font-weight:600' }, t('Contraseña'));
    const pass = el('input', { id:'pcpLicensePassword', name:'password', type:'password', autocomplete:'current-password', required:'required', style:'width:100%;box-sizing:border-box;padding:11px;border:1px solid #94a3b8;border-radius:8px;background:var(--input-bg,#fff);color:inherit' });
    const status = el('p', { id:'pcpLicenseStatus', role:'status', 'aria-live':'polite', style:'min-height:20px;margin:12px 0;color:var(--muted,#64748b)' }, t('No has iniciado sesión. La licencia se consultará después de autenticarte.'));
    const actions = el('div', { style:'display:flex;gap:8px;flex-wrap:wrap;margin-top:12px' });
    const submit = el('button', { type:'submit', style:'flex:1;padding:11px;border:0;border-radius:8px;background:#2563eb;color:#fff;font-weight:700;cursor:pointer' }, t('Iniciar sesión'));
    const cancel = el('button', { type:'button', style:'padding:11px 14px;border:1px solid #94a3b8;border-radius:8px;background:transparent;color:inherit;cursor:pointer' }, t('Cancelar'));
    const logout = el('button', { type:'button', style:'display:none;margin-top:12px;padding:9px 12px;border:1px solid #94a3b8;border-radius:8px;background:transparent;color:inherit;cursor:pointer' }, t('Cerrar sesión'));
    const website = el('a', { href:c.webUrl || 'https://print-cost-profit-web.web.app/', target:'_blank', rel:'noopener noreferrer', style:'display:inline-block;margin-top:14px;color:var(--link,#2563eb)' }, t('Abrir web de licencias'));
    actions.append(submit, cancel); form.append(emailLabel,email,passLabel,pass,status,actions); card.append(title,intro,form,logout,website); overlay.append(card); document.body.append(open,overlay);
    function close() { overlay.style.display='none'; }
    async function inspectExistingSession() {
      status.textContent = t('Comprobando si hay una sesión activa…');
      submit.disabled = true;
      try {
        const result = await global.PCP_LICENSES.refresh();
        if (result && result.ok && result.data && result.data.license) {
          email.value = (result.data.user && result.data.user.email) || email.value;
          pass.value = '';
          currentLicense = result.data.license; showLicense(result.data.license, 'online', Date.now()); enforceProVisibility();
          [...proTabs,...proActions].forEach(id=>{const b=document.getElementById(id);if(b){b.classList.toggle('pcp-pro-locked',!hasPro());b.title=hasPro()?'':t('Función disponible con licencia Pro')}});
          submit.textContent = t('Actualizar licencia');
          logout.style.display = 'inline-block';
          open.textContent = t('Mi cuenta');
        } else {
          status.classList.remove('pcp-license-ok'); status.classList.add('pcp-license-error');
          status.textContent = result && result.status === 'license_check_failed'
            ? t('Hay una sesión activa, pero no se pudo verificar la licencia online. Comprueba la conexión y vuelve a intentarlo.')
            : t('No has iniciado sesión. La licencia se consultará después de autenticarte.');
          submit.textContent = global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn() ? t('Actualizar licencia') : t('Iniciar sesión');
          logout.style.display = global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn() ? 'inline-block' : 'none';
          open.textContent = global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn() ? t('Mi cuenta') : t('Iniciar sesión');
        }
      } catch (_) {
        status.textContent = t('No se pudo comprobar la sesión. Inicia sesión o vuelve a intentarlo.');
      } finally { submit.disabled = false; }
    }
    open.addEventListener('click', () => {
      overlay.style.display='flex';
      if (global.PCP_LICENSES && global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn()) {
        inspectExistingSession();
      } else {
        status.textContent = t('No has iniciado sesión. La licencia se consultará después de autenticarte.');
        submit.textContent = t('Iniciar sesión');
        open.textContent = t('Iniciar sesión');
        email.focus();
      }
    });
    cancel.addEventListener('click', close);
    logout.addEventListener('click', async () => {
      logout.disabled = true;
      try {
        await global.PCP_LICENSES.logout();
        currentLicense = null; enforceProVisibility(); [...proTabs,...proActions].forEach(id=>{const b=document.getElementById(id);if(b)b.classList.add('pcp-pro-locked')});
        pass.value = '';
        status.textContent = t('Sesión cerrada. No hay una licencia verificada en esta sesión.');
        submit.textContent = t('Iniciar sesión');
        open.textContent = t('Iniciar sesión');
        logout.style.display = 'none';
      } catch (_) { status.textContent = t('No se pudo cerrar la sesión.'); }
      finally { logout.disabled = false; }
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.style.display === 'flex') close(); });
    function showLicense(license, mode, checkedAt) {
      status.classList.remove('pcp-license-error'); status.classList.add('pcp-license-ok');
      if (!license) { status.textContent = t('Sesión iniciada, pero el servidor no ha devuelto una licencia válida.'); return; }
      const plan = String(license.plan || 'free').toUpperCase();
      const state = String(license.status || 'inactive').toLowerCase();
      const stateText = ({active:t('Activa'),trial:t('Prueba'),inactive:t('Inactiva'),expired:t('Caducada'),manual:t('Activada manualmente')})[state] || state;
      const expires = license.expiresAt ? new Date(license.expiresAt).toLocaleDateString() : t('Sin caducidad');
      status.textContent = t('Licencia verificada online') + ': ' + plan + ' · ' + stateText + (license.proEnabled === true ? ' · ' + t('Funciones Pro activas') : ' · ' + t('Funciones Pro no activas')) + ' · ' + t('Vencimiento') + ': ' + expires + (checkedAt ? ' · ' + t('Comprobada') + ': ' + new Date(checkedAt).toLocaleString() : '') + (mode === 'offline' ? ' · ' + t('Caché sin conexión; no es una verificación actual') : '');
    }
    form.addEventListener('submit', async e => {
      e.preventDefault(); submit.disabled = true; submit.textContent = t('Conectando…'); status.textContent = t('Comprobando la cuenta con el servicio de licencias…');
      try {
        let result;
        if (global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn()) {
          result = await global.PCP_LICENSES.refresh();
        } else {
          result = await global.PCP_LICENSES.login(email.value.trim(), pass.value);
        }
        pass.value = '';
        if (result && result.ok && result.data && result.data.license && result.mode !== 'offline') {
          email.value = (result.data.user && result.data.user.email) || email.value;
          currentLicense = result.data.license; showLicense(result.data.license, 'online', Date.now()); enforceProVisibility();
          [...proTabs,...proActions].forEach(id=>{const b=document.getElementById(id);if(b){b.classList.toggle('pcp-pro-locked',!hasPro());b.title=hasPro()?'':t('Función disponible con licencia Pro')}});
          open.textContent = t('Mi cuenta');
          logout.style.display = 'inline-block';
          submit.textContent = t('Actualizar licencia');
        } else {
          status.textContent = result && result.message ? result.message : t('No se pudo iniciar sesión ni verificar la licencia.');
          submit.textContent = t('Iniciar sesión');
        }
      } catch (_) { status.classList.remove('pcp-license-ok'); status.classList.add('pcp-license-error'); status.textContent = t('No se pudo iniciar sesión ni verificar la licencia. Comprueba la conexión.'); }
      finally { submit.disabled = false; if (submit.textContent === t('Conectando…')) submit.textContent = t('Iniciar sesión'); }
    });
    // El catálogo único está en js/funciones-acceso.js. Para añadir una función,
    // registra su ID en free o pro; no dupliques listas en este archivo.
    const featureCatalog = global.PCP_FEATURE_ACCESS || {
      free: ['homeTabBtn','programOptionsBtn','saveBtn'],
      pro: ['clientsTabBtn','openQuotesBtn','ordersTabBtn','invoicesTabBtn','spoolsTabBtn','accountingTabBtn','saveQuoteFromCalcBtn','createOrderFromCalcBtn'],
      proViews: ['clientsView','quotesView','ordersView','invoicesView','spoolsView','accountingView'],
      proActions: ['saveQuoteFromCalcBtn','createOrderFromCalcBtn','clientManagerSaveBtn','clientManagerDeleteBtn','saveClientBtn','deleteClientBtn','saveQuoteBtn','invoiceFromCalcBtn','invoiceFromQuoteBtn','orderSaveBtn','spoolSaveBtn','accAddBtn','accExportBtn','accExportPdfBtn']
    };
    let currentLicense = null;
    function hasPro() {
      if (!currentLicense || currentLicense.proEnabled !== true || String(currentLicense.plan || '').toLowerCase() !== 'pro') return false;
      const state = String(currentLicense.status || '').toLowerCase();
      if (!['active','trial','manual'].includes(state)) return false;
      if (currentLicense.expiresAt) { const expiry = new Date(currentLicense.expiresAt).getTime(); if (Number.isFinite(expiry) && expiry < Date.now()) return false; }
      return true;
    }
    const proTabs = featureCatalog.pro.filter(id => ['clientsTabBtn','openQuotesBtn','ordersTabBtn','invoicesTabBtn','spoolsTabBtn','accountingTabBtn'].includes(id));
    const proActions = featureCatalog.proActions || [];
    const proViews = featureCatalog.proViews || [];
    function enforceProVisibility() {
      const allowed = hasPro();
      proViews.forEach(id => {
        const view=document.getElementById(id); if(!view) return;
        view.dataset.pcpProLocked = allowed ? '0' : '1';
        view.setAttribute('aria-disabled', allowed ? 'false' : 'true');
        // inert impide foco, teclado y clics en controles internos cuando no hay licencia.
        if ('inert' in view) view.inert = !allowed;
        view.style.pointerEvents = allowed ? '' : 'none';
        view.style.userSelect = allowed ? '' : 'none';
        if(!allowed && view.classList.contains('active')) { const home=document.getElementById('homeTabBtn'); if(home) home.click(); }
      });
      [...proTabs,...proActions].forEach(id=>{ const b=document.getElementById(id); if(b){ b.classList.toggle('pcp-pro-locked',!allowed); b.setAttribute('aria-disabled',allowed?'false':'true'); b.disabled = false; } });
    }
    // Captura antes de los manejadores normales de la aplicación: cerrar el diálogo
    // nunca concede permisos. También protege rutas/pestañas aunque el usuario cierre la ventana.
    function requestProAccess() {
      showProNotice();
    }
    // Bloqueo central en captura: protege tanto navegación como controles internos de cada
    // sección Pro (guardar clientes, presupuestos, pedidos, facturas, stock y contabilidad).
    document.addEventListener('click', e => {
      if (hasPro()) return;
      const target = e.target && e.target.closest ? e.target : null;
      if (!target) return;
      const tab = target.closest('[data-tab]');
      const targetView = tab && tab.getAttribute('data-tab');
      const insideProView = proViews.some(id => { const view=document.getElementById(id); return view && view.contains(target); });
      const proAction = featureCatalog.proActions.map(id => '#' + id).join(',') && target.closest(featureCatalog.proActions.map(id => '#' + id).join(','));
      const locked = (targetView && proViews.includes(targetView)) || insideProView || !!proAction;
      if (!locked) return;
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      requestProAccess();
    }, true);
    document.addEventListener('submit', e => {
      if (hasPro()) return;
      const form = e.target;
      const insideProView = proViews.some(id => { const view=document.getElementById(id); return view && (view === form || view.contains(form)); });
      if (!insideProView) return;
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      requestProAccess();
    }, true);
    // Guardias adicionales para teclado, cambios y activaciones programáticas comunes.
    ['pointerdown','keydown','change','input'].forEach(type => document.addEventListener(type, e => {
      if (hasPro()) return;
      const target = e.target && e.target.closest ? e.target : null; if (!target) return;
      const inside = proViews.some(id => { const v=document.getElementById(id); return v && v.contains(target); });
      if (!inside) return;
      // Permite seleccionar/copiar texto de lectura, pero no operar controles Pro.
      if (['input','change'].includes(type) && !target.matches('input,select,textarea,[contenteditable="true"]')) return;
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); requestProAccess();
    }, true));
        [...proTabs,...proActions].forEach(id => { const b=document.getElementById(id); if(!b)return; b.classList.add('pcp-pro-locked'); b.setAttribute('title',t('Función disponible con licencia Pro')); b.addEventListener('click', e => { if(hasPro())return; e.preventDefault(); e.stopImmediatePropagation(); showProNotice(); }, true); });
    async function syncProFromServer() {
      // Esperar a que Firebase restaure la sesión antes de pintar el estado del botón.
      currentLicense=null;
      enforceProVisibility();
      if(!(global.PCP_LICENSES && global.PCP_LICENSES.initFirebase && global.PCP_LICENSES.refresh)) return;
      try {
        await global.PCP_LICENSES.initFirebase();
        const signedIn = !!(global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn());
        if (signedIn) {
          open.textContent = t('Mi cuenta');
          submit.textContent = t('Actualizar licencia');
          logout.style.display = 'inline-block';
          const r=await global.PCP_LICENSES.refresh();
          if(r && r.ok && r.data && r.data.license && r.mode!=='offline') {
            currentLicense = r.data.license;
            email.value = (r.data.user && r.data.user.email) || email.value;
            showLicense(r.data.license, 'online', Date.now());
            status.classList.remove('pcp-license-error');
            status.classList.add('pcp-license-ok');
          } else {
            status.classList.remove('pcp-license-ok');
            status.classList.add('pcp-license-error');
            status.textContent = r && r.message ? r.message : t('La sesión está activa, pero no se pudo verificar la licencia.');
          }
        } else {
          open.textContent = t('Iniciar sesión');
          submit.textContent = t('Iniciar sesión');
          logout.style.display = 'none';
        }
      } catch(e) {
        const signedIn = !!(global.PCP_LICENSES.isSignedIn && global.PCP_LICENSES.isSignedIn());
        open.textContent = signedIn ? t('Mi cuenta') : t('Iniciar sesión');
        submit.textContent = signedIn ? t('Actualizar licencia') : t('Iniciar sesión');
        logout.style.display = signedIn ? 'inline-block' : 'none';
        status.classList.remove('pcp-license-ok');
        status.classList.add('pcp-license-error');
        status.textContent = t('No se pudo comprobar la sesión o la licencia. Comprueba la conexión y vuelve a intentarlo.');
      }
      enforceProVisibility();
    }
    syncProFromServer();
    open.addEventListener('contextmenu', e => { e.preventDefault(); });
    // No mostrar datos de caché como si fueran una consulta actual. Solo se presenta una licencia
    // después de que login() haya devuelto una licencia del servidor.

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  global.PCP_LICENSE_UI = Object.freeze({ init });
})(window);
