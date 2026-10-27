
(function(){
 const $=id=>document.getElementById(id); const select=$('pcpU1PrinterSelect'), aliasInput=$('pcpU1PrinterAlias'), ipInput=$('pcpU1PrinterIp');
 let aliasesCache={};let aliasStorageReady=false;
 const readAliases=()=>{try{return JSON.parse(localStorage.getItem('pcp_u1_printer_aliases')||'{}')}catch(_){return aliasesCache}};
 async function loadAliasesFromSqlite(){try{const base=((document.getElementById('pcpPrinterUrl')&&document.getElementById('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'');const r=await fetch(base+'/api/storage/snapshot?t='+Date.now(),{cache:'no-store'});const d=await r.json();if(!r.ok||!d.ok)return;let v=d.values&&d.values.pcp_u1_printer_aliases;if(typeof v==='string'){try{v=JSON.parse(v)}catch(_){v=null}}if(v&&typeof v==='object'&&!Array.isArray(v)){aliasesCache=v;localStorage.setItem('pcp_u1_printer_aliases',JSON.stringify(v));aliasStorageReady=true;refreshLabels();}}catch(_){}}
 async function saveAliasesToSqlite(map){try{const base=((document.getElementById('pcpPrinterUrl')&&document.getElementById('pcpPrinterUrl').value)||'http://127.0.0.1:8700').trim().replace(/\/+$/,'');const sr=await fetch(base+'/api/storage/snapshot?t='+Date.now(),{cache:'no-store'}),s=await sr.json();if(!sr.ok||!s.ok)throw new Error(s.error||'SQLite no disponible');const rev=Number(s.revisions&&s.revisions.pcp_u1_printer_aliases)||0;const wr=await fetch(base+'/api/storage/write',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:'pcp_u1_printer_aliases',value:JSON.stringify(map),expectedRevision:rev}),cache:'no-store'});const w=await wr.json();if(!wr.ok||!w.ok)throw new Error(w.error||'No se pudo guardar');aliasesCache=map;aliasStorageReady=true;}catch(e){const st=$('pcpPrinterStatus');if(st)st.textContent='Nombre guardado en este navegador; no se pudo guardar en SQLite: '+e.message;}}

 const aliases=readAliases();
 function refreshLabels(){if(!select)return;const current=select.value;Array.from(select.options).forEach(o=>{if(!o.value)return;const a=readAliases()[o.value];if(!o.dataset.baseLabel)o.dataset.baseLabel=o.textContent;const base=o.dataset.baseLabel.split(' — ')[0];o.textContent=a?base+' — '+a:base;});if(current)select.value=current;syncAlias();}
 function syncAlias(){if(!aliasInput||!select)return;const ip=select.value||ipInput?.value||'';aliasInput.value=ip?((readAliases()[ip])||''):'';}
 if(select){const observer=new MutationObserver(records=>{if(records.some(r=>r.target===select))refreshLabels();});observer.observe(select,{childList:true,subtree:false});select.addEventListener('change',syncAlias);}
 if($('pcpSaveU1Alias'))$('pcpSaveU1Alias').addEventListener('click',()=>{const ip=(select?.value||ipInput?.value||'').trim();if(!ip){alert('Selecciona primero una impresora o introduce su IP.');return;}const map=readAliases(),name=(aliasInput.value||'').trim();if(name)map[ip]=name;else delete map[ip];localStorage.setItem('pcp_u1_printer_aliases',JSON.stringify(map));saveAliasesToSqlite(map);refreshLabels();const st=$('pcpPrinterStatus');if(st)st.textContent='Nombre guardado para '+ip+'.';});
 if(ipInput)ipInput.addEventListener('change',syncAlias); loadAliasesFromSqlite();
 // Profile is now controlled from Options; preserve the existing taxCountry select for calculations.
 const orig=$('taxCountry'), opt=$('pcpOptionTaxCountry'), rate=$('pcpOptionTax'), rateOrig=$('taxRate');
 function updateProfileDisplay(){const c=orig, d=$('taxCountryDisplay');if(c&&d){const o=c.options[c.selectedIndex];d.value=o?o.textContent:'Personalizado';}const cur=$('currency'),cd=$('currencyDisplay');if(cur&&cd){const o=cur.options[cur.selectedIndex];cd.value=o?o.textContent:cur.value;}}
 if(opt&&orig){opt.value=orig.value;opt.addEventListener('change',()=>{const o=opt.options[opt.selectedIndex];if(o&&o.dataset.rate!==undefined&&rate){rate.value=o.dataset.rate;if(rateOrig)rateOrig.value=o.dataset.rate;}orig.value=opt.value;orig.dispatchEvent(new Event('change',{bubbles:true}));updateProfileDisplay();});}
 if($('pcpSaveMoney'))$('pcpSaveMoney').addEventListener('click',()=>{if(opt&&orig){orig.value=opt.value;orig.dispatchEvent(new Event('change',{bubbles:true}));}updateProfileDisplay();});
 if(orig)orig.addEventListener('change',updateProfileDisplay);if($('currency'))$('currency').addEventListener('change',updateProfileDisplay);
 // Keep read-only display labels synchronized when Options loads or settings are restored.
 setTimeout(()=>{if(opt&&orig)opt.value=orig.value;updateProfileDisplay();refreshLabels();},300);
})();
