(()=>{'use strict';
function parseTime(s){s=String(s||'').trim();if(!s)return 0;const colon=s.match(/^(?:(\d+):)?(\d{1,2}):(\d{1,2})$/);if(colon){const p=s.split(':').map(Number);return p.length===3?p[0]+p[1]/60+p[2]/3600:p[0]/60+p[1]/3600;}let total=0;const d=s.match(/(\d+(?:[.,]\d+)?)\s*d(?:ays?)?/i);const h=s.match(/(\d+(?:[.,]\d+)?)\s*h(?:ours?)?/i);const mi=s.match(/(\d+(?:[.,]\d+)?)\s*m(?:in(?:utes?)?)?/i);const sec=s.match(/(\d+(?:[.,]\d+)?)\s*s(?:ec(?:onds?)?)?/i);const val=x=>x?Number(x[1].replace(',','.')):0;if(d)total+=val(d)*24;if(h)total+=val(h);if(mi)total+=val(mi)/60;if(sec)total+=val(sec)/3600;return total;}
window.PCPTimeUtils=Object.freeze({parseTime});
})();
