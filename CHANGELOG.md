# Historial de cambios

## 1.561-rc.2 — Candidato de estabilización Linux

- La búsqueda automática de impresoras U1 detecta las redes IPv4 privadas del equipo en lugar de limitarse a 192.168.1.x; en redes amplias reduce el barrido a la subred /24 local.
- Se mantiene la licencia desactivada y la aplicación gratuita.

- Añadidas pruebas automáticas de humo para servidor HTTP, persistencia SQLite, conflictos de revisión, importación y restauración de copias.
- Añadido flujo de GitHub Actions para comprobar sintaxis Python y ejecutar las pruebas Linux.
- El servidor informa de la versión del archivo VERSION y permite seleccionar un puerto alternativo solo mediante variable de entorno para las pruebas; por defecto sigue usando 127.0.0.1:8700.
- La validación automatizada no sustituye la prueba manual con una impresora Snapmaker U1 real ni la verificación de los flujos del laminador.

## 1.0 — Primera versión pública

- Calculadora de costes de impresión 3D y tasaciones guardadas.
- Integración local con OrcaSlicer para leer información de G-code.
- Monitor flotante con selección rápida de impresoras y estado de impresión.
- Inventario de bobinas y descuento de filamento al completar trabajos, evitando descuentos duplicados.
- Contabilidad con gastos, costes, ventas y beneficios estimados asociados a la impresora correspondiente.
- Gestión de clientes, presupuestos, pedidos y facturas.
- Interfaz en español, inglés, francés, alemán, italiano y polaco.
- Persistencia local mediante SQLite y utilidades de exportación disponibles en la aplicación.
