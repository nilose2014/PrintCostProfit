# Print Cost & Profit

**Eine umfassende Lösung zur Kostenberechnung, Produktionsüberwachung und Verwaltung eines 3D-Druckbetriebs.**

Print Cost & Profit hilft dabei, die tatsächlichen Kosten jedes Drucks zu ermitteln, nachhaltige Verkaufspreise festzulegen, kompatible Drucker zu überwachen, Filamentbestände zu verwalten und tägliche Geschäftsabläufe zu organisieren.

> **Stabile Windows-Version: v1.4**  
> **Linux-Paket: v1.4**  
> Veröffentlichte Versionen und Downloads finden Sie unter [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases).

## Downloads, Repositories und Installation

| Plattform | Download | Installation |
|---|---|---|
| **Windows** | [Neueste Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest): verfügbaren `.exe`-Installer oder das Windows-Paket herunterladen. | Installer ausführen und den Schritten folgen. |
| **Linux** | [Linux-Branch](https://github.com/nilose2014/PrintCostProfit/tree/linux) oder [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest): Linux-Paket v1.4 herunterladen, sobald es veröffentlicht ist. | Paket entpacken und Startskript ausführen. |

### Offizielle Links
- Haupt-Repository: https://github.com/nilose2014/PrintCostProfit
- Linux-Quellcode: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Alle Releases: https://github.com/nilose2014/PrintCostProfit/releases
- Neueste Version: https://github.com/nilose2014/PrintCostProfit/releases/latest
- Fehlerberichte: https://github.com/nilose2014/PrintCostProfit/issues

Die Releases-Seite ist die offizielle Quelle für verfügbare Installer und Pakete. Dateien können sich ändern; verwenden Sie keine alten direkten Download-Links.

### Installation unter Windows
1. Öffnen Sie [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Laden Sie den neuesten `.exe`-Installer oder das verfügbare ZIP herunter.
3. Führen Sie den Installer aus oder entpacken Sie das vollständige ZIP in einen beschreibbaren Ordner.
4. Starten Sie die Anwendung über die Verknüpfung oder das Startskript.
5. Falls der Browser nicht automatisch startet, öffnen Sie `http://127.0.0.1:8700/`.
6. Lassen Sie HTML-, JavaScript-, CSS- und Serverdateien zusammen.

**Hinweise:** Der lokale Server muss laufen. Nach einem Update den alten Server beenden, den Server aus dem aktualisierten Ordner starten und mit `Ctrl + F5` neu laden. Vor dem Ersetzen der Dateien Daten sichern. Das Datenverzeichnis nicht löschen.

### Installation unter Linux (Ubuntu, Debian und Derivate)
1. Paket aus dem [Linux-Branch](https://github.com/nilose2014/PrintCostProfit/tree/linux) oder von [Releases](https://github.com/nilose2014/PrintCostProfit/releases) herunterladen.
2. Vollständiges Paket entpacken und Terminal im Projektstamm öffnen.
3. Ausführen:
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. `http://127.0.0.1:8700/` öffnen.

**Hinweise:** Linux-Befehle in einem Linux-Terminal ausführen. Unter WSL das Ubuntu-Terminal und nicht PowerShell verwenden. Python 3 und SQLite sind erforderlich. Ordnerstruktur beibehalten. Benutzerdaten liegen getrennt von den Programmdateien im Benutzerdatenverzeichnis. Fehlgeschlagene Starttests nicht ignorieren.

### Erster Start und Druckerverbindung
Zuerst den lokalen Server starten. Computer und Drucker müssen im lokalen Netzwerk erreichbar sein. Moonraker mit LAN-IP und Druckerport konfigurieren. Einstellungen können auch bei ausgeschaltetem Drucker gespeichert werden; Live-Überwachung benötigt eine Verbindung. Die Snapmaker-Orca-Integration verwendet den unterstützten lokalen Ablauf und das mitgelieferte Post-Processing-Skript.

---

## Was ist Print Cost & Profit?

Die Anwendung vereint technische und kaufmännische Aspekte des 3D-Drucks. Neben Material und Druckzeit berücksichtigt ein Betrieb Strom, Maschinenverschleiß, Wartung, Arbeitszeit, Nachbearbeitung, Fehldrucke, Lagerbestand und Verkaufspreis.

Arbeitsablauf: Druckdaten aus kompatiblem G-Code importieren oder manuell eingeben, reale Produktionskosten berechnen, Gewinnziel und empfohlenen Preis festlegen, Material und Drucker prüfen, Kalkulationen und Geschäftsdokumente speichern sowie Produktion, Lager, Wartung und Finanzen verfolgen.

## Hauptfunktionen

### 1. Druckkostenrechner
Berücksichtigt Filamentverbrauch in Gramm, Materialpreis pro Kilogramm, Druckdauer, Stromverbrauch und Stromkosten, Abschreibung, Maschinenkosten, Wartung, Arbeits- und Vorbereitungszeit, Zusatzkosten, Lackierung und Nachbearbeitung pro Einheit sowie eine Rücklage für Fehldrucke. Zeigt Gewinnziel, empfohlenen Verkaufspreis, Kosten und Gewinn pro Einheit sowie Marge.

Der Rechner unterscheidet **Produktionskosten**, **Verkaufspreis**, **Gewinn** und **Marge**. Filament ist nicht der einzige Kostenfaktor.

#### G-Code und Slicer
Die Orca-Integration kann Dateiname, Materialien, Farben und HEX-Codes, geschätzten Filamentverbrauch, Druckdauer und verfügbare Vorschaubilder importieren. Prüfen Sie die Daten und Materialzuordnungen vor der Berechnung, insbesondere bei mehreren Materialien oder Farben.

#### Preisvergleich und gespeicherte Kalkulationen
Vergleichen Sie Preisszenarien und die Auswirkung eines anderen Gewinnziels oder zusätzlicher Beträge. Kalkulationen können gespeichert werden.

### 2. Dashboard
Übersicht über Verkäufe, Kosten, Gewinne, Finanzdiagramme, Lagerbestand, Druckerstatus, Produktion und letzte Aktivitäten. Details befinden sich in den jeweiligen Bereichen.

### 3. Druckermonitor — Snapmaker U1 / Moonraker
Verbindet kompatible Drucker über LAN und Moonraker. Funktionen: Druckererkennung und manuelle IP, gespeicherte Verbindungen, Online-/Offline-Status, Druckstatus und Fortschritt, aktiver Auftrag, Dateiname und verfügbare Verbrauchsdaten, Dateiliste, G-Code-Miniaturen, Auswahl mehrerer Drucker und Übertragung des aktiven Drucks an den Rechner.

Der Computer muss den Drucker im lokalen Netzwerk erreichen. Firewall, Netzwerkisolation, falsche IP oder nicht verfügbares Moonraker können die Verbindung verhindern. Importierte Daten vor Angeboten prüfen.

### 4. Filamentinventar
Erfasst Marke, Material (PLA, PETG usw.), Farbname und HEX-Wert, Anfangs- und Restgewicht, Preis pro Kilogramm und Bestand. Vergleicht G-Code-Materialien und Farben mit gespeicherten Rollen. Unklare Zuordnungen müssen geprüft werden. Warnungen hängen von aktuellen Gewichtsangaben ab.

### 5. Drucker und Profile
Konfiguration von Druckern und Verbindungen, Netzwerkerkennung sofern verfügbar, Speicherung von Druckerdaten, Statusanzeige und Zuordnung von Produktions- und Buchhaltungsdaten. Der Ablauf ist auf Snapmaker U1 ausgerichtet; andere Geräte/Firmware benötigen möglicherweise kompatible Moonraker-Endpunkte und sind nicht zwingend validiert.

### 6. Wartungszentrum
Organisiert vorbeugende und korrektive Aufgaben: Reinigung, Schmierung von Achsen, Riemen und Führungen, Hotend, Düsen, Extruder, Filamentzuführung, Lüfter, Kühlung, Druckbett, Kabel und Anschlüsse. Wartungsaktionen und Status können dokumentiert werden. Herstellerhandbuch und Sicherheitshinweise beachten.

### 7. Angebote, Aufträge und Rechnungen
Erstellen und speichern Sie Angebote, verwalten Sie Aufträge und Rechnungen, ordnen Sie Kunden zu, prüfen Sie Dokumentdetails und Summen, erstellen Sie PDFs und wandeln Sie Angebote um, sofern unterstützt. Nummerierung, Steuern, Währung, Kundendaten und PDF vor dem Versand prüfen.

### 8. Kundenverwaltung
Speichert Kundendaten und verknüpft sie mit Geschäftsdokumenten, um doppelte Eingaben zu vermeiden und Angebote, Aufträge und Rechnungen nach Kunden zu organisieren.

### 9. Buchhaltung
Erfasst Geschäftsvorgänge und zeigt Einnahmen, Kosten und Gewinne, bei entsprechender Konfiguration auch nach Drucker. Gleichen Sie Daten mit offizieller Buchführung und Steuerpflichten ab. Die Anwendung bietet keine Steuer- oder Buchhaltungsberatung.

### 10. Produktkatalog
Organisiert hergestellte oder verkaufte Produkte. Wenn aktiviert, verbinden Produktdarstellung und QR-Funktionen physische Produkte mit Kataloginformationen.

### 11. Aktivitätsprotokoll und Diagnose
Lokale Protokolle helfen bei der Fehlersuche zu Serverstart, Druckerverbindung, API, Import, Integration, Backup und Speicher. Bei Meldungen Version, Betriebssystem, Schritte und bereinigte Protokolle angeben.

### 12. Backups und Wiederherstellung
Lokale Speicherung mit Backup- und Wiederherstellungsfunktionen in unterstützten Builds. Linux bietet API-Unterstützung für Snapshots, Revisionskontrolle, Backups und Protokolle. Windows hat einen eigenen Server und Speicherablauf. Vor Updates sichern, Kopien außerhalb des Programmordners aufbewahren und Datenbank während des Betriebs nicht bearbeiten.

### 13. Einstellungen und Oberfläche
Bündelt die Konfiguration. Je nach Version lassen sich Bereiche organisieren, Felder ausblenden und Abschnittsreihenfolgen ändern.

### 14. Acht Sprachen
Texte sind in `js/traducciones.js` zentralisiert: Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch mit RTL-Unterstützung und vereinfachtes Chinesisch. Neue Felder, Dialoge, Schaltflächen, Warnungen und Fehlermeldungen müssen zentral ergänzt und übersetzt werden.

---

## Screenshots

Die Bilder befinden sich in `assets/screenshots/`.

### Dashboard
![Dashboard](assets/screenshots/screenshot-02.jpg)

### Rechner und Druckdaten
![Kostenrechner](assets/screenshots/screenshot-03.jpg)
![Druckdaten](assets/screenshots/screenshot-01.jpg)

### Produktion und Geschäftsverwaltung
![Geschäftsverwaltung](assets/screenshots/screenshot-05.jpg)
![Kosten und Preise](assets/screenshots/screenshot-06.jpg)
![Konfiguration und Dokumente](assets/screenshots/screenshot-07.jpg)

### Einstellungen und Updates
![Konfiguration](assets/screenshots/screenshot-08.jpg)
![Einstellungen](assets/screenshots/screenshot-09.jpg)
![Version und Updates](assets/screenshots/screenshot-10.jpg)

### Kunden, Aufträge und Rechnungen
![Kunden](assets/screenshots/screenshot-12.jpg)
![Kunden und Dokumente](assets/screenshots/screenshot-13.jpg)
![Dokumente](assets/screenshots/screenshot-14.jpg)
![Aufträge und Angebote](assets/screenshots/screenshot-15.jpg)
![Rechnungen](assets/screenshots/screenshot-16.jpg)
![Verkäufe](assets/screenshots/screenshot-17.jpg)

### Filament und Drucker
![Filamentbestand](assets/screenshots/screenshot-18.jpg)
![Inventar](assets/screenshots/screenshot-19.jpg)
![Drucker und Material](assets/screenshots/screenshot-20.jpg)

### Rentabilität und Berichte
![Rentabilität](assets/screenshots/screenshot-21.jpg)
![Finanzübersicht](assets/screenshots/screenshot-22.jpg)
![PDF-Rechnung](assets/screenshots/screenshot-23.jpg)

### Wartung
![Wartungszentrum](assets/screenshots/screenshot-24.jpg)
![Wartungsaufgaben](assets/screenshots/screenshot-25.jpg)

### Weitere Ansichten
![Weitere Ansicht](assets/screenshots/screenshot-04.jpg)
![Weitere Ansicht](assets/screenshots/screenshot-11.jpg)
![Weitere Ansicht](assets/screenshots/screenshot-26.jpg)

---

## Typischer Arbeitsablauf
1. Auftrag im Slicer vorbereiten und G-Code erzeugen.
2. Daten über Orca importieren oder manuell eingeben.
3. Materialien und Farben prüfen und dem Inventar zuordnen.
4. Drucker und verfügbares Filament prüfen.
5. Material, Zeit, Strom, Maschine, Arbeit und Nachbearbeitung berechnen.
6. Verkaufspreis festlegen und Marge prüfen.
7. Angebot speichern und Kunden zuordnen.
8. Druck überwachen.
9. Verkauf oder Rechnung erfassen und Finanzaktivität prüfen.
10. Lagerbestand und Wartung aktualisieren.

## Systemanforderungen
**Windows:** kompatibles 64-Bit-Windows, Rechte zum Ausführen und Schreiben der Daten, lokaler Netzwerkzugriff auf den Drucker und Internet für GitHub.

**Linux:** Ubuntu, Debian oder kompatible Derivate, Python 3, SQLite, Ausführungsrecht für das Skript und lokaler Netzwerkzugriff.

**Druckerintegration:** kompatible Verbindung, erreichbare lokale Moonraker-API, korrekte IP und gemäß Plattformpaket konfigurierte Orca-Integration.

## Versionen und Updates
Die beschriebene stabile Windows-Version und das Linux-Paket sind **v1.4**. Vor dem Update sichern, passendes Paket herunterladen, Server stoppen, Dateien aktualisieren, Server aus dem neuen Ordner starten und Version prüfen. Keine zwei Server auf demselben Port starten. Standardadresse: `127.0.0.1:8700`.

## Fehlerbehebung
- **Anwendung startet nicht:** Server prüfen, Terminal/PowerShell prüfen, `http://127.0.0.1:8700/` öffnen und Port 8700 kontrollieren.
- **Falsche Version:** alten Server stoppen, richtigen Server starten, `http://127.0.0.1:8700/api/version` prüfen, `VERSION` kontrollieren und mit `Ctrl + F5` neu laden.
- **Drucker offline:** Strom, Netzwerk, IP, Moonraker und Firewall prüfen; IP manuell eintragen.
- **G-Code-Daten oder Vorschaubilder fehlen:** G-Code und Slicer-Export prüfen; Material, Farbe, Gewicht und Dauer kontrollieren.
- **Linux-Tests schlagen fehl:** Skript im Projektstamm starten, Python 3 und SQLite prüfen und vollständige Fehlermeldung sichern.

## Projektstruktur
- `Print_Cost_Profit.html` — Oberfläche.
- `js/` — Module, Integrationen und Übersetzungen.
- `css/` — Styles.
- `VERSION` — vom Server gelesene Version.
- `Servidor_Panel_U1.ps1` — Windows-Server.
- `linux/` — Linux-Server, Startskript und Tests.
- Lokale Daten — Datenbank, Protokolle und Backups je nach Plattform getrennt von Programmdateien.

Der Inhalt kann zwischen Windows- und Linux-Paketen variieren.

## Support und Beiträge
- Fehler: https://github.com/nilose2014/PrintCostProfit/issues
- Quellcode: https://github.com/nilose2014/PrintCostProfit
- Linux-Code: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Releases: https://github.com/nilose2014/PrintCostProfit/releases

Geben Sie Version, Betriebssystem, Paket, Drucker und Verbindung, Reproduktionsschritte, bereinigte Logs und Screenshots an. Veröffentlichen Sie niemals Passwörter, Tokens, private Zugangsdaten, Kundendaten oder private Datenbanken.

## Wichtige Informationen
Print Cost & Profit unterstützt die Kostenberechnung und Verwaltung von 3D-Druckaufträgen. Ergebnisse hängen von Eingaben, Slicer-Metadaten, Konfiguration, Stromtarifen, Materialpreisen und Einstellungen ab. Prüfen Sie Berechnungen, Lagerbestand, Angebote und Rechnungen. Monitoring hängt von kompatiblen lokalen Diensten und Firmware/API ab; Funktionen können je nach Plattform und Version variieren.

**Print Cost & Profit — Kosten verstehen, Drucke richtig bepreisen und den 3D-Druck-Workflow verwalten.**
