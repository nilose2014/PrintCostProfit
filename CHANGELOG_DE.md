### v1.4 — Versionsanzeige und manuelle Update-Prüfung
- In den Optionen wurde ein Bereich hinzugefügt, der die installierte Version anzeigt.
- Die Schaltfläche „Nach Updates suchen“ ermöglicht die manuelle Suche nach stabilen GitHub-Veröffentlichungen.
- Wenn eine neuere Version verfügbar ist, wird ihre Nummer angezeigt und die ZIP-Datei des Windows-Installers angeboten, sofern sie angehängt ist; andernfalls wird die offizielle Release-Seite geöffnet.
- Ist keine neuere Version verfügbar, wird dies angezeigt. Automatische Hinweise beim Start und regelmäßige Prüfungen bleiben erhalten.
- Alle neuen Texte werden in `js/traducciones.js` zentral verwaltet und ins Spanische, Englische, Französische, Deutsche, Italienische, Polnische, Arabische und vereinfachte Chinesische übersetzt.
- Öffentliche Version auf Basis von Build 5.58: Wartungszentrum neu organisiert, Pflegetipps von Aufgaben getrennt, Benachrichtigungen korrigiert und Unicode/RTL-Unterstützung in PDFs verbessert. Das Update von v1.3 über den GitHub-Releases-Installer ist unter Beibehaltung lokaler Daten vorbereitet.

- Erste Linux-Anpassung auf Basis der Windows-Anwendung v1.4: nativer Python-Server, SQLite-Speicher-API, Sicherungen, Protokolle und Snapmaker-U1-Dienste. Oberflächencode und Übersetzungen in acht Sprachen bleiben erhalten. Die Orca-Postprocessing-Integration und Tests mit einem realen Drucker müssen noch validiert werden.

- Wartungszentrum neu organisiert: kompakte Aufgaben als Karten über die volle Breite, einklappbare Tipps darunter und ein Formular über die volle Breite. Responsives Design für Mobilgeräte.

- Rechnungs- und Angebots-PDFs: Die auf Helvetica/WinAnsi beschränkte Kodierung wurde durch hochauflösende Unicode-Ausgabe mit lokalen Noto-Schriften für Arabisch und Chinesisch ersetzt. Die PDF-Erstellung bleibt lokal und unabhängig vom Standardbrowser und installierten Schriften.

- Benachrichtigungsbereich korrigiert: Filament- und Wartungshinweise überschreiben sich nicht mehr und verschwinden nicht mehr beim Aktualisieren der Startseite.

- U1-Server: PowerShell-Syntax beim Erstellen von Moonraker-Abfragen mit `&`-Trennzeichen korrigiert; das Zeichen wird nun sicher erzeugt. Skript mit UTF-8-BOM für Windows PowerShell 5.1 gespeichert, damit polnische Zeichen korrekt angezeigt werden.

- U1-Monitor: Zeitlimit für Statusabfragen auf 8 Sekunden und Browser-Wartezeit auf 10 Sekunden erhöht. Der Drucker wird nicht mehr als getrennt markiert, wenn G-Code-Anfragen beantwortet werden, die Statusantwort jedoch länger dauert.
- Wartungsbereich mit klareren, responsiven Karten, Anzeigen, Formularen und Verlauf neu gestaltet.
- Vorbeugende Prüfungen für Hotend, Düsen, Heizung/Thermistor, Extruder, Riemen, Lüfter, Druckbett, Sensoren und Verkabelung erweitert.
- Erkennung der Druckerfamilien Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro und Bambu Lab korrigiert.
- Neue vorbeugende Aufgaben werden auch bestehenden Druckern hinzugefügt, ohne Betriebsstunden, eigene Aufgaben oder Verlauf zu löschen. Übliche Intervalle sind Richtwerte und bearbeitbar.
- Zentrale Übersetzungen für alle acht Sprachen aktualisiert.
- Die verbleibenden Gramm jeder Spule werden mit maximal zwei Dezimalstellen angezeigt; das bearbeitbare Feld verwendet Schritte von 0,01 g. Der gespeicherte Wert ändert sich erst, wenn das Feld bearbeitet wird.
- Angebote, Aufträge und Rechnungen mit visuellen Kopfbereichen, übersichtlichen Formularen, dunklen Feldern und besser lesbaren Tabellen überarbeitet; bestehende Aktionen und Abläufe bleiben erhalten.
- Darstellung des Filamentlagers verbessert: übersichtlicheres Formular, Spulenkarten, Restmaterialanzeigen und Bearbeitungssteuerungen.
- Gestaltung der Buchhaltung an das Start-Dashboard angepasst, einschließlich Rentabilitätskarten und Buchungsbereichen.
- Registerkarte Kunden mit visuellem Kopfbereich, übersichtlicherem Formular, dunklen Feldern passend zur Startseite und klarerer Steuerungshierarchie neu gestaltet.
- Das Feld Notizen erscheint nicht mehr als natives weißes Feld, sondern verwendet das dunkle Theme und den Stil der übrigen Felder.
- Das Kundenverzeichnis verwendet kompakte Karten, besser lesbare Angaben und weniger unnötigen Leerraum. Suche, Bearbeiten, Speichern und Löschen sowie die Verwendung von Kunden in Angeboten, Aufträgen und Rechnungen bleiben erhalten.

- Registerkarte Optionen mit kompakten Karten in zwei Spalten, klarerer visueller Hierarchie und einem zur Startseite passenden Stil neu gestaltet. Drucker, Sicherungen, Profile und Aktivitätsprotokoll behalten bei Bedarf die volle Breite.
- Schaltflächen „Felder anzeigen“ und „Felder ausblenden“ korrigiert: Inhalte werden nun tatsächlich ein- und ausgeklappt; der Zustand wird auch über das barrierefreie Attribut `aria-expanded` angezeigt.
- Vorhandene Felder, Steuerelemente, Sortier- und Einklapppräferenzen, Übersetzungen und gespeicherte Daten bleiben erhalten. Die SQLite-Datenbank wird nicht geändert.

- Dokumentation der Optionen korrigiert: Die acht README-Dateien wurden in eigenständige, lokalisierte HTML-Seiten umgewandelt.
- Jede Sprache öffnet ihr eigenes HTML-Handbuch in der Anwendung; der fehlerhafte Pfad zu nicht vorhandenen Dateien wurde entfernt.
- Das arabische Handbuch verwendet RTL; alle Handbücher nutzen das dunkle Anwendungsthema.

- Dekorative Symbole in der oberen Leiste durch funktionale Schaltflächen im Neonstil ersetzt: Benachrichtigungen, Dokumentation und Optionen.
- Die Glocke führt zum Benachrichtigungsbereich und zeigt die tatsächliche Anzahl der Hinweise.
- Das Fragezeichen öffnet das Handbuch der ausgewählten Sprache; die Pfade verweisen nun auf die enthaltenen lokalisierten README-Dateien.
- Das Zahnrad öffnet direkt die Registerkarte Optionen.

- Den Bereich „Druckermonitor“ auf der Startseite mit dem echten Endpoint `/api/u1/status` der lokalen Bridge verbunden, statt Text aus einem möglicherweise ausgeblendeten Panel auszulesen.
- Zeigt Verbindung, Status, aktive Datei und Druckfortschritt; meldet eine Trennung, wenn Bridge oder Drucker nicht antworten.
- „Monitor öffnen“ aktualisiert den Status, bevor der vollständige Monitor geöffnet wird.

- Berechnung der Startseiten-Kennzahlen korrigiert, damit dieselbe Normalisierung und dieselben Regeln wie in der Buchhaltung verwendet werden.
- Nicht verbuchte Schätzungen werden ausgeschlossen und doppelte Einnahmen aus älteren Aufträgen vermieden.
- Einnahmen, Kosten, Gewinn, Marge und vereinnahmter Betrag werden nach denselben Kriterien wie bei der erweiterten Rentabilität berechnet.
- Startseite vollständig neu gestaltet mit Dashboard, Kennzahlen, Diagrammen, aktuellen Aufträgen, Lagerbestand, Schnellzugriffen und Hinweisen.
- Daten werden aus lokalem Verlauf, Buchhaltung und Spulen gelesen; vorhandene Funktionen bleiben erhalten.
- Neue Texte zentralisiert und in alle acht Sprachen übersetzt.

- Dauerhaftes lokales Protokoll für JavaScript-Fehler, nicht behandelte Promises, SQLite-Vorfälle und Aktivitäten wichtiger Steuerelemente hinzugefügt.
- In den Optionen eine Ansicht mit Filtern nach Ebene und Suche sowie JSON-Export und manuellem Löschen ergänzt.
- Protokolle werden außerhalb des Installationsordners in den lokalen Benutzerdaten gespeichert, automatisch rotiert und auf maximal 50 sichtbare Einträge begrenzt.
- Das Protokoll erfasst keine Formularwerte oder sensiblen Daten. Erzeugte Logdateien werden niemals in Distributions-ZIPs aufgenommen.
- Alle neuen Texte werden zentralisiert und in acht Sprachen übersetzt.

### v1.3 — Übersetzungen des Lizenzsystems und Erweiterung der Sprachen
- Fehlende Übersetzungen für Anmeldung, Authentifizierung und Lizenzabfrage in Spanisch, Englisch, Französisch, Deutsch, Italienisch und Polnisch in `js/traducciones.js` ergänzt.
- Feste Texte des globalen Dialogs („Hinweis“ und „Akzeptieren“) verwenden das zentrale Übersetzungssystem statt eines separaten Wörterbuchs.
- Anwendungstexte werden in allen acht verfügbaren Sprachen integriert und gepflegt: Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch und vereinfachtes Chinesisch.
- Neue Texte und Dialoge werden in `js/traducciones.js` zentralisiert, damit keine isolierten Zeichenketten in Anwendungsdateien verbleiben.
- Arabisch und vereinfachtes Chinesisch als zwei neue Sprachen hinzugefügt; die Anwendung unterstützt nun acht Sprachen.
- Probleme mit G-Code-Miniaturen behoben: verfügbare Miniatur mit der höchsten Auflösung extrahieren und Bild beim Senden eines Auftrags vom Monitor an den Rechner erhalten.
- Kleinere Fehler bei Betrieb, Initialisierung, Übersetzungen und Farbaliasen behoben.

### v1.2 — Änderungen vom 31. Oktober: automatische Druckerverbindung beim Start
- Beim Öffnen der Anwendung wird die gespeicherte IP des ausgewählten Druckers erneut an die lokale Bridge übertragen, bevor sein Status abgefragt wird.
- Die Verbindungsprüfung erfolgt nach der Synchronisierung der Konfiguration. Dadurch wird ein online befindlicher Drucker nicht fälschlich als getrennt angezeigt, wenn die Bridge noch eine alte IP verwendet.
- Auswahl und gespeicherte IP bleiben erhalten, wenn der Drucker tatsächlich offline ist; es wird keine Netzwerksuche erzwungen und kein Drucker gewechselt.

#### Änderungen vom 30. Oktober: U1-Monitor, Miniaturen und SQLite
- Konfigurierter Drucker und IP bleiben auch erhalten, wenn das Gerät ausgeschaltet ist oder nicht antwortet; er wird als „NICHT VERBUNDEN“ angezeigt und alte Monitordaten werden gelöscht.
- Der aktive G-Code-Leser extrahiert die Miniatur mit der höchsten Auflösung und erhält sie beim Senden des Auftrags an den Rechner.
- Doppelte SQLite-Schreibvorgänge reduziert: Druckerauswahl mit kanonischem Schlüssel und gebündeltes Speichern des Rechnerentwurfs (350 ms), mit abschließendem Schreiben beim Beenden.
- Historische Schlüssel bleiben aus Kompatibilitätsgründen erhalten; neue Texte werden für sechs Sprachen in `js/traducciones.js` zentralisiert.

### v1.1 — Erste öffentliche Version und Verlauf früherer Funktionen
- Erste öffentliche Version: Kostenrechner, Schätzungen, Orca/G-Code-Integration, U1-Monitor, Lager, Buchhaltung, Kunden, Angebote, Aufträge, Rechnungen, SQLite und sechs Sprachen.
- Vor v1.2 veröffentlichte Verbesserungen werden hier zusammengefasst, um eine einheitliche kommerzielle Versionsnummerierung zu gewährleisten, ohne interne Entwicklungsnummern anzuzeigen.

### v1.4.1 — Linux-DEB-Installationspaket
- Installierbares `.deb`-Paket für Ubuntu und Debian (64 Bit) hinzugefügt.
- Enthält einen Eintrag im Anwendungsmenü und den Start des lokalen Servers.
- Bei der Deinstallation bleiben Datenbank, Sicherungen und Benutzereinstellungen erhalten.
