# Print Cost & Profit v1.3

## 3D printing cost calculator, production and management

Print Cost & Profit helps calculate manufacturing costs, track materials and organise 3D-printing jobs. The scope of each project stage is listed separately below.

## Version history

### v1.3 — Licensing-system translations and language support
- Missing translations are added to `js/traducciones.js` for login, authentication and licence-lookup flows in Spanish, English, French, German, Italian and Polish.
- The fixed global-dialog labels (“Notice” and “Accept”) use the central translation system instead of a separate dictionary.
- Application text is integrated and maintained in the eight available languages: Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- New text and dialogs are centralised in `js/traducciones.js` to avoid isolated strings in application files.

### v1.2 — October 31 changes: automatic printer reconnection at startup
- When the application opens, the saved IP address of the selected printer is reapplied to the local bridge before its status is queried.
- Connection is checked after configuration synchronisation, preventing an online printer from appearing disconnected because the bridge retained an older IP address.
- The selected printer and saved IP are retained when the printer is genuinely offline; no network scan is forced and the selected printer is not changed.

#### October 30 changes: U1 monitor, thumbnails and SQLite
- The configured printer and its IP are retained even when it is powered off or unresponsive; it is marked “DISCONNECTED” and stale monitor data is cleared.
- The active G-code reader extracts the highest-resolution thumbnail and preserves it when sending the job to the calculator.
- Duplicate SQLite writes are reduced: printer selection uses a canonical key and the calculator draft is saved in a grouped operation (350 ms), with a flush on exit.
- Historical keys remain supported for compatibility, and new text is centralised in `js/traducciones.js` for the six languages.

### v1.1 — First public release and earlier feature history
- First public release: cost calculator, estimates, Orca/G-code integration, U1 monitor, inventory, accounting, customers, quotes, orders, invoices, SQLite and six languages.
- Improvements released before v1.2 are grouped here to maintain consistent commercial versioning without exposing internal development numbering.

## Installation and updates

Windows 10/11 is the reference environment. Download the package for your operating system from the repository Releases page, extract the archive and follow the included instructions. Back up your data before updating.

## Available languages

Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.

## Translations and maintenance

Visible application strings are centralised in `js/traducciones.js`. Every new label, message, dialog or field must be added there and translated into all eight languages, without duplicate keys.

## Licences

Licence, subscription and payment features remain disabled. This version does not enable paid restrictions.

## Support

When reporting an issue, include the version, reproduction steps and relevant console messages. Do not share passwords or private keys.

**Package version:** `1.3.99`  
**Repository:** https://github.com/nilose2014/PrintCostProfit
