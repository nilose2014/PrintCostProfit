
(function(){
 'use strict';
 function init(){
  const root=document.getElementById('programOptionsView'); if(!root||root.dataset.pcpAccordionReady==='1') return;
  root.dataset.pcpAccordionReady='1';
  if(!window.pcpAccordionLanguageRefresh){window.pcpAccordionLanguageRefresh=true;document.addEventListener('change',function(e){if(e.target&&e.target.id==='pcpLanguage'){const r=document.getElementById('programOptionsView');if(r){delete r.dataset.pcpAccordionReady;init();}}});}
  const labels={es:{show:'Mostrar campos',hide:'Ocultar campos',up:'Subir apartado',down:'Bajar apartado',order:'ORDEN'},en:{show:'Show fields',hide:'Hide fields',up:'Move section up',down:'Move section down',order:'ORDER'},fr:{show:'Afficher les champs',hide:'Masquer les champs',up:'Monter la section',down:'Descendre la section',order:'ORDRE'},de:{show:'Felder anzeigen',hide:'Felder ausblenden',up:'Abschnitt nach oben',down:'Abschnitt nach unten',order:'REIHENFOLGE'},it:{show:'Mostra campi',hide:'Nascondi campi',up:'Sposta sezione in alto',down:'Sposta sezione in basso',order:'ORDINE'},pl:{show:'Pokaż pola',hide:'Ukryj pola',up:'Przenieś sekcję w górę',down:'Przenieś sekcję w dół',order:'KOLEJNOŚĆ'}};
  function lang(){const el=document.getElementById('pcpLanguage')||document.querySelector('select[aria-label*="language" i]');let v=(el&&el.value||'').toLowerCase();if(!v){try{v=(localStorage.getItem('pcp_language')||'').toLowerCase()}catch(e){}}if(!v)v=(document.documentElement.lang||'es').toLowerCase();return v.startsWith('en')?'en':v.startsWith('fr')?'fr':v.startsWith('de')?'de':v.startsWith('it')?'it':v.startsWith('pl')?'pl':'es';}
  function sections(){
    // Captura todos los apartados reales dentro de Opciones, aunque estén en columnas o wrappers distintos.
    return Array.from(root.querySelectorAll('.panel')).filter(el=>{
      if(el===root || el.classList.contains('pcp-opt-content')) return false;
      if(el.classList.contains('seller-modal')) return !!el.querySelector(':scope > .seller-modal-head > h3');
      return !!el.querySelector(':scope > h3');
    }).filter(el=>!el.parentElement.closest('.pcp-opt-content'));
  }
  function swapPanels(a,b){
    if(!a||!b||a===b)return;
    const marker=document.createComment('pcp-option-swap');
    const ap=a.parentNode, bp=b.parentNode;
    ap.insertBefore(marker,a);
    bp.insertBefore(a,b);
    marker.parentNode.insertBefore(b,marker);
    marker.remove();
  }
  // Estas preferencias se guardan mediante localStorage compatible con PCP; en localhost:8700
  // storage-client.js redirige sus operaciones a SQLite. Las claves son estables entre versiones.
  const ORDER_KEY='pcp_options_section_order';
  const COLLAPSE_KEY='pcp_options_section_collapsed';
  function migrateOptionPreferences(){
    try{
      if(localStorage.getItem(ORDER_KEY)===null){
        const oldOrder=localStorage.getItem('pcp_options_section_order_v1286');
        if(oldOrder!==null)localStorage.setItem(ORDER_KEY,oldOrder);
      }
      if(localStorage.getItem(COLLAPSE_KEY)===null){
        const oldCollapsed=localStorage.getItem('pcp_options_section_collapsed_v1286');
        if(oldCollapsed!==null)localStorage.setItem(COLLAPSE_KEY,oldCollapsed);
      }
    }catch(e){console.error('[PCP Opciones] No se pudieron migrar las preferencias a SQLite:',e);}
  }
  migrateOptionPreferences();
  // Asignar las claves una sola vez al DOM ORIGINAL, antes de restaurar o mover.
  // El fallo anterior calculaba el índice después de mover el panel, cambiando su clave.
  const initialPanels=sections();
  function makeStableKey(panel){
    if(panel.id)return 'id:'+panel.id;
    const seller=panel.matches('.seller-modal');
    const heading=seller?panel.querySelector(':scope > .seller-modal-head > h3'):panel.querySelector(':scope > h3');
    const raw=(heading&&heading.textContent||'').replace(/\\s+/g,' ').trim().toLowerCase();
    // Stable across reordering and language changes: use original section heading,
    // then map known localized headings to a canonical ID.
    const canon=raw
      .replace(/^(\\d{1,2})\\s*[·.-]\\s*/,'')
      .replace(/base de datos y copias de seguridad|database and backups|base de données et sauvegardes|datenbank und sicherungen|database e backup/g,'database-backups')
      .replace(/moneda e impuestos|currency and tax|devise et taxes|währung und steuern|valuta e imposte/g,'currency-tax')
      .replace(/conexión snapmaker u1|snapmaker u1 connection|connexion snapmaker u1|snapmaker-u1-verbindung|connessione snapmaker u1/g,'snapmaker-u1')
      .replace(/datos del vendedor|seller details|coordonnées du vendeur|verkäuferdaten|dati venditore/g,'seller-details')
      .replace(/apariencia|appearance|apparence|darstellung|aspetto/g,'appearance');
    if(canon && canon!==raw)return 'section:'+canon;
    if(!panel.dataset.pcpOptStableKey){
      panel.dataset.pcpOptStableKey='section:'+raw.normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,90);
    }
    return panel.dataset.pcpOptStableKey;
  }
  initialPanels.forEach(panel=>{ if(!panel.dataset.pcpOptStableKey) panel.dataset.pcpOptStableKey=makeStableKey(panel); });
  function sectionKey(panel){ return makeStableKey(panel); }
  function saveOrder(){
    try{localStorage.setItem(ORDER_KEY,JSON.stringify(sections().map(sectionKey)));return true;}catch(e){console.error('[PCP Opciones] No se pudo guardar el orden en SQLite:',e);return false;}
  }
  function restoreOrder(){
    let saved=[];try{saved=JSON.parse(localStorage.getItem(ORDER_KEY)||'[]');}catch(e){}
    if(!Array.isArray(saved)||!saved.length)return;
    // Reordena globalmente intercambiando los paneles entre sus posiciones originales,
    // incluso si pertenecen a columnas o contenedores distintos.
    const current=sections();
    const byKey=new Map(current.map(p=>[sectionKey(p),p]));
    const desired=saved.map(k=>byKey.get(k)).filter(Boolean);
    current.forEach(p=>{if(!desired.includes(p))desired.push(p);});
    for(let i=0;i<desired.length;i++){
      const now=sections();
      const target=desired[i];
      if(now[i]&&now[i]!==target)swapPanels(target,now[i]);
    }
  }
  function saveCollapsed(panel){try{const state=JSON.parse(localStorage.getItem(COLLAPSE_KEY)||'{}');state[sectionKey(panel)]=panel.classList.contains('pcp-opt-section-collapsed');localStorage.setItem(COLLAPSE_KEY,JSON.stringify(state));return true;}catch(e){console.error('[PCP Opciones] No se pudo guardar el estado del apartado en SQLite:',e);return false;}}
  function restoreCollapsed(panel){try{const state=JSON.parse(localStorage.getItem(COLLAPSE_KEY)||'{}');if(state[sectionKey(panel)])panel.classList.add('pcp-opt-section-collapsed');}catch(e){}}
  function decorate(panel){if(panel.dataset.pcpOptDecorated==='1')return;const seller=panel.matches('.seller-modal');const h=seller?panel.querySelector(':scope > .seller-modal-head > h3'):panel.querySelector(':scope > h3');if(!h)return;panel.dataset.pcpOptDecorated='1';panel.classList.add('pcp-opt-section');
   const head=seller?h.parentElement:h;const tools=document.createElement('div');tools.className='pcp-opt-section-tools';const order=document.createElement('span');order.className='pcp-opt-order-label';const toggle=document.createElement('button');toggle.type='button';toggle.className='pcp-opt-toggle';const spacer=document.createElement('span');spacer.className='pcp-opt-spacer';const up=document.createElement('button');up.type='button';const down=document.createElement('button');down.type='button';
   const content=document.createElement('div');content.className='pcp-opt-content';
   if(seller){for(const child of Array.from(panel.childNodes)){if(child!==head)content.appendChild(child);}head.insertAdjacentElement('afterend',tools);panel.appendChild(content);}else{while(h.nextSibling)content.appendChild(h.nextSibling);h.insertAdjacentElement('afterend',tools);panel.appendChild(content);}
   restoreCollapsed(panel);function refresh(){const l=labels[lang()]||labels.es,collapsed=panel.classList.contains('pcp-opt-section-collapsed');toggle.textContent=(collapsed?'＋ ':'− ')+(collapsed?l.show:l.hide);toggle.setAttribute('aria-expanded',String(!collapsed));toggle.title=collapsed?l.show:l.hide;up.textContent='↑ '+l.up;down.textContent='↓ '+l.down;up.title=l.up;down.title=l.down;const all=sections();const idx=all.indexOf(panel);order.textContent=l.order+' '+(idx+1);up.disabled=idx<=0;down.disabled=idx<0||idx===all.length-1;}
   toggle.addEventListener('click',()=>{panel.classList.toggle('pcp-opt-section-collapsed');saveCollapsed(panel);refresh();});
   up.addEventListener('click',()=>{const all=sections(),idx=all.indexOf(panel);if(idx>0){const previous=all[idx-1];swapPanels(panel,previous);requestAnimationFrame(()=>{saveOrder();refreshAll();});}});
   down.addEventListener('click',()=>{const all=sections(),idx=all.indexOf(panel);if(idx>=0&&idx<all.length-1){const next=all[idx+1];swapPanels(panel,next);requestAnimationFrame(()=>{saveOrder();refreshAll();});}});
   tools.append(order,toggle,spacer,up,down);refresh();
  }
  function refreshAll(){sections().forEach(decorate);sections().forEach(p=>{const btn=p.querySelector(':scope > .pcp-opt-section-tools button')||p.querySelector('.pcp-opt-section-tools button');if(btn){const ev=new Event('pcp-refresh-options');p.dispatchEvent(ev);}});sections().forEach(p=>{const l=labels[lang()]||labels.es,idx=sections().indexOf(p),o=p.querySelector('.pcp-opt-order-label'),bs=p.querySelectorAll('.pcp-opt-section-tools button');if(o)o.textContent=l.order+' '+(idx+1);if(bs.length>=3){bs[1].disabled=idx===0;bs[2].disabled=idx===sections().length-1;}});}
  const style=document.getElementById('pcp-options-accordion-style-v1276');if(style)style.id='pcp-options-accordion-style-v1277';
  restoreOrder();sections().forEach(decorate);refreshAll();
  if(!localStorage.getItem(ORDER_KEY))saveOrder();
  document.addEventListener('change',ev=>{if(ev.target&&ev.target.id==='pcpLanguage')setTimeout(refreshAll,0);});
  // The language selector is inserted by PCP_I18N after this script can run.
  const langObserver=new MutationObserver(()=>{const langEl=document.getElementById('pcpLanguage');if(langEl&&!langEl.dataset.pcpAccordionLanguageBound){langEl.dataset.pcpAccordionLanguageBound='1';langEl.addEventListener('change',()=>setTimeout(refreshAll,0));refreshAll();}});
  langObserver.observe(document.documentElement,{childList:true,subtree:true});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
