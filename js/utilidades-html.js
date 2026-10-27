(()=>{'use strict';
function escapeHtml(value){return String(value).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
window.PCPHtmlUtils=Object.freeze({escapeHtml});
})();
