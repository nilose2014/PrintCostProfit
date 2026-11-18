(()=>{
'use strict';
const $=id=>document.getElementById(id);
const t=s=>window.PCP_I18N?.t?.(s)||s;
const status=$('pcpOrcaStatus'),info=$('pcpOrcaInfo');
let timer=null;
function message(text,isError=false){
 if(info)info.textContent=t(text);
 if(status){status.textContent=t(isError?'No se pudo iniciar Orca':'Laminador integrado');status.style.color=isError?'#ff9b9b':'#80e6dc';}
}
function sync(){
 const api=window.PCP_ORCA,host=document.querySelector('.pcp-orca-host-placeholder');
 const active=$('orcaView')?.classList.contains('active');
 if(!api)return;
 if(!active){api.visibility?.(false).catch(()=>{});return;}
 if(!host)return;
 const r=host.getBoundingClientRect();
 if(r.width<100||r.height<100){api.visibility?.(false).catch(()=>{});return;}
 api.place?.({x:r.left,y:r.top,width:r.width,height:r.height}).then(()=>api.visibility?.(true)).catch(()=>{});
}
function schedule(){if(timer)clearTimeout(timer);timer=setTimeout(()=>{timer=null;sync();},80);}
$('pcpOrcaLaunch')?.addEventListener('click',async()=>{
 const api=window.PCP_ORCA;
 if(!api?.launch){message('La integración nativa solo está disponible en la aplicación de escritorio.',true);return;}
 const btn=$('pcpOrcaLaunch');btn.disabled=true;message('Iniciando Snapmaker Orca…');
 try{
  const r=await api.launch();
  if(r?.ok){message(r.alreadyRunning?'Snapmaker Orca ya está abierto.':('Snapmaker Orca se ha iniciado y se ha colocado sobre el espacio del laminador.'+(r.windowTitle?' · '+r.windowTitle:'')));schedule();}
  else if(!r?.canceled)message(r?.error||'No se pudo iniciar Orca.',true);
 }catch(e){message(e?.message||'No se pudo iniciar Orca.',true);}
 finally{btn.disabled=false;}
});
$('pcpOrcaExternal')?.addEventListener('click',async()=>{
 const api=window.PCP_ORCA;
 if(!api?.launchExternal){message('La apertura independiente no está disponible en esta instalación.',true);return;}
 const btn=$('pcpOrcaExternal');btn.disabled=true;
 try{const r=await api.launchExternal();if(r?.ok)message(r.alreadyRunning?'Snapmaker Orca ya está abierto en una ventana independiente.':'Snapmaker Orca se ha abierto fuera de Print Cost & Profit.');else if(!r?.canceled)message(r?.error||'No se pudo abrir Orca.',true);}
 catch(e){message(e?.message||'No se pudo abrir Orca.',true);}finally{btn.disabled=false;}
});
$('pcpOrcaDetach')?.addEventListener('click',async()=>{try{const r=await window.PCP_ORCA?.detach?.();if(r?.ok)message('La ventana de Orca se ha separado.');else message(r?.error||'No se pudo separar Orca.',true);}catch(e){message(e.message,true);}});
$('pcpOrcaClose')?.addEventListener('click',async()=>{try{const r=await window.PCP_ORCA?.close?.();if(r?.ok)message('Snapmaker Orca se ha cerrado.');else message(r?.error||'No se pudo cerrar Orca.',true);}catch(e){message(e.message,true);}});

async function scrollNativeOptions(steps){
 const api=window.PCP_ORCA;
 if(!api?.scrollOptions){message('El desplazamiento nativo no está disponible.',true);return;}
 try{const r=await api.scrollOptions(steps);if(!r?.ok)message(r?.error||'No se pudieron desplazar las opciones de impresión.',true);}
 catch(e){message(e?.message||'No se pudieron desplazar las opciones de impresión.',true);}
}
if($('pcpOrcaScrollUp')){$('pcpOrcaScrollUp').title=t('Subir ajustes de impresión');$('pcpOrcaScrollUp').setAttribute('aria-label',t('Subir ajustes de impresión'));$('pcpOrcaScrollUp').addEventListener('click',()=>scrollNativeOptions(-4));}
if($('pcpOrcaScrollDown')){$('pcpOrcaScrollDown').title=t('Bajar ajustes de impresión');$('pcpOrcaScrollDown').setAttribute('aria-label',t('Bajar ajustes de impresión'));$('pcpOrcaScrollDown').addEventListener('click',()=>scrollNativeOptions(4));}
document.querySelectorAll('.tab-button').forEach(b=>b.addEventListener('click',schedule));
window.addEventListener('resize',schedule,{passive:true});
window.addEventListener('scroll',schedule,{passive:true,capture:true});
document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule();});
if(typeof ResizeObserver!=='undefined'){
 const host=document.querySelector('.pcp-orca-host-placeholder');
 if(host)new ResizeObserver(schedule).observe(host);
}
schedule();
})();