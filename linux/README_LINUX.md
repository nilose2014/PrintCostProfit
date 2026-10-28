# Print Cost & Profit — adaptación inicial para Ubuntu

Esta carpeta añade una primera implementación Linux independiente. No modifica ni reemplaza los scripts de Windows.

## Estado

- Servidor HTTP local en `127.0.0.1:8700`.
- SQLite mediante el módulo existente `pcp_sqlite_store.py`.
- Datos en `~/.local/share/PrintCostProfit/data/printcostprofit.db` (o `$XDG_DATA_HOME/PrintCostProfit/data/printcostprofit.db`).
- Copias de seguridad en la subcarpeta `backups`.
- API inicial de almacenamiento: `snapshot`, `health`, `write`, `remove`, `import` y operaciones de copia de seguridad.
- Los endpoints del monitor Moonraker/U1 y la integración de posprocesamiento del laminador todavía no se han adaptado. Si se llaman, el servidor responde HTTP 501; no se debe interpretar como compatibilidad completa.

## Requisitos

Ubuntu con Python 3 y el módulo SQLite3 de Python. En una instalación estándar:

```bash
sudo apt update
sudo apt install python3
```

## Iniciar

Desde la carpeta del proyecto:

```bash
chmod +x linux/iniciar_linux.sh
./linux/iniciar_linux.sh
```

Después abre `http://127.0.0.1:8700/` en el navegador. Mantén abierta la terminal mientras uses la aplicación. Para cerrar el servidor, pulsa `Ctrl+C`.

## Comprobación

En otra terminal ejecuta:

```bash
curl -s http://127.0.0.1:8700/api/storage/health
```

La respuesta debe contener `"ok":true`. Comprueba también que la interfaz carga y que un dato de prueba persiste tras reiniciar el servidor.

## Importante

Esta es una adaptación inicial, no una versión Linux terminada. No incluye todavía los endpoints `/api/u1/*`, ni el script de posprocesamiento Linux para Snapmaker Orca, OrcaSlicer o Creality Print. No copies la base de datos real de Windows para la primera prueba: utiliza una base de datos nueva y conserva una copia de seguridad de cualquier dato importante.
