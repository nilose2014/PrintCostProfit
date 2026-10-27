(()=>{'use strict';
async function compressPieceImage(file){const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});const img=await new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src=data});const max=900,scale=Math.min(1,max/Math.max(img.width,img.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(img.width*scale));canvas.height=Math.max(1,Math.round(img.height*scale));canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/jpeg',0.78)}
function extractGcodeThumbnail(text){
 // Orca/Bambu/Prusa suelen guardar una miniatura Base64 en comentarios del G-code.
 // Busca primero la miniatura de mayor resolución y tolera varias variantes de cabecera.
 const re=/^;\s*thumbnail(?:\s+begin)?\s+(\d+)x(\d+)(?:\s+\d+)?\s*\r?\n([\s\S]*?)^;\s*thumbnail\s+end\s*$/gim;
 let m,best=null,bestArea=0;
 while((m=re.exec(text))!==null){const w=Number(m[1])||0,h=Number(m[2])||0;const b64=m[3].split(/\r?\n/).map(x=>x.replace(/^;\s?/, '').trim()).join('').replace(/\s+/g,'');if(!b64||!/^[A-Za-z0-9+/]+={0,2}$/.test(b64))continue;const area=w*h;if(area>bestArea){bestArea=area;best=b64;}}
 if(!best)return '';
 const mime=best.startsWith('iVBOR')?'image/png':(best.startsWith('/9j/')?'image/jpeg':'image/png');
 return 'data:'+mime+';base64,'+best;
}
window.PCPImageUtils=Object.freeze({compressPieceImage,extractGcodeThumbnail});
})();
