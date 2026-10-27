(()=>{'use strict';
const euro=(id,n)=>{const el=document.getElementById(id);if(el)el.textContent=window.PCPFormatUtils.money(n)};
const showPieceImage=(data,getElement)=>{const value=data||'';const wrap=getElement('pieceImageWrap'),img=getElement('pieceImagePreview');if(wrap&&img){if(value){img.src=value;wrap.style.display='block'}else{img.removeAttribute('src');wrap.style.display='none'}}return value};
window.PCPDomUtils=Object.freeze({euro,showPieceImage});
})();
