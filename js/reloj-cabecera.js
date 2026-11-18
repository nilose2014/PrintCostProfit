(function(){
 'use strict';
 const el=document.getElementById('pcpHeaderClock'); if(!el)return;
 const locale=()=>window.PCP_LOCALE||navigator.language||'es-ES';
 const update=()=>{
  const now=new Date();
  el.textContent=new Intl.DateTimeFormat(locale(),{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
  el.title=new Intl.DateTimeFormat(locale(),{dateStyle:'full',timeStyle:'long'}).format(now);
 };
 update(); setInterval(update,1000);
})();
