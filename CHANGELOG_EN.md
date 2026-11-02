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
