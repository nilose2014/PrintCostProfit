# Schnellinstallation

Wählen Sie das Paket für Ihr Betriebssystem:

### Windows 10 / 11 — stabile Version v1.2

- **[Windows-Installationsprogramm v1.2 herunterladen](https://github.com/nilose2014/PrintCostProfit/releases/download/v1.2/PrintCostProfit-Windows-Installer-v1.2.zip)**.
- Entpacken Sie die ZIP-Datei und führen Sie `PrintCostProfit-Setup-1.2.exe` aus.
- Folgen Sie den Installationsschritten. Starten Sie anschließend Print Cost & Profit über die erstellte Verknüpfung.
- Das Installationsprogramm enthält die erforderlichen Komponenten für die lokale SQLite-Speicherung; Python muss nicht manuell installiert werden.

**Windows-Repository:** [PrintCostProfit — Hauptbranch](https://github.com/nilose2014/PrintCostProfit). Wenn Sie lieber aus dem Quellcode installieren möchten, öffnen Sie **Code → Download ZIP**, entpacken Sie alle Dateien in einen dauerhaften Ordner und führen Sie `Integracion_Orca_Postprocesado.bat` aus.

### Linux / Ubuntu — stabile Version

- **[Stabile Linux-Version herunterladen](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1)**.
- Entpacken Sie die heruntergeladene ZIP-Datei.
- Folgen Sie den im Paket enthaltenen Installations- und Startanweisungen.

**Linux-Repository / Version:** [PrintCostProfit — Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux).

---

# Print Cost & Profit v1.2

## Kosten-, Produktions- und Verwaltungskalkulator für den 3D-Druck

Print Cost & Profit ist eine Anwendung, die Nutzerinnen und Nutzer des 3D-Drucks dabei unterstützt, die tatsächlichen Herstellungskosten zu berechnen, den Filamentverbrauch zu überwachen, Materialien zu verwalten und die geschäftlichen Aktivitäten rund um ihre Drucke zu organisieren.

Die Anwendung verbindet einen Kostenrechner mit Verwaltungswerkzeugen, lokaler Datenspeicherung und einer Integration in OrcaSlicer-basierte Slicer, insbesondere Snapmaker Orca, OrcaSlicer und Creality Print. Außerdem enthält sie einen Monitor für kompatible Drucker, wobei die Kompatibilität je nach Modell und verfügbarer Verbindung unterschiedlich ausfällt.

## Screenshots der Anwendung

Die folgenden Bilder zeigen einige Ansichten von Print Cost & Profit. Sie veranschaulichen verschiedene Bereiche der Benutzeroberfläche; die verfügbaren Funktionen hängen von der installierten Version und Konfiguration ab.

![Kostenrechner](galeria/es/01-calculadora-de-costes.jpg)

![Ergebnis und Gewinn](galeria/es/02-resultado-y-beneficio.jpg)

![Schwebendes Druckfenster](galeria/es/03-panel-flotante-de-impresion.jpg)

**Autorin:** Beatriz Toro Martin

**Veröffentlichte Version:** v1.2

**Referenzbetriebssystem:** Windows 10 und Windows 11

**Offizielles Repository:** https://github.com/nilose2014/PrintCostProfit

---

# 1. Hauptfunktionen

## 1.1. Kostenrechner für den 3D-Druck

Mit dem Rechner lassen sich die Herstellungskosten eines Bauteils anhand der Druckparameter und der damit verbundenen Kosten schätzen.

Je nach verfügbarer Konfiguration können folgende Kostenpositionen berücksichtigt werden:

- Filamentverbrauch.
- Preis des verwendeten Materials.
- Druckzeit.
- Betriebs- und Verschleißkosten des Druckers.
- Abschreibung des Geräts.
- Weitere herstellungsbezogene Ausgaben.
- Gewünschte Gewinnspanne.
- Ausgewählte Steuern und Währung.

Ziel ist es, die Herstellungskosten eines Bauteils zu kennen, bevor der Verkaufspreis festgelegt wird.

## 1.2. Verkaufspreis, Gewinn und Marge

Mit dem Rechner lässt sich das geschätzte wirtschaftliche Ergebnis eines Druckauftrags untersuchen.

Die Berechnungen helfen, folgende Werte zu unterscheiden:

- **Herstellungskosten:** geschätzter Wert der eingesetzten Ressourcen.
- **Verkaufspreis:** Betrag, der für das Bauteil verlangt werden soll.
- **Geschätzter Gewinn:** berechnete Differenz zwischen Einnahmen und berücksichtigten Kosten.
- **Marge:** Verhältnis zwischen Gewinn und Verkaufspreis gemäß der in der Berechnung verwendeten Definition.
- **Empfohlener Preis:** anhand der konfigurierten Parameter ermittelter Preisvorschlag.

Die Ergebnisse hängen von den eingegebenen Preisen, Prozentsätzen, Zeiten und weiteren Werten ab. Damit die Schätzungen aussagekräftig sind, sollten die Kosten für Filament, Drucker und zusätzliche Ausgaben aktuell gehalten werden.

![Produktbestand](galeria/es/04-inventario-de-productos.jpg)

## 1.3. Druckerprofile

Mit den Profilen können die wirtschaftlichen Parameter der verwendeten Geräte konfiguriert werden.

Dabei können beispielsweise Anschaffungskosten, geschätzte Lebensdauer und Betriebskosten berücksichtigt werden, sofern diese im Profil vorgesehen sind.

Wenn mehrere Drucker verwendet werden, sollte das passende Profil ausgewählt werden, damit die Schätzungen die Unterschiede zwischen den Geräten widerspiegeln.

![Druckerprofile und Monitor](galeria/es/06-perfiles-y-monitor-de-impresoras.jpg)

## 1.4. Kompatibilität mit Slicern

Die Integration ist für OrcaSlicer-basierte Slicer vorgesehen, insbesondere **Snapmaker Orca, OrcaSlicer und Creality Print**. Die Kompatibilität mit diesen Slicern liegt bei ungefähr **90 %**; je nach Version und Konfiguration kann es weiterhin Unterschiede im Verhalten geben. Daher sollte sie nicht als 100-prozentige Kompatibilität bezeichnet werden.

Mithilfe von Postprocessing-Skripten können vom Slicer erzeugte G-Code-Dateien verarbeitet und die verfügbaren Daten im Arbeitsablauf von Print Cost & Profit verwendet werden. Welche Informationen ausgelesen werden können, hängt von der Datei, der Konfiguration und der Slicer-Version ab.

![Kostenvoranschläge](galeria/es/08-presupuestos.jpg)

## 1.5. Druckermonitor und Kompatibilität

Der Drucker mit bestätigter **100-prozentiger** Kompatibilität ist der **Snapmaker U1**. Der Monitor funktioniert auch mit anderen Druckern, auf die über **Fluidd** oder **Mainsail/Moonraker** zugegriffen werden kann (abhängig von der Konfiguration). Die Unterstützung dieser Modelle wird jedoch noch angepasst. Während der weiteren Tests können einige Funktionen fehlen oder sich anders verhalten.

## 1.6. Lokale SQLite-Speicherung

Die Anwendung enthält Komponenten für die lokale Speicherung mit SQLite.

Ziel ist es, die Daten in einer Datenbank auf dem Computer zu speichern, statt sie zwischen PC und Browser aufzuteilen.

Wenn der lokale Speicher nicht gestartet werden kann, soll die Anwendung den entsprechenden Fehler anzeigen, anstatt unbemerkt auf ein anderes Speichersystem umzuschalten.

## 1.7. Diagnosewerkzeuge

Das Projekt enthält Skripte, mit denen der Anwendungsstart, die Funktion der lokalen Bridge und bestimmte Integrationsprobleme überprüft werden können.

Diese Werkzeuge liefern hilfreiche Informationen, wenn eine Komponente nicht startet oder ein Vorgang nicht ordnungsgemäß abgeschlossen wird.

---

# 2. Voraussetzungen

Vor dem Start des Programms wird Folgendes empfohlen:

- Ein Computer mit Windows 10, Windows 11 oder Linux.
- Ein dauerhafter lokaler Ordner für die Installation des Projekts.
- Ein OrcaSlicer-basierter Slicer — insbesondere Snapmaker Orca, OrcaSlicer oder Creality Print — falls die Integration verwendet werden soll.
- Alle Dateien der heruntergeladenen Distribution.
- Die im Distributionspaket enthaltenen Speicher- und Konfigurationskomponenten.

Die Distribution sollte die für Windows vorbereitete SQLite-Programmdatei enthalten, damit Endnutzer Python nicht manuell installieren müssen.

Starten Sie die Anwendung nicht direkt aus der ZIP-Datei. Entpacken Sie zuerst alle Dateien.

---

# 3. Print Cost & Profit herunterladen und installieren

## Schritt 1. Programm herunterladen

1. Öffnen Sie das offizielle Repository:

   https://github.com/nilose2014/PrintCostProfit für Windows und https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-preview-0.1 für Linux

2. Klicken Sie auf **Code**.
3. Wählen Sie **Download ZIP**.
4. Warten Sie, bis der Download abgeschlossen ist.
5. Entpacken Sie den Inhalt der ZIP-Datei.

## Schritt 2. Ordner auswählen

Sie können beispielsweise folgenden Ordner verwenden:

`C:\PrintCostProfit`

Sie können auch einen anderen dauerhaften Speicherort wählen. Vermeiden Sie temporäre Ordner. Verschieben Sie das Programm nach der Konfiguration der OrcaSlicer-Pfade nicht, es sei denn, Sie aktualisieren diese Pfade ebenfalls.

## Schritt 3. Programm starten

Öffnen Sie den Ordner, in den Sie die Dateien entpackt haben, und doppelklicken Sie auf:

**`Integracion_Orca_Postprocesado.bat`**

Diese Datei dient sowohl zum manuellen Start als auch zur Integration mit OrcaSlicer.

Beim manuellen Start wird geprüft, ob der lokale Dienst verfügbar ist. Wenn er nicht antwortet, versucht das Skript, ihn zu starten, und wartet, bis er bereit ist, bevor die Benutzeroberfläche im Browser geöffnet wird.

Sie müssen weder zuerst die HTML-Datei öffnen noch die lokale Bridge separat starten, wenn der Starter diese Aufgaben übernehmen kann.

**Wichtig:** Für Funktionen, die lokalen Speicher benötigen, starten Sie die Anwendung über diese Datei und nicht durch direktes Öffnen von `Print_Cost_Profit.html`.

---

# 4. Einen OrcaSlicer-basierten Slicer konfigurieren

Die Integration ist für OrcaSlicer-basierte Slicer vorgesehen, insbesondere Snapmaker Orca, OrcaSlicer und Creality Print. Menünamen und einzelne Details können abweichen. Die allgemeine Kompatibilität liegt bei ungefähr 90 %, daher wird ein Test mit der installierten Version empfohlen.

Die Integration verwendet das Postprocessing-Skript, um den G-Code zu verarbeiten, sobald der Slicer den Slicing-Vorgang abgeschlossen hat.

## Schritt 1. Integrationsdatei finden

Suchen Sie im Programmordner nach:

`Integracion_Orca_Postprocesado.bat`

Kopieren Sie den vollständigen Pfad. Wenn Sie den Beispielordner verwenden, lautet er:

`C:\PrintCostProfit\Integracion_Orca_Postprocesado.bat`

Wenn Sie das Programm an einem anderen Ort installiert haben, verwenden Sie den tatsächlichen Pfad.

## Schritt 2. Druckeinstellungen öffnen

1. Öffnen Sie OrcaSlicer.
2. Wählen Sie das gewünschte Druckerprofil.
3. Öffnen Sie die Druckeinstellungen.
4. Aktivieren Sie bei Bedarf den erweiterten Expertenmodus.
5. Öffnen Sie den Abschnitt **Sonstiges**.
6. Suchen Sie nach **Postprocessing-Skripte**.

Die Menünamen und die Anordnung können je nach Slicer, Version und ausgewählter Sprache variieren.

## Schritt 3. Skript hinzufügen

Geben Sie den vollständigen Pfad zu folgender Datei ein:

`Integracion_Orca_Postprocesado.bat`

Speichern Sie die Profileinstellungen.

Falls Ihr Slicer eine bestimmte Syntax für Pfade oder Argumente benötigt, verwenden Sie das für diese Version vorgesehene Format.

## Schritt 4. Test durchführen

1. Laden Sie ein einfaches Modell.
2. Wählen Sie Drucker und Druckprofil aus.
3. Konfigurieren Sie das Material.
4. Slicen Sie das Modell.
5. Exportieren Sie den G-Code.
6. Prüfen Sie, ob das Postprocessing fehlerfrei ausgeführt wird.

Das Skript verarbeitet die G-Code-Datei, wenn OrcaSlicer es mit dem Dateipfad aufruft. In diesem Fall unterscheidet sich das Verhalten vom manuellen Start: Die Datei wird verarbeitet und das Skript beendet sich, ohne ein zweites Anwendungsfenster zu öffnen.

---

# 5. Verarbeitung von G-Code-Dateien

G-Code enthält Anweisungen, die der Slicer für den 3D-Drucker erzeugt.

Die Print Cost & Profit-Integration kann diese Dateien verarbeiten, um verfügbare Daten abzurufen, die für Berechnungen und die Aufzeichnung von Aufträgen nützlich sind.

Je nach den in der Datei enthaltenen Informationen und den verfügbaren Funktionen können folgende Daten relevant sein:

- Dateiname oder Dateipfad.
- Vom Slicer erzeugte Druckinformationen.
- Geschätzte Zeit und Materialverbrauch.
- Filamentinformationen, sofern verfügbar.

Die aus dem G-Code gewonnenen Werte sind Schätzungen des Slicing-Vorgangs. Sie dürfen nicht automatisch als vom Drucker bestätigter tatsächlicher Verbrauch betrachtet werden.

## Manueller Test mit einer G-Code-Datei

Das Projekt enthält:

`Probar_Integracion_con_Gcode.bat`

So führen Sie einen Test durch:

1. Suchen Sie eine G-Code-Datei, die mit dem verwendeten kompatiblen Slicer erzeugt wurde.
2. Ziehen Sie die Datei auf `Probar_Integracion_con_Gcode.bat`.
3. Warten Sie, bis der Vorgang abgeschlossen ist.
4. Prüfen Sie das Ergebnis und eventuelle Fehlermeldungen.

Mit diesem Test lässt sich ein Problem bei der Dateiverarbeitung von einem Problem des lokalen Dienstes unterscheiden.

---

# 6. Kosten- und Rentabilitätsverwaltung ![Kostenübersicht](galeria/es/14-resumen-de-costes.jpg)

Damit die Ergebnisse aussagekräftig sind, sollten die wirtschaftlichen Daten konfiguriert werden, bevor der Preis eines Bauteils berechnet wird.

## Filament

Halten Sie den Preis jedes verwendeten Materials aktuell. Eine Änderung des Kilogrammpreises kann die Kosten der hergestellten Teile erheblich beeinflussen.

## Drucker

Verwenden Sie das Profil des Geräts, mit dem das Bauteil hergestellt wird. Abschreibungs- und Verschleißparameter sollten auf angemessenen Schätzungen der Kosten und Lebensdauer beruhen.

## Herstellungszeit

Die vom Slicer geschätzte Zeit ermöglicht eine Schätzung der Kosten für die Maschinennutzung. Das tatsächliche Ergebnis kann aufgrund von Pausen, Materialwechseln, Fehlern oder Abweichungen zwischen geschätzter und tatsächlicher Zeit variieren.

## Zusätzliche Ausgaben

Berücksichtigen Sie die für den Auftrag geltenden Ausgaben, die in der Konfiguration des Rechners vorgesehen sind.

## Verkaufspreis

Prüfen Sie den empfohlenen Preis zusammen mit Kosten, Gewinn und Marge. Ein berechneter Preis ist nur so zuverlässig wie die eingegebenen Daten.

---

# 7. Datenspeicherung und Datenaufbewahrung

Print Cost & Profit verwendet für Funktionen, die diese Speicherung benötigen, einen lokalen Dienst und eine SQLite-Datenbank.

Der von der Installation verwendete Speicherort kann sich im lokalen Windows-Benutzerprofil befinden.

## Empfehlungen

- Löschen Sie die Datenbank nicht, während der Dienst läuft.
- Verschieben Sie den Datenordner nicht manuell.
- Erstellen Sie vor einer Programmaktualisierung eine Datensicherung.
- Prüfen Sie nach einer Aktualisierung, ob der lokale Dienst ordnungsgemäß startet.
- Kontrollieren Sie, ob die Daten nach dem Schließen und erneuten Öffnen der Anwendung erhalten bleiben.

## Wenn ein Speicherfehler angezeigt wird

Wenn die Anwendung meldet, dass der PC-Speicher nicht gestartet werden kann, geben Sie keine weiteren Daten ein, als würden sie ordnungsgemäß gespeichert.

Prüfen Sie den lokalen Dienst und verwenden Sie die Diagnosewerkzeuge. Löschen Sie die Datenbank nicht, um das Problem zu beheben.

Der Schutz vor einem unbemerkten Wechsel zum Browserspeicher soll verhindern, dass Daten auf zwei unterschiedliche Speicherorte verteilt werden.

---

# 8. Enthaltene Skripte und Werkzeuge ![Dokumentation und Hilfe](galeria/es/19-documentacion-y-ayuda.jpg)

Das Repository enthält verschiedene Hilfsdateien. Im normalen Betrieb müssen nicht alle manuell ausgeführt werden.

| Datei | Funktion |
|---|---|
| `Integracion_Orca_Postprocesado.bat` | Manueller Anwendungsstart und Einstiegspunkt für das Postprocessing kompatibler OrcaSlicer-basierter Slicer. |
| `Iniciar_Puente_Orca.ps1` | Startet oder überprüft die Integrations-Bridge. |
| `Iniciar_Puente_Orca_Independiente.cmd` | Eigenständiger Starter für die lokale Bridge. |
| `Integracion_Print_Cost_Profit.ps1` | Verarbeitet die Integration mit der G-Code-Datei. |
| `Probar_Integracion_con_Gcode.bat` | Manueller Test der G-Code-Verarbeitung. |
| `Comprobar_Puente_U1.bat` | Überprüft die Bridge im Zusammenhang mit dem Snapmaker U1. |
| `Diagnostico_Arranque.bat` | Hilft bei der Untersuchung von Startproblemen. |
| `Diagnostico_Print_Cost_Profit.bat` | Diagnosewerkzeug der Anwendung. |
| `Diagnostico_Version.bat` | Überprüft Versionsinformationen. |
| `pcp_sqlite_api.py` | Code des SQLite-Speicherdienstes. |
| `pcp_sqlite_store.py` | Komponente für den Zugriff auf und die Verwaltung des SQLite-Speichers. |
| `storage-client.js` | Vom Interface verwendeter Client für die Kommunikation mit dem Speicher. |
| `VERSION` | Versionsinformationen des Projekts. |
| `LICENSE.txt` | Nutzungsbedingungen und Urheberrechtshinweis. |

Die Verfügbarkeit und das genaue Verhalten der einzelnen Funktionen hängen von den in der Distribution enthaltenen Dateien und deren Konfiguration ab.

---

# 9. Fehlerbehebung

## Die Anwendung lässt sich nicht öffnen

1. Prüfen Sie, ob alle Dateien entpackt wurden.
2. Führen Sie `Integracion_Orca_Postprocesado.bat` aus.
3. Warten Sie, bis der lokale Dienst antwortet.
4. Wenn die Anwendung nicht startet, führen Sie `Diagnostico_Arranque.bat` aus.
5. Bewahren Sie die vollständige Fehlermeldung auf.

## Der PC-Speicher startet nicht

Prüfen Sie, ob das Paket die SQLite-Programmdatei für Windows enthält und ob sie sich am vom Server erwarteten Speicherort befindet.

Wenn ein HTTP-500-Fehler angezeigt wird, prüfen Sie den Dienststatus und die Diagnosemeldungen, bevor Sie versuchen, Daten zu ändern.

Wechseln Sie nicht zum Browserspeicher und löschen Sie die Datenbank nicht als improvisierte Lösung.

## Der Slicer führt die Integration nicht aus

1. Überprüfen Sie den Pfad der `.bat`-Datei.
2. Stellen Sie sicher, dass die Datei vorhanden ist.
3. Überprüfen Sie die Konfiguration des Druckprofils.
4. Testen Sie mit `Probar_Integracion_con_Gcode.bat`.
5. Bewahren Sie den Fehler und den Pfad der verwendeten G-Code-Datei auf.

## Die Daten bleiben nicht erhalten

Prüfen Sie, ob Sie die Anwendung über den Starter geöffnet haben und ob der lokale Dienst läuft.

Führen Sie anschließend einen Test mit unkritischen Daten durch und prüfen Sie, ob diese nach einem Neustart der Anwendung erhalten bleiben.

Löschen Sie keine vorhandenen Daten, um den Speicher zu reparieren.

---

# 10. Sicherheit und bewährte Vorgehensweisen

- Laden Sie das Programm aus dem offiziellen Repository herunter.
- Geben Sie keine Passwörter, privaten Schlüssel oder Zugangsdaten weiter.
- Führen Sie keine Skripte aus unbekannten Quellen aus.
- Setzen Sie den lokalen Dienst ohne geeignete Sicherheitskonfiguration nicht dem Internet aus.
- Bewahren Sie Sicherungskopien wichtiger Daten auf.
- Prüfen Sie Abhängigkeiten und Programmfunktion, bevor Sie bei einer Aktualisierung Dateien ersetzen.

---

# 11. Urheberrecht und Nutzungsbedingungen

Print Cost & Profit unterliegt den in `LICENSE.txt` angegebenen Bedingungen.

Die Veröffentlichung des Codes auf GitHub erteilt für sich genommen keine Erlaubnis, die Software, geänderte Versionen oder abgeleitete Produkte zu vermarkten, weiterzuverkaufen, unterzulizenzieren, weiterzuverbreiten oder kommerziell zu nutzen, wenn solche Tätigkeiten durch die geltende Lizenz untersagt sind.

Genehmigungsanfragen müssen schriftlich gestellt und vom Rechteinhaber ausdrücklich angenommen werden.

---

# 12. Hilfe und Fehlerberichte

Wenn Sie ein Problem melden, geben Sie bitte Folgendes an:

- Version von Print Cost & Profit.
- Windows-Version.
- Name und Version des Slicers (Snapmaker Orca, OrcaSlicer, Creality Print oder ein anderer).
- Verwendeter Drucker, falls relevant.
- Ausgeführter Vorgang.
- Vollständige Fehlermeldung.
- Schritte zur Reproduktion des Problems.

Geben Sie keine Passwörter, privaten Schlüssel oder unnötigen personenbezogenen Daten an.

---

**Print Cost & Profit v1.2**

Entwickelt von Beatriz Toro Martin.

Berechnen Sie Ihre Kosten, verfolgen Sie Ihre Aufträge und verbessern Sie Ihr Finanzmanagement.
