(()=>{'use strict';
const $=id=>document.getElementById(id);
function roundRecommendedPrice(value){const mode=$('priceRounding')?.value||'none';if(!Number.isFinite(value)||value<=0||mode==='none')return value;const cents=Math.round(value*100);if(mode==='up99'){let whole=Math.floor(cents/100);let candidate=whole*100+99;if(candidate<cents)candidate+=100;return candidate/100;}if(mode==='up95'){let whole=Math.floor(cents/100);let candidate=whole*100+95;if(candidate<cents)candidate+=100;return candidate/100;}if(mode==='up49'){let whole=Math.floor(cents/100);let candidate=whole*100+49;if(candidate<cents)candidate+=100;return candidate/100;}if(mode==='half')return Math.ceil((value-1e-9)*2)/2;if(mode==='whole')return Math.ceil(value-1e-9);return value;}
window.PCPPriceUtils=Object.freeze({roundRecommendedPrice});
})();
