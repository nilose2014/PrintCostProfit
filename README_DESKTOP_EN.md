# Print Cost & Profit — Windows desktop application (v2.0.3)

This build opens Print Cost & Profit in its own desktop window, without browser tabs, an address bar or an external browser. The existing HTML/CSS/JavaScript interface is hosted in Electron; application features are not being rewritten or duplicated.

## Preserved components

- Local server at `127.0.0.1:8700` and Snapmaker Orca/U1 integration.
- SQLite database and current data path: `%LOCALAPPDATA%\PrintCostProfit_SQLite_v1.249\data`.
- Existing backup, validation and restore mechanisms.
- Printer configuration, preferences and all eight interface languages.
- Orca post-processing BAT and G-code processing.

The desktop app checks that the server responding on port 8700 belongs to the same version. If another server is detected, the interface does not connect. An older server is restarted only when its process can be identified as belonging to this exact project folder. The local bridge remains active after the desktop window closes because Orca can also use it. The application does not move or migrate the SQLite database.

## Build requirements

- Windows 10/11, 64-bit.
- Node.js 22.12 or later and npm.
- Internet access during the first build to download Electron and packaging tools.
- Extract the full ZIP to a local folder.

## Build the installer

1. Extract the complete package.
2. Run `COMPILAR_ESCRITORIO_WINDOWS.bat`.
3. The script installs dependencies and builds the installer.
4. Expected output: `dist\PrintCostProfit-Desktop-Setup-2.0.3.exe`.
5. Install and launch from the desktop or Start menu shortcut.

Installation is per-user. Uninstalling does not remove data from `%LOCALAPPDATA%`. The installer is not digitally signed, so Windows may show an unknown-publisher warning.

## Orca

Keep Orca's post-processing script pointed at `Integracion_Orca_Postprocesado.bat`. G-code processing is preserved. When this BAT is run manually from the installed package, it opens the desktop application.

## Status

The desktop wrapper and installer build configuration are prepared. The `.exe` must be built and validated on Windows; this environment cannot run Windows installer tests. Before using it with real data, keep an external copy of the data folder.

## Notification center (v2.0.3)

The bell opens the notification center. In Options, you can enable or disable maintenance, accounting, filament stock and program update notifications. Stock alerts can use the remaining grams per spool (200 g by default), the number of available spools, or both. Preferences and notification history are stored locally on this PC.
