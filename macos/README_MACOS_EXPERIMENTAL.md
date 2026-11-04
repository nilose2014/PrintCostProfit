# Print Cost & Profit — macOS experimental build

**Status: EXPERIMENTAL — NOT TESTED ON A REAL MAC.**

This branch creates unsigned, non-notarized DMG installers for Apple Silicon (arm64) and Intel (x86_64).

The application experimental build version is **v1.4.1**. This is an experimental platform build and does not change the stable Windows or Linux releases.

## Important warning

This build is checked by automated CI only. It has **not** been installed or functionally tested on a physical Mac. Compatibility with macOS, the interface, SQLite persistence, printer discovery, Moonraker connectivity and Snapmaker Orca integration is not guaranteed.

The DMG is not signed with an Apple Developer ID and is not notarized. macOS Gatekeeper may warn or prevent it from opening. Do not use it as the only copy of important business data. Make backups before testing.

## Requirements

- macOS 12 or later (provisional minimum; not yet validated on physical hardware).
- Python 3.10 or later available as `python3`.
- A modern browser.
- For printer monitoring, LAN access to the printer and Moonraker TCP port 7125.

## Install and run

1. Download the DMG matching your Mac's processor from the workflow artifacts.
2. Open the DMG and drag **Print Cost & Profit.app** to Applications.
3. Open the app. Do not bypass macOS security warnings unless you understand the risks of running unsigned software.
4. The app starts a local server and opens `http://127.0.0.1:8700/` in your browser.

If Python 3.10+ is missing, install it first and then reopen the app.

## Data location

`~/Library/Application Support/PrintCostProfit/data`

The SQLite database and backups are kept outside the application bundle. Do not delete this folder when replacing the app.

## Current limitations

- No real-Mac installation or end-to-end validation has been performed.
- No Apple Developer ID signing or notarization.
- Python 3.10+ must be installed separately.
- Snapmaker U1 discovery and Moonraker connectivity need physical-network testing.
- Snapmaker Orca post-processing integration on macOS has not been validated.
- Do not treat this build as a stable release.

Report bugs with the macOS version, Mac processor, application build and relevant log output. Remove personal information, network credentials and tokens before sharing logs.
