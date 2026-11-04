

### v1.4 — Versión y comprobación manual de actualizaciones
- Se añade en Opciones un apartado que muestra la versión instalada.
- Se incorpora el botón «Comprobar actualizaciones» para consultar manualmente las publicaciones estables de GitHub.
- Cuando hay una versión superior, se muestra su número y se ofrece el ZIP del instalador de Windows si está adjunto; si no, se abre la página oficial de la publicación.
- Si no hay una versión posterior, se informa de ello. Se mantienen el aviso automático al iniciar y la comprobación periódica.
- Todos los textos nuevos se centralizan en `js/traducciones.js` y se traducen a español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Nueva versión pública basada en la compilación 5.58: reorganización del centro de mantenimiento, consejos separados de las tareas, correcciones de alertas y compatibilidad Unicode/RTL en los PDF. Preparada para actualización desde v1.3 mediante el instalador de GitHub Releases, conservando los datos locales.

- Primera adaptación Linux basada en la aplicación Windows v1.4: servidor Python nativo, API de almacenamiento SQLite, copias de seguridad, registros y servicios Snapmaker U1. Se mantiene el código de interfaz y las traducciones de ocho idiomas. La integración de posprocesado de Orca y las pruebas con impresora física quedan pendientes de validación.

- Reorganizado el centro de mantenimiento: tareas a todo el ancho en tarjetas compactas, consejos plegables debajo y formulario de creación a todo el ancho. Diseño adaptable a móviles.

- PDF de facturas y presupuestos: sustituida la codificación limitada a Helvetica/WinAnsi por renderizado Unicode de alta resolución con fuentes locales Noto para árabe y chino. Se conserva la generación local del PDF sin depender del navegador predeterminado ni de fuentes instaladas.

- Corregido el panel de alertas: los avisos de filamento y mantenimiento ya no se sobrescriben entre sí ni desaparecen al actualizar el inicio.

- Servidor U1: corregida la sintaxis de PowerShell al construir las consultas Moonraker con separadores `&`; el carácter se genera de forma segura. Guardado del script con BOM UTF-8 para Windows PowerShell 5.1 y visualización correcta de caracteres polacos.

- Monitor U1: ampliado a 8 segundos el tiempo de espera de la consulta de estado y a 10 segundos el margen de espera del navegador. Evita marcar la impresora como desconectada cuando responde al G-code pero tarda más en devolver el estado.
- Rediseñado el panel de mantenimiento con tarjetas, indicadores, formularios e historial más claros y adaptables.
- Ampliadas las revisiones preventivas de hotend, boquillas, calentador/termistor, extrusor, correas, ventiladores, cama, sensores y cableado.
- Corregida la detección de familias Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro y Bambu Lab.
- Las tareas preventivas nuevas se incorporan también a impresoras ya registradas sin borrar horas, tareas personalizadas ni historial. Las frecuencias comunes se marcan como orientativas y editables.
- Actualizadas las traducciones centralizadas de los ocho idiomas.
- Los gramos restantes de cada bobina se muestran con un máximo de dos decimales y el campo editable utiliza incrementos de 0,01 g. El valor almacenado no se modifica hasta que el usuario edita el campo.
- Renovado el diseño de Presupuestos, Pedidos y Facturas con cabeceras visuales, formularios ordenados, campos oscuros y tablas más legibles, manteniendo sus acciones y flujos actuales.
- Mejorada la presentación del inventario de filamento: formulario más claro, tarjetas de bobinas, indicadores de material restante y controles de edición.
- Unificado el aspecto de Contabilidad con el panel Inicio, incluyendo tarjetas de rentabilidad y paneles de movimientos.
- Rediseñada la pestaña Clientes con una cabecera visual, formulario más ordenado, campos oscuros coherentes con Inicio y controles con mejor jerarquía.
- El campo Observaciones ya no aparece como un cuadro blanco nativo; ahora mantiene el tema oscuro y el mismo estilo de los demás campos.
- La agenda presenta tarjetas compactas, con mejor lectura de los datos y sin alturas vacías innecesarias. Se conserva la búsqueda, edición, guardado y eliminación de clientes, así como su uso desde presupuestos, pedidos y facturas.

- Rediseñada la pestaña Opciones con tarjetas compactas en dos columnas, jerarquía visual más clara y estilo coherente con Inicio; impresora, copias de seguridad, perfiles y registro conservan el ancho completo cuando lo necesitan.
- Corregidos los botones «Mostrar campos» y «Ocultar campos»: ahora aplican y reflejan el estado plegado/desplegado del contenido, también mediante el atributo accesible aria-expanded.
- Se mantienen los campos, controles, preferencias de orden y plegado, traducciones existentes y datos guardados. No se modifica la base de datos SQLite.

- Se corrige la documentación de Opciones: los ocho README se convierten en páginas HTML independientes y localizadas.
- Cada idioma abre su propio manual HTML desde la aplicación; se elimina la ruta rota que apuntaba a archivos inexistentes.
- El manual árabe se muestra con dirección RTL y todos los manuales usan el tema oscuro de la aplicación.

- Se sustituyen los iconos decorativos de la barra superior por botones funcionales con estilo neón: alertas, documentación y opciones.
- La campana lleva al bloque de alertas y muestra el contador real de avisos.
- La interrogación abre el manual correspondiente al idioma seleccionado; se corrigen las rutas para usar los README localizados incluidos.
- El engranaje abre directamente la pestaña Opciones.

- Se conecta el bloque «Monitor de impresoras» de Inicio al endpoint real `/api/u1/status` del puente local, en lugar de leer texto de un panel que puede estar oculto.
- Muestra conexión, estado, archivo activo y progreso de impresión; indica desconexión si el puente o la impresora no responden.
- El botón «Abrir monitor» fuerza una actualización del estado antes de abrir el monitor completo.

- Se corrige el cálculo de los indicadores de Inicio para que utilicen la misma normalización y reglas de Contabilidad.
- Se excluyen tasaciones no contabilizadas y se evitan duplicados de ingresos asociados a pedidos antiguos.
- Ingresos, costes, beneficio, margen e importe cobrado se calculan con los mismos criterios que Rentabilidad avanzada.
- Rediseño completo de Inicio con panel de control, indicadores, gráficos, trabajos recientes, stock, accesos rápidos y alertas.
- Los datos se leen del historial, contabilidad y bobinas locales; se conservan las funciones existentes.
- Nuevos textos centralizados y traducidos a los ocho idiomas.

- Se incorpora un registro local persistente para errores de JavaScript, promesas no gestionadas, incidencias de SQLite y actividad de los controles principales.
- Se añade en Opciones un visor con filtros por nivel y búsqueda, además de exportación JSON y borrado manual.
- Los registros se guardan fuera de la carpeta de instalación, en los datos locales del usuario, con rotación automática y un máximo de 50 entradas visibles.
- El registro evita capturar valores de formularios y datos sensibles. Los archivos de logs generados nunca se incluyen en los ZIP de distribución.
- Todos los textos nuevos se centrali


### v1.3 — Traducciones del sistema de licencias y ampliación de idiomas
- Se incorporan en `js/traducciones.js` las traducciones que faltaban en los flujos de inicio de sesión, autenticación y consulta de licencias para español, inglés, francés, alemán, italiano y polaco.
- Los textos fijos del diálogo global («Aviso» y «Aceptar») utilizan el sistema central de traducciones, sin mantener un diccionario independiente.
- Se integran y mantienen los textos de la aplicación en los ocho idiomas disponibles: español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Los textos nuevos y los diálogos se centralizan en `js/traducciones.js` para evitar cadenas aisladas en los archivos de la aplicación.
- Se añaden dos idiomas nuevos, árabe y chino simplificado, ampliando la aplicación a ocho idiomas: español, inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.
- Se solucionan problemas con las miniaturas de los archivos G-code: extracción de la miniatura disponible de mayor resolución y conservación de la imagen al enviar el trabajo del monitor a la calculadora.
- Se corrigen errores menores de funcionamiento, inicialización, traducciones y alias de colores.

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

#### Paquete de instalación Linux (DEB)
- Añadido el instalador `.deb` para Ubuntu y Debian de 64 bits, correspondiente a la aplicación v1.4.
- El paquete utiliza la revisión Debian `1.4-1`; la versión que muestra la aplicación continúa siendo v1.4.
- Incluye acceso desde el menú de aplicaciones y arranque del servidor local. La desinstalación conserva la base SQLite, las copias de seguridad y la configuración del usuario.
