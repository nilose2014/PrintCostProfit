# Print Cost & Profit

**A complete cost-calculation, production-monitoring and business-management workspace for 3D printing.**

Print Cost & Profit helps makers and small 3D-printing businesses understand the real cost of every print, calculate sustainable selling prices, monitor compatible printers, manage filament stock and organize day-to-day sales operations.

> **Current Windows stable version: v1.4**  
> **Linux package: v1.4**  
> Check the Releases page for the latest published builds and platform-specific files.

---

## Downloads, Repositories and Installation

Start here. Only download Print Cost & Profit from the official GitHub repository and its Releases pages.

| **Platform** | **Version** | **Direct Download** | **Release Page** |
|---|---|---|---|
| **Windows** | **v1.4** | [Download Windows Installer ZIP](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.4/PrintCostProfit-Windows-Installer-v1.4.zip) | [Windows v1.4 Release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v1.4) |
| **Linux (64-bit)** | **v1.4** | [Download Debian Package (.deb)](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb) | [Linux v1.4 Release](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4) |

### Official Project Links

- **Main repository:** [Print Cost & Profit](https://github.com/nilose2014/PrintCostProfit)
- **Linux source branch:** [Linux branch](https://github.com/nilose2014/PrintCostProfit/tree/linux)
- **All releases and downloads:** [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases)
- **Windows v1.4 release:** [Windows v1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/v1.4)
- **Linux v1.4 release:** [Linux v1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)
- **Windows v1.4 installer (ZIP):** [Direct Download](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.4/PrintCostProfit-Windows-Installer-v1.4.zip)
- **Linux Debian package (DEB):** [Direct Download](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)
- **Latest release:** [GitHub Latest Release](https://github.com/nilose2014/PrintCostProfit/releases/latest)
- **Issues and bug reports:** [GitHub Issues](https://github.com/nilose2014/PrintCostProfit/issues)

> The official Releases page is the reference point for checking available versions and their installation files.

### Windows Installation

1. Open the [Windows v1.4 release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v1.4).
2. Download [PrintCostProfit-Windows-Installer-v1.4.zip](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.4/PrintCostProfit-Windows-Installer-v1.4.zip).
3. Extract the ZIP file to a folder on your computer.
4. Run the installer included in the extracted files and follow the instructions.
5. Launch **Print Cost & Profit** using the installed desktop shortcut.
6. If your browser does not open automatically, visit:

   `http://127.0.0.1:8700/`

**Windows Notes**

- The local server must be running while you use the application.
- If your browser displays an older interface after an update, close the previous server, start the server from the updated installation and perform a hard refresh using `Ctrl + F5`.
- Back up your application data before updating.
- Do not delete the application data directory when uninstalling or replacing program files unless you intentionally want to remove your stored information.

### Linux Installation (Ubuntu, Debian and Compatible Distributions)

Print Cost & Profit v1.4 for Linux is distributed as a native Debian package for 64-bit (`amd64`) systems.

1. Open the [Linux v1.4 release](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4).
2. Download the [Print Cost & Profit Debian package](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb).
3. Open a terminal in the folder where the file was downloaded.
4. Install the package:

   ```bash
   sudo apt install ./printcostprofit_1.4.1_amd64.deb
   ```

5. Launch **Print Cost & Profit** from your applications menu or run:

   ```bash
   printcostprofit
   ```

6. If your browser does not open automatically, visit:

   `http://127.0.0.1:8700/`

**Linux Notes**

- The application version is **v1.4**.
- The package is intended for 64-bit Linux systems (`amd64`).
- The installer declares the required dependencies so that `apt` can resolve them.
- Application data is stored separately from program files in the user's application data directory.
- To update, install the newer `.deb` package over the existing installation.
- Back up your data before updating. Do not remove the application data directory if you want to keep your information.

---

## Integrating Print Cost & Profit with Snapmaker Orca

To automatically send print information from Snapmaker Orca to Print Cost & Profit, you need to configure the post-processing script.

This integration allows the application to receive the available G-code information and use it in the cost calculator.

### Windows – Snapmaker Orca

1. Install and launch **Print Cost & Profit v1.4**.
2. Make sure the local server is running at:

   `http://127.0.0.1:8700/`

3. Open **Snapmaker Orca**.
4. Select the printer profile you use with your Snapmaker U1.
5. Go to **Printer Settings → General**.
6. Locate the **Post-processing scripts** field.
7. Enter the full path to the integration script included with the application installation.

   **Example:** If you installed Print Cost & Profit in the default directory `C:\PrintCostProfit`, enter:

   ```text
   C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat
   ```

   If you installed the application in a different directory, replace `C:\PrintCostProfit` with your actual installation path.

8. Save the printer profile.

When you slice and export a G-code file, Snapmaker Orca will execute the configured script and send the available print information to Print Cost & Profit.

**Important:** Do not enter the server URL in the post-processing scripts field. You must enter the path to the integration script file.

### Linux – Snapmaker Orca

1. Install **Print Cost & Profit v1.4** using the Debian package described above.
2. Launch the application and make sure its local server is running.
3. Open **Snapmaker Orca**.
4. Select your Snapmaker U1 printer profile.
5. Go to **Printer Settings → General**.
6. Locate the **Post-processing scripts** field.
7. Enter the full path to the Linux integration script included with the installation.
8. Save the printer profile.

If the script does not have execution permissions, you can enable them from a terminal:

```bash
chmod +x /path/to/integration-script.sh
```

Replace the example path with the actual location of the installed script.

### Using the Integration

Once the integration is configured:

1. Open Print Cost & Profit and Snapmaker Orca.
2. Slice your model in Snapmaker Orca.
3. Export the G-code file.
4. The post-processing script will send the available print information to Print Cost & Profit.
5. Open the calculator and review the imported information.

Depending on the metadata available in the G-code, the application can receive:

- Filament materials.
- Filament colours.
- Estimated filament usage in grams.
- Estimated printing time.

Check the filament assignments, materials and printing time before calculating the print cost.

**Important:** The Print Cost & Profit local server must remain running so that Snapmaker Orca can communicate with the application.
### First launch and printer connection

- Start the local application server before opening the web interface.
- For printer monitoring, the computer and printer must be reachable on the local network.
- Configure the printer's Moonraker connection using the printer's LAN address and the port configured by the printer.
- The printer can be offline while its connection settings are saved; live status and monitoring require the printer to be online.
- Snapmaker Orca integration depends on the supported local integration workflow and the post-processing script supplied with the relevant platform package.

---

## What is Print Cost & Profit?

Print Cost & Profit is designed to bring the technical and commercial sides of 3D printing into one place.

A slicer estimates material use and print duration. A business, however, also needs to account for electricity, machine wear, maintenance, labor, finishing, failed prints, stock and the final selling price. Print Cost & Profit combines these considerations in a practical workflow:

1. Import print information from a supported G-code workflow or enter the job details manually.
2. Calculate the real production cost.
3. Set a profit target and calculate a recommended price.
4. Review material availability and printer information.
5. Save estimates and manage the associated business records.
6. Track production, stock, maintenance and financial activity.

The interface uses a dark, high-contrast layout with dedicated sections for the calculator, dashboard, printer monitor, inventory and business-management tools.

## Main features

### 1. Print-cost calculator

The calculator is the core of the application. It turns print parameters and operating costs into an understandable cost and price breakdown.

Depending on the information supplied, the calculation workflow supports:

- Filament/material consumption in grams.
- Material price and cost per kilogram.
- Print duration.
- Electricity consumption and electricity cost.
- Printer amortization and machine-related costs.
- Maintenance cost allocation.
- Labor and preparation time.
- Additional costs and finishing.
- Painting or finishing cost per unit.
- A reserve for failed prints.
- Profit percentage / target benefit.
- Recommended selling price.
- Cost per unit and profit per unit.
- Profit margin and comparison of price scenarios.

The calculator is intended to make the difference between **production cost**, **selling price**, **profit** and **margin** visible, rather than treating filament cost as the entire cost of a print.

#### G-code and slicer data

The supported Orca workflow can pass print metadata to the application, reducing manual entry. Depending on the G-code metadata available, the import process can identify:

- The G-code filename.
- Filament/material entries.
- Filament colours and colour codes.
- Estimated filament consumption.
- Estimated print time.
- Available thumbnail information.

Imported values should be reviewed before calculating. Slicer metadata and inventory assignments may need confirmation, particularly when a project uses several materials or colours.

#### Price comparison and saved calculations

The calculator includes tools to compare price scenarios and work with saved valuations. This helps assess how a different profit target or an additional amount affects the final price.

### 2. Dashboard and business overview

The dashboard brings key business figures and activity into a single overview.

It is designed to help review:

- Sales and business totals.
- Cost and profit indicators.
- Financial summaries and charts.
- Stock-related information.
- Printer and production status.
- Recent activity and shortcuts to frequently used areas.

The dashboard is an overview; detailed records remain available in their corresponding sections.

### 3. Printer monitor — Snapmaker U1 / Moonraker workflow

The printer monitor connects the application to a compatible printer through its local network interface and Moonraker-compatible endpoints.

Monitor capabilities include:

- Printer discovery and manual IP configuration.
- Saving printer connection settings.
- Checking whether a printer is online or offline.
- Reading printer state and print progress.
- Displaying the active print/job information when supplied by the printer.
- Showing available print metadata such as filename, progress and filament usage.
- Listing files exposed by the printer.
- Working with available G-code thumbnail data.
- Selecting a printer when more than one printer is configured.
- Sending the active print information to the calculator for cost estimation.

The monitor and calculator are connected so that a print can move from production monitoring into the costing workflow. Imported print information should be checked before using it for a quote or valuation.

**Connectivity:** The computer running Print Cost & Profit must be able to reach the printer on the LAN. Network isolation, firewall rules, an incorrect IP address or an unavailable Moonraker service can prevent monitoring.

### 4. Filament inventory and stock

The filament inventory is designed around the physical spools used by the printers.

Inventory records can include:

- Brand.
- Material type (for example PLA, PETG and other configured materials).
- Colour name.
- Colour value / HEX code.
- Initial spool weight.
- Remaining filament weight.
- Price per kilogram.
- Stock information used by the print workflow.

The application can compare imported G-code material and colour information with stored spools. When a suitable match is not clear, the assignment should be reviewed and selected rather than assumed.

The stock workflow is intended to help identify whether enough filament is available before a print. A warning about insufficient material is not the same as a confirmed physical measurement: spool weights and inventory values must be kept up to date.

### 5. Printers and machine profiles

The application includes printer-related configuration and monitoring areas.

These support workflows such as:

- Configuring printers and their connection details.
- Identifying printers on the local network where discovery is supported.
- Keeping printer information available for later sessions.
- Reviewing printer status in the monitor.
- Associating production and accounting information with the relevant printer.

The monitor is designed for the Snapmaker U1 workflow described in this project. Other printers or firmware combinations may require compatible Moonraker endpoints and have not necessarily been validated.

### 6. Maintenance centre

The maintenance area helps organize preventive and corrective work on 3D printers.

It provides a structured place to record and review maintenance tasks, including machine-specific checks. Depending on the selected printer and configured maintenance plan, examples include:

- Cleaning and general inspection.
- Lubrication and greasing of axes and moving parts.
- Checking belts, guides and mechanical movement.
- Hotend inspection.
- Nozzle inspection and nozzle replacement.
- Checking extruder and filament-feed components.
- Checking fans and cooling.
- Reviewing print-bed condition and adhesion.
- Checking cables, connectors and other visible components.
- Recording maintenance actions and their status.

Maintenance requirements differ by printer model. Always follow the manufacturer's maintenance instructions and safety guidance; the application is a tracking aid, not a substitute for the service manual.

### 7. Estimates, orders and invoices

Print Cost & Profit includes business-document workflows to help manage customer requests and completed work.

The available areas cover:

- Creating and saving estimates/quotes.
- Managing orders.
- Creating invoices.
- Working with customer information.
- Reviewing document details and totals.
- Producing PDF documents for sharing or record keeping.
- Moving from an estimate toward an invoice where the workflow supports it.

Document numbering, tax settings, currency and customer details should be checked before issuing a document. Always verify the generated PDF before sending it to a customer.

### 8. Customer management

The customer area provides a place to store customer details and associate them with commercial documents.

It is intended to reduce repeated data entry and keep estimates, orders and invoices organized around the relevant customer.

### 9. Accounting and financial tracking

The accounting area is designed to record business movements and review the financial results of 3D-printing activity.

It supports a workflow for reviewing income, costs and benefits, with printer-related context where configured. Use it alongside the calculator and commercial documents to understand how individual jobs contribute to the overall business.

Accounting records should be checked against the user's official bookkeeping and tax requirements. Print Cost & Profit is an operational management tool, not accounting or tax advice.

### 10. Product catalogue and product information

The project includes product-catalogue functionality for organizing products made or sold by the business.

Product information can be used to keep product records together with the wider sales workflow. Where enabled in the build, product presentation and QR-related features help connect a physical product with its catalogue information.

### 11. Activity log and diagnostics

The application includes local activity/logging functionality to help review events and investigate problems.

Logs are useful when diagnosing:

- Local server startup issues.
- Printer connection problems.
- API errors.
- Import and integration problems.
- Backup and storage operations.

When reporting a problem, include the relevant log output, operating system, application version and the steps that reproduce the issue. Remove private information such as customer details, network credentials and public/private access tokens before sharing logs.

### 12. Backups, data storage and recovery

The application uses local data storage and includes backup and recovery workflows in the supported builds.

The Linux server includes API support for snapshots, revision control, backups and logs. The Windows build includes its own local server and storage workflow.

Good practice:

- Make a backup before installing an update.
- Keep backup copies somewhere separate from the application folder.
- Do not manually edit the database while the application is running.
- Do not delete the application-data directory when replacing program files.
- Test restoration procedures with a copy of the data before relying on them for business-critical recovery.

### 13. Settings and interface customization

The settings area groups application configuration and interface options. The interface also supports panel/section organization controls, such as hiding fields and changing section order where available.

Available options can vary by platform build and release.

### 14. Multi-language interface

The application centralizes interface text in `js/traducciones.js` and is designed for these eight languages:

- Spanish
- English
- French
- German
- Italian
- Polish
- Arabic (right-to-left layout support)
- Simplified Chinese

New interface text, including labels, fields, dialogs, buttons, warnings and errors, should be added to the centralized translation system and translated across all supported languages.

---

## Screenshots

The screenshots below are from the application interface and show the main areas and workflows. They are included in this repository package under `assets/screenshots/`.

### Dashboard and overview

![Print Cost & Profit dashboard](assets/screenshots/screenshot-02.jpg)

### Cost calculator and print information

![Cost calculator](assets/screenshots/screenshot-03.jpg)

![Print data and calculator workflow](assets/screenshots/screenshot-01.jpg)

### Production, estimates and business workflows

![Business workflow screen](assets/screenshots/screenshot-05.jpg)

![Cost and pricing overview](assets/screenshots/screenshot-06.jpg)

![Configuration and business records](assets/screenshots/screenshot-07.jpg)

### Settings, documentation and application configuration

![Application configuration](assets/screenshots/screenshot-08.jpg)

![Application settings](assets/screenshots/screenshot-09.jpg)

![Version and update settings](assets/screenshots/screenshot-10.jpg)

### Customers, estimates, orders and invoices

![Customer management](assets/screenshots/screenshot-12.jpg)

![Customer and document workflow](assets/screenshots/screenshot-13.jpg)

![Document management](assets/screenshots/screenshot-14.jpg)

![Order and estimate workflow](assets/screenshots/screenshot-15.jpg)

![Invoice and commercial records](assets/screenshots/screenshot-16.jpg)

![Customer and sales details](assets/screenshots/screenshot-17.jpg)

### Filament inventory and printer-related workflows

![Filament stock](assets/screenshots/screenshot-18.jpg)

![Filament inventory cards](assets/screenshots/screenshot-19.jpg)

![Printer and material overview](assets/screenshots/screenshot-20.jpg)

### Profitability, reporting and invoices

![Profitability dashboard](assets/screenshots/screenshot-21.jpg)

![Financial overview](assets/screenshots/screenshot-22.jpg)

![Invoice PDF example](assets/screenshots/screenshot-23.jpg)

### Maintenance centre

![Maintenance centre overview](assets/screenshots/screenshot-24.jpg)

![Maintenance tasks](assets/screenshots/screenshot-25.jpg)

### Additional application screens

![Additional application screen](assets/screenshots/screenshot-04.jpg)

![Additional application screen](assets/screenshots/screenshot-11.jpg)

![Additional application screen](assets/screenshots/screenshot-26.jpg)

---

## Typical workflow

A typical print-to-sale workflow can look like this:

1. **Prepare the job** in the slicer and generate the G-code.
2. **Import print data** through the supported Orca integration or enter the values manually.
3. **Review materials and colours** and match them with the filament inventory.
4. **Check the printer** and available filament before production.
5. **Calculate the real cost**, including material, time, electricity, machine costs, labor and finishing.
6. **Set the selling price** using the target profit and review the margin.
7. **Save the estimate** and associate it with the customer where appropriate.
8. **Monitor the print** through the printer monitor.
9. **Record the sale or invoice** and review the resulting financial activity.
10. **Keep stock and maintenance records current** for the next job.

---

## System requirements

### Windows

- Supported 64-bit Windows environment.
- A user account with permission to run the application and write to its data directory.
- Local network access to the printer for monitoring.
- Internet access for checking GitHub releases and downloading updates.

### Linux

- A compatible Linux distribution (the documented workflow targets Ubuntu, Debian and derivatives).
- Python 3.
- SQLite support.
- Permission to execute the startup script.
- Local network access to the printer for monitoring.

### Printer integration

- A supported printer connection workflow.
- Moonraker-compatible local API access for the monitor.
- Correct printer IP address and network configuration.
- Snapmaker Orca integration configured as described in the platform package.

---

## Versioning and updates

The Windows stable release and the Linux application release documented here are both **v1.4**. Their release pages are separate: [Windows v1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/v1.4) and [Linux v1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4). The Linux Debian package revision is `1.4-1`; this is the package revision, not application version `1.4`.

For updates:

1. Back up your application data.
2. Download the correct package for your operating system from GitHub Releases.
3. Stop the currently running local server.
4. Update the program files using the release instructions.
5. Start the server from the updated installation directory.
6. Confirm the version shown by the application before continuing work.

Do not run two copies of the local server on the same port. The default local address is `127.0.0.1:8700`.

---

## Troubleshooting

### The application does not open

- Confirm that the local server is running.
- Check the terminal or PowerShell window for startup errors.
- Open `http://127.0.0.1:8700/` manually.
- Make sure another application is not already using port `8700`.

### The application shows the wrong version

- Stop the old server.
- Start the server from the intended installation directory.
- Check the local version endpoint:
  - `http://127.0.0.1:8700/api/version`
- Confirm that the `VERSION` file in that same directory contains the expected version.
- Hard-refresh the browser with `Ctrl + F5`.

### The printer is offline or cannot be found

- Check that the printer is powered on and connected to the same reachable network.
- Verify the printer IP address.
- Check Moonraker availability and firewall rules.
- Try manual IP configuration if discovery does not find the printer.

### G-code data or thumbnails are missing

- Confirm that the G-code file contains the expected metadata.
- Check whether the slicer/export workflow provides a thumbnail.
- Review the imported material, colour, weight and duration before calculating.
- Some files or firmware versions may not expose all metadata.

### Linux startup tests fail

- Run the startup script from the extracted project root.
- Confirm Python 3 and SQLite are installed.
- Keep the full error output from the test that failed.
- Do not continue with a failed startup check until the cause is understood.

---

## Project structure (high level)

The application is organized around a web interface, modular JavaScript functionality, CSS resources and a local server.

- `Print_Cost_Profit.html` — application interface.
- `js/` — application modules, integrations and centralized translations.
- `css/` — interface styles.
- `VERSION` — application version used by the local server.
- `Servidor_Panel_U1.ps1` — Windows local server.
- `linux/` — Linux server, startup script and Linux-specific tests/integration.
- Local application data — database, logs and backups stored separately from the program files according to the platform configuration.

The exact contents may differ between Windows and Linux packages.

---

## Support, bug reports and contributions

- Report bugs: https://github.com/nilose2014/PrintCostProfit/issues
- Browse source code: https://github.com/nilose2014/PrintCostProfit
- Browse Linux source: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Download releases: https://github.com/nilose2014/PrintCostProfit/releases

When opening an issue, include:

- Application version.
- Operating system and version.
- Windows or Linux package used.
- Printer model and connection method, if relevant.
- Steps to reproduce the issue.
- Relevant error messages or sanitized logs.
- Screenshots where they help explain the problem.

Never publish passwords, API tokens, private network credentials, customer personal information or database files containing private business data.

---

## Important information

Print Cost & Profit is a production-cost and business-management aid for 3D-printing workflows. Calculations depend on the accuracy of the entered data, slicer metadata, printer configuration, electricity rates, material prices and business settings. Always review calculations, stock assignments, quotes and invoices before relying on or issuing them.

Printer monitoring and slicer integration depend on compatible local network services and firmware/API behavior. Features can vary between platform packages and releases.

---

**Print Cost & Profit — understand your costs, price your prints and manage your 3D-printing workflow.**
