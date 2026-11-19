# Print Cost & Profit
## Kostenrechner für 3D-Druck, Inventar und Druckerverwaltung

**Windows Desktop: 2.0 | Linux: 1.4**  
Entwicklerin: Beatriz Toro Martin

Offizielles Repository: https://github.com/nilose2014/PrintCostProfit  
Alle Releases: https://github.com/nilose2014/PrintCostProfit/releases

## 1. Downloads

Laden Sie die Software ausschließlich aus den offiziellen GitHub-Releases herunter.

### Windows 10 / 11 — Version 2.0

**Installer-ZIP:** `PrintCostProfit-Setup-v2.0.zip`  
[Windows-2.0-Release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Laden Sie das ZIP herunter und wählen Sie **Alle extrahieren**.
2. Öffnen Sie den entpackten Ordner.
3. Starten Sie `PrintCostProfit-Setup.exe` und folgen Sie dem Assistenten.

**Portable ZIP:** `PrintCostProfit-Portable-v2.0.zip`  
[Windows-2.0-Release](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Laden Sie das ZIP herunter und entpacken Sie es in einen dauerhaften Ordner.
2. Starten Sie `PrintCostProfit-Portable.exe` aus dem entpackten Ordner.

Starten Sie keine Datei direkt aus dem ZIP. Bewahren Sie alle entpackten Anwendungsdateien zusammen auf.

### Linux — Version 1.4

[Linux-1.4-Release](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu:** `printcostprofit_1.4.1_amd64.deb`  
[.deb herunterladen](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

Alternativ doppelklicken Sie auf die `.deb`-Datei und verwenden den Paketmanager.

**AppImage:** `PrintCostProfit-Linux-x86_64.AppImage`  
[AppImage herunterladen](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Linux-Pakete sind für 64-Bit-AMD64-Systeme vorgesehen. **Windows ist Version 2.0, das veröffentlichte Linux-Release Version 1.4. Es handelt sich um getrennte Release-Zweige.**

## 2. Windows-Sicherheitshinweis

Windows-Dateien werden derzeit ohne kommerzielles Code-Signaturzertifikat bereitgestellt. SmartScreen oder andere Sicherheitssoftware kann warnen. Prüfen Sie die Herkunft aus dem offiziellen Repository. Ignorieren Sie keine echte Virenschutzmeldung und umgehen Sie keine Warnung, wenn die Herkunft nicht überprüfbar ist.

## 3. Hauptfunktionen

- **3D-Druckkostenrechner:** Schätzt Kosten anhand von Filamentverbrauch, Materialpreis, Druckzeit, Maschinenbetrieb, Abschreibung, Wartung und weiteren konfigurierten Ausgaben.
- **Preis und Rentabilität:** Zeigt geschätzte Herstellungskosten, Verkaufspreis, Gewinn, Marge und empfohlenen Preis. Ergebnisse hängen von den Eingaben ab.
- **Filamentinventar:** Verwaltet Marken, Materialien, Farben, Spulenmengen und Materialpreise.
- **Druckerprofile:** Speichert Geräteparameter für Kostenberechnungen.
- **Druckerüberwachung:** Für Snapmaker U1 ist vollständige Kompatibilität bestätigt. Andere Moonraker-, Fluidd- oder Mainsail-Drucker können abhängig von Konfiguration und Funktionen arbeiten.
- **Slicer-Integration:** Für Snapmaker Orca, OrcaSlicer und Creality Print. Die Kompatibilität beträgt ungefähr 90 % und variiert nach Version und Konfiguration; 100 % werden nicht garantiert.
- **G-Code-Verarbeitung:** Liest verfügbare Dateiinformationen, geschätzte Druckzeit, Materialverbrauch und Filament-Metadaten. Slicer-Schätzungen entsprechen nicht zwingend dem tatsächlichen Verbrauch.
- **Angebote, Rechnungen und Buchhaltung:** Werkzeuge für kaufmännische Dokumente und finanzielle Vorgänge.
- **Lokales SQLite:** Windows 2.0 speichert Daten lokal mit SQLite und Electron IPC.

## 4. Windows-Architektur — Version 2.0

Windows 2.0 lädt die Oberfläche aus lokalen Electron-Dateien und verwendet nicht mehr die frühere PowerShell-HTTP-Bridge. Die Oberfläche kommuniziert per IPC mit SQLite. Kompatible Drucker werden über Moonraker im Netzwerk angesprochen. Orca-G-Code wird über eine von Electron verwaltete lokale Dateiüberwachung empfangen. Alte Hinweise zum HTTP-Server oder zur PowerShell-Bridge gelten nicht für Windows 2.0.

## 5. Slicer-Integration

Die Integration ist für OrcaSlicer-basierte Anwendungen vorgesehen, insbesondere Snapmaker Orca, OrcaSlicer und Creality Print. Menüs können je nach Anwendung und Version variieren.

1. Öffnen Sie den Slicer und wählen Sie das Druckerprofil.
2. Öffnen Sie die Druckeinstellungen und aktivieren Sie bei Bedarf den Expertenmodus.
3. Suchen Sie **Sonstiges** und die Einstellung für Nachbearbeitungsskripte.
4. Folgen Sie den Integrationshinweisen des jeweiligen Pakets.
5. Speichern Sie das Profil, erzeugen Sie eine G-Code-Testdatei und prüfen Sie den Empfang der verfügbaren Informationen.

Windows 2.0 verwendet lokale Dateiüberwachung durch Electron. Verwenden Sie nicht die alten Anweisungen zur PowerShell-HTTP-Bridge.

## 6. Drucker-Netzwerk

Bei kompatiblen Moonraker-Druckern müssen Computer und Drucker im Netzwerk kommunizieren können. Ermitteln Sie die IP-Adresse, prüfen Sie den Moonraker-Zugriff und konfigurieren Sie die Verbindung in der Anwendung. Funktionen hängen von Drucker, Firmware und Netzwerk ab. Snapmaker U1 ist das Modell mit bestätigter vollständiger Kompatibilität.

## 7. Daten und Sicherungen

Windows Desktop verwendet eine lokale SQLite-Datenbank. Erstellen Sie regelmäßig Sicherungen, besonders vor Updates. Löschen oder verschieben Sie die Datenbank nicht während des Betriebs. Bei fehlgeschlagener Initialisierung bewahren Sie die Datenbank auf und untersuchen den Fehler, bevor Sie wichtige Daten eingeben.

## 8. Systemanforderungen

- **Windows:** Windows 10 oder 11, 64 Bit und ausreichend Speicherplatz. Netzwerkzugriff ist für die Druckerüberwachung erforderlich. Endanwenderpakete benötigen keine manuelle Installation von Node.js oder Python.
- **Linux:** 64-Bit-AMD64. Debian-Paket auf kompatiblen Debian-/Ubuntu-Systemen oder das AppImage verwenden.
- Optionale Integrationen: Snapmaker Orca, OrcaSlicer, Creality Print und kompatible Netzwerkdrucker.

## 9. Aktualisierung

1. Öffnen Sie die offiziellen Releases.
2. Lesen Sie die Hinweise und prüfen Sie System und Version.
3. Laden Sie das passende Paket herunter.
4. Sichern Sie wichtige Daten.
5. Installieren oder entpacken Sie das neue Paket.

Löschen Sie beim Update keine vorhandenen Daten. Windows und Linux haben getrennte Release-Zweige; prüfen Sie die Version.

## 10. Fehlerbehebung

- **Windows startet nicht:** ZIP vollständig entpacken und alle Dateien zusammenhalten. Fehlermeldung notieren.
- **Sicherheitswarnung:** Downloadquelle und Virenschutzmeldungen prüfen. Windows ist derzeit nicht kommerziell signiert.
- **Druckerüberwachung fehlerhaft:** Stromversorgung, Netzwerk, IP, Moonraker und Einstellungen prüfen.
- **Slicer-Integration fehlerhaft:** Version, Nachbearbeitung, G-Code und lokalen Dateieingang prüfen.
- **Daten werden nicht gespeichert:** Datenbank bewahren, SQLite-Initialisierung prüfen und Fehler notieren. Daten nicht als Notlösung löschen.
- **AppImage startet nicht:** `chmod +x` ausführen, im Terminal starten und Fehler prüfen. Bei `.deb` Installation und Abhängigkeiten prüfen.

## 11. Quellcode und Entwicklung

Quellcode: https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Windows-Build:

```bash
npm run dist:win
```

Diese Befehle sind für Entwickler. Endanwender laden fertige Pakete über GitHub Releases herunter.

## 12. Lizenz, Urheberrecht und Support

Print Cost & Profit wird gemäß `LICENSE.txt` im Repository bereitgestellt. Lesen Sie die Lizenz vor einer Weitergabe oder Änderung.

Bei Problemen nennen Sie Version, Betriebssystem, relevante Drucker- und Slicer-Modelle/-Versionen, Beschreibung, vollständige Fehlermeldung und Reproduktionsschritte. Geben Sie keine Passwörter, privaten Schlüssel oder unnötigen persönlichen Daten an.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Entwickelt von Beatriz Toro Martin.
