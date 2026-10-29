# Historial de cambios

## 1.561 — Versión estable Linux

- Estabilizada la rama Linux con servidor local en 127.0.0.1:8700 y almacenamiento SQLite independiente.
- La búsqueda automática de impresoras U1 detecta redes IPv4 privadas del equipo y limita el barrido a la subred /24 en redes amplias.
- Pruebas automáticas de humo para servidor HTTP, persistencia SQLite, conflictos de revisión, importación y restauración de copias.
- GitHub Actions comprueba la sintaxis Python y JavaScript y ejecuta las pruebas Linux.
- El servidor informa de la versión definida en el archivo VERSION; el puerto alternativo solo se habilita mediante variable de entorno para pruebas.
- Según las pruebas manuales comunicadas por el usuario, el monitor de Snapmaker U1 y el procesamiento de G-code funcionan correctamente.
- La aplicación se mantiene gratuita, con licencias y suscripciones desactivadas.

## 1.0 — Primera versión pública

- Calculadora de costes de impresión 3D y tasaciones guardadas.
- Integración local con OrcaSlicer para leer información de G-code.
- Monitor flotante con selección rápida de impresoras y estado de impresión.
- Inventario de bobinas y descuento de filamento al completar trabajos, evitando descuentos duplicados.
- Contabilidad con gastos, costes, ventas y beneficios estimados asociados a la impresora correspondiente.
- Gestión de clientes, presupuestos, pedidos y facturas.
- Interfaz en español, inglés, francés, alemán, italiano y polaco.
- Persistencia local mediante SQLite y utilidades de exportación disponibles en la aplicación.
