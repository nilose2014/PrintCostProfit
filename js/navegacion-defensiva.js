
/* v1.172: reparación defensiva de navegación y controles de Opciones */
(function(){
 'use strict';
 const $=id=>document.getElementById(id);
 function showTab(id){
   const page=$(id); if(!page || !page.classList.contains('tab-page')) return;
   document.querySelectorAll('.tab-page').forEach(p=>p.classList.toggle('active',p===page));
   document.querySelectorAll('.tab-button').forEach(b=>{const on=b.dataset.tab===id;b.classList.toggle('active',on);b.setAttribute('aria-selected',on?'true':'false');});
   try{if(id==='quotesView'&&typeof renderSavedQuotes==='function')renderSavedQuotes();}catch(e){}
   try{if(id==='clientsView'&&typeof renderClientManager==='function')renderClientManager();}catch(e){}
   try{if(id==='invoicesView'&&typeof renderSavedInvoices==='function')renderSavedInvoices();}catch(e){}
   window.scrollTo({top:0,behavior:'auto'});
 }
 document.addEventListener('click',function(e){const b=e.target.closest&&e.target.closest('.tab-button[data-tab]');if(!b)return;e.preventDefault();showTab(b.dataset.tab);},true);
 // Recupera los campos del vendedor incluso si falla la inicialización de otro módulo.
 const sellerIds=['quoteCompany','quoteSellerEmail','quoteSellerPhone','quoteSellerAddress','quoteSellerPostalCode','quoteSellerCity','quoteSellerProvince','quoteTaxId'];
 function loadSeller(){try{const d=JSON.parse(localStorage.getItem('pcp_seller_data')||'{}');sellerIds.forEach(id=>{if($(id)&&d[id]!=null)$(id).value=d[id];});}catch(e){}}
 function saveSeller(){const d={};sellerIds.forEach(id=>{if($(id))d[id]=$(id).value;});localStorage.setItem('pcp_seller_data',JSON.stringify(d));const st=$('sellerSettingsStatus');if(st)st.textContent='Datos del vendedor guardados en la base de datos SQLite de este PC.';if(window.PCPNotice)window.PCPNotice('Datos del vendedor guardados en la base de datos SQLite de este PC.');}
 if($('saveSellerBtn'))$('saveSellerBtn').addEventListener('click',saveSeller);
 loadSeller();
 // Moneda e impuestos
 const cur=$('pcpOptionCurrency'), actualCur=$('currency'), tax=$('pcpOptionTax'), taxOn=$('pcpOptionTaxEnabled');
 if(cur&&actualCur){if(!cur.options.length){Array.from(actualCur.options).forEach(o=>cur.add(new Option(o.text,o.value)));}if(actualCur.value)cur.value=actualCur.value;}
 try{const o=JSON.parse(localStorage.getItem('pcp_v171_options')||'{}');if(cur&&o.currency)cur.value=o.currency;if(tax&&o.taxRate!=null)tax.value=o.taxRate;if(taxOn&&o.taxEnabled!=null)taxOn.checked=!!o.taxEnabled;if($('pcpPrinterUrl')&&o.printerUrl)$('pcpPrinterUrl').value=o.printerUrl;if($('pcpTheme')&&o.theme)$('pcpTheme').value=o.theme;}catch(e){}
 function saveMoney(){if(cur&&actualCur){actualCur.value=cur.value;actualCur.dispatchEvent(new Event('change',{bubbles:true}));actualCur.dispatchEvent(new Event('input',{bubbles:true}));}if(tax&&$('taxRate')){$('taxRate').value=tax.value;$('taxRate').dispatchEvent(new Event('change',{bubbles:true}));}if(taxOn&&$('taxEnabled')){$('taxEnabled').checked=taxOn.checked;$('taxEnabled').dispatchEvent(new Event('change',{bubbles:true}));}const o=getOpts();o.currency=cur?cur.value:'';o.taxRate=tax?tax.value:'21';o.taxEnabled=taxOn?taxOn.checked:true;saveOpts(o);const s=$('pcpMoneyStatus');if(s)s.textContent='Moneda e impuestos guardados.';if(window.PCPNotice)window.PCPNotice('Moneda e impuestos guardados.');}
 function getOpts(){try{return JSON.parse(localStorage.getItem('pcp_v171_options')||'{}')}catch(e){return {}}}
 function saveOpts(o){localStorage.setItem('pcp_v171_options',JSON.stringify(o));}
 if($('pcpSaveMoney'))$('pcpSaveMoney').addEventListener('click',saveMoney);
 if($('pcpTestPrinter'))$('pcpTestPrinter').addEventListener('click',async function(){const status=$('pcpPrinterStatus');const root=(($('pcpPrinterUrl')||{}).value||'http://127.0.0.1:8700').trim().replace(/\/$/,'');const o=getOpts();o.printerUrl=root;saveOpts(o);if(status)status.textContent='Probando conexión…';try{const r=await fetch(root+'/api/u1/status',{method:'GET',cache:'no-store'});const t=await r.text();if(!r.ok)throw new Error('HTTP '+r.status);if(status)status.textContent='Conexión correcta (HTTP '+r.status+'). '+t.slice(0,180);}catch(e){if(status)status.textContent='No se pudo conectar. Comprueba que el puente esté iniciado, la dirección sea correcta y que el navegador permita la conexión. Detalle: '+e.message;}});
 if($('pcpSaveAppearance'))$('pcpSaveAppearance').addEventListener('click',function(){const theme=$('pcpTheme')?$('pcpTheme').value:'dark';document.documentElement.dataset.theme=theme;document.body.dataset.theme=theme;const o=getOpts();o.theme=theme;saveOpts(o);let style=$('pcp-v171-theme');if(!style){style=document.createElement('style');style.id='pcp-v171-theme';document.head.appendChild(style);}style.textContent=theme==='light'?':root{--bg:#f4f6f9;--panel:#fff;--card:#fff;--text:#182230;--muted:#586579;--border:#d8dee8;color-scheme:light}body{background:var(--bg)!important;color:var(--text)!important} .panel,.card{background:var(--panel)!important;color:var(--text)!important}':' :root{color-scheme:dark}';});
})();
