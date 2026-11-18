/* v2.0.33 · Acciones funcionales de la barra superior. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
function openTab(id){const b=document.querySelector(`[data-tab="${id}"]`);if(b)b.click();}
function init(){
 $('pcpTopOptions')?.addEventListener('click',()=>openTab('programOptionsView'));
 $('pcpTopUpdate')?.addEventListener('click',()=>{window.location.reload();});
 $('pcpTopDocumentation')?.addEventListener('click',()=>{
  const link=$('pcpDocumentationLink');
  if(link){link.click();return;}
  const lang=String(window.PCP_I18N?.language||localStorage.getItem('pcp_language')||'es').toLowerCase();
  const code=lang.startsWith('zh')?'zh-CN':lang.startsWith('en')?'en':lang.startsWith('fr')?'fr':lang.startsWith('de')?'de':lang.startsWith('it')?'it':lang.startsWith('pl')?'pl':lang.startsWith('ar')?'ar':'es';
  window.open('documentacion/documentacion-'+code+'.html','pcpDocumentation','popup=yes,width=1100,height=850,resizable=yes,scrollbars=yes');
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
