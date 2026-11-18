# Print Cost & Profit 2.0
- Se establece la versión pública de la aplicación como **2.0** (versión técnica del paquete: `2.0.0`).
- La comprobación de actualizaciones deja de comparar números de versión: identifica el último ZIP publicado como recurso de una versión de GitHub, mediante su ID y fecha de subida.
- Se prepara la transición compatible desde la rama anterior: el lanzamiento de GitHub debe publicarse con la etiqueta `v2.0`, para que las instalaciones actuales v1.4 lo detecten directamente.
- Se elimina una copia duplicada de la imagen de la impresora y se reutiliza el mismo recurso en la barra lateral y el panel de inicio.
- Se conserva `traducciones.js` sin claves nuevas de interfaz.

# v2.0.323
- Corregida la vista **Impresoras** para que muestre los filamentos detectados por el mismo adaptador en tiempo real que utiliza el monitor, incluidos los slots de Creality CFS/Box y los sistemas multibobina Klipper.
- La vista admite ahora el número real de canales comunicado por la impresora y conserva la presentación anterior como alternativa cuando el firmware no entrega la lista unificada.
- No se han añadido textos nuevos de interfaz: se reutilizan claves ya existentes en `js/traducciones.js`.

# v2.0.244 — Correcciones de IPC, registro, historial y ventanas

- El registro de actividad ya no descarta eventos en `file://`: usa `PCP_LOCAL_API` por IPC para escribir, leer y vaciar el JSONL de Electron.
- El estado directo de Moonraker incorpora totales e historial de trabajos mediante `/server/history/totals` y `/server/history/list`, con caché independiente de 30 segundos.
- Se elimina el repintado nativo forzado tras importar G-code y se retira la acción `Refresh` del script de integración de ventanas.
- El instalador ejecuta un cierre previo de PCP identificado por ruta/nombre de ejecutable, sin finalizar Snapmaker Orca ni procesos ajenos.
- La finalización de una impresión genera aviso persistente y resumen flotante incluso cuando no se puede descontar filamento.
- Nuevas cadenas del resumen añadidas a los ocho idiomas en `js/traducciones.js`.

## v2.0.235 — Instalación automática de la integración Orca

- El instalador crea `C:\PrintCostProfit` y copia el BAT, el analizador PowerShell y los recursos que necesita.
- Al finalizar muestra la ruta exacta para Snapmaker Orca y deja una guía local.
- BAT y PowerShell localizan el ejecutable mediante la ruta real guardada por el instalador.
- Se mantiene la bandeja local de entrega a Electron, sin servidor HTTP.

## v2.0.224

- v2.0.224: las consultas de U1, I7 y K2 PRO pasan directamente desde el proceso principal de Electron a Moonraker por la IP de cada máquina. Estado, información de impresora y lectura de cabecera G-code dejan de atravesar los endpoints PowerShell de localhost. Las tarjetas y el monitor utilizan el mismo transporte IPC seguro; la caché de estado está separada por IP. El servidor local se conserva para servir la aplicación, la integración Orca y los servicios que aún dependen de él.

## v2.0.222

- v2.0.222: se elimina la descarga completa del G-code para leer los filamentos. El servidor solicita únicamente la cabecera (máximo 8 MiB), donde están los metadatos y la miniatura. Monitor y panel reutilizan el mismo trabajo por IP y nombre de archivo, evitando dos descargas simultáneas; ambos consultan también el estado de la misma IP seleccionada.

- v2.0.221: la pestaña Impresoras y el monitor comparten ahora el mismo trabajador persistente de estado por dirección IP. Cada impresora tiene su propia caché y conexión Moonraker; cambiar la selección no reinicia ni modifica el trabajador de otra máquina. Las tarjetas dejan de consultar un endpoint distinto para el estado en vivo. Se amplía la telemetría compartida para incluir malla, sensores y datos de capas.

## v2.0.220

- v2.0.220: el análisis del G-code queda vinculado a la IP exacta de la impresora seleccionada. Al cambiar de impresora se cancela también el trabajo de lectura en segundo plano del servidor, no solo el sondeo del navegador. Se evita que una lectura antigua consuma recursos o interfiera con la nueva selección.

## v2.0.219

- v2.0.219: se unifica el recorrido incremental de traducciones para evitar escaneos completos duplicados. Las llamadas repetidas a refresh se agrupan y solo se mantiene un recorrido completo pendiente. El cambio de impresora aborta inmediatamente la petición anterior, prioriza la última selección y no presenta las cancelaciones esperadas como errores.

## v2.0.219

- v2.0.219: se corrige la lectura del progreso del G-code para que los estados transitorios de escritura o lectura del archivo de trabajo no se devuelvan como HTTP 400; solo los identificadores inválidos reciben ese estado. La traducción incremental se limita a pequeñas tareas de hasta 4 nodos o 5 ms por fotograma, y los cambios de idioma recorren el documento de forma progresiva.

## v2.0.217

- v2.0.217: se corrige la coordinación de sondeos al cambiar de impresora. Si la consulta anterior sigue liberando su controlador, la nueva consulta queda pendiente y se ejecuta automáticamente; durante la conexión se limpian los datos antiguos para no mostrar información de otra impresora. Las cancelaciones esperadas ya no se presentan como errores de conexión.

## v2.0.216

- v2.0.216: se reduce el trabajo por fotograma del traductor dinámico para evitar bloqueos de la interfaz. El recorrido inicial procesa como máximo 60 nodos por fotograma y las actualizaciones del observador, 35; se conserva la traducción incremental y no se modifican las claves ni los datos de traducción.

## v2.0.216

- v2.0.216: se unifica la selección de impresora entre tarjetas, desplegable y monitor. Al elegir una tarjeta, la IP seleccionada se propaga inmediatamente a todos los controles; los errores o cancelaciones de configuración ya no restauran la impresora anterior. Las respuestas de cambios anteriores se ignoran.


- v2.0.214: se corrige la selección desde las tarjetas de impresoras. La tarjeta seleccionada se actualiza inmediatamente y se descartan respuestas de sondeos anteriores para evitar que vuelva a mostrarse la impresora previa.

- v2.0.213: la aplicación de escritorio realiza las lecturas de instantánea y los lotes de escritura SQLite mediante IPC de Electron, sin pasar esas operaciones por HTTP. Se mantienen las revisiones optimistas y el mismo archivo SQLite compartido con el servidor local. Las operaciones de copias de seguridad y las integraciones Orca/U1 continúan usando el servidor local.

## v2.0.212
- Reduce escrituras repetidas y evitar ciclos rápidos de reintento cuando SQLite o el puente no confirman una operación. La cola conserva el último cambio pendiente y aplica espera progresiva; al reanudar Windows se reactiva la sincronización.

- v2.0.212: adaptador SQLite persistente en el servidor local para evitar iniciar un proceso por cada operación; conserva escrituras, revisiones, conflictos, copias de seguridad y restauración.
- v2.0.210: corrección de la declaración y gestión de `pendingSelectedIp` en el panel de impresoras.
- v2.0.209: corregido el error `pendingSelectedIp` no definido y la cola de cambios de impresora durante las actualizaciones.
## v2.0.208
- Corregido el cambio de impresora en la pestaña Impresoras: la IP solicitada tiene prioridad y las recargas pendientes no descartan el cambio.
- El selector restaura la selección anterior si el puente no confirma la nueva IP.
- Reducida la frecuencia de guardado del historial térmico para aliviar las escrituras SQLite.

﻿- v2.0.207: Corregido el cambio de impresora en la pestaña Impresoras: al confirmar el puente la nueva IP se sincroniza inmediatamente con la selección de detalle antes de refrescar las tarjetas y la información. Evita que la IP anterior tenga prioridad y mantenga visible la impresora equivocada. No se modifica SQLite ni sus rutas.
- v2.0.207: Restaurado Servidor_Panel_U1.ps1 exactamente desde la versión 2.0.204 para revertir el único cambio de PowerShell introducido en 2.0.205; se conserva el resto de las correcciones de la aplicación. Eliminado un archivo .pyc accidental del ZIP.
- v2.0.205: Reducidas las escrituras de telemetría del monitor U1: el tiempo se persiste en intervalos de cinco minutos y los cambios de estado se guardan inmediatamente. Corregida la detección de primera telemetría para que no vuelva a guardar en cada sondeo. Al seleccionar una impresora desde sus tarjetas, se crea la opción del selector U1 si todavía no estaba cargada y se dispara el cambio real de conexión. Sin cambios en SQLite ni en sus rutas.
- v2.0.205: El monitor U1 solo considera finalizada una impresión cuando recibe un estado explícito complete/completed/finished; standby, ready e idle ya no provocan descuentos ni cierran el movimiento provisional. La transición canceling/cancelling tampoco se confunde con una cancelación confirmada. Se recupera una ventana de resumen al cancelar. El mensaje de espera del arranque pasa a «Iniciando el programa, espera por favor…». Sin cambios en SQLite.
- v2.0.202: El servidor local ahora trata las desconexiones del navegador durante el envío de respuestas como conexiones canceladas, sin registrarlas como errores generales del servidor. Se amplía a Int64 la conversión del tiempo de antigüedad de la caché U1 para evitar desbordamientos Int32. No se modifica la base de datos, su esquema, sus datos ni sus rutas.
- v2.0.201: Sustituida la cola de escrituras individuales por lotes de hasta 25 claves en una sola petición y transacción SQLite. Cada clave conserva su revisión independiente; los conflictos se devuelven por clave y se reintentan sin descartar los cambios válidos del lote. La sincronización entre ventanas consulta el snapshot cada 15 segundos en lugar de cada 5. No se modifica el esquema, la ubicación ni los datos SQLite. El adaptador Python sigue ejecutándose por lote; esta versión reduce arranques, no introduce todavía un proceso persistente.
- v2.0.200: Evitado guardar la IP manual antes de que el puente confirme la selección; si falla /api/u1/config, no se encola una IP que no se ha aplicado. El refresco periódico del panel de inicio desde mantenimiento ahora solo se ejecuta cuando la pestaña de inicio está visible y se difiere al tiempo ocioso; se reduce la frecuencia de 30 a 60 segundos. Sin cambios en SQLite, esquema ni rutas.
- v2.0.200: Evitado el doble refresco al cambiar de impresora desde las tarjetas: el cambio del selector ya guarda la IP y emite el evento que refresca el panel, por lo que se elimina la segunda carga paralela. En /api/u1/config se separa el guardado de la IP del arranque del trabajador de estado; si falla el trabajador, la IP guardada no se informa falsamente como fallida y el detalle queda registrado en printcostprofit_app.log. Los errores reales al guardar la configuración siguen devolviendo 502 y ahora incluyen diagnóstico en el log. Sin cambios en SQLite ni en sus rutas.
- v2.0.198: Optimizada la inicialización de traducciones: las 79 solicitudes de actualización del diccionario se agrupan para reconstruir índices una sola vez y la primera traducción del DOM se procesa en fragmentos para evitar bloquear la carga. Se conserva la traducción dinámica de elementos añadidos y los cambios de idioma. No se modifican datos ni rutas de SQLite.
- v2.0.197: Mejorada la cola de almacenamiento SQLite y la resolución de conflictos entre ventanas. El puente devuelve la revisión y el valor actuales de la clave en conflicto, por lo que el cliente puede reconciliar esa escritura sin descargar el snapshot completo. Se conserva la comparación de revisiones y el reintento de la última escritura pendiente; los errores de red o servidor mantienen la reconciliación mediante snapshot. No se modifica el esquema, la ubicación ni los datos de la base SQLite.
- v2.0.196: Corregido el error que impedía actualizar el monitor U1: el controlador AbortController del sondeo ahora está declarado en el ámbito correcto. Al cambiar de impresora se cancela explícitamente la consulta anterior antes de iniciar el nuevo ciclo, evitando referencias a una variable inexistente y respuestas tardías de la impresora anterior. No se modifican la base de datos ni los datos guardados.
- v2.0.195: Corregido el guardado del trabajo activo U1: se define y compara correctamente el registro de miniatura por archivo, eliminando el ReferenceError `thumbnailRecord is not defined`. Al cambiar de impresora se cancela el sondeo anterior, se muestra inmediatamente el último trabajo guardado para la impresora seleccionada y se inicia un sondeo nuevo. La selección de IP ya no espera una segunda consulta síncrona a Moonraker; el trabajador de estado actualiza la conexión en segundo plano. Nuevos mensajes traducidos en los ocho idiomas.
- v2.0.194: Ajustado el almacenamiento del monitor U1: la miniatura del trabajo activo se separa del registro de progreso y solo se guarda cuando cambia; se recupera la cola de escrituras pendientes y se priorizan las operaciones interactivas. SQLite ya no ejecuta DDL ni renegocia WAL en cada petición si el esquema está actualizado. La lectura de caché de estado U1 incorpora reintentos y un estado transitorio seguro ante fallos.
- v2.0.193: Reducida la carga de almacenamiento del monitor U1: la miniatura del trabajo activo se guarda en una clave independiente y solo cuando cambia; las actualizaciones periódicas del trabajo ya no reenvían la imagen base64. Recuperación de la cola de escrituras mejorada para reactivar claves pendientes y dar prioridad a operaciones interactivas frente a telemetría. Evitada la renegociación de WAL en cada proceso SQLite. El endpoint de estado U1 reintenta lecturas de caché y devuelve estado transitorio en vez de HTTP 502 ante fallos de lectura.
- v2.0.193: Corregida la gestión de temporales de la caché de impresoras. Si falla la escritura o sustitución de la caché U1, el archivo temporal se elimina en el bloque finally. Al iniciar el servidor se limpian únicamente temporales conocidos de más de 24 horas; no se modifican la base SQLite, las copias de seguridad ni las cachés definitivas.
- v2.0.191: Reconstruido el listado de alertas del inicio con un contenedor flex vertical y tarjetas de altura automática mínima, eliminando el diseño grid que seguía provocando solapamientos. Se fijan las dimensiones y el flujo de icono, título y descripción; la hoja correctiva se carga al final para prevalecer sobre estilos heredados.
- v2.0.190: Corregido el diseño de las alertas del inicio: se elimina el pseudoicono heredado que ocupaba una celda adicional del diseño en cuadrícula y desplazaba el texto, provocando que se apilara verticalmente. Se fuerza el ajuste normal del texto dentro de la tarjeta.
- v2.0.190: Rediseñadas las alertas del panel de inicio con tarjetas oscuras, iconos más visibles, título y descripción separados, mejor espaciado y contraste. Se limita la vista previa a cuatro avisos para evitar que el texto quede comprimido. Incluye icono específico para problemas de impresoras.
- v2.0.190: Añadidos avisos en la campanita para errores y problemas detectados en la impresora seleccionada, incluidos estados de fallo y desconexión. Los avisos se actualizan y se marcan como resueltos cuando desaparece el problema. Se añade en Opciones una casilla para activar o desactivar estos avisos. Traducciones centralizadas en los ocho idiomas.
- v2.0.190: Orca: se desplaza el punto de detección del control de rueda al 85 % de la altura de la ventana nativa. Así queda en la zona inferior de los ajustes y evita depender de la disposición variable del bloque «Impresora» cuando está desplegado o plegado.
- v2.0.190: Orca: el destino del desplazamiento ya no depende de WindowFromPoint, que podía devolver la superficie superpuesta de PCP. Se enumeran los controles hijos visibles de la ventana de Orca y se selecciona el control del propio proceso que cubre el punto inferior del panel; si no existe, se cancela sin interactuar con otra ventana.
- v2.0.190: Orca: se bajan las flechas de desplazamiento al 62 % del área del laminador y el punto de destino de la rueda al 68 %, dentro de la zona inferior visible del panel de ajustes. Se mantiene la comprobación de proceso para impedir interacciones fuera de Orca.
- v2.0.184: Corregido el formato de `package.json`: se elimina el BOM UTF-8 que impedía a `@electron/rebuild` analizar el archivo JSON durante la compilación del instalador de Windows.
- v2.0.184: Avisos de mantenimiento: el cálculo de vencimientos ahora suma las horas reales de impresión igual que la pantalla de Mantenimiento, y vuelve a comprobarlas periódicamente y tras cambios en las tareas. Orca: se elimina SendInput y el movimiento físico del cursor; las flechas envían la rueda únicamente al control detectado que pertenece al proceso de Orca, cancelando la acción si el destino no es Orca.
- v2.0.182: Corregida la conversión del delta negativo de rueda a UInt32 en SendInput. PowerShell ya no intenta convertir -120 directamente a UInt32; se conserva su representación binaria mediante BitConverter. Esto evita el error de conversión que impedía ejecutar ScrollOptions.
- v2.0.181: Corregido el script real de ScrollOptions: ahora utiliza SendInput con MOUSEEVENTF_WHEEL sobre el área izquierda de ajustes y restaura la posición del cursor. Se elimina el envío de WM_MOUSEWHEEL al HWND principal, que no producía desplazamiento en el panel.
- v2.0.180: Se sustituye el envío de mensajes de rueda a HWND supuestos por entrada real de rueda de Windows (SendInput), situada sobre el área de ajustes de Orca. Se restaura la posición original del cursor tras inyectar el desplazamiento.
- v2.0.179: El scroll vuelve a dirigirse a un control hijo real de Orca, localizado en un punto fijo dentro del contenido desplazable del panel izquierdo. Se elimina el envío al marco principal que no era procesado por Qt. El destino se valida por PID para impedir enviar eventos a otra aplicación; ya no depende de la altura de las flechas.
- v2.0.178: Sustituida la detección basada en WindowFromPoint por el envío de WM_MOUSEWHEEL directamente a la ventana principal de Orca, con coordenadas dentro del panel izquierdo de ajustes. El desplazamiento ya no depende de la altura de las flechas ni de que coincidan con la barra de scroll; se evita seleccionar encabezados o controles ajenos al panel.
- v2.0.177: El desplazamiento de las opciones de Orca toma ahora la coordenada vertical real del clic en las flechas. Así el evento de rueda se dirige a la zona del panel izquierdo situada a esa misma altura, aunque se oculten/expandan secciones como Impresora o Filamentos y cambie la posición de la barra de desplazamiento.
- v2.0.176: Corregidas las declaraciones Win32 que faltaban en PCPWin32Overlay para WindowFromPoint y SendMessageTimeout. El desplazamiento de las opciones nativas de Orca ya puede localizar el control izquierdo y enviar WM_MOUSEWHEEL sin provocar el error de método inexistente.
- v2.0.175: Corregido el tamaño del área integrada de Orca: el contenedor de trabajo vuelve a ocupar todo el espacio vertical disponible. Los controles de desplazamiento quedan en una columna lateral fija sin reducir la altura del laminador. La v2.0.174 había dejado el área como una fila flex sin crecimiento y Orca se mostraba solo en una franja superior.
- v2.0.174: Se incorpora desplazamiento dirigido al panel nativo izquierdo de ajustes de Snapmaker Orca. Los botones compactos arriba/abajo envían WM_MOUSEWHEEL al control real situado dentro del área de ajustes (22 % del ancho), en lugar del borde de la ventana o la cama 3D. Se valida que el destino pertenezca a la ventana de Orca y se informa de errores. Traducciones añadidas en los ocho idiomas.
- v2.0.173: Se retira por completo la barra externa de desplazamiento de opciones de Orca introducida en v2.0.172, ya que no funcionaba con el panel nativo. Se restaura el área de alojamiento original del laminador y se elimina el IPC y el código PowerShell asociados. No se modifica la integración nativa establecida en v2.0.171.
- v2.0.172: Añadido un control lateral compacto para subir y bajar las opciones de impresión de Snapmaker Orca desde PCP, con botones, rueda y arrastre. Envía desplazamiento a la zona izquierda nativa sin modificar los perfiles ni superponer HTML a la ventana de Orca. Cinco textos nuevos centralizados en traducciones.js para los ocho idiomas.
- v2.0.171: Corregida la selección de bobinas alternativas: solo se ofrecen tonos cromáticamente próximos de la misma familia (por ejemplo, rojo y rojo anaranjado); se excluyen negro, blanco, beige y colores de familias distintas. Las alternativas se muestran en un selector compacto para conservar el diseño del monitor.
- v2.0.170: La selección de bobinas alternativas del monitor U1 y del panel de impresoras ahora reconoce variantes de la misma familia de color. Permite, por ejemplo, rojo ↔ rojo anaranjado y distintas tonalidades de verde, manteniendo la compatibilidad de material y el requisito de stock disponible. No ofrece colores de familias distintas.
- v2.0.169: Orca se muestra sin barra de título ni bordes de ventana dentro del rectángulo asignado por PCP. Se mantiene como ventana Qt de nivel superior propiedad de PCP para conservar los diálogos modales; al separarla se restauran sus bordes y controles normales.
- v2.0.168: Se amplía el espacio vertical del laminador integrado, compactando la cabecera, los botones y el estado. El área nativa de Orca ocupa todo el espacio restante y sus dimensiones se limitan al área cliente disponible de PCP, también al reducir la ventana.
- v2.0.167: Se amplía el área útil de Snapmaker Orca. Se compactan cabecera, botones y mensaje de estado, y se ocultan elementos descriptivos secundarios en pantallas de altura habitual para ganar espacio vertical y facilitar el acceso a los controles y desplazamientos de Orca.
- v2.0.166: Se corrige la integración con los diálogos modales de Snapmaker Orca. La ventana Qt vuelve a ser de nivel superior y propiedad de PCP, en lugar de hija WS_CHILD; así Crear proyecto, Abrir y Guardar pueden mostrar sus diálogos correctamente. Se añade sincronización al mover, redimensionar, maximizar y restaurar PCP, limitando el rectángulo de Orca al área de la aplicación.
- v2.0.165: Se optimiza la traducción incremental del DOM. El observador ya no recorre subárboles completos ni compara cada nodo con todos los demás; procesa cambios en lotes pequeños y omite las mutaciones generadas por la propia traducción para evitar bloqueos prolongados.
- v2.0.164: Orca pasa a ser una ventana hija nativa de PCP, recortada por Windows al área cliente para que nunca salga de la aplicación al cambiar su tamaño. El panel aprovecha el espacio disponible sin imponer una altura mínima; se reduce el tamaño mínimo de la ventana principal.
- v2.0.163: Se amplía el área visible del laminador Orca y se compactan los controles superiores para dar más altura a la ventana nativa.
- v2.0.162: La integración de Orca descarta ventanas provisionales sin título y espera a la ventana principal Snapmaker/Orca, validando título, identificador y PID antes de acoplarla.
- v2.0.161: Orca ahora espera a que la ventana principal Qt sea estable antes de integrarla; recupera identificadores HWND reemplazados y descarta coordenadas inválidas al minimizar.
- 2.0.160: Orca se muestra como ventana nativa Qt de nivel superior sin bordes, propiedad de PCP y posicionada sobre el área del laminador; se elimina SetParent para evitar los fallos de renderizado al mezclar Qt y Electron. Seguimiento de posición al mover, redimensionar, minimizar y restaurar PCP.
- 2.0.159: integración nativa revisada: Orca se aloja directamente como ventana hija de la ventana principal de PCP, evitando la ventana anfitriona Electron opaca que tapaba el contenido Qt. Reparado además un separador ausente en traducciones.js que impedía cargar el sistema de idiomas.
- 2.0.158: restaurado el panel integrado de Orca de la base 2.0.148. La ventana anfitriona ya no recibe coordenadas fijas al mover/redimensionar; su geometría procede del área real medida por la interfaz. Se sincroniza también al desplazar la página y cambiar de pestaña.
- 2.0.157: cambio de estrategia del laminador: Snapmaker Orca se abre en ventana independiente, sin SetParent ni ventana anfitriona superpuesta. Se priorizan las escrituras interactivas de SQLite frente al historial térmico de telemetría.
- 2.0.156: restaurados main.cjs y orca-window.ps1 de la base 2.0.148, última referencia con acoplamiento visible de Orca. Se revierte la lógica posterior de visibilidad, posicionamiento y selección de ventana que alteró el acoplamiento nativo.
- 2.0.155: recuperada la detección de ventanas Qt de la base 2.0.148. Se admiten ventanas principales del árbol del proceso aunque Snapmaker Orca todavía no haya asignado un título; se mantienen las mejoras posteriores del host y del redimensionamiento.
- 2.0.154: corregida la selección de la ventana de Snapmaker Orca. Ya no se acoplan ventanas Qt auxiliares o sin título; se espera a identificar la ventana principal para evitar el panel vacío.
- 2.0.153: corregido el orden de visualización del host nativo de Orca; se muestra la superficie anfitriona antes del acoplamiento y se reajusta la ventana Qt después para evitar que Chromium la tape. Eliminado un listener duplicado que restablecía coordenadas fijas.
- 2.0.152: corregido el tamaño y la posición del panel nativo de Orca; el redimensionamiento y los cambios de pestaña conservan las dimensiones reales del área visible.
## v2.0.151
- Orca integrado: selección estable de la ventana Qt principal, priorizando el título Snapmaker/Orca y evitando capturar ventanas transitorias sin título durante el arranque.
- Orca integrado: redimensionamientos agrupados y serializados; si Windows pierde el acoplamiento, se vuelve a localizar y acoplar la ventana Qt en lugar de dejar el panel permanentemente vacío.

## v2.0.150
- Orca integrado: evita mostrar la ventana anfitriona vacía mientras Snapmaker Orca todavía se está iniciando o buscando su ventana Qt.
- Orca integrado: la ventana nativa solo se muestra después de confirmar un identificador de ventana válido; al cambiar de pestaña durante el arranque permanece oculta.
- Orca integrado: si el proceso ya está iniciado pero el primer acoplamiento no terminó, el botón permite reintentar el acoplamiento en lugar de indicar falsamente que el laminador ya está listo.

## v2.0.149
- Estabilidad: la sincronización SQLite solo notifica a la interfaz cuando detecta cambios reales.
- Inicio: eliminado el repintado completo periódico; el panel se actualiza por cambios y navegación, y limita el descubrimiento de impresoras.
- Avisos: eliminado el escaneo completo cada 5 segundos; se ejecuta al iniciar y cuando cambian los datos.

## 2.0.148
- Orca: corregido el error de PowerShell que impedía acoplar la ventana Qt; el identificador de proceso obtenido con `GetWindowThreadProcessId` ya no utiliza la variable automática reservada `$PID`.

## 2.0.147
- Orca slicer: the embedded native window now follows the actual panel area, including tab changes, resizing and maximizing.

### v2.0.147
- Corregida la asignación manual de bobinas alternativas en el monitor U1: la selección explícita se conserva y se muestra como asignada aunque el color HEX sea aproximado.
- Añadida la traducción del aviso de asignación en los ocho idiomas.

## v2.0.143
- Monitor U1: la consulta del progreso del G-code pasa de intervalos de 500 ms a sondeo adaptativo (1,5–2,5 s), con tiempo máximo de espera y timeout por petición. Se conserva el detalle de los errores HTTP del servidor.

## v2.0.135
- Laminador Orca: se añade una apertura de diagnóstico en ventana independiente que evita reparentar la ventana Qt dentro de Electron. Permite comparar la selección de objetos en modo independiente y distinguir fallos del alojamiento de ventana de fallos del propio motor Orca.

## v2.0.134
- Servidor Windows: se guarda `Servidor_Panel_U1.ps1` como UTF-8 con BOM y finales de línea Windows para que PowerShell 5.1 interprete correctamente los caracteres polacos y no corrompa las cadenas ni las comillas durante el arranque.

## v2.0.133
- Mantenimiento: el selector ya no mezcla perfiles económicos guardados en Opciones con impresoras reales. Muestra las impresoras detectadas usando sus alias por IP y conserva las máquinas añadidas manualmente.

## v2.0.133
- Orca: la búsqueda de la ventana principal ahora se limita a los procesos descendientes del ejecutable seleccionado o a su carpeta exacta de instalación. Evita enganchar por error otra instancia de Orca abierta.

## v2.0.129
- Integración Snapmaker Orca: valida que el script de alojamiento devuelva un identificador de ventana y un PID antes de mostrar el panel; evita presentar un espacio vacío como si el laminador se hubiera integrado correctamente.
- Diagnóstico: registra la ruta del ejecutable, el PID del proceso lanzador, el resultado de la asociación y los cierres inesperados de procesos secundarios de Electron para separar fallos de la interfaz de posibles cierres del proceso Orca.

## v2.0.128
- Malla de cama: rediseña las mallas densas para que ocupen el espacio disponible sin reducir el gráfico a una cuadrícula diminuta. En mallas de alta resolución se eliminan las cifras superpuestas, se conservan cinco referencias por eje y cada celda ofrece sus coordenadas X/Y y altura Z al pasar el cursor.
- Snapmaker Orca: amplía la detección de la ventana nativa a 90 segundos y reconoce procesos OrcaSlicer/Snapmaker delegados dentro de la carpeta de instalación. Se amplía el margen de espera de Electron para que no cancele la búsqueda antes de tiempo.

## v2.0.127
Se evita que lecturas asíncronas antiguas del G-code sobrescriban la impresión activa al cambiar de impresora o de archivo. Las respuestas de sondeo obsoletas se descartan y la caché de telemetría queda aislada por IP para impedir que un trabajador anterior publique datos de otra impresora.

- Snapmaker Orca: corrige el tiempo límite del proceso de integración nativa. El script de Windows podía esperar hasta 35 segundos para localizar la ventana real, pero Electron lo terminaba a los 25 segundos, dejando el panel en «Preparando Snapmaker Orca». Ahora el margen de espera supera el máximo del script.
- Malla de cama: sustituye la superficie 3D deformada por una vista superior tipo mapa térmico, con valores Z en cada punto, ejes X/Y en milímetros y escala de colores legible. Se eliminan la perspectiva y los controles de giro que provocaban la distorsión.

- Comunicación U1: un único trabajador persistente consulta Moonraker en segundo plano y mantiene una caché compartida entre pestañas; cambiar de sección ya no inicia una nueva consulta de conexión. La selección o detección de otra impresora reinicia únicamente ese trabajador.
## v2.0.124
- Corrige un error JavaScript en la asignación de bobinas desde el monitor U1: elimina una referencia a una función de traducción fuera de su ámbito, que podía interrumpir la acción después de crear y asignar una bobina.

## v2.0.123
- Corrige la lectura de importes de la calculadora para admitir decimales con coma o punto al registrar trabajos desde el monitor U1; evita que mano de obra, extras y otros componentes se conviertan en cero por el formato decimal.
- Guarda mano de obra y extras con claves compatibles (`laborAndExtras`, `labor` y `extras`) y permite que Contabilidad lea tanto los movimientos nuevos como los antiguos.
- Refuerza la integración nativa de Snapmaker Orca: detecta también ventanas principales cuyo proceso se ha separado del lanzador, prioriza títulos de Snapmaker/Orca, restaura la ventana integrada y recoloca el panel al mover o redimensionar la aplicación.
- Devuelve el título de la ventana alojada para facilitar la comprobación de la integración.

## v2.0.122
- Cambia la integración de Snapmaker Orca: la ventana nativa del laminador se aloja directamente como ventana hija de la ventana principal de Print Cost & Profit; ya no se crea una segunda ventana anfitriona superpuesta.
- Posiciona el área nativa dentro del espacio de trabajo de la aplicación y la redimensiona al cambiar el tamaño de la ventana principal.
- La acción de mostrar/ocultar recoloca la ventana nativa en el área integrada; separar Orca sigue siendo una acción explícita.
- Se elimina la ruta anterior que podía mostrar Orca como una ventana independiente en lugar de integrarla en la ventana principal.

## v2.0.121
- Corrige el alojamiento de la ventana nativa de Snapmaker Orca: localiza también los procesos hijos que crea el lanzador y espera a la ventana principal visible.
- Verifica que Windows haya establecido realmente la ventana de Orca como hija del panel antes de mostrarla; si falla, oculta el panel vacío y devuelve un error visible.
- Mantiene el proceso real de Orca aunque el lanzador inicial termine y reajusta el tamaño de la ventana alojada al redimensionar la aplicación.
- Cerrar el laminador finaliza el proceso de Orca que se ha alojado.

## v2.0.120
- Añade sección de laminador Snapmaker Orca en la app de escritorio. Permite seleccionar el ejecutable y alojar su ventana nativa en un panel de la aplicación en Windows.
- Añade controles para separar y cerrar el laminador; no modifica perfiles de Orca.

## v2.0.120
- Añade una sección de laminador Snapmaker Orca en la aplicación de escritorio, con selección del ejecutable y alojamiento de su ventana nativa en un panel de la aplicación en Windows.
- Añade controles para separar y cerrar el laminador. Los perfiles de Orca permanecen intactos.

## v2.0.119
- Recuperación tras suspensión/hibernación: al volver a la aplicación se reactivan las escrituras pendientes de SQLite, se abortan solicitudes obsoletas y se sincroniza de nuevo el estado.
- Monitor U1: evita sondeos simultáneos y vuelve a consultar la impresora al reanudar el equipo o recuperar la visibilidad de la ventana.

## v2.0.118
- Estadísticas de cabezales basadas en los contadores persistentes de Snapmaker `extruder_switch_recorder.json`, consultados a través de Moonraker.
- Se utilizan los contadores reales `switch_count`, `error_count`, `retry_count` y, cuando el archivo está accesible, `fan_error_count`.
- Se elimina el cálculo engañoso basado en menciones de extrusores en los logs; el tercer indicador pasa a mostrar reintentos reales.

## v2.0.116
- Malla de cama: añade referencias numéricas de X/Y y cinco marcas numéricas en la escala Z, usando las dimensiones físicas publicadas por la impresora.
- Estadísticas de cabezales: elimina el recuento basado en menciones T0/T1 o palabras sueltas; solo reconoce mensajes explícitos de activación y errores asociados al nombre exacto del extrusor.
- Las estadísticas antiguas se invalidan para evitar conservar cifras incorrectas; cuando no hay evidencia, se muestra «—».

## v2.0.115
- La malla 3D ocupa todo el ancho del panel y ajusta la proyección a todos los puntos de la matriz, sin recortes. Se muestran referencias de los ejes X/Y.

## v2.0.114
- Se incorpora realmente la visualización 3D de la malla de cama en el detalle de cada impresora, utilizando la matriz publicada por Klipper/Moonraker.
- Se muestran dimensiones, escala de alturas, mínimo, máximo y rango; si no existe una matriz válida se informa claramente.

## v2.0.113
- Estadísticas de cabezales: dejan de contar comandos T0/T1 como cambios físicos y solo muestran cifras cuando hay eventos explícitos que los confirmen; los errores generales ya no se asignan indiscriminadamente a cada cabezal.
- Nivelación: nueva representación 3D de la matriz real de la malla de cama, con escala de alturas, rango y valores mínimo/máximo.

## v2.0.112
- Inventario de filamentos: cada bobina agrupada puede guardar sus gramos restantes individualmente, manteniendo el diseño compacto de las tarjetas.
- Monitor U1: suma el stock de todas las bobinas compatibles por material y color y reparte el consumo entre ellas; respeta los gramos individuales y descuenta primero las bobinas con menor índice.

## v2.0.111
- Pedidos desde Contabilidad: ahora se prepara el formulario con cliente, descripción, trabajos seleccionados e importe; no se guarda hasta pulsar «Guardar pedido».
- Se evita guardar pedidos vacíos o con importe cero en este flujo.

## v2.0.111
- Contabilidad: tabla ajustada al ancho disponible, sin desplazamiento horizontal.
- La selección múltiple de movimientos se conserva al refrescar o sincronizar los datos.

## v2.0.109
- Contabilidad: selección múltiple de movimientos, incluidos gastos propios, con acciones para enviarlos a la calculadora y crear presupuestos, facturas o pedidos. Los gastos propios se mantienen como costes internos y no se facturan automáticamente.

## v2.0.108
- Corrige la selección de documentos en Pedidos: al elegir un presupuesto se cargan su producto, cliente y total real; el importe se recalcula al cambiar unidades y se vuelve a validar al guardar. La factura desde el pedido conserva las líneas e importes del presupuesto seleccionado.
- Evita duplicar clientes al guardarlos desde clientes, pedidos o facturas mediante coincidencias de correo, teléfono, identificador fiscal o identidad completa; fusiona duplicados exactos conservando campos existentes.
- Los pedidos nuevos conservan una copia de la tasación o presupuesto seleccionado y la factura desde el pedido utiliza esa copia, con su cliente y líneas originales. Los pedidos antiguos sin copia no generan facturas con datos ajenos.

## v2.0.106
- Corrige las estadísticas de cabezales: deja de atribuir errores globales o menciones indirectas a cada extrusor. Solo cuenta activaciones y comandos de selección explícitos; cuando los registros no permiten identificar un cabezal, muestra «—» en lugar de inventar un cero.

## v2.0.105
- Corrige la comprobación de stock del monitor cuando el inventario agrupa varias bobinas idénticas: calcula el stock conjunto (remanente por bobina × cantidad) y distribuye el consumo entre las unidades sin descontar dos veces.

## v2.0.103
- Corrige el diálogo de registro de gasto personal/pedido del monitor cuando se abre desde Contabilidad: la hoja de estilos `app-10.css` se carga desde el encabezado global y ya no se inserta un `<link>` dentro del contenido del diálogo.

## v2.0.103
- Corrige la causa de escrituras repetitivas de `pcp_active_job_by_printer`: el monitor ya no guarda el trabajo completo en SQLite en cada sondeo. Los cambios reales de estado/archivo se guardan inmediatamente y las actualizaciones que solo cambian el contador de tiempo se limitan a una cada 30 segundos.

## v2.0.103
- Evita el parpadeo de las tarjetas: los fallos transitorios de consulta conservan el último estado correcto durante 90 segundos mientras se reintenta la conexión.
- La lista persistida de impresoras guarda solo identidad y configuración estable; ya no escribe online/offline en SQLite en cada sondeo.
- La lectura inicial de impresoras guardadas se realiza una sola vez por sesión, no en cada actualización de 10 segundos.
- El historial térmico se persiste como máximo cada cinco minutos para reducir presión sobre SQLite.

### v2.0.103
- Se conservan las estadísticas de cabezales por impresora entre actualizaciones y al volver a seleccionarla.
- Se corrige la asociación de eventos a cada extrusor para evitar contadores inflados por coincidencias parciales.
- Se reducen escrituras repetidas de historial y de impresoras descubiertas para aliviar la cola SQLite.
- Las estadísticas guardadas permanecen visibles si falla una consulta de registros.

## v2.0.99
- Las estadísticas de cabezales se cargan automáticamente al mostrar los detalles de una impresora; ya no es necesario pulsar el botón.
- La lectura de registros usa un endpoint independiente que no vuelve a consultar el estado, los sensores ni el historial de impresión, evitando interferir con el Monitor.
- Añadida una ventana modal de carga con progreso durante el descubrimiento y la consulta inicial de impresoras.
- Eliminada una segunda consulta redundante del estado de la impresora seleccionada.

## v2.0.99
- El almacenamiento compatible con localStorage ahora encola las escrituras SQLite mediante XHR asíncrono, sin bloquear el hilo de interfaz.
- Se agrupan actualizaciones consecutivas de una misma clave y se serializan las operaciones para reducir conflictos de revisión.
- Los conflictos 409 recuperan valores y revisiones de forma asíncrona y reintentan de manera controlada.
- Las sincronizaciones externas no pisan valores que aún están pendientes de guardar.

## v2.0.99
- Corregida la sincronización de revisiones del almacenamiento: los valores y sus revisiones se actualizan juntos, evitando conflictos 409 por revisiones obsoletas.
- Añadido reintento único y controlado de escrituras/eliminaciones cuando otra ventana modifica la misma clave.
- Reducidas las escrituras de telemetría del Monitor: solo se persisten cambios de estado o avances de minuto, no cada consulta.
- Reducida la frecuencia de persistencia del historial térmico de 9 a 30 segundos.
- Ajustado el tiempo de consulta de registros y acotado el tiempo de espera por archivo para evitar abortos por superar el límite del navegador.

## v2.0.96
- Sustituido el listado de registros por tarjetas visuales de estadísticas para cada cabezal detectado: cambios, activaciones y errores asociados.
- Las estadísticas se consultan bajo demanda y no añaden carga al refresco periódico.

## v2.0.95
- Corregido el cierre accidental del diálogo Crear bobina al hacer clic derecho en campos numéricos.
- Ampliada la detección de datos de capas en objetos Moonraker de distintas impresoras.
- Añadida consulta manual de registros Klipper para localizar cambios de cabezal, avisos y errores; los registros solo se descargan al solicitarlos.

## v2.0.94
- Eliminado el panel de diagnóstico «Datos recibidos de la impresora» y su volcado JSON.
- Eliminada la serialización y actualización periódica de los datos de diagnóstico en la interfaz.
- La API del panel deja de enviar la lista de objetos descubiertos que solo se utilizaba en ese diagnóstico.

## v2.0.93
- Nueva paleta térmica de alto contraste con colores claramente diferenciados.
- Asignación persistente de color por sensor, incluso entre sesiones y actualizaciones.
- Normalización de etiquetas del historial para evitar nombres antiguos en la leyenda.

## v2.0.92
- Detección dinámica de sensores térmicos y dispositivos publicados por Moonraker, sin listas cerradas por modelo.
- Consulta de objetos en lotes para admitir impresoras con muchos sensores.
- Gráfico y tarjetas térmicas basados en las temperaturas reales disponibles; ventiladores sin temperatura no se dibujan.
- Detección y visualización de velocidad de ventiladores cuando Moonraker publica esos datos.
- Nombres de sensores conocidos localizados y nombres desconocidos conservados desde el firmware.

## 2.0.118
- Malla de cama interactiva: giro con ratón o dedo, zoom con rueda, restablecer vista y ampliación a pantalla completa.

## v2.0.136
- Se protege la inicialización del calculador cuando los selectores de marca/modelo no están presentes en una vista.

## v2.0.138
- Inicializa los selectores de marca y modelo cuando el HTML ya está cargado, evitando el error addEventListener sobre null. Reduce escrituras SQLite redundantes del monitor U1 y evita volver a guardar una IP manual que no ha cambiado.

## 2.0.143
- Automatic backups no longer block interactive SQLite writes; they run through a separate asynchronous request.
- Printer lists and aliases now use the central storage queue to reduce revision conflicts.
- Staggered retries for HTTP 409 conflicts.

- v2.0.147: corrección de asignación manual de bobinas U1; se fuerza el guardado inmediato de la selección y se identifica la bobina por su ID estable para evitar que una actualización o reordenación la desasigne.

## v2.0.225 — Lectura G-code completa y multimarca
- Eliminado el límite de lectura de los primeros 8 MiB: se descarga y analiza el G-code completo desde Moonraker (límite de seguridad 512 MiB).
- Parser ampliado para distintas variantes de metadatos de gramos, material y color.
- Si el archivo completo no contiene gramos reconocibles, se informa claramente y no se inventa el consumo.

## v2.0.226 — Traducciones del lector G-code
- Centralizados y traducidos a los ocho idiomas los nuevos mensajes de lectura completa y límite de seguridad.

## v2.0.227 — Corrección urgente del lector G-code
- Corregidas las expresiones regulares del analizador: ahora interpretan correctamente saltos de línea y metadatos reales.
- Ampliado el tiempo máximo de descarga completa a 300 segundos; se elimina la cancelación prematura a los 30 segundos.

## v2.0.228 — Ajuste final de patrones G-code
- Corregida la interpretación de unidades entre corchetes en las expresiones regulares de metadatos.

## v2.0.229 — Recuperación de malla de cama y sonda
- La consulta directa de Moonraker vuelve a incluir los objetos bed_mesh, probe y configfile, necesarios para mostrar la malla, la calibración y los datos de la sonda en el panel de impresoras.

## v2.0.230 — Evaluación del estado de la malla de cama
- Se muestra un estado visual indicando si la malla está dentro del rango o si se recomienda calibrar.
- Criterio orientativo: rango total máximo de 0,20 mm.
- Nuevos textos centralizados en traducciones.js para inglés, francés, alemán, italiano, polaco, árabe y chino simplificado.

## v2.0.233 — Limpieza de detalle de impresora y auditoría de conexión directa
- Eliminada la tarjeta redundante «Trabajo actual» del detalle; progreso, capas y tiempos ya aparecen en la tarjeta principal.
- Verificado que las operaciones de impresora se ejecutan desde Electron mediante IPC y HTTP directo a http://IP:7125 (Moonraker), sin pasar por el servidor PowerShell de localhost.
- Se conserva el servidor local de la aplicación para servir la interfaz, almacenamiento y funciones de integración con Orca; no se elimina porque cumple funciones distintas de la comunicación con las impresoras.
