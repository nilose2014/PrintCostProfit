# Print Cost & Profit v1.3

## Kostenberechnung, Produktion und Verwaltung für den 3D-Druck

Print Cost & Profit unterstützt die Berechnung von Herstellungskosten, die Materialverwaltung und die Organisation von 3D-Druckaufträgen. Die Neuerungen jeder Entwicklungsstufe sind getrennt aufgeführt.

## Versionsverlauf

### v1.3 — Übersetzungen des Lizenzsystems und Sprachunterstützung
- Fehlende Übersetzungen für Anmeldung, Authentifizierung und Lizenzabfrage werden in `js/traducciones.js` für Spanisch, Englisch, Französisch, Deutsch, Italienisch und Polnisch ergänzt.
- Die festen Texte des globalen Dialogs („Hinweis“ und „Akzeptieren“) verwenden das zentrale Übersetzungssystem statt eines separaten Wörterbuchs.
- Anwendungstexte werden in den acht verfügbaren Sprachen integriert und gepflegt: Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch und vereinfachtes Chinesisch.
- Neue Texte und Dialoge werden in `js/traducciones.js` zentralisiert, damit keine isolierten Zeichenfolgen in Anwendungsdateien verbleiben.

### v1.2 — Änderungen vom 31. Oktober: automatische Druckerverbindung beim Start
- Beim Öffnen der Anwendung wird die gespeicherte IP-Adresse des ausgewählten Druckers erneut an die lokale Bridge übertragen, bevor dessen Status abgefragt wird.
- Die Verbindung wird erst nach der Synchronisierung der Konfiguration geprüft. Dadurch wird ein Online-Drucker nicht wegen einer veralteten IP-Adresse in der Bridge als getrennt angezeigt.
- Bei tatsächlich offline befindlichem Drucker bleiben Auswahl und gespeicherte IP erhalten; es wird keine Netzwerksuche erzwungen und kein anderer Drucker ausgewählt.

#### Änderungen vom 30. Oktober: U1-Monitor, Miniaturbilder und SQLite
- Der konfigurierte Drucker und seine IP bleiben auch bei ausgeschaltetem oder nicht reagierendem Gerät erhalten; er wird als „NICHT VERBUNDEN“ angezeigt und alte Monitordaten werden gelöscht.
- Der aktive G-Code-Reader extrahiert das Miniaturbild mit der höchsten Auflösung und übernimmt es beim Senden des Auftrags an den Rechner.
- Doppelte SQLite-Schreibvorgänge werden reduziert: Druckerauswahl mit kanonischem Schlüssel und gruppiertes Speichern des Rechner-Entwurfs (350 ms), einschließlich abschließendem Speichern beim Beenden.
- Historische Schlüssel bleiben aus Kompatibilitätsgründen erhalten; neue Texte werden für sechs Sprachen in `js/traducciones.js` zentralisiert.

### v1.1 — Erste öffentliche Version und Verlauf früherer Funktionen
- Erste öffentliche Version: Kostenrechner, Kalkulationen, Orca/G-Code-Integration, U1-Monitor, Lagerbestand, Buchhaltung, Kunden, Angebote, Aufträge, Rechnungen, SQLite und sechs Sprachen.
- Vor v1.2 veröffentlichte Verbesserungen werden hier zusammengefasst, damit eine einheitliche kommerzielle Versionsnummerierung ohne interne Entwicklungsnummern erhalten bleibt.

## Installation und Aktualisierung

Windows 10/11 ist die Referenzumgebung. Laden Sie das passende Paket für Ihr Betriebssystem im Bereich Releases des Repositorys herunter, entpacken Sie das Archiv und folgen Sie den enthaltenen Anweisungen. Sichern Sie Ihre Daten vor jeder Aktualisierung.

## Verfügbare Sprachen

Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch und vereinfachtes Chinesisch.

## Übersetzungen und Wartung

Sichtbare Anwendungstexte sind zentral in `js/traducciones.js` gespeichert. Neue Beschriftungen, Meldungen, Dialoge und Felder müssen dort ergänzt und in alle acht Sprachen übersetzt werden; doppelte Schlüssel sind zu vermeiden.

## Lizenzen

Lizenz-, Abonnement- und Zahlungsfunktionen bleiben deaktiviert. Diese Version aktiviert keine kostenpflichtigen Einschränkungen.

## Support

Geben Sie bei Fehlern die Version, Reproduktionsschritte und relevante Konsolenmeldungen an. Teilen Sie keine Passwörter oder privaten Schlüssel.

**Paketversion:** `1.3.99`  
**Repository:** https://github.com/nilose2014/PrintCostProfit
