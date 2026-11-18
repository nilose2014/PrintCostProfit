## v2.0.224

- v2.0.224: Anfragen an U1, I7 und K2 PRO gehen jetzt direkt vom Electron-Hauptprozess über die jeweilige Drucker-IP an Moonraker. Druckerstatus, Druckerinformationen und das Lesen des G-Code-Headers laufen nicht mehr über die lokalen PowerShell-Endpunkte. Karten und Monitor verwenden denselben eingeschränkten IPC-Transport mit Status-Cache pro IP. Der lokale Server bleibt für App-Dateien, Orca-Integration und weiterhin davon abhängige Dienste erhalten.

## v2.0.222

- v2.0.222: Zum Auslesen der Filamentdaten muss die G-Code-Datei nicht mehr vollständig heruntergeladen werden. Der Server fordert nur den Header (maximal 8 MiB) mit Metadaten und Vorschaubild an. Monitor und Bedienfeld verwenden denselben Auftrag für IP-Adresse und Dateiname, wodurch doppelte Downloads vermieden werden; beide fragen außerdem den Status derselben ausgewählten IP ab.

- v2.0.221: Die Registerkarte Drucker und der Monitor verwenden jetzt denselben persistenten Status-Worker pro IP-Adresse. Jeder Drucker hat eine eigene Moonraker-Verbindung und einen eigenen Cache; ein Wechsel der Auswahl startet oder verändert den Worker eines anderen Geräts nicht. Karten verwenden keinen separaten Live-Status-Endpunkt mehr. Die gemeinsame Telemetrie umfasst jetzt Mesh, Sensoren und Schichtdaten.

## v2.0.220

- v2.0.220: Die G-Code-Analyse ist jetzt an die genaue IP-Adresse des ausgewählten Druckers gebunden. Beim Druckerwechsel wird auch der serverseitige Hintergrund-Lesevorgang abgebrochen, nicht nur die Browser-Abfrage. Dadurch verbraucht ein alter Lesevorgang keine Ressourcen mehr und stört die neue Auswahl nicht.

## v2.0.219

- v2.0.219: vereinheitlicht die inkrementelle Übersetzungsverarbeitung, um doppelte vollständige Dokumentdurchläufe zu vermeiden. Wiederholte refresh-Aufrufe werden zusammengefasst; es kann nur ein vollständiger Durchlauf ausstehen. Beim Druckerwechsel wird die vorherige Anfrage sofort abgebrochen, die letzte Auswahl priorisiert und eine erwartete Abbruchaktion nicht als Fehler gemeldet.

## v2.0.219

- v2.0.219: korrigiert die Abfrage des G-Code-Fortschritts, sodass vorübergehende Lese-/Schreibzustände der Auftragsdatei nicht mehr als HTTP 400 zurückgegeben werden; diesen Status erhalten nur ungültige Auftrags-IDs. Die inkrementelle Übersetzung wird auf kleine Aufgaben von höchstens 4 Knoten oder 5 ms pro Frame begrenzt; Sprachwechsel durchlaufen das Dokument schrittweise.

## v2.0.217

- v2.0.217: Die Polling-Steuerung beim Druckerwechsel wurde korrigiert. Wenn die vorherige Anfrage ihren Controller noch freigibt, wird die neue Abfrage vorgemerkt und automatisch gestartet. Veraltete Daten werden während des Verbindungsaufbaus gelöscht; erwartete Abbrüche erscheinen nicht mehr als Verbindungsfehler.

## v2.0.216

- v2.0.216: Die Arbeit des dynamischen Übersetzers pro Frame wurde reduziert, um UI-Blockierungen zu vermeiden. Der erste Durchlauf verarbeitet höchstens 60 Knoten pro Frame, Aktualisierungen des Beobachters 35; die inkrementelle Übersetzung bleibt erhalten, Übersetzungsschlüssel und Wörterbuchdaten bleiben unverändert.

## v2.0.216

- v2.0.216: Die Druckerauswahl wird zwischen Karten, Dropdown und Monitor vereinheitlicht. Beim Auswählen einer Karte wird die IP sofort an alle Steuerelemente weitergegeben; Konfigurationsfehler oder Abbrüche stellen nicht mehr den vorherigen Drucker wieder her. Antworten älterer Auswahlvorgänge werden ignoriert.


- v2.0.214: behebt die Auswahl über Druckerkarten. Die ausgewählte Karte wird sofort aktualisiert und veraltete Abfrageergebnisse werden verworfen, damit nicht wieder der zuvor ausgewählte Drucker angezeigt wird.

- v2.0.213: Die Desktop-App führt SQLite-Snapshot-Lesevorgänge und Schreibstapel über Electron-IPC statt HTTP aus. Optimistische Revisionen und dieselbe gemeinsam mit dem lokalen Server verwendete SQLite-Datei bleiben erhalten. Sicherungen und Orca/U1-Integrationen verwenden weiterhin den lokalen Server.

## v2.0.212
- Wiederholte Schreibvorgänge werden reduziert und schnelle Wiederholungsschleifen verhindert, wenn SQLite oder die Bridge einen Vorgang nicht bestätigt. Die Warteschlange behält die letzte ausstehende Änderung bei und verwendet eine schrittweise Verzögerung; nach dem Aufwachen von Windows wird die Synchronisierung fortgesetzt.

﻿- v2.0.212: Persistenter SQLite-Adapterprozess ergänzt, damit nicht für jede Speicheranfrage ein neuer Prozess gestartet wird; Schreibvorgänge, Revisionen, Konfliktbehandlung, Sicherungen und Wiederherstellung bleiben erhalten.
- v2.0.210: Deklaration und Verarbeitung von `pendingSelectedIp` im Druckerbereich korrigiert.
- v2.0.209: Fehler durch nicht definiertes `pendingSelectedIp` behoben und Druckerwechsel während Aktualisierungen vorgemerkt.
## v2.0.208
- Der Druckerwechsel im Tab „Drucker“ wurde korrigiert: Die angeforderte IP hat Vorrang und ausstehende Aktualisierungen verwerfen den Wechsel nicht mehr.
- Bei fehlender Bestätigung durch die Bridge wird die vorherige Auswahl wiederhergestellt.
- Die Speicherhäufigkeit des Temperaturverlaufs wurde zur Entlastung von SQLite reduziert.

﻿- v2.0.207: Der Druckerwechsel im Reiter „Drucker“ wurde korrigiert: Nach Bestätigung der Verbindung durch die Bridge wird die neue IP-Adresse sofort mit der Detailauswahl synchronisiert, bevor Karten und Details aktualisiert werden. Dadurch bleibt nicht mehr die vorherige IP-Adresse maßgeblich. Keine Änderungen an SQLite oder dessen Pfaden.
- v2.0.207: Servidor_Panel_U1.ps1 exakt aus Version 2.0.204 wiederhergestellt, um die einzige PowerShell-Änderung aus 2.0.205 zurückzunehmen; die übrigen Korrekturen bleiben erhalten. Eine versehentlich enthaltene .pyc-Datei wurde entfernt.
- v2.0.205: Weniger U1-Telemetrie-Schreibvorgänge: Die Laufzeit wird alle fünf Minuten gespeichert, Statuswechsel sofort. Die Erkennung der ersten Telemetrie wurde korrigiert, damit nicht bei jeder Abfrage gespeichert wird. Bei Auswahl einer Druckerkarte wird eine fehlende Option im U1-Auswahlfeld angelegt und der tatsächliche Verbindungswechsel ausgelöst. Keine Änderungen am SQLite-Schema oder an Pfaden.
- v2.0.203: Der U1-Monitor betrachtet einen Druck erst bei einem ausdrücklichen Status complete/completed/finished als abgeschlossen. standby, ready und idle lösen keine Filamentabzüge oder den Abschluss vorläufiger Buchungen mehr aus. Der Übergang canceling/cancelling gilt nicht mehr als bestätigter Abbruch. Der Dialog mit der Abbruchzusammenfassung wurde wiederhergestellt. Die Startmeldung lautet nun „Programm wird gestartet, bitte warten…“. Keine SQLite-Änderungen.
- v2.0.202: Der lokale Server behandelt Browser-Verbindungsabbrüche beim Senden von Antworten jetzt als abgebrochene Verbindungen und nicht mehr als allgemeine Serverfehler. Die Umrechnung des U1-Cache-Alters verwendet nun Int64, um einen Int32-Überlauf zu verhindern. Datenbank, Schema, gespeicherte Daten und Pfade bleiben unverändert.
- v2.0.201: Die bisher einzelnen Schreibvorgänge werden nun in Stapeln von bis zu 25 Schlüsseln innerhalb einer Anfrage und SQLite-Transaktion verarbeitet. Jeder Schlüssel behält seine eigene Revision; Konflikte werden je Schlüssel gemeldet und erneut versucht, ohne gültige Änderungen des Stapels zu verwerfen. Die Synchronisierung zwischen Fenstern fragt den Snapshot jetzt alle 15 statt alle 5 Sekunden ab. SQLite-Schema, Speicherort und Daten bleiben unverändert. Der Python-Adapter wird weiterhin einmal pro Stapel gestartet; dies reduziert Prozessstarts, führt aber noch keinen dauerhaft laufenden Worker ein.
- v2.0.200: Die manuelle IP wird erst gespeichert, nachdem die Bridge die Druckerauswahl bestätigt hat. Bei einem Fehler von /api/u1/config wird somit keine nicht angewendete IP in die Schreibwarteschlange gestellt. Die durch die Wartung ausgelöste Aktualisierung des Start-Dashboards läuft nur bei sichtbarem Start-Tab und wird in Leerlaufzeit verschoben; das Intervall steigt von 30 auf 60 Sekunden. Keine Änderungen an SQLite, Schema oder Pfaden.
- v2.0.200: Doppelte Aktualisierungen bei der Druckerauswahl über eine Karte werden verhindert. /api/u1/config trennt nun das Speichern der IP vom Start des Status-Workers; Fehler werden mit Diagnose in printcostprofit_app.log protokolliert. Echte Fehler beim Speichern liefern weiterhin 502. SQLite und seine Pfade bleiben unverändert.
- v2.0.198: Die Initialisierung der Übersetzungen wurde optimiert: Aktualisierungsanforderungen des Wörterbuchs werden zusammengefasst, sodass die Indizes nur einmal neu aufgebaut werden. Die erste DOM-Übersetzung erfolgt in Teilabschnitten, damit der Seitenstart nicht blockiert wird. Dynamische Übersetzungen hinzugefügter Elemente und Sprachwechsel bleiben erhalten. SQLite-Daten und -Pfade bleiben unverändert.
- v2.0.197: Schreibwarteschlange von SQLite und Konfliktbehandlung zwischen Fenstern verbessert. Die Bridge liefert jetzt die aktuelle Revision und den aktuellen Wert des betroffenen Schlüssels zurück, sodass der Client den Schreibvorgang ohne vollständigen Snapshot abgleichen kann. Revisionsprüfung und Wiederholung des letzten ausstehenden Werts bleiben erhalten. Keine Änderung am SQLite-Schema, Datenbankpfad oder gespeicherten Daten.
- v2.0.196: Der Fehler, der die Aktualisierung des U1-Monitors verhinderte, wurde behoben: Der AbortController für die Abfrage ist jetzt im richtigen Gültigkeitsbereich deklariert. Beim Druckerwechsel wird die vorherige Anfrage ausdrücklich abgebrochen, bevor der neue Zyklus beginnt. Dadurch werden Verweise auf eine nicht definierte Variable und verspätete Antworten des vorherigen Druckers vermieden. Datenbank und gespeicherte Daten bleiben unverändert.
- v2.0.195: Speicherung des aktiven U1-Auftrags korrigiert: Der dateibezogene Vorschaubildeintrag wird korrekt definiert und verglichen; der Fehler `thumbnailRecord is not defined` entfällt. Beim Druckerwechsel wird die vorherige Abfrage abgebrochen, der zuletzt gespeicherte Auftrag des ausgewählten Druckers sofort angezeigt und eine neue Abfrage gestartet. Die IP-Auswahl wartet nicht mehr auf eine zweite synchrone Moonraker-Anfrage; der Statusdienst aktualisiert die Verbindung im Hintergrund. Neue Meldungen sind in alle acht Sprachen übersetzt.
- v2.0.194: Speicherung des U1-Monitors optimiert: Das Vorschaubild des aktiven Auftrags ist von den Fortschrittsdaten getrennt und wird nur bei Änderungen gespeichert; Wiederherstellung der Schreibwarteschlange und Priorität interaktiver Vorgänge verbessert. SQLite führt bei aktuellem Schema nicht mehr bei jeder Anfrage DDL aus oder handelt WAL neu aus. Das Lesen des U1-Statuscaches wird wiederholt und liefert bei Fehlern einen sicheren Übergangsstatus.
- v2.0.193: Speicherlast des U1-Monitors reduziert: Das Vorschaubild des aktiven Auftrags wird separat und nur bei Änderung gespeichert; regelmäßige Auftragsaktualisierungen übertragen das Base64-Bild nicht mehr. Wiederherstellung und Priorisierung der Schreibwarteschlange verbessert. WAL wird nicht mehr in jedem SQLite-Prozess neu ausgehandelt. Der U1-Status-Endpunkt wiederholt Cache-Leseversuche und liefert bei Lesefehlern einen vorübergehenden Status statt HTTP 502.
- v2.0.193: Behandlung temporärer Drucker-Cachedateien korrigiert. Wenn das Schreiben oder Ersetzen des U1-Caches fehlschlägt, wird die temporäre Datei in einem finally-Block entfernt. Beim Serverstart werden nur bekannte temporäre Dateien gelöscht, die älter als 24 Stunden sind; SQLite-Datenbank, Sicherungen und endgültige Cachedateien bleiben unverändert.
- v2.0.191: Die Startseiten-Alarmübersicht wurde mit einem vertikalen Flex-Container und Karten mit automatischer Höhe und Mindesthöhe neu aufgebaut. Das weiterhin überlappende Grid-Layout wurde entfernt. Anordnung und Abmessungen von Symbol, Titel und Beschreibung sind festgelegt; das Korrektur-Stylesheet wird zuletzt geladen und überschreibt geerbte Stile.
- v2.0.190: Layout der Startseitenmeldungen korrigiert: Das geerbte Pseudo-Symbol, das eine zusätzliche Rasterzelle belegte und den Text vertikal stapelte, wurde entfernt. Normaler Textumbruch innerhalb jeder Karte ist nun erzwungen.
- v2.0.190: Die Dashboard-Hinweise wurden als dunkle Karten mit besser sichtbaren Symbolen, getrennten Titeln und Beschreibungen sowie verbessertem Abstand und Kontrast neu gestaltet. Die Vorschau ist auf vier Hinweise begrenzt, damit der Text nicht zusammengedrückt wird. Eigenes Symbol für Druckerprobleme hinzugefügt.
- v2.0.190: Benachrichtigungen für Fehler und Probleme des ausgewählten Druckers hinzugefügt, einschließlich Fehlerzuständen und Verbindungsabbrüchen. Meldungen werden aktualisiert und als behoben markiert, sobald das Problem verschwindet. In den Optionen gibt es eine Checkbox zum Aktivieren oder Deaktivieren dieser Meldungen. Übersetzungen zentral für alle acht Sprachen.
- v2.0.190: Orca: Der Erkennungspunkt für das Mausrad-Steuerelement wurde auf 85 % der Höhe des nativen Fensters in den unteren Einstellungsbereich verschoben. Dadurch hängt er nicht mehr von der variablen Darstellung des geöffneten oder eingeklappten Bereichs „Drucker“ ab.
- v2.0.190: Orca: Das Scrollen verwendet nicht mehr WindowFromPoint, das die überlagerte PCP-Fläche zurückgeben konnte. Sichtbare untergeordnete Steuerelemente des Orca-Fensters werden aufgelistet und das Steuerelement des Orca-Prozesses am unteren Panelpunkt ausgewählt; wenn keines vorhanden ist, wird die Aktion ohne Interaktion mit einem anderen Fenster abgebrochen.
- v2.0.190: Orca: Die Scroll-Pfeile wurden auf 62 % des Slicer-Bereichs und das Mausrad-Ziel auf 68 % in den unteren sichtbaren Einstellungsbereich verschoben. Die Prozessprüfung bleibt aktiv, um Interaktionen außerhalb von Orca zu verhindern.
- v2.0.184: Kodierung von `package.json` korrigiert: Der UTF-8-BOM wurde entfernt, der `@electron/rebuild` daran hinderte, die JSON-Datei beim Erstellen des Windows-Installers zu lesen.
- v2.0.184: Wartungswarnungen berücksichtigen jetzt auch die tatsächlichen Druckstunden wie die Wartungsansicht und werden regelmäßig sowie nach Aufgabenänderungen erneut geprüft. Orca: SendInput und die physische Mauszeigerbewegung wurden entfernt; die Pfeile senden das Mausrad nur an das erkannte Steuerelement des Orca-Prozesses. Bei einem anderen Ziel wird abgebrochen.
- v2.0.182: Konvertierung des negativen Mausrad-Deltas in UInt32 für SendInput korrigiert. PowerShell wandelt -120 nicht mehr direkt in UInt32 um; die Binärdarstellung wird mit BitConverter erhalten. Dadurch wird der Fehler behoben, der ScrollOptions stoppte.
- v2.0.181: Das tatsächliche ScrollOptions-Skript wurde korrigiert: Es verwendet jetzt SendInput mit MOUSEEVENTF_WHEEL über dem linken Einstellungsbereich und stellt die Cursorposition wieder her. Das wirkungslose WM_MOUSEWHEEL an das Haupt-HWND wurde entfernt.
- v2.0.180: Mausrad-Nachrichten an vermutete HWNDs wurden durch echte Windows-Mausradeingaben (SendInput) über den Orca-Einstellungen ersetzt. Die ursprüngliche Cursorposition wird danach wiederhergestellt.
- v2.0.179: Das Scrollen wird wieder an ein tatsächliches Orca-Untersteuerelement gesendet, das an einem festen Punkt im linken Einstellungsbereich ermittelt wird. Das Senden an den von Qt nicht verarbeiteten Hauptrahmen entfällt. Die Ziel-PID wird geprüft; die Pfeilhöhe spielt keine Rolle.
- v2.0.178: WindowFromPoint-Zielsuche durch WM_MOUSEWHEEL direkt an Orcas Hauptfenster ersetzt, mit Koordinaten innerhalb des linken Einstellungsbereichs. Das Scrollen hängt nicht mehr von der Pfeilhöhe oder der Ausrichtung mit der Bildlaufleiste ab.
- v2.0.177: Das Scrollen der Orca-Einstellungen verwendet jetzt die tatsächliche vertikale Bildschirmposition des Pfeilklicks. Das Mausrad-Ereignis wird an den linken Bedienbereich auf derselben Höhe gesendet, auch wenn Bereiche wie Drucker oder Filamente ein- oder ausgeklappt werden und sich die Scrollleiste verschiebt.
- v2.0.176: Die fehlenden Win32-Deklarationen für WindowFromPoint und SendMessageTimeout wurden in PCPWin32Overlay ergänzt. Das Scrollen der nativen Orca-Einstellungen kann nun das linke Steuerelement finden und WM_MOUSEWHEEL ohne Fehler wegen einer fehlenden Methode senden.
- v2.0.175: Größe des integrierten Orca-Bereichs korrigiert: Der Arbeitsbereich nutzt wieder die gesamte verfügbare Höhe. Die Scroll-Steuerung bleibt in einer festen Seitenspalte, ohne die Slicer-Höhe zu verkleinern. In v2.0.174 fehlte dem Flex-Zeilencontainer das Wachstum, wodurch Orca nur als oberer Streifen erschien.
- v2.0.174: Gezieltes Scrollen im nativen linken Einstellungsbereich von Snapmaker Orca hinzugefügt. Kompakte Auf/Ab-Schaltflächen senden WM_MOUSEWHEEL an das tatsächliche Steuerelement im Einstellungsbereich (22 % der Fensterbreite), nicht an den Fensterrand oder das 3D-Bett. Das Ziel wird auf Zugehörigkeit zu Orca geprüft; Fehler werden gemeldet. Übersetzungen für alle acht Sprachen ergänzt.
- v2.0.173: Die in v2.0.172 eingeführte externe Bildlaufleiste für Orca-Optionen wurde vollständig entfernt, da sie mit dem nativen Bedienfeld nicht funktionierte. Der ursprüngliche Host-Bereich wurde wiederhergestellt und der zugehörige IPC- und PowerShell-Code entfernt. Die native Integration aus v2.0.171 bleibt erhalten.
- v2.0.172: Eine kompakte Seitensteuerung zum Scrollen der Snapmaker-Orca-Druckeinstellungen in PCP wurde ergänzt: Schaltflächen, Mausrad und Ziehen. Die Scrollbefehle werden an den nativen linken Einstellungsbereich gesendet, ohne Profile zu ändern oder HTML über Orca zu legen. Fünf neue Texte in acht Sprachen in traducciones.js.
- v2.0.171: Die Zuordnung alternativer Spulen wurde korrigiert: Es werden nur chromatisch ähnliche Farbtöne derselben Farbfamilie angeboten (z. B. Rot und Rotorange); Schwarz, Weiß, Beige und andere Farbfamilien werden ausgeschlossen. Eine kompakte Auswahlliste schützt das Monitorlayout.
- v2.0.170: Die Auswahl alternativer Spulen im U1-Monitor und Druckerbereich erkennt jetzt Varianten derselben Farbfamilie. Beispielsweise sind Rot ↔ Rotorange und verschiedene Grüntöne möglich; Materialkompatibilität und verfügbarer Bestand bleiben Voraussetzung. Andere Farbfamilien werden ausgeschlossen.
- v2.0.169: Orca wird innerhalb des von PCP zugewiesenen Rechtecks ohne Titelleiste und Fensterrahmen angezeigt. Es bleibt ein PCP zugeordnetes Qt-Fenster der obersten Ebene, damit modale Dialoge funktionieren; beim Trennen werden Rahmen und Steuerelemente wiederhergestellt.
- v2.0.168: Der vertikale Arbeitsbereich des integrierten Slicers wurde durch eine kompaktere Kopfzeile, Schaltflächen und Statuszeile vergrößert. Der native Orca-Bereich füllt den verbleibenden Platz und wird auch beim Verkleinern des Fensters auf den verfügbaren Clientbereich von PCP begrenzt.
- v2.0.167: Der nutzbare Bereich von Snapmaker Orca wurde vergrößert. Kopfzeile, Schaltflächen und Statusmeldung sind kompakter; sekundäre Beschreibungselemente werden bei üblichen Bildschirmhöhen ausgeblendet, um mehr vertikalen Platz für Orca-Steuerelemente und Bildlauf zu schaffen.
- v2.0.166: Die Integration modaler Snapmaker-Orca-Dialoge wurde korrigiert. Das Qt-Fenster ist wieder ein übergeordnetes Fenster im Besitz von PCP statt eines WS_CHILD-Fensters. Dadurch können die Dialoge „Neues Projekt“, „Öffnen“ und „Speichern“ korrekt angezeigt werden. Synchronisierung bei Verschieben, Größenänderung, Maximieren und Wiederherstellen von PCP; Orca wird auf den App-Bereich begrenzt.
- v2.0.165: Die inkrementelle DOM-Übersetzung wurde optimiert. Der Beobachter durchläuft keine vollständigen Teilbäume mehr und vergleicht nicht mehr jeden Knoten mit allen anderen; Änderungen werden in kleinen Paketen verarbeitet und eigene Übersetzungsmutationen ignoriert, um lange UI-Blockaden zu vermeiden.
- v2.0.164: Orca wird zu einem nativen untergeordneten Fenster von PCP und von Windows auf den Clientbereich begrenzt, sodass es beim Ändern der Fenstergröße nicht aus der App herausragt. Das Panel nutzt den verfügbaren Platz ohne Mindesthöhe; die Mindestgröße des Hauptfensters wurde reduziert.
- v2.0.163: Der sichtbare Orca-Slicerbereich wurde vergrößert und die oberen Steuerelemente kompakter gestaltet, damit das native Fenster mehr Höhe erhält.
- v2.0.162: Die Orca-Integration verwirft unbenannte Startfenster und wartet auf das Snapmaker/Orca-Hauptfenster. Titel, Handle und PID werden vor dem Andocken geprüft.
- v2.0.161: Orca wartet vor der Integration auf ein stabiles Qt-Hauptfenster, stellt ersetzte HWND-Handles wieder her und verwirft ungültige Koordinaten bei minimierter Anwendung.
- 2.0.160: Orca wird als rahmenloses natives Qt-Fenster angezeigt, das PCP gehört und über dem Slicer-Bereich positioniert wird. SetParent entfällt, um Darstellungsfehler zwischen Qt und Electron zu vermeiden. Die Position folgt beim Verschieben, Ändern der Größe, Minimieren und Wiederherstellen von PCP.
- 2.0.159: Native Integration überarbeitet: Orca wird direkt als untergeordnetes Fenster des PCP-Hauptfensters eingebunden. Dadurch entfällt das undurchsichtige Electron-Hostfenster, das Qt-Inhalte verdeckte. Außerdem wurde ein fehlendes Trennzeichen in traducciones.js behoben.
- 2.0.158: integriertes Orca-Bedienfeld aus der Basis 2.0.148 wiederhergestellt. Das Hostfenster erhält beim Verschieben/Ändern der Größe keine festen Koordinaten mehr; seine Geometrie stammt aus dem tatsächlich gemessenen UI-Bereich. Synchronisierung auch beim Scrollen und Tabwechsel.
- 2.0.157: neue Slicer-Strategie: Snapmaker Orca wird in einem separaten Fenster ohne SetParent oder überlagerndes Hostfenster geöffnet. Interaktive SQLite-Schreibvorgänge haben Vorrang vor dem Temperatur-Telemetrieverlauf.
- 2.0.156: main.cjs und orca-window.ps1 aus der Basisversion 2.0.148 wiederhergestellt, der letzten Referenz mit sichtbarer Orca-Einbettung. Spätere Änderungen an Sichtbarkeit, Positionierung und Fensterauswahl wurden zurückgenommen.
- 2.0.155: Fenstererkennung der Qt-Basis 2.0.148 wiederhergestellt. Hauptfenster im gestarteten Prozessbaum werden auch akzeptiert, bevor Snapmaker Orca einen Titel zuweist; spätere Host- und Größenanpassungen bleiben erhalten.
- 2.0.154: Auswahl des Snapmaker-Orca-Fensters korrigiert. Titellose oder zusätzliche Qt-Fenster werden nicht mehr eingebettet; die Anwendung wartet auf die Erkennung des Hauptfensters, um ein leeres Bedienfeld zu vermeiden.
- 2.0.153: Anzeigereihenfolge des Orca-Hostfensters korrigiert; die Host-Oberfläche wird vor dem Einbetten angezeigt und das Qt-Fenster danach neu positioniert, damit Chromium es nicht verdeckt. Doppelten Listener entfernt, der feste Koordinaten wiederherstellte.
- 2.0.152: Größe und Position des nativen Orca-Bereichs korrigiert; beim Ändern der Fenstergröße und der Registerkarte bleiben die tatsächlichen Abmessungen des sichtbaren Bereichs erhalten.
## v2.0.151
- Integriertes Orca: stabile Auswahl des Qt-Hauptfensters; Snapmaker-/Orca-Titel werden bevorzugt und temporäre fensterlose Startfenster vermieden.
- Integriertes Orca: Größenänderungen werden zusammengefasst und serialisiert; bei verlorenem Windows-Elternfenster wird das Qt-Fenster erneut gesucht und eingebettet.

## v2.0.150
- Integriertes Orca: Das leere Hostfenster wird während des Starts von Snapmaker Orca oder der Suche nach dessen Qt-Fenster nicht mehr angezeigt.
- Integriertes Orca: Das native Fenster wird erst nach Bestätigung eines gültigen Fensterhandles eingeblendet; beim Wechseln der Registerkarte während des Starts bleibt das Hostfenster verborgen.
- Integriertes Orca: Wenn der Prozess bereits läuft, der erste Einbettungsversuch aber nicht abgeschlossen wurde, kann die Schaltfläche die Einbettung erneut versuchen, statt fälschlich die Bereitschaft des Slicers zu melden.

## v2.0.149
- Stabilität: Die SQLite-Synchronisierung benachrichtigt die Oberfläche nur bei tatsächlichen Änderungen.
- Startseite: periodische vollständige Neudarstellungen entfernt; Aktualisierung bei Änderungen und Navigation, Druckersuche begrenzt.
- Hinweise: vollständige Prüfung alle 5 Sekunden entfernt; Prüfung beim Start und bei Datenänderungen.

## 2.0.148
- Orca: PowerShell-Fehler behoben, der das Einbetten des Qt-Fensters verhinderte; die von `GetWindowThreadProcessId` gelieferte Prozess-ID verwendet nicht mehr die reservierte automatische Variable `$PID`.

## 2.0.147
- Orca-Slicer: Das eingebettete native Fenster passt sich jetzt dem tatsächlichen Panelbereich an, auch beim Tabwechsel und Ändern der Fenstergröße.

### v2.0.147
- Manuelle Zuweisung alternativer Spulen im U1-Monitor korrigiert: Eine ausdrücklich gewählte Spule bleibt zugewiesen, auch wenn ihre HEX-Farbe nur ungefähr übereinstimmt.
- Zuweisungshinweis in allen acht Sprachen ergänzt.

## v2.0.143
- U1-Monitor: Die G-Code-Fortschrittsabfrage wird von 500 ms auf adaptive Intervalle von 1,5–2,5 s reduziert, mit begrenzter Wartezeit und Timeout pro Anfrage. HTTP-Fehlerdetails des Servers bleiben erhalten.

## v2.0.136
- Orca-Slicer: Diagnose-Start in einem separaten Fenster ergänzt, ohne das Qt-Fenster in Electron einzubetten. So lässt sich die Objektauswahl unabhängig testen und ein Fenster-Hosting-Problem von einem Fehler der Orca-Engine unterscheiden.

## v2.0.134
- Windows-Server: `Servidor_Panel_U1.ps1` wird mit UTF-8-BOM und Windows-Zeilenenden gespeichert, damit PowerShell 5.1 polnische Zeichen korrekt interpretiert und beim Start keine Zeichenfolgen oder Anführungszeichen beschädigt.

## v2.0.133
- Wartung: Der Auswahlbereich mischt gespeicherte Kostenprofile aus den Optionen nicht mehr mit tatsächlich erkannten Druckern. Erkannte Drucker werden mit ihren IP-basierten Aliasnamen angezeigt; manuell hinzugefügte Wartungsmaschinen bleiben erhalten.

## v2.0.133
- Orca: Die Suche nach dem Hauptfenster ist jetzt auf untergeordnete Prozesse der ausgewählten EXE oder deren exakten Installationsordner beschränkt. Dadurch wird verhindert, dass eine andere geöffnete Orca-Instanz eingebunden wird.

## v2.0.129
- Snapmaker-Orca-Integration: Prüft vor der Anzeige des Bedienfelds, ob das Einbettungsskript ein Fensterhandle und eine PID zurückgibt; ein leerer Bereich wird nicht mehr als erfolgreich eingebetteter Slicer angezeigt.
- Diagnose: Protokolliert den Programmpfad, die PID des Startprozesses, das Einbettungsergebnis und unerwartete Electron-Unterprozessabbrüche, um UI-Fehler von Orca-Prozessabbrüchen zu unterscheiden.

## v2.0.128
- Bettnetz: Dichte Netze nutzen den verfügbaren Platz besser, ohne zu einer winzigen Rasterdarstellung zu schrumpfen. Überlappende Zellwerte werden ausgeblendet; fünf Achsenmarkierungen bleiben sichtbar, und beim Überfahren erscheinen X/Y-Koordinaten sowie die Z-Höhe.
- Snapmaker Orca: Die Suche nach dem nativen Fenster wartet bis zu 90 Sekunden und erkennt delegierte OrcaSlicer-/Snapmaker-Prozesse im Installationsordner. Das Electron-Zeitlimit verhindert einen vorzeitigen Abbruch.

## v2.0.127
Verhindert, dass veraltete asynchrone G-Code-Lesevorgänge den aktiven Druck nach einem Drucker- oder Datewechsel überschreiben. Veraltete Abfrageantworten werden verworfen und Telemetrie-Caches nach Drucker-IP getrennt.

- Snapmaker Orca: Behebt das Zeitlimit des nativen Integrationsprozesses. Das Windows-Skript konnte bis zu 35 Sekunden auf das echte Fenster warten, während Electron es nach 25 Sekunden beendete. Dadurch blieb das Bedienfeld bei „Snapmaker Orca wird vorbereitet“ stehen. Das Zeitlimit ist jetzt länger als die maximale Wartezeit des Skripts.
- Bettnetz: Ersetzt die verzerrte 3D-Fläche durch eine Draufsicht als Heatmap mit Z-Werten an jedem Messpunkt, X/Y-Achsen in Millimetern und gut lesbarer Farbskala. Perspektive und verzerrende Drehsteuerung wurden entfernt.

- U1-Kommunikation: Ein dauerhaft laufender Hintergrundprozess fragt Moonraker ab und teilt seinen Cache zwischen den Registerkarten; ein Abschnittswechsel startet keine neue Verbindungsabfrage. Die Auswahl oder Erkennung eines anderen Druckers startet nur diesen Prozess neu.
## v2.0.124
- Behebt einen JavaScript-Gültigkeitsbereichsfehler beim Zuweisen einer neu erstellten Spule im U1-Monitor. Die Aktion verwendet jetzt die zentrale Übersetzungs-API und bricht nach dem Erstellen und Zuweisen nicht mehr ab.

## v2.0.123
- Korrigiert das Einlesen von Rechnerbeträgen mit Komma- oder Punktdezimaltrennzeichen bei der Registrierung über den U1-Monitor. Dadurch werden Arbeitszeit, Extras und andere Komponenten nicht mehr durch das regionale Zahlenformat zu null.
- Speichert Arbeitszeit und Extras unter kompatiblen Schlüsseln (`laborAndExtras`, `labor`, `extras`); die Buchhaltung kann neue und ältere Bewegungen lesen.
- Verbessert die native Snapmaker-Orca-Einbettung: Erkennt auch Hauptfenster, deren Prozess sich vom Starter getrennt hat, bevorzugt Snapmaker-/Orca-Titel, stellt das eingebettete Fenster wieder her und positioniert das Bedienfeld beim Verschieben oder Ändern der App-Größe neu.
- Gibt den Titel des eingebetteten Fensters zur Überprüfung zurück.

## v2.0.122
- Ändert die Snapmaker-Orca-Integration: Das native Slicerfenster wird direkt als untergeordnetes Fenster des Hauptfensters von Print Cost & Profit eingebunden; ein separates überlagertes Hostfenster wird nicht mehr erstellt.
- Positioniert den nativen Bereich im Arbeitsbereich der Anwendung und passt seine Größe bei Größenänderungen des Hauptfensters an.
- Ein-/Ausblenden positioniert das native Fenster im eingebetteten Bereich neu; das Trennen von Orca bleibt eine bewusste Aktion.
- Entfernt den bisherigen Weg, durch den Orca als separates Fenster statt im Hauptfenster erscheinen konnte.

## v2.0.121
- Behebt das Einbetten des nativen Snapmaker-Orca-Fensters, indem auch vom Starter erzeugte Kindprozesse gefunden und auf das sichtbare Hauptfenster gewartet wird.
- Prüft vor der Anzeige, ob Windows das Orca-Fenster tatsächlich dem Hostbereich untergeordnet hat; bei Fehlern wird der leere Bereich ausgeblendet und eine sichtbare Meldung angezeigt.
- Verfolgt den tatsächlichen Orca-Prozess weiter, wenn der ursprüngliche Starter beendet wird, und passt die Größe des eingebetteten Fensters bei Größenänderungen an.
- Beim Schließen des Slicers wird der eingebettete Orca-Prozess beendet.

## v2.0.120
- Ergänzt einen Snapmaker-Orca-Bereich in der Desktop-App. Die ausführbare Datei kann ausgewählt und ihr natives Fenster unter Windows in einem App-Bereich eingebettet werden.
- Ergänzt Optionen zum Lösen und Schließen des Slicers; Orca-Profile werden nicht verändert.

## v2.0.120
- Ergänzt einen Snapmaker-Orca-Bereich in der Desktop-App mit Auswahl der ausführbaren Datei und Einbettung des nativen Fensters in ein App-Panel unter Windows.
- Ergänzt Optionen zum Lösen und Schließen des Slicers. Orca-Profile bleiben unverändert.

## v2.0.119
- Wiederherstellung nach Standby/Ruhezustand: Ausstehende SQLite-Schreibvorgänge werden erneut gestartet, veraltete Anfragen abgebrochen und der Zustand beim Zurückkehren synchronisiert.
- U1-Monitor: Verhindert überlappende Abfragen und aktualisiert den Druckerstatus nach dem Aufwachen oder bei erneut sichtbarem Fenster.

## v2.0.118
- Die Werkzeugkopfstatistik verwendet jetzt die persistenten Snapmaker-Zähler aus `extruder_switch_recorder.json`, abgefragt über Moonraker.
- Verwendet `switch_count`, `error_count`, `retry_count` und bei zugänglicher Datei `fan_error_count`.
- Entfernt irreführende Log-Text-Auswertungen; die dritte Kennzahl zeigt echte Wiederholungsversuche.

## v2.0.116
- Bettnetz: ergänzt numerische X/Y-Referenzen und fünf Z-Skalenmarkierungen anhand der vom Drucker gemeldeten physischen Abmessungen.
- Werkzeugkopfstatistik: entfernt Zählungen anhand von T0/T1-Erwähnungen oder einzelnen Schlüsselwörtern; gezählt werden nur explizite Aktivierungen und Fehler mit exakt passendem Extrudernamen.
- Alte Statistiken werden verworfen; ohne eindeutigen Nachweis wird „—“ angezeigt.

## v2.0.115
- Das 3D-Netz nutzt die volle Breite und zeigt alle Punkte ohne Beschnitt mit X/Y-Markierungen.

## v2.0.114
- Fügt die 3D-Darstellung des Bettnetzes tatsächlich in die Detailansicht jedes Druckers ein und verwendet die von Klipper/Moonraker veröffentlichte Matrix.
- Zeigt Abmessungen, Höhenskala, Minimum, Maximum und Bereich; meldet klar, wenn keine gültige Matrix vorhanden ist.

## v2.0.113
- Die Kopfstatistik zählt T0/T1-Befehle nicht mehr als physische Kopfwechsel. Werte werden nur bei ausdrücklich bestätigenden Ereignissen angezeigt; allgemeine Fehler werden nicht mehr pauschal jedem Kopf zugeordnet.
- Die Bettnivellierung zeigt jetzt eine 3D-Darstellung der tatsächlichen Bettnetzmatrix mit Höhenskala, Bereich sowie Minimal- und Maximalwerten.

## v2.0.112
- Filamentinventar: Für jede gruppierte Spule können die Restgramm einzeln gespeichert werden, ohne das kompakte Kartendesign zu verändern.
- U1-Monitor: addiert den Bestand kompatibler Spulen nach Material und Farbe und verteilt den Verbrauch unter Berücksichtigung der Einzelgewichte.

## v2.0.111
- Bei aus der Buchhaltung erstellten Aufträgen wird das Formular mit Kunde, Beschreibung, ausgewählten Arbeiten und Betrag vorausgefüllt; gespeichert wird erst nach Klick auf „Auftrag speichern“.
- Verhindert in diesem Ablauf leere Aufträge oder Aufträge mit Betrag null.

## v2.0.111
- Die Buchhaltungstabelle passt sich ohne horizontales Scrollen an die verfügbare Breite an.
- Mehrfachauswahl bleibt beim Aktualisieren und Synchronisieren erhalten.

## v2.0.109
- Buchhaltung: Mehrfachauswahl von Buchungen einschließlich eigener Ausgaben; Übertragung in den Rechner sowie Erstellung von Angeboten, Rechnungen oder Aufträgen. Eigene Ausgaben bleiben interne Kosten und werden nicht automatisch berechnet.

## v2.0.108
- Korrigiert die Dokumentauswahl in Aufträgen: Bei Auswahl eines gespeicherten Angebots werden Produkt, Kunde und tatsächlicher Gesamtbetrag übernommen; bei Mengenänderung wird neu berechnet und beim Speichern erneut geprüft. Rechnungen aus Aufträgen behalten Positionen und Beträge des Angebots.
- Verhindert doppelte Kunden beim Speichern aus Kundenverwaltung, Aufträgen oder Rechnungen durch Abgleich von E-Mail, Telefon, Steuer-ID oder vollständiger Identität; exakte Duplikate werden unter Erhalt vorhandener Felder zusammengeführt.
- Neue Aufträge speichern eine Momentaufnahme des ausgewählten Kostenvoranschlags oder Angebots. Rechnungen aus Aufträgen verwenden diese Momentaufnahme mit ursprünglichem Kunden und Positionen. Ältere Aufträge ohne Momentaufnahme erzeugen keine Rechnung mit fremden Daten.

## v2.0.106
- Korrigiert die Werkzeugkopfstatistik: Globale Fehler und indirekte Erwähnungen werden nicht mehr einzelnen Extrudern zugeordnet. Es werden nur ausdrückliche Aktivierungen und Werkzeugwechselbefehle gezählt; ist ein Kopf nicht eindeutig erkennbar, zeigt die Oberfläche „—“ statt einer irreführenden Null.

## v2.0.105
- Korrigiert die Bestandsprüfung des Monitors, wenn identische Spulen im Inventar zusammengefasst sind: Der Gesamtbestand (Restmenge pro Spule × Anzahl) wird berechnet und der Verbrauch ohne doppelte Abbuchung auf die Einheiten verteilt.

## v2.0.103
- Behebt den Dialog zur Erfassung persönlicher Ausgaben/Aufträge des Monitors beim Öffnen aus der Buchhaltung: `app-10.css` wird global im Dokumentkopf geladen.

## v2.0.103
- Reduziert wiederholte Schreibvorgänge für `pcp_active_job_by_printer`: Der Monitor speichert den vollständigen Auftrag nicht mehr bei jeder Abfrage in SQLite. Echte Status-/Dateiänderungen werden sofort gespeichert; reine Laufzeitaktualisierungen höchstens alle 30 Sekunden.

## v2.0.103
- Verhindert Kartenflackern: Bei vorübergehenden Abfragefehlern bleibt der letzte gültige Status während erneuter Verbindungsversuche 90 Sekunden erhalten.
- Gespeichert werden nur stabile Druckeridentität und -konfiguration; der Online-/Offline-Status wird nicht mehr bei jeder Abfrage in SQLite geschrieben.
- Gespeicherte Drucker werden pro Sitzung nur einmal gelesen.
- Der Temperaturverlauf wird höchstens alle fünf Minuten gespeichert, um SQLite zu entlasten.

### v2.0.103
- Werkzeugkopfstatistiken bleiben je Drucker über Aktualisierungen und erneute Auswahl hinweg erhalten.
- Protokollereignisse werden genauer den Extrudern zugeordnet; überhöhte Zähler werden vermieden.
- Weniger wiederholte Schreibvorgänge entlasten die SQLite-Warteschlange.
- Gespeicherte Statistiken bleiben bei fehlgeschlagener Protokollabfrage sichtbar.

## v2.0.99
- Werkzeugkopfstatistiken werden automatisch geladen, sobald die Druckerdetails angezeigt werden.
- Protokolle werden über einen separaten Endpunkt geladen, der Status, Sensoren und Druckverlauf nicht erneut abfragt und den Monitor nicht stört.
- Fortschrittsfenster für die Druckersuche und das erstmalige Laden hinzugefügt.
- Eine redundante zweite Statusabfrage für den ausgewählten Drucker entfernt.

## v2.0.99
- Der localStorage-kompatible Speicher reiht SQLite-Schreibvorgänge nun asynchron per XHR ein, ohne die Oberfläche zu blockieren.
- Aufeinanderfolgende Änderungen desselben Schlüssels werden zusammengefasst und Vorgänge zur Verringerung von Versionskonflikten serialisiert.
- Bei 409-Konflikten werden Werte und Revisionen asynchron aktualisiert und kontrolliert erneut versucht.
- Die externe Synchronisierung überschreibt keine Werte mehr, deren Speicherung noch aussteht.

## v2.0.99
- Synchronisierung der Speicherrevisionen korrigiert: Werte und Revisionen werden gemeinsam aktualisiert, wodurch 409-Konflikte durch veraltete Revisionen vermieden werden.
- Ein kontrollierter Wiederholungsversuch für Schreib- und Löschvorgänge bei Änderungen in einem anderen Fenster hinzugefügt.
- Monitor-Telemetrie schreibt nur noch bei Statusänderungen oder Minutenfortschritt.
- Speicherung des Temperaturverlaufs von 9 auf 30 Sekunden reduziert.
- Protokoll-Zeitlimits angepasst und Wartezeit pro Datei begrenzt.

## v2.0.96
- Die reine Protokollliste wurde durch visuelle Statistik-Karten für jeden erkannten Werkzeugkopf ersetzt: Wechsel, Aktivierungen und zugehörige Fehler.
- Statistiken werden nur auf Anfrage geladen und belasten die regelmäßige Aktualisierung nicht.

## v2.0.95
- Versehentliches Schließen des Dialogs „Spule erstellen“ beim Rechtsklick auf Zahlenfelder behoben.
- Erkennung von Ebenendaten in Moonraker-Objekten verschiedener Drucker erweitert.
- Manuelles Laden von Klipper-Protokollen für Werkzeugkopfwechsel, Warnungen und Fehler hinzugefügt; Protokolle werden nur auf Anfrage geladen.

## v2.0.94
- Diagnosebereich „Von Drucker empfangene Daten“ und dessen JSON-Ausgabe entfernt.
- Regelmäßige Serialisierung und Aktualisierung der Diagnosedaten in der Oberfläche entfernt.
- Die Panel-API sendet die nur für diese Diagnose verwendete Liste erkannter Objekte nicht mehr.

## v2.0.93
- Neue kontrastreiche Temperaturpalette mit klar unterscheidbaren Farben.
- Dauerhafte Farbzuordnung pro Sensor über Sitzungen und Aktualisierungen hinweg.
- Vereinheitlichung der Verlaufsbezeichnungen, damit keine veralteten Namen in der Legende erscheinen.

## v2.0.92
- Dynamische Erkennung von Temperatursensoren und von Moonraker veröffentlichten Objekten statt modellabhängiger Festlisten.
- Abfrage in Gruppen für Drucker mit vielen Sensoren.
- Temperaturdiagramm und -karten basieren auf tatsächlich verfügbaren Messwerten; Lüfter ohne Temperaturmessung werden nicht eingezeichnet.
- Lüftergeschwindigkeit erkennen und anzeigen, wenn Moonraker entsprechende Daten bereitstellt.
- Bekannte Sensornamen werden übersetzt, unbekannte Firmware-Namen bleiben erhalten.

## v2.0.89 — Korrektur der Moonraker-Statistiken und des Temperaturdiagramms
- Summen werden aus `result.job_totals` gelesen, der Antwortstruktur von `/server/history/totals`; flache kompatible Antworten bleiben unterstützt.
- Aufträge, Druckzeit, Gesamtbetriebszeit und Filament werden angezeigt, sofern Moonraker sie liefert; Gesamtfilament wird in Metern angegeben.
- Breite, Skalierung und visuelle Hierarchie des Temperaturdiagramms und der Statistik-Karten wurden verbessert.

## v2.0.88 — Korrektur der Druckerstatistiken und Diagramme
- Gesamtdruckzeit und Auftragszahl stammen ausschließlich aus den offiziellen Moonraker-Gesamtwerten; die letzten 20 Aufträge werden nicht mehr als vollständiger Verlauf ausgegeben.
- Auftragsbalken verwenden Gesamtdauer, Druckdauer oder verfügbare Start-/Endzeiten.
- Das Temperaturdiagramm nutzt eine feste SVG-Skala, lesbare Beschriftungen und korrekte Proportionen.

## v2.0.85

### v2.0.87 — Neugestaltung der Druckerübersicht und Statistiken
- Das Raster zeigt alle erkannten Drucker einschließlich des Hauptdruckers mit höchstens vier Karten pro Zeile und responsivem Layout.
- Druckerkarten, technische Details und Produktionsstatistiken sind visuell getrennt.
- Das Temperaturdiagramm erhält eine °C-Skala, ein Raster und eine Zeitachse; aktuelle Druckdauer wird bei verfügbaren Verlaufsdaten dargestellt.
- Neue Texte sind in `js/traducciones.js` zentralisiert und in alle acht Sprachen übersetzt.

- Drucker: Raster mit bis zu vier Karten pro Zeile; der Hauptdrucker bleibt ebenfalls im Raster sichtbar.
- Eine Karte auswählen, um das aktive Gerät zu wechseln und seine vollständigen Details in einem separaten Bereich anzuzeigen.
- Detailansicht und Druckerkarten sind getrennt. Responsives Layout.
## v2.0.82
- Start der Druckersuche korrigiert: Entdeckungsparameter und interner Status sind jetzt korrekt deklariert.
- Fehlermeldung beim G-Code-Lesen korrigiert, die eine nicht definierte Übersetzungsfunktion aufrief.
- Zwei alte Blöcke entfernt, die außerhalb ihres Gültigkeitsbereichs auf den privaten Übersetzungsindex zugriffen; Neuaufbau über PCP_I18N.refresh().
## v2.0.81
- Drucker: Live-Karten für alle gefundenen oder gespeicherten Geräte mit Online-/Offline-Status, aktiver Datei und Fortschrittsbalken.
- Drucker: Der benutzerdefinierte Name zur IP-Adresse hat Vorrang; andernfalls wird der von der Maschine gemeldete Name/Hostname angezeigt.
- Drucker: Modell, aktuelle/gesamte Schichten und Zeiten werden ausgelesen, sofern Moonraker sie bereitstellt; keine feste Extruderanzahl wird vorausgesetzt.
## v2.0.80
- Buchhaltung: Die ausgewählte Seite bleibt beim erneuten Rendern erhalten; Seite 2 springt nicht mehr automatisch auf Seite 1 zurück.
- Buchhaltung: Einträge werden nach Datum und Uhrzeit absteigend sortiert, neueste zuerst und älteste zuletzt.
## v2.0.80
- Buchhaltung: Neue Einträge speichern einen echten Zeitstempel und zeigen die lokale PC-Zeit; ältere Einträge ohne Uhrzeit zeigen nicht mehr die falsche Zeit 01:00.
- Monitor: Die Schaltfläche wechselt je nach Panelstatus zwischen Anzeigen und Ausblenden und behält die richtige Beschriftung beim Sprachwechsel.
## v2.0.80
- Drucker: Der untere Hinweis wählt den Text jetzt direkt anhand der aktiven Sprache aus und wird bei einer Änderung der Dokumentsprache aktualisiert.
- Rechner: neues Desktop-Layout mit vier oberen Bereichen, Steuer- und Aufschlüsselungsfeldern in der zweiten Zeile, hervorgehobenem Gesamtbetrag sowie Vergleich und Aktionen in der dritten Zeile. Vorhandene IDs und Berechnungslogik bleiben erhalten.
## v2.0.80
- Die untere Informationsmeldung der Druckerseite wird beim Sprachwechsel jetzt ausdrücklich anhand des zentralen Wörterbucheintrags aktualisiert.
## v2.0.80
- Laden der Druckerübersetzungen korrigiert: Die Texte werden vor dem Aufbau der Sprachindizes in das zentrale Wörterbuch übernommen, auch für dynamische Elemente. Keine Änderungen an Moonraker oder den Extruderdaten.
## v2.0.80
- Übersetzungen des gesamten Druckerbereichs geprüft und korrigiert: Kopfzeile, Status, Identifikation, aktueller Auftrag, Temperaturen, Extruder, Heizbett, Bewegung, Software, Meldungen und empfangene Daten. Alle Texte sind für acht Sprachen in traducciones.js zentralisiert.
## v2.0.80
- Visuelle Neugestaltung der Druckerseite: obere Übersicht mit kreisförmiger Fortschrittsanzeige, aktiver Datei und wichtigen Zeitangaben.
- Temperaturbereich mit separaten Karten und Balken für jeden Extruder und das Heizbett; geeignet für Drucker mit einem oder mehreren Extrudern.
- Neue Texte zentral in allen acht Sprachen.
## v2.0.80
- Moonraker-Abfragen erkennen jetzt die verfügbaren Objekte jeder Maschine und lesen alle unabhängigen Extruder, das Heizbett, Bewegungsdaten und unterstützte Sensoren aus.
- Die Druckerseite zeigt jeden Extruder einzeln: einen bei Ein-Extruder-Druckern und vier bei der Snapmaker U1, sofern die Firmware sie bereitstellt.
## v2.0.80
- Der Bereich Drucker verwendet jetzt die vorhandenen Moonraker-Monitor-Endpunkte (/api/u1/printer und /api/u1/status) und zeigt Status, Fortschritt, Schichten, Zeiten, Temperaturen und Achsenpositionen an, sofern verfügbar.
- Der Verbindungsstatus wird nach jeder Abfrage aktualisiert; bei sichtbarem Bereich werden die Daten alle 3 Sekunden erneuert.
## v2.0.80
- SVG-Flaggen im Sprachauswahlfeld wie in der stabilen Version wiederhergestellt. Einzelner Selektor und zentrale Übersetzungen bleiben erhalten.
- PowerShell-Skripte werden mit UTF-8-BOM gespeichert, damit Windows PowerShell 5.1 Umlaute korrekt liest und der Bridge-Start nicht mehr an der Zeichenkodierung scheitert.

## v2.0.80
- Doppelte Erstellung des Sprachselektors entfernt; nur noch ein Modul ist dafür zuständig.
- Der Selektor wird nach den Anwendungsskripten eingebunden und bei erneutem Aufbau der Leiste wiederhergestellt.
- Zentrale Übersetzungen und alle acht Sprachen bleiben erhalten.

## v2.0.61
- Ein sichtbarer, dauerhafter Sprachauswahlschalter wird unabhängig von der bisherigen Einbindungslogik in der oberen Leiste ergänzt.
- Alle acht Sprachen und die zentrale Übersetzungslogik bleiben erhalten.

## v2.0.60
- Sprachwechsel korrigiert: Übersetzungen ersetzen nicht mehr den Inhalt von Steuerelementen und entfernen keine untergeordneten Elemente mit Ereignisbehandlern.
- Die Sprache wird in einem Durchlauf angewendet und die Auswahl gespeichert.
- Renderer-Diagnose und DevTools (Strg+Umschalt+I / F12) bleiben erhalten.

## v2.0.59
- Dauerhafte Protokollierung von JavaScript-Fehlern und des Electron-Renderer-Prozesses.
- Entwicklertools in der installierten Anwendung über Strg+Umschalt+I oder F12 aktiviert.
- Das Lizenzsystem bleibt deaktiviert.

## v2.0.38
- Stellt das Desktop-Layout des Rechners aus v2.0.26 wieder her und verhindert überlappende Kennzahlen und Kostenaufschlüsselungen in den Modi Persönlich und Verkauf.

## v2.0.36
- Sichere Rücknahme der Oberflächenänderungen aus v2.0.35; Wiederherstellung der Seite und des Verhaltens von v2.0.34.
- Wiederherstellung des vorherigen Rechnerlayouts. Funktionsmodule und Benutzerdaten bleiben unverändert.

## v2.0.34
- Behebt überlappende Ergebniskarten in den Modi Persönlich und Verkauf durch einen stabilen vertikalen Layoutfluss.
- Druckerlisten zeigen den gespeicherten benutzerdefinierten Namen ohne Offline-Status oder Firmware-Kennung.
- Normalisiert alte, auf Chinesisch gespeicherte Buchhaltungsmeldungen und zeigt sie mit übersetzbaren spanischen Texten an.
- Zentralisiert den Untertitel der Hinweise in allen acht Sprachen.

## v2.0.33
- Korrigiert das Raster des persönlichen Rechners: Das ursprüngliche 12-Spalten-Layout wird wiederhergestellt und Überlagerungen werden verhindert.
- Das Aktualisierungssymbol lädt jetzt die Seite neu, statt nach Programmupdates zu suchen.
- Benachrichtigungstitel und -nachrichten werden getrennt dargestellt.
- Details persönlicher Buchungen zeigen gespeichertes Filament, Strom, Abschreibung, Wartung, Gramm und Zeit.
- Ergänzt zentrale Übersetzungen für alle acht Sprachen.

## v2.0.32
- Korrigiert den Verweis auf das Rechner-Stylesheet, damit die Stile für fixierte Kopfzeile und persönlichen Modus geladen werden.
- Stellt das ursprüngliche Rechner-Raster wieder her und entfernt `display: contents`, das Bereiche verschoben und Überlagerungen verursacht hat.
- Verbessert das responsive Layout der Kennzahlen und Kostenpositionen.

## v2.0.31
- Der persönliche Modus zeigt Filament-, Strom-, Abschreibungs- und Wartungskosten; Verkaufspositionen und Extras werden ausgeblendet.
- Die Kopfzeile bleibt in allen Registerkarten am Bildschirm fixiert.
- Filamentmengen werden auf maximal zwei Dezimalstellen begrenzt.
- Beim Löschen einer Bewegung mit Filamentabzug wird das Filament zurückgebucht und eine Benachrichtigung erstellt.
- Neuer Kopfzeilen-Shortcut zum Suchen nach Updates und Öffnen des Downloads.

## v2.0.30
- Korrigiert das Spaltenlayout des Rechners im persönlichen Modus; das Seitenpanel behält `display: contents` bei.
- Aktualisiert die sichtbare Kopfzeilenversion auf 2.0.30.

## v2.0.29
- Buchhaltung: verhindert doppelte persönliche Ausgaben aus derselben in der Kalkulation markierten Bewertung.
- Die obere Kopfzeile bleibt beim Scrollen fixiert.

## v2.0.28
- Im persönlichen Modus bleibt das Ergebnisfenster sichtbar und zeigt nach der Berechnung Gesamt- und Stückkosten.
- Behebt das versehentliche Ausblenden der Ergebnisspalte.

## v2.0.27
- Im persönlichen Modus zeigt die Berechnung jetzt die tatsächlichen Stückkosten an, ohne einen Verkaufspreis von null anzuwenden.
- Der Preisvergleich wird im persönlichen Modus ausgeblendet.

## v2.0.26
- Im persönlichen Modus werden nur die Kosten der Blöcke 1, 2 und 3 berechnet; Arbeitskosten, Extras, Verpackung, Mindestgewinn, Marge und Steuern werden ausgeschlossen.
- Die obere Kopfzeile bleibt beim Scrollen fixiert.

﻿## v2.0.25
- Öffnen generierter PDF-Dokumente in Electron korrigiert: Das lokale `about:blank`-Fenster wird sicher zugelassen und lädt anschließend das PDF.
- Ersatzfehlermeldung aktualisiert und in acht Sprachen übersetzt.

## v2.0.24
- Geordnetes Beenden des von der Anwendung gestarteten lokalen Servers beim Schließen und vor Updates. Nur die verifizierte registrierte PID wird beendet; externe Server bleiben aktiv.

## v2.0.23
- Das Dashboard zeigt den tatsächlichen Druckfortschritt des ausgewählten U1-Druckers. Für andere Drucker wird kein Fortschritt erfunden.
- Verwendet den zwischengespeicherten Status der lokalen Bridge ohne zusätzlichen Suchlauf.
- Behält das stabile Startverhalten von 2.0.22 bei.

## v2.0.22
- Automatischer Start korrigiert: Electron überwacht Iniciar_Puente_Orca.ps1; dieses startet den dauerhaft laufenden Server mit Start-Process.
- stdout/stderr des Starters werden getrennt protokolliert; der direkte Start als abgekoppelter Electron-Prozess, der sofort endete, wird vermieden.
- Wartezeit des Supervisors auf 25 Sekunden begrenzt, ohne den unabhängigen Server zu beenden.
- Wiederholungen zum Entfernen der Programmdateien im Installer verbessert; Benutzerdaten, SQLite, Lizenzen und Sicherungen bleiben erhalten.

## v2.0.21 — Lokalen Server direkt aus Electron starten

- Wenn `/api/version` nicht antwortet, startet Electron `Servidor_Panel_U1.ps1` direkt als unabhängigen Prozess und speichert stdout-/stderr-Protokolle zur Diagnose.
- Bei einer abweichenden Serverversion bleiben der Wartungsstarter und seine Sicherheitsprüfungen erhalten.
- Die Oberfläche wird erst geöffnet, wenn `/api/version` die installierte Version bestätigt. SQLite und Benutzerdaten bleiben unverändert.

## v2.0.17 — Ladebildschirm beim Start
- Beim Start von Print Cost & Profit wird sofort ein Ladefenster angezeigt, bevor der lokale Server geprüft oder gestartet wird.
- Zeigt Vorbereitung, Prüfung des lokalen Servers und Öffnen der Anwendung an; das Ladefenster schließt sich, sobald das Hauptfenster angezeigt werden kann.
- Bei einem Startfehler wird der Ladebildschirm geschlossen und der vorhandene Fehlerbildschirm beibehalten.
- Die Texte sind in `js/traducciones.js` zentralisiert und in alle acht unterstützten Sprachen übersetzt.
- SQLite, Lizenzen, Sicherungen, Datenpfade und das Verhalten des lokalen Servers bleiben unverändert.

## v2.0.16 — Korrekte Erkennung der vorherigen Installation
- Korrigiert die Erkennung unter 64-Bit-Windows durch explizite Prüfung von `$PROGRAMFILES64` und `$PROGRAMFILES`.
- Der vorherige Dialog erschien nicht, weil die Prüfung möglicherweise `Program Files (x86)` statt `C:\\Program Files` verwendete.
- Wird die Programmdatei am bekannten Speicherort gefunden, fragt das Setup nach Bestätigung, entfernt nur diesen Programmordner und bereinigt die alten Installations-Registrierungsschlüssel.
- AppData, SQLite, Lizenzen, Sicherungen und lokaler Server bleiben unverändert.

## v2.0.15 — Korrektur des Installer-Builds
- Korrigiert das NSIS-Include für das vorherige Entfernen: `customHeader` und nicht expandierte benutzerdefinierte Variablen werden entfernt, die NSIS-Warnung 6001 ausgelöst hatten.
- `customInit` verwendet direkt den exakten alten Pfad `C:\\Program Files\\print-cost-profit-desktop`, prüft die Programmdatei, fragt nach Bestätigung und bricht ab, falls der Ordner nicht entfernt werden kann.
- Entfernt die alten Installations-/Deinstallations-Registrierungsschlüssel, damit NSIS den fehlerhaften alten Deinstaller nicht erneut startet.
- Lokaler Server und Benutzer-/SQLite-Datenpfade bleiben unverändert.

## v2.0.14 — Kontrolliertes Entfernen der vorherigen Installation
- Ergänzt eine NSIS-`customInit`-Routine, die die registrierte vorherige Installation erkennt und nur dann, wenn sie `C:\\Program Files\\print-cost-profit-desktop` entspricht und die erwartete Programmdatei enthält, um Bestätigung bittet und anschließend die Programmdateien vor der Installation entfernt.
- Kann der Ordner nicht entfernt werden, wird die Installation abgebrochen, damit keine Versionen vermischt werden.
- Führt das alte Deinstallationsprogramm nicht aus, das fälschlich meldete, die Anwendung sei geöffnet.
- Löscht weder AppData/LocalAppData noch ändert es SQLite, Lizenzen, Sicherungen oder den lokalen Server.

## v2.0.13 — Installation mit erhöhten Rechten in Program Files
- Konfiguriert NSIS für eine systemweite Installation (`perMachine`) mit Rechteerhöhung (`allowElevation`), damit Updates unter `C:\\Program Files` die erforderlichen Berechtigungen erhalten.
- Entfernt das benutzerdefinierte NSIS-Löschskript aus v2.0.12: Dessen direkte Löschmakros behoben die Sperre nicht und konnten den gesamten Zielordner löschen.
- Lokaler Server, SQLite-Datenbank und Speicherort der Benutzerdaten bleiben unverändert.

## v2.0.12 — NSIS-Installationskorrektur
- `builder-debug.yml` bestätigt, dass `customCheckAppRunning` im erzeugten NSIS-Skript fehlt; die Korrektur aus v2.0.11 wurde daher nicht ausgeführt.
- Verwendet stattdessen die unterstützten Hooks `customUnInstallCheck` und `customRemoveFiles`, um die problematische atomare Entfernung der vorherigen Installation zu umgehen.
- Entfernt wird ausschließlich `$INSTDIR`; Benutzerdaten bleiben außerhalb dieses Ordners.

## v2.0.11 — Fehlerbehebung beim Schließen während der Aktualisierung
- Verwendet den NSIS-Hook `customCheckAppRunning`; der vorherige `customInit` fing den Installerhinweis nicht ab.
- Der Installer beendet ausschließlich Print Cost & Profit vor dem Ersetzen der Dateien.

## v2.0.9 — Fehlerbehebung beim Start der lokalen Bridge

- Die Bridge-Verfügbarkeit wird jetzt über `/api/version` geprüft; ein langsames Aktivitätsprotokoll verursacht keinen falschen Negativbefund mehr.
- Das Zeitlimit der Prüfung wurde erhöht, damit kein zweiter HTTP.sys-Server gestartet wird.
- Wenn HTTP.sys die URL weiterhin registriert, die Version aber nicht bestätigt werden kann, beendet der Starter sicher und protokolliert einen Diagnosehinweis; unbekannte Prozesse werden nicht beendet.
- Datenbank und Datenspeicherort bleiben unverändert.

## v2.0.8 — Windows-Build-Korrektur
- UTF-8-BOM aus `package.json` und JSON-Dateien entfernt, damit `@electron/rebuild` und `JSON.parse` sie korrekt lesen können.
- UTF-8 mit BOM in `Servidor_Panel_U1.ps1` beibehalten; dies wird von Windows PowerShell 5.1 für internationale Zeichen benötigt.
- JSON-Syntax geprüft und Version auf v2.0.8 aktualisiert.

## v2.0.7
- Verkaufsmodus (Standard) und Privatmodus (nur Ausgaben) mit schwebendem Erklärungshinweis hinzugefügt.
- Der Privatmodus schließt MwSt., Verkäufe, Provisionen, Arbeitskosten, Ausfallreserve und Gewinnberechnung aus.
- Buchungen verwenden den aktiven Snapmaker-Alias und eine stabile Druckerkennung, um doppelte generische U1-Drucker zu vermeiden.
- Dokumentation für breite Fenster angepasst; lokale Ersatzillustrationen bei fehlenden optionalen Galeriebildern.
- Neue Texte zentral in js/traducciones.js für alle acht Sprachen.

### v2.0.6 — Tatsächliche Druckstunden, Zähler ungelesener Hinweise und lokale Dokumentation
- Die Wartung summiert die vom U1-Monitor über `print_stats` gemeldeten tatsächlichen Druckstunden während laufender Drucke sowie nach Abschluss oder Abbruch.
- Schätzungen und Kalkulationen werden nicht als tatsächliche Maschinenstunden gezählt.
- Das rote Startseiten-Badge zählt nur ungelesene Hinweise; zuletzt gelesene Hinweise bleiben in der Liste sichtbar.
- Lokale HTML-Handbücher in allen acht Sprachen und korrigierte Ziele für Dokumentation und Hilfe.
- Alle neuen Texte sind in `js/traducciones.js` für die acht unterstützten Sprachen zentralisiert.

### v2.0.5 — Korrektur der PowerShell-Serverkodierung
- UTF-8-BOM für `Servidor_Panel_U1.ps1` hinzugefügt, damit Windows PowerShell 5.1 Nicht-ASCII-Zeichen korrekt liest.
- Parserfehler behoben, der den Start des lokalen Servers verhinderte.
- Sichtbare Version und Cache-Referenzen auf v2.0.5 aktualisiert.

### v2.0.4 — Korrektur von Desktop-Start und Installer
- Der lokale Serverstarter verwendet Start-Process als Ersatz, wenn WMI/CIM nicht verfügbar ist.
- stdout und stderr des Servers werden zur Diagnose im lokalen Protokollordner gespeichert.
- Der NSIS-Installer aktiviert ausdrücklich die Sprachauswahl, behält die Lizenzvereinbarung bei und erlaubt einen eigenen Installationsordner.
- Sichtbare Version auf v2.0.4 aktualisiert.

### v2.0.3 — Korrekturen für Hinweise, Buchhaltung und Lagerbestand
- Der Warnungsbereich auf Start verwendet dieselben aktiven Meldungen wie die Glocke.
- Beim Speichern einer Bewertung mit aktivierter Buchhaltung wird der Buchungssatz angelegt und G-Code-Filament von zugewiesenen Spulen abgezogen; inklusive Bestandsprüfung und Duplikatschutz.
- Der U1-Monitor verwendet denselben Spulenerstellungsdialog wie der Rechner.
- Wartungsaufgaben lassen sich nach Priorität, Intervall aufsteigend/absteigend oder Name sortieren.
- Der NSIS-Installer enthält Lizenzvereinbarung, Sprachauswahl und Installationsordnerauswahl.

### v2.0.3 — Benachrichtigungen bei Sicherungsfehlern

- Meldet auch Probleme bei der SQLite-Integritätsprüfung; die Meldung wird behoben, sobald die Prüfung wieder erfolgreich ist.
- Stellt klar, dass die Buchhaltungseinstellung Druckvorgänge mit bestätigtem Filamentabzug umfasst.
- Fügt eine eigene Einstellung für Benachrichtigungen hinzu, wenn das manuelle Erstellen oder Wiederherstellen einer Sicherung fehlschlägt.
- Sicherungsfehler werden je Vorgang dedupliziert und nach einem späteren erfolgreichen Vorgang als behoben markiert.
- Die Erkennung abgeschlossener U1-Drucke basiert nun auf dem bestätigten Buchungsstatus (`provisional=false`) statt auf lokalisiertem Bewegungstext.
- Lokale Einstellungen und Verlauf, Lagergrenzwerte und zentrale Übersetzungen in allen acht Sprachen bleiben erhalten.

### v2.0.1 — Benachrichtigungszentrale und Einstellungen

- Die Glocke öffnet eine zentrale Benachrichtigungsübersicht mit Zähler für ungelesene Meldungen, Verlauf, einzelnem oder globalem Gelesen-Markieren und Löschen gelesener Meldungen.
- Hinweise auf bevorstehende und fällige Wartungen; standardmäßig aktiviert.
- Filamentbestandsmeldungen je Spule und Farbe: standardmäßig 200 g, Schwellenwert nach Gramm, Spulenanzahl oder beiden Kriterien konfigurierbar.
- Buchhaltungshinweise für abgeschlossene oder abgebrochene U1-Drucke nur, wenn der Buchungseintrag einen tatsächlichen Filamentabzug bestätigt.
- Hinweise auf neue Programmversionen und separate Einstellungen je Kategorie. Einstellungen und Verlauf werden lokal gespeichert.

### v2.0.0 — Windows-Desktopanwendung

- Eigenes Desktopfenster: Print Cost & Profit öffnet sich ohne Browser-Tabs oder Adressleiste.
- Die vorhandene Oberfläche, der lokale Server, die SQLite-Datenbank, der Datenpfad und die Orca/U1-Integration bleiben erhalten.
- Die Version der lokalen Verbindung wird vor dem Öffnen geprüft; eine andere Serverversion wird nicht verwendet.
- Desktop-Start- und Fehlermeldungen werden in `js/traducciones.js` für alle acht Sprachen ergänzt.
- Der Windows-Installer-Buildprozess wird ergänzt. Die ausführbare Datei muss noch unter Windows erstellt und abschließend getestet werden.

### v5.58
- Wartungsbereich neu angeordnet: kompakte Aufgaben über die volle Breite, einklappbare Pflegetipps darunter und Formular über die volle Breite. Responsives Layout.

### v5.57
- RTL-PDF: Horizontale Spiegelung asymmetrischer Grafikelemente (Summenlinie und grüner Gesamtbetrag-Balken) korrigiert, damit arabische Beschriftungen und Beträge korrekt sitzen. Die Steuerbeschriftung verwendet jetzt den zentralen Übersetzungsschlüssel für alle acht Sprachen.

### v5.56
- Rechnungs- und Angebots-PDFs: Die auf Helvetica/WinAnsi beschränkte Kodierung wurde durch hochauflösende Unicode-Ausgabe mit eingebetteten Noto-Schriften für Arabisch und Chinesisch ersetzt. Die PDF-Erstellung bleibt lokal und unabhängig vom Standardbrowser und installierten Systemschriften.

### v5.55
- Fehler im Benachrichtigungsbereich behoben: Filament- und Wartungshinweise überschreiben sich nicht mehr und verschwinden nicht mehr bei der Aktualisierung des Dashboards.

### v5.53
- U1-Server: PowerShell-Parserfehler beim Aufbau von Moonraker-Abfragen mit `&` behoben; Trennzeichen werden sicher zusammengesetzt. Skript mit UTF-8-BOM für Windows PowerShell 5.1 gespeichert, damit polnische Zeichen korrekt angezeigt werden.

- U1-Monitor: Zeitlimit für Statusabfragen auf 8 Sekunden und Browser-Wartezeit auf 10 Sekunden erhöht. Dadurch wird ein Drucker bei langsamer Statusantwort nicht fälschlich als offline gemeldet, wenn das G-Code-Lesen funktioniert.

### v5.51
- Wartung: PRO-Kennzeichnung entfernt und Registerkarte direkt unter Buchhaltung verschoben.
- Wartungsübersicht, Karten, Kennzahlen, Formulare und Verlauf optisch überarbeitet und für kleine Bildschirme angepasst.
- Vorbeugende Prüfungen für Hotend, Düsenverschleiß, Heizung/Thermistor, Extruder, Riemen, Lüfter, Druckbett, Sensoren und Verkabelung ergänzt.
- Erkennung der Modellfamilien Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro und Bambu Lab korrigiert.
- Neue Wartungsaufgaben werden bestehenden Druckern hinzugefügt, ohne Betriebsstunden, eigene Aufgaben oder Verlauf zu löschen. Allgemeine Intervalle sind Richtwerte und bearbeitbar.
- Zentrale Übersetzungen für alle acht Sprachen aktualisiert.

### v5.50
- Neuer PRO-Wartungsbereich mit Druckerauswahl, Stundenerfassung, zeit- und stundenbasierten Aufgaben, Fälligkeitswarnungen, eigenen Aufgaben und Wartungsverlauf.
- Dokumentierte Startpläne für Snapmaker U1/J1/Artisan, Creality K2 Pro, Prusa MK4S, Flashforge Adventurer 5M Pro, Anycubic Kobra 2 Pro/Kobra 3 und ELEGOO Neptune 4 Pro. Bambu Lab und übrige Modelle verwenden eine anpassbare allgemeine Vorlage. Für andere Modelle gilt eine anpassbare allgemeine Vorlage, die anhand des Handbuchs geprüft werden muss.
- Übersetzungen für Oberfläche, Dialoge und Aufgaben in allen acht Sprachen.

### v5.49
- Startseite: Der Druckermonitor zeigt jetzt den für jede IP gespeicherten benutzerdefinierten Namen statt des Netzwerknamens an, sofern ein Alias vorhanden ist.

### v5.48
- Rechner: Der Bereich „01 · Teiledaten“ nimmt jetzt immer die volle Zeilenhöhe ein und entspricht damit den Filament- und Kostenbereichen.

### v5.47
- Rechner: Die Spalte „Filament nach Farbe/Material“ wird verbreitert und „Zusätzliche Kosten“ auf großen Bildschirmen verschmälert. Die übrigen Spalten und das responsive Layout bleiben erhalten.

### v5.46
- Startseite: Das Druckerfeld behält eine feste Höhe und erhält bei weiteren Geräten einen vertikalen Bildlauf. „Monitor öffnen“ führt direkt zu Optionen, zur Druckerverbindung und zu „Automatisch suchen“.

### v5.45
- Startseite: Das Druckerfeld zeigt erkannte Geräte und unterscheidet verbunden, offline und nicht überprüft. „Monitor öffnen“ stellt den eigentlichen Monitor wieder her und scrollt dorthin.

### v5.44
- Buchhaltung: Die Spalte „Betrag/Kosten“ wurde schmaler und die Tabellenschrift etwas größer gestaltet.

### v5.43
- Buchhaltung: Die Spalten „Eingenommen“ und „Gewinn“ wurden verkleinert und alle neun Verlaufsspalten neu ausbalanciert. Kontrast, Ausrichtung und Detaildarstellung verbessert.

### v5.42
- Buchhaltung: Die Tabellenüberschriften wurden zu „Eingenommen“ und „Gewinn“ verkürzt; alle neun Spalten bleiben erhalten.

### v5.41
- Buchhaltung: größere Schrift in Verlauf, Filtern und Schaltflächen. Referenzdetails bleiben beim Aktualisieren der Tabelle geöffnet.

### v5.40
- Visuelle Neugestaltung der Buchhaltung passend zum Start-Dashboard: Karten, Kennzahlen, Filter, Formular und Verlauf mit klarerer visueller Hierarchie. Bestehende Funktionen und Seitennavigation bleiben erhalten.
### v5.39 — Visuelle Neugestaltung der Buchhaltung
- Passt die Buchhaltung an die Gestaltung des Start-Dashboards an: mehrschichtige Hintergründe, leuchtende Akzente und einheitliche Karten.
- Verbessert die visuelle Hierarchie der Kennzahlen und Analysebereiche.
- Überarbeitet Bewegungsformular und Verlauf, ohne Steuerelemente oder Buchhaltungslogik zu ändern.
- Verbessert die Darstellung auf unterschiedlichen Bildschirmbreiten.

### v5.38 — Neugestaltung der Buchhaltung
- Überarbeitete visuelle Hierarchie für Rentabilität, Kennzahlen und Diagramme.
- Kompakteres und besser gruppiertes Bewegungsformular.
- Buchhaltungshistorie mit ausgewogenen Spalten, hervorgehobenen Beträgen, aufklappbaren Referenzen und übersichtlicheren Suchfunktionen.
- Berechnungs-, Speicher-, Bearbeitungs-, Lösch- und Exportlogik bleiben unverändert. Keine neuen Felder oder Dialoge.

### v5.37 — Fehlerbehebung der Spulen-Paginierung
- Karten außerhalb der aktuellen Seite werden auch dann ausgeblendet, wenn Theme-Stile dies überschreiben.
- Der Bestand zeigt genau 8 Spulen pro Seite (Desktop: 4 Spalten × 2 Zeilen).
- Suche, Filter und Bearbeitung bleiben erhalten.

### v5.36 — Seitennavigation im Filamentlager
- Die Seitennavigation der Lagerkarten wurde korrigiert: Pro Seite werden jetzt genau 8 Spulen statt des gesamten Bestands angezeigt.
- Die Schaltflächen Zurück/Weiter und die Seitenanzeige funktionieren wieder; das vier-spaltige Raster und die Suche bleiben erhalten.
- Bestandsdaten, Gramm-Bearbeitung und übrige Lagerfunktionen bleiben unverändert.

### v5.35 — Grammgenauigkeit im Lagerbestand
- Die verbleibende Filamentmenge pro Spule wird mit maximal zwei Dezimalstellen angezeigt; das bearbeitbare Feld verwendet Schritte von 0,01 g. Der gespeicherte Wert bleibt unverändert, bis das Feld bearbeitet wird.

### v5.23 — Professionelle Neugestaltung von Verkauf, Lager und Buchhaltung
- Angebote, Aufträge und Rechnungen erhalten visuelle Kopfbereiche, übersichtliche Formulare, dunkle Eingabefelder und besser lesbare Tabellen. Bestehende Aktionen und Abläufe bleiben erhalten.
- Die Filamentbestandsverwaltung erhält ein klareres Formular, Spulenkarten, Restmaterialanzeigen und Bearbeitungsfunktionen.
- Die Buchhaltung wird optisch an das Start-Dashboard angepasst, einschließlich Rentabilitätskarten und Bewegungsübersichten.
- Verbesserte Darstellung auf schmalen Bildschirmen. Daten, SQLite-Struktur und Geschäftslogik bleiben unverändert. Es wurden keine neuen Oberflächentexte hinzugefügt.

### v5.22 — Professionelle Neugestaltung des Kundenbereichs
- Der Kundenbereich wurde mit einer visuellen Kopfzeile, einem übersichtlicheren Formular, dunklen Feldern passend zur Startseite und klarer priorisierten Bedienelementen neu gestaltet.
- Das Notizfeld erscheint nicht mehr als natives weißes Feld, sondern übernimmt das dunkle Design und den Stil der übrigen Felder.
- Die Kundenübersicht verwendet kompakte, besser lesbare Karten ohne unnötige Leerhöhe. Suche, Bearbeiten, Speichern und Löschen sowie die Wiederverwendung in Angeboten, Aufträgen und Rechnungen bleiben erhalten.
- Keine Änderung an SQLite-Daten oder Schema. Keine neuen Oberflächentexte.

### v5.21 — Einheitliche Ausrichtung der Optionen
- Alle Optionsbereiche verwenden jetzt dieselbe volle Breite mit einheitlicher Ausrichtung und Abständen; die großen Leerflächen neben Währung und Darstellung wurden entfernt.
- Formulare behalten zwei Spalten zur besseren Raumnutzung; breite Felder und ganze Bereiche erstrecken sich über die volle Breite. Auf kleinen Bildschirmen werden sie einspaltig angeordnet.
- Steuerelemente, gespeicherte Daten und Übersetzungen bleiben unverändert; die SQLite-Datenbank wird nicht geändert.

### v5.20 — Professionelle Neugestaltung der Optionen und Korrektur der einklappbaren Bereiche
- Die Registerkarte Optionen wurde mit kompakten Karten in zwei Spalten, klarerer Hierarchie und einem an die Startseite angepassten Stil neu gestaltet; Drucker, Sicherungen, Profile und Aktivitätsprotokoll behalten bei Bedarf die volle Breite.
- Die Schaltflächen „Felder anzeigen“ und „Felder ausblenden“ wurden repariert und klappen den Inhalt jetzt tatsächlich ein und aus; der barrierefreie Status wird ebenfalls aktualisiert.
- Vorhandene Felder, Steuerelemente, Sortier- und Einklapp-Einstellungen, Übersetzungen und gespeicherte Daten bleiben erhalten. Die SQLite-Datenbank wird nicht verändert.

### v5.19 — Korrektur der Tab-Isolierung
- Die CSS-Regel von Optionen, die das Ausblenden inaktiver Tabs überschrieben hat, wurde korrigiert.
- Optionen wird nur noch bei Auswahl angezeigt; Startseite, Rechner, Kalkulationen und alle übrigen Bereiche bleiben korrekt getrennt.
- Layout, Steuerelemente und vorhandene Daten bleiben erhalten.

### v5.18 — Korrektur des Optionslayouts
- Das verschachtelte Raster, das leere Bereiche zwischen den Abschnitten verursachte, wurde entfernt. Die Optionen werden nun in einem durchgängigen Layout über die gesamte Breite angezeigt.
- Währung und Steuern sowie Druckerprofile nutzen die verfügbare Breite; Felder und Profilkarten sind sauber ausgerichtet.
- Steuerelemente, Daten sowie Ein- und Ausklappen und Sortieren der Abschnitte bleiben erhalten.

### v5.17 — Neugestaltung der Optionen
- Ordnet die Optionen in einem kompakten Kartenraster mit klarerer visueller Hierarchie und einem zum Startbildschirm passenden Stil an.
- Entfernt den doppelten Container der Verkäuferdaten.
- Alle Bereiche, Steuerelemente sowie Ein- und Ausklappen und Sortieren bleiben erhalten. Das Aktivitätsprotokoll zeigt weiterhin die 50 neuesten Einträge, ohne den Verlauf zu löschen.

## v5.16
- Optionen mit Karten und Bedienelementen passend zum Start-Dashboard neu gestaltet. Das Aktivitätsprotokoll zeigt die 50 neuesten Ereignisse; der vollständige Verlauf bleibt lokal gespeichert.
- Auch der kleine doppelte Text unter dem Titel „Rechner“ wurde entfernt; Titel und Symbol bleiben erhalten.
- Die Sprachflaggen verwenden jetzt eingebettete SVG-Bilder und sind nicht mehr von Windows-Emoji-Schriftarten abhängig.
- Der doppelte kleine Text unter dem Titel der Registerkarte „Kostenschätzungen“ wurde entfernt. Die eigene Beschreibung bleibt erhalten.
- Sprachauswahl korrigiert: Neben der ausgewählten Sprache wird jetzt eine sichtbare Flagge angezeigt, die beim Sprachwechsel aktualisiert wird.
- Visuelle Überarbeitung des Schätzungs-Tabs mit hervorgehobener Kopfzeile, gruppierten Filtern und gestalteten Verlaufseinträgen passend zum Dashboard.
- Die Sprachauswahl zeigt jetzt neben jeder Sprache die passende Flagge an.
- Der Schnellzugriff „Schätzungen“ wurde durch „Bestellungen“ ersetzt. Der Bereich „Letzte Schätzungen“ auf der Startseite und der Schätzungen-Tab bleiben erhalten.
- Der äußere Leuchteffekt der Rechnerbereich-Symbole wurde deutlich reduziert. Farben, Größe und Linien bleiben erhalten.
- „Kostenvoranschläge“ wird mit Neon-Symbol und direktem Zugriff auf den vollständigen Verlauf zu den Schnellzugriffen auf der Startseite hinzugefügt.

## v5.6
- Das Vektor-Rechnersymbol in der Registerkartenüberschrift wurde wiederhergestellt. Der Leuchteffekt der Bereichssymbole wurde für eine angenehmere Darstellung reduziert; Größe, Konturen und Farben bleiben erhalten.

## v5.5
- Stellt auf der Startseite den Bereich „Letzte Kalkulationen“ mit den vier zuletzt gespeicherten Kalkulationen und einem direkten Zugriff auf den vollständigen Verlauf im Tab „Kalkulationen“ wieder her.

## v5.4
- Der Leuchteffekt der Symbole in den Rechnerbereichen wurde für bessere Lesbarkeit reduziert; Größe und Neonstil bleiben erhalten.

## v5.3
- Fügt unter „Rechner“ eine eigene Registerkarte „Kalkulationen“ mit passendem Neon-Vektorsymbol hinzu.
- Verschiebt den vollständigen Kalkulationsverlauf in diese Registerkarte und entfernt die Liste der letzten Kalkulationen samt Verknüpfung aus der Startseite.
- Bestehende Speicherung, Datensätze sowie Suchen, Sortieren, Vergleichen, Laden und Löschen bleiben erhalten.
- Ergänzt die neuen Beschriftungen in `js/traducciones.js` für alle acht Sprachen.
- Reduziert leicht den Leuchteffekt der Neon-Symbole im Rechner, erhält dabei den Lichteffekt und verbessert die Lesbarkeit.

## v5.1
- Behebt überlagerte Symbole, indem die geerbte Maske entfernt wird, die ein zweites Symbol unter dem Neon-Icon zeichnete.
- Vergrößert Rahmen und Symbol leicht und behält den cyan-, blau- und violettfarbenen Stil bei.
- Änderungen betreffen weder Berechnungen noch Felder, Layout oder Rechnerverhalten.

## v5.0
- Ersetzt die Textsymbole des Rechners durch gerahmte Vektor-Linienicons mit cyanfarbenem, blauem und violettem Neonleuchten passend zur Startseite.
- Vereinheitlicht die Symbole in Kopfzeile sowie Bauteil-, Filament-, Kosten-, Steuer-, Ergebnis- und Preisvergleichsbereichen, ohne Bedienelemente oder Berechnungen zu ändern.

## v4.9
- Verschiebt Druckeinstellungen (Zeit, Stückzahl, Fehlerreserve, Profil und Notizen) in den Steueraufschlüsselungsbereich; die Teilekarte behält Name, G-Code und Bild.

## v4.8
- Verhindert, dass die Karte „Teiledaten“ beim Import von G-Code mit vielen Farben übermäßig wächst: Der Erkennungs- und Lagerbericht erhält einen eigenen Scrollbereich.
- Ergänzt größere Neon-Symbole in den Rechnerbereichen mit cyanfarbenem, violettem und grünem Leuchten passend zum Startbildschirm.
- Berechnungen, Feld-IDs, Spulenzuordnung und G-Code-Import bleiben unverändert.

## v4.7
- Passt den Rechner besser an die freigegebene Vorlage an: Kartenproportionen, Ergebnishierarchie und Preisvergleich neben dem Aktionsbereich.
- Ordnet das geschätzte Ergebnis neu, hebt den Gesamtpreis hervor und entfernt den Leerraum, der die Kennzahlen verschoben hat.
- Korrigiert die Überschriftenausrichtung und verbessert die Feldanordnung auf großen und kleinen Bildschirmen.
- Berechnungen, Feld-IDs und G-Code-Import bleiben unverändert.

## v4.5
## v4.6
- Rechner neu gestaltet: Karten in zwei Reihen, Preisvergleich und Aktionen nebeneinander, keine überlagernde fixierte Werkzeugleiste.
- Druckkosten und zusätzliche Kosten visuell getrennt; Feld-IDs und Berechnungen bleiben erhalten.

- Gestaltet den Rechner-Tab mit Karten, klarerer visueller Hierarchie und besser sichtbaren Symbolen im professionellen Neonstil der Startseite neu.
- Ordnet die Bereiche für Werkstück, Filament, Kosten, Steuern und Ergebnisse in einem responsiven Raster an.
- Überarbeitet den Aktionsbereich und den Preisvergleich.
- Bestehende Felder, IDs, Berechnungen, G-Code-Import, Speicherung und Steuerelemente bleiben erhalten.

## v4.4
- Präzisiert die Speicherbestätigung, sodass sie eindeutig die SQLite-Datenbank dieses Computers nennt.
- Ergänzt Cache-Busting, damit der Browser die aktualisierten Übersetzungs- und Rechnerskripte lädt.

## v4.3
- Korrigiert die Navigation nach dem Senden eines G-Codes vom U1-Monitor: Jetzt wird der Rechner-Tab statt der Startseite geöffnet.
- Die importierten Daten bleiben geladen und das Teilefeld wird im Rechner angezeigt.

## v4.2
- Korrigiert die Meldung beim Speichern einer Kalkulation: Sie bestätigt nun die Speicherung in der SQLite-Datenbank dieses PCs.
- Präzisiert außerdem die Bestätigung beim Löschen des Verlaufs.
- Gespeichert wird weiterhin über den integrierten, localStorage-kompatiblen SQLite-Adapter; das Datenformat bleibt unverändert.

## v4.1
- Verschiebt den vollständigen Rechner in einen eigenen Tab „Rechner“.
- Preisvergleich, Fehlersimulator, Ergebnisse und Eingabefelder befinden sich jetzt in diesem Tab.
- Die Startseite behält Dashboard und Kennzahlen; „Neue Berechnung“ und „G-Code laden“ öffnen zuerst den Rechner.
- Bestehende Feld-IDs und Logik bleiben erhalten, damit Berechnungen und Funktionen weiterarbeiten.

## v4.0
- Behebt die Dokumentation unter Optionen: Alle acht README-Dateien werden in eigenständige, lokalisierte HTML-Seiten umgewandelt.
- Jede Sprache öffnet nun ihr eigenes HTML-Handbuch aus der Anwendung; der fehlerhafte Verweis auf nicht vorhandene Dateien wurde entfernt.
- Das arabische Handbuch verwendet RTL; alle Handbücher nutzen das dunkle App-Design.

## v3.9
- Ersetzt dekorative Symbole in der oberen Leiste durch funktionsfähige Schaltflächen im Neonstil für Warnungen, Dokumentation und Optionen.
- Die Glocke führt zum Warnungsbereich und zeigt die aktuelle Anzahl der Hinweise.
- Das Fragezeichen öffnet das Handbuch in der ausgewählten Sprache; die Pfade verweisen nun auf die enthaltenen lokalisierten README-Dateien.
- Das Zahnrad öffnet direkt den Optionen-Tab.

## v3.8
- Verbindet die Druckerüberwachung auf der Startseite mit dem tatsächlichen lokalen Bridge-Endpunkt `/api/u1/status`, statt Text aus einem möglicherweise ausgeblendeten Panel auszulesen.
- Zeigt Verbindung, Druckerstatus, aktive Datei und Druckfortschritt; meldet eine Unterbrechung, wenn Bridge oder Drucker nicht erreichbar sind.
- „Monitor öffnen“ aktualisiert den Status vor dem Öffnen der vollständigen Überwachung.
- Keine neuen Texte; vorhandene Zeichenfolgen aus traducciones.js werden wiederverwendet.

## v3.7
- Korrigiert die Kennzahlen der Startseite, sodass dieselbe Normalisierung und dieselben Regeln wie in der Buchhaltung verwendet werden.
- Nicht verbuchte Kalkulationen werden ausgeschlossen und doppelte Einnahmen aus älteren Aufträgen vermieden.
- Einnahmen, Kosten, Gewinn, Marge und Zahlungseingänge folgen nun denselben Kriterien wie die erweiterte Rentabilität.
- Es wurden keine neuen Oberflächentexte hinzugefügt.

## v3.6
- Vergrößert die Symbole der Hauptaktionen, KPI-Anzeigen, Seitennavigation und Schnellzugriffe leicht, damit sie besser erkennbar sind.
- Symbole und Beschriftungen sind getrennt, sodass ihre Größe ohne Änderung der Schrift oder Übersetzungen angepasst werden kann.
- Es wurden keine neuen Oberflächentexte hinzugefügt.

## v3.5
- Passt den Startseiten-Kopf an die bereitgestellte Vorlage an: „DEINE 3D-WERKSTATT“, Titel und Beschreibung links, Druckerbild rechts und fünf Aktionen am unteren Rand.
- Korrigiert Proportionen und Abstände, damit das Druckerbild weder Text noch Schaltflächen überlagert.
- Die fünf KPI-Karten, Diagramme, Rentabilitätsanzeige, Historie, Schnellzugriffe und rechte Seitenleiste bleiben mit ihren vorhandenen Daten und Funktionen erhalten.
- Es wurden keine neuen Oberflächentexte hinzugefügt; Übersetzungen bleiben für alle acht Sprachen in js/traducciones.js zentralisiert.

## v3.4
- Entfernt das „Snapmaker U1“-Schriftlogo aus der Mitte der Kopfzeile und ersetzt es durch einen Programmbereich mit den Schwerpunkten Kalkulation, Produktion und Rentabilität.
- Gestaltet Aktions- und Kennzahlenkarten hinsichtlich Größe, Hierarchie, Symbolen und Neonfarben näher an der freigegebenen Vorlage.
- Ersetzt die Kostenbalken durch ein Ringdiagramm mit Legende, Beträgen und Prozentwerten auf Grundlage der gespeicherten Daten.
- Bestehende Aktionen und Live-Daten bleiben erhalten; der neue Kopfzeilentext ist für alle acht Sprachen in traducciones.js zentralisiert.

- Das Startseitenraster wird in zwei unabhängige Bereiche aufgeteilt: Hauptinhalt und rechte Seitenleiste. Dadurch entstehen keine großen Lücken mehr durch die Höhe des Lagerbestands.
- Die Karten werden gemäß dem freigegebenen Entwurf angeordnet: fünf Kennzahlen, Diagramme und Rentabilität in einer Zeile, Verlauf und Schnellzugriffe darunter sowie Druckermonitor/Lager/Warnungen rechts untereinander.
- Das echte Snapmaker-U1-Foto wird freigestellt eingebunden; der weiße Rahmen entfällt und Neonlicht umgibt den Drucker, ohne ihn zu verdecken.
- Snapmaker-U1-Markenname in der Kopfzeile ergänzt. Vorhandene Funktionen und Datenquellen bleiben erhalten; keine neuen Übersetzungstexte.

## v3.1
- Ersetzt die generische Druckerillustration durch das für das Projekt bereitgestellte echte Foto des Snapmaker U1.
- Entfernt den weißen Fotohintergrund und integriert cyan- und violettfarbene Neon-Lichteffekte in Kopfbereich und Seitenleiste.
- Bedienfelder, Diagramme, Daten und funktionierende Schnellzugriffe bleiben erhalten; keine neuen UI-Texte oder Übersetzungsschlüssel.

## v3.0
- Startseite nach dem freigegebenen Entwurf neu gestaltet: 3D-Drucker als Titelmotiv, illustrierte Seitenleiste, einheitliche Kennzahlen und Drei-Zonen-Layout.
- Gesamt-Rentabilitätsanzeige mit lokal gespeicherten Einnahmen und Kosten ergänzt.
- Neue Texte zentral in `js/traducciones.js` hinterlegt und in alle acht Sprachen übersetzt.
- Rechner, Datensätze, Orca-Integration und U1-Monitor bleiben erhalten.

## v2.9
- Ergänzt Vektorillustrationen eines 3D-Druckers in der Seitenleiste und im Kopfbereich des Start-Dashboards.
- Gleicht KPI-Karten an und ordnet die Bereiche mit einem 12-Spalten-Raster und einheitlichen Höhen neu.
- Verbessert die Darstellung auf kleinen Bildschirmen, ohne Bedienelemente zu verdecken.

## v2.8
- Startseite mit Dashboard-Kennzahlen, Diagrammen, letzten Aufträgen, Filamentbestand, Schnellzugriffen und Warnungen neu gestaltet.
- Lokale Daten werden gelesen; bestehende Funktionen bleiben erhalten.
- Neue Texte zentralisiert und in acht Sprachen übersetzt.

### v2.7 — Vereinfachte Buchhaltung und überarbeitete Bewegungsübersicht
- Entfernt die doppelte Zusammenfassung privater Ausgaben und Aufträge, die bereits in der erweiterten Rentabilität enthalten ist.
- Entfernt die doppelte Druckerzusammenfassung.
- Das Formular zum Hinzufügen von Buchungen und der vollständige Verlauf bleiben erhalten.
- Tabellenüberarbeitung mit ausgewogenen Spalten, ausgerichteten Beträgen, klaren Typkennzeichnungen und aufklappbaren langen Referenzen.
- Keine neuen UI-Texte: „Details anzeigen“ verwendet die vorhandene Übersetzung in allen acht Sprachen.

### v2.6 — Korrektur der sichtbaren Überschriften im erweiterten Rentabilitätsbereich
- Korrigiert Übersetzungen von Überschriften mit dekorativen Symbolen, die zuvor keine exakte Wörterbuchübereinstimmung fanden.

### v2.5 — Prüfung und Korrektur der Übersetzungen der erweiterten Rentabilität
- Ergänzt fehlende Texte im erweiterten Rentabilitäts-Dashboard, einschließlich Margenstatus, Untertitel, Legenden und Erläuterungen.
- Bündelt die neuen Übersetzungen in `js/traducciones.js` für alle acht unterstützten Sprachen.
- Verhindert doppelte Wörterbuchschlüssel.

### v2.4 — Korrektur erhaltener Zahlungen bei U1-Aufträgen
- Über den U1-Monitor bestätigte Aufträge speichern den vom Benutzer eingegebenen Betrag zusätzlich als verbuchten Zahlungseingang, getrennt vom geschätzten Umsatz.
- Zahlungseingänge aus U1-Aufträgen älterer Versionen werden wieder berücksichtigt, ohne Aufträge erneut anzulegen oder vorhandene Buchungen zu ändern.
- Verhindert, dass Zahlungen eines Auftrags doppelt gezählt werden.

### v2.3 — Fazitkarten in einer Zeile
- Zeigt die vier Karten für rentabelsten Drucker, Hauptkosten, beste Marge und analysierten Zeitraum auf breiten Bildschirmen in einer horizontalen Reihe.
- Behält die Zeitraum-Erkenntnisse als hervorgehobene separate Karte bei und passt das Layout an Tablets und Smartphones an.

### v2.2 — Visuelles Dashboard für erweiterte Rentabilität
- Gestaltet die erweiterte Rentabilität als Dashboard mit Kennzahlen, Sechs-Monats-Verlauf, Kostenverteilung, Margenanzeige und Druckervergleich.
- Dynamische Diagramme basieren auf gespeicherten Buchungen; Zeitraum- und Druckerfilter aktualisieren Kennzahlen und Vergleiche ohne doppelte Datensätze.
- Ergänzt Zeitraum-Erkenntnisse und verbessert responsives sowie RTL-Layout.
- Alle neuen Texte sind in `js/traducciones.js` zentralisiert und in acht Sprachen übersetzt.

### v2.1 — Dashboard für erweiterte Rentabilität
- Ergänzt nach Zeitraum und Drucker filterbare Analysen zu geschätzten Einnahmen, Kosten, Gewinn, Marge und erfassten Zahlungseingängen.
- Ergänzt Druckervergleiche und Kostenaufschlüsselung auf Basis vorhandener Daten ohne doppelte Buchungen.
- Verdeutlicht den Unterschied zwischen Schätzungen und bestätigten Zahlungseingängen.

## Versionsverlauf

### v2.0 — Vollständige Übersetzung des Aktivitätsprotokolls
- Module, Meldungen und Protokollstufen richten sich jetzt nach der ausgewählten Sprache, nicht nur Überschriften und Schaltflächen.
- JSON-Details verwenden übersetzte Bezeichnungen und behalten technische Diagnosewerte bei.
- Korrigiert die veraltete Versionsnummer in Fußzeile und Protokolldetails.
- Alle neuen Texte sind in `js/traducciones.js` für die acht unterstützten Sprachen zentralisiert.


### v1.9 — Erkennung und Neustart einer veralteten Bridge
- Der Starter prüft jetzt neben `/api/version` auch `/api/logs`.
- Wenn Port 8700 von einer älteren Print-Cost-&-Profit-Serverinstanz belegt ist, wird nur dieser Projektprozess neu gestartet, damit die neuen Routen geladen werden.
- Gehört der Port zu einer anderen Anwendung, wird diese nicht beendet und ein eindeutiger Fehler angezeigt.
- Manueller Start und Orca-Nachbearbeitung verwenden dieselbe Prüfung.


### v1.8 — Fehlerbehebung beim Erstellen des Aktivitätsprotokolls
- Korrigiert die Initialisierung und UTF-8-Schreibweise, damit die Protokolldatei beim Start des lokalen Servers erstellt wird.
- Unterstützt `localhost` und `127.0.0.1`.
- Die Anzeige zeigt den tatsächlichen Pfad der Protokolldatei.


### v1.7 — Zentralisiertes Aktivitäts- und Fehlerprotokoll
- Persistente lokale Protokollierung von JavaScript-Fehlern, unbehandelten Promise-Ablehnungen, SQLite-Fehlern und Aktivitäten wichtiger Oberflächenelemente.
- Neuer Protokollbetrachter unter Optionen mit Ebenenfiltern, Suche, JSON-Export und manueller Löschung.
- Protokolle werden außerhalb des Installationsordners in den lokalen Benutzerdaten gespeichert, automatisch rotiert und mit bis zu 500 sichtbaren Einträgen angezeigt.
- Formularwerte und sensible Daten werden nicht erfasst. Erzeugte Protokolldateien werden niemals in Distributions-ZIPs aufgenommen.
- Alle neuen Texte sind in `js/traducciones.js` zentralisiert und in acht Sprachen übersetzt.


### v1.3 — Übersetzungen des Lizenzsystems und Sprachunterstützung
- Fehlende Übersetzungen für Anmeldung, Authentifizierung und Lizenzabfrage werden in `js/traducciones.js` für Spanisch, Englisch, Französisch, Deutsch, Italienisch und Polnisch ergänzt.
- Die festen Texte des globalen Dialogs („Hinweis“ und „Akzeptieren“) verwenden das zentrale Übersetzungssystem statt eines separaten Wörterbuchs.
- Anwendungstexte werden in den acht verfügbaren Sprachen integriert und gepflegt: Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch und vereinfachtes Chinesisch.
- Neue Texte und Dialoge werden in `js/traducciones.js` zentralisiert, damit keine isolierten Zeichenfolgen in Anwendungsdateien verbleiben.
- Zwei neue Sprachen werden hinzugefügt: Arabisch und vereinfachtes Chinesisch. Damit unterstützt die Anwendung acht Sprachen: Spanisch, Englisch, Französisch, Deutsch, Italienisch, Polnisch, Arabisch und vereinfachtes Chinesisch.
- Probleme mit G-Code-Miniaturbildern werden behoben: Das verfügbare Miniaturbild mit der höchsten Auflösung wird extrahiert und beim Senden eines Auftrags vom Monitor an den Rechner beibehalten.
- Kleinere Fehler beim Betrieb, bei der Initialisierung, bei Übersetzungen und bei Farb-Aliasnamen werden behoben.

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

## v5.24
- Hochwertige Neugestaltung des Kundenbereichs passend zum Start-Dashboard.
- Verbesserungen an Kopfbereich, Formular, Suche, Schaltflächen und Kundenkarten.
- Bestehende IDs, Daten und Abläufe bleiben erhalten.

## v5.25
- Hochwertige visuelle Neugestaltung der Angebote passend zum Start-Dashboard.
- Verbesserungen an Kopfbereich, Kundendaten, Positionseditor, Bedingungen, Suche und Tabelle gespeicherter Angebote.
- Bestehende IDs und Funktionslogik bleiben erhalten.

## v5.26
- Überarbeitung der Angebotsliste mit klarerer Zeilenhierarchie, hervorgehobenen Summen und umgebrochenen Aktionsgruppen.
- Kontrast, Hover-Zustände, Angebotsnummern und Darstellung auf kleinen Bildschirmen verbessert.

## v5.27
- Neugestaltung der Kundenansicht mit markanterem Kopfbereich, hervorgehobener Suche, besser gruppiertem Formular und eleganteren Kundenkarten passend zum Startbildschirm.
- Bestehende Feld-IDs und Aktionen bleiben erhalten; die Änderungen betreffen nur die Darstellung.

## v5.28
- Premium-Neugestaltung der Bestellungen: Kopfbereich, Formular, Suche und Tabelle mit klarerer visueller Hierarchie sowie Türkis-/Violettakzenten passend zur Startseite.
- Bestehende Felder, IDs, Bestellstatus und Aktionen bleiben erhalten.

## v5.29
- Premium-Neugestaltung der Rechnungen: übersichtlicher Erstellungsbereich, Nummerierungs- und Steuereinstellungen, Kundenauswahl und Rechnungsarchiv im Stil der Startseite.
- Bestehende IDs, Nummerierung, Daten, Druckfunktionen und Aktionen bleiben erhalten. Keine neuen Felder oder Dialoge.

## v5.30
- Globale Kontrastkorrektur für Dropdown-Menüs, damit Optionen unter Windows und Edge lesbar sind.

## v5.31
- Hochwertige Neugestaltung des Filamentbestands: Formular, Filter, Suche und Spulenkarten mit klarerer visueller Struktur.

## v5.32
- Zweite visuelle Überarbeitung des Filamentbestands: breitere Karten in drei Spalten, vier Spalten im Formular und bessere Lesbarkeit.

## v5.34
- Filamentbestand: 8 Karten pro Seite, in 4 Spalten und 2 Reihen auf dem Desktop.
- Trennt die regelmäßige Reinigung von planmäßigen Wartungsarbeiten: Sie wird jetzt als informativer Tipp angezeigt und erzeugt keine Warnungen. Entfernt alte Reinigungseinträge aus Aufgaben und Verlauf. Korrigiert den Leerzustand der Benachrichtigungen.

## 2.0.118
- Interaktives Bettnetz: Drehen mit Maus oder Touch, Zoom per Mausrad, Ansicht zurücksetzen und Vollbild.

## v2.0.136
- Schützt die Initialisierung des Rechners, wenn Marken-/Modellauswahlfelder in einer Ansicht fehlen.

## v2.0.138
- Initialisiert die Druckermarken- und Modellauswahl nach dem Laden des HTML und verhindert addEventListener auf null. Reduziert redundante SQLite-Schreibvorgänge des U1-Monitors und speichert unveränderte manuelle IP-Adressen nicht erneut.

## 2.0.143
- Automatische Sicherungen blockieren keine interaktiven SQLite-Schreibvorgänge mehr und laufen separat asynchron.
- Druckerlisten und Aliase verwenden die zentrale Speicherwarteschlange.
- Zeitversetzte Wiederholungen bei HTTP-409-Konflikten.

- v2.0.147: Manuelle U1-Spulenzuweisung korrigiert; die Auswahl wird sofort gespeichert und über eine stabile ID identifiziert, damit Aktualisierungen oder Sortierungen sie nicht aufheben.
