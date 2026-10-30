## v1.1
- Se ha comprobado el G-code `Cubo_PETG_1h33m.gcode`: contiene dos miniaturas PNG incrustadas (96×96 y 300×300); se selecciona la de mayor resolución.
- La integración PowerShell valida la firma real de la imagen PNG/JPEG/WebP antes de crear el dato Base64 y registra cuántos bloques encontró y cuál seleccionó.
- La importación desde el monitor U1 utiliza la miniatura de la sesión integrada como respaldo aunque el nombre del trabajo activo difiera del nombre del G-code original (por sufijos, extensión o renombrado), siempre que el trabajo no aporte ya su propia imagen.
- No se añaden textos nuevos de interfaz; se conserva `js/traducciones.js` en los seis idiomas.

## v1.591
- Corrige la recuperación de la miniatura al enviar un trabajo desde el monitor U1: compara el nombre del G-code normalizando ruta, extensión y mayúsculas, en lugar de exigir una coincidencia literal.
- Si el trabajo activo no guardó la miniatura al iniciarse, recupera la miniatura de `PCP_INTEGRATION_DATA` cuando pertenece al mismo G-code.
- Mantiene la vista previa en «Imagen de la pieza» y añade un aviso de diagnóstico en consola cuando no existe una miniatura válida asociada.
- No se añaden textos nuevos de interfaz; se conserva `js/traducciones.js` con los seis idiomas.

## v1.590
- La importación del monitor U1 recupera el tiempo de impresión del G-code, lo aplica al campo de horas y lo muestra también en el resumen de importación (metadatos de Orca o duración incluida en el nombre del archivo).
- El trabajo activo conserva la miniatura Base64 extraída del G-code durante la integración de Orca y la incorpora a la vista previa de la pieza al enviarlo a la calculadora.
- Si la miniatura no está disponible en el trabajo activo, se reutiliza la miniatura de la integración cuando corresponde al mismo archivo; no se inventa una imagen.
- Sin textos nuevos de interfaz; se mantiene `js/traducciones.js` y los seis idiomas.

## v1.589
- La importación desde el monitor U1 ahora presenta el mismo desglose visual de materiales y comprobación de inventario que la carga manual de un G-code.
- Muestra material, nombre de color, HEX, gramos, bobina coincidente, stock disponible y alternativas cuando existen.
- Omite filas de herramientas/canales con 0 g para evitar filamentos vacíos o duplicados en la calculadora.
- Activa `resultCalculated` antes de recalcular para mostrar los resultados económicos después de la importación.
- No descuenta inventario al importar; el descuento continúa reservado al registro del trabajo.
- Reutiliza las cadenas ya traducidas en `traducciones.js` para español, inglés, francés, alemán, italiano y polaco.

# v1.585
- Añadido botón «Enviar a calcular» en el monitor U1.
- Importa a la calculadora el archivo activo, material, color, gramos y asignaciones de bobina disponibles.
- No descuenta inventario al importar. El tiempo de impresión se debe revisar/introducir porque el monitor no aporta la estimación total del G-code.
- Traducciones en español, inglés, francés, alemán, italiano y polaco.

## 1.584 — Mostrar crear bobina solo cuando no hay bobina exacta asignada
- Oculta el botón «Crear bobina nueva» cuando ya existe una bobina exacta de la marca correspondiente.
- Conserva la opción de elegir bobinas alternativas de otras marcas o colores próximos cuando no hay asignación exacta.
- Una bobina exacta con stock agotado sigue reconociéndose como existente y muestra el aviso de stock insuficiente, sin ofrecer crear otra automáticamente.

## 1.583 — Alternativas de bobinas y creación rápida desde la calculadora

- Muestra bobinas del mismo color disponibles en otras marcas.
- Si no hay color exacto, ofrece hasta cuatro alternativas visualmente próximas para el mismo material.
- Permite crear una bobina desde la comprobación del G-code con marca, peso inicial, peso restante y precio opcional.
- Guarda la nueva bobina en el inventario existente y la asigna al filamento del cálculo.
- No descuenta stock durante la calculadora; el descuento sigue reservado al registro del trabajo.
- Textos nuevos traducidos a español, inglés, francés, alemán, italiano y polaco.

# Historial de cambios

## 1.581 — Mostrar nombres de color en el resumen de la calculadora

- En «Materiales del G-code», muestra el nombre legible del color junto a su HEX normalizado (por ejemplo, PETG (negro · #000000)).
- Conserva el HEX para poder verificar el color original y facilita la lectura del resumen sin cambiar la identificación de bobinas ni los gramos calculados.
- Cambio limitado a la calculadora: no modifica el monitor U1, el inventario ni la base de datos SQLite.

## 1.580 — Corrección de nombres de color y HEX de bobinas

- Normaliza HEX de 3, 4, 6 y 8 dígitos a RGB para comparar colores de G-code e inventario sin perder el valor alfa original.
- Muestra el nombre legible del color de la bobina junto a su HEX cuando la coincidencia de inventario es aproximada.
- Evita repetir el código HEX en la etiqueta del material del monitor U1.
- Mantiene el inventario sin cambios durante la comprobación; no modifica SQLite ni los descuentos de bobinas.


## 1.0 — Primera versión pública

- Calculadora de costes de impresión 3D y tasaciones guardadas.
- Integración local con OrcaSlicer para leer información de G-code.
- Monitor flotante con selección rápida de impresoras y estado de impresión.
- Inventario de bobinas y descuento de filamento al completar trabajos, evitando descuentos duplicados.
- Contabilidad con gastos, costes, ventas y beneficios estimados asociados a la impresora correspondiente.
- Gestión de clientes, presupuestos, pedidos y facturas.
- Interfaz en español, inglés, francés, alemán, italiano y polaco.
- Persistencia local mediante SQLite y utilidades de exportación disponibles en la aplicación.


## 1.582 — Nombres dinámicos de colores HEX
- Sustituida la identificación basada únicamente en una paleta fija por clasificación dinámica mediante tono, saturación y luminosidad (HSL).
- Los HEX válidos reciben nombres descriptivos incluso cuando no coinciden con un color predefinido; se conservan HEX y transparencia normalizada.
- El aviso de coincidencia aproximada de inventario muestra el nombre de la bobina además del HEX, utilizando el nombre guardado si existe y calculándolo desde el HEX si no existe.
- Cambio limitado a utilidades de color y texto de la calculadora; no se modifica el monitor U1 ni el inventario.


## v1.586
- Corregido el cambio de estado de pedidos: guardado verificado en el almacenamiento local, actualización inmediata de la tabla y confirmación del resultado.
- Añadidas traducciones de confirmación y error de guardado en español, inglés, francés, alemán, italiano y polaco.


## v1.587
- Reparación crítica de empaquetado: restaurados `js/monitor-u1-interfaz.js` y `js/traducciones.js` desde la versión 1.585, que habían quedado sustituidos/vacíos en el paquete 1.586.
- Conservada la corrección de estados de pedidos incluida en 1.586.
