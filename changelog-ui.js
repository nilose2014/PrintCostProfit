/* Print Cost & Profit v1.4 — el registro de cambios solo se abre desde el indicador de versión o el pie. */
(()=>{
 'use strict';
 const t=k=>window.PCP_I18N?.t(k)||k;
 function init(){
 const header=document.getElementById('pcp-version-header');
 const footer=document.getElementById('pcp-version-footer');
 if(!header&&!footer)return;
 const style=document.createElement('style');
 style.textContent='#pcpChangelogDialog{width:min(900px,94vw);max-height:86vh;padding:0;border:1px solid var(--line,#334155);border-radius:14px;background:var(--panel,#111d30);color:var(--txt,#e5edf8);box-shadow:0 24px 70px #0009}#pcpChangelogDialog::backdrop{background:#020617b8;backdrop-filter:blur(3px)}#pcpChangelogDialog .pcp-changelog-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--line,#334155)}#pcpChangelogDialog pre{white-space:pre-wrap;overflow:auto;max-height:calc(86vh - 70px);margin:0;padding:18px;font:13px/1.55 ui-monospace,Consolas,monospace;color:inherit}#pcp-version-header,#pcp-version-footer{cursor:pointer}#pcp-version-header:hover,#pcp-version-footer:hover{text-decoration:underline;color:var(--accent,#60a5fa)!important}';
 document.head.appendChild(style);
 const dialog=document.createElement('dialog');dialog.id='pcpChangelogDialog';
 dialog.innerHTML='<div class="pcp-changelog-head"><strong data-changelog-title></strong><button type="button" class="btn" data-changelog-close></button></div><pre data-changelog-content></pre>';
 document.body.appendChild(dialog);
 const title=dialog.querySelector('[data-changelog-title]'),close=dialog.querySelector('[data-changelog-close]'),content=dialog.querySelector('[data-changelog-content]');
 const refresh=()=>{title.textContent=t('Registro de cambios');close.textContent=t('Cerrar');header?.setAttribute('role','button');header?.setAttribute('tabindex','0');header?.setAttribute('aria-label',t('Abrir registro de cambios'));footer?.setAttribute('role','button');footer?.setAttribute('tabindex','0');footer?.setAttribute('aria-label',t('Abrir registro de cambios'));};

 async function open(){dialog.showModal();refresh();await loadForLanguage();}
 async function loadForLanguage(){
 const lang=window.PCP_I18N?.language||'es';
 const file=lang==='es'?'CHANGELOG.md':`CHANGELOG_${lang.toUpperCase()}.md`;
 content.textContent=t('Cargando registro de cambios…');
 try{let response=await fetch(file,{cache:'no-store'});if(!response.ok&&lang!=='es')response=await fetch('CHANGELOG.md',{cache:'no-store'});if(!response.ok)throw new Error('HTTP '+response.status);content.textContent=await response.text();}
 catch(e){content.textContent=t('No se pudo cargar el registro de cambios. Comprueba que CHANGELOG.md está junto a Print_Cost_Profit.html.');}
 }
 
 const activate=e=>{if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ')return;if(e.type==='keydown')e.preventDefault();open();};
 [header,footer].filter(Boolean).forEach(el=>{el.addEventListener('click',activate);el.addEventListener('keydown',activate);});
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
 window.addEventListener('pcp-language-changed',()=>{refresh();if(dialog.open)loadForLanguage();});
 refresh();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
