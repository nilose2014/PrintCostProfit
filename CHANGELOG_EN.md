## v2.0.224

- v2.0.224: U1, I7 and K2 PRO requests now go directly from Electron main to each printer IP through Moonraker. Printer status, printer information and G-code header reads no longer pass through the localhost PowerShell endpoints. Cards and monitor use the same restricted IPC transport, with per-IP status caching. The local server remains for app assets, Orca integration and services that still depend on it.

## v2.0.222

- v2.0.222: full G-code downloads are no longer required to read filament data. The server requests only the header (up to 8 MiB), which contains the metadata and thumbnail. The monitor and panel reuse the same job for a given IP and filename, preventing duplicate downloads; both also query the status of the same selected IP.

- v2.0.221: the Printers tab and monitor now share the same persistent status worker per IP address. Each printer has its own Moonraker connection and cache; changing the selection no longer restarts or alters another machine's worker. Cards no longer use a separate endpoint for live status. Shared telemetry is expanded to include mesh, sensors, and layer data.

## v2.0.220

- v2.0.220: G-code analysis is now bound to the exact IP of the selected printer. Switching printers also cancels the server-side background read, not just the browser polling. This prevents an old read from consuming resources or interfering with the new selection.

## v2.0.219

- v2.0.219: unifies incremental translation traversal to prevent duplicate full-document scans. Repeated refresh calls are coalesced and only one full scan can be pending. Printer switching immediately aborts the previous request, prioritizes the latest selection, and does not report expected cancellations as errors.

## v2.0.219

- v2.0.219: fixes G-code progress polling so transient job-state file read/write conditions are not returned as HTTP 400; only invalid job IDs receive that status. Incremental translation is sliced into small tasks of up to 4 nodes or 5 ms per frame, and language changes traverse the document progressively.

## v2.0.217

- v2.0.217: fixes polling coordination when switching printers. If the previous request is still releasing its controller, the new poll is queued and starts automatically; stale data is cleared while connecting so another printer’s information is not shown. Expected cancellations are no longer reported as connection errors.

## v2.0.216

- v2.0.216: reduced the dynamic translator work per frame to prevent UI stalls. The initial scan now processes at most 60 nodes per frame and observer updates 35; incremental translation is preserved, with no changes to translation keys or dictionary data.

## v2.0.216

- v2.0.216: printer selection is unified across cards, dropdown, and monitor. Choosing a card immediately propagates the selected IP to every control; configuration errors or cancellations no longer restore the previous printer. Responses from older selection requests are ignored.


- v2.0.214: fixes printer selection from printer cards. The selected card updates immediately, and stale polling responses are discarded so the previously selected printer cannot reappear.

- v2.0.213: the desktop app performs SQLite snapshot reads and write batches through Electron IPC instead of HTTP. Optimistic revisions and the same SQLite file shared with the local server are preserved. Backup operations and Orca/U1 integrations continue using the local server.

## v2.0.212
- Reduce redundant writes and prevent rapid retry loops when SQLite or the bridge cannot confirm an operation. The queue preserves the latest pending change and uses progressive backoff; synchronization resumes after Windows wakes.

﻿- v2.0.212: added a persistent SQLite adapter worker to avoid starting a new process for every storage request; preserves writes, revisions, conflict handling, backups and restore.
- v2.0.210: fixed the declaration and handling of `pendingSelectedIp` in the printer panel.
- v2.0.209: fixed the undefined `pendingSelectedIp` error and queued printer changes during refreshes.
## v2.0.208
- Fixed printer switching in the Printers tab: the requested IP takes priority and pending refreshes no longer discard the change.
- The selector restores the previous selection if the bridge does not confirm the new IP.
- Reduced thermal-history save frequency to ease SQLite writes.

﻿- v2.0.207: Fixed printer switching in the Printers tab: after the bridge confirms the connection, the new IP is immediately synchronized with the detail selection before cards and details refresh. This prevents the previous IP from taking priority and keeping the wrong printer visible. No SQLite data or paths are changed.
- v2.0.207: Restored Servidor_Panel_U1.ps1 exactly from version 2.0.204, reverting the only PowerShell change introduced in 2.0.205; the remaining application fixes are retained. Removed an accidental .pyc file from the ZIP.
- v2.0.205: Reduced U1 monitor telemetry writes: elapsed time is persisted every five minutes, while state transitions are saved immediately. Fixed first-telemetry detection so it does not save on every poll. Selecting a printer card now creates a missing U1 selector option and triggers the actual connection change. No SQLite schema or path changes.
- v2.0.203: The U1 monitor now considers a print complete only after an explicit complete/completed/finished state; standby, ready, and idle no longer trigger filament deductions or close provisional accounting entries. The canceling/cancelling transition is no longer treated as a confirmed cancellation. A cancellation summary dialog is restored. The startup delay message now says “Starting the program, please wait…”. No SQLite changes.
- v2.0.202: The local server now treats browser disconnects while sending responses as cancelled connections instead of general server errors. The U1 cache-age conversion now uses Int64 to prevent Int32 overflow. The database, schema, stored data, and paths are unchanged.
- v2.0.201: Replaced individual queued writes with batches of up to 25 keys in one request and SQLite transaction. Each key retains its own revision; conflicts are reported per key and retried without discarding valid changes in the batch. Cross-window synchronization now checks the snapshot every 15 seconds instead of every 5. No SQLite schema, location, or stored data changed. The Python adapter still runs once per batch; this reduces process launches but does not yet introduce a persistent worker.
- v2.0.200: Manual IP is no longer persisted until the bridge confirms the printer selection; a failed /api/u1/config request therefore does not enqueue an IP that was not applied. The maintenance-triggered home dashboard refresh now runs only while the home tab is visible and is deferred to idle time; its interval is reduced from 30 to 60 seconds. No SQLite data, schema, or paths changed.
- v2.0.200: Prevented duplicate refreshes when selecting a printer card: the selector change already saves the IP and emits the event that refreshes the panel, so the second parallel load is removed. The /api/u1/config handler now separates IP persistence from status-worker startup; if the worker fails, a successfully saved IP is not incorrectly reported as a failed save, and the detail is recorded in printcostprofit_app.log. Genuine configuration-save errors still return 502 and are now logged with diagnostic details. No SQLite data or paths are changed.
- v2.0.198: Optimized translation initialization: the dictionary refresh requests are coalesced so indexes are rebuilt once, and the initial DOM translation runs in chunks to avoid blocking page startup. Dynamic translation of added elements and language switching are preserved. No SQLite data or paths are changed.
- v2.0.197: Improved the SQLite write queue and cross-window conflict handling. The bridge now returns the current revision and value for the conflicting key, allowing the client to reconcile that write without downloading the full snapshot. Revision checks and retries of the latest pending value are preserved; network and server errors still use snapshot reconciliation. No changes to the SQLite schema, database location, or stored data.
- v2.0.196: Fixed the error that prevented the U1 monitor from updating: the polling AbortController is now declared in the correct scope. When switching printers, the previous request is explicitly cancelled before the next cycle starts, preventing references to an undefined variable and late responses from the previous printer. The database and stored data are not modified.
- v2.0.195: Fixed U1 active-job persistence by correctly defining and comparing the per-file thumbnail record, removing the `thumbnailRecord is not defined` ReferenceError. Printer switching now cancels the previous poll, immediately displays the last saved job for the selected printer, and starts a fresh poll. IP selection no longer waits for a second synchronous Moonraker request; the status worker updates connectivity in the background. New messages translated into all eight languages.
- v2.0.194: Tuned U1 monitor storage: the active-job thumbnail is separated from progress data and saved only when changed; pending write-queue recovery and interactive-operation priority are improved. SQLite no longer runs DDL or renegotiates WAL on every request when the schema is current. U1 status-cache reads retry and return a safe transient state on failure.
- v2.0.193: Reduced U1 monitor storage load: the active-job thumbnail is stored separately and only when it changes, so periodic job updates no longer resend the base64 image. Improved write-queue recovery and prioritization of interactive writes over telemetry. Avoided renegotiating WAL in every SQLite process. The U1 status endpoint retries cache reads and returns a transient status instead of HTTP 502 for cache-read failures.
- v2.0.193: Fixed printer-cache temporary-file handling. If writing or replacing the U1 cache fails, the temporary file is removed in a finally block. On server startup, only known temporary files older than 24 hours are cleaned; the SQLite database, backups, and final cache files are not modified.
- v2.0.191: Rebuilt the home alerts list using a vertical flex container and auto-height cards with a minimum height, removing the grid layout that continued to cause overlap. Icon, title, and description flow and sizing are explicitly defined; the corrective stylesheet loads last to override inherited styles.
- v2.0.190: Fixed the home alert layout: removed the inherited pseudo-icon that occupied an extra grid cell and displaced the text, causing vertical stacking. Normal text wrapping is enforced inside each card.
- v2.0.190: Redesigned the home dashboard alerts as dark cards with clearer icons, separated titles and descriptions, improved spacing and contrast. The preview is limited to four alerts to prevent cramped text. Added a dedicated printer-problem icon.
- v2.0.190: Added notification-bell alerts for errors and problems detected on the selected printer, including fault states and disconnections. Alerts update and resolve when the problem clears. Added an Options checkbox to enable or disable these alerts. Translations centralized for all eight languages.
- v2.0.190: Orca: moved the wheel-control detection point to 85% of the native window height, into the lower settings area, avoiding dependence on the variable layout of the expanded or collapsed “Printer” section.
- v2.0.190: Orca: scrolling no longer relies on WindowFromPoint, which could return PCP's overlapping surface. Visible child controls of the Orca window are enumerated and the control from Orca's own process covering the lower panel point is selected; if none exists, the action is cancelled without interacting with another window.
- v2.0.190: Orca: moved the scroll arrows to 62% of the slicer area and the wheel target to 68%, within the lower visible settings region. The process check remains in place to prevent interactions outside Orca.
- v2.0.184: Fixed `package.json` encoding by removing its UTF-8 BOM, which prevented `@electron/rebuild` from parsing the JSON file during the Windows installer build.
- v2.0.184: Maintenance alerts now include real print hours, matching the Maintenance screen, and are rechecked periodically and after task changes. Orca: removed SendInput and physical cursor movement; arrows send the wheel only to the hit-tested control belonging to the Orca process, and cancel if the target is not Orca.
- v2.0.182: Fixed conversion of the negative wheel delta to UInt32 for SendInput. PowerShell no longer casts -120 directly to UInt32; its binary representation is preserved with BitConverter. This prevents the conversion error that stopped ScrollOptions.
- v2.0.181: Fixed the actual ScrollOptions script: it now uses SendInput with MOUSEEVENTF_WHEEL over the left settings area and restores the cursor position. Removed WM_MOUSEWHEEL delivery to the top-level HWND, which did not scroll the panel.
- v2.0.180: Replaced wheel messages sent to assumed HWNDs with genuine Windows mouse-wheel input (SendInput), positioned over Orca settings. The original cursor position is restored after injecting the scroll.
- v2.0.179: Scrolling is again directed to an actual Orca child control, hit-tested at a fixed point inside the left settings content. The event is no longer sent to the top-level frame that Qt did not process. The target PID is validated to prevent sending events to another application; arrow height is irrelevant.
- v2.0.178: Replaced WindowFromPoint targeting with WM_MOUSEWHEEL sent directly to Orca’s main window, using coordinates inside the left settings panel. Scrolling no longer depends on arrow height or alignment with the scrollbar; this avoids targeting headers or unrelated controls.
- v2.0.177: Orca settings scrolling now uses the actual vertical screen position of the clicked arrow. The wheel event is sent to the left-panel area at that same height, even when sections such as Printer or Filaments are collapsed/expanded and the scrollbar position changes.
- v2.0.176: Added the missing Win32 declarations in PCPWin32Overlay for WindowFromPoint and SendMessageTimeout. Native Orca settings scrolling can now locate the left control and send WM_MOUSEWHEEL without the missing-method error.
- v2.0.175: Fixed the integrated Orca area sizing: the work container now fills all available vertical space. Scroll controls remain in a fixed side rail without reducing slicer height. v2.0.174 had made the area a flex row without growth, causing Orca to appear only in a top strip.
- v2.0.174: Added targeted scrolling for Snapmaker Orca’s native left settings panel. Compact up/down buttons send WM_MOUSEWHEEL to the actual control inside the settings area (22% of window width), not the window edge or 3D bed. The target is validated as belonging to Orca and errors are reported. Added translations in all eight languages.
- v2.0.173: Completely removed the external Orca options scrollbar introduced in v2.0.172 because it did not work with the native panel. Restored the original slicer host area and removed its IPC and PowerShell code. The native integration from v2.0.171 is preserved.
- v2.0.172: Added a compact side control to scroll Snapmaker Orca print settings up and down from PCP, using buttons, mouse wheel and dragging. It sends scrolling to the native left settings pane without changing profiles or overlaying HTML on Orca. Five new strings translated into eight languages in traducciones.js.
- v2.0.171: Fixed alternative spool matching: only chromatically close shades from the same color family are offered (for example, red and orange-red); black, white, beige, and unrelated color families are excluded. Alternatives now use a compact selector to preserve the monitor layout.
- v2.0.170: Alternative spool selection in the U1 monitor and printer panel now recognizes variants within the same color family. For example, red ↔ orange-red and different green shades are allowed, while material compatibility and available-stock checks remain required. Unrelated color families are excluded.
- v2.0.169: Orca is displayed without its title bar or window borders inside the rectangle assigned by PCP. It remains a top-level Qt window owned by PCP to preserve modal dialogs; detaching restores its normal borders and controls.
- v2.0.168: Increased the vertical workspace for the integrated slicer by compacting the header, buttons and status line. The native Orca area fills the remaining space and is clamped to PCP’s available client area, including when the window is resized smaller.
- v2.0.167: Enlarged the usable Snapmaker Orca area. The header, buttons and status message are more compact, and secondary descriptive elements are hidden on typical-height displays to gain vertical space for Orca controls and scrolling.
- v2.0.166: Fixed Snapmaker Orca modal-dialog integration. The Qt window is top-level and owned by PCP again instead of being a WS_CHILD window, allowing New Project, Open and Save dialogs to display correctly. Added synchronization on PCP move, resize, maximize and restore, clamping Orca to the app area.
- v2.0.165: Optimized incremental DOM translation. The observer no longer walks entire subtrees or compares every node against every other node; it processes small batches and skips mutations generated by translation itself to prevent long UI freezes.
- v2.0.164: Orca is now a native child window of PCP, clipped by Windows to the client area so it cannot leave the app when resized. The panel uses available space without forcing a minimum height; the main window minimum size is reduced.
- v2.0.163: Enlarged the visible Orca slicer area and compacted the upper controls to provide more height for the native window.
- v2.0.162: Orca integration rejects untitled startup windows and waits for the Snapmaker/Orca main window, validating its title, handle and PID before docking.
- v2.0.161: Orca now waits for the stable Qt main window before integration, recovers replaced HWND handles, and rejects invalid geometry while the app is minimized.
- 2.0.160: Orca is displayed as a borderless native Qt top-level window owned by PCP and positioned over the slicer area; SetParent is removed to avoid rendering failures when mixing Qt and Electron. Position follows PCP when moved, resized, minimized, or restored.
- 2.0.159: revised native integration: Orca is parented directly to the PCP main window, avoiding the opaque Electron host window that covered Qt content. Also fixed a missing separator in traducciones.js that prevented the language system from loading.
- 2.0.158: restored the integrated Orca panel from the 2.0.148 baseline. The host window no longer receives fixed coordinates on move/resize; its geometry comes from the actual UI area. It also synchronizes on page scrolling and tab changes.
- 2.0.157: changed slicer strategy: Snapmaker Orca opens in a separate window, without SetParent or an overlapping host window. Interactive SQLite writes are prioritized over thermal telemetry history.
- 2.0.156: restored main.cjs and orca-window.ps1 from the 2.0.148 baseline, the last reference with visible Orca embedding. Reverted later visibility, positioning, and window-selection logic that changed native embedding.
- 2.0.155: restored Qt window discovery from the 2.0.148 baseline. Main windows in the launched process tree are accepted even before Snapmaker Orca assigns a title; later host and resize improvements are retained.
- 2.0.154: corrected Snapmaker Orca window selection. Untitled or auxiliary Qt windows are no longer embedded; the app waits for the main window to be identified to prevent a blank panel.
- 2.0.153: corrected Orca host-window display order; the host surface is shown before attachment and the Qt window is resized afterward so Chromium does not cover it. Removed a duplicate listener that restored fixed coordinates.
- 2.0.152: fixed the size and position of the native Orca panel; resizing and tab changes now preserve the actual visible-area dimensions.
## v2.0.151
- Embedded Orca: stable main Qt window selection, prioritizing Snapmaker/Orca titles and avoiding transient untitled startup windows.
- Embedded Orca: resize requests are debounced and serialized; if Windows loses the parent relationship, the Qt window is located and reattached instead of leaving a permanently blank panel.

## v2.0.150
- Integrated Orca: prevents the empty host window from appearing while Snapmaker Orca is still starting or its Qt window is being located.
- Integrated Orca: the native window is shown only after a valid window handle is confirmed; switching tabs during startup keeps the host hidden.
- Integrated Orca: if the process has started but the first attachment did not finish, the launch button retries attachment instead of incorrectly reporting that the slicer is ready.

## v2.0.149
- Stability: SQLite synchronization now notifies the UI only when actual data changes.
- Home: removed periodic full redraws; the dashboard updates on changes and navigation, with printer discovery throttled.
- Notifications: removed the full scan every 5 seconds; scans run at startup and when data changes.

## 2.0.148
- Orca: fixed the PowerShell error that prevented embedding the Qt window; the process ID returned by `GetWindowThreadProcessId` no longer uses the reserved automatic `$PID` variable.

## 2.0.147
- Fixed Snapmaker Orca embedding: visible Qt windows with an initially empty title are now eligible, with improved process diagnostics.

### v2.0.147
- Fixed manual alternative-spool assignment in the U1 monitor: an explicit selection is retained and shown as assigned even when its HEX color is approximate.
- Added the assignment notice in all eight languages.

## v2.0.143
- U1 monitor: G-code progress polling is reduced from 500 ms to adaptive 1.5–2.5 s intervals, with a bounded wait and per-request timeout. HTTP server error details are preserved.

## v2.0.136
- Orca slicer: added a diagnostic launch in a separate window that avoids reparenting the Qt window inside Electron. This allows object selection to be tested independently and helps distinguish window-hosting issues from Orca engine issues.

## v2.0.134
- Windows server: `Servidor_Panel_U1.ps1` is saved as UTF-8 with BOM and Windows line endings so PowerShell 5.1 correctly interprets Polish characters and does not corrupt strings or quotes during startup.

## v2.0.133
- Maintenance: the selector no longer mixes saved pricing profiles from Options with actual printers. It lists discovered printers using their IP-based aliases and keeps manually added maintenance machines.

## v2.0.133
- Orca: main-window discovery is now restricted to descendants of the selected executable or its exact installation folder, preventing accidental attachment to another open Orca instance.

## v2.0.129
- Snapmaker Orca integration: validates that the hosting script returns a window handle and PID before showing the panel; prevents an empty area from being presented as a successfully embedded slicer.
- Diagnostics: records the executable path, launcher PID, embedding result and unexpected Electron child-process exits to help distinguish UI failures from Orca process exits.

## v2.0.128
- Bed mesh: redesigns dense meshes to use the available space without shrinking the plot into a tiny grid. High-resolution meshes omit overlapping cell numbers, retain five axis references, and expose X/Y coordinates and Z height on hover.
- Snapmaker Orca: extends native-window discovery to 90 seconds and recognizes delegated OrcaSlicer/Snapmaker processes in the installation folder. Electron’s timeout is extended so it does not cancel discovery prematurely.

## v2.0.127
Prevents stale asynchronous G-code reads from overwriting the active print after changing printer or file. Obsolete polling responses are discarded and telemetry caches are isolated by printer IP so an older worker cannot publish another printer’s data.

- Snapmaker Orca: fixes the native integration process timeout. The Windows script could wait up to 35 seconds to locate the real window, while Electron terminated it after 25 seconds, leaving the panel stuck on “Preparing Snapmaker Orca”. The timeout now exceeds the script's maximum wait.
- Bed mesh: replaces the distorted 3D surface with a top-down heatmap showing Z values at every point, X/Y axes in millimeters, and a readable color scale. Removes the perspective and rotation controls that caused the distortion.

- U1 communication: one persistent background worker polls Moonraker and shares its cache across tabs; switching sections no longer starts a new connection query. Selecting or discovering another printer restarts only that worker.
## v2.0.124
- Fixes a JavaScript scope error when assigning a newly created spool from the U1 monitor. The action now uses the centralized translation API and no longer fails after creating and assigning the spool.

## v2.0.123
- Fixes calculator amount parsing for comma and dot decimals when registering jobs from the U1 monitor, preventing labor, extras and other components from becoming zero because of locale formatting.
- Saves labor and extras under compatible keys (`laborAndExtras`, `labor`, `extras`) and lets Accounting read both new and legacy movements.
- Strengthens native Snapmaker Orca embedding: also detects main windows whose process detached from the launcher, prioritizes Snapmaker/Orca titles, restores the embedded window, and repositions the panel when the app moves or resizes.
- Returns the hosted window title to help verify integration.

## v2.0.122
- Changes Snapmaker Orca integration so the slicer's native window is parented directly to the main Print Cost & Profit window; no separate overlapping host window is created.
- Positions the native area inside the app workspace and resizes it when the main window changes size.
- Show/hide repositions the native window in the embedded area; detaching Orca remains an explicit action.
- Removes the previous path that could display Orca as a separate window instead of embedding it in the main window.

## v2.0.121
- Fixes native Snapmaker Orca embedding by also locating child processes spawned by the launcher and waiting for the visible main window.
- Verifies that Windows actually parents the Orca window to the host panel before showing it; on failure, hides the empty panel and reports a visible error.
- Keeps tracking the real Orca process if the initial launcher exits and resizes the embedded window when the app is resized.
- Closing the slicer terminates the hosted Orca process.

## v2.0.120
- Adds a Snapmaker Orca slicer section to the desktop app. Select the executable and host its native window in an application panel on Windows.
- Adds controls to detach and close the slicer; Orca profiles are not modified.

## v2.0.120
- Adds a Snapmaker Orca slicer section to the desktop app, with executable selection and hosting of its native window in an application panel on Windows.
- Adds controls to detach and close the slicer. Orca profiles remain unchanged.

## v2.0.119
- Resume/hibernate recovery: pending SQLite writes are reactivated, stale requests are aborted, and application state is synchronized again when returning.
- U1 Monitor: prevents overlapping polls and refreshes printer status when the computer resumes or the window becomes visible.

## v2.0.118
- Toolhead statistics now use Snapmaker persistent `extruder_switch_recorder.json` counters queried through Moonraker.
- Uses actual `switch_count`, `error_count`, `retry_count` and, when the file is accessible, `fan_error_count`.
- Removes misleading log-text inference; the third metric now displays actual retries.

## v2.0.116
- Bed mesh: adds numeric X/Y references and five Z-scale ticks using the physical dimensions reported by the printer.
- Toolhead statistics: removes counting based on T0/T1 mentions or loose keywords; only explicit activation messages and errors tied to the exact extruder name are counted.
- Old statistics are invalidated to prevent retaining incorrect figures; unavailable evidence is shown as “—”.

## v2.0.115
- The 3D mesh spans the full panel width and fits every matrix point without cropping; X/Y axis references added.

## v2.0.114
- Actually adds the 3D bed mesh visualization to each printer detail, using the matrix published by Klipper/Moonraker.
- Shows dimensions, height scale, minimum, maximum and range; clearly reports when no valid matrix is available.

## v2.0.113
- Head statistics no longer count T0/T1 commands as physical toolhead changes; figures are shown only when explicit confirming events exist. General errors are no longer attributed indiscriminately to every head.
- Bed leveling now displays a 3D representation of the actual bed mesh matrix, with height scale, range and minimum/maximum values.

## v2.0.112
- Filament inventory: each grouped spool can store its remaining grams individually while keeping the existing compact card design.
- U1 Monitor: totals stock across compatible spools by material and colour and distributes consumption across them, respecting individual weights.

## v2.0.111
- Orders from Accounting now prefill the form with customer, description, selected jobs and amount; nothing is saved until “Save order” is clicked.
- Prevents empty or zero-value orders in this workflow.

## v2.0.111
- Accounting table now fits the available width without horizontal scrolling.
- Multi-selection is preserved when the view refreshes or synchronizes data.

## v2.0.109
- Accounting: multi-select entries, including personal expenses, with actions to send them to the calculator and create quotes, invoices or orders. Personal expenses remain internal costs and are not billed automatically.

## v2.0.108
- Fixes document selection in Orders: selecting a saved quote loads its actual product, customer and total; the amount recalculates when quantity changes and is validated again on save. Invoices created from the order retain the selected quote lines and amounts.
- Prevents duplicate customers when saving from customers, orders or invoices by matching email, phone, tax ID or complete identity; exact duplicates are consolidated while preserving existing fields.
- New orders retain a snapshot of the selected estimate or quote, and invoicing from an order uses that snapshot, its customer and original lines. Older orders without a snapshot will not create invoices from unrelated data.

## v2.0.106
- Fixes toolhead statistics: global errors and indirect mentions are no longer attributed to individual extruders. Only explicit activation and tool-selection commands are counted; when logs cannot identify a toolhead, the UI shows “—” instead of a misleading zero.

## v2.0.105
- Fixes monitor stock checks when inventory groups identical spools: calculates combined stock (remaining per spool × quantity) and distributes consumption across units without double deduction.

## v2.0.103
- Fixes the monitor's personal-expense/order registration dialog when opened from Accounting: `app-10.css` is loaded from the global document head instead of inserting a stylesheet link inside the dialog content.

## v2.0.103
- Reduces repeated writes to `pcp_active_job_by_printer`: the monitor no longer saves the full job to SQLite on every poll. Real state/file changes are saved immediately; elapsed-time-only updates are limited to once every 30 seconds.

## v2.0.103
- Prevents printer-card flicker: transient query failures retain the last good status for 90 seconds while reconnecting.
- Persisted printer data now contains stable identity/configuration only; online/offline state is no longer written to SQLite on every poll.
- Saved printers are read once per session instead of every 10-second refresh.
- Temperature history is persisted at most every five minutes to reduce SQLite load.

### v2.0.103
- Keep toolhead statistics per printer across refreshes and printer reselection.
- Match log events to each extruder accurately, avoiding inflated counts from partial text matches.
- Reduce repeated history and discovered-printer writes to ease the SQLite queue.
- Keep saved statistics visible when a log request fails.

## v2.0.99
- Toolhead statistics now load automatically when printer details are shown; no button press is required.
- Log retrieval uses a separate endpoint that does not re-query printer status, sensors or print history, avoiding interference with the Monitor.
- Added a progress modal during printer discovery and initial status retrieval.
- Removed a redundant second status request for the selected printer.

## v2.0.99
- localStorage-compatible storage now queues SQLite writes through asynchronous XHR without blocking the UI thread.
- Consecutive updates to the same key are coalesced and operations are serialized to reduce revision conflicts.
- 409 conflicts asynchronously refresh values and revisions and retry in a controlled manner.
- External synchronization no longer overwrites values that are still pending persistence.

## v2.0.99
- Fixed storage revision synchronization: values and revisions are updated together, preventing 409 conflicts caused by stale revisions.
- Added a single controlled retry for writes/removals when another window changes the same key.
- Reduced Monitor telemetry writes: persist only state changes or minute progress, not every poll.
- Reduced thermal-history persistence frequency from 9 to 30 seconds.
- Adjusted log retrieval timeout and bounded per-file waits to avoid browser aborts.

## v2.0.96
- Replaced the raw log listing with visual statistics cards for each detected toolhead: changes, activations and associated errors.
- Statistics are loaded on demand and do not add work to periodic refreshes.

## v2.0.95
- Fixed accidental closing of the Create Spool dialog when right-clicking numeric fields.
- Expanded layer-data discovery across Moonraker objects from different printers.
- Added manual Klipper log retrieval for toolhead changes, warnings and errors; logs are fetched only on request.

## v2.0.94
- Removed the “Printer data received” diagnostic panel and its JSON dump.
- Removed periodic serialization and UI updates for diagnostic data.
- The panel API no longer sends the discovered-object list used only by that diagnostic.

## v2.0.93
- New high-contrast thermal palette with clearly distinguishable colors.
- Persistent color assignment per sensor across sessions and refreshes.
- Normalize history labels to prevent stale names in the legend.

## v2.0.92
- Dynamically discover thermal sensors and Moonraker-published devices instead of relying on model-specific lists.
- Query objects in batches to support printers with many sensors.
- Build thermal charts and cards from available measured temperatures; fans without temperature readings are not plotted.
- Detect and display fan speed when Moonraker provides it.
- Localize known sensor labels while preserving firmware names for unknown devices.

## v2.0.89 — Moonraker statistics and thermal chart fix
- Read accumulated values from `result.job_totals`, the response structure used by `/server/history/totals`, while retaining support for compatible flat responses.
- Show job count, print time, total machine time and filament when Moonraker provides them; accumulated filament is displayed in metres.
- Refine the thermal chart width, scale and visual hierarchy of statistics cards.

## v2.0.88 — Printer statistics and chart corrections
- Total print time and job count now use Moonraker official totals only; a partial list of the latest 20 jobs is no longer presented as the complete history.
- Job bars use total duration, print duration, or start/end timestamps when available; entries without a valid duration are omitted.
- The temperature chart now uses a fixed SVG scale, readable labels, and correct proportions.

## v2.0.85

### v2.0.87 — Printer dashboard and statistics redesign
- The grid includes every discovered printer, including the primary one, with up to four cards per row and responsive layout.
- Printer cards, technical details and production statistics are visually separated.
- The temperature chart gains a Celsius scale, grid and time axis; recent job durations are charted when history is available.
- New strings are centralized in `js/traducciones.js` and translated into all eight languages.

- Printers: grid of up to four cards per row; the primary printer also remains visible in the grid.
- Select any card to switch the active machine and view its full details in a separate area.
- Detailed information is no longer mixed into the printer-card grid. Responsive layout for smaller screens.
## v2.0.82
- Fixed printer discovery startup: discovery parameter and internal state are now declared correctly.
- Fixed the G-code read error message, which called an undefined translation function.
- Removed two legacy blocks accessing the private translation index out of scope; rebuilding now uses PCP_I18N.refresh().
## v2.0.81
- Printers: live cards for all discovered or saved machines, showing online/offline status, active file and progress bar.
- Printers: the user-defined name for each IP takes priority; otherwise the machine-reported name/hostname is shown.
- Printers: read reported model, current/total layers and timing when published by Moonraker; query available objects without assuming a fixed extruder count.
## v2.0.80
- Accounting: keep the selected page when the view re-renders, preventing page 2 from jumping back to page 1.
- Accounting: sort entries by descending date and time, newest first and oldest last.
## v2.0.80
- Accounting: new entries save a real timestamp and display the PC's local time; legacy date-only records no longer show the false 01:00 time.
- Monitor: the button switches between Show and Hide according to panel state and keeps the correct label after language changes.
## v2.0.80
- Printers: the bottom notice now selects its text directly from the active language and refreshes when the document language changes.
- Calculator: redesigned desktop layout with four top sections, tax and breakdown panels in the second row, highlighted total, and comparison/actions in the third row. Existing IDs and calculation logic are preserved.
## v2.0.80
- Fixed the bottom informational message on the Printers page: it is explicitly refreshed when the language changes, using the central dictionary key.
## v2.0.80
- Fixed Printers translations loading: section strings are added to the central dictionary before language indexes are built, including dynamically rendered elements. No changes to Moonraker or extruder data handling.
## v2.0.80
- Audited and corrected translations throughout the Printers section: heading, status, identification, current job, temperatures, extruders, heated bed, motion, software, messages and received data. All strings are centralized in traducciones.js for Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
## v2.0.80
- Printer page visual redesign: top summary with circular progress indicator, active file and key timings.
- Thermal panel with independent cards and visual bars for each extruder and the heated bed; adapts to printers with one or multiple extruders.
- New labels centralized in all eight languages.
## v2.0.80
- Moonraker queries now discover each machine's available objects and retrieve data for all independent extruders, the bed, motion and supported sensors.
- The Printers page displays each extruder separately: one for single-extruder machines and four on the Snapmaker U1 when exposed by its firmware.
## v2.0.80
- The Printers section now reuses the existing Moonraker monitor endpoints (/api/u1/printer and /api/u1/status), displaying live state, progress, layers, times, temperatures and axis positions when available.
- Connection status updates after each successful query; data refreshes every 3 seconds while the section is visible.
## v2.0.80
- Restored SVG flag rendering in the language selector, matching the stable version. The single selector and centralized translations are retained.
- PowerShell scripts are saved with a UTF-8 BOM so Windows PowerShell 5.1 correctly reads accented characters and the bridge startup no longer fails on encoding.

## v2.0.80
- Removed duplicate selector creation; a single module now owns the language selector.
- The selector mounts after application scripts and is restored if the toolbar is rebuilt.
- Centralized translations in js/traducciones.js and all eight languages are retained.

## v2.0.61
- Adds a visible, persistent language selector to the top toolbar, independent of the previous internal mounting logic.
- Retains all eight languages and the centralized translation engine.

## v2.0.60
- Fixed language switching: translation no longer replaces control contents or removes child elements with event handlers.
- Language changes are applied in one pass and the selection is persisted.
- Renderer diagnostics and DevTools (Ctrl+Shift+I / F12) are retained.

## v2.0.59
- Persistent logging for JavaScript errors and the Electron renderer process.
- Developer Tools enabled in the installed application with Ctrl+Shift+I or F12.
- The license system remains disabled.

## v2.0.38
- Restores the approved v2.0.26 calculator desktop grid and prevents result metrics and the expense breakdown from overlapping in Personal and Sales modes.

## v2.0.36
- Safe rollback of the v2.0.35 interface changes; restores the v2.0.34 page and behavior.
- Restores the calculator's previous layout rules. No functional modules or user data are changed.

## v2.0.34
- Fixes overlapping result cards in both Personal and Sales calculator modes with a stable vertical flow and readable metrics.
- Printer lists show the saved custom name (for example, K2 PRO) without appending OFFLINE status or firmware identifiers.
- Normalizes legacy accounting notices saved in Chinese and displays them using translatable Spanish source strings.
- Centralizes the alerts subtitle in all eight languages.

## v2.0.33
- Fixes the Personal calculator grid by restoring the original 12-column layout and preventing metric/breakdown overlap.
- The top refresh icon now reloads the page instead of checking for application updates.
- Separates notification titles and messages visually.
- Personal Accounting movement details now show filament, electricity, printer depreciation, maintenance, grams and time when saved.
- Adds centralized translations for new text in all eight languages.

## v2.0.32
- Fixes the calculator stylesheet reference so fixed-header and Personal-mode styles load.
- Restores the calculator grid and removes `display: contents`, which displaced panels and caused overlaps.
- Improves responsive layout for metrics and cost breakdown rows.

## v2.0.31
- Personal mode now shows filament, electricity, depreciation and maintenance costs, while hiding commercial lines and extras.
- Fixes the header to the viewport across all tabs.
- Inventory and notification gram values are limited to two decimal places.
- Deleting a movement that deducted filament returns it to inventory and adds a notification.
- Adds a header shortcut to check for updates and open the available download.

## v2.0.30
- Fixes the calculator column layout in Personal mode; the side panel keeps `display: contents` instead of collapsing into a narrow column.
- Updates the visible header version to 2.0.30.

## v2.0.29
- Accounting: prevents duplicate personal-expense movements from the same valuation marked in Calculator.
- Keeps the top header fixed while scrolling, overriding dashboard layout styles.

## v2.0.28
- Personal mode keeps the results panel visible and displays total and per-unit production costs after calculation.
- Fixes accidental hiding of the results column.

## v2.0.27
- In Personal mode, the calculate action now displays the actual unit production cost without applying a zero selling price.
- Hides price comparison in Personal mode.

## v2.0.26
- Personal mode now calculates only costs from blocks 1, 2 and 3; excludes labor, extras, packing, minimum profit, margin and taxes.
- Top header stays fixed while scrolling.

﻿## v2.0.25
- Fixed opening generated PDF documents in Electron by safely allowing the local `about:blank` window that loads the PDF.
- Updated and translated the fallback error message in all eight languages.

## v2.0.24
- Gracefully stop the app-owned local server on application exit and before upgrades. Only the recorded PID matching the server path is stopped; externally started bridges remain active.

## v2.0.23
- The home dashboard displays the real print percentage for the selected U1 printer. No progress is fabricated for other printers.
- Progress uses the local bridge cached status and does not trigger an additional scan.
- Keeps the stable startup behavior from 2.0.22.

## v2.0.22
- Fixed automatic startup: Electron supervises Iniciar_Puente_Orca.ps1, which creates the persistent server using Start-Process.
- Launcher stdout/stderr are logged separately; avoids directly spawning the server as a detached Electron child that exited immediately.
- Supervisor wait is limited to 25 seconds without terminating the independent server.
- Strengthened installer program-file removal retries; user data, SQLite, licenses and backups are not deleted.

## v2.0.21 — Launch the local server directly from Electron

- When `/api/version` does not respond, Electron launches `Servidor_Panel_U1.ps1` directly as an independent process and keeps stdout/stderr logs for diagnosis.
- If the port responds with a different version, the maintenance launcher and its safety checks remain in use.
- The interface opens only after `/api/version` confirms the installed version. SQLite and user data are unchanged.

## v2.0.17 — Startup loading screen
- Shows an immediate loading window when Print Cost & Profit starts, before checking or starting the local server, so startup no longer appears inactive.
- Displays preparation, local-server checking and application-opening states; the loading window closes when the main window is ready to be shown.
- If startup fails, the loading screen closes and the existing error screen is preserved.
- Loading-screen text is centralized in `js/traducciones.js` and translated into Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- Does not modify SQLite, licenses, backups, data paths or local-server behavior.

## v2.0.16 — Correct detection of the previous installation
- Fixes previous-install detection on 64-bit Windows by explicitly checking `$PROGRAMFILES64` as well as `$PROGRAMFILES`.
- The previous dialog did not appear because the check could have targeted `Program Files (x86)` instead of `C:\\Program Files`.
- When the executable is found at the known location, setup asks for confirmation, removes only that program folder, and clears the old installer registry keys.
- Does not modify AppData, SQLite, licenses, backups, or the local server.

## v2.0.15 — Installer build correction
- Fixes the NSIS pre-removal include: removes `customHeader` and custom variables that were not expanded and caused NSIS warning 6001.
- `customInit` works directly with the exact legacy path `C:\\Program Files\\print-cost-profit-desktop`, checks the executable, asks for confirmation, and aborts if the folder cannot be removed.
- Clears the old install/uninstall registry keys so NSIS cannot invoke the failing legacy uninstaller again.
- Does not change the local server or user-data/SQLite paths.

## v2.0.14 — Controlled removal of the previous installation
- Adds an NSIS `customInit` routine that detects the registered previous installation and, only when it matches `C:\\Program Files\\print-cost-profit-desktop` and contains the expected executable, asks for confirmation and removes program files before installing the new version.
- If the folder cannot be removed, setup is cancelled to avoid mixing versions.
- Does not run the old uninstaller that was producing the misleading application-running warning.
- Does not delete AppData/LocalAppData or modify SQLite, licenses, backups, or the local server.

## v2.0.13 — Elevated installation in Program Files
- Configures NSIS for per-machine installation (`perMachine`) with elevation (`allowElevation`), so updates to installations under `C:\\Program Files` run with the required permissions.
- Removes the v2.0.12 custom NSIS deletion script: its direct-removal macros did not solve the lock and could delete the entire destination folder.
- Does not change the local server, SQLite database, or user-data location.

## v2.0.12 — NSIS installer fix
- `builder-debug.yml` confirms `customCheckAppRunning` is absent from the generated NSIS script, so the v2.0.11 fix was not executed.
- Replaces it with the recognized `customUnInstallCheck` and `customRemoveFiles` hooks to bypass problematic atomic removal of the previous installation that can trigger a false app-running warning.
- Removal is limited to `$INSTDIR`; user data remains outside that folder.

## v2.0.11 — Update shutdown fix
- Connects shutdown handling to NSIS `customCheckAppRunning`; the previous `customInit` hook did not intercept the installer prompt.
- The installer terminates only the Print Cost & Profit executable before replacing files.

## v2.0.9 — Local bridge startup fix

- Bridge availability now checks `/api/version`; a slow activity log can no longer cause a false negative.
- The health-check timeout is increased to avoid starting a second HTTP.sys server.
- If HTTP.sys still registers the URL but the version cannot be verified, the launcher stops safely and logs a diagnostic; it does not terminate unknown processes.
- The database and data location are unchanged.

## v2.0.8 — Windows build fix
- Removed the UTF-8 BOM from `package.json` and JSON files so `@electron/rebuild` and `JSON.parse` can parse them correctly.
- Kept UTF-8 with BOM in `Servidor_Panel_U1.ps1`, required by Windows PowerShell 5.1 for international characters.
- Validated JSON syntax and updated the version to v2.0.8.

## v2.0.7
- Added Sales (default) and Personal (expenses-only) calculator modes with a floating explanation.
- Personal mode excludes VAT, sales, commissions, labor, failure reserve and profit calculations; records actual cost categories only.
- Accounting entries resolve the active Snapmaker alias and store a stable printer identity to avoid duplicate generic U1 printers.
- Documentation pages use a responsive wide layout and local illustration fallbacks when optional gallery screenshots are unavailable.
- New UI strings centralized in js/traducciones.js for all eight languages.

### v2.0.6 — Actual print hours, unread alert count and local documentation
- Maintenance accumulates actual print hours reported by U1 monitor `print_stats`, during active jobs and after completion or cancellation.
- Valuations and estimated print durations are not treated as actual machine hours.
- The Home red badge counts only unread alerts; recent read alerts remain visible in the list.
- Adds local HTML manuals in all eight languages and fixes the Documentation and Help destinations.
- All new interface strings are centralized in `js/traducciones.js` for Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.

### v2.0.5 — PowerShell server encoding fix
- Adds a UTF-8 BOM to `Servidor_Panel_U1.ps1` so Windows PowerShell 5.1 correctly reads non-ASCII characters.
- Fixes the parser failure that prevented the local server from starting; the later line 426 error was a cascading parse error.
- Updates visible version and cache references to v2.0.5.

### v2.0.4 — Desktop startup and installer correction
- The local server launcher falls back to Start-Process when WMI/CIM is unavailable, preventing the helper process from closing immediately on restricted Windows systems.
- Server stdout and stderr are captured in the local logs folder for diagnosis.
- The NSIS installer explicitly enables the language selector, retains the license agreement and allows a custom installation directory.
- Visible version and cache references are updated to v2.0.4.

### v2.0.3 — Alerts, accounting and inventory fixes
- The Home Alerts panel now uses the same active notifications as the bell.
- Saving a valuation with accounting enabled records the accounting movement and deducts G-code filament from assigned spools, with stock validation and duplicate prevention.
- The U1 monitor reuses the calculator spool-creation dialog.
- Maintenance tasks can be sorted by priority, interval ascending/descending, or name.
- The NSIS installer includes a license agreement, language selector and installation-folder selection.

### v2.0.3 — Backup failure notifications

- Also notifies when the SQLite integrity check detects a problem; the notice is resolved when integrity is healthy again.
- Clarifies that the accounting preference covers print movements with confirmed filament deductions.
- Adds an independent preference for notifications when manual backup creation or restoration fails.
- Backup failure notices are deduplicated by operation and marked resolved after a later successful operation.
- U1 completed-print detection now uses the confirmed accounting state (`provisional=false`) rather than matching localized movement text.
- Keeps local preferences and history, stock thresholds, and centralized translations in all eight languages.

### v2.0.1 — Notification center and preferences

- The bell opens a unified notification center with an unread counter, history, individual or global read actions, and cleanup of read notifications.
- Upcoming and overdue maintenance alerts, enabled by default.
- Filament stock alerts by spool and color: 200 g by default, with configurable thresholds by grams, spool count, or both.
- Accounting notifications for completed or cancelled U1 prints only when the accounting movement confirms an actual filament deduction.
- Program update alerts and independent preferences for each category. Preferences and history are stored locally.

### v2.0.0 — Windows desktop application

- Adds a dedicated desktop window so Print Cost & Profit opens without browser tabs or an address bar.
- Preserves the existing interface, local server, SQLite database, data path and Orca/U1 integration.
- Checks the local bridge version before connecting the interface and refuses to connect to a different version.
- Adds desktop startup and error messages to `js/traducciones.js` in all eight languages.
- Adds a Windows installer build process. The executable still requires build and final validation on Windows.

### v5.58
- Reorganized the maintenance center: full-width compact task cards, collapsible care tips below, and a full-width task form. Responsive layout.

### v5.57
- RTL PDF: corrected horizontal mirroring of asymmetric graphics (totals divider and green total band) so Arabic labels and amounts align inside the band. The tax label now uses the centralized “Impuestos” translation key across all eight languages.

### v5.56
- Invoice and quote PDFs: replaced the Helvetica/WinAnsi-limited encoder with high-resolution Unicode rendering using bundled Noto fonts for Arabic and Chinese. PDF generation remains local and does not depend on the default browser or installed system fonts.

### v5.55
- Fixed the alerts panel: filament and maintenance notices no longer overwrite each other or disappear during dashboard refreshes.

### v5.53
- U1 server: fixed PowerShell parsing when building Moonraker queries containing `&`; separators are now assembled safely. Saved the script with a UTF-8 BOM for Windows PowerShell 5.1 and correct Polish character display.

- U1 monitor: increased the printer status request timeout to 8 seconds and the browser wait limit to 10 seconds, preventing a slow status response from being reported as offline while G-code reading succeeds.

### v5.51
- Maintenance: removed the PRO label and moved the tab directly below Accounting.
- Refined the maintenance dashboard, cards, indicators, forms and history with responsive styling.
- Expanded preventive checks for the hotend, nozzle wear, heater/thermistor, extruder, belts, fans, bed, sensors and wiring.
- Fixed model-family recognition for Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro and Bambu Lab.
- New preventive tasks are also added to existing printers without deleting tracked hours, custom tasks or history. Common intervals are clearly marked as suggested and editable.
- Updated centralized translations for all eight languages.

### v5.50
- Added a PRO Maintenance tab with printer selection, hour tracking, hour/calendar-based tasks, overdue alerts, custom tasks and maintenance history.
- Added sourced starter schedules for Snapmaker U1/J1/Artisan, Creality K2 Pro, Prusa MK4S, Flashforge Adventurer 5M Pro, Anycubic Kobra 2 Pro/Kobra 3 and ELEGOO Neptune 4 Pro. Bambu Lab and remaining models use an editable general baseline. Other models use an editable generic baseline pending manual verification.
- Added translations for the new interface, dialogs and task labels in all eight languages.

### v5.49
- Home: the printer monitor now displays each printer’s saved custom name by IP instead of its network hostname when an alias exists.

### v5.48
- Calculator: “01 · Piece data” now stretches to the full row height, matching the filament and cost panels.

### v5.47
- Calculator: the “Filament by color/material” column is wider and “Additional costs” is narrower on large screens, preserving the other columns and responsive layout.

### v5.46
- Home: the printer panel keeps a fixed height and adds vertical scrolling when more devices are listed. “Open monitor” navigates to Options, directly to printer connection and “Search automatically”.

### v5.45
- Home: the printer panel lists recognized devices and distinguishes connected, offline, and unverified states. “Open monitor” now restores and scrolls to the actual monitor.

### v5.44
- Accounting: narrowed the “Amount/cost” column and slightly increased table text size for readability.

### v5.43
- Accounting: compacted the “Collected” and “Profit” columns and balanced all nine history columns. Improved contrast, alignment, and detail presentation.

### v5.42
- Accounting: shortened the history table headers to “Collected” and “Profit”, keeping all nine columns.

### v5.41
- Accounting: enlarged history, filter and button typography for better readability. Reference details remain open when the table refreshes.

### v5.40
- Accounting visual redesign aligned with the Home dashboard: cards, metrics, filters, form and history now share a clearer visual hierarchy. Existing operations and pagination are preserved.
### v5.39 — Accounting visual redesign
- Aligns Accounting with the Home dashboard visual language: layered backgrounds, luminous accents and consistent cards.
- Improves the hierarchy of metrics and analysis panels.
- Refines the movement form and history table without changing controls or accounting logic.
- Improves responsive layouts.

### v5.38 — Accounting redesign
- Refreshed visual hierarchy for profitability, KPIs and charts.
- More compact, better grouped movement form.
- Accounting history with balanced columns, highlighted amounts, expandable references and clearer search controls.
- Preserves calculation, storage, editing, deletion and export logic. No new fields or dialogs.

### v5.37 — Filament spool pagination fix
- Cards outside the current page are forcibly hidden, including when theme styles override display rules.
- The inventory shows exactly 8 spools per page (4 columns × 2 rows on desktop).
- Search, filters and inventory editing are preserved.

### v5.36 — Filament inventory pagination
- Fixed stock-card pagination: exactly 8 spools are now shown per page instead of displaying the entire inventory at once.
- Repaired the Previous/Next controls and page indicator while preserving the four-column grid and search filtering.
- Existing inventory data, gram editing and other stock operations are preserved.

### v5.35 — Gram precision in inventory
- Remaining filament per spool is displayed with at most two decimal places, and the editable field uses 0.01 g increments. The stored value is unchanged until the user edits the field.

### v5.23 — Professional redesign of sales, stock and accounting
- Refreshed Quotes, Orders and Invoices with visual headers, organized forms, dark fields and more readable tables while preserving existing actions and workflows.
- Improved the filament inventory presentation with a clearer form, spool cards, remaining-material indicators and editing controls.
- Aligned Accounting with the Home dashboard style, including profitability cards and movement panels.
- Improved layouts for narrow screens. No data, SQLite structure or business logic was changed. No new interface strings were added; existing translations are retained.

### v5.22 — Professional Clients redesign
- Redesigned the Clients tab with a visual header, a clearer form layout, dark fields consistent with Home, and better-prioritized controls.
- The Notes field no longer appears as a native white box; it now follows the dark theme and the styling of the other fields.
- The client directory uses compact cards with clearer information and no unnecessary empty height. Search, edit, save and delete remain intact, as does client reuse in quotes, orders and invoices.
- No SQLite data or schema changes. No new interface text was added.

### v5.21 — Consistent full-width Options layout
- All Options sections now use the same full width with consistent alignment and spacing, removing the large empty areas beside Currency and Appearance.
- Forms retain two columns to use the available space; wide fields and full sections span the full width. Small screens switch to a single column.
- Controls, saved data and translations are unchanged; the SQLite database is not modified.

### v5.20 — Professional Options redesign and accordion fix
- Redesigned the Options tab with compact two-column cards, clearer hierarchy and styling consistent with Home; printer, backups, profiles and activity log retain full width where needed.
- Fixed the “Show fields” and “Hide fields” buttons so they now actually collapse and expand each section and correctly expose their accessible expanded state.
- Existing fields, controls, ordering and collapse preferences, translations and saved data are preserved. The SQLite database is not modified.

### v5.19 — Tab isolation fix
- Fixed the Options CSS rule that overrode the hidden state of inactive tabs.
- Options is now visible only when selected; Home, Calculator, Estimates and all other sections remain properly isolated.
- The professional layout, controls and existing data are preserved.

### v5.18 — Options layout correction
- Removed the nested grid that left large empty gaps between sections. Options now use a continuous full-width layout.
- Currency and tax settings and printer profiles use the available width, with aligned fields and profile cards.
- Existing controls, data, section collapsing and reordering are preserved.

### v5.17 — Options redesign
- Reorganises Options into a compact card grid with clearer visual hierarchy, quieter controls and styling consistent with Home.
- Removes the duplicate Seller details wrapper to avoid nested cards.
- Preserves all sections, controls, collapsing and reordering. Activity Log continues to show the 50 newest entries without deleting the history.

## v5.16
- Redesigned Options with cards and controls matching the Home dashboard. Activity log now displays the 50 most recent events; the full history remains stored locally.
- Also removed the small duplicated text beneath the Calculator title; the title and icon remain.
- Language selector flags now use embedded SVG images and no longer depend on Windows emoji fonts.
- Removed the small duplicated text beneath the Estimates tab title. Its own description remains visible.
- Fixed the language selector: it now displays a visible flag beside the selected language and updates when the language changes.
- Visual redesign of the Estimates tab with a prominent header, grouped filters, and dashboard-matched history rows and controls.
- The language selector now displays the corresponding flag beside each language.
- Replaces the “Estimates” quick-access shortcut with “Orders”. The “Latest estimates” Home section and Estimates tab remain unchanged.
- Further reduces the outer glow of calculator section icons while preserving colors, size and strokes.
- Adds “Estimates” to the Home quick-access shortcuts, with a neon icon and direct access to the full history.

## v5.6
- Restored the calculator vector icon in the tab heading. Reduced the glow around section icons for improved visual comfort while preserving their size, strokes and colors.

## v5.5
- Restores the “Latest estimates” card on Home as a summary of the four most recent saved estimates, with a shortcut to the full history in the Estimates tab.

## v5.4
- Reduced the glow on calculator section icons to improve visual comfort while preserving their size and neon style.

## v5.3
- Adds a dedicated “Estimates” tab below “Calculator”, with a neon vector icon matching the application design.
- Moves the complete estimate history into that tab and removes the recent-estimates card and shortcut from Home.
- Preserves storage, saved records, and existing search, sort, compare, load, and delete actions.
- Adds the new labels to `js/traducciones.js` in all eight languages.
- Slightly reduces the glow of the calculator’s neon icons while preserving the luminous effect and improving readability.

## v5.1
- Fixes overlapping icons by removing the inherited mask that rendered a second glyph beneath the neon icon.
- Slightly increases the frame and icon size while preserving the cyan, blue and violet style.
- Does not change calculations, fields, layout or calculator behavior.

## v5.0
- Replaces calculator text glyphs with vector line icons in framed tiles and cyan, blue and violet neon glow, matching the Home visual reference.
- Unifies icons across the heading, piece, filament, costs, tax, results and price-comparison panels without changing controls or calculations.

## v4.9
- Moves print settings (time, quantity, failure allowance, profile and notes) into the tax breakdown panel; the part details card keeps the name, G-code and image.

## v4.8
- Prevents the “Piece data” card from growing excessively when importing G-code with many colors: the detection and inventory report scrolls internally while the remaining fields stay accessible.
- Adds larger neon icons to calculator sections, with cyan, violet, and green glow coordinated with the Home design.
- Keeps calculations, field IDs, spool assignment, and G-code import behavior unchanged.

## v4.7
- Refines the calculator to better match the approved mockup: card proportions, result hierarchy, and comparison panel beside the action panel.
- Reorganizes the estimated result to emphasize the total price and remove the empty space that displaced the indicators.
- Fixes heading alignment and improves field layout on large and small screens.
- Does not change calculations, field IDs, or the G-code import flow.

## v4.5
## v4.6
- Calculator redesign: reorganized cards into two rows, comparison and actions side by side, and removed the overlapping sticky toolbar.
- Visually separated printing costs from additional costs while preserving existing field IDs and calculations.

- Redesigns the Calculator tab with cards, clearer visual hierarchy and more visible icons, matching the professional neon Home style.
- Reorganizes piece, filament, costs, tax and result panels into a responsive grid.
- Refreshes the action area and Price Comparator design.
- Preserves existing fields, IDs, calculations, G-code import, saving and controls.

## v4.4
- Makes the save confirmation explicitly identify this computer's SQLite database.
- Adds cache-busting to the translation and calculator scripts so the browser loads the updated files instead of retaining the old notification.

## v4.3
- Fixes navigation after sending G-code from the U1 monitor: it now opens the Calculator tab instead of Home.
- Imported data remains loaded and the piece field is brought into view in the calculator.

## v4.2
- Corrects the estimate-save notification: it now confirms storage in this PC's SQLite database.
- Also clarifies the confirmation shown when deleting the estimate history.
- Saving continues to use the integrated SQLite storage adapter through the localStorage-compatible interface; the data format is unchanged.

## v4.1
- Moves the complete calculator into its own “Calculator” tab.
- The Price Comparator, failure simulator, results, and calculation fields are now inside that tab.
- Home keeps the dashboard and its indicators; “New calculation” and “Load G-code” first open Calculator.
- Existing field IDs and logic are preserved to keep calculations and features working.

## v4.0
- Fixes the Options documentation: all eight README files are converted into independent localized HTML pages.
- Each language now opens its own HTML manual from the app; the broken path to non-existent files is removed.
- The Arabic manual uses RTL direction, and all manuals use the app's dark theme.

## v3.9
- Replaces decorative top-bar symbols with functional neon-style buttons for alerts, documentation, and options.
- The bell navigates to the alerts panel and displays the current alert count.
- The question mark opens the manual for the selected language; paths now point to the included localized README files.
- The gear opens the Options tab directly.

## v3.8
- Connects the Home printer monitor to the local bridge `/api/u1/status` endpoint instead of reading text from a possibly hidden panel.
- Displays connection, printer state, active file, and print progress; reports disconnection if the bridge or printer is unavailable.
- The “Open monitor” action refreshes the status before opening the full monitor.
- No new text was added; existing traducciones.js strings are reused.

## v3.7
- Fixes the Home dashboard KPIs to use the same normalization and rules as Accounting.
- Excludes estimates not included in accounting and prevents duplicate income from legacy order entries.
- Revenue, costs, profit, margin, and collected amount now follow the same criteria as Advanced Profitability.
- No new interface text was added.

## v3.6
- Slightly enlarges icons in the main action buttons, KPI indicators, sidebar navigation, and quick links for better visibility.
- Icons are separated from labels so their size can be adjusted without changing typography or translations.
- No new interface text was added.

## v3.5
- Aligns the home hero with the supplied reference: “YOUR 3D WORKSHOP”, title and description on the left, printer image on the right, and five action buttons along the bottom.
- Corrects hero proportions and spacing so the printer does not overlap the text or buttons.
- Preserves the five KPI cards, charts, profitability panel, history, quick actions, and right-hand rail with their existing data and behavior.
- No new interface strings were added; translations remain centralized in js/traducciones.js for all eight languages.

## v3.4
- Removes the “Snapmaker U1” wordmark from the center of the header and replaces it with a program-focused ribbon: calculation, production, and profitability.
- Redesigns the action and KPI cards to better match the approved mockup in size, hierarchy, iconography, and neon colors.
- Replaces the cost breakdown bars with a doughnut chart and legend showing amounts and percentages calculated from recorded data.
- Keeps existing actions and live data; the new header phrase is centralized in traducciones.js for all eight languages.

- Rebuilds the home dashboard into two independent zones: main content and a right-hand rail, preventing the stock panel height from creating large gaps between KPIs and charts.
- Reorders cards to match the approved mockup: five KPIs, charts and profitability in one row, history and shortcuts below, with printer monitor/stock/alerts stacked on the right.
- Uses a transparent cutout of the real Snapmaker U1 photo, removing the white frame and adding neon halos without obscuring the printer.
- Adds Snapmaker U1 branding to the header. Existing controls and data sources are preserved; no new translatable strings are introduced.

## v3.1
- Replaces the generic printer illustration with the real Snapmaker U1 photo supplied for the project.
- Removes the photo’s white background and integrates it with cyan and violet neon lighting in the hero and sidebar.
- Keeps dashboard panels, charts, data, and working shortcuts; no new UI text or translation keys are added.

## v3.0
- Home dashboard redesigned to match the approved concept: 3D-printer hero, illustrated sidebar, aligned KPI cards and a three-zone layout.
- Added an overall profitability gauge connected to locally stored revenue and costs.
- New interface strings centralized in `js/traducciones.js` and translated into all eight languages.
- Existing calculator, records, Orca integration and U1 monitor are preserved.

## v2.9
- Adds vector 3D-printer artwork to the sidebar and Home dashboard hero.
- Balances KPI cards and reorganizes dashboard panels with a 12-column grid and consistent heights.
- Refines small-screen layouts and keeps artwork clear of interactive controls.

## v2.8
- Redesigned the Home page with dashboard KPIs, charts, recent jobs, filament stock, shortcuts and alerts.
- Reads local history, accounting and spool data while preserving existing workflows.
- All new interface strings centralized and translated into eight languages.

### v2.7 — Accounting simplification and history redesign
- Removes the duplicated personal/order expense summary, already covered by Advanced Profitability.
- Removes the duplicated per-printer summary to keep a single analysis view.
- Keeps the manual movement form and the complete transaction history.
- Redesigns the table with balanced columns, aligned amounts, clear type labels and expandable long references.
- No new UI strings: “View details” reuses its existing translation in all eight languages.

### v2.6 — Advanced profitability headings and visible text fixes
- Fixes translations for headings containing decorative icons, which previously prevented exact dictionary matches.

### v2.5 — Advanced profitability translation audit and fixes
- Completes missing strings in the advanced profitability panel, including margin status, subtitles, legends and explanatory text.
- Centralizes the new translations in `js/traducciones.js` for Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- Prevents duplicate dictionary keys.

### v2.4 — Fix for collected amounts in U1 orders
- Orders confirmed from the U1 monitor also store the amount entered by the user as a recorded payment, separately from estimated revenue.
- Collected amounts are recovered from U1 orders saved in earlier versions, without re-registering orders or modifying existing movements.
- Prevents payments linked to the same order from being counted twice.

### v2.3 — Conclusion cards in one row
- Places the four cards for most profitable printer, main cost, best margin and analyzed period in one horizontal row on wide screens.
- Keeps period insights in a separate highlighted card and adapts the layout for tablets and phones.

### v2.2 — Advanced profitability visual dashboard
- Redesigns advanced profitability as a dashboard with KPI cards, a six-month trend chart, cost distribution, margin gauge and printer comparisons.
- Adds dynamic charts calculated from saved accounting entries; period and printer filters update metrics and comparisons without duplicating data.
- Adds period insights and improves responsive and RTL layouts.
- All new strings are centralized in `js/traducciones.js` and translated into all eight languages.

### v2.1 — Advanced profitability dashboard
- Adds period- and printer-filtered analysis of estimated revenue, costs, profit, margin and recorded collections.
- Adds printer profitability comparison and cost breakdown using existing data without duplicating entries.
- Clarifies the difference between estimates and confirmed payments.

## Version history

### v2.0 — Full activity log translation
- Log modules, messages and levels now follow the selected language, not just the headings and buttons.
- JSON details are displayed with translated labels while preserving technical values needed for troubleshooting.
- Fixes the outdated version shown in the footer and log details.
- Centralizes all new strings in `js/traducciones.js` for Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.


### v1.9 — Stale bridge detection and restart
- The launcher now verifies `/api/logs` as well as `/api/version`.
- If port 8700 is occupied by an older Print Cost & Profit server instance, it restarts only that project server process to load the new routes.
- If another application owns the port, it will not terminate it and reports a clear error.
- Manual startup and Orca post-processing use the same validation.


### v1.8 — Activity log creation fix
- Fixes activity log file initialization and UTF-8 writing so the file is created when the local server starts.
- Supports both `localhost` and `127.0.0.1` local addresses.
- The viewer displays the actual log file path for easier verification.


### v1.7 — Centralized activity and error logging
- Adds persistent local logging for JavaScript errors, unhandled promise rejections, SQLite failures and activity from key interface controls.
- Adds an Options viewer with level filters and search, plus JSON export and manual clearing.
- Logs are stored outside the installation folder in the user's local data directory, with automatic rotation and up to 500 visible entries.
- The logger avoids capturing form values and sensitive data. Generated log files are never included in distribution ZIPs.
- All new interface strings are centralized in `js/traducciones.js` and translated into all eight languages.


### v1.3 — Licensing-system translations and language support
- Missing translations are added to `js/traducciones.js` for login, authentication and licence-lookup flows in Spanish, English, French, German, Italian and Polish.
- The fixed global-dialog labels (“Notice” and “Accept”) use the central translation system instead of a separate dictionary.
- Application text is integrated and maintained in the eight available languages: Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- New text and dialogs are centralised in `js/traducciones.js` to avoid isolated strings in application files.
- Two new languages are added, Arabic and Simplified Chinese, bringing the application to eight languages: Spanish, English, French, German, Italian, Polish, Arabic and Simplified Chinese.
- G-code thumbnail issues are fixed: the highest-resolution available thumbnail is extracted and the image is preserved when sending a job from the monitor to the calculator.
- Minor issues involving operation, initialisation, translations and colour aliases are fixed.

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

## v5.24
- Premium redesign of the customer area, aligned with the Home dashboard.
- Visual improvements to the header, form, search, buttons and customer cards.
- Existing identifiers, data and workflows are preserved.

## v5.25
- Premium visual redesign of Quotes, aligned with the Home dashboard.
- Improved header, customer details, line-item editor, terms, search and saved-quotes table.
- Existing identifiers and functional logic are preserved.

## v5.26
- Refined the saved-quotes list with clearer row hierarchy, highlighted totals and wrapped action groups to avoid tiny buttons.
- Improved contrast, hover states, quote numbering and small-screen horizontal handling.

## v5.27
- Redesigned Clients with a stronger header, highlighted search, better grouped form and refined customer cards, aligned with the Home dashboard.
- Preserved existing field IDs and actions; visual-only changes keep customer saving and selection behavior intact.

## v5.28
- Premium Orders redesign: header, form, search and table now use clearer hierarchy, dark panels and teal/violet accents matching Home.
- Existing fields, IDs, order statuses and actions are preserved.

## v5.29
- Premium Invoices redesign: clearer invoice creation panel, numbering and tax settings, client selection and saved-invoice archive, visually aligned with Home.
- Existing IDs, numbering, data, printing and actions are preserved. No new fields or dialogs added.

## v5.30
- Global dropdown contrast fix so menu options remain readable in Windows and Edge.

## v5.31
- Premium visual redesign of filament inventory: form, filters, search and spool cards with clearer hierarchy and readability.

## v5.32
- Second visual refinement of filament stock: wider three-column cards, four-column entry form, reorganized search and improved readability of names, weights and prices.

## v5.34
- Filament inventory: 8 cards per page, in 4 columns and 2 rows on desktop.
- Separates routine cleaning from scheduled maintenance: it is now shown as informational advice and creates no alerts. Migrates and removes old cleaning entries from tasks and history. Fixes the notification empty state so it appears only when there are no actual alerts.

## 2.0.118
- Interactive bed mesh: rotate by mouse or touch, zoom with the wheel, reset the view, and expand to full screen.

## v2.0.136
- Protects calculator initialization when printer brand/model selectors are absent from a view.

## v2.0.138
- Initializes printer brand/model selectors after the HTML is parsed, preventing addEventListener on null. Reduces redundant SQLite writes from the U1 monitor and avoids re-saving an unchanged manual IP.

## 2.0.143
- Fixed SQLite write recovery after sleep/resume: active writes are no longer aborted, and ambiguous responses are reconciled against the snapshot before retrying to prevent false 409 conflicts and duplicate writes.

- v2.0.147: fixed manual U1 spool assignment; the selection is saved immediately and the spool is tracked by its stable ID so refreshes or inventory reordering do not unset it.
