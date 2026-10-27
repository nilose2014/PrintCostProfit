# Compilar el servicio SQLite para ordenadores sin Python

Este repositorio usa `Servidor_Panel_U1.ps1`, que ya busca primero el archivo
`pcp_sqlite_api.exe` en la carpeta raíz del programa y solo recurre a Python
si el ejecutable no existe.

Este flujo compila el adaptador en un agente Windows de GitHub Actions. Por
tanto, el ordenador de desarrollo y los ordenadores de los usuarios finales
no necesitan tener Python instalado para ejecutar el programa. GitHub Actions
sí usa Python temporalmente durante la compilación.

## Pasos

1. Sube la carpeta `.github/workflows/build-sqlite-exe.yml` a la raíz del repositorio.
2. En GitHub abre la pestaña **Actions**.
3. Selecciona **Compilar adaptador SQLite para Windows**.
4. Pulsa **Run workflow** y espera a que termine correctamente.
5. En el resultado de la ejecución, descarga el artefacto `pcp-sqlite-api-windows`.
6. Extrae el ZIP descargado y copia `pcp_sqlite_api.exe` a la carpeta raíz de Print Cost & Profit, junto a `Servidor_Panel_U1.ps1`, `pcp_sqlite_api.py` y `pcp_sqlite_store.py`.
7. Comprueba en un PC sin Python que el servicio inicia SQLite y que `/api/storage/health` devuelve `ok: true`.

## Importante

- El artefacto generado por Actions no se añade automáticamente al ZIP de descarga del repositorio. Para que los usuarios lo reciban en la descarga normal, publica el ejecutable en el paquete de distribución o adjúntalo a una versión de GitHub Releases.
- No borres `pcp_sqlite_api.py` ni `pcp_sqlite_store.py`; son las fuentes del adaptador.
- Este flujo solo compila el adaptador SQLite. No valida por sí solo todas las funciones de Print Cost & Profit ni la integración con OrcaSlicer.
- Prueba en una carpeta de datos nueva y conserva una copia de seguridad antes de probar con datos reales.
