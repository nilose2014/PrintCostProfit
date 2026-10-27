
(function(){
 const $id=id=>document.getElementById(id); const KEY='pcp_program_options_v170';
 function readOpts(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
 function saveOpts(o){localStorage.setItem(KEY,JSON.stringify(o))}
 function applyTheme(theme){document.body.classList.toggle('pcp-light-theme',theme==='light');}
 const originalCurrency=$id('currency'); const optionCurrency=$id('pcpOptionCurrency');
 if(originalCurrency&&optionCurrency){optionCurrency.innerHTML=originalCurrency.innerHTML;}
 function loadOptions(){const o=readOpts(); if(originalCurrency&&o.currency)originalCurrency.value=o.currency;if(optionCurrency&&originalCurrency)optionCurrency.value=originalCurrency.value;
  if($id('taxRate')&&o.taxRate!==undefined)$id('taxRate').value=o.taxRate;if($id('taxEnabled')&&o.taxEnabled!==undefined)$id('taxEnabled').checked=!!o.taxEnabled;
  $id('pcpOptionTax').value=$id('taxRate')?$id('taxRate').value:21;$id('pcpOptionTaxEnabled').checked=$id('taxEnabled')?$id('taxEnabled').checked:true;
  $id('pcpPrinterUrl').value=o.printerUrl||'http://127.0.0.1:8700';$id('pcpTheme').value=o.theme||'dark';applyTheme($id('pcpTheme').value);
 }
 function syncCurrency(){if(!originalCurrency||!optionCurrency)return;originalCurrency.value=optionCurrency.value;originalCurrency.dispatchEvent(new Event('change',{bubbles:true}));document.querySelectorAll('.currencyCode').forEach(e=>e.textContent=optionCurrency.value);const sym=({EUR:'€',USD:'$',MXN:'$',ARS:'$',COP:'$',CLP:'$',BRL:'R$',PEN:'S/',UYU:'$U',VES:'Bs.',RUB:'₽',PLN:'zł',UAH:'₴',GBP:'£',CAD:'$',AUD:'$',JPY:'¥',CNY:'¥',INR:'₹'})[optionCurrency.value]||optionCurrency.value;document.querySelectorAll('.currencySymbol').forEach(e=>e.textContent=sym);}
 $id('pcpSaveMoney').addEventListener('click',()=>{syncCurrency();if($id('taxRate')){$id('taxRate').value=Math.min(100,Math.max(0,Number($id('pcpOptionTax').value)||0));$id('taxRate').dispatchEvent(new Event('input',{bubbles:true}));$id('taxRate').dispatchEvent(new Event('change',{bubbles:true}));}if($id('taxEnabled')){$id('taxEnabled').checked=$id('pcpOptionTaxEnabled').checked;$id('taxEnabled').dispatchEvent(new Event('change',{bubbles:true}));}const o=readOpts();o.currency=optionCurrency.value;o.taxRate=$id('pcpOptionTax').value;o.taxEnabled=$id('pcpOptionTaxEnabled').checked;saveOpts(o);$id('pcpMoneyStatus').textContent='Preferencias guardadas.';});
 $id('pcpTestPrinter').addEventListener('click',async()=>{const status=$id('pcpPrinterStatus');const tr=(key,values={})=>window.PCP_I18N&&window.PCP_I18N.format?window.PCP_I18N.format(key,values):key;let base=$id('pcpPrinterUrl').value.trim().replace(/\/+$/,'');if(!/^https?:\/\//i.test(base)){status.textContent=tr('Introduce una dirección que empiece por http:// o https://.');return;}const o=readOpts();o.printerUrl=base;saveOpts(o);status.textContent=tr('Probando conexión…');try{const r=await fetch(base+'/api/u1/status',{cache:'no-store'});if(!r.ok)throw new Error('HTTP '+r.status);await r.json();status.textContent=tr('Conexión correcta (HTTP {status}). Respuesta recibida del puente local.',{status:r.status});}catch(e){status.textContent=tr('No se pudo confirmar la conexión: {message}. Comprueba que el puente está iniciado, la dirección es correcta y el navegador permite la conexión local.',{message:e.message||String(e)});}});
 $id('pcpSaveAppearance').addEventListener('click',()=>{const o=readOpts();o.theme=$id('pcpTheme').value;saveOpts(o);applyTheme(o.theme);});
 loadOptions();
})();
