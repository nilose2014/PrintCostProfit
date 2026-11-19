# Print Cost & Profit
## 3D Printing Cost Calculator, Inventory and Printer Management

**Windows Desktop: Version 2.0**  
**Linux: Version 1.4**

Print Cost & Profit is a desktop application designed for 3D printing users who want to calculate manufacturing costs, manage filament inventory, monitor compatible 3D printers and improve the financial management of their printing activities.

The application combines a 3D printing cost calculator with inventory management, printer monitoring, G-code integration, quotes, invoices, accounting and local data storage.

**Developer:** Beatriz Toro Martin  
**Official GitHub repository:** https://github.com/nilose2014/PrintCostProfit  
**Official downloads:** https://github.com/nilose2014/PrintCostProfit/releases

---

# 1. Download Print Cost & Profit

Choose your operating system and download the corresponding package from the official GitHub Releases page.

## Windows 10 / Windows 11 — Version 2.0

<ins>Two download options are available:</ins>

### Standard installer

**File:** `PrintCostProfit-Setup-v2.0.zip`

[Download Windows Installer — Version 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

Installation:
1. Download the ZIP package.
2. Right-click the downloaded file and select **Extract All**.
3. Open the extracted folder.
4. Run `PrintCostProfit-Setup.exe`.
5. Follow the installation instructions.
6. Launch Print Cost & Profit from the Windows Start menu or desktop shortcut, if created.

### Portable version

**File:** `PrintCostProfit-Portable-v2.0.zip`

[Download Windows Portable — Version 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

Installation:
1. Download the portable ZIP package.
2. Extract the ZIP file into a permanent folder.
3. Open the extracted folder.
4. Run `PrintCostProfit-Portable.exe`.

The portable edition does not require a traditional installation.

Keep all extracted application files together. Do not run the executable directly from inside the ZIP archive.

## Linux — Version 1.4

Linux packages are available from the existing Linux release.

[Download Print Cost & Profit for Linux — Version 1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

Two package formats are available:

### Debian / Ubuntu (.deb)

**File:** `printcostprofit_1.4.1_amd64.deb`

[Download Linux Debian package](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

### AppImage

**File:** `PrintCostProfit-Linux-x86_64.AppImage`

[Download Linux AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

**Important version information:** Windows and Linux currently have separate release lines. Windows is version 2.0, while the published Linux release is version 1.4.

---

# 2. Installing on Windows

## 2.1. Standard installation

1. Visit the official [GitHub Releases page](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0).
2. Download `PrintCostProfit-Setup-v2.0.zip`.
3. Extract the ZIP archive.
4. Open the extracted folder.
5. Double-click `PrintCostProfit-Setup.exe`.
6. Follow the installation wizard.
7. Start the application.

The installer is intended to provide a straightforward Windows installation without requiring the user to manually configure Node.js or Python.

## 2.2. Portable installation

1. Visit the official [GitHub Releases page](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0).
2. Download `PrintCostProfit-Portable-v2.0.zip`.
3. Extract the archive.
4. Open the extracted folder.
5. Run `PrintCostProfit-Portable.exe`.

The portable edition can be kept in a folder of your choice. Do not separate the executable from the other files included in the extracted package.

## 2.3. Windows security notice

The Windows application is distributed without a commercial code-signing certificate.

Depending on your Windows configuration, Microsoft Defender SmartScreen or another security product may display a warning when launching the application.

Always verify that the package comes from the official Print Cost & Profit GitHub repository.

Do not ignore antivirus detections or bypass security warnings if your security software identifies a genuine threat.

---

# 3. Installing on Linux

The published Linux version is 1.4 and provides two installation formats for 64-bit AMD64 systems.

## 3.1. Debian / Ubuntu installation

Download:

`printcostprofit_1.4.1_amd64.deb`

You can install the package using the graphical package installer:

1. Open the downloaded file.
2. Select the option to install the package.
3. Authenticate if your system requests administrator permission.
4. Wait for the installation to finish.
5. Launch Print Cost & Profit from your applications menu.

Alternatively, install it from a terminal.

Open a terminal in the download folder and execute:

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

## 3.2. AppImage installation

Download:

`PrintCostProfit-Linux-x86_64.AppImage`

Open a terminal in the folder where the file was downloaded.

First, grant execution permission:

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
```

Then launch the application:

```bash
./PrintCostProfit-Linux-x86_64.AppImage
```

The AppImage format allows the application to be launched without installing a Debian package.

## 3.3. Linux compatibility

The published Linux packages target 64-bit AMD64 systems.

The Linux release is maintained separately from the Windows desktop release. Consult the Linux release notes for version-specific information.

---

# 4. Main features

## 4.1. 3D printing cost calculator

Calculate the estimated manufacturing cost of a printed part using configurable parameters.

The calculator can take into account:

- Filament consumption.
- Material price.
- Printing time.
- Electricity and machine operating costs.
- Printer depreciation.
- Maintenance costs.
- Labour and additional expenses.
- Failure allowances and other configured costs.
- Desired profit percentage.
- Currency and applicable taxes.

The objective is to estimate the actual manufacturing cost before deciding the selling price.

## 4.2. Selling price and profitability

Review the economic result of a print.

The calculator distinguishes between:

- **Manufacturing cost:** estimated cost of producing the part.
- **Selling price:** amount charged to the customer.
- **Estimated profit:** difference between revenue and the costs considered.
- **Profit margin:** profit expressed relative to the selling price.
- **Recommended price:** suggested selling price based on the configured parameters.

Results depend on the values entered and the configuration of the application.

## 4.3. Filament inventory management

Manage filament spools and their associated information.

Depending on the available configuration, inventory information includes:

- Filament brand.
- Material type.
- Colour.
- Colour code.
- Initial filament quantity.
- Remaining filament quantity.
- Material price per kilogram.

Inventory information can be used when calculating print costs and checking material availability.

## 4.4. Printer profiles

Configure the economic parameters associated with each printer.

Printer profiles can include information such as:

- Printer name.
- Purchase cost.
- Estimated useful life.
- Operating costs.
- Maintenance costs.
- Other parameters used by the calculator.

When multiple printers are used, selecting the correct profile helps ensure that cost estimates reflect the equipment used.

## 4.5. Printer monitoring

The application includes a printer monitoring system.

The Snapmaker U1 is the printer with confirmed full compatibility.

Other printers that provide access through Moonraker, Fluidd or Mainsail may also work, depending on their configuration. Compatibility and available functionality can vary between models.

## 4.6. OrcaSlicer integration

Print Cost & Profit is designed to integrate with slicers based on OrcaSlicer, particularly:

- Snapmaker Orca.
- OrcaSlicer.
- Creality Print.

The integration can process G-code information generated by compatible slicers.

Compatibility is approximately 90%, and differences may occur depending on the slicer version and configuration. Compatibility should not be considered 100%.

## 4.7. G-code information

The application can retrieve available information from G-code files, including:

- File name and path.
- Estimated printing time.
- Estimated filament consumption.
- Available filament information.
- Other metadata generated by the slicer.

G-code values are slicer estimates and should not automatically be treated as actual printer consumption.

## 4.8. Quotes and invoices

The application includes tools for managing commercial documents, including quotes and invoices.

These functions help organise customer transactions and the commercial activity associated with 3D printing.

## 4.9. Accounting

Accounting tools allow users to organise financial movements associated with printing activities.

The application is designed to help distinguish production costs, sales and profitability.

## 4.10. Local SQLite storage

Windows desktop version 2.0 uses local SQLite storage.

The Electron application communicates with the local database through IPC.

This architecture avoids relying on browser local storage for the main application data.

If local storage cannot be initialized, the application should report the corresponding error rather than silently switching to another storage system.

---

# 5. Windows desktop architecture — Version 2.0

Version 2.0 introduces a desktop architecture based on Electron.

The application loads its interface directly from local application files rather than using the previous HTTP server and PowerShell bridge architecture.

The main components include:

- Electron desktop application.
- Local SQLite database.
- IPC communication between the interface and the database.
- Direct printer access through network IP addresses using Moonraker.
- Local file monitoring for receiving G-code information from Orca-based slicers.

This architecture replaces the previous local HTTP bridge approach used in earlier versions.

Documentation referring to the old PowerShell bridge or HTTP server relates to earlier releases and should not be used as the installation procedure for Windows desktop version 2.0.

---

# 6. Configuring OrcaSlicer integration

The integration is designed for OrcaSlicer-based applications, particularly Snapmaker Orca, OrcaSlicer and Creality Print.

The available menus and settings can vary depending on the slicer version.

The integration uses the slicer's post-processing workflow to deliver G-code information to Print Cost & Profit.

To configure it:

1. Open the slicer.
2. Select the printer profile.
3. Open the print settings.
4. Enable advanced or expert settings if necessary.
5. Open the **Others** section.
6. Locate the post-processing scripts configuration.
7. Configure the integration using the instructions supplied with the corresponding application package.
8. Save the printer or print profile.
9. Generate a test G-code file.
10. Check that the information is received by Print Cost & Profit.

The desktop version 2.0 uses a local file-watching mechanism managed by Electron for the Orca G-code workflow.

Do not apply instructions from older releases that require starting the previous PowerShell HTTP bridge.

---

# 7. Printer network configuration

Compatible printers can be accessed directly over the local network.

For printers using Moonraker:

1. Make sure the printer and computer are connected to the same accessible network.
2. Obtain the printer's IP address.
3. Check that Moonraker is accessible.
4. Configure the printer connection in Print Cost & Profit.
5. Verify the printer status and available monitoring information.

The exact functionality depends on the printer model, firmware and network configuration.

The Snapmaker U1 is the reference printer for confirmed full compatibility.

---

# 8. Data storage and backups

The Windows desktop application uses SQLite for local data storage.

The database is stored locally on the computer.

For data protection:

- Make regular backups.
- Keep backups in a safe location.
- Do not manually delete the database while the application is running.
- Avoid moving application data folders manually.
- Verify that important data remains available after updating.
- Make a backup before installing a new version.

If the application reports a storage initialization error, do not continue entering important information under the assumption that it is being saved correctly.

Preserve the database and investigate the error before attempting repairs.

---

# 9. System requirements

## Windows

- Windows 10 or Windows 11.
- 64-bit system.
- Sufficient storage space for the application and local database.
- Network access for printer monitoring, where required.

The released Windows packages are designed to avoid requiring users to manually install Node.js or Python.

## Linux

- 64-bit AMD64 system.
- Debian/Ubuntu package support for the `.deb` distribution.
- An environment compatible with the supplied AppImage for the AppImage distribution.

## Optional integrations

- Snapmaker Orca.
- OrcaSlicer.
- Creality Print.
- Compatible 3D printers.
- Moonraker, Fluidd or Mainsail, depending on the printer configuration.

---

# 10. Updating Print Cost & Profit

When a new release becomes available:

1. Visit the official GitHub Releases page.
2. Read the release notes.
3. Select the package for your operating system.
4. Download the new package.
5. Back up important application data.
6. Follow the installation instructions for your operating system.

Do not delete existing application data when updating.

Windows and Linux have separate release lines. Always check the version number and release notes before updating.

---

# 11. Troubleshooting

## The Windows application does not start

1. Verify that the ZIP archive was extracted completely.
2. Check that the application files remain together.
3. Try launching the application again.
4. Record any error message displayed.
5. Check Windows security notifications if the application is blocked.

## Windows displays a security warning

The Windows application is currently distributed without a commercial code-signing certificate.

Verify the source of the download and check any antivirus detection before proceeding.

## Printer monitoring does not work

1. Check that the printer is powered on.
2. Verify its network connection.
3. Confirm the printer's IP address.
4. Check that Moonraker is accessible, where applicable.
5. Review the printer connection settings.

## OrcaSlicer integration does not work

1. Check the slicer version.
2. Verify the integration configuration.
3. Confirm that the G-code file is being generated correctly.
4. Check the local G-code reception workflow.
5. Record any error messages.

## Application data is not being saved

1. Check whether local SQLite storage initializes correctly.
2. Preserve the existing database.
3. Do not delete application data as an improvised repair.
4. Record the error and the operation that caused it.

## Linux application does not start

For the AppImage version:

1. Verify that the file has execution permission.
2. Run the `chmod +x` command if necessary.
3. Launch the AppImage from a terminal.
4. Record any terminal error messages.

For the Debian package, check the package installation result and any missing dependency messages.

---

# 12. Development and source code

The source code is available from the official repository:

https://github.com/nilose2014/PrintCostProfit

The Windows desktop development environment uses Node.js and Electron.

To install the development dependencies:

```bash
npm install
```

To launch the application in development mode:

```bash
npm start
```

To generate the Windows distribution:

```bash
npm run dist:win
```

These commands are intended for developers working with the source code. Ordinary users should download the ready-to-use installation packages from GitHub Releases.

---

# 13. Copyright and licence

Print Cost & Profit is distributed under the conditions specified in the project's `LICENSE.txt` file.

Users should read the applicable licence before redistributing, modifying or using the software in ways covered by its terms.

The official repository is the reference source for the project and its published releases.

---

# 14. Support and bug reports

When reporting an issue, please provide:

- Print Cost & Profit version.
- Operating system and version.
- Printer model, if relevant.
- Slicer name and version, if relevant.
- Description of the problem.
- Complete error message.
- Steps required to reproduce the issue.

Do not include passwords, private keys or unnecessary personal information in bug reports.

**Official GitHub repository:**  
https://github.com/nilose2014/PrintCostProfit

**Official releases:**  
https://github.com/nilose2014/PrintCostProfit/releases

---

**Print Cost & Profit**  
**Windows Desktop Version 2.0 · Linux Version 1.4**

Developed by Beatriz Toro Martin.
