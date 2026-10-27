
// v1.174: Opciones debe ser una pestaña independiente, no hija de Presupuestos.
(function(){
 const options=document.getElementById('programOptionsView');
 const clients=document.getElementById('clientsView');
 if(options&&clients&&options.parentElement!==clients.parentElement){
   clients.parentElement.insertBefore(options,clients);
 }
})();
