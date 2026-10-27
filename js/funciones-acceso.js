/* Print Cost & Profit v1.554 — catálogo central de acceso.
 * Para cambiar una opción entre Gratis y Pro, mueve su ID entre los arrays.
 * free: calculadora, opciones, tasaciones y monitor flotante.
 * pro: áreas comerciales y acciones asociadas.
 * La autorización real sigue siendo validada por el módulo de licencias; este archivo no concede licencias.
 */
(function (global) {
  'use strict';
  global.PCP_FEATURE_ACCESS = Object.freeze({
    free: Object.freeze([
      'homeTabBtn',          // Inicio / calculadora
      'programOptionsBtn',   // Opciones
      'saveBtn',             // Guardar tasación
      'u1FloatingMonitor'    // Monitor flotante, si está presente
    ]),
    pro: Object.freeze([
      'clientsTabBtn',       // Clientes
      'openQuotesBtn',       // Presupuestos
      'ordersTabBtn',        // Pedidos
      'invoicesTabBtn',      // Facturas
      'spoolsTabBtn',        // Stock de filamento
      'accountingTabBtn',    // Contabilidad
      'saveQuoteFromCalcBtn',
      'createOrderFromCalcBtn'
    ]),
    proViews: Object.freeze([
      'clientsView', 'quotesView', 'ordersView',
      'invoicesView', 'spoolsView', 'accountingView'
    ]),
    proActions: Object.freeze([
      'saveQuoteFromCalcBtn', 'createOrderFromCalcBtn',
      'clientManagerSaveBtn', 'clientManagerDeleteBtn',
      'saveClientBtn', 'deleteClientBtn', 'saveQuoteBtn',
      'invoiceFromCalcBtn', 'invoiceFromQuoteBtn', 'orderSaveBtn',
      'spoolSaveBtn', 'accAddBtn', 'accExportBtn', 'accExportPdfBtn'
    ])
  });
})(window);
