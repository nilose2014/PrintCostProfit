# Print Cost & Profit — versión 1.0

Aplicación local para calcular costes de impresión 3D y gestionar la actividad relacionada con la fabricación mediante impresoras FDM. Esta publicación reúne las funciones incluidas en la versión preparada para lanzamiento 1.0.

## Derechos de autor y licencia

Copyright © 2026 Beatriz Toro Martin. Todos los derechos reservados. Consulta [`LICENSE.txt`](LICENSE.txt) antes de usar o redistribuir este proyecto. La publicación en GitHub no concede permiso para vender, revender ni explotar comercialmente los materiales protegidos sin autorización previa y por escrito.

## Funciones incluidas

- **Calculadora de costes de impresión:** estimación del coste de filamento, electricidad, desgaste de la impresora, mantenimiento y recambios, mano de obra y extras, y reserva para fallos.
- **Tasaciones guardadas:** guardar y consultar cálculos y sus parámetros.
- **Integración con OrcaSlicer:** recepción de información de G-code mediante la integración local incluida.
- **Monitor de impresoras:** panel flotante para consultar conexión, estado, archivo, progreso, capas, tiempo y consumo reportado; permite cambiar rápidamente entre impresoras configuradas.
- **Control de filamento:** inventario de bobinas, asignación por material/color y descuento de consumo al completar un trabajo, con protección frente a descuentos duplicados.
- **Contabilidad:** registro y consulta de gastos propios, costes asociados a pedidos, ventas y beneficios estimados, con identificación por impresora.
- **Gestión comercial:** clientes, presupuestos, pedidos y facturas.
- **Compartir y exportar:** funciones de impresión, generación de documentos y exportación disponibles en las distintas secciones.
- **Interfaz multilingüe:** español, inglés, francés, alemán, italiano y polaco.
- **Almacenamiento local:** persistencia de los datos mediante la capa local de almacenamiento y SQLite incluida en el proyecto.

## Requisitos

- Windows para los scripts de integración incluidos.
- Python 3 para el servicio local SQLite.
- OrcaSlicer/Snapmaker Orca para utilizar la integración de G-code.
- Impresoras y conexión configuradas en el puente local para usar el monitor.

La disponibilidad de la información del monitor depende de que el puente local y la impresora estén conectados y respondan correctamente. Las estimaciones de consumo procedentes del G-code no son necesariamente mediciones físicas del consumo real.

## Inicio rápido

1. Descarga o clona este repositorio en una carpeta local.
2. Conserva juntos el HTML, las carpetas `js` y `css`, `storage-client.js`, los módulos Python y los scripts de integración.
3. Inicia el servicio local con el script de arranque proporcionado para tu configuración.
4. Abre la aplicación mediante el servidor local configurado; no abras el HTML directamente con `file://`, porque las funciones locales requieren el servidor.
5. Configura el almacenamiento y la integración de OrcaSlicer siguiendo los parámetros de tu instalación.

## Datos y privacidad

Los datos de trabajo se almacenan localmente según la configuración del servicio. No publiques bases de datos, copias de seguridad, credenciales ni archivos de configuración privados. El archivo `.gitignore` excluye los tipos de datos locales más comunes, pero revisa siempre los cambios antes de publicar el repositorio.

## Estructura principal

- `Print_Cost_Profit.html`: interfaz principal.
- `js/`: calculadora, monitor, contabilidad, traducciones y utilidades.
- `css/`: estilos de la aplicación.
- `storage-client.js`: conexión de la aplicación con el almacenamiento local.
- `pcp_sqlite_api.py`, `pcp_sqlite_store.py`: servicio y almacenamiento SQLite.
- `Iniciar_Puente_Orca.ps1` y scripts relacionados: integración local con OrcaSlicer.
- `VERSION`: versión publicada.
- `CHANGELOG.md`: resumen de funciones de la versión 1.0.

## Versión 1.0

Esta versión fija como base de lanzamiento las funciones enumeradas en este documento. La publicación no incluye el historial interno de versiones anteriores.
