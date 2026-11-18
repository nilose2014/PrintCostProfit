/* Selector único de idioma PCP. Banderas SVG recuperadas del selector estable. */
(function () {
  'use strict';
  const LANGS = [
    ['es', 'Español'], ['en', 'English'], ['fr', 'Français'], ['de', 'Deutsch'],
    ['it', 'Italiano'], ['pl', 'Polski'], ['ar', 'العربية'], ['zh-CN', '简体中文']
  ];
  const FLAGS = {
    es:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/></svg>',
    en:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><rect width="60" height="30" fill="#012169"/><path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" stroke-width="2.5"/><path d="M30 0V30M0 15H60" stroke="#fff" stroke-width="10"/><path d="M30 0V30M0 15H60" stroke="#C8102E" stroke-width="5"/></svg>',
    fr:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#002395"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ED2939"/></svg>',
    de:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67"/><rect y="6.67" width="30" height="6.66" fill="#DD0000"/><rect y="13.33" width="30" height="6.67" fill="#FFCE00"/></svg>',
    it:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>',
    pl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#DC143C"/></svg>',
    ar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="6.67" fill="#006C35"/><rect y="6.67" width="30" height="6.66" fill="#fff"/><rect y="13.33" width="30" height="6.67"/><path d="M6 10h18" stroke="#fff" stroke-width="1.2"/></svg>',
    'zh-CN':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><rect width="30" height="20" fill="#DE2910"/><path d="M6 3l1.1 3.2 3.4 0-2.7 2 1 3.2L6 9.5l-2.8 1.9 1-3.2-2.7-2h3.4z" fill="#FFDE00"/></svg>'
  };
  const STYLE_BASE = 'display:flex!important;visibility:visible!important;opacity:1!important;position:relative!important;z-index:99999!important;flex:0 0 auto!important;align-items:center!important;gap:8px!important;margin:0 10px 0 0!important;padding:4px 8px!important;border-radius:10px!important;order:-1!important;';
  function applyAppearance() {
    const light = document.body.classList.contains('pcp-light-theme') ||
      document.body.dataset.theme === 'light' ||
      document.documentElement.dataset.theme === 'light';
    const wrap = document.getElementById('pcpLanguage')?.closest('.pcp-language-top');
    const select = document.getElementById('pcpLanguage');
    if (!wrap || !select) return;
    wrap.style.cssText = STYLE_BASE + (light
      ? 'border:1px solid #bdccdc!important;background:#edf3f9!important;color:#20344d!important;'
      : 'border:1px solid #3b527d!important;background:#142443!important;color:#e9f2ff!important;');
    select.style.cssText = light
      ? 'display:block!important;visibility:visible!important;opacity:1!important;min-width:120px!important;max-width:150px!important;padding:7px 9px!important;background:#ffffff!important;background-color:#ffffff!important;color:#20344d!important;-webkit-text-fill-color:#20344d!important;border:1px solid #bdccdc!important;border-radius:7px!important;font-size:12px!important;cursor:pointer!important;color-scheme:light!important;'
      : 'display:block!important;visibility:visible!important;opacity:1!important;min-width:120px!important;max-width:150px!important;padding:7px 9px!important;background:#101d37!important;color:#f2f7ff!important;border:1px solid #526b91!important;border-radius:7px!important;font-size:12px!important;cursor:pointer!important;color-scheme:dark!important;';
  }
  function mount() {
    const api = window.PCP_I18N;
    const host = document.querySelector('.pcp-topbar-tools');
    if (!api || typeof api.setLanguage !== 'function' || !host) return false;
    let wrap = document.getElementById('pcpLanguage')?.closest('.pcp-language-top');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'language-switch pcp-language-top';
      applyAppearance();
      const flag = document.createElement('span');
      flag.id = 'pcpLanguageFlag';
      flag.setAttribute('aria-hidden', 'true');
      flag.style.cssText = 'display:inline-flex!important;align-items:center!important;justify-content:center!important;width:26px!important;min-width:26px!important;height:18px!important;line-height:0!important;';
      const select = document.createElement('select');
      select.id = 'pcpLanguage';
      select.setAttribute('aria-label', 'Idioma / Language');
      applyAppearance();
      LANGS.forEach(([code, label]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = label;
        select.appendChild(option);
      });
      wrap.append(flag, select);
      select.addEventListener('change', event => {
        api.setLanguage(event.currentTarget.value);
        sync();
      });
    }
    applyAppearance();
    if (wrap.parentElement !== host || host.firstElementChild !== wrap) host.insertBefore(wrap, host.firstElementChild);
    sync();
    return true;
  }
  function sync() {
    const api = window.PCP_I18N;
    const select = document.getElementById('pcpLanguage');
    const flag = document.getElementById('pcpLanguageFlag');
    if (!api || !select) return;
    const current = LANGS.some(x => x[0] === api.language) ? api.language : 'es';
    select.value = current;
    applyAppearance();
    if (flag) {
      const svg = FLAGS[current] || FLAGS.es;
      flag.innerHTML = '<img alt="" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '" style="display:block;width:26px;height:18px;object-fit:cover;border-radius:2px;border:1px solid rgba(160,190,230,.55);box-shadow:0 1px 3px rgba(0,0,0,.35)">';
    }
  }
  function start() {
    let count = 0;
    const retry = () => {
      if (mount()) return;
      if (++count < 80) setTimeout(retry, 250);
      else console.error('[PCP_LANGUAGE] No se encontró .pcp-topbar-tools o PCP_I18N.');
    };
    retry();
    window.addEventListener('pcp-language-changed', sync);
    const observer = new MutationObserver(() => {
      const host = document.querySelector('.pcp-topbar-tools');
      const wrap = document.getElementById('pcpLanguage')?.closest('.pcp-language-top');
      if (host && (!wrap || wrap.parentElement !== host)) mount();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const themeObserver = new MutationObserver(applyAppearance);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
