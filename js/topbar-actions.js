/* v3.9 · Acciones funcionales de la barra superior */
(()=>{'use strict';
const $=id=>document.getElementById(id);
function openTab(id){const b=document.querySelector(`[data-tab="${id}"]`);if(b)b.click();}
function openAlerts(){
 const alerts=$('homeAlertsList')?.closest('.pcp-home-card, .home-card, section, article')||$('homeAlertsList');
 if(alerts){alerts.scrollIntoView({behavior:'smooth',block:'center'});alerts.classList.add('pcp-alerts-focus');setTimeout(()=>alerts.classList.remove('pcp-alerts-focus'),1600);}
 else openTab('homeView');
}
function init(){
 $('pcpTopNotifications')?.addEventListener('click',openAlerts);
 $('pcpTopOptions')?.addEventListener('click',()=>openTab('programOptionsView'));
 $('pcpTopDocumentation')?.addEventListener('click',()=>{
  const link=$('pcpDocumentationLink');
  if(link){link.click();return;}
  const lang=String(window.PCP_I18N?.language||localStorage.getItem('pcp_language')||'es').toLowerCase();
  const file=lang.startsWith('zh')?'README_ZH.md':lang.startsWith('en')?'README_EN.md':lang.startsWith('fr')?'README_FR.md':lang.startsWith('de')?'README_DE.md':lang.startsWith('it')?'README_IT.md':lang.startsWith('pl')?'README_PL.md':lang.startsWith('ar')?'README_AR.md':'README.md';
  window.open(file,'pcpDocumentation','popup=yes,width=1100,height=850,resizable=yes,scrollbars=yes');
 });
 const badge=$('pcpTopNotificationBadge');
 const count=$('homeAlertCount');
 if(badge&&count){const n=Number(count.textContent)||0;badge.textContent=String(n);badge.hidden=n===0;}
 const refresh=()=>{if(badge&&count){const n=Number(count.textContent)||0;badge.textContent=String(n);badge.hidden=n===0;}};
 window.addEventListener('storage',refresh);window.addEventListener('pcp-external-storage-sync',refresh);
 const target=$('homeAlertsList');if(target&&badge){new MutationObserver(refresh).observe(target,{childList:true,subtree:true,characterData:true});}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();