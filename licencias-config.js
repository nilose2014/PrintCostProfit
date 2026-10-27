/* Print Cost & Profit v1.560
 * Interruptor reversible del sistema de licencias.
 * enabled: false = modo gratuito, sin inicio de sesión ni bloqueo Pro.
 * enabled: true  = vuelve a activar autenticación y comprobación de licencias.
 * Los módulos de licencia se conservan en el proyecto para poder reactivarlos.
 */
window.PCP_LICENSE_CONFIG = {
  enabled: false,
  webUrl: 'https://print-cost-profit-web.web.app/',
  appId: 'print-cost-profit',
  offlineGraceHours: 72
};
