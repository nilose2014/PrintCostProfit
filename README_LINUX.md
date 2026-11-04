# Print Cost & Profit Linux v1.4

Adaptación Linux de la aplicación Windows v1.4. La interfaz, los módulos JavaScript, CSS, imágenes y el archivo central `js/traducciones.js` se conservan desde la versión de referencia. Linux utiliza un servidor Python nativo y una base de datos SQLite independiente.

## Requisitos

- Linux, Ubuntu o WSL2 con distribución Linux instalada.
- Python 3.10 o posterior (biblioteca estándar; incluye `sqlite3`).
- Navegador moderno.
- Para Snapmaker U1: acceso de red desde el entorno Linux/WSL al equipo y al puerto Moonraker TCP 7125.

En Ubuntu/WSL:

```bash
sudo apt update
sudo apt install -y python3
```

## Inicio

Desde la raíz del proyecto:

```bash
chmod +x linux/iniciar_linux.sh
./linux/iniciar_linux.sh
```

El script comprueba Python y SQLite, compila los módulos Python, ejecuta las pruebas automáticas y arranca el servidor. Abre `http://127.0.0.1:8700/` en el navegador. Mantén abierta la terminal mientras uses la aplicación. Detén el servidor con `Ctrl+C`.

En WSL2, ejecuta los comandos en la terminal de Ubuntu/WSL, no en Windows PowerShell. Si el navegador Windows no puede abrir el localhost de WSL, comprueba la configuración de red/localhost de WSL2 y el cortafuegos.

## Datos y copias

- Base SQLite: `~/.local/share/PrintCostProfit/data/printcostprofit.db`.
- Configuración U1: `~/.local/share/PrintCostProfit/data/u1-config.json`.
- Trabajos de lectura G-code: `~/.local/share/PrintCostProfit/data/u1-read-jobs/`.
- Copias SQLite: `~/.local/share/PrintCostProfit/data/backups/`.
- Logs: `~/.local/share/PrintCostProfit/data/printcostprofit.log`.

Si `XDG_DATA_HOME` está definido, se utiliza esa ubicación como raíz de datos. Windows y Linux mantienen bases independientes. No copies ni sobrescribas la base Windows para iniciar Linux. Antes de migrar datos, exporta una copia desde la aplicación y utiliza el mecanismo de importación en una base Linux vacía.

## API incluida

- Almacenamiento: snapshot, health, import, write, remove.
- Copias: listado, creación, configuración, validación y restauración con copia de seguridad preventiva.
- Registros: GET, POST y DELETE `/api/logs`.
- Versión: `/api/version`.
- Snapmaker U1/Moonraker: configuración de IP, descubrimiento en subredes locales, consulta de impresora, estado con caché y lectura asíncrona de G-code con progreso y miniatura embebida si existe en el archivo.
- Postprocesado local de Orca: `python3 linux/integracion_orca.py "/ruta/al/archivo.gcode"` crea `Print_Cost_Profit_Integrado.html` con nombre de pieza, tiempo, filamentos, colores, precios y miniatura detectados. El servidor sirve esa página integrada cuando existe.

El servidor escucha exclusivamente en `127.0.0.1`. No envía comandos para iniciar, pausar o cancelar impresiones.

## Pruebas

```bash
python3 -m py_compile pcp_sqlite_store.py linux/pcp_linux_server.py linux/integracion_orca.py
python3 -m unittest discover -s linux/tests -v
```

Las pruebas usan un directorio temporal aislado y no acceden a los datos reales del usuario.

## Validación pendiente

Esta entrega establece la base Linux y cubre la API de almacenamiento, logs y los endpoints U1 equivalentes identificados en el servidor Windows v1.4. Aún deben completarse pruebas de extremo a extremo con impresora física, validación de conectividad Moonraker en WSL2, pruebas de posprocesado de Orca desde el propio Snapmaker Orca en Linux/WSL2 y regresión funcional de todas las secciones (presupuestos, facturas, contabilidad, mantenimiento y licencias). No se debe considerar una validación física de U1 realizada hasta probarla en el equipo.
