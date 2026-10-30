# Instalador de Windows — Print Cost & Profit v1.1

El instalador se genera con Inno Setup 6 desde GitHub Actions.

## Incluye

- Asistente de instalación para Windows x64.
- Selector de idioma del instalador: español, inglés, francés, alemán, italiano y polaco.
- Visualización de `LICENSE` (GNU GPL v3). La página no fuerza una casilla de aceptación, para no añadir restricciones a la GPL.
- Acceso directo opcional en el escritorio y en el menú Inicio.
- Icono propio generado en formato ICO.
- Adaptador `pcp_sqlite_api.exe` compilado con PyInstaller; el ordenador de destino no necesita Python.
- Desinstalador registrado en Windows.

## Datos del usuario

La base de datos y las copias de seguridad se guardan fuera de la carpeta de instalación, en `%LOCALAPPDATA%\PrintCostProfit_SQLite_v1.249\data`. El instalador y el desinstalador no deben borrar esa carpeta.

## Generar el EXE

1. Abre GitHub → **Actions**.
2. Selecciona **Crear instalador Windows Print Cost & Profit**.
3. Pulsa **Run workflow** y selecciona la rama que contiene estos cambios.
4. Cuando finalice, descarga el artefacto `PrintCostProfit-Windows-Installer-v1.1`.

El archivo resultante se llama `PrintCostProfit-Setup-1.1.exe`.

## Pruebas pendientes antes de distribuir

- Compilación correcta en Windows con Inno Setup 6.
- Instalación limpia en Windows 10/11 x64.
- Comprobar los seis idiomas y la página GPL.
- Confirmar iconos del escritorio y menú Inicio.
- Verificar inicio del servidor local y apertura de la interfaz.
- Verificar integración de postprocesado con Orca y que SQLite responde en `/api/storage/health`.
- Desinstalar y confirmar que la base de datos y las copias de seguridad siguen intactas.

La creación del instalador no sustituye estas pruebas funcionales en un equipo Windows real.
