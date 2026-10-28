# Print Cost & Profit

## Cost calculator, production and management tools for 3D printing

Print Cost & Profit helps estimate manufacturing costs, review prices and profit, organize materials, and manage information related to 3D printing jobs. It includes OrcaSlicer integration and local SQLite storage.

**Created by:** Beatriz Toro Martin  
**Reference operating systems:** Windows 10 and Windows 11  
**Official repository:** https://github.com/nilose2014/PrintCostProfit

## Main features

- **Print cost calculator:** estimates material, printing time, printer operation and wear, and other configured costs.
- **Price and profitability:** review estimated cost, selling price, profit, margin, and recommended price.
- **Printer profiles:** configure economic details for each machine.
- **OrcaSlicer integration:** processes G-code files through a post-processing script.
- **Local SQLite storage:** keeps application data in a local database on the computer.
- **Diagnostic tools:** includes scripts to help investigate startup and integration issues.

## Cost calculator

The calculator helps estimate manufacturing cost before deciding on a selling price. Results depend on the values entered and the selected configuration.

![Print cost calculator](galeria/en/01-cost-calculator.jpg)

## Cost, price and profit

Review the estimated cost breakdown and financial results to assess a potential selling price.

![Cost result and profit](galeria/en/02-cost-result-and-profit.jpg)

## Printer profiles and monitoring

Printer settings can account for differences between machines. The information available depends on the configured profiles and installed components.

![Printer profiles and monitoring](galeria/en/06-printer-profiles-and-monitoring.jpg)

## Order management

Review order information and the order-tracking features available in the application.

![Order management](galeria/en/10-order-management.jpg)

## Install on Windows

1. Open the [official repository](https://github.com/nilose2014/PrintCostProfit).
2. Select **Code → Download ZIP**.
3. Extract all files to a permanent folder, for example `C:\PrintCostProfit`.
4. Start the application by running `Integracion_Orca_Postprocesado.bat`.

For features that require local storage, start the application through the launcher. Do not open the HTML file directly or run the application from inside the ZIP archive.

## Configure OrcaSlicer

1. Find `Integracion_Orca_Postprocesado.bat` and copy its full path.
2. Open OrcaSlicer and go to the print profile settings.
3. Find **Others → Post-processing scripts** (labels may vary by version).
4. Add the full path to the BAT file and save the profile.
5. Slice a model and export a G-code file to check that post-processing runs correctly.

Processing depends on the generated G-code, OrcaSlicer configuration, and the information available in the file. Slicer estimates do not necessarily match the actual consumption confirmed by the printer.

## Local storage and backups

The application uses local SQLite components. Do not manually delete or move the database while the service is running. Create a backup before updating the application.

If a storage error appears, check the local service and use the diagnostic tools. Do not delete data to try to fix the problem, and do not continue entering information unless saving has been confirmed.

## Diagnostics

The distribution may include tools such as:

- `Diagnostico_Arranque.bat`
- `Diagnostico_Print_Cost_Profit.bat`
- `Diagnostico_Version.bat`
- `Probar_Integracion_con_Gcode.bat`

Use diagnostic scripts when needed and keep the full error message.

## Security and license

Download the application from the official repository. Do not share passwords or private keys, and do not expose the local service to the Internet without appropriate security configuration.

Read `LICENSE.txt` for the applicable terms of use and copyright information.

## Reporting an issue

Include the application version, Windows and OrcaSlicer versions, the action you performed, and the complete error message. Do not publish credentials or unnecessary personal information.
