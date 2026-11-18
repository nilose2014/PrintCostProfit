
(function(){
 const el=id=>document.getElementById(id); const status=el('pcpPrinterStatus'); const ipInput=el('pcpU1PrinterIp');
 if(!ipInput||!status)return;
 const root=()=>((el('pcpPrinterUrl')?.value||'http://127.0.0.1:8700').trim().replace(/\/+$/,''));
 const say=t=>{status.textContent=t;status.style.display='block';};
 const printerFetch=url=>window.PCP_PRINTER_DIRECT?window.PCP_PRINTER_DIRECT.fetch(url):fetch(url,{cache:'no-store'});
 try{const saved=localStorage.getItem('pcp_u1_manual_ip_v176')||localStorage.getItem('pcp_u1_manual_ip_v175');if(saved)ipInput.value=saved;}catch(e){}
 const save=el('pcpSaveU1Ip'), discover=el('pcpDiscoverU1'), test=el('pcpTestPrinter');
 if(save)save.addEventListener('click',async()=>{
  const ip=ipInput.value.trim(); if(!/^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/.test(ip)){say(window.PCP_I18N.t('Introduce una IPv4 válida, por ejemplo 192.168.1.48.'));return;}
  save.disabled=true; say(window.PCP_I18N.format('Comprobando la impresora en {ip}:7125…',{ip}));
  try{const r=await printerFetch(root()+'/api/u1/config?ip='+encodeURIComponent(ip));let d={};try{d=await r.json()}catch(_){} if(!r.ok||!d.ok)throw new Error(d.error||(window.PCP_I18N?.format('El puente respondió HTTP {status}',{status:r.status})||('El puente respondió HTTP '+r.status)));localStorage.setItem('pcp_u1_manual_ip_v176',ip);say(window.PCP_I18N.format('IP comprobada y guardada: {ip}. Pulsa «Probar conexión» para verificar el estado.',{ip}));}
  catch(e){say(window.PCP_I18N.format('No se pudo aplicar la IP {ip}. {message}. Comprueba que el puente esté iniciado y que la U1 responda en el puerto 7125.',{ip,message:e.message||String(e)}));}
  finally{save.disabled=false;}
 });
 if(discover)discover.addEventListener('click',async()=>{
  discover.disabled=true; say(window.PCP_I18N.t('Buscando una Snapmaker U1 en la red local. Puede tardar hasta 15 segundos…'));
  try{const r=await printerFetch(root()+'/api/u1/discover');let d={};try{d=await r.json()}catch(_){} if(!r.ok||!d.ok)throw new Error(d.error||(window.PCP_I18N?.format('El puente respondió HTTP {status}',{status:r.status})||('El puente respondió HTTP '+r.status)));if(d.ip){ipInput.value=d.ip;localStorage.setItem('pcp_u1_manual_ip_v176',d.ip);say(window.PCP_I18N.format('Snapmaker U1 encontrada y configurada: {ip}. Pulsa «Probar conexión».',{ip:d.ip}));}else say((d.message||window.PCP_I18N.t('No se encontró la impresora.'))+' '+window.PCP_I18N.t('Puedes escribir su IP manualmente.'));}
  catch(e){say(window.PCP_I18N.format('La búsqueda no ha podido completarse: {message}. Puedes introducir la IP manualmente.',{message:e.message||String(e)}));}
  finally{discover.disabled=false;}
 });
 if(test)test.addEventListener('click',async()=>{test.disabled=true;say(window.PCP_I18N.t('Probando conexión directa con Moonraker…'));try{const r=await printerFetch(root()+'/api/u1/status?ip='+encodeURIComponent(ipInput.value.trim()||localStorage.getItem('pcp_u1_manual_ip_v180')||''));let d={};try{d=await r.json()}catch(_){}if(!r.ok||!d.ok)throw new Error(d.error||('HTTP '+r.status));say(window.PCP_I18N.t('Conexión directa correcta. Moonraker responde.'));}catch(e){say(window.PCP_I18N.format('No se pudo conectar: {message}. Verifica que la IP esté configurada y Moonraker responda en el puerto 7125.',{message:e.message||String(e)}));}finally{test.disabled=false;}});
})();
