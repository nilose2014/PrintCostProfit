# Print Cost & Profit
## 3D Printing Cost Calculator, Inventory and Printer Management

**Windows Desktop: 2.0 | Linux: 1.4**  
Developer: Beatriz Toro Martin

Official repository: https://github.com/nilose2014/PrintCostProfit  
All releases: https://github.com/nilose2014/PrintCostProfit/releases

## 1. Downloads

Download only from the official GitHub releases.

### Windows 10 / 11 — Version 2.0

**Installer ZIP:** `PrintCostProfit-Setup-v2.0.zip`  
[Windows 2.0 release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Download the ZIP and choose **Extract All**.
2. Open the extracted folder.
3. Run `PrintCostProfit-Setup.exe` and follow the installer.

**Portable ZIP:** `PrintCostProfit-Portable-v2.0.zip`  
[Windows 2.0 release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Download and extract the ZIP into a permanent folder.
2. Run `PrintCostProfit-Portable.exe` from the extracted folder.

Do not run an executable from inside the ZIP. Keep all extracted application files together.

### Linux — Version 1.4

[Linux 1.4 release](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu:** `printcostprofit_1.4.1_amd64.deb`  
[Download .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

Alternatively, double-click the `.deb` file and use the system package installer.

**AppImage:** `PrintCostProfit-Linux-x86_64.AppImage`  
[Download AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Linux packages target 64-bit AMD64 systems. **Windows is version 2.0; the published Linux release is version 1.4. These are separate release lines.**

## 2. Windows security notice

Windows executables are currently distributed without a commercial code-signing certificate. SmartScreen or other security software may display a warning. Verify the download comes from the official repository. Do not ignore a genuine antivirus detection or bypass a warning if the file's origin cannot be verified.

## 3. Main features

- **3D printing cost calculator:** estimates manufacturing costs using filament consumption, material prices, print time, machine operating costs, depreciation, maintenance and configured expenses.
- **Price and profitability:** reviews estimated production cost, selling price, profit, margin and recommended price. Results depend on the values entered.
- **Filament inventory:** manages brands, materials, colours, spool quantities and material prices.
- **Printer profiles:** stores equipment parameters used by cost calculations.
- **Printer monitoring:** Snapmaker U1 has confirmed full compatibility. Other Moonraker, Fluidd or Mainsail-based printers may work depending on configuration and supported functions.
- **Slicer integration:** designed for Snapmaker Orca, OrcaSlicer and Creality Print. Compatibility is approximately 90% and varies by version and configuration; 100% compatibility is not guaranteed.
- **G-code processing:** reads available file information, estimated print time, estimated material use and filament metadata. Slicer estimates are not necessarily actual printer consumption.
- **Quotes, invoices and accounting:** tools for organising commercial documents and financial activity.
- **Local SQLite storage:** Windows desktop 2.0 stores data locally using SQLite and Electron IPC.

## 4. Windows desktop architecture — Version 2.0

Windows 2.0 loads its interface from local Electron files and no longer uses the previous PowerShell HTTP bridge architecture. The interface communicates with SQLite through IPC. Compatible printers are accessed over the network using Moonraker. Orca G-code delivery uses a local file-watching mechanism managed by Electron. Older instructions referring to the former HTTP server or PowerShell bridge do not describe Windows 2.0.

## 5. Slicer integration

The integration is intended for OrcaSlicer-based applications, particularly Snapmaker Orca, OrcaSlicer and Creality Print. Menu names vary by application and version.

1. Open the slicer and select the printer profile.
2. Open print settings; enable advanced or expert settings if necessary.
3. Find **Others** and the post-processing scripts setting.
4. Follow the integration instructions supplied with the corresponding application package.
5. Save the profile, generate a test G-code file and check that Print Cost & Profit receives the available information.

Windows 2.0 uses Electron-managed local file monitoring. Do not follow older instructions requiring the former PowerShell HTTP bridge.

## 6. Printer network configuration

For compatible Moonraker printers, ensure the computer and printer can communicate over the network, obtain the printer IP address, verify Moonraker access and configure the connection in the application. Functions depend on the printer, firmware and network. Snapmaker U1 is the reference printer with confirmed full compatibility.

## 7. Data and backups

Windows desktop uses a local SQLite database. Make regular backups, especially before updates. Do not delete or manually move the database while the application is running. If storage initialization fails, preserve the database and investigate the error before entering important data.

## 8. System requirements

- **Windows:** Windows 10 or 11, 64-bit, sufficient disk space. Network access is needed for printer monitoring. End-user packages do not require manually installing Node.js or Python.
- **Linux:** 64-bit AMD64. Use the Debian package on compatible Debian/Ubuntu systems or the supplied AppImage.
- Optional integrations: Snapmaker Orca, OrcaSlicer, Creality Print and compatible network-connected printers.

## 9. Updating

1. Open the official releases page.
2. Read the release notes and confirm operating system and version.
3. Download the appropriate package.
4. Back up important data.
5. Install or extract the new package as instructed.

Do not delete existing application data when updating. Windows and Linux have separate release lines; check the version before updating.

## 10. Troubleshooting

- **Windows will not start:** ensure the ZIP was fully extracted and all application files remain together. Record any error.
- **Security warning:** verify the download source and antivirus results. The Windows build is not currently signed with a commercial certificate.
- **Printer monitoring fails:** check power, network, IP address, Moonraker access and printer settings.
- **Slicer integration fails:** check slicer version, post-processing configuration, G-code output and local file reception.
- **Data is not saved:** preserve the database, check SQLite initialization and record the error. Do not delete data as an improvised fix.
- **Linux AppImage will not start:** run `chmod +x`, launch it from a terminal and review errors. For `.deb`, check installation and dependency messages.

## 11. Source code and development

Source code: https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Build the Windows distribution:

```bash
npm run dist:win
```

These commands are for developers. End users should download ready-to-use packages from GitHub Releases.

## 12. Licence, copyright and support

Print Cost & Profit is distributed under the terms specified in the repository's `LICENSE.txt`. Read the applicable licence before redistributing or modifying the software.

When reporting an issue, include the application version, operating system, relevant printer and slicer models/versions, description, complete error message and reproduction steps. Do not include passwords, private keys or unnecessary personal information.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Developed by Beatriz Toro Martin.
