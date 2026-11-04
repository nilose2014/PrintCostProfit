### v1.4 — Version information and manual update checks
- Added a section in Options showing the installed version.
- Added the “Check for updates” button to manually check stable GitHub releases.
- When a newer version is available, its number is displayed and the Windows installer ZIP is offered if attached; otherwise, the official release page is opened.
- If no newer version is available, the application reports this. Automatic startup notifications and periodic checks are retained.
- All new text is centralized in `js/traducciones.js` and translated into Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- New public release based on build 5.58: maintenance center reorganized, care tips separated from tasks, alert fixes, and improved Unicode/RTL support in PDFs. Prepared for updating from v1.3 through the GitHub Releases installer while preserving local data.

- First Linux adaptation based on the Windows v1.4 application: native Python server, SQLite storage API, backups, logs and Snapmaker U1 services. The interface code and eight-language translations are retained. Orca post-processing integration and testing with a physical printer remain to be validated.

- Reorganized the maintenance center: full-width compact task cards, collapsible tips below them, and a full-width creation form. Responsive design for mobile devices.

- Invoice and quote PDFs: replaced the Helvetica/WinAnsi-limited encoding with high-resolution Unicode rendering using local Noto fonts for Arabic and Chinese. PDF generation remains local and does not depend on the default browser or installed fonts.

- Fixed the alerts panel: filament and maintenance alerts no longer overwrite one another or disappear when the Home dashboard refreshes.

- U1 server: fixed PowerShell syntax when building Moonraker queries with `&` separators; the character is now generated safely. Saved the script with a UTF-8 BOM for Windows PowerShell 5.1 and correct display of Polish characters.

- U1 monitor: increased the status-query timeout to 8 seconds and the browser wait limit to 10 seconds. This prevents the printer from being marked as disconnected when it responds to G-code requests but takes longer to return its status.
- Redesigned the maintenance panel with clearer, responsive cards, indicators, forms and history.
- Expanded preventive checks for the hotend, nozzles, heater/thermistor, extruder, belts, fans, bed, sensors and wiring.
- Fixed detection of Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro and Bambu Lab printer families.
- New preventive tasks are also added to already registered printers without deleting tracked hours, custom tasks or history. Common intervals are marked as recommendations and can be edited.
- Updated centralized translations for all eight languages.
- Remaining grams for each spool are displayed with up to two decimal places, and the editable field uses 0.01 g increments. The stored value is not changed until the user edits the field.
- Refreshed Quotes, Orders and Invoices with visual headers, organized forms, dark fields and more readable tables, while retaining existing actions and workflows.
- Improved the filament inventory presentation with a clearer form, spool cards, remaining-material indicators and editing controls.
- Unified the Accounting appearance with the Home dashboard, including profitability cards and transaction panels.
- Redesigned the Clients tab with a visual header, a better-organized form, dark fields consistent with Home and clearer control hierarchy.
- The Notes field no longer appears as a native white box; it now uses the dark theme and the same style as the other fields.
- The client directory uses compact cards, improves readability and removes unnecessary empty space. Client search, editing, saving and deletion are retained, as is client reuse in quotes, orders and invoices.

- Redesigned the Options tab with compact two-column cards, clearer visual hierarchy and styling consistent with Home. Printer, backups, profiles and activity log retain full width where needed.
- Fixed the “Show fields” and “Hide fields” buttons: they now correctly expand and collapse content and reflect the state through the accessible `aria-expanded` attribute.
- Existing fields, controls, ordering and collapse preferences, translations and saved data are retained. The SQLite database is not modified.

- Corrected the Options documentation: the eight README files are now independent, localized HTML pages.
- Each language opens its own HTML manual from the application; the broken path to nonexistent files has been removed.
- The Arabic manual uses RTL direction, and all manuals use the application's dark theme.

- Replaced decorative top-bar icons with functional neon-style buttons for alerts, documentation and options.
- The bell opens the alerts section and displays the actual alert count.
- The question-mark button opens the manual for the selected language; paths now point to the included localized README files.
- The gear opens the Options tab directly.

- Connected the Home “Printer monitor” block to the local bridge's real `/api/u1/status` endpoint instead of reading text from a panel that may be hidden.
- Displays connection, status, active file and print progress; shows disconnected when the bridge or printer does not respond.
- The “Open monitor” button refreshes the status before opening the full monitor.

- Corrected Home indicator calculations so they use the same normalization and rules as Accounting.
- Unaccounted estimates are excluded, and duplicate income associated with older orders is avoided.
- Income, costs, profit, margin and amount collected use the same criteria as Advanced Profitability.
- Complete Home redesign with dashboard, indicators, charts, recent jobs, stock, quick links and alerts.
- Data is read from local history, accounting and spools; existing functions are retained.
- New text is centralized and translated into all eight languages.

- Added a persistent local log for JavaScript errors, unhandled promises, SQLite incidents and activity from main controls.
- Added a viewer in Options with level filters and search, plus JSON export and manual deletion.
- Logs are stored outside the installation folder, in the user's local data directory, with automatic rotation and a maximum of 50 visible entries.
- The logger avoids capturing form values and sensitive data. Generated log files are never included in distribution ZIP files.
- All new text is centralized and translated into all eight languages.

### v1.3 — License-system translations and language expansion
- Added missing translations in `js/traducciones.js` for sign-in, authentication and license-checking flows in Spanish, English, French, German, Italian and Polish.
- Fixed text in the global dialog (“Notice” and “Accept”) now uses the centralized translation system, without a separate dictionary.
- Integrated and maintained application text in all eight available languages: Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- New text and dialogs are centralized in `js/traducciones.js` to avoid isolated strings in application files.
- Added Arabic and Simplified Chinese, expanding the application to eight languages: Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- Fixed G-code thumbnail issues: extract the highest-resolution available thumbnail and preserve the image when sending a job from the monitor to the calculator.
- Fixed minor operation, initialization, translation and color-alias issues.

### v1.2 — Changes from October 31: automatic printer reconnection at startup
- When the application opens, the saved IP of the selected printer is reapplied to the local bridge before its status is checked.
- The connection check runs after the configuration is synchronized, preventing an online printer from being shown as disconnected because the bridge retained an older IP.
- The selection and saved IP are retained when the printer is actually offline; no network scan is forced and the selected printer is not changed.

#### Changes from October 30: U1 monitor, thumbnails and SQLite
- The configured printer and its IP are retained even when it is powered off or does not respond; it is identified as “DISCONNECTED” and stale monitor data is cleared.
- The active G-code reader extracts the highest-resolution thumbnail and preserves it when the job is sent to the calculator.
- Reduced duplicate SQLite writes: printer selection uses a canonical key and the calculator draft is saved in a batch (350 ms), with a final flush on exit.
- Historical keys are retained for compatibility, and new text is centralized in `js/traducciones.js` for the six languages.

### v1.1 — First public release and history of earlier features
- Initial public version: cost calculator, estimates, Orca/G-code integration, U1 monitor, inventory, accounting, clients, quotes, orders, invoices, SQLite and six languages.
- Earlier improvements published before v1.2 are grouped here to maintain consistent commercial version numbering, without displaying internal development numbers.
