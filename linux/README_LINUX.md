# Print Cost & Profit — Linux

Esta carpeta contiene el servidor local para Linux. No modifica ni reemplaza los scripts de Windows.

## Estado de esta versión candidata

- Servidor HTTP local: `127.0.0.1:8700`.
- Persistencia SQLite mediante `pcp_sqlite_store.py`.
- Datos en `~/.local/share/PrintCostProfit/data/printcostprofit.db`, o en `$XDG_DATA_HOME/PrintCostProfit/data/printcostprofit.db` cuando `XDG_DATA_HOME` está definido.
- Copias de seguridad en la subcarpeta `backups`.
- API de almacenamiento: `snapshot`, `health`, `write`, `remove`, `import`, listado, creación, validación, configuración y restauración de copias de seguridad.
- Endpoints U1 implementados parcialmente: configuración de IP, descubrimiento de impresoras en las redes IPv4 privadas locales, información de impresora, estado, lectura de filamentos desde G-code y consulta del progreso de lectura.
- El soporte del monitor y la lectura de G-code deben probarse con una Snapmaker U1 real antes de considerar la versión estable.
- La integración de posprocesamiento del laminador no se considera validada en Linux y no debe anunciarse como compatible hasta completar sus pruebas.

## Requisitos

Ubuntu/Linux con Python 3 y SQLite3 para Python. En Ubuntu estándar:

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

## Pruebas automáticas

Desde la raíz del repositorio:

```bash
python3 -m py_compile pcp_sqlite_store.py linux/pcp_linux_server.py
python3 -m unittest discover -s linux/tests -v
```

Las pruebas crean una carpeta temporal independiente y no usan ni modifican la base de datos real del usuario. También se ejecutan automáticamente en GitHub Actions en cada push o pull request a la rama `linux`.

## Comprobación manual antes de publicar

1. Iniciar y cerrar el servidor varias veces.
2. Crear y editar una tasación, cerrar el navegador, volver a abrirlo y comprobar que persiste.
3. Probar exportaciones y PDFs que se utilicen habitualmente.
4. Crear, editar, buscar y eliminar registros en clientes, bobinas, presupuestos, pedidos, facturas y contabilidad.
5. Crear una copia de seguridad, validarla y restaurarla en una base de pruebas.
6. Conectar una Snapmaker U1 real: guardar IP, redescubrirla, consultar estados, probar una impresión en curso, una impresión finalizada y la lectura de datos del G-code.
7. Comprobar los seis idiomas: español, inglés, francés, alemán, italiano y polaco.
8. Verificar que todas las funciones siguen siendo gratuitas y que no aparece inicio de sesión ni bloqueo de licencia.

## Importante

Esta es una versión candidata de estabilización, no una declaración de que todas las funciones ya están validadas. No copies la base de datos real de Windows para la primera prueba. Conserva copias de seguridad y usa una base de datos de prueba para validar la restauración.
