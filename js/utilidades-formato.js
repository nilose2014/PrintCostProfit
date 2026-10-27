(()=>{'use strict';
const locale=()=>window.PCP_LOCALE||'es-ES';
const currency=()=>{const el=document.getElementById('currency');return (el&&el.value)||'EUR'};
const money=n=>new Intl.NumberFormat(locale(),{style:'currency',currency:currency()}).format(Number.isFinite(n)?n:0);
const pct=n=>(Number.isFinite(n)?n:0).toLocaleString(locale(),{maximumFractionDigits:1})+'%';
const moneyIn=(n,c)=>{try{return new Intl.NumberFormat(locale(),{style:'currency',currency:c||'EUR'}).format(Number.isFinite(n)?n:0)}catch(e){return money(n)}};
window.PCPFormatUtils=Object.freeze({currency,money,pct,moneyIn});
})();
