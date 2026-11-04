/* v2.0 — abre los manuales README convertidos a HTML y localizados. */
(()=>{
 'use strict';
 const files={"es": "documentacion-es.html", "en": "documentacion-en.html", "fr": "documentacion-fr.html", "de": "documentacion-de.html", "it": "documentacion-it.html", "pl": "documentacion-pl.html", "ar": "documentacion-ar.html", "zh-CN": "documentacion-zh-CN.html"};
 const labels={es:'Manual en español',en:'Manual in English',fr:'Manuel en français',de:'Handbuch auf Deutsch',it:'Manuale in italiano',pl:'Instrukcja po polsku',ar:'الدليل باللغة العربية','zh-CN':'简体中文手册'};
 function activeLanguage(){
  let code=window.PCP_I18N?.language;
  if(!code){try{code=localStorage.getItem('pcp_language')}catch(e){}}
  code=String(code||document.documentElement.lang||'es');
  if(code.toLowerCase().startsWith('zh'))return 'zh-CN';
  code=code.slice(0,2).toLowerCase();return Object.prototype.hasOwnProperty.call(files,code)?code:'es';
 }
 function update(){
  const link=document.getElementById('pcpDocumentationLink');
  const label=document.getElementById('pcpDocumentationLanguage');
  if(!link)return;
  const code=activeLanguage();
  link.href='documentacion/'+files[code];
  link.setAttribute('hreflang',code);
  if(label)label.textContent=labels[code];
 }
 function openManual(){
  update();
  const link=document.getElementById('pcpDocumentationLink');
  if(!link)return;
  const win=window.open(link.href,'pcpDocumentation','popup=yes,width=1100,height=850,resizable=yes,scrollbars=yes');
  if(!win)window.open(link.href,'_blank');
 }
 function init(){
  update();
  const link=document.getElementById('pcpDocumentationLink');
  if(link)link.addEventListener('click',event=>{event.preventDefault();openManual();});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
 window.addEventListener('pcp-language-changed',update);
})();
