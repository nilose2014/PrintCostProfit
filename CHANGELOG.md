## Historial de versiones

### v1.4 — Corrección de detección de actualizaciones
- El comprobador obtiene primero la versión de la propia interfaz (cabecera y pie) y solo consulta `/api/version` como alternativa. Así evita comparar contra la versión de otro servidor local que pueda estar activo.
- Se mantiene la comprobación de publicaciones oficiales de GitHub y los textos traducidos existentes en `js/traducciones.js`.
- No se modifica el sistema de licencias ni se activa ninguna función de pago.


### v1.3 — Comprobación automática de actualizaciones
- Se carga el comprobador de versiones desde la aplicación para detectar nuevas publicaciones de GitHub y mostrar el aviso de actualización.
- Se mantiene la descarga manual desde la página oficial de la publicación; el comprobador no modifica ni instala archivos automáticamente.
- Los textos del aviso ya están centralizados y traducidos en `js/traducciones.js` para los ocho idiomas.
- No se modifica el sistema de licencias ni se activa ninguna función de pago.


### v1.3 — Licencias, traducciones, idiomas del instalador y actualizaciones
- Se incorporan en `js/traducciones.js` las traducciones que faltaban en los flujos de inicio de sesión, autenticación y consulta de licencias para español, inglés, francés, alemán, italiano y polaco.
- Los textos fijos del diálogo global («Aviso» y «Aceptar») utilizan el sistema central de traducciones, sin mantener un diccionario independiente.
- Se integran y mantienen los textos de la aplicación en los ocho idiomas disponibles: español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Los textos nuevos y los diálogos se centralizan en `js/traducciones.js` para evitar cadenas aisladas en los archivos de la aplicación.
- Se añaden árabe y chino simplificado a los idiomas disponibles durante la instalación, mediante archivos de idioma incluidos en el instalador.
- Los textos personalizados del instalador están traducidos a los ocho idiomas.
- El idioma seleccionado durante la instalación se guarda con su código correspondiente (`ar` o `zh-CN`).
- La versión del instalador se obtiene del archivo `VERSION`, que permanece en 1.3.

### v1.2 — Cambios del 31 de octubre: reconexión automática de la impresora al iniciar
- Al abrir la aplicación, se vuelve a aplicar al puente local la IP de la impresora seleccionada y guardada antes de consultar su estado.
- La comprobación de conexión se realiza después de sincronizar la configuración, evitando mostrar como desconectada una impresora online por conservar el puente una IP anterior.
- Se mantiene la selección y la IP guardada cuando la impresora está realmente offline; no se fuerza una búsqueda de red ni se cambia de impresora.

#### Cambios del 30 de octubre: monitor U1, miniaturas y SQLite
- Se conserva la impresora configurada y su IP aunque esté apagada o no responda; se identifica como «SIN CONEXIÓN» y se limpian los datos antiguos del monitor.
- El lector del G-code activo extrae la miniatura de mayor resolución y la conserva al enviar el trabajo a la calculadora.
- Se reducen las escrituras SQLite duplicadas: selección de impresora con clave canónica y guardado agrupado del borrador de la calculadora (350 ms), con vaciado al salir.
- Se mantienen las claves históricas como compatibilidad y los textos nuevos se centralizan en `js/traducciones.js` para los seis idiomas.

### v1.1 — Primera versión pública e historial de funciones anteriores
- Versión inicial pública: calculadora de costes, tasaciones, integración Orca/G-code, monitor U1, inventario, contabilidad, clientes, presupuestos, pedidos, facturas, SQLite y seis idiomas.
- Se agrupan aquí las mejoras publicadas antes de v1.2 para mantener una numeración comercial coherente, sin mostrar numeraciones internas de desarrollo.
