# Historial de cambios

## 1.0 — Versión Linux emparejada con Windows v1.0

- Número de versión alineado con Windows v1.0. La implementación Linux mantiene su servidor local en 127.0.0.1:8700 y su almacenamiento SQLite independiente.
- La búsqueda automática de impresoras U1 detecta redes IPv4 privadas del equipo y limita el barrido a la subred /24 en redes amplias.
- Pruebas automáticas de humo para servidor HTTP, persistencia SQLite, conflictos de revisión, importación y restauración de copias.
- GitHub Actions comprueba la sintaxis Python y JavaScript y ejecuta las pruebas Linux.
- El servidor informa de la versión definida en el archivo VERSION; el puerto alternativo solo se habilita mediante variable de entorno para pruebas.
- El monitor de Snapmaker U1 y el procesamiento de G-code funcionan correctamente.


## 1.0 — Primera versión pública

- Calculadora de costes de impresión 3D y tasaciones guardadas.
- Integración local con OrcaSlicer para leer información de G-code.
- Monitor flotante con selección rápida de impresoras y estado de impresión.
- Inventario de bobinas y descuento de filamento al completar trabajos, evitando descuentos duplicados.
- Contabilidad con gastos, costes, ventas y beneficios estimados asociados a la impresora correspondiente.
- Gestión de clientes, presupuestos, pedidos y facturas.
- Interfaz en español, inglés, francés, alemán, italiano y polaco.
- Persistencia local mediante SQLite y utilidades de exportación disponibles en la aplicación.
