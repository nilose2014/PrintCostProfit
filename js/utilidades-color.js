(()=>{'use strict';
function parseHex(value){
 const raw=String(value??'').trim();
 const m=raw.match(/^#?([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
 if(!m)return null;
 let h=m[1].toUpperCase();
 if(h.length===3||h.length===4)h=h.split('').map(x=>x+x).join('');
 const rgb='#'+h.slice(0,6),full='#'+h;
 return {rgb,full,alpha:h.length===8?parseInt(h.slice(6,8),16):null};
}
function namedColor(value){
 const parsed=parseHex(value);if(!parsed)return 'personalizado';
 const h=parsed.rgb;
 const r=parseInt(h.slice(1,3),16)/255,g=parseInt(h.slice(3,5),16)/255,b=parseInt(h.slice(5,7),16)/255;
 const max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min,l=(max+min)/2;
 let hue=0,sat=0;
 if(delta){sat=delta/(1-Math.abs(2*l-1));if(max===r)hue=60*(((g-b)/delta)%6);else if(max===g)hue=60*((b-r)/delta+2);else hue=60*((r-g)/delta+4);if(hue<0)hue+=360;}
 // Colores casi acromáticos: se nombran por luminosidad, no por el vecino de una paleta fija.
 if(sat<0.13){if(l<0.09)return 'negro';if(l<0.24)return 'gris muy oscuro';if(l<0.42)return 'gris oscuro';if(l<0.68)return 'gris';if(l<0.88)return 'gris claro';return 'blanco';}
 let base;
 if(hue<12||hue>=348)base='rojo';
 else if(hue<27)base=(l>0.55&&sat<0.65)?'coral':'rojo anaranjado';
 else if(hue<42)base=(l>0.68&&sat<0.62)?'beige':'naranja';
 else if(hue<58)base='amarillo anaranjado';
 else if(hue<72)base='amarillo';
 else if(hue<92)base='verde lima';
 else if(hue<155)base='verde';
 else if(hue<170)base='verde azulado';
 else if(hue<190)base='turquesa';
 else if(hue<205)base='cian';
 else if(hue<250)base='azul';
 else if(hue<275)base='índigo';
 else if(hue<295)base='violeta';
 else if(hue<320)base='morado';
 else if(hue<340)base='magenta';
 else base='rosa';
 // Tonos tierra y beige se distinguen del naranja por su menor saturación y luminosidad.
 if(hue>=18&&hue<48&&l<0.58&&sat<0.78)base=l<0.34?'marrón oscuro':'marrón';
 else if(hue>=18&&hue<52&&l>=0.68&&sat<0.58)base='beige';
 if(base==='rojo'&&hue>=350&&l<0.34)base='rojo oscuro';
 if(base==='verde'&&l<0.28)base='verde oscuro';
 if(base==='azul'&&l<0.25)base='azul oscuro';
 if(base==='rosa'||base==='magenta'||base==='violeta'||base==='morado'){
   if(l>=0.72) return 'rosa claro';
   if(l<0.30)return base+' oscuro';
 }
 if(base.endsWith('oscuro'))return base;
 if(l>=0.78)return base+' claro';
 if(l<=0.25)return base+' muy oscuro';
 if(l<=0.38)return base+' oscuro';
 if(sat>=0.82&&l>=0.42&&l<=0.62)return base+' intenso';
 if(sat<0.28)return base+' apagado';
 return base;
}
function guessedColor(name){const n=String(name||'').toLowerCase();for(const [word,hex] of [['negro','#222222'],['black','#222222'],['blanco','#ffffff'],['white','#ffffff'],['rojo','#ff0000'],['red','#ff0000'],['azul','#0000ff'],['blue','#0000ff'],['verde','#008000'],['green','#008000'],['amarillo','#ffff00'],['yellow','#ffff00'],['naranja','#ff8000'],['orange','#ff8000'],['rosa','#ff69b4'],['pink','#ff69b4'],['morado','#800080'],['purple','#800080'],['gris','#808080'],['gray','#808080'],['grey','#808080'],['marron','#8b4513'],['marrón','#8b4513']])if(n.includes(word))return hex;return '#808080'}
window.PCPColorUtils=Object.freeze({namedColor,guessedColor,parseHex});
})();
