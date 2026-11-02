# Print Cost & Profit v1.3

## Calculadora de costes, producción y gestión para impresión 3D

Print Cost & Profit ayuda a calcular costes de fabricación, controlar materiales y organizar trabajos de impresión 3D. El alcance de cada etapa se detalla por separado a continuación.

## Historial de versiones

### v1.3 — Traducciones del sistema de licencias y ampliación de idiomas
- Se incorporan en `js/traducciones.js` las traducciones que faltaban en los flujos de inicio de sesión, autenticación y consulta de licencias para español, inglés, francés, alemán, italiano y polaco.
- Los textos fijos del diálogo global («Aviso» y «Aceptar») utilizan el sistema central de traducciones, sin mantener un diccionario independiente.
- Se integran y mantienen los textos de la aplicación en los ocho idiomas disponibles: español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Los textos nuevos y los diálogos se centralizan en `js/traducciones.js` para evitar cadenas aisladas en los archivos de la aplicación.

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

## Instalación y actualización

Windows 10/11 es el entorno de referencia. Descarga el paquete de tu sistema operativo desde la sección Releases del repositorio, descomprime el archivo y sigue las instrucciones incluidas. Haz una copia de seguridad de tus datos antes de actualizar.

## Idiomas disponibles

Español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.

## Traducciones y mantenimiento

Las cadenas visibles de la aplicación se centralizan en `js/traducciones.js`. Toda etiqueta, mensaje, diálogo o campo nuevo debe añadirse allí y traducirse a los ocho idiomas, sin duplicar claves.

## Licencias

Las funciones de licencias, suscripciones y pagos permanecen desactivadas. Esta versión no activa restricciones de pago.

## Soporte

Para informar de un problema, incluye la versión utilizada, los pasos para reproducirlo y los mensajes de consola relevantes. No compartas contraseñas ni claves privadas.

**Versión del paquete:** `1.3.99`  
**Repository:** https://github.com/nilose2014/PrintCostProfit
