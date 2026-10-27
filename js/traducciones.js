/* v1.529 — Auditoría de cobertura y corrección de traducciones polacas mixtas. */

(()=>{
const D={
  "Hay una sesión activa, pero no se pudo verificar la licencia online. Comprueba la conexión y vuelve a intentarlo.": ["A session is active, but the license could not be verified online. Check your connection and try again.", "Une session est active, mais la licence n’a pas pu être vérifiée en ligne. Vérifiez votre connexion et réessayez.", "Eine Sitzung ist aktiv, aber die Lizenz konnte online nicht geprüft werden. Prüfen Sie die Verbindung und versuchen Sie es erneut.", "È attiva una sessione, ma non è stato possibile verificare la licenza online. Controlla la connessione e riprova.", "Sesja jest aktywna, ale nie można zweryfikować licencji online. Sprawdź połączenie i spróbuj ponownie."],

  "Comprobando si hay una sesión activa…": ["Checking for an active session…", "Vérification d’une session active…", "Suche nach einer aktiven Sitzung…", "Verifica di una sessione attiva…", "Sprawdzanie aktywnej sesji…"],
  "No has iniciado sesión. La licencia se consultará después de autenticarte.": ["You are not signed in. Your license will be checked after authentication.", "Vous n’êtes pas connecté. La licence sera vérifiée après l’authentification.", "Sie sind nicht angemeldet. Die Lizenz wird nach der Anmeldung geprüft.", "Non hai effettuato l’accesso. La licenza sarà verificata dopo l’autenticazione.", "Nie zalogowano. Licencja zostanie sprawdzona po uwierzytelnieniu."],
  "No se pudo comprobar la sesión. Inicia sesión o vuelve a intentarlo.": ["Could not check the session. Sign in or try again.", "Impossible de vérifier la session. Connectez-vous ou réessayez.", "Sitzung konnte nicht geprüft werden. Melden Sie sich an oder versuchen Sie es erneut.", "Impossibile verificare la sessione. Accedi o riprova.", "Nie można sprawdzić sesji. Zaloguj się lub spróbuj ponownie."],
  "Sesión cerrada. No hay una licencia verificada en esta sesión.": ["Signed out. No license is verified in this session.", "Session fermée. Aucune licence n’est vérifiée dans cette session.", "Abgemeldet. In dieser Sitzung ist keine Lizenz bestätigt.", "Sessione chiusa. Nessuna licenza è verificata in questa sessione.", "Wylogowano. W tej sesji nie zweryfikowano licencji."],
  "No se pudo cerrar la sesión.": ["Could not sign out.", "Impossible de fermer la session.", "Abmelden nicht möglich.", "Impossibile uscire dall’account.", "Nie można się wylogować."],

  "Cliente eliminado de la agenda.": [
    "Customer removed from the directory.",
    "Client supprimé du répertoire.",
    "Kunde aus dem Verzeichnis entfernt.",
    "Cliente rimosso dalla rubrica.",
    "Klient został usunięty z katalogu."
  ],
  "Datos del vendedor guardados en la base de datos SQLite de este PC.": [
    "Seller details saved to this PC’s SQLite database.",
    "Coordonnées du vendeur enregistrées dans la base SQLite de ce PC.",
    "Verkäuferdaten wurden in der SQLite-Datenbank dieses PCs gespeichert.",
    "Dati del venditore salvati nel database SQLite di questo PC.",
    "Dane sprzedawcy zapisano w bazie SQLite na tym komputerze."
  ],
  "Moneda e impuestos guardados.": [
    "Currency and tax settings saved.",
    "Devise et taxes enregistrées.",
    "Währung und Steuern gespeichert.",
    "Valuta e imposte salvate.",
    "Waluta i podatki zostały zapisane."
  ],
  "Cálculo guardado en este navegador.": [
    "Calculation saved in this browser.",
    "Calcul enregistré dans ce navigateur.",
    "Berechnung in diesem Browser gespeichert.",
    "Calcolo salvato in questo browser.",
    "Obliczenie zapisano w tej przeglądarce."
  ],
  "Añadir movimiento manual": [
    "Add manual entry",
    "Ajouter une opération manuelle",
    "Manuelle Buchung hinzufügen",
    "Aggiungi movimento manuale",
    "Dodaj wpis ręczny"
  ],
  "Añadir desde": [
    "Add from",
    "Ajouter depuis",
    "Hinzufügen aus",
    "Aggiungi da",
    "Dodaj z"
  ],
  "Movimiento manual": [
    "Manual entry",
    "Écriture manuelle",
    "Manuelle Buchung",
    "Movimento manuale",
    "Wpis ręczny"
  ],
  "Presupuesto guardado": [
    "Saved quote",
    "Devis enregistré",
    "Gespeichertes Angebot",
    "Preventivo salvato",
    "Zapisana oferta"
  ],
  "Tasación guardada": [
    "Saved estimate",
    "Estimation enregistrée",
    "Gespeicherte Kalkulation",
    "Stima salvata",
    "Zapisana wycena"
  ],
  "Seleccionar presupuesto o tasación": [
    "Select a quote or estimate",
    "Sélectionner un devis ou une estimation",
    "Angebot oder Kalkulation auswählen",
    "Seleziona un preventivo o una stima",
    "Wybierz ofertę lub wycenę"
  ],
  "Selecciona un documento": [
    "Select a document",
    "Sélectionnez un document",
    "Dokument auswählen",
    "Seleziona un documento",
    "Wybierz dokument."
  ],
  "ATENCIÓN: se restaurarán los datos de la copia seleccionada y se sustituirán los datos SQLite actuales. Antes se creará y validará automáticamente una copia de protección de la base actual. ¿Quieres continuar?": [
    "WARNING: Data from the selected backup will replace the current SQLite data. A protective backup of the current database will be created and validated first. Continue?",
    "ATTENTION : les données de la sauvegarde sélectionnée remplaceront les données SQLite actuelles. Une copie de protection de la base actuelle sera d’abord créée et validée. Continuer ?",
    "ACHTUNG: Die Daten der ausgewählten Sicherung ersetzen die aktuellen SQLite-Daten. Zuvor wird eine Schutzkopie der aktuellen Datenbank erstellt und geprüft. Fortfahren?",
    "ATTENZIONE: i dati del backup selezionato sostituiranno i dati SQLite attuali. Prima verrà creata e convalidata una copia di protezione del database attuale. Continuare?",
    "UWAGA: dane z wybranej kopii zastąpią obecne dane SQLite. Najpierw zostanie utworzona i sprawdzona kopia ochronna bieżącej bazy. Kontynuować?"
  ],
  "Última confirmación: ¿restaurar {name}? No cierres Orca ni esta ventana durante el proceso.": [
    "Final confirmation: restore {name}? Do not close Orca or this window during the process.",
    "Dernière confirmation : restaurer {name} ? Ne fermez ni Orca ni cette fenêtre pendant l’opération.",
    "Letzte Bestätigung: {name} wiederherstellen? Schließen Sie Orca oder dieses Fenster während des Vorgangs nicht.",
    "Ultima conferma: ripristinare {name}? Non chiudere Orca né questa finestra durante il processo.",
    "Ostatnie potwierdzenie: przywrócić {name}? Nie zamykaj Orca ani tego okna podczas operacji."
  ],
  "Selecciona primero una copia SQLite.": [
    "Select an SQLite backup first.",
    "Sélectionnez d’abord une sauvegarde SQLite.",
    "Wählen Sie zuerst eine SQLite-Sicherung aus.",
    "Seleziona prima un backup SQLite.",
    "Najpierw wybierz kopię zapasową SQLite."
  ],
  "Validando la copia y creando una copia de protección de los datos actuales…": [
    "Validating the backup and creating a safety copy of the current data…",
    "Validation de la sauvegarde et création d’une copie de protection des données actuelles…",
    "Sicherung wird geprüft und eine Sicherheitskopie der aktuellen Daten wird erstellt…",
    "Verifica del backup e creazione di una copia di sicurezza dei dati attuali…",
    "Sprawdzanie kopii zapasowej i tworzenie kopii ochronnej bieżących danych…"
  ],
  "Restauración completada. Integridad SQLite correcta. Registros: {count}. Copia de protección creada: {safetyBackup}. Actualizando la aplicación para cargar todos los datos restaurados…": [
    "Restore completed. SQLite integrity is OK. Records: {count}. Protective backup created: {safetyBackup}. Reloading the application to load all restored data…",
    "Restauration terminée. Intégrité SQLite correcte. Enregistrements : {count}. Copie de protection créée : {safetyBackup}. Actualisation de l’application pour charger toutes les données restaurées…",
    "Wiederherstellung abgeschlossen. SQLite-Integrität ist in Ordnung. Datensätze: {count}. Schutzkopie erstellt: {safetyBackup}. Anwendung wird neu geladen, um alle wiederhergestellten Daten zu laden…",
    "Ripristino completato. Integrità SQLite corretta. Record: {count}. Copia di protezione creata: {safetyBackup}. Ricaricamento dell’applicazione per caricare tutti i dati ripristinati…",
    "Przywracanie zakończone. Integralność SQLite jest prawidłowa. Liczba rekordów: {count}. Utworzono kopię ochronną: {safetyBackup}. Ponowne uruchamianie aplikacji w celu wczytania wszystkich przywróconych danych…"
  ],
  "No se pudo restaurar la copia: {message}": [
    "The backup could not be restored: {message}",
    "Impossible de restaurer la sauvegarde : {message}",
    "Die Sicherung konnte nicht wiederhergestellt werden: {message}",
    "Impossibile ripristinare il backup: {message}",
    "Nie udało się przywrócić kopii zapasowej: {message}"
  ],
  "Validando la copia seleccionada…": [
    "Validating the selected backup…",
    "Validation de la sauvegarde sélectionnée…",
    "Ausgewählte Sicherung wird geprüft…",
    "Convalida del backup selezionato…",
    "Sprawdzanie wybranej kopii zapasowej…"
  ],
  "Copia válida. Integridad SQLite correcta.": [
    "Backup is valid. SQLite integrity is OK.",
    "Sauvegarde valide. Intégrité SQLite correcte.",
    "Sicherung ist gültig. SQLite-Integrität ist in Ordnung.",
    "Backup valido. Integrità SQLite corretta.",
    "Kopia zapasowa jest prawidłowa. Integralność SQLite jest poprawna."
  ],
  "No se pudo validar la copia: {message}": [
    "The backup could not be validated: {message}",
    "Impossible de valider la sauvegarde : {message}",
    "Die Sicherung konnte nicht überprüft werden: {message}",
    "Impossibile convalidare il backup: {message}",
    "Nie udało się sprawdzić kopii zapasowej: {message}"
  ],
  "Validar copia seleccionada": [
    "Validate selected backup",
    "Vérifier la sauvegarde sélectionnée",
    "Ausgewählte Sicherung prüfen",
    "Verifica backup selezionato",
    "Sprawdź wybraną kopię"
  ],
  "Restaurar copia seleccionada": [
    "Restore selected backup",
    "Restaurer la sauvegarde sélectionnée",
    "Ausgewählte Sicherung wiederherstellen",
    "Ripristina backup selezionato",
    "Przywróć wybraną kopię"
  ],
  "Consultando copias…": [
    "Loading backups…",
    "Chargement des sauvegardes…",
    "Sicherungen werden geladen…",
    "Caricamento dei backup…",
    "Wyszukiwanie kopii zapasowych…"
  ],
  "Al abrir Opciones se consultará el estado del servidor y de SQLite.": [
    "When Settings opens, the server and SQLite status will be checked.",
    "À l’ouverture des Options, l’état du serveur et de SQLite sera vérifié.",
    "Beim Öffnen der Einstellungen werden Server- und SQLite-Status geprüft.",
    "All’apertura di Opzioni verrà controllato lo stato del server e di SQLite.",
    "Po otwarciu Ustawień zostanie sprawdzony stan serwera i SQLite."
  ],
  "La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.": [
    "Restore first creates and validates a protective backup of the current database. Do not close the application until it finishes.",
    "La restauration crée et valide d’abord une copie de protection de la base actuelle. Ne fermez pas l’application avant la fin.",
    "Bei der Wiederherstellung wird zuerst eine Schutzkopie der aktuellen Datenbank erstellt und geprüft. Schließen Sie die Anwendung nicht, bevor der Vorgang abgeschlossen ist.",
    "Il ripristino crea e convalida prima una copia di protezione del database attuale. Non chiudere l’applicazione fino al termine.",
    "Przywracanie najpierw tworzy i sprawdza kopię ochronną bieżącej bazy danych. Nie zamykaj aplikacji przed zakończeniem."
  ],
  "Ubicación:": [
    "Location:",
    "Emplacement :",
    "Speicherort:",
    "Posizione:",
    "Lokalizacja:"
  ],
  "Correcta": [
    "Correct",
    "Correcte",
    "Korrekt",
    "Corretta",
    "Poprawna"
  ],
  "100 copias": [
    "100 backups",
    "100 sauvegardes",
    "100 Sicherungen",
    "100 backup",
    "100 kopii zapasowych"
  ],
  "Print Cost & Profit · Snapmaker Orca": [
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca",
    "Print Cost & Profit · Snapmaker Orca"
  ],
  "Calculadora local para Snapmaker Orca 2.4.1-alpha · sin actualizar ni modificar el laminador": [
    "Local calculator for Snapmaker Orca 2.4.1-alpha · does not update or modify the slicer",
    "Calculatrice locale pour Snapmaker Orca 2.4.1-alpha · ne met pas à jour ni ne modifie le slicer",
    "Lokaler Rechner für Snapmaker Orca 2.4.1-alpha · aktualisiert oder ändert den Slicer nicht",
    "Calcolatrice locale per Snapmaker Orca 2.4.1-alpha · non aggiorna né modifica lo slicer",
    "Lokalny kalkulator dla Snapmaker Orca 2.4.1-alpha · nie aktualizuje ani nie modyfikuje programu do cięcia"
  ],
  "Inicio": [
    "Home",
    "Accueil",
    "Start",
    "Home",
    "Start"
  ],
  "Opciones": [
    "Settings",
    "Options",
    "Einstellungen",
    "Opzioni",
    "Opcje"
  ],
  "Clientes": [
    "Customers",
    "Clients",
    "Kunden",
    "Clienti",
    "Klienci"
  ],
  "Presupuestos": [
    "Quotes",
    "Devis",
    "Angebote",
    "Preventivi",
    "Oferty"
  ],
  "Seguimiento de pedidos": [
    "Order tracking",
    "Suivi des commandes",
    "Auftragsverfolgung",
    "Monitoraggio ordini",
    "Zamówienie tracking"
  ],
  "Facturas": [
    "Invoices",
    "Factures",
    "Rechnungen",
    "Fatture",
    "Faktury"
  ],
  "Inventario de bobinas": [
    "Spool inventory",
    "Inventaire des bobines",
    "Spulenbestand",
    "Inventario bobine",
    "szpula Magazyn"
  ],
  "Contabilidad": [
    "Accounting",
    "Comptabilité",
    "Buchhaltung",
    "Contabilità",
    "Księgowość"
  ],
  "Cargar G-code laminado": [
    "Load sliced G-code",
    "Charger le G-code tranché",
    "Geslicten G-Code laden",
    "Carica G-code elaborato",
    "Wczytaj przygotowany G-code"
  ],
  "Copiar resumen": [
    "Copy summary",
    "Copier le résumé",
    "Zusammenfassung kopieren",
    "Copia riepilogo",
    "Kopiuj podsumowanie"
  ],
  "Copia de seguridad JSON": [
    "JSON backup",
    "Sauvegarde JSON",
    "JSON-Sicherung",
    "Backup JSON",
    "JSON kopia zapasowa"
  ],
  "Restaurar JSON": [
    "Restore JSON",
    "Restaurer JSON",
    "JSON wiederherstellen",
    "Ripristina JSON",
    "przywróć JSON"
  ],
  "Nuevo cálculo": [
    "New calculation",
    "Nouveau calcul",
    "Neue Berechnung",
    "Nuovo calcolo",
    "Nowe obliczenie"
  ],
  "El borrador se guarda automáticamente en este navegador.": [
    "The draft is saved automatically in this browser.",
    "Le brouillon est enregistré automatiquement dans ce navigateur.",
    "Der Entwurf wird automatisch in diesem Browser gespeichert.",
    "La bozza viene salvata automaticamente in questo browser.",
    "Wersja robocza jest automatycznie zapisywana w tej przeglądarce."
  ],
  "Tipo de impresión": [
    "Print type",
    "Type d’impression",
    "Druckart",
    "Tipo di stampa",
    "Typ wydruku"
  ],
  "Personal · gasto propio": [
    "Personal · own expense",
    "Personnel · dépense personnelle",
    "Privat · eigene Ausgabe",
    "Personale · spesa propria",
    "Własny · wydatek własny"
  ],
  "Pedido de venta · gasto y beneficio": [
    "Sales order · cost and profit",
    "Commande de vente · coût et bénéfice",
    "Verkaufsauftrag · Kosten und Gewinn",
    "Ordine di vendita · costi e profitto",
    "Zamówienie sprzedaży · koszt i zysk"
  ],
  "01 · Datos de la pieza": [
    "01 · Part details",
    "01 · Détails de la pièce",
    "01 · Teiledaten",
    "01 · Dati del pezzo",
    "01 · Dane części"
  ],
  "02 · Filamento por color/material": [
    "02 · Filament by colour/material",
    "02 · Filament par couleur/matériau",
    "02 · Filament nach Farbe/Material",
    "02 · Filamento per colore/materiale",
    "02 · Filament według koloru/materiału"
  ],
  "03 · Otros costes": [
    "03 · Other costs",
    "03 · Autres coûts",
    "03 · Weitere Kosten",
    "03 · Altri costi",
    "03 · Other koszty"
  ],
  "04 · Venta, moneda e impuestos": [
    "04 · Sale, currency and taxes",
    "04 · Vente, devise et taxes",
    "04 · Verkauf, Währung und Steuern",
    "04 · Vendita, valuta e imposte",
    "04 · Sprzedaż, waluta i podatki"
  ],
  "05 · Resultado estimado": [
    "05 · Estimated result",
    "05 · Résultat estimé",
    "05 · Geschätztes Ergebnis",
    "05 · Risultato stimato",
    "05 · Estimated result"
  ],
  "Nombre de la pieza": [
    "Part name",
    "Nom de la pièce",
    "Teilename",
    "Nome del pezzo",
    "Nazwa elementu"
  ],
  "Imagen de la pieza": [
    "Part image",
    "Image de la pièce",
    "Teilebild",
    "Immagine del pezzo",
    "Obraz elementu"
  ],
  "Quitar imagen": [
    "Remove image",
    "Supprimer l’image",
    "Bild entfernen",
    "Rimuovi immagine",
    "Usuń image"
  ],
  "Tiempo de impresión (horas)": [
    "Print time (hours)",
    "Temps d’impression (heures)",
    "Druckzeit (Stunden)",
    "Tempo di stampa (ore)",
    "Czas drukowania (godziny)"
  ],
  "Unidades que se fabrican": [
    "Units to manufacture",
    "Unités à fabriquer",
    "Herzustellende Einheiten",
    "Unità da produrre",
    "Liczba sztuk do wykonania"
  ],
  "Reserva por fallos (%)": [
    "Failure allowance (%)",
    "Marge pour échecs (%)",
    "Fehlerreserve (%)",
    "Riserva per guasti (%)",
    "Rezerwa na nieudane wydruki (%)"
  ],
  "Perfil / ajustes de impresión (opcional)": [
    "Printer profile / print settings (optional)",
    "Profil / réglages d’impression (facultatif)",
    "Druckprofil / Druckeinstellungen (optional)",
    "Profilo / impostazioni di stampa (facoltativo)",
    "drukarka profile / Drukuj Ustawienia (optional)"
  ],
  "Notas de la pieza": [
    "Part notes",
    "Notes sur la pièce",
    "Teilenotizen",
    "Note sul pezzo",
    "Uwagi dotyczące części"
  ],
  "Material / nombre": [
    "Material / name",
    "Matériau / nom",
    "Material / Name",
    "Materiale / nome",
    "Materiał / Nazwa"
  ],
  "Gramos": [
    "Grams",
    "Grammes",
    "Gramm",
    "Grammi",
    "Grams"
  ],
  "Color (nombre y HEX)": [
    "Colour (name and HEX)",
    "Couleur (nom et HEX)",
    "Farbe (Name und HEX)",
    "Colore (nome e HEX)",
    "Colour (Nazwa i HEX)"
  ],
  "Consumo total de Orca": [
    "Total Orca usage",
    "Consommation totale Orca",
    "Orca-Gesamtverbrauch",
    "Consumo totale Orca",
    "Całkowite zużycie Orca"
  ],
  "＋ Añadir color/material": [
    "＋ Add colour/material",
    "＋ Ajouter couleur/matériau",
    "＋ Farbe/Material hinzufügen",
    "＋ Aggiungi colore/materiale",
    "＋ Dodaj colour/Materiał"
  ],
  "Precio electricidad (": [
    "Electricity price (",
    "Prix de l’électricité (",
    "Strompreis (",
    "Prezzo dell’elettricità (",
    "Electricity Cena ("
  ],
  "Consumo medio de impresora (W)": [
    "Average printer power (W)",
    "Puissance moyenne de l’imprimante (W)",
    "Durchschnittliche Druckerleistung (W)",
    "Potenza media stampante (W)",
    "Average drukarka power (W)"
  ],
  "Mantenimiento y recambios por hora": [
    "Maintenance and spare parts per hour",
    "Maintenance et pièces de rechange par heure",
    "Wartung und Ersatzteile pro Stunde",
    "Manutenzione e ricambi all’ora",
    "Konserwacja i części zamienne na godzinę"
  ],
  "Amortización desde perfil (": [
    "Depreciation from profile (",
    "Amortissement selon le profil (",
    "Abschreibung aus Profil (",
    "Ammortamento dal profilo (",
    "Amortyzacja z profilu ("
  ],
  "Precio por hora de trabajo (": [
    "Labour cost per hour (",
    "Coût horaire de main-d’œuvre (",
    "Arbeitskosten pro Stunde (",
    "Costo del lavoro all’ora (",
    "Koszt robocizny za godzinę ("
  ],
  "Minutos de posprocesado por unidad": [
    "Post-processing minutes per unit",
    "Minutes de post-traitement par unité",
    "Nachbearbeitungsminuten pro Einheit",
    "Minuti di post-elaborazione per unità",
    "Minuty obróbki końcowej na sztukę"
  ],
  "Minutos de montaje por unidad": [
    "Assembly minutes per unit",
    "Minutes de montage par unité",
    "Montageminuten pro Einheit",
    "Minuti di assemblaggio per unità",
    "Minuty montażu na sztukę"
  ],
  "Mano de obra por trabajo (": [
    "Labour per job (",
    "Main-d’œuvre par travail (",
    "Arbeitsaufwand pro Auftrag (",
    "Manodopera per lavoro (",
    "Robocizna na zlecenie ("
  ],
  "Embalaje y otros por unidad (": [
    "Packaging and other costs per unit (",
    "Emballage et autres coûts par unité (",
    "Verpackung und sonstige Kosten pro Einheit (",
    "Imballaggio e altri costi per unità (",
    "Pakowanie i inne koszty na sztukę ("
  ],
  "Otros costes por trabajo (": [
    "Other costs per job (",
    "Autres coûts par travail (",
    "Sonstige Kosten pro Auftrag (",
    "Altri costi per lavoro (",
    "Pozostałe koszty na zlecenie ("
  ],
  "Guardar tasación": [
    "Save estimate",
    "Enregistrer l’estimation",
    "Kalkulation speichern",
    "Salva stima",
    "Zapisz wycenę"
  ],
  "Guardar presupuesto": [
    "Save quote",
    "Enregistrer le devis",
    "Angebot speichern",
    "Salva preventivo",
    "Zapisz ofertę"
  ],
  "Calcular precio final": [
    "Calculate final price",
    "Calculer le prix final",
    "Endpreis berechnen",
    "Calcola prezzo finale",
    "Oblicz cenę końcową"
  ],
  "Realizar pedido": [
    "Place order",
    "Passer commande",
    "Auftrag erstellen",
    "Crea ordine",
    "Utwórz zamówienie"
  ],
  "Coste por unidad": [
    "Cost per unit",
    "Coût par unité",
    "Kosten pro Einheit",
    "Costo per unità",
    "Koszt na sztukę"
  ],
  "Beneficio por unidad": [
    "Profit per unit",
    "Bénéfice par unité",
    "Gewinn pro Einheit",
    "Profitto per unità",
    "Zysk na sztukę"
  ],
  "Precio recomendado con impuestos": [
    "Recommended price including tax",
    "Prix recommandé TTC",
    "Empfohlener Preis inklusive Steuer",
    "Prezzo consigliato con imposte",
    "Zalecana cena z podatkiem"
  ],
  "Margen real": [
    "Actual margin",
    "Marge réelle",
    "Tatsächliche Marge",
    "Margine effettivo",
    "Actual margin"
  ],
  "Electricidad": [
    "Electricity",
    "Électricité",
    "Strom",
    "Elettricità",
    "Electricity"
  ],
  "Amortización de impresora": [
    "Printer depreciation",
    "Amortissement de l’imprimante",
    "Druckerabschreibung",
    "Ammortamento della stampante",
    "Amortyzacja drukarki"
  ],
  "Mantenimiento y recambios": [
    "Maintenance and spare parts",
    "Entretien et pièces de rechange",
    "Wartung und Ersatzteile",
    "Manutenzione e ricambi",
    "Maintenance i spare parts"
  ],
  "Mano de obra y extras": [
    "Labour and extras",
    "Main-d’œuvre et extras",
    "Arbeit und Zusatzkosten",
    "Manodopera e extra",
    "Labour i extras"
  ],
  "Reserva por fallos": [
    "Failure allowance",
    "Marge pour échecs",
    "Fehlerreserve",
    "Riserva per guasti",
    "Rezerwa na nieudane wydruki"
  ],
  "Precio total del pedido": [
    "Total order price",
    "Prix total de la commande",
    "Gesamtpreis des Auftrags",
    "Prezzo totale dell’ordine",
    "Łączna cena zamówienia"
  ],
  "Clientes · Agenda de clientes": [
    "Customers · Customer directory",
    "Clients · Répertoire clients",
    "Kunden · Kundenverzeichnis",
    "Clienti · Rubrica clienti",
    "Klienci · Książka adresowa klientów"
  ],
  "＋ Cliente nuevo": [
    "＋ New customer",
    "＋ Nouveau client",
    "＋ Neuer Kunde",
    "＋ Nuovo cliente",
    "＋ nowy Klient"
  ],
  "Buscar cliente": [
    "Search customer",
    "Rechercher un client",
    "Kunden suchen",
    "Cerca cliente",
    "Szukaj klienta"
  ],
  "Nombre / empresa": [
    "Name / company",
    "Nom / entreprise",
    "Name / Unternehmen",
    "Nome / azienda",
    "Nazwa / company"
  ],
  "Correo electrónico": [
    "Email address",
    "Adresse e-mail",
    "E-Mail-Adresse",
    "Indirizzo e-mail",
    "Adres e-mail"
  ],
  "Teléfono": [
    "Phone",
    "Téléphone",
    "Telefon",
    "Telefono",
    "Telefon"
  ],
  "Dirección": [
    "Address",
    "Adresse",
    "Adresse",
    "Indirizzo",
    "Adres"
  ],
  "Ciudad": [
    "City",
    "Ville",
    "Stadt",
    "Città",
    "City"
  ],
  "Guardar cliente": [
    "Save customer",
    "Enregistrer le client",
    "Kunden speichern",
    "Salva cliente",
    "Zapisz Klient"
  ],
  "Eliminar cliente": [
    "Delete customer",
    "Supprimer le client",
    "Kunden löschen",
    "Elimina cliente",
    "Usuń Klient"
  ],
  "Crear factura desde calculadora": [
    "Create invoice from calculator",
    "Créer une facture depuis le calculateur",
    "Rechnung aus dem Rechner erstellen",
    "Crea fattura dal calcolatore",
    "Utwórz Faktura z calculator"
  ],
  "Facturas guardadas": [
    "Saved invoices",
    "Factures enregistrées",
    "Gespeicherte Rechnungen",
    "Fatture salvate",
    "Zapisane faktury"
  ],
  "Material": [
    "Material",
    "Matière",
    "Material",
    "Materiale",
    "Materiał"
  ],
  "Color del filamento": [
    "Filament colour",
    "Couleur du filament",
    "Filamentfarbe",
    "Colore del filamento",
    "filament colour"
  ],
  "Peso inicial (g)": [
    "Initial weight (g)",
    "Poids initial (g)",
    "Anfangsgewicht (g)",
    "Peso iniziale (g)",
    "Initial weight (g)"
  ],
  "Peso restante por bobina (g)": [
    "Remaining weight per spool (g)",
    "Poids restant par bobine (g)",
    "Restgewicht pro Spule (g)",
    "Peso residuo per bobina (g)",
    "Pozostała masa na szpuli (g)"
  ],
  "Añadir bobina": [
    "Add spool",
    "Ajouter une bobine",
    "Spule hinzufügen",
    "Aggiungi bobina",
    "Dodaj szpulę"
  ],
  "Exportar bobinas CSV": [
    "Export spools to CSV",
    "Exporter les bobines en CSV",
    "Spulen als CSV exportieren",
    "Esporta bobine in CSV",
    "Eksportuj szpule do CSV"
  ],
  "Nuevo pedido": [
    "New order",
    "Nouvelle commande",
    "Neuer Auftrag",
    "Nuovo ordine",
    "Nowe zamówienie"
  ],
  "Producto · tasación o presupuesto guardado": [
    "Product · saved estimate or quote",
    "Produit · estimation ou devis enregistré",
    "Produkt · gespeicherte Kalkulation oder Angebot",
    "Prodotto · stima o preventivo salvato",
    "Produkt · zapisana wycena lub oferta"
  ],
  "Cantidad": [
    "Quantity",
    "Quantité",
    "Menge",
    "Quantità",
    "Ilość"
  ],
  "Entrega prevista": [
    "Expected delivery",
    "Livraison prévue",
    "Voraussichtliche Lieferung",
    "Consegna prevista",
    "Przewidywany termin dostawy"
  ],
  "Estado": [
    "Status",
    "Statut",
    "Status",
    "Stato",
    "Status"
  ],
  "Pendiente": [
    "Pending",
    "En attente",
    "Ausstehend",
    "In attesa",
    "Oczekujące"
  ],
  "En impresión": [
    "Printing",
    "En cours d’impression",
    "Im Druck",
    "In stampa",
    "W trakcie drukowania"
  ],
  "Listo para entregar": [
    "Ready for delivery",
    "Prêt à livrer",
    "Lieferbereit",
    "Pronto per la consegna",
    "Gotowe do odbioru"
  ],
  "Entregado": [
    "Delivered",
    "Livré",
    "Geliefert",
    "Consegnato",
    "Dostarczono"
  ],
  "Cancelado": [
    "Cancelled",
    "Annulé",
    "Storniert",
    "Annullato",
    "Anulowano"
  ],
  "Guardar pedido": [
    "Save order",
    "Enregistrer la commande",
    "Auftrag speichern",
    "Salva ordine",
    "Zapisz zamówienie"
  ],
  "Exportar pedidos CSV": [
    "Export orders to CSV",
    "Exporter les commandes en CSV",
    "Aufträge als CSV exportieren",
    "Esporta ordini in CSV",
    "Eksportuj zamówienia do CSV"
  ],
  "Presupuesto para cliente": [
    "Customer quote",
    "Devis client",
    "Kundenangebot",
    "Preventivo cliente",
    "Klient Oferta"
  ],
  "Piezas del presupuesto": [
    "Quote items",
    "Articles du devis",
    "Angebotspositionen",
    "Voci del preventivo",
    "Pozycje oferty"
  ],
  "＋ Añadir pieza manual": [
    "＋ Add manual item",
    "＋ Ajouter un article manuel",
    "＋ Position manuell hinzufügen",
    "＋ Aggiungi articolo manuale",
    "＋ Dodaj ręczny item"
  ],
  "＋ Añadir pieza de calculadora": [
    "＋ Add calculator item",
    "＋ Ajouter un article du calculateur",
    "＋ Position aus Rechner hinzufügen",
    "＋ Aggiungi articolo dal calcolatore",
    "＋ Dodaj calculator item"
  ],
  "Imprimir presupuesto para cliente": [
    "Print customer quote",
    "Imprimer le devis client",
    "Kundenangebot drucken",
    "Stampa preventivo cliente",
    "Drukuj Klient Oferta"
  ],
  "Presupuestos guardados": [
    "Saved quotes",
    "Devis enregistrés",
    "Gespeicherte Angebote",
    "Preventivi salvati",
    "Zapisane oferty"
  ],
  "Snapmaker U1 · MONITOR": [
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITEUR",
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITOR",
    "Snapmaker U1 · MONITOR"
  ],
  "Conexión": [
    "Connection",
    "Connexion",
    "Verbindung",
    "Connessione",
    "Połączenie"
  ],
  "Archivo": [
    "File",
    "Fichier",
    "Datei",
    "File",
    "Plik"
  ],
  "Progreso": [
    "Progress",
    "Progression",
    "Fortschritt",
    "Avanzamento",
    "Progress"
  ],
  "Capas": [
    "Layers",
    "Couches",
    "Schichten",
    "Livelli",
    "Layers"
  ],
  "Tiempo": [
    "Time",
    "Temps",
    "Zeit",
    "Tempo",
    "Czas"
  ],
  "Actualizar": [
    "Refresh",
    "Actualiser",
    "Aktualisieren",
    "Aggiorna",
    "Odśwież"
  ],
  "Registrar como personal": [
    "Record as personal",
    "Enregistrer comme personnel",
    "Als privat erfassen",
    "Registra come personale",
    "Record as personal"
  ],
  "Registrar como pedido": [
    "Record as order",
    "Enregistrer comme commande",
    "Als Auftrag erfassen",
    "Registra come ordine",
    "Record as Zamówienie"
  ],
  "Pedido U1 registrado con el punto 04. Coste de fabricación: {cost}. Venta base sin impuestos: {net}. Impuesto: {tax}. Total cobrado estimado: {gross}. Comisión: {commission}. Beneficio estimado: {profit}.": [
    "U1 order recorded with point 04. Manufacturing cost: {cost}. Base sale excluding tax: {net}. Tax: {tax}. Estimated total charged: {gross}. Commission: {commission}. Estimated profit: {profit}.",
    "Commande U1 enregistrée avec le point 04. Coût de fabrication : {cost}. Vente de base hors taxes : {net}. Taxe : {tax}. Total estimé facturé : {gross}. Commission : {commission}. Bénéfice estimé : {profit}.",
    "U1-Auftrag mit Punkt 04 erfasst. Herstellungskosten: {cost}. Nettobasisverkauf: {net}. Steuer: {tax}. Geschätzter Gesamtbetrag: {gross}. Provision: {commission}. Geschätzter Gewinn: {profit}.",
    "Ordine U1 registrato con il punto 04. Costo di produzione: {cost}. Vendita base al netto delle imposte: {net}. Imposta: {tax}. Totale stimato addebitato: {gross}. Commissione: {commission}. Profitto stimato: {profit}.",
    "Zapisano zamówienie U1 z punktem 04. Koszt produkcji: {cost}. Cena bazowa bez podatku: {net}. Podatek: {tax}. Szacowana kwota do zapłaty: {gross}. Prowizja: {commission}. Szacowany zysk: {profit}."
  ],
  "Impresión U1 registrada como gasto personal. Coste total de fabricación: {cost}.": [
    "U1 print recorded as a personal expense. Total manufacturing cost: {cost}.",
    "Impression U1 enregistrée comme dépense personnelle. Coût total de fabrication : {cost}.",
    "U1-Druck als persönliche Ausgabe erfasst. Gesamte Herstellungskosten: {cost}.",
    "Stampa U1 registrata come spesa personale. Costo totale di produzione: {cost}.",
    "Druk U1 zapisano jako wydatek własny. Całkowity koszt produkcji: {cost}."
  ],
  "Cerrar panel": [
    "Close panel",
    "Fermer le panneau",
    "Bereich schließen",
    "Chiudi pannello",
    "Zamknij panel"
  ],
  "Contabilidad · gastos propios y pedidos": [
    "Accounting · own expenses and orders",
    "Comptabilité · dépenses propres et commandes",
    "Buchhaltung · eigene Ausgaben und Aufträge",
    "Contabilità · spese personali e ordini",
    "Księgowość · wydatki własne i zamówienia"
  ],
  "Gastos propios": [
    "Own expenses",
    "Dépenses personnelles",
    "Eigene Ausgaben",
    "Spese personali",
    "Wydatki własne"
  ],
  "Gastos de pedidos": [
    "Order expenses",
    "Dépenses des commandes",
    "Auftragsausgaben",
    "Spese degli ordini",
    "Koszty zamówień"
  ],
  "Ventas estimadas de pedidos": [
    "Estimated order sales",
    "Ventes estimées des commandes",
    "Geschätzter Auftragsumsatz",
    "Vendite stimate degli ordini",
    "Estimated Zamówienie sales"
  ],
  "Beneficio estimado de pedidos": [
    "Estimated order profit",
    "Bénéfice estimé des commandes",
    "Geschätzter Auftragsgewinn",
    "Profitto stimato degli ordini",
    "Szacowany zysk z zamówień"
  ],
  "Fecha": [
    "Date",
    "Date",
    "Datum",
    "Data",
    "Data"
  ],
  "Tipo de movimiento": [
    "Entry type",
    "Type d’opération",
    "Buchungsart",
    "Tipo di movimento",
    "wpis type"
  ],
  "Gasto propio": [
    "Own expense",
    "Dépense personnelle",
    "Eigene Ausgabe",
    "Spesa personale",
    "Wydatek własny"
  ],
  "Gasto de pedido": [
    "Order expense",
    "Dépense de commande",
    "Auftragsausgabe",
    "Spesa ordine",
    "Koszt zamówienia"
  ],
  "Concepto": [
    "Description",
    "Libellé",
    "Beschreibung",
    "Descrizione",
    "Opis"
  ],
  "Notas / pedido relacionado": [
    "Notes / related order",
    "Notes / commande associée",
    "Notizen / zugehöriger Auftrag",
    "Note / ordine correlato",
    "Uwagi / powiązane zamówienie"
  ],
  "Guardar movimiento": [
    "Save entry",
    "Enregistrer l’écriture",
    "Buchung speichern",
    "Salva movimento",
    "Zapisz wpis"
  ],
  "Exportar contabilidad CSV": [
    "Export accounting to CSV",
    "Exporter la comptabilité en CSV",
    "Buchhaltung als CSV exportieren",
    "Esporta contabilità in CSV",
    "Eksportuj księgowość do CSV"
  ],
  "Exportar contabilidad PDF": [
    "Export accounting to PDF",
    "Exporter la comptabilité en PDF",
    "Buchhaltung als PDF exportieren",
    "Esporta contabilità in PDF",
    "Eksportuj księgowość do PDF"
  ],
  "🛡️ Base de datos y copias de seguridad": [
    "🛡️ Database and backups",
    "🛡️ Base de données et sauvegardes",
    "🛡️ Datenbank und Sicherungen",
    "🛡️ Database e backup",
    "🛡️ baza danych i backups"
  ],
  "Gestiona las copias de la base SQLite de este ordenador. Las copias se validan antes de mostrarse como correctas. Cambiar estos ajustes no borra la base de datos actual.": [
    "Manage backups of this computer’s SQLite database. Backups are validated before being marked as valid. Changing these settings does not delete the current database.",
    "Gérez les sauvegardes de la base SQLite de cet ordinateur. Elles sont validées avant d’être déclarées correctes. Modifier ces réglages ne supprime pas la base actuelle.",
    "Verwalten Sie Sicherungen der SQLite-Datenbank dieses Computers. Sicherungen werden geprüft, bevor sie als gültig angezeigt werden. Diese Einstellungen löschen die aktuelle Datenbank nicht.",
    "Gestisci i backup del database SQLite di questo computer. I backup vengono convalidati prima di essere indicati come corretti. Modificare queste impostazioni non elimina il database attuale.",
    "Zarządzaj kopiami bazy SQLite na tym komputerze. Kopie są sprawdzane przed oznaczeniem ich jako poprawne. Zmiana tych ustawień nie usuwa bieżącej bazy danych."
  ],
  "10 copias": [
    "10 backups",
    "10 sauvegardes",
    "10 Sicherungen",
    "10 backup",
    "10 backups"
  ],
  "25 copias": [
    "25 backups",
    "25 sauvegardes",
    "25 Sicherungen",
    "25 backup",
    "25 backups"
  ],
  "50 copias": [
    "50 backups",
    "50 sauvegardes",
    "50 Sicherungen",
    "50 backup",
    "50 backups"
  ],
  "200 copias": [
    "200 backups",
    "200 sauvegardes",
    "200 Sicherungen",
    "200 backup",
    "200 backups"
  ],
  "500 copias": [
    "500 backups",
    "500 sauvegardes",
    "500 Sicherungen",
    "500 backup",
    "500 backups"
  ],
  "1 minuto": [
    "1 minute",
    "1 minute",
    "1 Minute",
    "1 minuto",
    "1 minute"
  ],
  "5 minutos": [
    "5 minutes",
    "5 minutes",
    "5 Minuten",
    "5 minuti",
    "5 minutes"
  ],
  "10 minutos": [
    "10 minutes",
    "10 minutes",
    "10 Minuten",
    "10 minuti",
    "10 minutes"
  ],
  "15 minutos": [
    "15 minutes",
    "15 minutes",
    "15 Minuten",
    "15 minuti",
    "15 minutes"
  ],
  "30 minutos": [
    "30 minutes",
    "30 minutes",
    "30 Minuten",
    "30 minuti",
    "30 minutes"
  ],
  "1 hora": [
    "1 hour",
    "1 heure",
    "1 Stunde",
    "1 ora",
    "1 hour"
  ],
  "6 horas": [
    "6 hours",
    "6 heures",
    "6 Stunden",
    "6 ore",
    "6 hours"
  ],
  "24 horas": [
    "24 hours",
    "24 heures",
    "24 Stunden",
    "24 ore",
    "24 hours"
  ],
  "Copias guardadas": [
    "Saved backups",
    "Sauvegardes enregistrées",
    "Gespeicherte Sicherungen",
    "Backup salvati",
    "Zapisano backups"
  ],
  "Integridad SQLite": [
    "SQLite integrity",
    "Intégrité SQLite",
    "SQLite-Integrität",
    "Integrità SQLite",
    "SQLite integralność"
  ],
  "Última copia": [
    "Last backup",
    "Dernière sauvegarde",
    "Letzte Sicherung",
    "Ultimo backup",
    "Ostatnia kopia"
  ],
  "Realizar una copia automática cada": [
    "Create an automatic backup every",
    "Effectuer une sauvegarde automatique toutes les",
    "Automatische Sicherung alle",
    "Esegui un backup automatico ogni",
    "Twórz kopię automatyczną co"
  ],
  "Número máximo de copias que se conservan": [
    "Maximum number of backups to keep",
    "Nombre maximal de sauvegardes à conserver",
    "Maximale Anzahl aufzubewahrender Sicherungen",
    "Numero massimo di backup da conservare",
    "Maksymalna liczba przechowywanych kopii zapasowych"
  ],
  "Guardar configuración": [
    "Save settings",
    "Enregistrer les paramètres",
    "Einstellungen speichern",
    "Salva configurazione",
    "Zapisz ustawienia"
  ],
  "Crear copia ahora": [
    "Create backup now",
    "Créer une sauvegarde maintenant",
    "Jetzt sichern",
    "Crea backup ora",
    "Utwórz kopia zapasowa now"
  ],
  "Actualizar estado": [
    "Refresh status",
    "Actualiser l’état",
    "Status aktualisieren",
    "Aggiorna stato",
    "Odśwież stan"
  ],
  "Copias de seguridad disponibles": [
    "Available backups",
    "Sauvegardes disponibles",
    "Verfügbare Sicherungen",
    "Backup disponibili",
    "dostępny backups"
  ],
  "Todavía no hay copias SQLite.": [
    "There are no SQLite backups yet.",
    "Il n’y a pas encore de sauvegardes SQLite.",
    "Es gibt noch keine SQLite-Sicherungen.",
    "Non ci sono ancora backup SQLite.",
    "Brak SQLite backups yet."
  ],
  "Servidor y SQLite comprobados.": [
    "Server and SQLite checked.",
    "Serveur et SQLite vérifiés.",
    "Server und SQLite überprüft.",
    "Server e SQLite verificati.",
    "Server i SQLite checked."
  ],
  "🛠 Opciones del programa": [
    "🛠 Program options",
    "🛠 Options du programme",
    "🛠 Programmeinstellungen",
    "🛠 Opzioni del programma",
    "🛠 Opcje programu"
  ],
  "Datos del vendedor": [
    "Seller details",
    "Coordonnées du vendeur",
    "Verkäuferdaten",
    "Dati del venditore",
    "Dane sprzedawcy"
  ],
  "Moneda e impuestos": [
    "Currency and taxes",
    "Devise et taxes",
    "Währung und Steuern",
    "Valuta e imposte",
    "Waluta i podatki"
  ],
  "Apariencia": [
    "Appearance",
    "Apparence",
    "Darstellung",
    "Aspetto",
    "Wygląd"
  ],
  "Tema visual": [
    "Visual theme",
    "Thème visuel",
    "Visuelles Design",
    "Tema visivo",
    "Motyw wizualny"
  ],
  "Oscuro": [
    "Dark",
    "Sombre",
    "Dunkel",
    "Scuro",
    "Ciemny"
  ],
  "Claro": [
    "Light",
    "Clair",
    "Hell",
    "Chiaro",
    "Jasny"
  ],
  "Guardar apariencia": [
    "Save appearance",
    "Enregistrer l’apparence",
    "Darstellung speichern",
    "Salva aspetto",
    "Zapisz wygląd"
  ],
  "Perfiles de impresora · v1.230": [
    "Printer profiles · v1.230",
    "Profils d’imprimante · v1.230",
    "Druckerprofile · v1.230",
    "Profili stampante · v1.230",
    "drukarka profiles · v1.230"
  ],
  "Guardar perfil": [
    "Save profile",
    "Enregistrer le profil",
    "Profil speichern",
    "Salva profilo",
    "Zapisz profil"
  ],
  "Exportar perfiles CSV": [
    "Export profiles to CSV",
    "Exporter les profils en CSV",
    "Profile als CSV exportieren",
    "Esporta profili in CSV",
    "Eksportuj profile do CSV"
  ],
  "Exportar copia completa": [
    "Export full backup",
    "Exporter la sauvegarde complète",
    "Vollständige Sicherung exportieren",
    "Esporta backup completo",
    "eksportuj full kopia zapasowa"
  ],
  "Restaurar copia": [
    "Restore backup",
    "Restaurer la sauvegarde",
    "Sicherung wiederherstellen",
    "Ripristina backup",
    "przywróć kopia zapasowa"
  ],
  "No hay perfiles guardados.": [
    "No saved profiles.",
    "Aucun profil enregistré.",
    "Keine gespeicherten Profile.",
    "Nessun profilo salvato.",
    "Brak zapisanych profiles."
  ],
  "No hay bobinas registradas.": [
    "No spools recorded.",
    "Aucune bobine enregistrée.",
    "Keine Spulen erfasst.",
    "Nessuna bobina registrata.",
    "Nie zarejestrowano żadnych szpul."
  ],
  "No hay pedidos guardados.": [
    "No saved orders.",
    "Aucune commande enregistrée.",
    "Keine gespeicherten Aufträge.",
    "Nessun ordine salvato.",
    "Brak zapisanych zamówień."
  ],
  "Todavía no hay facturas guardadas.": [
    "There are no saved invoices yet.",
    "Aucune facture n’a encore été enregistrée.",
    "Es wurden noch keine Rechnungen gespeichert.",
    "Non ci sono ancora fatture salvate.",
    "Nie ma jeszcze zapisanych faktur."
  ],
  "Todavía no hay movimientos.": [
    "There are no entries yet.",
    "Il n’y a encore aucune écriture.",
    "Es gibt noch keine Buchungen.",
    "Non ci sono ancora movimenti.",
    "Nie ma jeszcze żadnych zapisów."
  ],
  "Todavía no hay cálculos guardados en SQLite.": [
    "No calculations saved yet.",
    "Aucun calcul enregistré pour le moment.",
    "Noch keine Berechnungen gespeichert.",
    "Ancora nessun calcolo salvato.",
    "No calculations Zapisano yet."
  ],
  "Sin precio de compra": [
    "No purchase price",
    "Aucun prix d’achat",
    "Kein Kaufpreis",
    "Nessun prezzo di acquisto",
    "No purchase Cena"
  ],
  "— Seleccionar perfil guardado en el apartado «Perfiles de impresora» —": [
    "— Select a saved profile under “Printer profiles” —",
    "— Sélectionnez un profil enregistré dans « Profils d’imprimante » —",
    "— Gespeichertes Profil unter „Druckerprofile“ auswählen —",
    "— Seleziona un profilo salvato in «Profili stampante» —",
    "— Wybierz a Zapisano profile under “drukarka profiles” —"
  ],
  "Selecciona un perfil guardado en «Perfiles de impresora» para aplicar sus valores de potencia, desgaste y mantenimiento.": [
    "Select a saved profile under “Printer profiles” to apply its power, wear and maintenance values.",
    "Sélectionnez un profil enregistré dans « Profils d’imprimante » pour appliquer ses valeurs de puissance, d’usure et d’entretien.",
    "Wählen Sie unter „Druckerprofile“ ein gespeichertes Profil, um dessen Werte für Leistung, Verschleiß und Wartung zu übernehmen.",
    "Seleziona un profilo salvato in «Profili stampante» per applicare i valori di potenza, usura e manutenzione.",
    "Wybierz zapisany profil w sekcji „Profile drukarek”, aby zastosować jego wartości mocy, zużycia i konserwacji."
  ],
  "Pulsa «Calcular precio final» para comprobar la rentabilidad.": [
    "Click “Calculate final price” to check profitability.",
    "Cliquez sur « Calculer le prix final » pour vérifier la rentabilité.",
    "Klicken Sie auf „Endpreis berechnen“, um die Rentabilität zu prüfen.",
    "Premi «Calcola prezzo finale» per verificare la redditività.",
    "Kliknij „Oblicz cenę końcową”, aby sprawdzić rentowność."
  ],
  "El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": [
    "The displayed tax is a configurable estimate. Check the rate that applies to your transaction, country, product and tax status.",
    "La taxe affichée est une estimation configurable. Vérifiez le taux applicable à votre opération, pays, produit et situation fiscale.",
    "Die angezeigte Steuer ist eine Schätzung. Prüfen Sie den für Ihren Vorgang, Ihr Land, Ihr Produkt und Ihren Steuerstatus geltenden Satz.",
    "L’imposta mostrata è una stima configurabile. Verifica l’aliquota applicabile all’operazione, al paese, al prodotto e alla tua situazione fiscale.",
    "Wyświetlony podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej."
  ],
  "Resumen del historial": [
    "History summary",
    "Résumé de l’historique",
    "Verlaufsübersicht",
    "Riepilogo cronologia",
    "Historia podsumowanie"
  ],
  "Simulador de fallos y reimpresiones": [
    "Failure and reprint simulator",
    "Simulateur d’échecs et de réimpressions",
    "Fehler- und Nachdrucksimulator",
    "Simulatore di errori e ristampe",
    "Failure i reprint simulator"
  ],
  "Comparador de precios": [
    "Price comparison",
    "Comparateur de prix",
    "Preisvergleich",
    "Confronto prezzi",
    "Cena comparison"
  ],
  "Tasaciones guardadas": [
    "Saved estimates",
    "Estimations enregistrées",
    "Gespeicherte Kalkulationen",
    "Stime salvate",
    "Zapisane wyceny"
  ],
  "Borrar historial": [
    "Clear history",
    "Effacer l’historique",
    "Verlauf löschen",
    "Cancella cronologia",
    "Wyczyść historię"
  ],
  "Movimientos y tasaciones contabilizadas": [
    "Accounting entries and recorded estimates",
    "Écritures et estimations comptabilisées",
    "Buchungen und erfasste Kalkulationen",
    "Movimenti e stime contabilizzati",
    "Zapisy księgowe i ujęte wyceny"
  ],
  "Gestión de clientes": [
    "Customer management",
    "Gestion des clients",
    "Kundenverwaltung",
    "Gestione clienti",
    "Zarządzanie klientami"
  ],
  "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y seguimiento de pedidos.": [
    "Central customer directory. Saved customers can be selected in quotes, invoices and order tracking.",
    "Répertoire central des clients. Les clients enregistrés peuvent être sélectionnés dans les devis, les factures et le suivi des commandes.",
    "Zentrales Kundenverzeichnis. Gespeicherte Kunden können in Angeboten, Rechnungen und der Auftragsverfolgung ausgewählt werden.",
    "Rubrica clienti centrale. I clienti salvati possono essere selezionati in preventivi, fatture e monitoraggio ordini.",
    "Central Klient directory. Zapisano Klienci can be wybrany w quotes, invoices i Zamówienie tracking."
  ],
  "No hay perfiles guardados": [
    "No saved profiles",
    "Aucun profil enregistré",
    "Keine Profile gespeichert",
    "Nessun profilo salvato",
    "Brak zapisanych profili"
  ],
  "Formato del número": [
    "Number format",
    "Format du numéro",
    "Nummernformat",
    "Formato numero",
    "Format numeru"
  ],
  "Número de factura (editable)": [
    "Invoice number (editable)",
    "Numéro de facture (modifiable)",
    "Rechnungsnummer (bearbeitbar)",
    "Numero fattura (modificabile)",
    "Numer faktury (można edytować)"
  ],
  "Vencimiento / condiciones de pago": [
    "Due date / payment terms",
    "Échéance / conditions de paiement",
    "Fälligkeit / Zahlungsbedingungen",
    "Scadenza / condizioni di pagamento",
    "Due Data / payment terms"
  ],
  "Facturas · Gestión y archivo": [
    "Invoices · Management and archive",
    "Factures · Gestion et archivage",
    "Rechnungen · Verwaltung und Archiv",
    "Fatture · Gestione e archivio",
    "Faktury · Zarządzanie i archiwum"
  ],
  "Presupuestos · Clientes y documentos": [
    "Quotes · Customers and documents",
    "Devis · Clients et documents",
    "Angebote · Kunden und Dokumente",
    "Preventivi · Clienti e documenti",
    "Quotes · Klienci i documents"
  ],
  "💾 Copias de seguridad": [
    "💾 Backups",
    "💾 Sauvegardes",
    "💾 Sicherungen",
    "💾 Backup",
    "💾 Backups"
  ],
  "🎨 Apariencia": [
    "🎨 Appearance",
    "🎨 Apparence",
    "🎨 Darstellung",
    "🎨 Aspetto",
    "🎨 Appearance"
  ],
  "Conexión con la Snapmaker U1": [
    "Snapmaker U1 connection",
    "Connexion à la Snapmaker U1",
    "Verbindung zur Snapmaker U1",
    "Connessione Snapmaker U1",
    "Snapmaker U1 connection"
  ],
  "Buscar automáticamente": [
    "Search automatically",
    "Rechercher automatiquement",
    "Automatisch suchen",
    "Cerca automaticamente",
    "Szukaj automatycznie"
  ],
  "Probar conexión": [
    "Test connection",
    "Tester la connexion",
    "Verbindung testen",
    "Verifica connessione",
    "Przetestuj połączenie"
  ],
  "Actualizar resumen": [
    "Refresh summary",
    "Actualiser le résumé",
    "Übersicht aktualisieren",
    "Aggiorna riepilogo",
    "Odśwież podsumowanie"
  ],
  "Estimar coste esperado": [
    "Estimate expected cost",
    "Estimer le coût attendu",
    "Erwartete Kosten schätzen",
    "Stima il costo previsto",
    "Oszacuj oczekiwany koszt"
  ],
  "Usar precio A": [
    "Use price A",
    "Utiliser le prix A",
    "Preis A verwenden",
    "Usa prezzo A",
    "Use Cena A"
  ],
  "Usar precio B": [
    "Use price B",
    "Utiliser le prix B",
    "Preis B verwenden",
    "Usa prezzo B",
    "Use Cena B"
  ],
  "Usar precio C": [
    "Use price C",
    "Utiliser le prix C",
    "Preis C verwenden",
    "Usa prezzo C",
    "Use Cena C"
  ],
  "🏠 Inicio": [
    "🏠 Home",
    "🏠 Accueil",
    "🏠 Startseite",
    "🏠 Home",
    "🏠 Home"
  ],
  "🛠 Opciones": [
    "🛠 Settings",
    "🛠 Options",
    "🛠 Einstellungen",
    "🛠 Opzioni",
    "🛠 Ustawienia"
  ],
  "👥 Clientes": [
    "👥 Customers",
    "👥 Clients",
    "👥 Kunden",
    "👥 Clienti",
    "👥 Klienci"
  ],
  "📄 Presupuestos": [
    "📄 Quotes",
    "📄 Devis",
    "📄 Angebote",
    "📄 Preventivi",
    "📄 Quotes"
  ],
  "📦 Seguimiento de pedidos": [
    "📦 Order tracking",
    "📦 Suivi des commandes",
    "📦 Auftragsverfolgung",
    "📦 Monitoraggio ordini",
    "📦 Zamówienie tracking"
  ],
  "🧾 Facturas": [
    "🧾 Invoices",
    "🧾 Factures",
    "🧾 Rechnungen",
    "🧾 Fatture",
    "🧾 Invoices"
  ],
  "🧵 Inventario de bobinas": [
    "🧵 Spool inventory",
    "🧵 Inventaire des bobines",
    "🧵 Spulenbestand",
    "🧵 Inventario bobine",
    "🧵 szpula Magazyn"
  ],
  "💶 Contabilidad": [
    "💶 Accounting",
    "💶 Comptabilité",
    "💶 Buchhaltung",
    "💶 Contabilità",
    "💶 księgowość"
  ],
  "＋ Cargar G-code laminado": [
    "＋ Load sliced G-code",
    "＋ Charger le G-code tranché",
    "＋ Geslicten G-Code laden",
    "＋ Carica G-code elaborato",
    "＋ Load sliced G-code"
  ],
  "▣ Guardar tasación": [
    "▣ Save estimate",
    "▣ Enregistrer l’estimation",
    "▣ Kalkulation speichern",
    "▣ Salva stima",
    "▣ Zapisz Wycena"
  ],
  "▤ Guardar presupuesto": [
    "▤ Save quote",
    "▤ Enregistrer le devis",
    "▤ Angebot speichern",
    "▤ Salva preventivo",
    "▤ Zapisz Oferta"
  ],
  "✓ Calcular precio final": [
    "✓ Calculate final price",
    "✓ Calculer le prix final",
    "✓ Endpreis berechnen",
    "✓ Calcola prezzo finale",
    "✓ Calculate final Cena"
  ],
  "📦 Realizar pedido": [
    "📦 Create order",
    "📦 Créer la commande",
    "📦 Auftrag anlegen",
    "📦 Crea ordine",
    "📦 Utwórz Zamówienie"
  ],
  "Cliente / referencia del pedido (opcional)": [
    "Customer / order reference (optional)",
    "Client / référence de commande (facultatif)",
    "Kunde / Auftragsreferenz (optional)",
    "Cliente / riferimento ordine (facoltativo)",
    "Klient / numer zamówienia (opcjonalnie)"
  ],
  "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.": [
    "Used when saving the estimate to classify it in Accounting. Personal jobs do not create sales or commercial profit.",
    "Utilisé lors de l’enregistrement de l’estimation pour la classer en comptabilité. Les impressions personnelles ne créent ni ventes ni bénéfices commerciaux.",
    "Wird beim Speichern der Kalkulation zur Zuordnung in der Buchhaltung verwendet. Private Drucke erzeugen keine Verkäufe oder Handelsgewinne.",
    "Usato al salvataggio della stima per classificarla in Contabilità. Le stampe personali non generano vendite né profitti commerciali.",
    "Used when zapisywanie the Wycena do classify it w księgowość. Personal jobs do not Utwórz sales lub commercial Zysk."
  ],
  "Carga el archivo G-code que has exportado desde Snapmaker Orca. También puedes rellenar los datos manualmente.": [
    "Load the G-code file exported from Snapmaker Orca. You can also enter the data manually.",
    "Chargez le fichier G-code exporté depuis Snapmaker Orca. Vous pouvez également saisir les données manuellement.",
    "Laden Sie die aus Snapmaker Orca exportierte G-Code-Datei. Sie können die Daten auch manuell eingeben.",
    "Carica il file G-code esportato da Snapmaker Orca. Puoi anche inserire i dati manualmente.",
    "Wczytaj plik G-code wyeksportowany z Snapmaker Orca. Możesz też wprowadzić dane ręcznie."
  ],
  "El archivo se procesa en este navegador y no se envía a ningún servidor.": [
    "The file is processed in this browser and is not sent to any server.",
    "Le fichier est traité dans ce navigateur et n’est envoyé à aucun serveur.",
    "Die Datei wird in diesem Browser verarbeitet und an keinen Server gesendet.",
    "Il file viene elaborato in questo browser e non viene inviato ad alcun server.",
    "The Plik is processed w this przeglądarka i is not sent do any server."
  ],
  "La imagen se guarda comprimida en el borrador y en el historial local.": [
    "The image is stored compressed in the draft and local history.",
    "L’image est enregistrée compressée dans le brouillon et l’historique local.",
    "Das Bild wird komprimiert im Entwurf und im lokalen Verlauf gespeichert.",
    "L’immagine viene salvata compressa nella bozza e nella cronologia locale.",
    "Obraz jest zapisywany w postaci skompresowanej w wersji roboczej i lokalnej historii."
  ],
  "€/kg": [
    "€/kg",
    "€/kg",
    "€/kg",
    "€/kg",
    "€/kg"
  ],
  "Los gramos por filamento incluyen el material de la pieza, soportes, torre de limpieza y purgas según las estadísticas del laminador. No se añade una cantidad extra para evitar duplicar el coste.": [
    "Grams per filament include the part, supports, purge tower and purges according to slicer statistics. No extra amount is added, to avoid double-counting costs.",
    "Les grammes par filament incluent la pièce, les supports, la tour de purge et les purges selon les statistiques du trancheur. Aucune quantité supplémentaire n’est ajoutée afin d’éviter un double comptage.",
    "Die Grammangabe je Filament umfasst Teil, Stützen, Reinigungsturm und Spülungen laut Slicer-Statistik. Es wird keine zusätzliche Menge addiert, um doppelte Kosten zu vermeiden.",
    "I grammi per filamento includono pezzo, supporti, torre di spurgo e spurghi secondo le statistiche dello slicer. Non viene aggiunta una quantità extra per evitare di duplicare i costi.",
    "Gramy filamentu obejmują część, podpory, wieżę czyszczącą i przepłukiwanie według statystyk slicera. Nie dodaje się dodatkowej ilości, aby uniknąć podwójnego naliczania kosztów."
  ],
  "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.": [
    "Snapmaker U1: estimate of EUR 160 per 1,000 h (EUR 0.16/h); editable and not guaranteed by the manufacturer.",
    "Snapmaker U1 : estimation de 160 EUR pour 1 000 h (0,16 EUR/h) ; modifiable et non garantie par le fabricant.",
    "Snapmaker U1: Schätzung 160 EUR pro 1.000 h (0,16 EUR/h); editierbar und nicht vom Hersteller garantiert.",
    "Snapmaker U1: stima di 160 EUR ogni 1.000 h (0,16 EUR/h); modificabile e non garantita dal produttore.",
    "Snapmaker U1: Wycena of EUR 160 na 1,000 h (EUR 0.16/h); editable i not guaranteed by the manufacturer."
  ],
  "Retirada de soportes, lijado y limpieza.": [
    "Support removal, sanding and cleaning.",
    "Retrait des supports, ponçage et nettoyage.",
    "Entfernen von Stützen, Schleifen und Reinigen.",
    "Rimozione supporti, levigatura e pulizia.",
    "Support removal, sanding i cleaning."
  ],
  "Pintura / acabados: coste monetario por unidad (": [
    "Painting / finishing: monetary cost per unit (",
    "Peinture / finition : coût par unité (",
    "Lackierung / Endbearbeitung: Kosten pro Einheit (",
    "Verniciatura / finiture: costo monetario per unità (",
    "Malowanie / wykończenie: koszt na sztukę ("
  ],
  "Introduce dinero por pieza, no minutos. El tiempo se añade en posprocesado o montaje.": [
    "Enter a monetary amount per part, not minutes. Time is added under post-processing or assembly.",
    "Saisissez un montant par pièce, pas des minutes. Le temps est ajouté au post-traitement ou au montage.",
    "Geben Sie einen Geldbetrag pro Teil ein, keine Minuten. Zeit wird bei Nachbearbeitung oder Montage hinzugefügt.",
    "Inserisci un importo per pezzo, non minuti. Il tempo si aggiunge in post-lavorazione o assemblaggio.",
    "Wprowadź kwotę pieniężną na część, nie minuty. Czas dodaje się w postprocessingu lub montażu."
  ],
  "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.": [
    "When you finish reviewing the part details, calculate the recommended price and profitability.",
    "Après avoir vérifié les données de la pièce, calculez le prix conseillé et la rentabilité.",
    "Wenn Sie die Teiledaten geprüft haben, berechnen Sie den empfohlenen Preis und die Rentabilität.",
    "Dopo aver controllato i dati del pezzo, calcola il prezzo consigliato e la redditività.",
    "When you finish reviewing the część szczegóły, calculate the recommended Cena i Rentowność."
  ],
  "El precio introducido siempre es la base sin impuestos. El desglose se actualiza al cambiar el precio o el porcentaje, sin pulsar el botón de cálculo.": [
    "The entered price is always the pre-tax base. The breakdown updates when the price or rate changes, without pressing the calculate button.",
    "Le prix saisi correspond toujours à la base hors taxes. Le détail est actualisé lorsque le prix ou le taux change, sans cliquer sur le bouton de calcul.",
    "Der eingegebene Preis ist immer der Nettobetrag. Die Aufschlüsselung wird bei Änderung des Preises oder Steuersatzes ohne Klick auf die Berechnungsschaltfläche aktualisiert.",
    "Il prezzo inserito è sempre la base al netto delle imposte. Il dettaglio si aggiorna quando cambia il prezzo o l’aliquota, senza premere il pulsante di calcolo.",
    "Wprowadzona cena jest zawsze kwotą bez podatku. Rozbicie aktualizuje się po zmianie ceny lub stawki bez naciskania przycisku obliczania."
  ],
  "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.": [
    "Profit is calculated on the sale price before tax; collected tax is shown separately. Commission is calculated on the total charged. Changing currency does not convert amounts; enter costs in the selected currency.",
    "Le bénéfice est calculé sur le prix hors taxes ; la taxe perçue est affichée séparément. La commission porte sur le montant total facturé. Le changement de devise ne convertit pas les montants : saisissez les coûts dans la devise choisie.",
    "Der Gewinn wird auf Basis des Verkaufspreises ohne Steuer berechnet; die Steuer wird separat angezeigt. Die Provision wird auf den Gesamtbetrag berechnet. Ein Währungswechsel rechnet Beträge nicht um; geben Sie Kosten in der ausgewählten Währung ein.",
    "Il profitto si calcola sul prezzo di vendita al netto delle imposte; le imposte riscosse sono mostrate a parte. La commissione si calcola sul totale addebitato. Cambiare valuta non converte gli importi: inserisci i costi nella valuta selezionata.",
    "Zysk is calculated na the sale Cena przed Podatek; collected Podatek is shown separately. Commission is calculated na the Łącznie charged. Changing Waluta does not convert amounts; enter koszty w Wybrana Waluta."
  ],
  "El redondeo nunca reduce el precio recomendado ni el porcentaje de beneficio objetivo.": [
    "Rounding never reduces the recommended price or the target profit percentage.",
    "L’arrondi ne réduit jamais le prix recommandé ni le pourcentage de bénéfice cible.",
    "Die Rundung senkt weder den empfohlenen Preis noch den angestrebten Gewinnprozentsatz.",
    "L’arrotondamento non riduce mai il prezzo consigliato né la percentuale di profitto obiettivo.",
    "Zaokrąglenie nigdy nie obniża zalecanej ceny ani docelowego procentu zysku."
  ],
  "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.": [
    "Reference price: documented launch price where available, otherwise current selling price; editable and not the amount paid. Loaded amounts are in EUR; USD sources use the ECB rate from 21 Oct 2026 (EUR 1 = USD 1.1234). Maintenance is a complexity-based budget estimate (spare-parts basket per 1,000 h), not a manufacturer rate; it is editable. Price fields without a source are left blank. Initial service life is 10,000 h and editable. Electricity, depreciation and maintenance are calculated separately.",
    "Prix de référence : prix de lancement documenté si disponible, sinon prix de vente actuel ; modifiable et différent du montant payé. Les montants sont en EUR ; les sources en USD utilisent le taux BCE du 21/10/2026 (1 EUR = 1,1234 USD). L’entretien est une estimation budgétaire selon la complexité (panier de pièces pour 1 000 h), pas un tarif du fabricant ; il est modifiable. Sans source de prix, le champ reste vide. Durée de vie initiale de 10 000 h, modifiable. Électricité, amortissement et entretien sont calculés séparément.",
    "Referenzpreis: dokumentierter Einführungspreis, sonst aktueller Verkaufspreis; editierbar und nicht zwingend der bezahlte Betrag. Beträge sind in EUR; für USD-Quellen gilt der EZB-Kurs vom 21.10.2026 (1 EUR = 1,1234 USD). Wartung ist eine komplexitätsbasierte Budgetschätzung (Ersatzteilkorb je 1.000 h), kein Herstellertarif; sie ist editierbar. Ohne Preisquelle bleibt das Feld leer. Anfangslebensdauer 10.000 h, editierbar. Strom, Abschreibung und Wartung werden getrennt berechnet.",
    "Prezzo di riferimento: prezzo di lancio documentato se disponibile, altrimenti prezzo di vendita corrente; modificabile e non necessariamente quanto pagato. Importi caricati in EUR; per fonti USD si usa il cambio BCE del 21/10/2026 (1 EUR = 1,1234 USD). La manutenzione è una stima di budget basata sulla complessità (cesto ricambi ogni 1.000 h), non una tariffa del produttore; è modificabile. Senza fonte prezzo, il campo resta vuoto. Vita utile iniziale 10.000 h, modificabile. Elettricità, ammortamento e manutenzione sono calcolati separatamente.",
    "Reference Cena: documented launch Cena where dostępny, otherwise bieżący selling Cena; editable i not the kwota paid. Loaded amounts are w EUR; USD sources use the ECB rate z 21 Oct 2026 (EUR 1 = USD 1.1234). Maintenance is a complexity-based budget Wycena (spare-parts basket na 1,000 h), not a manufacturer rate; it is editable. Cena fields bez a Źródło are left blank. Initial service life is 10,000 h i editable. Electricity, depreciation i maintenance are calculated separately."
  ],
  "Precio de referencia de venta / compra (EUR)": [
    "Reference selling / purchase price (EUR)",
    "Prix de vente / achat de référence (EUR)",
    "Referenz-Verkaufs-/Kaufpreis (EUR)",
    "Prezzo di vendita / acquisto di riferimento (EUR)",
    "Reference selling / purchase Cena (EUR)"
  ],
  "Vida útil estimada (horas)": [
    "Estimated service life (hours)",
    "Durée de vie estimée (heures)",
    "Geschätzte Lebensdauer (Stunden)",
    "Vita utile stimata (ore)",
    "Szacowana żywotność (godziny)"
  ],
  "Amortización por hora (calculada)": [
    "Depreciation per hour (calculated)",
    "Amortissement horaire (calculé)",
    "Abschreibung pro Stunde (berechnet)",
    "Ammortamento orario (calcolato)",
    "Amortyzacja na godzinę (obliczona)"
  ],
  "Estimación Snapmaker U1: 160 EUR de cesta presupuestaria / 1.000 h. Editable.": [
    "Snapmaker U1 estimate: EUR 160 spare-parts budget per 1,000 h. Editable.",
    "Estimation Snapmaker U1 : budget pièces de 160 EUR par 1 000 h. Modifiable.",
    "Schätzung für Snapmaker U1: Ersatzteilbudget 160 EUR pro 1.000 h. Bearbeitbar.",
    "Stima Snapmaker U1: budget ricambi di 160 EUR ogni 1.000 h. Modificabile.",
    "Snapmaker U1 Wycena: EUR 160 spare-parts budget na 1,000 h. Editable."
  ],
  "Antes de crear la factura: selecciona el cliente": [
    "Before creating the invoice: select the customer",
    "Avant de créer la facture : sélectionnez le client",
    "Vor dem Erstellen der Rechnung: Kunden auswählen",
    "Prima di creare la fattura: seleziona il cliente",
    "Przed utworzeniem faktury wybierz klienta"
  ],
  "Cancelar": [
    "Cancel",
    "Annuler",
    "Abbrechen",
    "Annulla",
    "Anuluj"
  ],
  "Todas": [
    "All",
    "Toutes",
    "Alle",
    "Tutte",
    "All"
  ],
  "Material, color y marca": [
    "Material, colour and brand",
    "Matériau, couleur et marque",
    "Material, Farbe und Marke",
    "Materiale, colore e marca",
    "Materiał, colour i brand"
  ],
  "Color (A–Z)": [
    "Colour (A–Z)",
    "Couleur (A–Z)",
    "Farbe (A–Z)",
    "Colore (A–Z)",
    "Colour (A–Z)"
  ],
  "Mayor cantidad de bobinas": [
    "Largest number of spools",
    "Plus grand nombre de bobines",
    "Größte Spulenanzahl",
    "Maggior numero di bobine",
    "Największa liczba szpul"
  ],
  "Menor cantidad de bobinas": [
    "Smallest number of spools",
    "Plus petit nombre de bobines",
    "Kleinste Spulenanzahl",
    "Minor numero di bobine",
    "Najmniejsza liczba szpul"
  ],
  "El tema se aplica a esta página. Algunos paneles integrados pueden conservar sus colores propios.": [
    "The theme applies to this page. Some embedded panels may retain their own colours.",
    "Le thème s’applique à cette page. Certains panneaux intégrés peuvent conserver leurs propres couleurs.",
    "Das Design gilt für diese Seite. Einige integrierte Bereiche können ihre eigenen Farben beibehalten.",
    "Il tema si applica a questa pagina. Alcuni pannelli integrati possono mantenere i propri colori.",
    "Motyw dotyczy tej strony. Niektóre osadzone panele mogą zachować własne kolory."
  ],
  "Importe cobrado": [
    "Amount collected",
    "Montant encaissé",
    "Eingenommener Betrag",
    "Importo incassato",
    "Otrzymana kwota"
  ],
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):": [
    "Estimated TOTAL manufacturing cost for “{file}” (not filament only). Breakdown: {breakdown}. {context}TOTAL amount to charge the customer (including tax):",
    "Coût TOTAL estimé de fabrication de « {file} » (pas seulement le filament). Détail : {breakdown}. {context}Montant TOTAL à facturer au client (taxes incluses) :",
    "Geschätzte HERSTELLUNGSKOSTEN für „{file}“ (nicht nur Filament). Aufschlüsselung: {breakdown}. {context}GESAMTBETRAG für den Kunden (einschließlich Steuer):",
    "Costo TOTALE stimato di produzione di «{file}» (non solo filamento). Dettaglio: {breakdown}. {context}Importo TOTALE da addebitare al cliente (tasse incluse):",
    "Estimated Łącznie manufacturing Koszt dla “{Plik}” (not filament only). Breakdown: {breakdown}. {context}Łącznie kwota do charge the Klient (including Podatek):"
  ],
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:": [
    "Estimated TOTAL manufacturing cost for “{file}” (not filament only). Breakdown: {breakdown}. {context}Check the print time and adjust the manufacturing cost if needed:",
    "Coût TOTAL estimé de fabrication de « {file} » (pas seulement le filament). Détail : {breakdown}. {context}Vérifiez la durée d’impression et corrigez le coût de fabrication si nécessaire :",
    "Geschätzte HERSTELLUNGSKOSTEN für „{file}“ (nicht nur Filament). Aufschlüsselung: {breakdown}. {context}Prüfen Sie die Druckzeit und korrigieren Sie bei Bedarf die Herstellungskosten:",
    "Costo TOTALE stimato di produzione di «{file}» (non solo filamento). Dettaglio: {breakdown}. {context}Controlla il tempo di stampa e correggi il costo di produzione se necessario:",
    "Estimated Łącznie manufacturing Koszt dla “{Plik}” (not filament only). Breakdown: {breakdown}. {context}Check the Drukuj Czas i adjust the manufacturing Koszt if needed:"
  ],
  "Versión 1.325 · SQLITE · HTML ÚNICO": [
    "Version 1.321 · SQLITE · HEALTH & SECURITY",
    "Version 1.325 · SQLITE · HTML UNIQUE",
    "Version 1.325 · SQLITE · EINE HTML-DATEI",
    "Versione 1.318 · SQLITE · DIAGNOSTICA E SICUREZZA",
    "Version 1.321 · SQLite · HEALTH & SECURITY"
  ],
  "Print Cost": [
    "Print Cost",
    "Print Cost",
    "Print Cost",
    "Print Cost",
    "Drukuj Koszt"
  ],
  "& Profit": [
    "& Profit",
    "& Profit",
    "& Profit",
    "& Profit",
    "& Zysk"
  ],
  "/kWh)": [
    "/kWh)",
    "/kWh)",
    "/kWh)",
    "/kWh)",
    "/kWh)"
  ],
  "/hora)": [
    "/hour)",
    "/heure)",
    "/Stunde)",
    "/ora)",
    "/hour)"
  ],
  "€/hora)": [
    "€/hour)",
    "€/heure)",
    "€/Stunde)",
    "€/ora)",
    "€/hour)"
  ],
  "Precio de venta por unidad (": [
    "Selling price per unit (",
    "Prix de vente par unité (",
    "Verkaufspreis pro Einheit (",
    "Prezzo di vendita per unità (",
    "Cena sprzedaży za sztukę ("
  ],
  "Comisión fija por venta (": [
    "Fixed commission per sale (",
    "Commission fixe par vente (",
    "Feste Provision pro Verkauf (",
    "Commissione fissa per vendita (",
    "Stała prowizja od sprzedaży ("
  ],
  "Beneficio mínimo deseado por unidad (": [
    "Desired minimum profit per unit (",
    "Bénéfice minimum souhaité par unité (",
    "Gewünschter Mindestgewinn pro Einheit (",
    "Profitto minimo desiderato per unità (",
    "Oczekiwany minimalny zysk na sztukę ("
  ],
  "Suplemento A (": [
    "Price increase A (",
    "Supplément A (",
    "Preisaufschlag A (",
    "Supplemento A (",
    "Cena increase A ("
  ],
  "Suplemento B (": [
    "Price increase B (",
    "Supplément B (",
    "Preisaufschlag B (",
    "Supplemento B (",
    "Cena increase B ("
  ],
  "Suplemento C (": [
    "Price increase C (",
    "Supplément C (",
    "Preisaufschlag C (",
    "Supplemento C (",
    "Cena increase C ("
  ],
  "Moneda de cálculo (se cambia en Opciones)": [
    "Calculation currency (change in Settings)",
    "Devise de calcul (à modifier dans Options)",
    "Berechnungswährung (unter Einstellungen ändern)",
    "Valuta di calcolo (modificabile in Opzioni)",
    "Calculation Waluta (change w Ustawienia)"
  ],
  "Perfil fiscal orientativo (se cambia en Opciones)": [
    "Indicative tax profile (change in Options)",
    "Profil fiscal indicatif (à modifier dans Options)",
    "Unverbindliches Steuerprofil (unter Optionen änderbar)",
    "Profilo fiscale indicativo (modificabile in Opzioni)",
    "Orientacyjny profil podatkowy (zmiana w Opcjach)"
  ],
  "Aplicar IVA / impuesto al cálculo": [
    "Apply VAT / tax to the calculation",
    "Appliquer la TVA / taxe au calcul",
    "MwSt. / Steuer in die Berechnung einbeziehen",
    "Applica IVA / imposta al calcolo",
    "Uwzględnij VAT / podatek w obliczeniach"
  ],
  "Perfil de canal de venta": [
    "Sales channel profile",
    "Profil du canal de vente",
    "Vertriebskanalprofil",
    "Profilo del canale di vendita",
    "Profil kanału sprzedaży"
  ],
  "Venta directa · 0%": [
    "Direct sale · 0%",
    "Vente directe · 0 %",
    "Direktverkauf · 0 %",
    "Vendita diretta · 0%",
    "Direct sale · 0%"
  ],
  "Exacto (sin redondear)": [
    "Exact (no rounding)",
    "Exact (sans arrondi)",
    "Exakt (keine Rundung)",
    "Esatto (senza arrotondare)",
    "Exact (no rounding)"
  ],
  "Subir al siguiente precio terminado en ,99": [
    "Round up to the next price ending in .99",
    "Arrondir au prix supérieur se terminant par ,99",
    "Auf den nächsten Preis mit ,99 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,99",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,99"
  ],
  "Subir al siguiente precio terminado en ,95": [
    "Round up to the next price ending in .95",
    "Arrondir au prix supérieur se terminant par ,95",
    "Auf den nächsten Preis mit ,95 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,95",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,95"
  ],
  "Subir al siguiente precio terminado en ,49": [
    "Round up to the next price ending in .49",
    "Arrondir au prix supérieur se terminant par ,49",
    "Auf den nächsten Preis mit ,49 aufrunden",
    "Arrotonda al prezzo successivo che termina in ,49",
    "Zaokrąglij w górę do najbliższej ceny kończącej się na ,49"
  ],
  "Subir al siguiente múltiplo de 0,50": [
    "Round up to the next multiple of 0.50",
    "Arrondir au multiple supérieur de 0,50",
    "Auf das nächste Vielfache von 0,50 aufrunden",
    "Arrotonda al multiplo successivo di 0,50",
    "Zaokrąglij w górę do najbliższej wielokrotności 0,50"
  ],
  "Subir al siguiente entero": [
    "Round up to next whole number",
    "Arrondir à l’entier supérieur",
    "Auf nächste ganze Zahl aufrunden",
    "Arrotonda all’intero successivo",
    "Round up do next whole number"
  ],
  "Euro (EUR · €)": [
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)",
    "Euro (EUR · €)"
  ],
  "Dólar estadounidense (USD · $)": [
    "US dollar (USD · $)",
    "Dollar américain (USD · $)",
    "US-Dollar (USD · $)",
    "Dollaro statunitense (USD · $)",
    "Dolar amerykański (USD · $)"
  ],
  "Peso mexicano (MXN · $)": [
    "Mexican peso (MXN · $)",
    "Peso mexicain (MXN · $)",
    "Mexikanischer Peso (MXN · $)",
    "Peso messicano (MXN · $)",
    "Mexican peso (MXN · $)"
  ],
  "Peso argentino (ARS · $)": [
    "Argentine peso (ARS · $)",
    "Peso argentin (ARS · $)",
    "Argentinischer Peso (ARS · $)",
    "Peso argentino (ARS · $)",
    "Argentine peso (ARS · $)"
  ],
  "Peso colombiano (COP · $)": [
    "Colombian peso (COP · $)",
    "Peso colombien (COP · $)",
    "Kolumbianischer Peso (COP · $)",
    "Peso colombiano (COP · $)",
    "Colombian peso (COP · $)"
  ],
  "Peso chileno (CLP · $)": [
    "Chilean peso (CLP · $)",
    "Peso chilien (CLP · $)",
    "Chilenischer Peso (CLP · $)",
    "Peso cileno (CLP · $)",
    "Chilean peso (CLP · $)"
  ],
  "Real brasileño (BRL · R$)": [
    "Brazilian real (BRL · R$)",
    "Réal brésilien (BRL · R$)",
    "Brasilianischer Real (BRL · R$)",
    "Real brasiliano (BRL · R$)",
    "Real brazylijski (BRL · R$)"
  ],
  "Sol peruano (PEN · S/)": [
    "Peruvian sol (PEN · S/)",
    "Sol péruvien (PEN · S/)",
    "Peruanischer Sol (PEN · S/)",
    "Sol peruviano (PEN · S/)",
    "Peruvian sol (PEN · S/)"
  ],
  "Peso uruguayo (UYU · $U)": [
    "Uruguayan peso (UYU · $U)",
    "Peso uruguayen (UYU · $U)",
    "Uruguayischer Peso (UYU · $U)",
    "Peso uruguaiano (UYU · $U)",
    "Uruguayan peso (UYU · $U)"
  ],
  "Bolívar venezolano (VES · Bs.)": [
    "Venezuelan bolívar (VES · Bs.)",
    "Bolivar vénézuélien (VES · Bs.)",
    "Venezolanischer Bolívar (VES · Bs.)",
    "Bolívar venezuelano (VES · Bs.)",
    "Boliwar wenezuelski (VES · Bs.)"
  ],
  "Rublo ruso (RUB · ₽)": [
    "Russian ruble (RUB · ₽)",
    "Rouble russe (RUB · ₽)",
    "Russischer Rubel (RUB · ₽)",
    "Rublo russo (RUB · ₽)",
    "Russian ruble (RUB · ₽)"
  ],
  "Zloty polaco (PLN · zł)": [
    "Polish złoty (PLN · zł)",
    "Złoty polonais (PLN · zł)",
    "Polnischer Złoty (PLN · zł)",
    "Złoty polacco (PLN · zł)",
    "Polish złoty (PLN · zł)"
  ],
  "Grivna ucraniana (UAH · ₴)": [
    "Ukrainian hryvnia (UAH · ₴)",
    "Hryvnia ukrainienne (UAH · ₴)",
    "Ukrainische Hrywnja (UAH · ₴)",
    "Grivnia ucraina (UAH · ₴)",
    "Ukrainian hryvnia (UAH · ₴)"
  ],
  "Libra esterlina (GBP · £)": [
    "Pound sterling (GBP · £)",
    "Livre sterling (GBP · £)",
    "Pfund Sterling (GBP · £)",
    "Sterlina britannica (GBP · £)",
    "Pound sterling (GBP · £)"
  ],
  "Dólar canadiense (CAD · $)": [
    "Canadian dollar (CAD · $)",
    "Dollar canadien (CAD · $)",
    "Kanadischer Dollar (CAD · $)",
    "Dollaro canadese (CAD · $)",
    "Dolar kanadyjski (CAD · $)"
  ],
  "Dólar australiano (AUD · $)": [
    "Australian dollar (AUD · $)",
    "Dollar australien (AUD · $)",
    "Australischer Dollar (AUD · $)",
    "Dollaro australiano (AUD · $)",
    "Dolar australijski (AUD · $)"
  ],
  "Yen japonés (JPY · ¥)": [
    "Japanese yen (JPY · ¥)",
    "Yen japonais (JPY · ¥)",
    "Japanischer Yen (JPY · ¥)",
    "Yen giapponese (JPY · ¥)",
    "Jen japoński (JPY · ¥)"
  ],
  "Yuan chino (CNY · ¥)": [
    "Chinese yuan (CNY · ¥)",
    "Yuan chinois (CNY · ¥)",
    "Chinesischer Yuan (CNY · ¥)",
    "Yuan cinese (CNY · ¥)",
    "Chinese yuan (CNY · ¥)"
  ],
  "Rupia india (INR · ₹)": [
    "Indian rupee (INR · ₹)",
    "Roupie indienne (INR · ₹)",
    "Indische Rupie (INR · ₹)",
    "Rupia indiana (INR · ₹)",
    "Indian rupee (INR · ₹)"
  ],
  "Personalizado": [
    "Custom",
    "Personnalisé",
    "Benutzerdefiniert",
    "Personalizzato",
    "Niestandardowe"
  ],
  "IVA / impuesto (%)": [
    "VAT / tax (%)",
    "TVA / taxe (%)",
    "MwSt. / Steuer (%)",
    "IVA / imposta (%)",
    "VAT / Podatek (%)"
  ],
  "España · IVA general 21%": [
    "Spain · standard VAT 21%",
    "Espagne · TVA standard 21 %",
    "Spanien · regulärer MwSt.-Satz 21 %",
    "Spagna · IVA ordinaria 21%",
    "Hiszpania · standardowa stawka VAT 21%"
  ],
  "Alemania · IVA general 19%": [
    "Germany · standard VAT 19%",
    "Allemagne · TVA standard 19 %",
    "Deutschland · Regelsteuersatz 19 %",
    "Germania · IVA ordinaria 19%",
    "Germany · standard VAT 19%"
  ],
  "Francia · IVA general 20%": [
    "France · standard VAT 20%",
    "France · TVA standard 20 %",
    "Frankreich · Regelsteuersatz 20 %",
    "Francia · IVA ordinaria 20%",
    "France · standard VAT 20%"
  ],
  "Italia · IVA general 22%": [
    "Italy · standard VAT 22%",
    "Italie · TVA standard 22 %",
    "Italien · Regelsteuersatz 22 %",
    "Italia · IVA ordinaria 22%",
    "Italy · standard VAT 22%"
  ],
  "Polonia · IVA general 23%": [
    "Poland · standard VAT 23%",
    "Pologne · TVA standard 23 %",
    "Polen · Regelsteuersatz 23 %",
    "Polonia · IVA ordinaria 23%",
    "Poland · standard VAT 23%"
  ],
  "Reino Unido · tipo general orientativo 20%": [
    "United Kingdom · indicative standard rate 20%",
    "Royaume-Uni · taux standard indicatif 20 %",
    "Vereinigtes Königreich · Richtwert Regelsteuersatz 20 %",
    "Regno Unito · aliquota ordinaria indicativa 20%",
    "United Kingdom · indicative standard rate 20%"
  ],
  "México · IVA general 16%": [
    "Mexico · standard VAT 16%",
    "Mexique · TVA standard 16 %",
    "Mexiko · regulärer MwSt.-Satz 16 %",
    "Messico · IVA ordinaria 16%",
    "Meksyk · standardowa stawka VAT 16%"
  ],
  "Japón · impuesto al consumo 10%": [
    "Japan · consumption tax 10%",
    "Japon · taxe à la consommation 10 %",
    "Japan · Verbrauchsteuer 10 %",
    "Giappone · imposta sui consumi 10%",
    "Japonia · podatek konsumpcyjny 10%"
  ],
  "No hay movimientos para exportar.": [
    "There are no entries to export.",
    "Aucune écriture à exporter.",
    "Es gibt keine Buchungen zum Exportieren.",
    "Non ci sono movimenti da esportare.",
    "Brak wpisów do wyeksportowania."
  ],
  "Escribe un concepto para el movimiento.": [
    "Enter a description for the entry.",
    "Saisissez un libellé pour l’écriture.",
    "Geben Sie eine Beschreibung für die Buchung ein.",
    "Inserisci una descrizione per il movimento.",
    "Wpisz opis wpisu."
  ],
  "El importe no puede ser negativo.": [
    "The amount cannot be negative.",
    "Le montant ne peut pas être négatif.",
    "Der Betrag darf nicht negativ sein.",
    "L’importo non può essere negativo.",
    "Kwota nie może być ujemna."
  ],
  "No hay bobinas para exportar.": [
    "No spools to export.",
    "Aucune bobine à exporter.",
    "Keine Spulen zum Exportieren vorhanden.",
    "Nessuna bobina da esportare.",
    "Brak szpul do wyeksportowania."
  ],
  "No hay pedidos para exportar.": [
    "There are no orders to export.",
    "Aucune commande à exporter.",
    "Keine Aufträge zum Exportieren vorhanden.",
    "Non ci sono ordini da esportare.",
    "Brak zamówień do wyeksportowania."
  ],
  "No hay perfiles para exportar.": [
    "No profiles to export.",
    "Aucun profil à exporter.",
    "Keine Profile zum Exportieren vorhanden.",
    "Nessun profilo da esportare.",
    "Brak profili do wyeksportowania."
  ],
  "Cálculo cargado.": [
    "Estimate loaded.",
    "Estimation chargée.",
    "Kalkulation geladen.",
    "Stima caricata.",
    "Wczytano kalkulację."
  ],
  "Perfil de impresora aplicado al cálculo.": [
    "Printer profile applied to the estimate.",
    "Profil d’imprimante appliqué à l’estimation.",
    "Druckerprofil auf die Kalkulation angewendet.",
    "Profilo stampante applicato al calcolo.",
    "Zastosowano profil drukarki do kalkulacji."
  ],
  "Precio final calculado y aplicado.": [
    "Final price calculated and applied.",
    "Prix final calculé et appliqué.",
    "Endpreis berechnet und übernommen.",
    "Prezzo finale calcolato e applicato.",
    "Obliczono i zastosowano cenę końcową."
  ],
  "Historial borrado.": [
    "History cleared.",
    "Historique effacé.",
    "Verlauf gelöscht.",
    "Cronologia cancellata.",
    "Historia cleared."
  ],
  "Cliente guardado.": [
    "Customer saved.",
    "Client enregistré.",
    "Kunde gespeichert.",
    "Cliente salvato.",
    "Klient zapisany."
  ],
  "Cliente guardado en este navegador.": [
    "Customer saved in this browser.",
    "Client enregistré dans ce navigateur.",
    "Kunde in diesem Browser gespeichert.",
    "Cliente salvato in questo browser.",
    "Klienta zapisano w tej przeglądarce."
  ],
  "Factura guardada.": [
    "Invoice saved.",
    "Facture enregistrée.",
    "Rechnung gespeichert.",
    "Fattura salvata.",
    "Zapisano fakturę."
  ],
  "Presupuesto guardado. El cliente está disponible en la pestaña «Clientes».": [
    "Quote saved. The customer is available in the “Customers” tab.",
    "Devis enregistré. Le client est disponible dans l’onglet « Clients ».",
    "Angebot gespeichert. Der Kunde ist im Tab „Kunden“ verfügbar.",
    "Preventivo salvato. Il cliente è disponibile nella scheda «Clienti».",
    "Zapisano ofertę. Klient jest dostępny na karcie „Klienci”."
  ],
  "Archivo cargado. Revisa los datos del laminado.": [
    "File loaded. Check the slicer data.",
    "Fichier chargé. Vérifiez les données du trancheur.",
    "Datei geladen. Prüfen Sie die Slicer-Daten.",
    "File caricato. Controlla i dati dello slicer.",
    "Plik załadowany. Sprawdź dane z slicera."
  ],
  "Imagen de la pieza añadida.": [
    "Part image added.",
    "Image de la pièce ajoutée.",
    "Teilebild hinzugefügt.",
    "Immagine del pezzo aggiunta.",
    "Dodano obraz części."
  ],
  "Imagen quitada.": [
    "Image removed.",
    "Image supprimée.",
    "Bild entfernt.",
    "Immagine rimossa.",
    "Usunięto obraz."
  ],
  "El coste debe ser un número igual o mayor que cero.": [
    "Cost must be a number greater than or equal to zero.",
    "Le coût doit être un nombre supérieur ou égal à zéro.",
    "Die Kosten müssen eine Zahl größer oder gleich null sein.",
    "Il costo deve essere un numero maggiore o uguale a zero.",
    "Koszt musi być liczbą większą lub równą zero."
  ],
  "El precio de venta debe ser un número igual o mayor que cero.": [
    "Sale price must be a number greater than or equal to zero.",
    "Le prix de vente doit être un nombre supérieur ou égal à zéro.",
    "Der Verkaufspreis muss eine Zahl größer oder gleich null sein.",
    "Il prezzo di vendita deve essere un numero maggiore o uguale a zero.",
    "Cena sprzedaży musi być liczbą większą lub równą zero."
  ],
  "El número de factura no puede estar vacío.": [
    "The invoice number cannot be empty.",
    "Le numéro de facture ne peut pas être vide.",
    "Die Rechnungsnummer darf nicht leer sein.",
    "Il numero della fattura non può essere vuoto.",
    "Numer faktury nie może być pusty."
  ],
  "Selecciona primero un cliente guardado.": [
    "Select a saved customer first.",
    "Sélectionnez d’abord un client enregistré.",
    "Wählen Sie zuerst einen gespeicherten Kunden aus.",
    "Seleziona prima un cliente salvato.",
    "Najpierw wybierz zapisanego klienta."
  ],
  "Selecciona primero un cliente.": [
    "Select a customer first.",
    "Sélectionnez d’abord un client.",
    "Wählen Sie zuerst einen Kunden aus.",
    "Seleziona prima un cliente.",
    "Najpierw wybierz klienta."
  ],
  "¿Borrar este cliente guardado?": [
    "Delete this saved customer?",
    "Supprimer ce client enregistré ?",
    "Diesen gespeicherten Kunden löschen?",
    "Eliminare questo cliente salvato?",
    "Usunąć tego zapisanego klienta?"
  ],
  "¿Borrar todo el historial guardado en este navegador?": [
    "Delete all history saved in this browser?",
    "Supprimer tout l’historique enregistré dans ce navigateur ?",
    "Den gesamten in diesem Browser gespeicherten Verlauf löschen?",
    "Eliminare tutta la cronologia salvata in questo browser?",
    "Usunąć całą historię zapisaną w tej przeglądarce?"
  ],
  "¿Empezar un cálculo nuevo? Los datos actuales se sustituirán.": [
    "Start a new estimate? The current data will be replaced.",
    "Commencer une nouvelle estimation ? Les données actuelles seront remplacées.",
    "Neue Kalkulation starten? Die aktuellen Daten werden ersetzt.",
    "Iniziare un nuovo calcolo? I dati attuali verranno sostituiti.",
    "Rozpocząć nową kalkulację? Bieżące dane zostaną zastąpione."
  ],
  "El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.": [
    "The browser blocked the report window. Allow pop-ups to export to PDF.",
    "Le navigateur a bloqué la fenêtre du rapport. Autorisez les fenêtres pop-up pour exporter en PDF.",
    "Der Browser hat das Berichtsfenster blockiert. Erlauben Sie Pop-ups, um als PDF zu exportieren.",
    "Il browser ha bloccato la finestra del rapporto. Consenti i popup per esportare in PDF.",
    "Przeglądarka zablokowała okno raportu. Zezwól na wyskakujące okienka, aby wyeksportować do PDF."
  ],
  "Al cargar el G-code se detectan automáticamente material, color y gramos. Si coincide con una única bobina en stock, se selecciona; si no, se crea un filamento genérico con el color del laminador.": [
    "When G-code is loaded, material, colour and grams are detected automatically. If exactly one stocked spool matches, it is selected; otherwise, a generic filament using the slicer colour is created.",
    "Au chargement du G-code, le matériau, la couleur et le poids en grammes sont détectés automatiquement. Si une seule bobine en stock correspond, elle est sélectionnée ; sinon, un filament générique utilisant la couleur du trancheur est créé.",
    "Beim Laden des G-Codes werden Material, Farbe und Grammzahl automatisch erkannt. Passt genau eine Lager-Spule, wird sie ausgewählt; andernfalls wird ein generisches Filament mit der Slicer-Farbe erstellt.",
    "Quando si carica il G-code, materiale, colore e grammi vengono rilevati automaticamente. Se corrisponde a una sola bobina in magazzino, viene selezionata; altrimenti viene creato un filamento generico con il colore dello slicer.",
    "Po wczytaniu G-code materiał, kolor i liczba gramów są wykrywane automatycznie. Jeśli pasuje dokładnie jedna szpula ze stanu magazynowego, zostaje wybrana; w przeciwnym razie tworzony jest ogólny filament w kolorze z slicera."
  ],
  "Desmárcalo para calcular sin impuestos: el impuesto será 0,00 y el total será igual al precio base. El porcentaje fiscal queda guardado para volver a activarlo.": [
    "Uncheck to calculate without tax: tax will be 0.00 and the total will equal the base price. The tax rate is saved so you can enable it again later.",
    "Décochez pour calculer hors taxes : la taxe sera de 0,00 et le total sera égal au prix de base. Le taux reste enregistré pour être réactivé ultérieurement.",
    "Deaktivieren, um ohne Steuer zu rechnen: Die Steuer beträgt 0,00 und der Gesamtbetrag entspricht dem Grundpreis. Der Steuersatz bleibt zum späteren Aktivieren gespeichert.",
    "Deseleziona per calcolare senza imposte: l’imposta sarà 0,00 e il totale corrisponderà al prezzo base. L’aliquota resta salvata per riattivarla in seguito.",
    "Odznacz, aby obliczać bez podatku: podatek wyniesie 0,00, a suma będzie równa cenie podstawowej. Stawka podatku zostanie zapisana, aby można ją było ponownie włączyć."
  ],
  "Porcentajes ilustrativos editables; comprueba las tarifas reales de tu cuenta.": [
    "Illustrative, editable percentages; check your account’s actual fees.",
    "Pourcentages indicatifs modifiables ; vérifiez les frais réels de votre compte.",
    "Veranschaulichende, editierbare Prozentsätze; prüfen Sie die tatsächlichen Gebühren Ihres Kontos.",
    "Percentuali indicative e modificabili; verifica le tariffe effettive del tuo account.",
    "Przykładowe wartości procentowe, które można edytować; sprawdź rzeczywiste opłaty na swoim koncie."
  ],
  "Si la plataforma cobra una cantidad fija por operación, introdúcela aquí.": [
    "If the platform charges a fixed amount per transaction, enter it here.",
    "Si la plateforme facture un montant fixe par transaction, saisissez-le ici.",
    "Wenn die Plattform einen festen Betrag pro Transaktion berechnet, geben Sie ihn hier ein.",
    "Se la piattaforma addebita un importo fisso per transazione, inseriscilo qui.",
    "Jeśli platforma pobiera stałą opłatę za transakcję, wpisz ją tutaj."
  ],
  "Ejemplo: coste 6,99 € + beneficio del 200 % = 20,97 € antes de comisiones e impuestos.": [
    "Example: cost €6.99 + 200% profit = €20.97 before fees and tax.",
    "Exemple : coût de 6,99 € + bénéfice de 200 % = 20,97 € avant frais et taxes.",
    "Beispiel: Kosten 6,99 € + 200 % Gewinn = 20,97 € vor Gebühren und Steuern.",
    "Esempio: costo 6,99 € + profitto del 200% = 20,97 € prima di commissioni e imposte.",
    "Przykład: koszt 6,99 € + zysk 200% = 20,97 € przed prowizjami i podatkami."
  ],
  "El precio recomendado cubrirá este beneficio mínimo o el porcentaje de beneficio indicado, el que exija un precio mayor.": [
    "The recommended price will cover this minimum profit or the target profit percentage, whichever requires the higher price.",
    "Le prix conseillé couvrira ce bénéfice minimal ou le pourcentage visé, selon celui qui impose le prix le plus élevé.",
    "Der empfohlene Preis deckt diesen Mindestgewinn oder den Zielgewinnsatz ab, je nachdem, welcher den höheren Preis erfordert.",
    "Il prezzo consigliato coprirà questo profitto minimo o la percentuale indicata, a seconda di quale richiede il prezzo più alto.",
    "Zalecana cena pokryje minimalny zysk lub wskazany procent zysku — w zależności od tego, który wymaga wyższej ceny."
  ],
  "Base sin impuestos por unidad": [
    "Pre-tax base per unit",
    "Base hors taxes par unité",
    "Nettobasis pro Einheit",
    "Imponibile per unità",
    "Podstawa bez podatku na jednostkę"
  ],
  "Impuesto por unidad": [
    "Tax per unit",
    "Taxe par unité",
    "Steuer pro Einheit",
    "Imposta per unità",
    "Podatek na sztukę"
  ],
  "Total con impuestos por unidad": [
    "Total including tax per unit",
    "Total TTC par unité",
    "Gesamtbetrag inkl. Steuer pro Einheit",
    "Totale con imposte per unità",
    "Suma z podatkiem na sztukę"
  ],
  "Impuesto total del pedido": [
    "Total order tax",
    "Taxe totale de la commande",
    "Gesamtsteuer des Auftrags",
    "Imposta totale dell’ordine",
    "Łączny podatek od zamówienia"
  ],
  "Coste de filamento": [
    "Filament cost",
    "Coût du filament",
    "Filamentkosten",
    "Costo del filamento",
    "Koszt filamentu"
  ],
  "Precio sin impuestos / unidad": [
    "Price excluding tax / unit",
    "Prix hors taxes / unité",
    "Preis ohne Steuern / Einheit",
    "Prezzo al netto delle imposte / unità",
    "Cena bez podatku / szt."
  ],
  "Impuestos por unidad": [
    "Tax per unit",
    "Taxes par unité",
    "Steuern pro Einheit",
    "Imposte per unità",
    "Podatki na sztukę"
  ],
  "Impuestos totales del pedido": [
    "Total order taxes",
    "Taxes totales de la commande",
    "Gesamtsteuern des Auftrags",
    "Imposte totali dell’ordine",
    "Łączne podatki od zamówienia"
  ],
  "Precio con impuestos / unidad": [
    "Price including tax / unit",
    "Prix TTC / unité",
    "Preis inklusive Steuern / Einheit",
    "Prezzo con imposte / unità",
    "Cena z podatkiem / szt."
  ],
  "Comisión por unidad": [
    "Commission per unit",
    "Commission par unité",
    "Provision pro Einheit",
    "Commissione per unità",
    "Prowizja na sztukę"
  ],
  "Beneficio total del pedido": [
    "Total order profit",
    "Bénéfice total de la commande",
    "Gesamtgewinn des Auftrags",
    "Profitto totale dell’ordine",
    "Łączny zysk z zamówienia"
  ],
  "1 unidad": [
    "1 unit",
    "1 unité",
    "1 Stück",
    "1 unità",
    "1 Jednostka"
  ],
  "· importe total con impuestos": [
    "· total amount including tax",
    "· montant total TTC",
    "· Gesamtbetrag inkl. Steuer",
    "· importo totale imposte incluse",
    "· Łącznie kwota including Podatek"
  ],
  "Se actualizará al pulsar «Calcular precio final»": [
    "It will update when you click “Calculate final price”.",
    "La mise à jour se fera lorsque vous cliquerez sur « Calculer le prix final ».",
    "Die Aktualisierung erfolgt beim Klicken auf „Endpreis berechnen“.",
    "Si aggiornerà quando premi «Calcola prezzo finale».",
    "Zaktualizuje się po kliknięciu „Oblicz cenę końcową”."
  ],
  "Resumen de los cálculos guardados en la base de datos SQLite de este PC. No equivale a contabilidad ni a ventas cobradas.": [
    "Summary of calculations saved in this PC’s SQLite database. It is not equivalent to accounting or collected sales.",
    "Résumé des calculs enregistrés dans la base SQLite de ce PC. Il ne remplace ni la comptabilité ni les ventes encaissées.",
    "Zusammenfassung der in der SQLite-Datenbank dieses PCs gespeicherten Berechnungen. Sie entspricht weder einer Buchhaltung noch vereinnahmten Verkäufen.",
    "Riepilogo dei calcoli salvati nel database SQLite di questo PC. Non equivale alla contabilità né alle vendite incassate.",
    "Podsumowanie obliczeń zapisanych w bazie SQLite na tym komputerze. Nie zastępuje księgowości ani informacji o otrzymanych płatnościach."
  ],
  "Pulsa actualizar para resumir el historial guardado.": [
    "Click refresh to summarise the saved history.",
    "Cliquez sur Actualiser pour résumer l’historique enregistré.",
    "Klicken Sie auf Aktualisieren, um den gespeicherten Verlauf zusammenzufassen.",
    "Premi aggiorna per riepilogare la cronologia salvata.",
    "Kliknij odśwież, aby podsumować zapisaną historię."
  ],
  "Estimación independiente para ver cómo afectan las reimpresiones al coste de una pieza vendible.": [
    "Independent estimate showing how reprints affect the cost of a saleable part.",
    "Estimation indépendante montrant l’effet des réimpressions sur le coût d’une pièce vendable.",
    "Unabhängige Schätzung, wie sich Nachdrucke auf die Kosten eines verkaufsfähigen Teils auswirken.",
    "Stima indipendente per vedere come le ristampe incidono sul costo di un pezzo vendibile.",
    "Niezależny szacunek pokazujący wpływ ponownych wydruków na koszt części przeznaczonej do sprzedaży."
  ],
  "Probabilidad de fallo por intento (%)": [
    "Failure probability per attempt (%)",
    "Probabilité d’échec par tentative (%)",
    "Fehlerwahrscheinlichkeit pro Versuch (%)",
    "Probabilità di errore per tentativo (%)",
    "Prawdopodobieństwo niepowodzenia na próbę (%)"
  ],
  "Coste adicional por reintento": [
    "Additional cost per retry",
    "Coût supplémentaire par nouvelle tentative",
    "Zusätzliche Kosten pro Wiederholungsversuch",
    "Costo aggiuntivo per tentativo ripetuto",
    "Dodatkowy koszt ponownej próby"
  ],
  "Pulsa para estimar el coste esperado por pieza vendible.": [
    "Click to estimate the expected cost per saleable part.",
    "Cliquez pour estimer le coût attendu par pièce vendable.",
    "Klicken Sie, um die erwarteten Kosten pro verkaufsfähigem Teil zu schätzen.",
    "Premi per stimare il costo previsto per pezzo vendibile.",
    "Kliknij, aby oszacować oczekiwany koszt części przeznaczonej do sprzedaży."
  ],
  "Añade un suplemento al precio recomendado para comparar cuánto beneficio adicional obtendrías vendiendo la pieza más cara. Introduce 10, 15 o 20 para sumar esos euros al precio recomendado.": [
    "Add a surcharge to the recommended price to compare the extra profit from selling the part at a higher price. Enter 10, 15 or 20 to add that amount to the recommended price.",
    "Ajoutez un supplément au prix recommandé pour comparer le bénéfice supplémentaire obtenu en vendant la pièce plus cher. Saisissez 10, 15 ou 20 pour ajouter ce montant au prix recommandé.",
    "Fügen Sie dem empfohlenen Preis einen Aufschlag hinzu, um den zusätzlichen Gewinn bei einem höheren Verkaufspreis zu vergleichen. Geben Sie 10, 15 oder 20 ein, um diesen Betrag zum empfohlenen Preis hinzuzufügen.",
    "Aggiungi un supplemento al prezzo consigliato per confrontare il profitto aggiuntivo vendendo il pezzo a un prezzo più alto. Inserisci 10, 15 o 20 per aggiungere tale importo al prezzo consigliato.",
    "Dodaj dopłatę do zalecanej ceny, aby porównać dodatkowy zysk ze sprzedaży części drożej. Wpisz 10, 15 lub 20, aby dodać tę kwotę do zalecanej ceny."
  ],
  "La potencia es editable. El mantenimiento estimado usa una cesta por categoría y 1.000 h; su base aparece al seleccionar un modelo.": [
    "Power is editable. Estimated maintenance uses a category-based parts basket per 1,000 hours; its basis appears when a model is selected.",
    "La puissance est modifiable. L’entretien estimé utilise un panier de pièces par catégorie et pour 1 000 h ; sa base apparaît lorsqu’un modèle est sélectionné.",
    "Die Leistung ist bearbeitbar. Die geschätzte Wartung basiert auf einem kategoriespezifischen Ersatzteilkorb je 1.000 Stunden; die Grundlage wird bei Auswahl eines Modells angezeigt.",
    "La potenza è modificabile. La manutenzione stimata usa un paniere di ricambi per categoria ogni 1.000 h; la base viene mostrata selezionando un modello.",
    "Moc można edytować. Szacunkowa konserwacja wykorzystuje zestaw części według kategorii na 1000 h; podstawa jest wyświetlana po wybraniu modelu."
  ],
  "Introduce un precio de compra para calcular amortización; mientras falte, el coste será 0.": [
    "Enter a purchase price to calculate depreciation; until provided, the cost will be 0.",
    "Saisissez un prix d’achat pour calculer l’amortissement ; tant qu’il manque, le coût sera de 0.",
    "Geben Sie einen Kaufpreis ein, um die Abschreibung zu berechnen; solange er fehlt, betragen die Kosten 0.",
    "Inserisci un prezzo d’acquisto per calcolare l’ammortamento; finché manca, il costo sarà 0.",
    "Wprowadź cenę zakupu, aby obliczyć amortyzację; dopóki jej brakuje, koszt wynosi 0."
  ],
  "👥 Gestión de clientes": [
    "👥 Customer management",
    "👥 Gestion des clients",
    "👥 Kundenverwaltung",
    "👥 Gestione clienti",
    "👥 Klient management"
  ],
  "Buscar": [
    "Search",
    "Rechercher",
    "Suchen",
    "Cerca",
    "Szukaj"
  ],
  "Clientes existentes": [
    "Existing customers",
    "Clients existants",
    "Vorhandene Kunden",
    "Clienti esistenti",
    "Existing Klienci"
  ],
  "Nombre / empresa *": [
    "Name / company *",
    "Nom / entreprise *",
    "Name / Unternehmen *",
    "Nome / azienda *",
    "Nazwa / company *"
  ],
  "Dirección de facturación / entrega": [
    "Billing / delivery address",
    "Adresse de facturation / livraison",
    "Rechnungs- / Lieferadresse",
    "Indirizzo di fatturazione / consegna",
    "Adres rozliczeniowy / dostawy"
  ],
  "Código postal": [
    "Postal code",
    "Code postal",
    "Postleitzahl",
    "Codice postale",
    "Kod pocztowy"
  ],
  "Provincia / Estado": [
    "Province / State",
    "Province / État",
    "Bundesland / Region",
    "Provincia / Stato",
    "Province / State"
  ],
  "Observaciones": [
    "Notes",
    "Notes",
    "Notizen",
    "Note",
    "Uwagi"
  ],
  "Limpiar campos": [
    "Clear fields",
    "Effacer les champs",
    "Felder leeren",
    "Pulisci campi",
    "Wyczyść fields"
  ],
  "Los clientes se guardan en la base de datos SQLite de este PC.": [
    "Customers are saved in this PC’s SQLite database.",
    "Les clients sont enregistrés dans la base SQLite de ce PC.",
    "Kunden werden in der SQLite-Datenbank dieses PCs gespeichert.",
    "I clienti vengono salvati nel database SQLite di questo PC.",
    "Klienci są zapisywani w bazie SQLite na tym komputerze."
  ],
  "Agenda de clientes": [
    "Customer directory",
    "Répertoire des clients",
    "Kundenkartei",
    "Rubrica clienti",
    "Książka klientów"
  ],
  "Crea facturas desde un presupuesto guardado o con los datos actuales de la calculadora. La numeración se propone correlativamente y puedes editarla manualmente.": [
    "Create invoices from a saved quote or the calculator’s current data. The next sequential number is suggested and can be edited manually.",
    "Créez des factures à partir d’un devis enregistré ou des données actuelles du calculateur. Le prochain numéro séquentiel est proposé et peut être modifié manuellement.",
    "Erstellen Sie Rechnungen aus einem gespeicherten Angebot oder den aktuellen Rechnerdaten. Die nächste fortlaufende Nummer wird vorgeschlagen und kann manuell geändert werden.",
    "Crea fatture da un preventivo salvato o dai dati correnti del calcolatore. Viene proposto il numero progressivo successivo, modificabile manualmente.",
    "Twórz faktury z zapisanej oferty lub bieżących danych kalkulatora. Proponowany jest kolejny numer, który można zmienić ręcznie."
  ],
  "Usa {AAAA} para el año y {0000} para el contador correlativo.": [
    "Use {AAAA} for the year and {0000} for the sequential counter.",
    "Utilisez {AAAA} pour l’année et {0000} pour le compteur séquentiel.",
    "Verwenden Sie {AAAA} für das Jahr und {0000} für den fortlaufenden Zähler.",
    "Usa {AAAA} per l’anno e {0000} per il contatore progressivo.",
    "Użyj {AAAA} dla roku i {0000} dla kolejnego numeru."
  ],
  "Siguiente correlativo": [
    "Next sequence number",
    "Prochain numéro séquentiel",
    "Nächste laufende Nummer",
    "Prossimo numero progressivo",
    "Następny numer kolejny"
  ],
  "＋ Crear factura desde calculadora": [
    "＋ Create invoice from calculator",
    "＋ Créer une facture depuis le calculateur",
    "＋ Rechnung aus dem Rechner erstellen",
    "＋ Crea fattura dal calcolatore",
    "＋ Utwórz fakturę z kalkulatora"
  ],
  "Crear desde presupuesto cargado": [
    "Create from loaded quote",
    "Créer depuis le devis chargé",
    "Aus geladenem Angebot erstellen",
    "Crea da preventivo caricato",
    "Utwórz z wczytanej oferty"
  ],
  "Elige un cliente guardado o rellena los datos para crear uno nuevo. La factura usará también los datos guardados en «Datos del vendedor».": [
    "Choose a saved customer or enter details to create a new one. The invoice will also use the details saved under “Seller details”.",
    "Choisissez un client enregistré ou saisissez les informations pour en créer un nouveau. La facture utilisera également les données enregistrées dans « Coordonnées du vendeur ».",
    "Wählen Sie einen gespeicherten Kunden oder geben Sie Daten für einen neuen Kunden ein. Die Rechnung verwendet auch die unter „Verkäuferdaten“ gespeicherten Angaben.",
    "Scegli un cliente salvato o inserisci i dati per crearne uno nuovo. La fattura userà anche i dati salvati in «Dati del venditore».",
    "Wybierz zapisanego klienta lub wpisz dane nowego. Faktura wykorzysta również dane zapisane w sekcji „Dane sprzedawcy”."
  ],
  "Las facturas guardadas se conservarán en la base de datos SQLite de este PC.": [
    "Saved invoices will be kept in this PC’s SQLite database.",
    "Les factures enregistrées seront conservées dans la base SQLite de ce PC.",
    "Gespeicherte Rechnungen bleiben in der SQLite-Datenbank dieses PCs erhalten.",
    "Le fatture salvate saranno conservate nel database SQLite di questo PC.",
    "Zapisane faktury będą przechowywane w bazie SQLite na tym komputerze."
  ],
  "Control manual de bobinas y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": [
    "Manual tracking of spools and remaining material. Price per kilogram is used as a reference for future estimates.",
    "Suivi manuel des bobines et du matériau restant. Le prix au kilo sert de référence pour les prochains calculs.",
    "Manuelle Verwaltung von Spulen und Restmaterial. Der Kilopreis dient als Referenz für künftige Kalkulationen.",
    "Gestione manuale delle bobine e del materiale residuo. Il prezzo al chilo è un riferimento per i prossimi calcoli.",
    "ręczny tracking of spools i remaining Materiał. Cena na kilogram is used as a reference dla future wyceny."
  ],
  "Pulsa un color para seleccionarlo o usa el selector para crear uno nuevo.": [
    "Click a colour to select it, or use the picker to create a new one.",
    "Cliquez sur une couleur pour la sélectionner ou utilisez le sélecteur pour en créer une nouvelle.",
    "Klicken Sie auf eine Farbe, um sie auszuwählen, oder verwenden Sie den Farbwähler, um eine neue zu erstellen.",
    "Fai clic su un colore per selezionarlo o usa il selettore per crearne uno nuovo.",
    "Kliknij kolor, aby go wybrać, lub użyj próbnika, aby utworzyć nowy."
  ],
  "Número de bobinas iguales": [
    "Number of identical spools",
    "Nombre de bobines identiques",
    "Anzahl identischer Spulen",
    "Numero di bobine uguali",
    "Liczba identycznych szpul"
  ],
  "Precio de una bobina": [
    "Price per spool",
    "Prix d’une bobine",
    "Preis pro Spule",
    "Prezzo di una bobina",
    "Cena jednej szpuli"
  ],
  "＋ Guardar color personalizado": [
    "＋ Save custom colour",
    "＋ Enregistrer une couleur personnalisée",
    "＋ Benutzerdefinierte Farbe speichern",
    "＋ Salva colore personalizzato",
    "＋ Zapisz custom colour"
  ],
  "Organiza los encargos, relaciona cada pedido con una tasación guardada y crea su presupuesto o factura desde aquí.": [
    "Organise jobs, link each order to a saved estimate, and create its quote or invoice here.",
    "Organisez les travaux, associez chaque commande à une estimation enregistrée et créez ici son devis ou sa facture.",
    "Organisieren Sie Aufträge, verknüpfen Sie jeden Auftrag mit einer gespeicherten Kalkulation und erstellen Sie hier das Angebot oder die Rechnung.",
    "Organizza i lavori, collega ogni ordine a una stima salvata e crea qui il preventivo o la fattura.",
    "Organizuj zlecenia, powiąż każde zamówienie z zapisaną wyceną i utwórz tutaj ofertę lub fakturę."
  ],
  "Registro local de pedidos y entregas. No envía mensajes ni sincroniza con otros dispositivos.": [
    "Local record of orders and deliveries. It does not send messages or sync with other devices.",
    "Registre local des commandes et livraisons. Il n’envoie pas de messages et ne se synchronise pas avec d’autres appareils.",
    "Lokale Erfassung von Aufträgen und Lieferungen. Es werden keine Nachrichten gesendet und keine anderen Geräte synchronisiert.",
    "Registro locale di ordini e consegne. Non invia messaggi né sincronizza altri dispositivi.",
    "Lokalny rejestr zamówień i dostaw. Nie wysyła wiadomości ani nie synchronizuje się z innymi urządzeniami."
  ],
  "＋ Crear cliente nuevo…": [
    "＋ Create new customer…",
    "＋ Créer un nouveau client…",
    "＋ Neuen Kunden erstellen…",
    "＋ Crea nuovo cliente…",
    "＋ Utwórz nowego klienta…"
  ],
  "＋ Crear cliente en Clientes": [
    "＋ Create customer in Customers",
    "＋ Créer un client dans Clients",
    "＋ Kunden unter Kunden anlegen",
    "＋ Crea cliente in Clienti",
    "＋ Utwórz klienta w zakładce Klienci"
  ],
  "Selecciona un cliente de la agenda o crea uno nuevo.": [
    "Select a customer from the directory or create a new one.",
    "Sélectionnez un client dans le répertoire ou créez-en un nouveau.",
    "Wählen Sie einen Kunden aus der Kartei oder legen Sie einen neuen an.",
    "Seleziona un cliente dalla rubrica o creane uno nuovo.",
    "Wybierz klienta z książki lub utwórz nowego."
  ],
  "— Selecciona una tasación guardada —": [
    "— Select a saved estimate —",
    "— Sélectionnez une estimation enregistrée —",
    "— Gespeicherte Kalkulation auswählen —",
    "— Seleziona una stima salvata —",
    "— Wybierz zapisaną wycenę —"
  ],
  "Posprocesado": [
    "Post-processing",
    "Post-traitement",
    "Nachbearbeitung",
    "Post-elaborazione",
    "Obróbka końcowa"
  ],
  "Total estimado": [
    "Estimated total",
    "Total estimé",
    "Geschätzter Gesamtbetrag",
    "Totale stimato",
    "Szacunkowa suma"
  ],
  "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.": [
    "Enter customer details in this form. When you save the quote, the new customer is added to “Customers” for reuse in orders, quotes and invoices. The printable document does not show internal costs or margin.",
    "Saisissez les coordonnées du client dans ce formulaire. À l’enregistrement du devis, le nouveau client est ajouté à l’onglet « Clients » pour être réutilisé. Le document imprimable n’affiche ni les coûts internes ni la marge.",
    "Geben Sie die Kundendaten ein. Beim Speichern wird der neue Kunde zu „Kunden“ hinzugefügt und kann für Aufträge, Angebote und Rechnungen wiederverwendet werden. Das Druckdokument zeigt keine internen Kosten oder Margen.",
    "Inserisci i dati del cliente. Salvando il preventivo, il nuovo cliente viene aggiunto alla scheda «Clienti» per riutilizzarlo in ordini, preventivi e fatture. Il documento stampabile non mostra costi interni o margine.",
    "Enter dane klienta w this form. When you Zapisz the Oferta, the nowy Klient is added do “Klienci” dla reuse w Zamówienia, quotes i invoices. The printable document does not Pokaż internal koszty lub margin."
  ],
  "Selecciona un cliente guardado. Para crear uno nuevo, usa el formulario de la pestaña «Clientes».": [
    "Select a saved customer. To create a new one, use the form in the “Customers” tab.",
    "Sélectionnez un client enregistré. Pour en créer un nouveau, utilisez le formulaire de l’onglet « Clients ».",
    "Wählen Sie einen gespeicherten Kunden aus. Einen neuen Kunden legen Sie über das Formular im Tab „Kunden“ an.",
    "Seleziona un cliente salvato. Per crearne uno nuovo, usa il modulo nella scheda «Clienti».",
    "Wybierz zapisanego klienta. Aby utworzyć nowego, użyj formularza na karcie „Klienci”."
  ],
  "Añade varias piezas distintas al mismo documento. Puedes cambiar descripción, unidades y precio.": [
    "Add several different parts to the same document. You can change the description, quantity and price.",
    "Ajoutez plusieurs pièces différentes au même document. Vous pouvez modifier la description, la quantité et le prix.",
    "Fügen Sie mehrere unterschiedliche Teile zum selben Dokument hinzu. Beschreibung, Menge und Preis lassen sich ändern.",
    "Aggiungi più pezzi diversi allo stesso documento. Puoi modificare descrizione, quantità e prezzo.",
    "Dodaj kilka różnych części do tego samego dokumentu. Możesz zmienić opis, liczbę sztuk i cenę."
  ],
  "Validez del presupuesto": [
    "Quote validity",
    "Validité du devis",
    "Angebotsgültigkeit",
    "Validità del preventivo",
    "Oferta validity"
  ],
  "Plazo estimado": [
    "Estimated lead time",
    "Délai estimé",
    "Geschätzte Lieferzeit",
    "Tempi stimati",
    "Estimated lead Czas"
  ],
  "Envío (importe)": [
    "Shipping (amount)",
    "Livraison (montant)",
    "Versand (Betrag)",
    "Spedizione (importo)",
    "Wysyłka (kwota)"
  ],
  "Descuento para el cliente (%)": [
    "Customer discount (%)",
    "Remise client (%)",
    "Kundenrabatt (%)",
    "Sconto cliente (%)",
    "Rabat dla klienta (%)"
  ],
  "Guardar / actualizar cliente": [
    "Save / update customer",
    "Enregistrer / mettre à jour le client",
    "Kunden speichern / aktualisieren",
    "Salva / aggiorna cliente",
    "Zapisz / zaktualizuj klienta"
  ],
  "Borrar cliente seleccionado": [
    "Clear selected customer",
    "Effacer le client sélectionné",
    "Ausgewählten Kunden entfernen",
    "Cancella il cliente selezionato",
    "Wyczyść wybranego klienta"
  ],
  "Datos del cliente": [
    "Customer details",
    "Coordonnées du client",
    "Kundendaten",
    "Dati del cliente",
    "Dane klienta"
  ],
  "Seleccionar cliente de la agenda": [
    "Select customer from address book",
    "Sélectionner un client du répertoire",
    "Kunden aus dem Adressbuch auswählen",
    "Seleziona cliente dalla rubrica",
    "Wybierz klienta z książki adresowej"
  ],
  "Los presupuestos se guardan en la base de datos SQLite de este PC y puedes volver a cargarlos, imprimirlos o eliminarlos.": [
    "Quotes are saved in this PC’s SQLite database and can be reloaded, printed or deleted.",
    "Les devis sont enregistrés dans la base SQLite de ce PC ; vous pouvez les recharger, les imprimer ou les supprimer.",
    "Angebote werden in der SQLite-Datenbank dieses PCs gespeichert und können erneut geladen, gedruckt oder gelöscht werden.",
    "I preventivi vengono salvati nel database SQLite di questo PC e puoi ricaricarli, stamparli o eliminarli.",
    "Oferty są zapisywane w bazie SQLite na tym komputerze; można je ponownie wczytać, wydrukować lub usunąć."
  ],
  "Snapmaker U1": [
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1",
    "Snapmaker U1"
  ],
  "Marca": [
    "Brand",
    "Marque",
    "Marke",
    "Marca",
    "Brand"
  ],
  "— Selecciona marca —": [
    "— Select brand —",
    "— Sélectionner une marque —",
    "— Marke auswählen —",
    "— Seleziona marca —",
    "— Wybierz markę —"
  ],
  "Modelo": [
    "Model",
    "Modèle",
    "Modell",
    "Modello",
    "Model"
  ],
  "— Selecciona primero la marca —": [
    "— Select the brand first —",
    "— Sélectionnez d’abord la marque —",
    "— Wählen Sie zuerst die Marke —",
    "— Seleziona prima la marca —",
    "— Najpierw wybierz markę —"
  ],
  "Nombre de impresora": [
    "Printer name",
    "Nom de l’imprimante",
    "Druckername",
    "Nome stampante",
    "drukarka Nazwa"
  ],
  "Potencia media (W)": [
    "Average power (W)",
    "Puissance moyenne (W)",
    "Durchschnittliche Leistung (W)",
    "Potenza media (W)",
    "Average power (W)"
  ],
  "Guardar IP manual": [
    "Save IP manually",
    "Enregistrer l’IP manuellement",
    "IP manuell speichern",
    "Salva IP manualmente",
    "Zapisz IP manually"
  ],
  "Ver impresora conectada": [
    "View connected printer",
    "Voir l’imprimante connectée",
    "Verbundene Drucker anzeigen",
    "Visualizza stampante connessa",
    "View connected drukarka"
  ],
  "Impresoras encontradas": [
    "Printers found",
    "Imprimantes trouvées",
    "Gefundene Drucker",
    "Stampanti trovate",
    "drukarki found"
  ],
  "Buscando impresoras…": [
    "Searching for printers…",
    "Recherche des imprimantes…",
    "Suche nach Druckern…",
    "Ricerca delle stampanti…",
    "Wyszukiwanie drukarek…"
  ],
  "Dirección del puente local (este ordenador)": [
    "Local bridge address (this computer)",
    "Adresse du pont local (cet ordinateur)",
    "Adresse der lokalen Bridge (dieser Computer)",
    "Indirizzo del bridge locale (questo computer)",
    "Adres lokalnego mostu (ten komputer)"
  ],
  "Ruta de estado": [
    "Status endpoint",
    "Chemin d’état",
    "Status-Endpunkt",
    "Percorso dello stato",
    "Ścieżka stanu"
  ],
  "IP de la impresora U1 (opcional)": [
    "U1 printer IP address (optional)",
    "Adresse IP de l’imprimante U1 (facultatif)",
    "IP-Adresse des U1-Druckers (optional)",
    "Indirizzo IP della stampante U1 (facoltativo)",
    "Adres IP drukarki U1 (opcjonalnie)"
  ],
  "Nombre personalizado de la impresora seleccionada": [
    "Custom name for the selected printer",
    "Nom personnalisé de l’imprimante sélectionnée",
    "Benutzerdefinierter Name des ausgewählten Druckers",
    "Nome personalizzato della stampante selezionata",
    "Niestandardowa nazwa wybranej drukarki"
  ],
  "Guardar nombre": [
    "Save name",
    "Enregistrer le nom",
    "Namen speichern",
    "Salva nome",
    "Zapisz nazwę"
  ],
  "Configuración de la impresora": [
    "Printer configuration",
    "Configuration de l’imprimante",
    "Druckerkonfiguration",
    "Configurazione della stampante",
    "Konfiguracja drukarki"
  ],
  "La dirección del puente es este ordenador; la IP de la U1 es la impresora. Puedes introducirla manualmente o intentar buscarla en la red local. La búsqueda requiere que el puente esté iniciado y que la impresora y el ordenador estén en la misma red.": [
    "The bridge address refers to this computer; the U1 IP is the printer. Enter it manually or search the local network. Searching requires the bridge to be running and the printer and computer to be on the same network.",
    "L’adresse du pont correspond à cet ordinateur ; l’adresse IP de l’U1 est celle de l’imprimante. Vous pouvez la saisir manuellement ou la rechercher sur le réseau local. La recherche nécessite que le pont soit démarré et que l’imprimante et l’ordinateur soient sur le même réseau.",
    "Die Bridge-Adresse gehört zu diesem Computer; die U1-IP gehört zum Drucker. Sie können sie manuell eingeben oder im lokalen Netzwerk suchen. Dafür muss die Bridge laufen und Drucker und Computer müssen sich im selben Netzwerk befinden.",
    "L’indirizzo del bridge è quello di questo computer; l’IP della U1 è quella della stampante. Puoi inserirla manualmente o cercarla nella rete locale. La ricerca richiede che il bridge sia avviato e che stampante e computer siano sulla stessa rete.",
    "Adres mostu dotyczy tego komputera, a adres IP U1 — drukarki. Możesz wpisać go ręcznie lub wyszukać w sieci lokalnej. Wyszukiwanie wymaga uruchomionego mostu oraz tej samej sieci dla drukarki i komputera."
  ],
  "País para impuestos": [
    "Tax country",
    "Pays pour les taxes",
    "Steuerland",
    "Paese per le imposte",
    "Podatek country"
  ],
  "España · IVA 21%": [
    "Spain · VAT 21%",
    "Espagne · TVA 21 %",
    "Spanien · MwSt. 21 %",
    "Spagna · IVA 21%",
    "Hiszpania · VAT 21%"
  ],
  "Portugal · IVA 23%": [
    "Portugal · VAT 23%",
    "Portugal · TVA 23 %",
    "Portugal · MwSt. 23 %",
    "Portogallo · IVA 23%",
    "Portugal · VAT 23%"
  ],
  "Francia · TVA 20%": [
    "France · VAT 20%",
    "France · TVA 20 %",
    "Frankreich · MwSt. 20 %",
    "Francia · IVA 20%",
    "France · VAT 20%"
  ],
  "Alemania · IVA 19%": [
    "Germany · VAT 19%",
    "Allemagne · TVA 19 %",
    "Deutschland · MwSt. 19 %",
    "Germania · IVA 19%",
    "Germany · VAT 19%"
  ],
  "Italia · IVA 22%": [
    "Italy · VAT 22%",
    "Italie · TVA 22 %",
    "Italien · MwSt. 22 %",
    "Italia · IVA 22%",
    "Italy · VAT 22%"
  ],
  "Reino Unido · VAT 20%": [
    "United Kingdom · VAT 20%",
    "Royaume-Uni · TVA 20 %",
    "Vereinigtes Königreich · MwSt. 20 %",
    "Regno Unito · IVA 20%",
    "United Kingdom · VAT 20%"
  ],
  "Estados Unidos · impuesto manual": [
    "United States · manual tax",
    "États-Unis · taxe manuelle",
    "USA · manuelle Steuer",
    "Stati Uniti · imposta manuale",
    "United States · ręczny Podatek"
  ],
  "Otro país · impuesto manual": [
    "Other country · manual tax",
    "Autre pays · taxe manuelle",
    "Anderes Land · manuelle Steuer",
    "Altro paese · imposta manuale",
    "Inny kraj · podatek ręczny"
  ],
  "Editar": [
    "Editer",
    "Modifier",
    "Bearbeiten",
    "Modifica",
    "Edytuj"
  ],
  "Guardar": [
    "Save",
    "Enregistrer",
    "Speichern",
    "Salva",
    "Zapisz"
  ],
  "Cliente": [
    "Customer",
    "Client",
    "Kunde",
    "Cliente",
    "Klient"
  ],
  "Seleccionar cliente": [
    "Select customer",
    "Sélectionner un client",
    "Kunden auswählen",
    "Seleziona cliente",
    "Wybierz klienta"
  ],
  "— Cliente nuevo —": [
    "— New customer —",
    "— Nouveau client —",
    "— Neuer Kunde —",
    "— Nuovo cliente —",
    "— Nowy klient —"
  ],
  "Ucrania · IVA general 20%": [
    "Ukraine · standard VAT 20%",
    "Ukraine · TVA standard 20 %",
    "Ukraine · Regelsteuersatz 20 %",
    "Ucraina · IVA ordinaria 20%",
    "Ukraine · standard VAT 20%"
  ],
  "Rusia · tipo general orientativo 20%": [
    "Russia · indicative standard rate 20%",
    "Russie · taux standard indicatif 20 %",
    "Russland · Richtwert Regelsteuersatz 20 %",
    "Russia · aliquota ordinaria indicativa 20%",
    "Russia · indicative standard rate 20%"
  ],
  "Argentina · IVA general 21%": [
    "Argentina · standard VAT 21%",
    "Argentine · TVA standard 21 %",
    "Argentinien · Regelsteuersatz 21 %",
    "Argentina · IVA ordinaria 21%",
    "Argentina · standard VAT 21%"
  ],
  "Colombia · IVA general 19%": [
    "Colombia · standard VAT 19%",
    "Colombie · TVA standard 19 %",
    "Kolumbien · Regelsteuersatz 19 %",
    "Colombia · IVA ordinaria 19%",
    "Colombia · standard VAT 19%"
  ],
  "Chile · IVA general 19%": [
    "Chile · standard VAT 19%",
    "Chili · TVA standard 19 %",
    "Chile · Regelsteuersatz 19 %",
    "Cile · IVA ordinaria 19%",
    "Chile · standard VAT 19%"
  ],
  "Brasil · referencia orientativa 17% (varía)": [
    "Brazil · indicative reference 17% (varies)",
    "Brésil · référence indicative 17 % (variable)",
    "Brasilien · Richtwert 17 % (variabel)",
    "Brasile · riferimento indicativo 17% (variabile)",
    "Brazylia · orientacyjna stawka 17% (zmienna)"
  ],
  "Perú · IGV 18%": [
    "Peru · IGV 18%",
    "Pérou · IGV 18 %",
    "Peru · IGV 18 %",
    "Perù · IGV 18%",
    "Peru · podatek IGV 18%"
  ],
  "Uruguay · IVA general 22%": [
    "Uruguay · standard VAT 22%",
    "Uruguay · TVA standard 22 %",
    "Uruguay · Regelsteuersatz 22 %",
    "Uruguay · IVA ordinaria 22%",
    "Uruguay · standard VAT 22%"
  ],
  "Venezuela · tipo general orientativo 16%": [
    "Venezuela · indicative standard rate 16%",
    "Venezuela · taux standard indicatif 16 %",
    "Venezuela · Richtwert Regelsteuersatz 16 %",
    "Venezuela · aliquota ordinaria indicativa 16%",
    "Venezuela · indicative standard rate 16%"
  ],
  "Estados Unidos · depende del estado/localidad": [
    "United States · varies by state/locality",
    "États-Unis · varie selon l’État/la localité",
    "USA · abhängig von Bundesstaat/Ort",
    "Stati Uniti · varia in base a stato/località",
    "United States · varies by state/locality"
  ],
  "Canadá · federal 5%, pueden añadirse impuestos provinciales": [
    "Canada · federal 5%, provincial taxes may apply",
    "Canada · fédéral 5 %, des taxes provinciales peuvent s’ajouter",
    "Kanada · Bund 5 %, zusätzliche Provinzsteuern möglich",
    "Canada · federale 5%, possono aggiungersi imposte provinciali",
    "Kanada · podatek federalny 5%, mogą obowiązywać podatki prowincjonalne"
  ],
  "Australia · GST 10%": [
    "Australia · GST 10%",
    "Australie · GST 10 %",
    "Australien · GST 10 %",
    "Australia · GST 10%",
    "Australia · GST 10%"
  ],
  "India · GST orientativo 18% (según producto)": [
    "India · indicative GST 18% (depends on product)",
    "Inde · GST indicatif 18 % (selon le produit)",
    "Indien · Richtwert für GST 18 % (produktabhängig)",
    "India · GST indicativa 18% (in base al prodotto)",
    "Indie · orientacyjny GST 18% (zależnie od produktu)"
  ],
  "China · referencia orientativa 13%": [
    "China · indicative reference 13%",
    "Chine · taux indicatif 13 %",
    "China · Richtwert 13 %",
    "Cina · riferimento indicativo 13%",
    "China · indicative reference 13%"
  ],
  "Marketplace · ejemplo 6,5%": [
    "Marketplace · example 6.5%",
    "Place de marché · exemple 6,5 %",
    "Marktplatz · Beispiel 6,5 %",
    "Marketplace · esempio 6,5%",
    "Marketplace · example 6.5%"
  ],
  "Marketplace · ejemplo 15%": [
    "Marketplace · example 15%",
    "Place de marché · exemple 15 %",
    "Marktplatz · Beispiel 15 %",
    "Marketplace · esempio 15%",
    "Marketplace · example 15%"
  ],
  "Pago online · ejemplo 2,9% + 0,30": [
    "Online payment · example 2.9% + 0.30",
    "Paiement en ligne · exemple 2,9 % + 0,30",
    "Online-Zahlung · Beispiel 2,9 % + 0,30",
    "Pagamento online · esempio 2,9% + 0,30",
    "Online payment · example 2.9% + 0.30"
  ],
  "Comisión de venta (%)": [
    "Sales commission (%)",
    "Commission de vente (%)",
    "Verkaufsprovision (%)",
    "Commissione di vendita (%)",
    "Prowizja od sprzedaży (%)"
  ],
  "Porcentaje de beneficio (%)": [
    "Profit percentage (%)",
    "Pourcentage de bénéfice (%)",
    "Gewinnprozentsatz (%)",
    "Percentuale di profitto (%)",
    "Procent zysku (%)"
  ],
  "Redondeo del precio recomendado": [
    "Recommended price rounding",
    "Arrondi du prix recommandé",
    "Rundung des empfohlenen Preises",
    "Arrotondamento del prezzo consigliato",
    "Zaokrąglanie zalecanej ceny"
  ],
  "Desglose del impuesto (vista previa)": [
    "Tax breakdown (preview)",
    "Détail de la taxe (aperçu)",
    "Steueraufschlüsselung (Vorschau)",
    "Dettaglio imposte (anteprima)",
    "Podatek breakdown (preview)"
  ],
  "—": [
    "—",
    "—",
    "—",
    "—",
    "—"
  ],
  "0,00 €": [
    "€0.00",
    "0,00 €",
    "0,00 €",
    "0,00 €",
    "€0.00"
  ],
  "/ unidad)": [
    "/ unit)",
    "/ unité)",
    "/ Stück)",
    "/ unità)",
    "/ Jednostka)"
  ],
  "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.": [
    "Print Cost & Profit v1.283 · Local SQLite on this PC; integrity and backup diagnostics.",
    "Print Cost & Profit v1.283 · SQLite local sur ce PC ; diagnostic d’intégrité et des sauvegardes.",
    "Print Cost & Profit v1.283 · Lokale SQLite-Datenbank auf diesem PC; Integritäts- und Sicherungsdiagnose.",
    "Print Cost & Profit v1.283 · SQLite locale su questo PC; diagnostica di integrità e backup.",
    "Drukuj Koszt & Zysk v1.283 · lokalny SQLite na this PC; integralność i kopia zapasowa diagnostics."
  ],
  "— Selecciona un cliente —": [
    "— Select a customer —",
    "— Sélectionnez un client —",
    "— Kunden auswählen —",
    "— Seleziona un cliente —",
    "— Wybierz klienta —"
  ],
  "DNI / NIE / CIF / NIF": [
    "Tax ID / VAT number",
    "Identifiant fiscal / TVA",
    "Steuer-ID / USt-IdNr.",
    "Codice fiscale / partita IVA",
    "Podatek ID / VAT number"
  ],
  "México · IVA 16%": [
    "Mexico · VAT 16%",
    "Mexique · TVA 16 %",
    "Mexiko · MwSt. 16 %",
    "Messico · IVA 16%",
    "Meksyk · VAT 16%"
  ],
  "Impuesto (%)": [
    "Tax (%)",
    "Taxe (%)",
    "Steuer (%)",
    "Imposta (%)",
    "Podatek (%)"
  ],
  "Cliente guardado": [
    "Saved customer",
    "Client enregistré",
    "Gespeicherter Kunde",
    "Cliente salvato",
    "Zapisany klient"
  ],
  "— Crear cliente nuevo / introducir datos —": [
    "— Create new customer / enter details —",
    "— Créer un nouveau client / saisir les données —",
    "— Neuen Kunden anlegen / Daten eingeben —",
    "— Crea nuovo cliente / inserisci i dati —",
    "— Utwórz nowego klienta / wprowadź dane —"
  ],
  "Continuar y crear factura": [
    "Continue and create invoice",
    "Continuer et créer la facture",
    "Weiter und Rechnung erstellen",
    "Continua e crea fattura",
    "Kontynuuj i Utwórz Faktura"
  ],
  "— Selecciona un cliente guardado —": [
    "— Select a saved customer —",
    "— Sélectionnez un client enregistré —",
    "— Gespeicherten Kunden auswählen —",
    "— Seleziona un cliente salvato —",
    "— Wybierz a Zapisano Klient —"
  ],
  "Escribe un nombre, correo o teléfono y pulsa «Buscar cliente».": [
    "Enter a name, email or phone number and click “Search customer”.",
    "Saisissez un nom, un e-mail ou un téléphone, puis cliquez sur « Rechercher un client ».",
    "Geben Sie einen Namen, eine E-Mail-Adresse oder Telefonnummer ein und klicken Sie auf „Kunden suchen“.",
    "Inserisci un nome, un’e-mail o un telefono e premi «Cerca cliente».",
    "Wpisz imię/nazwę, e-mail lub telefon i kliknij „Szukaj klienta”."
  ],
  "Se aplica al subtotal de las piezas y también aparecerá en la factura.": [
    "It is applied to the parts subtotal and will also appear on the invoice.",
    "Il s’applique au sous-total des pièces et apparaîtra également sur la facture.",
    "Er wird auf die Zwischensumme der Teile angewendet und erscheint auch auf der Rechnung.",
    "Si applica al subtotale dei pezzi e apparirà anche in fattura.",
    "Jest naliczany od sumy części i pojawi się również na fakturze."
  ],
  "Todavía no hay presupuestos guardados.": [
    "There are no saved quotes yet.",
    "Aucun devis n’a encore été enregistré.",
    "Es wurden noch keine Angebote gespeichert.",
    "Non ci sono ancora preventivi salvati.",
    "Nie zapisano jeszcze żadnych ofert."
  ],
  "RGB #000000 · Negro": [
    "RGB #000000 · Black",
    "RVB #000000 · Noir",
    "RGB #000000 · Schwarz",
    "RGB #000000 · Nero",
    "RGB #000000 · Black"
  ],
  "Ordenar bobinas": [
    "Sort spools",
    "Trier les bobines",
    "Spulen sortieren",
    "Ordina bobine",
    "Sort spools"
  ],
  "— Crear cliente nuevo…": [
    "— Create new customer…",
    "— Créer un nouveau client…",
    "— Neuen Kunden anlegen…",
    "— Crea nuovo cliente…",
    "— Utwórz nowy Klient…"
  ],
  "Carga un G-code y revisa los filamentos.": [
    "Load G-code and review the filaments.",
    "Chargez un G-code et vérifiez les filaments.",
    "G-Code laden und Filamente prüfen.",
    "Carica un G-code e controlla i filamenti.",
    "Wczytaj G-code i sprawdź filamenty."
  ],
  "Esperando puente…": [
    "Waiting for bridge…",
    "En attente de la passerelle…",
    "Warte auf Bridge…",
    "In attesa del bridge…",
    "Waiting dla bridge…"
  ],
  "Filamento reportado": [
    "Reported filament usage",
    "Consommation de filament signalée",
    "Gemeldeter Filamentverbrauch",
    "Consumo di filamento segnalato",
    "Zgłoszone zużycie filamentu"
  ],
  "Consumo previsto · G-code activo de la U1": [
    "Expected usage · active U1 G-code",
    "Consommation prévue · G-code actif de la U1",
    "Erwarteter Verbrauch · aktiver U1-G-Code",
    "Consumo previsto · G-code attivo della U1",
    "Przewidywane zużycie · aktywny G-code U1"
  ],
  "Cargando materiales…": [
    "Loading materials…",
    "Chargement des matériaux…",
    "Materialien werden geladen…",
    "Caricamento dei materiali…",
    "Ładowanie materiałów…"
  ],
  "Fuente pendiente: esperando archivo activo de la U1…": [
    "Source pending: waiting for the U1 active file…",
    "Source en attente : en attente du fichier actif de l’U1…",
    "Quelle ausstehend: Warte auf die aktive U1-Datei…",
    "Sorgente in attesa: in attesa del file attivo della U1…",
    "Oczekiwanie na źródło: oczekiwanie na aktywny plik U1…"
  ],
  "Leyendo datos del G-code… 0%": [
    "Reading G-code data… 0%",
    "Lecture des données G-code… 0 %",
    "G-Code-Daten werden gelesen… 0 %",
    "Lettura dei dati G-code… 0%",
    "Odczytywanie danych G-code… 0%"
  ],
  "Material / color": [
    "Material / colour",
    "Matériau / couleur",
    "Material / Farbe",
    "Materiale / colore",
    "Materiał / colour"
  ],
  "Bobina": [
    "Spool",
    "Bobine",
    "Spule",
    "Bobina",
    "szpula"
  ],
  "Estimación previa; no es una medición real por color. El stock solo se descuenta al completar el trabajo.": [
    "Preliminary estimate; not an actual per-colour measurement. Stock is deducted only when the job is completed.",
    "Estimation préliminaire ; il ne s’agit pas d’une mesure réelle par couleur. Le stock n’est déduit qu’une fois le travail terminé.",
    "Vorläufige Schätzung, keine tatsächliche Messung je Farbe. Der Bestand wird erst nach Abschluss des Auftrags abgezogen.",
    "Stima preliminare, non una misurazione reale per colore. Le scorte vengono detratte solo al completamento del lavoro.",
    "Wstępny szacunek, a nie rzeczywisty pomiar dla każdego koloru. Zapas jest odejmowany dopiero po zakończeniu zadania."
  ],
  "🖨 Snapmaker U1 · Mostrar panel": [
    "🖨 Snapmaker U1 · Show panel",
    "🖨 Snapmaker U1 · Afficher le panneau",
    "🖨 Snapmaker U1 · Bereich anzeigen",
    "🖨 Snapmaker U1 · Mostra pannello",
    "🖨 Snapmaker U1 · Pokaż panel"
  ],
  "Resumen local basado en las tasaciones guardadas y los movimientos que añadas. Los importes de la calculadora son estimaciones, no cobros confirmados.": [
    "Local summary based on saved estimates and entries you add. Calculator amounts are estimates, not confirmed receipts.",
    "Résumé local basé sur les estimations enregistrées et les écritures ajoutées. Les montants du calculateur sont des estimations, pas des encaissements confirmés.",
    "Lokale Zusammenfassung gespeicherter Kalkulationen und hinzugefügter Buchungen. Rechnerbeträge sind Schätzungen, keine bestätigten Zahlungseingänge.",
    "Riepilogo locale basato sulle stime salvate e sui movimenti aggiunti. Gli importi del calcolatore sono stime, non incassi confermati.",
    "Lokalne podsumowanie zapisanych wycen i dodanych zapisów. Kwoty z kalkulatora są szacunkowe, a nie potwierdzone jako otrzymane płatności."
  ],
  "Ingreso de pedido cobrado": [
    "Collected order income",
    "Revenu de commande encaissé",
    "Erhaltener Auftragserlös",
    "Entrata dell’ordine incassata",
    "Otrzymany przychód z zamówienia"
  ],
  "Importe (€)": [
    "Amount (€)",
    "Montant (€)",
    "Betrag (€)",
    "Importo (€)",
    "kwota (€)"
  ],
  "Cada tasación guardada se clasifica una sola vez. Las impresiones personales solo suman costes; los pedidos suman costes y beneficio estimado.": [
    "Each saved estimate is classified only once. Personal prints add costs only; orders include costs and estimated profit.",
    "Chaque estimation enregistrée n’est classée qu’une seule fois. Les impressions personnelles ajoutent uniquement des coûts ; les commandes incluent les coûts et le bénéfice estimé.",
    "Jede gespeicherte Kalkulation wird nur einmal zugeordnet. Private Drucke erfassen nur Kosten; Aufträge erfassen Kosten und geschätzten Gewinn.",
    "Ogni stima salvata viene classificata una sola volta. Le stampe personali aggiungono solo costi; gli ordini includono costi e profitto stimato.",
    "Każda zapisana wycena jest klasyfikowana tylko raz. Wydruki prywatne uwzględniają wyłącznie koszty; zamówienia obejmują koszty i szacowany zysk."
  ],
  "Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.": [
    "General Print Cost & Profit preferences. Changes are saved in this PC’s SQLite database.",
    "Préférences générales de Print Cost & Profit. Les modifications sont enregistrées dans la base SQLite de ce PC.",
    "Allgemeine Einstellungen von Print Cost & Profit. Änderungen werden in der SQLite-Datenbank dieses PCs gespeichert.",
    "Preferenze generali di Print Cost & Profit. Le modifiche vengono salvate nel database SQLite di questo PC.",
    "Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie danych SQLite na tym komputerze."
  ],
  "Configura tus datos una sola vez. Se guardan en este navegador y se reutilizan en presupuestos y documentos imprimibles.": [
    "Enter your details once. They are saved in this browser and reused in quotes and printable documents.",
    "Configurez vos coordonnées une seule fois. Elles sont enregistrées dans ce navigateur et réutilisées dans les devis et documents imprimables.",
    "Geben Sie Ihre Daten einmal ein. Sie werden in diesem Browser gespeichert und für Angebote und druckbare Dokumente wiederverwendet.",
    "Configura i tuoi dati una sola volta. Vengono salvati in questo browser e riutilizzati nei preventivi e nei documenti stampabili.",
    "Wprowadź dane raz. Są zapisywane w tej przeglądarce i używane ponownie w ofertach oraz dokumentach do wydruku."
  ],
  "Nombre comercial / empresa": [
    "Trading name / company",
    "Nom commercial / entreprise",
    "Firmenname",
    "Nome commerciale / azienda",
    "Trading Nazwa / company"
  ],
  "NIF / CIF (opcional)": [
    "Tax ID (optional)",
    "Identifiant fiscal (facultatif)",
    "Steuer-ID (optional)",
    "Codice fiscale (facoltativo)",
    "Podatek ID (optional)"
  ],
  "Guardar datos del vendedor": [
    "Save seller details",
    "Enregistrer les coordonnées du vendeur",
    "Verkäuferdaten speichern",
    "Salva dati venditore",
    "Zapisz dane sprzedawcy"
  ],
  "Datos no guardados todavía.": [
    "Data has not been saved yet.",
    "Les données n’ont pas encore été enregistrées.",
    "Daten wurden noch nicht gespeichert.",
    "I dati non sono ancora stati salvati.",
    "Dane nie zostały jeszcze zapisane."
  ],
  "Moneda del programa": [
    "Program currency",
    "Devise du programme",
    "Programm-Währung",
    "Valuta del programma",
    "Waluta programu"
  ],
  "Actualiza la moneda usada por la calculadora.": [
    "Updates the currency used by the calculator.",
    "Met à jour la devise utilisée par la calculatrice.",
    "Aktualisiert die von der Kalkulation verwendete Währung.",
    "Aggiorna la valuta usata dalla calcolatrice.",
    "Aktualizuje walutę używaną przez kalkulator."
  ],
  "Perfil fiscal orientativo": [
    "Indicative tax profile",
    "Profil fiscal indicatif",
    "Orientierendes Steuerprofil",
    "Profilo fiscale indicativo",
    "Orientacyjny profil podatkowy"
  ],
  "IVA / impuesto de la calculadora (%)": [
    "VAT / calculator tax (%)",
    "TVA / taxe de la calculatrice (%)",
    "MwSt. / Steuer der Kalkulation (%)",
    "IVA / imposta della calcolatrice (%)",
    "VAT / podatek kalkulatora (%)"
  ],
  "Aplicar impuestos en el cálculo": [
    "Apply taxes in the calculation",
    "Appliquer les taxes au calcul",
    "Steuern in die Berechnung einbeziehen",
    "Applica le imposte al calcolo",
    "Uwzględnij podatki w obliczeniach"
  ],
  "Esta opción se sincroniza con la casilla de impuestos de la calculadora. Los impuestos de facturas se mantienen en su propio formulario.": [
    "This option syncs with the calculator’s tax checkbox. Invoice taxes remain in their own form.",
    "Cette option est synchronisée avec la case de taxe du calculateur. Les taxes des factures restent dans leur propre formulaire.",
    "Diese Option wird mit dem Steuer-Kontrollkästchen des Rechners synchronisiert. Rechnungssteuern bleiben im eigenen Formular.",
    "Questa opzione si sincronizza con la casella delle imposte del calcolatore. Le imposte delle fatture restano nel proprio modulo.",
    "Ta opcja synchronizuje się z polem podatku w kalkulatorze. Podatki na fakturach pozostają w osobnym formularzu."
  ],
  "Guardar moneda e impuestos": [
    "Save currency and taxes",
    "Enregistrer la devise et les taxes",
    "Währung und Steuern speichern",
    "Salva valuta e imposte",
    "Zapisz walutę i podatki"
  ],
  "Si hay varias impresoras, selecciona aquí la que quieras utilizar.": [
    "If several printers are available, select the one you want to use here.",
    "Si plusieurs imprimantes sont disponibles, sélectionnez ici celle que vous souhaitez utiliser.",
    "Wenn mehrere Drucker vorhanden sind, wählen Sie hier den gewünschten Drucker aus.",
    "Se sono disponibili più stampanti, seleziona qui quella da usare.",
    "Jeśli dostępnych jest kilka drukarek, wybierz tutaj tę, której chcesz użyć."
  ],
  "El nombre se guarda en este ordenador asociado a la IP y se mostrará en la lista.": [
    "The name is saved on this computer and associated with the IP; it will appear in the list.",
    "Le nom est enregistré sur cet ordinateur et associé à l’adresse IP ; il apparaîtra dans la liste.",
    "Der Name wird auf diesem Computer mit der IP gespeichert und in der Liste angezeigt.",
    "Il nome viene salvato su questo computer e associato all’IP; verrà mostrato nell’elenco.",
    "Nazwa jest zapisywana na tym komputerze i powiązana z adresem IP; będzie widoczna na liście."
  ],
  "Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.": [
    "Export the information this app stores in the browser’s local storage. Save the file outside the temporary folder.",
    "Exportez les informations stockées par cette application dans le stockage local du navigateur. Conservez le fichier hors du dossier temporaire.",
    "Exportieren Sie die lokal im Browser gespeicherten App-Daten. Speichern Sie die Datei außerhalb des temporären Ordners.",
    "Esporta le informazioni salvate dall’app nella memoria locale del browser. Conserva il file fuori dalla cartella temporanea.",
    "eksportuj the information this app stores w the przeglądarka’s lokalny storage. Zapisz the Plik outside the temporary folder."
  ],
  "Reino Unido · tipo general 20%": [
    "United Kingdom · standard rate 20%",
    "Royaume-Uni · taux standard 20 %",
    "Vereinigtes Königreich · Regelsteuersatz 20 %",
    "Regno Unito · aliquota ordinaria 20%",
    "United Kingdom · standard rate 20%"
  ],
  "Argentina · IVA 21%": [
    "Argentina · VAT 21%",
    "Argentine · TVA 21 %",
    "Argentinien · MwSt. 21 %",
    "Argentina · IVA 21%",
    "Argentina · VAT 21%"
  ],
  "Colombia · IVA 19%": [
    "Colombia · VAT 19%",
    "Colombie · TVA 19 %",
    "Kolumbien · MwSt. 19 %",
    "Colombia · IVA 19%",
    "Colombia · VAT 19%"
  ],
  "Chile · IVA 19%": [
    "Chile · VAT 19%",
    "Chili · TVA 19 %",
    "Chile · MwSt. 19 %",
    "Cile · IVA 19%",
    "Chile · VAT 19%"
  ],
  "Otro": [
    "Other",
    "Autre",
    "Sonstiges",
    "Altro",
    "Other"
  ],
  "Genérico / sin marca": [
    "Generic / unbranded",
    "Générique / sans marque",
    "Generisch / ohne Marke",
    "Generico / senza marca",
    "Ogólny / bez marki"
  ],
  "Personalizado…": [
    "Custom…",
    "Personnalisé…",
    "Benutzerdefiniert…",
    "Personalizzato…",
    "Custom…"
  ],
  "— Cliente nuevo / introducir datos —": [
    "— New customer / enter details —",
    "— Nouveau client / saisir les données —",
    "— Neuer Kunde / Daten eingeben —",
    "— Nuovo cliente / inserisci i dati —",
    "— Nowy klient / wprowadź dane —"
  ],
  "Ocultar": [
    "Hide",
    "Masquer",
    "Ausblenden",
    "Nascondi",
    "Ukryj"
  ],
  "g": [
    "g",
    "g",
    "g",
    "g",
    "g"
  ],
  "👤 Datos del vendedor": [
    "👤 Seller details",
    "👤 Coordonnées du vendeur",
    "👤 Verkäuferdaten",
    "👤 Dati del venditore",
    "👤 Dane sprzedawcy"
  ],
  "💶 Moneda e impuestos": [
    "💶 Currency and taxes",
    "💶 Devise et taxes",
    "💶 Währung und Steuern",
    "💶 Valuta e imposte",
    "💶 Waluta i podatki"
  ],
  "🖨️ Conexión con la Snapmaker U1": [
    "🖨️ Snapmaker U1 connection",
    "🖨️ Connexion à la Snapmaker U1",
    "🖨️ Verbindung zur Snapmaker U1",
    "🖨️ Connessione Snapmaker U1",
    "🖨️ Snapmaker U1 connection"
  ],
  "FACTURA": [
    "INVOICE",
    "FACTURE",
    "RECHNUNG",
    "FATTURA",
    "Faktura"
  ],
  "PRESUPUESTO": [
    "QUOTE",
    "DEVIS",
    "ANGEBOT",
    "PREVENTIVO",
    "OFERTA"
  ],
  "Documento comercial": [
    "Commercial document",
    "Document commercial",
    "Geschäftsdokument",
    "Documento commerciale",
    "Dokument handlowy"
  ],
  "FECHA": [
    "DATE",
    "DATE",
    "DATUM",
    "DATA",
    "DATA"
  ],
  "EMISOR": [
    "ISSUER",
    "ÉMETTEUR",
    "AUSSTELLER",
    "EMITTENTE",
    "WYSTAWCA"
  ],
  "CLIENTE": [
    "CUSTOMER",
    "CLIENT",
    "KUNDE",
    "CLIENTE",
    "KLIENT"
  ],
  "DETALLE DEL DOCUMENTO": [
    "DOCUMENT DETAILS",
    "DÉTAILS DU DOCUMENT",
    "DOKUMENTDETAILS",
    "DETTAGLI DEL DOCUMENTO",
    "SZCZEGÓŁY DOKUMENTU"
  ],
  "CONCEPTO": [
    "DESCRIPTION",
    "LIBELLÉ",
    "BESCHREIBUNG",
    "DESCRIZIONE",
    "OPIS"
  ],
  "CANT.": [
    "QTY.",
    "QTÉ",
    "MENGE",
    "Q.TÀ",
    "ILOŚĆ"
  ],
  "PRECIO": [
    "PRICE",
    "PRIX",
    "PREIS",
    "PREZZO",
    "CENA"
  ],
  "IMPORTE": [
    "AMOUNT",
    "MONTANT",
    "BETRAG",
    "IMPORTO",
    "KWOTA"
  ],
  "Descuento": [
    "Discount",
    "Remise",
    "Rabatt",
    "Sconto",
    "Rabat"
  ],
  "Envío": [
    "Shipping",
    "Livraison",
    "Versand",
    "Spedizione",
    "Wysyłka"
  ],
  "Base imponible": [
    "Taxable base",
    "Base imposable",
    "Steuerbemessungsgrundlage",
    "Imponibile",
    "Podstawa opodatkowania"
  ],
  "Impuestos": [
    "Taxes",
    "Taxes",
    "Steuern",
    "Imposte",
    "Taxes"
  ],
  "TOTAL": [
    "TOTAL",
    "TOTAL",
    "GESAMT",
    "TOTALE",
    "SUMA"
  ],
  "Validez del presupuesto:": [
    "Quote valid until:",
    "Validité du devis :",
    "Angebot gültig bis:",
    "Validità del preventivo:",
    "Oferta ważna do:"
  ],
  "Plazo de entrega:": [
    "Delivery time:",
    "Délai de livraison :",
    "Lieferzeit:",
    "Tempi di consegna:",
    "Termin realizacji:"
  ],
  "Gracias por confiar en nosotros.": [
    "Thank you for your trust.",
    "Merci de votre confiance.",
    "Vielen Dank für Ihr Vertrauen.",
    "Grazie per la fiducia.",
    "Dziękujemy za zaufanie."
  ],
  "… y": [
    "… and",
    "… et",
    "… und",
    "… e",
    "… i"
  ],
  "línea(s) adicional(es)": [
    "additional line(s)",
    "ligne(s) supplémentaire(s)",
    "zusätzliche Zeile(n)",
    "riga/righe aggiuntiva/e",
    "additional line(s)"
  ],
  "… y {n} línea(s) adicional(es)": [
    "… and {n} additional line(s)",
    "… et {n} ligne(s) supplémentaire(s)",
    "… und {n} weitere Zeile(n)",
    "… e altre {n} riga/righe",
    "… i jeszcze {n} dodatkowych pozycji"
  ],
  "Vencida": [
    "Overdue",
    "Échue",
    "Überfällig",
    "Scaduta",
    "Overdue"
  ],
  "Contabilidad · Print Cost & Profit": [
    "Accounting · Print Cost & Profit",
    "Comptabilité · Print Cost & Profit",
    "Buchhaltung · Print Cost & Profit",
    "Contabilità · Print Cost & Profit",
    "Księgowość · Print Cost & Profit"
  ],
  "Ventas estimadas": [
    "Estimated sales",
    "Ventes estimées",
    "Geschätzte Verkäufe",
    "Vendite stimate",
    "Szacowana sprzedaż"
  ],
  "Beneficio estimado": [
    "Estimated profit",
    "Bénéfice estimé",
    "Geschätzter Gewinn",
    "Profitto stimato",
    "Szacowany zysk"
  ],
  "Informe generado el": [
    "Report generated on",
    "Rapport généré le",
    "Bericht erstellt am",
    "Rapporto generato il",
    "Raport wygenerowany dnia"
  ],
  "Tipo": [
    "Type",
    "Type",
    "Typ",
    "Tipo",
    "Typ"
  ],
  "Referencia": [
    "Reference",
    "Référence",
    "Referenz",
    "Riferimento",
    "Odniesienie"
  ],
  "Importe / coste": [
    "Amount / cost",
    "Montant / coût",
    "Betrag / Kosten",
    "Importo / costo",
    "Kwota / koszt"
  ],
  "Integración directa: {file}": [
    "Direct integration: {file}",
    "Intégration directe : {file}",
    "Direktintegration: {file}",
    "Integrazione diretta: {file}",
    "Integracja bezpośrednia: {Plik}"
  ],
  "Origen: {source}": [
    "Source: {source}",
    "Source : {source}",
    "Quelle: {source}",
    "Fonte: {source}",
    "Źródło: {Źródło}"
  ],
  "{n} filamento(s) detectado(s): {grams} g según las estadísticas de Orca": [
    "{n} filament(s) detected: {grams} g according to Orca statistics",
    "{n} filament(s) détecté(s) : {grams} g selon les statistiques d’Orca",
    "{n} Filament(e) erkannt: {grams} g laut Orca-Statistik",
    "Rilevati {n} filamenti: {grams} g secondo le statistiche di Orca",
    "Wykryto filamenty: {n}, {grams} g według statystyk Orca"
  ],
  "No se detectaron gramos; introduce el peso manualmente o comprueba los metadatos del G-code.": [
    "No filament weight was detected; enter the weight manually or check the G-code metadata.",
    "Aucun poids de filament détecté ; saisissez-le manuellement ou vérifiez les métadonnées du G-code.",
    "Es wurde kein Filamentgewicht erkannt. Geben Sie es manuell ein oder prüfen Sie die G-Code-Metadaten.",
    "Non è stato rilevato il peso del filamento; inseriscilo manualmente o controlla i metadati del G-code.",
    "Nie wykryto masy filamentu. Wpisz ją ręcznie lub sprawdź metadane pliku G-code."
  ],
  "Materiales y comprobación de inventario:": [
    "Materials and inventory check:",
    "Matériaux et vérification de l’inventaire :",
    "Materialien und Bestandsprüfung:",
    "Materiali e controllo dell’inventario:",
    "Materiały i kontrola stanu magazynowego:"
  ],
  "Precio del filamento importado desde el laminador: {n} precio(s) por kg. Comprueba que coincida con el precio de tu bobina.": [
    "Filament price imported from slicer: {n} price(s) per kg. Check that it matches your spool price.",
    "Prix du filament importé depuis le slicer : {n} prix au kg. Vérifiez qu’il correspond au prix de votre bobine.",
    "Vom Slicer importierter Filamentpreis: {n} Preis(e) pro kg. Prüfen Sie, ob er dem Spulenpreis entspricht.",
    "Prezzo filamento importato dallo slicer: {n} prezzo/i al kg. Verifica che corrisponda a quello della bobina.",
    "filament Cena imported z slicer: {n} Cena(s) na kg. Check that it matches your szpula Cena."
  ],
  "Tiempo detectado: {time} h (desde metadatos del G-code)": [
    "Detected time: {time} h (from G-code metadata)",
    "Durée détectée : {time} h (d’après les métadonnées du G-code)",
    "Erkannte Zeit: {time} h (aus G-Code-Metadaten)",
    "Tempo rilevato: {time} h (dai metadati G-code)",
    "Detected Czas: {Czas} h (z G-code metadata)"
  ],
  "No se detectó el tiempo; introdúcelo manualmente.": [
    "Time was not detected; enter it manually.",
    "La durée n’a pas été détectée ; saisissez-la manuellement.",
    "Die Zeit wurde nicht erkannt; geben Sie sie manuell ein.",
    "Il tempo non è stato rilevato; inseriscilo manualmente.",
    "Nie wykryto czasu; wprowadź go ręcznie."
  ],
  "El inventario solo se consulta: estas cantidades no se descuentan ni modifican el stock.": [
    "Inventory is read-only here: these quantities do not deduct from or change stock.",
    "L’inventaire est uniquement consulté : ces quantités ne sont pas déduites et ne modifient pas le stock.",
    "Das Lager wird hier nur gelesen: Diese Mengen werden nicht abgezogen und verändern den Bestand nicht.",
    "L’inventario viene solo consultato: queste quantità non vengono sottratte né modificano le scorte.",
    "Magazyn jest tutaj tylko odczytywany: te ilości nie są odejmowane ani nie zmieniają stanu magazynowego."
  ],
  "Comprueba siempre los datos detectados antes de calcular el precio.": [
    "Always check the detected data before calculating the price.",
    "Vérifiez toujours les données détectées avant de calculer le prix.",
    "Prüfen Sie die erkannten Daten immer, bevor Sie den Preis berechnen.",
    "Controlla sempre i dati rilevati prima di calcolare il prezzo.",
    "Zawsze sprawdzaj wykryte dane przed obliczeniem ceny."
  ],
  "Falta en inventario: {brand} {material} {color} ({hex}). Habría que comprar esta bobina.": [
    "Missing from inventory: {brand} {material} {color} ({hex}). This spool would need to be purchased.",
    "Absent de l’inventaire : {brand} {material} {color} ({hex}). Cette bobine doit être achetée.",
    "Nicht im Bestand: {brand} {material} {color} ({hex}). Diese Spule müsste gekauft werden.",
    "Assente dall’inventario: {brand} {material} {color} ({hex}). Questa bobina deve essere acquistata.",
    "Brak w magazynie: {brand} {material} {color} ({hex}). Tę szpulę trzeba będzie kupić."
  ],
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {left} g.": [
    "Inventory: {stock} g available · {used} g would be used · {left} g would remain.",
    "Inventaire : {stock} g disponibles · {used} g seraient utilisés · il resterait {left} g.",
    "Bestand: {stock} g vorhanden · {used} g würden verbraucht · {left} g blieben übrig.",
    "Inventario: {stock} g disponibili · ne verrebbero usati {used} g · ne resterebbero {left} g.",
    "Magazyn: dostępne {stock} g · zużycie wyniosłoby {used} g · pozostałoby {left} g."
  ],
  "Stock insuficiente: hay {stock} g y se necesitan {need} g; faltarían {missing} g. No llegaría con esta bobina.": [
    "Insufficient stock: {stock} g available, {need} g needed; {missing} g short. This spool is not enough.",
    "Stock insuffisant : {stock} g disponibles, {need} g nécessaires ; il manque {missing} g. Cette bobine ne suffit pas.",
    "Bestand reicht nicht: {stock} g vorhanden, {need} g benötigt; {missing} g fehlen. Diese Spule reicht nicht aus.",
    "Scorte insufficienti: {stock} g disponibili, {need} g necessari; ne mancano {missing} g. Questa bobina non basta.",
    "Insufficient Stan magazynowy: {Stan magazynowy} g dostępny, {need} g needed; {missing} g short. This szpula is not enough."
  ],
  "Color aproximado (HEX inventario: {hex}); revisa la bobina.": [
    "Approximate colour (inventory HEX: {hex}); check the spool.",
    "Couleur approximative (HEX du stock : {hex}) ; vérifiez la bobine.",
    "Ungefähre Farbe (Lager-HEX: {hex}); Spule prüfen.",
    "Colore approssimativo (HEX scorte: {hex}); controlla la bobina.",
    "Approximate colour (Magazyn HEX: {hex}); check the szpula."
  ],
  "Borrador guardado automáticamente": [
    "Draft saved automatically",
    "Brouillon enregistré automatiquement",
    "Entwurf automatisch gespeichert",
    "Bozza salvata automaticamente",
    "Draft Zapisano automatycznie"
  ],
  "No se pudo guardar automáticamente en este navegador": [
    "Could not save automatically in this browser",
    "Impossible d’enregistrer automatiquement dans ce navigateur",
    "Automatisches Speichern in diesem Browser nicht möglich",
    "Impossibile salvare automaticamente in questo browser",
    "Nie udało się Zapisz automatycznie w this przeglądarka"
  ],
  "Conectada": [
    "Connected",
    "Connectée",
    "Verbunden",
    "Connessa",
    "Połączono"
  ],
  "Sin conexión": [
    "Disconnected",
    "Déconnectée",
    "Nicht verbunden",
    "Disconnessa",
    "Brak połączenia"
  ],
  "Impresión": [
    "Print",
    "Impression",
    "Druck",
    "Stampa",
    "Wydruk"
  ],
  "Desconocido": [
    "Unknown",
    "Inconnu",
    "Unbekannt",
    "Sconosciuto",
    "Nieznany"
  ],
  "Sin archivo": [
    "No file",
    "Aucun fichier",
    "Keine Datei",
    "Nessun file",
    "Brak pliku"
  ],
  "Fuente: {source}": [
    "Source: {source}",
    "Source : {source}",
    "Quelle: {source}",
    "Fonte: {source}",
    "Źródło: {Źródło}"
  ],
  "Fuente confirmada: G-code activo de la U1 · {file}": [
    "Confirmed source: active U1 G-code · {file}",
    "Source confirmée : G-code actif de l’U1 · {file}",
    "Bestätigte Quelle: aktiver U1-G-Code · {file}",
    "Fonte confermata: G-code attivo della U1 · {file}",
    "Potwierdzone źródło: aktywny G-code U1 · {file}"
  ],
  "Consumo leído del G-code activo: {grams} g previstos. Bobinas asignadas: {assigned}/{total}. Comprueba las asignaciones antes del descuento.": [
    "Usage read from active G-code: {grams} g estimated. Spools assigned: {assigned}/{total}. Check assignments before deducting stock.",
    "Consommation lue dans le G-code actif : {grams} g estimés. Bobines attribuées : {assigned}/{total}. Vérifiez les attributions avant la déduction.",
    "Verbrauch aus aktivem G-Code: {grams} g geschätzt. Zugewiesene Spulen: {assigned}/{total}. Zuweisungen vor dem Abzug prüfen.",
    "Consumo letto dal G-code attivo: {grams} g stimati. Bobine assegnate: {assigned}/{total}. Verifica le assegnazioni prima della detrazione.",
    "Usage read z active G-code: {grams} g estimated. Spools assigned: {assigned}/{Łącznie}. Check assignments przed deducting Stan magazynowy."
  ],
  "No se muestran gramos: no se pudo leer el G-code activo de la U1.": [
    "Grams are not shown: the active U1 G-code could not be read.",
    "Les grammes ne sont pas affichés : impossible de lire le G-code actif de l’U1.",
    "Gramm werden nicht angezeigt: Der aktive U1-G-Code konnte nicht gelesen werden.",
    "I grammi non vengono mostrati: impossibile leggere il G-code attivo della U1.",
    "Nie pokazano gramów: nie udało się odczytać aktywnego G-code U1."
  ],
  "Consumo no disponible. No se debe descontar usando datos del cálculo cargado.": [
    "Consumption unavailable. Do not deduct stock using data from the loaded estimate.",
    "Consommation indisponible. Ne déduisez pas le stock à partir des données du calcul chargé.",
    "Verbrauch nicht verfügbar. Ziehen Sie keinen Bestand anhand der geladenen Kalkulation ab.",
    "Consumo non disponibile. Non sottrarre scorte usando i dati del calcolo caricato.",
    "Zużycie niedostępne. Nie odejmuj zapasów na podstawie danych z wczytanej kalkulacji."
  ],
  "printing": [
    "Printing",
    "En impression",
    "Druckt",
    "In stampa",
    "drukowanie"
  ],
  "paused": [
    "Paused",
    "En pause",
    "Pausiert",
    "In pausa",
    "Paused"
  ],
  "complete": [
    "Complete",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "Complete"
  ],
  "completed": [
    "Completed",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "ukończono"
  ],
  "finished": [
    "Finished",
    "Terminé",
    "Fertig",
    "Terminato",
    "Finished"
  ],
  "standby": [
    "Standby",
    "En veille",
    "Bereitschaft",
    "Standby",
    "Standby"
  ],
  "ready": [
    "Ready",
    "Prêt",
    "Bereit",
    "Pronto",
    "Ready"
  ],
  "idle": [
    "Idle",
    "Inactif",
    "Leerlauf",
    "Inattivo",
    "Idle"
  ],
  "{n} filamento(s) · {assigned} asignación(es) correctas · {pending} pendiente(s) de revisar": [
    "{n} filament(s) · {assigned} correct spool assignment(s) · {pending} to review",
    "{n} filament(s) · {assigned} attribution(s) correcte(s) · {pending} à vérifier",
    "{n} Filament(e) · {assigned} korrekt zugewiesen · {pending} zu prüfen",
    "{n} filamento/i · {assigned} assegnazione/i corretta/e · {pending} da verificare",
    "{n} filament(s) · {assigned} poprawny szpula assignment(s) · {pending} do review"
  ],
  "Total previsto: {grams} g": [
    "Estimated total: {grams} g",
    "Total estimé : {grams} g",
    "Geschätzte Gesamtmenge: {grams} g",
    "Totale stimato: {grams} g",
    "Estimated Łącznie: {grams} g"
  ],
  "Asignada": [
    "Assigned",
    "Affectée",
    "Zugeordnet",
    "Assegnata",
    "Assigned"
  ],
  "Fuente: Leyendo datos del G-code… {progress}% · {file}": [
    "Source: Reading G-code data… {progress}% · {file}",
    "Source : Lecture des données G-code… {progress} % · {file}",
    "Quelle: G-Code-Daten werden gelesen… {progress} % · {file}",
    "Fonte: Lettura dati G-code… {progress}% · {file}",
    "Źródło: Reading G-code data… {progress}% · {Plik}"
  ],
  "Leyendo datos del G-code… {progress}%": [
    "Reading G-code data… {progress}%",
    "Lecture des données G-code… {progress} %",
    "G-Code-Daten werden gelesen… {progress} %",
    "Lettura dati G-code… {progress}%",
    "Reading G-code data… {progress}%"
  ],
  "Fuente: leyendo G-code activo de la U1: {file}": [
    "Source: reading active U1 G-code: {file}",
    "Source : lecture du G-code actif de l’U1 : {file}",
    "Quelle: Aktiven U1-G-Code lesen: {file}",
    "Fonte: lettura del G-code attivo della U1: {file}",
    "Źródło: odczytywanie aktywnego G-code U1: {file}"
  ],
  "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.": [
    "Preliminary estimate, not an actual per-colour measurement. Stock is deducted only when the job is completed.",
    "Estimation préliminaire, pas une mesure réelle par couleur. Le stock n’est déduit qu’à la fin du travail.",
    "Vorläufige Schätzung, keine tatsächliche Messung je Farbe. Bestand wird erst nach Abschluss des Auftrags abgezogen.",
    "Stima preliminare, non una misurazione reale per colore. Le scorte vengono sottratte solo al completamento del lavoro.",
    "Preliminary Wycena, not an actual na-colour measurement. Stan magazynowy is deducted only when the job is ukończono."
  ],
  "Escenario": [
    "Scenario",
    "Scénario",
    "Szenario",
    "Scenario",
    "Scenario"
  ],
  "Suplemento": [
    "Increase",
    "Supplément",
    "Aufschlag",
    "Supplemento",
    "Increase"
  ],
  "Precio final": [
    "Final price",
    "Prix final",
    "Endpreis",
    "Prezzo finale",
    "Final Cena"
  ],
  "Coste/u.": [
    "Cost/unit",
    "Coût/unité",
    "Kosten/Stk.",
    "Costo/unità",
    "Koszt/Jednostka"
  ],
  "Beneficio/u.": [
    "Profit/unit",
    "Bénéfice/unité",
    "Gewinn/Stk.",
    "Profitto/unità",
    "Zysk/Jednostka"
  ],
  "Dif. vs recomendado": [
    "Difference vs recommended",
    "Écart par rapport au prix conseillé",
    "Abweichung zur Empfehlung",
    "Differenza rispetto al consigliato",
    "Difference vs recommended"
  ],
  "Beneficio total": [
    "Total profit",
    "Bénéfice total",
    "Gesamtgewinn",
    "Profitto totale",
    "Łącznie Zysk"
  ],
  "Margen": [
    "Margin",
    "Marge",
    "Marge",
    "Margine",
    "Margin"
  ],
  "Imagen": [
    "Image",
    "Image",
    "Bild",
    "Immagine",
    "Image"
  ],
  "Pieza": [
    "Part",
    "Pièce",
    "Teil",
    "Pezzo",
    "część"
  ],
  "Perfil": [
    "Profile",
    "Profil",
    "Profil",
    "Profilo",
    "Profile"
  ],
  "Venta/u.": [
    "Sale/unit",
    "Vente/unité",
    "Verkauf/Stk.",
    "Vendita/unità",
    "Sale/Jednostka"
  ],
  "Acciones": [
    "Actions",
    "Actions",
    "Aktionen",
    "Azioni",
    "Działania"
  ],
  "Cargar": [
    "Load",
    "Charger",
    "Laden",
    "Carica",
    "Load"
  ],
  "Eliminar": [
    "Delete",
    "Supprimer",
    "Löschen",
    "Elimina",
    "Usuń"
  ],
  "Añade un perfil para guardar los costes de cada impresora.": [
    "Add a profile to save each printer’s costs.",
    "Ajoutez un profil pour enregistrer les coûts de chaque imprimante.",
    "Fügen Sie ein Profil hinzu, um die Kosten jedes Druckers zu speichern.",
    "Aggiungi un profilo per salvare i costi di ogni stampante.",
    "Dodaj profil, aby zapisywać koszty każdej drukarki."
  ],
  "Perfil económico de impresora": [
    "Printer cost profile",
    "Profil de coûts de l’imprimante",
    "Druckerkostenprofil",
    "Profilo costi stampante",
    "Profil kosztów drukarki"
  ],
  "Potencia media": [
    "Average power",
    "Puissance moyenne",
    "Durchschnittliche Leistung",
    "Potenza media",
    "Średnia moc"
  ],
  "Mantenimiento por hora": [
    "Maintenance per hour",
    "Maintenance par heure",
    "Wartung pro Stunde",
    "Manutenzione all’ora",
    "Konserwacja na godzinę"
  ],
  "Impresora sin nombre": [
    "Unnamed printer",
    "Imprimante sans nom",
    "Drucker ohne Namen",
    "Stampante senza nome",
    "Drukarka bez nazwy"
  ],
  "Estimación manual": [
    "Manual estimate",
    "Estimation manuelle",
    "Manuelle Schätzung",
    "Stima manuale",
    "Szacunek ręczny"
  ],
  "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.": [
    "Purchase price not entered: depreciation is 0 per hour. The 10,000 h service life is an editable assumption.",
    "Prix d’achat non saisi : amortissement de 0 par heure. La durée de vie de 10 000 h est une hypothèse modifiable.",
    "Kaufpreis nicht eingegeben: Abschreibung 0 pro Stunde. Die Nutzungsdauer von 10.000 h ist eine bearbeitbare Annahme.",
    "Prezzo di acquisto non inserito: ammortamento pari a 0 all’ora. La vita utile di 10.000 h è un’ipotesi modificabile.",
    "Purchase Cena not entered: depreciation is 0 na hour. The 10,000 h service life is an editable assumption."
  ],
  "Amortización calculada: {rate} por hora ({price} ÷ {hours} h).": [
    "Calculated depreciation: {rate} per hour ({price} ÷ {hours} h).",
    "Amortissement calculé : {rate} par heure ({price} ÷ {hours} h).",
    "Berechnete Abschreibung: {rate} pro Stunde ({price} ÷ {hours} h).",
    "Ammortamento calcolato: {rate} all’ora ({price} ÷ {hours} h).",
    "Calculated depreciation: {rate} na hour ({Cena} ÷ {hours} h)."
  ],
  "Amortización ({price} ÷ {hours} h) por hora": [
    "Depreciation ({price} ÷ {hours} h) per hour",
    "Amortissement ({price} ÷ {hours} h) par heure",
    "Abschreibung ({price} ÷ {hours} h) pro Stunde",
    "Ammortamento ({price} ÷ {hours} h) all’ora",
    "Depreciation ({Cena} ÷ {hours} h) na hour"
  ],
  "Amortización (sin precio) por hora": [
    "Depreciation (no price) per hour",
    "Amortissement (sans prix) par heure",
    "Abschreibung (ohne Preis) pro Stunde",
    "Ammortamento (senza prezzo) all’ora",
    "Depreciation (no Cena) na hour"
  ],
  "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.": [
    "Reference recommended price: {gross} including tax · reference profit: {profit} per unit. Increases A/B/C are added to this price. Tax: {tax} · Commission applied to the tax-inclusive price: {commission} · Units: {units}. ★ marks the highest profit per unit.",
    "Prix conseillé de référence : {gross} taxes comprises · bénéfice de référence : {profit} par unité. Les suppléments A/B/C s’ajoutent à ce prix. Taxe : {tax} · Commission appliquée au prix TTC : {commission} · Unités : {units}. ★ indique le bénéfice unitaire le plus élevé.",
    "Empfohlener Referenzpreis: {gross} inklusive Steuern · Referenzgewinn: {profit} pro Stück. Aufschläge A/B/C kommen zu diesem Preis hinzu. Steuer: {tax} · Provision auf den Bruttopreis: {commission} · Stückzahl: {units}. ★ kennzeichnet den höchsten Stückgewinn.",
    "Prezzo consigliato di riferimento: {gross} tasse incluse · profitto di riferimento: {profit} per unità. Gli aumenti A/B/C si aggiungono a questo prezzo. Imposta: {tax} · Commissione sul prezzo tasse incluse: {commission} · Unità: {units}. ★ indica il profitto unitario più alto.",
    "Reference recommended Cena: {gross} including Podatek · reference Zysk: {Zysk} na jednostkę. Increases A/B/C are added do this Cena. Podatek: {Podatek} · Commission applied do the Podatek-inclusive Cena: {commission} · Units: {units}. ★ marks the highest Zysk na jednostkę."
  ],
  "Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».": [
    "Found {count} printers. Choose the IP to use under “Printers found”.",
    "{count} imprimantes détectées. Choisissez l’adresse IP à utiliser dans « Imprimantes détectées ».",
    "{count} Drucker gefunden. Wählen Sie unter „Gefundene Drucker“ die gewünschte IP-Adresse aus.",
    "Trovate {count} stampanti. Scegli l’indirizzo IP da usare in «Stampanti trovate».",
    "Found {count} drukarki. Choose the IP do use under “drukarki found”."
  ],
  "No se han encontrado impresoras. Puedes introducir la IP manualmente.": [
    "No printers found. You can enter the IP address manually.",
    "Aucune imprimante trouvée. Vous pouvez saisir l’adresse IP manuellement.",
    "Keine Drucker gefunden. Sie können die IP-Adresse manuell eingeben.",
    "Nessuna stampante trovata. Puoi inserire manualmente l’indirizzo IP.",
    "Nie znaleziono drukarek. Możesz ręcznie wpisać adres IP."
  ],
  "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.": [
    "The printer search failed: {error}. You can use the saved IP or search manually.",
    "La recherche automatique de l’imprimante a échoué : {error}. Vous pouvez utiliser l’adresse IP enregistrée ou lancer une recherche manuelle.",
    "Die automatische Druckersuche ist fehlgeschlagen: {error}. Sie können die gespeicherte IP verwenden oder manuell suchen.",
    "Ricerca automatica della stampante non riuscita: {error}. Puoi usare l’IP salvato o cercare manualmente.",
    "The drukarka Szukaj Niepowodzenie: {Błąd}. You can use the Zapisano IP lub Szukaj manually."
  ],
  "Referencia sugerida; editable": [
    "Suggested reference; editable",
    "Référence suggérée ; modifiable",
    "Vorgeschlagene Referenz; bearbeitbar",
    "Riferimento suggerito; modificabile",
    "Sugerowane oznaczenie; edytowalne"
  ],
  "Nombre de tu negocio": [
    "Your business name",
    "Nom de votre entreprise",
    "Name Ihres Unternehmens",
    "Nome della tua attività",
    "Your business Nazwa"
  ],
  "Teléfono de contacto": [
    "Contact phone",
    "Téléphone de contact",
    "Kontakttelefon",
    "Telefono di contatto",
    "Contact telefon"
  ],
  "Dirección postal": [
    "Postal address",
    "Adresse postale",
    "Postanschrift",
    "Indirizzo postale",
    "Postal adres"
  ],
  "Provincia o estado": [
    "Province or state",
    "Province ou État",
    "Provinz oder Bundesland",
    "Provincia o stato",
    "Province lub state"
  ],
  "NIF / CIF": [
    "Tax ID",
    "N° fiscal",
    "Steuer-ID",
    "Codice fiscale / P. IVA",
    "Podatek ID"
  ],
  "No hay detalles guardados todavía.": [
    "No seller details saved yet.",
    "Aucune coordonnée de vendeur enregistrée.",
    "Noch keine Verkäuferdaten gespeichert.",
    "Nessun dato venditore salvato.",
    "No dane sprzedawcy Zapisano yet."
  ],
  "Precio recomendado de referencia: {price} con impuestos · beneficio de referencia: {profit} por unidad.": [
    "Reference recommended price: {price} including tax · reference profit: {profit} per unit.",
    "Prix conseillé de référence : {price} taxes comprises · bénéfice de référence : {profit} par unité.",
    "Empfohlener Referenzpreis: {price} inklusive Steuern · Referenzgewinn: {profit} pro Stück.",
    "Prezzo consigliato di riferimento: {price} tasse incluse · profitto di riferimento: {profit} per unità.",
    "Reference recommended Cena: {Cena} including Podatek · reference Zysk: {Zysk} na jednostkę."
  ],
  "Multicabezal/toolchanger: cesta presupuestaria de 160 EUR por 1.000 h": [
    "Toolchanger: estimated spare-parts budget EUR 160 per 1,000 h",
    "Changeur d’outils : budget estimé de pièces de 160 EUR par 1 000 h",
    "Werkzeugwechsler: geschätztes Ersatzteilbudget 160 EUR pro 1.000 h",
    "Cambio utensile: budget ricambi stimato di 160 EUR ogni 1.000 h",
    "Toolchanger: estimated spare-parts budget EUR 160 na 1,000 h"
  ],
  "IDEX de doble extrusor: cesta presupuestaria de 120 EUR por 1.000 h": [
    "Dual-extruder IDEX: estimated spare-parts budget EUR 120 per 1,000 h",
    "IDEX à double extrudeur : budget estimé de pièces de 120 EUR par 1 000 h",
    "IDEX mit zwei Extrudern: geschätztes Ersatzteilbudget 120 EUR pro 1.000 h",
    "IDEX a doppio estrusore: budget ricambi stimato di 120 EUR ogni 1.000 h",
    "Dual-extruder IDEX: estimated spare-parts budget EUR 120 na 1,000 h"
  ],
  "Plataforma 3-en-1 de formato grande: cesta presupuestaria de 180 EUR por 1.000 h": [
    "Large-format 3-in-1 platform: estimated budget EUR 180 per 1,000 h",
    "Plateforme 3-en-1 grand format : budget estimé de 180 EUR par 1 000 h",
    "3-in-1-Plattform im Großformat: geschätztes Budget 180 EUR pro 1.000 h",
    "Piattaforma 3-in-1 grande formato: budget stimato di 180 EUR ogni 1.000 h",
    "Large-format 3-w-1 platform: estimated budget EUR 180 na 1,000 h"
  ],
  "FDM abierto básico: 50 EUR por 1.000 h": [
    "Basic open FDM: EUR 50 per 1,000 h",
    "FDM ouvert basique : 50 EUR par 1 000 h",
    "Einfacher offener FDM-Drucker: 50 EUR pro 1.000 h",
    "FDM aperto di base: 50 EUR ogni 1.000 h",
    "Basic Otwórz FDM: EUR 50 na 1,000 h"
  ],
  "FDM abierto de alta velocidad: 60 EUR por 1.000 h": [
    "High-speed open FDM: EUR 60 per 1,000 h",
    "FDM ouvert haute vitesse : 60 EUR par 1 000 h",
    "Offener Hochgeschwindigkeits-FDM-Drucker: 60 EUR pro 1.000 h",
    "FDM aperto ad alta velocità: 60 EUR ogni 1.000 h",
    "High-speed Otwórz FDM: EUR 60 na 1,000 h"
  ],
  "FDM de gran formato: 120 EUR por 1.000 h": [
    "Large-format FDM: EUR 120 per 1,000 h",
    "FDM grand format : 120 EUR par 1 000 h",
    "FDM-Großformatdrucker: 120 EUR pro 1.000 h",
    "FDM grande formato: 120 EUR ogni 1.000 h",
    "Large-format FDM: EUR 120 na 1,000 h"
  ],
  "CoreXY cerrado: 80 EUR por 1.000 h": [
    "Enclosed CoreXY: EUR 80 per 1,000 h",
    "CoreXY fermé : 80 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker: 80 EUR pro 1.000 h",
    "CoreXY chiuso: 80 EUR ogni 1.000 h",
    "Enclosed CoreXY: EUR 80 na 1,000 h"
  ],
  "CoreXY cerrado de gran formato: 140 EUR por 1.000 h": [
    "Large-format enclosed CoreXY: EUR 140 per 1,000 h",
    "CoreXY fermé grand format : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker: 140 EUR pro 1.000 h",
    "CoreXY chiuso grande formato: 140 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY: EUR 140 na 1,000 h"
  ],
  "FDM rápido con cabezal de cambio rápido: 80 EUR por 1.000 h": [
    "Fast FDM with quick-swap toolhead: EUR 80 per 1,000 h",
    "FDM rapide avec tête à changement rapide : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker mit Schnellwechselkopf: 80 EUR pro 1.000 h",
    "FDM veloce con testa a cambio rapido: 80 EUR ogni 1.000 h",
    "Fast FDM z quick-swap toolhead: EUR 80 na 1,000 h"
  ],
  "FDM con alimentador multicolor: 140 EUR por 1.000 h": [
    "FDM with multicolour feeder: EUR 140 per 1,000 h",
    "FDM avec système multicolore : 140 EUR par 1 000 h",
    "FDM-Drucker mit Mehrfarbenzuführung: 140 EUR pro 1.000 h",
    "FDM con alimentatore multicolore: 140 EUR ogni 1.000 h",
    "FDM z multicolour feeder: EUR 140 na 1,000 h"
  ],
  "Sistema multicolor con alimentador: 140 EUR por 1.000 h": [
    "Multicolour feeder system: EUR 140 per 1,000 h",
    "Système multicolore avec chargeur : 140 EUR par 1 000 h",
    "Mehrfarbsystem mit Zuführung: 140 EUR pro 1.000 h",
    "Sistema multicolore con alimentatore: 140 EUR ogni 1.000 h",
    "Multicolour feeder system: EUR 140 na 1,000 h"
  ],
  "FDM abierto compacto: 50 EUR por 1.000 h": [
    "Compact open FDM: EUR 50 per 1,000 h",
    "FDM ouvert compact : 50 EUR par 1 000 h",
    "Kompakter offener FDM-Drucker: 50 EUR pro 1.000 h",
    "FDM aperto compatto: 50 EUR ogni 1.000 h",
    "Compact Otwórz FDM: EUR 50 na 1,000 h"
  ],
  "FDM CoreXY abierto: 70 EUR por 1.000 h": [
    "Open CoreXY FDM: EUR 70 per 1,000 h",
    "FDM CoreXY ouvert : 70 EUR par 1 000 h",
    "Offener CoreXY-FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM CoreXY aperto: 70 EUR ogni 1.000 h",
    "Otwórz CoreXY FDM: EUR 70 na 1,000 h"
  ],
  "CoreXY cerrado con sensores y filtro: 90 EUR por 1.000 h": [
    "Enclosed CoreXY with sensors and filter: EUR 90 per 1,000 h",
    "CoreXY fermé avec capteurs et filtre : 90 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Sensoren und Filter: 90 EUR pro 1.000 h",
    "CoreXY chiuso con sensori e filtro: 90 EUR ogni 1.000 h",
    "Enclosed CoreXY z sensors i filter: EUR 90 na 1,000 h"
  ],
  "Doble cabezal/sistema avanzado: 180 EUR por 1.000 h": [
    "Dual toolhead/advanced system: EUR 180 per 1,000 h",
    "Double tête/système avancé : 180 EUR par 1 000 h",
    "Doppelkopf/fortschrittliches System: 180 EUR pro 1.000 h",
    "Doppia testa/sistema avanzato: 180 EUR ogni 1.000 h",
    "Dual toolhead/advanced system: EUR 180 na 1,000 h"
  ],
  "CoreXY cerrado de formato avanzado: 120 EUR por 1.000 h": [
    "Advanced-format enclosed CoreXY: EUR 120 per 1,000 h",
    "CoreXY fermé de format avancé : 120 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker im erweiterten Format: 120 EUR pro 1.000 h",
    "CoreXY chiuso formato avanzato: 120 EUR ogni 1.000 h",
    "Advanced-format enclosed CoreXY: EUR 120 na 1,000 h"
  ],
  "Sistema avanzado de doble herramienta: 140 EUR por 1.000 h": [
    "Advanced dual-tool system: EUR 140 per 1,000 h",
    "Système avancé à double outil : 140 EUR par 1 000 h",
    "Fortschrittliches Zweifach-Werkzeugsystem: 140 EUR pro 1.000 h",
    "Sistema avanzato a doppio utensile: 140 EUR ogni 1.000 h",
    "Advanced dual-tool system: EUR 140 na 1,000 h"
  ],
  "FDM abierto de alta velocidad: 70 EUR por 1.000 h": [
    "High-speed open FDM: EUR 70 per 1,000 h",
    "FDM ouvert haute vitesse : 70 EUR par 1 000 h",
    "Offener Hochgeschwindigkeits-FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM aperto ad alta velocità: 70 EUR ogni 1.000 h",
    "High-speed Otwórz FDM: EUR 70 na 1,000 h"
  ],
  "CoreXY cerrado de gran formato: 100 EUR por 1.000 h": [
    "Large-format enclosed CoreXY: EUR 100 per 1,000 h",
    "CoreXY fermé grand format : 100 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker: 100 EUR pro 1.000 h",
    "CoreXY chiuso grande formato: 100 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY: EUR 100 na 1,000 h"
  ],
  "CoreXY cerrado de formato medio: 100 EUR por 1.000 h": [
    "Medium-format enclosed CoreXY: EUR 100 per 1,000 h",
    "CoreXY fermé moyen format : 100 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker im mittleren Format: 100 EUR pro 1.000 h",
    "CoreXY chiuso medio formato: 100 EUR ogni 1.000 h",
    "Medium-format enclosed CoreXY: EUR 100 na 1,000 h"
  ],
  "CoreXY cerrado con alimentador/sistema avanzado: 140 EUR por 1.000 h": [
    "Enclosed CoreXY with feeder/advanced system: EUR 140 per 1,000 h",
    "CoreXY fermé avec chargeur/système avancé : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Zuführung/erweitertem System: 140 EUR pro 1.000 h",
    "CoreXY chiuso con alimentatore/sistema avanzato: 140 EUR ogni 1.000 h",
    "Enclosed CoreXY z feeder/advanced system: EUR 140 na 1,000 h"
  ],
  "CoreXY cerrado de gran formato y sistema avanzado: 160 EUR por 1.000 h": [
    "Large-format enclosed CoreXY with advanced system: EUR 160 per 1,000 h",
    "CoreXY fermé grand format avec système avancé : 160 EUR par 1 000 h",
    "Geschlossener CoreXY-Großformatdrucker mit erweitertem System: 160 EUR pro 1.000 h",
    "CoreXY chiuso grande formato con sistema avanzato: 160 EUR ogni 1.000 h",
    "Large-format enclosed CoreXY z advanced system: EUR 160 na 1,000 h"
  ],
  "FDM rápido con alimentador preparado para multicolor: 80 EUR por 1.000 h": [
    "Fast FDM with multicolour-ready feeder: EUR 80 per 1,000 h",
    "FDM rapide avec chargeur compatible multicolore : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker mit mehrfarbfähiger Zuführung: 80 EUR pro 1.000 h",
    "FDM veloce con alimentatore predisposto per il multicolore: 80 EUR ogni 1.000 h",
    "Fast FDM z multicolour-ready feeder: EUR 80 na 1,000 h"
  ],
  "FDM de gran formato: 140 EUR por 1.000 h": [
    "Large-format FDM: EUR 140 per 1,000 h",
    "FDM grand format : 140 EUR par 1 000 h",
    "FDM-Großformatdrucker: 140 EUR pro 1.000 h",
    "FDM grande formato: 140 EUR ogni 1.000 h",
    "Large-format FDM: EUR 140 na 1,000 h"
  ],
  "FDM CoreXY compacto: 60 EUR por 1.000 h": [
    "Compact CoreXY FDM: EUR 60 per 1,000 h",
    "FDM CoreXY compact : 60 EUR par 1 000 h",
    "Kompakter CoreXY-FDM-Drucker: 60 EUR pro 1.000 h",
    "FDM CoreXY compatto: 60 EUR ogni 1.000 h",
    "Compact CoreXY FDM: EUR 60 na 1,000 h"
  ],
  "CoreXY multicolor: 140 EUR por 1.000 h": [
    "Multicolour CoreXY: EUR 140 per 1,000 h",
    "CoreXY multicolore : 140 EUR par 1 000 h",
    "Mehrfarbiger CoreXY-Drucker: 140 EUR pro 1.000 h",
    "CoreXY multicolore: 140 EUR ogni 1.000 h",
    "Multicolour CoreXY: EUR 140 na 1,000 h"
  ],
  "Impresora profesional cerrada de gran formato: 180 EUR por 1.000 h": [
    "Large-format enclosed professional printer: EUR 180 per 1,000 h",
    "Imprimante professionnelle fermée grand format : 180 EUR par 1 000 h",
    "Geschlossener professioneller Großformatdrucker: 180 EUR pro 1.000 h",
    "Stampante professionale chiusa grande formato: 180 EUR ogni 1.000 h",
    "Large-format enclosed professional drukarka: EUR 180 na 1,000 h"
  ],
  "Plataforma industrial multiextrusor: 220 EUR por 1.000 h": [
    "Industrial multi-extruder platform: EUR 220 per 1,000 h",
    "Plateforme industrielle multiextrudeur : 220 EUR par 1 000 h",
    "Industrielle Plattform mit mehreren Extrudern: 220 EUR pro 1.000 h",
    "Piattaforma industriale multi-estrusore: 220 EUR ogni 1.000 h",
    "Industrial multi-extruder platform: EUR 220 na 1,000 h"
  ],
  "FDM abierto de formato grande: 100 EUR por 1.000 h": [
    "Large-format open FDM: EUR 100 per 1,000 h",
    "FDM ouvert grand format : 100 EUR par 1 000 h",
    "Offener FDM-Drucker im Großformat: 100 EUR pro 1.000 h",
    "FDM aperto grande formato: 100 EUR ogni 1.000 h",
    "Large-format Otwórz FDM: EUR 100 na 1,000 h"
  ],
  "FDM abierto de gran formato: 140 EUR por 1.000 h": [
    "Large open-format FDM: EUR 140 per 1,000 h",
    "FDM ouvert très grand format : 140 EUR par 1 000 h",
    "Offener FDM-Großformatdrucker: 140 EUR pro 1.000 h",
    "FDM aperto di grande formato: 140 EUR ogni 1.000 h",
    "Large Otwórz-format FDM: EUR 140 na 1,000 h"
  ],
  "CoreXY cerrado con multicolor: 140 EUR por 1.000 h": [
    "Enclosed CoreXY with multicolour: EUR 140 per 1,000 h",
    "CoreXY fermé avec multicolore : 140 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit Mehrfarbsystem: 140 EUR pro 1.000 h",
    "CoreXY chiuso con multicolore: 140 EUR ogni 1.000 h",
    "Enclosed CoreXY z multicolour: EUR 140 na 1,000 h"
  ],
  "FDM abierto reparable: 70 EUR por 1.000 h": [
    "Repairable open FDM: EUR 70 per 1,000 h",
    "FDM ouvert réparable : 70 EUR par 1 000 h",
    "Reparierbarer offener FDM-Drucker: 70 EUR pro 1.000 h",
    "FDM aperto riparabile: 70 EUR ogni 1.000 h",
    "Repairable Otwórz FDM: EUR 70 na 1,000 h"
  ],
  "CoreXY cerrado reparable: 90 EUR por 1.000 h": [
    "Repairable enclosed CoreXY: EUR 90 per 1,000 h",
    "CoreXY fermé réparable : 90 EUR par 1 000 h",
    "Reparierbarer geschlossener CoreXY-Drucker: 90 EUR pro 1.000 h",
    "CoreXY chiuso riparabile: 90 EUR ogni 1.000 h",
    "Repairable enclosed CoreXY: EUR 90 na 1,000 h"
  ],
  "Plataforma multiherramienta de gran formato: 220 EUR por 1.000 h": [
    "Large-format multi-tool platform: EUR 220 per 1,000 h",
    "Plateforme mult outils grand format : 220 EUR par 1 000 h",
    "Großformatige Plattform mit mehreren Werkzeugen: 220 EUR pro 1.000 h",
    "Piattaforma multi-utensile grande formato: 220 EUR ogni 1.000 h",
    "Large-format multi-tool platform: EUR 220 na 1,000 h"
  ],
  "CoreXY cerrado con cámara calefactada: 80 EUR por 1.000 h": [
    "Enclosed CoreXY with heated chamber: EUR 80 per 1,000 h",
    "CoreXY fermé avec chambre chauffée : 80 EUR par 1 000 h",
    "Geschlossener CoreXY-Drucker mit beheizter Kammer: 80 EUR pro 1.000 h",
    "CoreXY chiuso con camera riscaldata: 80 EUR ogni 1.000 h",
    "Enclosed CoreXY z heated chamber: EUR 80 na 1,000 h"
  ],
  "CoreXY abierto de gran formato: 140 EUR por 1.000 h": [
    "Large-format open CoreXY: EUR 140 per 1,000 h",
    "CoreXY ouvert grand format : 140 EUR par 1 000 h",
    "Offener CoreXY-Großformatdrucker: 140 EUR pro 1.000 h",
    "CoreXY aperto grande formato: 140 EUR ogni 1.000 h",
    "Large-format Otwórz CoreXY: EUR 140 na 1,000 h"
  ],
  "FDM rápido de formato grande: 80 EUR por 1.000 h": [
    "Fast large-format FDM: EUR 80 per 1,000 h",
    "FDM rapide grand format : 80 EUR par 1 000 h",
    "Schneller FDM-Drucker im Großformat: 80 EUR pro 1.000 h",
    "FDM veloce grande formato: 80 EUR ogni 1.000 h",
    "Fast large-format FDM: EUR 80 na 1,000 h"
  ],
  "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.": [
    "Inventory: {all} spools total · {filtered} in this filter.",
    "Inventaire : {all} bobines au total · {filtered} dans ce filtre.",
    "Bestand: insgesamt {all} Spulen · {filtered} in diesem Filter.",
    "Inventario: {all} bobine totali · {filtered} in questo filtro.",
    "Magazyn: {all} spools Łącznie · {filtered} w this filter."
  ],
  "{count} bobina(s)": [
    "{count} spool(s)",
    "{count} bobine(s)",
    "{count} Spule(n)",
    "{count} bobina(e)",
    "{count} szpula(s)"
  ],
  "Restante por bobina": [
    "Remaining per spool",
    "Restant par bobine",
    "Restmenge pro Spule",
    "Residuo per bobina",
    "Remaining na szpula"
  ],
  "Inicial por bobina": [
    "Initial per spool",
    "Quantité initiale par bobine",
    "Anfangsmenge pro Spule",
    "Quantità iniziale per bobina",
    "Initial na szpula"
  ],
  "Precio estimado/kg": [
    "Estimated price/kg",
    "Prix estimé/kg",
    "Geschätzter Preis/kg",
    "Prezzo stimato/kg",
    "Estimated Cena/kg"
  ],
  "Borrar": [
    "Delete",
    "Supprimer",
    "Löschen",
    "Elimina",
    "Usuń"
  ],
  "No hay bobinas en esta categoría": [
    "No spools in this category",
    "Aucune bobine dans cette catégorie",
    "Keine Spulen in dieser Kategorie",
    "Nessuna bobina in questa categoria",
    "Brak szpul w tej kategorii"
  ],
  "Prueba otra pestaña o añade una bobina.": [
    "Try another tab or add a spool.",
    "Essayez un autre onglet ou ajoutez une bobine.",
    "Versuchen Sie einen anderen Tab oder fügen Sie eine Spule hinzu.",
    "Prova un’altra scheda o aggiungi una bobina.",
    "Wypróbuj inną kartę lub dodaj szpulę."
  ],
  "Subtotal: {subtotal} · Descuento ({discountPct}): −{discount} · Envío: {shipping} · Base: {base}": [
    "Subtotal: {subtotal} · Discount ({discountPct}): −{discount} · Shipping: {shipping} · Net total: {base}",
    "Sous-total : {subtotal} · Remise ({discountPct}) : −{discount} · Livraison : {shipping} · Total net : {base}",
    "Zwischensumme: {subtotal} · Rabatt ({discountPct}): −{discount} · Versand: {shipping} · Nettosumme: {base}",
    "Subtotale: {subtotal} · Sconto ({discountPct}): −{discount} · Spedizione: {shipping} · Totale netto: {base}",
    "Suma częściowa: {Suma częściowa} · Rabat ({discountPct}): −{Rabat} · Shipping: {shipping} · Net Łącznie: {base}"
  ],
  "Factura ya creada · Ver factura": [
    "Invoice created · View invoice",
    "Facture créée · Voir la facture",
    "Rechnung erstellt · Rechnung ansehen",
    "Fattura creata · Visualizza fattura",
    "Faktura utworzona · View Faktura"
  ],
  "Crear factura": [
    "Create invoice",
    "Créer une facture",
    "Rechnung erstellen",
    "Crea fattura",
    "Utwórz Faktura"
  ],
  "Ver": [
    "View",
    "Voir",
    "Ansehen",
    "Visualizza",
    "Podgląd"
  ],
  "Sin nombre": [
    "Unnamed",
    "Sans nom",
    "Ohne Namen",
    "Senza nome",
    "Unnamed"
  ],
  "15 días": [
    "15 days",
    "15 jours",
    "15 Tage",
    "15 giorni",
    "15 days"
  ],
  "Ej. 15 días": [
    "e.g. 15 days",
    "ex. 15 jours",
    "z. B. 15 Tage",
    "es. 15 giorni",
    "Np. 15 days"
  ],
  "Ej. 3–5 días laborables": [
    "e.g. 3–5 working days",
    "ex. 3 à 5 jours ouvrés",
    "z. B. 3–5 Werktage",
    "es. 3–5 giorni lavorativi",
    "Np. 3–5 working days"
  ],
  "Nombre del cliente o empresa": [
    "Customer or company name",
    "Nom du client ou de l’entreprise",
    "Name des Kunden oder Unternehmens",
    "Nome del cliente o dell’azienda",
    "Nazwa klienta lub firmy"
  ],
  "cliente@correo.es": [
    "customer@email.com",
    "client@exemple.fr",
    "kunde@beispiel.de",
    "cliente@esempio.it",
    "Klient@e-mail.com"
  ],
  "Dirección del cliente": [
    "Customer address",
    "Adresse du client",
    "Kundenadresse",
    "Indirizzo cliente",
    "Klient adres"
  ],
  "Documento fiscal": [
    "Tax ID",
    "Identifiant fiscal",
    "Steuer-ID",
    "Codice fiscale",
    "Podatek ID"
  ],
  "Notas internas sobre el cliente": [
    "Internal customer notes",
    "Notes internes sur le client",
    "Interne Kundennotizen",
    "Note interne sul cliente",
    "Notatki wewnętrzne o kliencie"
  ],
  "Nombre, correo, teléfono, dirección, ciudad o documento fiscal": [
    "Name, email, phone, address, city or tax ID",
    "Nom, e-mail, téléphone, adresse, ville ou identifiant fiscal",
    "Name, E-Mail, Telefon, Adresse, Ort oder Steuer-ID",
    "Nome, e-mail, telefono, indirizzo, città o codice fiscale",
    "Nazwa, e-mail, telefon, adres, miasto lub identyfikator podatkowy"
  ],
  "bobina": [
    "spool",
    "bobine",
    "Spule",
    "bobina",
    "szpula"
  ],
  "bobinas": [
    "spools",
    "bobines",
    "Spulen",
    "bobine",
    "spools"
  ],
  "Enviar email": [
    "Send email",
    "Envoyer un e-mail",
    "E-Mail senden",
    "Invia e-mail",
    "Wyślij e-mail"
  ],
  "Número de factura": [
    "Invoice number",
    "Numéro de facture",
    "Rechnungsnummer",
    "Numero fattura",
    "Numer faktury"
  ],
  "Producto": [
    "Product",
    "Produit",
    "Produkt",
    "Prodotto",
    "Produkt"
  ],
  "Ud.": [
    "Qty.",
    "Qté",
    "Anz.",
    "Qt.",
    "Qty."
  ],
  "Entrega": [
    "Delivery",
    "Livraison",
    "Lieferung",
    "Consegna",
    "Dostawa"
  ],
  "Documentos": [
    "Documents",
    "Documents",
    "Dokumente",
    "Documenti",
    "Documents"
  ],
  "Total": [
    "Total",
    "Total",
    "Gesamt",
    "Totale",
    "Łącznie"
  ],
  "Presupuesto": [
    "Quote",
    "Devis",
    "Angebot",
    "Preventivo",
    "Oferta"
  ],
  "Factura": [
    "Invoice",
    "Facture",
    "Rechnung",
    "Fattura",
    "Faktura"
  ],
  "Imprimir": [
    "Print",
    "Imprimer",
    "Drucken",
    "Stampa",
    "Drukuj"
  ],
  "👁 Ver": [
    "👁 View",
    "👁 Voir",
    "👁 Ansehen",
    "👁 Visualizza",
    "👁 View"
  ],
  "🖨 Imprimir": [
    "🖨 Print",
    "🖨 Imprimer",
    "🖨 Drucken",
    "🖨 Stampa",
    "🖨 Drukuj"
  ],
  "✎ Editar": [
    "✎ Edit",
    "✎ Modifier",
    "✎ Bearbeiten",
    "✎ Modifica",
    "✎ Edytuj"
  ],
  "Pago inmediato / 15 días": [
    "Immediate payment / 15 days",
    "Paiement immédiat / 15 jours",
    "Sofortzahlung / 15 Tage",
    "Pagamento immediato / 15 giorni",
    "Płatność natychmiastowa / 15 dni"
  ],
  "— Selecciona tasación o presupuesto —": [
    "— Select estimate or quote —",
    "— Sélectionner une estimation ou un devis —",
    "— Kalkulation oder Angebot auswählen —",
    "— Seleziona stima o preventivo —",
    "— Wybierz wycenę lub ofertę —"
  ],
  "O escribe un producto distinto": [
    "Or enter a different product",
    "Ou saisissez un autre produit",
    "Oder geben Sie ein anderes Produkt ein",
    "Oppure inserisci un prodotto diverso",
    "lub enter a different product"
  ],
  "Bobina, envío, reparación…": [
    "Spool, shipping, repair…",
    "Bobine, livraison, réparation…",
    "Spule, Versand, Reparatur…",
    "Bobina, spedizione, riparazione…",
    "szpula, shipping, repair…"
  ],
  "Cliente, pedido, justificante…": [
    "Customer, order, receipt…",
    "Client, commande, justificatif…",
    "Kunde, Auftrag, Beleg…",
    "Cliente, ordine, ricevuta…",
    "Klient, Zamówienie, receipt…"
  ],
  "Impuestos desglosados según el perfil configurable": [
    "Taxes itemized according to the configurable profile",
    "Taxes détaillées selon le profil configurable",
    "Steuern gemäß konfigurierbarem Profil aufgeschlüsselt",
    "Imposte dettagliate in base al profilo configurabile",
    "Podatki rozbite według konfigurowalnego profilu"
  ],
  "Importe/coste": [
    "Amount/cost",
    "Montant/coût",
    "Betrag/Kosten",
    "Importo/costo",
    "Kwota/koszt"
  ],
  "No hay facturas guardadas": [
    "No invoices saved yet",
    "Aucune facture enregistrée",
    "Keine Rechnungen gespeichert",
    "Nessuna fattura salvata",
    "No invoices Zapisano yet"
  ],
  "Cuando crees una factura, aparecerá aquí para imprimirla o eliminarla.": [
    "When you create an invoice, it will appear here so you can print or delete it.",
    "Lorsque vous créerez une facture, elle apparaîtra ici pour être imprimée ou supprimée.",
    "Wenn Sie eine Rechnung erstellen, erscheint sie hier, damit Sie sie drucken oder löschen können.",
    "Quando crei una fattura, apparirà qui per stamparla o eliminarla.",
    "Po utworzeniu faktury pojawi się ona tutaj i będzie można ją wydrukować lub usunąć."
  ],
  "No hay pedidos guardados": [
    "No saved orders",
    "Aucune commande enregistrée",
    "Keine Aufträge gespeichert",
    "Nessun ordine salvato",
    "Brak zapisanych Zamówienia"
  ],
  "No hay clientes guardados": [
    "No saved customers",
    "Aucun client enregistré",
    "Keine Kunden gespeichert",
    "Nessun cliente salvato",
    "Brak zapisanych Klienci"
  ],
  "El estado de la impresora no está claro. ¿Quieres registrar este trabajo igualmente como provisional?": [
    "The printer status is unclear. Do you still want to register this job as provisional?",
    "L’état de l’imprimante n’est pas clair. Voulez-vous tout de même enregistrer ce travail comme provisoire ?",
    "Der Druckerstatus ist unklar. Möchten Sie diesen Auftrag trotzdem vorläufig registrieren?",
    "Lo stato della stampante non è chiaro. Vuoi registrare comunque questo lavoro come provvisorio?",
    "Stan drukarki jest niejasny. Czy mimo to chcesz zarejestrować to zadanie jako tymczasowe?"
  ],
  "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as personal. Do you want to change it to an order? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme dépense personnelle. Voulez-vous le convertir en commande ? Les écritures précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als private Ausgabe erfasst. Möchten Sie ihn in einen Auftrag ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come spesa personale. Vuoi convertirlo in un ordine? Le registrazioni precedenti di questo G-code verranno sostituite.",
    "This job is already recorded as personal. Czy chcesz change it do an Zamówienie? The previous wpisy dla this G-code zostanie replaced."
  ],
  "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as an order. Do you want to change it to a personal expense? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme commande. Voulez-vous le convertir en dépense personnelle ? Les écritures précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als Auftrag erfasst. Möchten Sie ihn in eine private Ausgabe ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come ordine. Vuoi convertirlo in una spesa personale? Le registrazioni precedenti di questo G-code verranno sostituite.",
    "This job is already recorded as an Zamówienie. Czy chcesz change it do a personal expense? The previous wpisy dla this G-code zostanie replaced."
  ],
  "La restauración sustituirá el historial local actual y, si la copia contiene uno, el cálculo en curso. ¿Continuar?": [
    "Restoring will replace the current local history and, if included in the backup, the current estimate. Continue?",
    "La restauration remplacera l’historique local actuel et, si la sauvegarde en contient une, l’estimation en cours. Continuer ?",
    "Die Wiederherstellung ersetzt den aktuellen lokalen Verlauf und, falls in der Sicherung enthalten, die laufende Kalkulation. Fortfahren?",
    "Il ripristino sostituirà la cronologia locale attuale e, se presente nel backup, il calcolo in corso. Continuare?",
    "Przywracanie zastąpi bieżącą lokalną historię oraz, jeśli kopia ją zawiera, aktualną kalkulację. Kontynuować?"
  ],
  "No se pudo restaurar: el archivo no parece una copia válida de Print Cost & Profit.": [
    "Could not restore: the file does not appear to be a valid Print Cost & Profit backup.",
    "Restauration impossible : le fichier ne semble pas être une sauvegarde valide de Print Cost & Profit.",
    "Wiederherstellung fehlgeschlagen: Die Datei scheint keine gültige Print Cost & Profit-Sicherung zu sein.",
    "Impossibile ripristinare: il file non sembra essere un backup valido di Print Cost & Profit.",
    "Nie udało się przywrócić danych: plik nie wygląda na prawidłową kopię zapasową Print Cost & Profit."
  ],
  "El navegador bloqueó la ventana del presupuesto. Permite las ventanas emergentes para este archivo.": [
    "The browser blocked the quote window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre du devis. Autorisez les fenêtres pop-up pour ce fichier.",
    "Der Browser hat das Angebotsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra del preventivo. Consenti i popup per questo file.",
    "Przeglądarka zablokowała okno oferty. Zezwól na wyskakujące okienka dla tego pliku."
  ],
  "Introduce al menos el nombre, correo o teléfono del cliente.": [
    "Enter at least the customer’s name, email, or phone number.",
    "Saisissez au moins le nom, l’adresse e-mail ou le téléphone du client.",
    "Geben Sie mindestens den Namen, die E-Mail-Adresse oder die Telefonnummer des Kunden ein.",
    "Inserisci almeno il nome, l’e-mail o il telefono del cliente.",
    "Wprowadź co najmniej nazwę klienta, adres e-mail lub numer telefonu."
  ],
  "Ya existe un cliente con ese nombre. ¿Actualizarlo?": [
    "A customer with that name already exists. Update it?",
    "Un client portant ce nom existe déjà. Le mettre à jour ?",
    "Ein Kunde mit diesem Namen existiert bereits. Aktualisieren?",
    "Esiste già un cliente con questo nome. Aggiornarlo?",
    "Klient o tej nazwie już istnieje. Zaktualizować go?"
  ],
  "¿Eliminar este cliente de la agenda? Los documentos ya guardados no se borrarán.": [
    "Remove this customer from the address book? Saved documents will not be deleted.",
    "Supprimer ce client du répertoire ? Les documents déjà enregistrés ne seront pas supprimés.",
    "Diesen Kunden aus dem Adressbuch entfernen? Bereits gespeicherte Dokumente werden nicht gelöscht.",
    "Rimuovere questo cliente dalla rubrica? I documenti già salvati non verranno eliminati.",
    "Usunąć tego klienta z książki adresowej? Zapisane dokumenty nie zostaną usunięte."
  ],
  "Introduce al menos el nombre, correo o teléfono del cliente antes de guardar el presupuesto.": [
    "Enter at least the customer’s name, email, or phone number before saving the quote.",
    "Saisissez au moins le nom, l’adresse e-mail ou le téléphone du client avant d’enregistrer le devis.",
    "Geben Sie vor dem Speichern des Angebots mindestens den Namen, die E-Mail-Adresse oder die Telefonnummer des Kunden ein.",
    "Inserisci almeno il nome, l’e-mail o il telefono del cliente prima di salvare il preventivo.",
    "Przed zapisaniem oferty wprowadź co najmniej nazwę klienta, adres e-mail lub numer telefonu."
  ],
  "El cliente no tiene un teléfono válido guardado. Revisa el teléfono en la pestaña Clientes e incluye el prefijo internacional si no es de España.": [
    "The customer does not have a valid phone number saved. Check the number in the Customers tab and include the international code if the number is outside Spain.",
    "Aucun numéro de téléphone valide n’est enregistré pour ce client. Vérifiez-le dans l’onglet Clients et ajoutez l’indicatif international si le numéro est hors d’Espagne.",
    "Für diesen Kunden ist keine gültige Telefonnummer gespeichert. Prüfen Sie die Nummer im Tab „Kunden“ und fügen Sie bei Nummern außerhalb Spaniens die internationale Vorwahl hinzu.",
    "Il cliente non ha un numero di telefono valido salvato. Controlla il numero nella scheda Clienti e includi il prefisso internazionale se non è spagnolo.",
    "Klient nie ma zapisanego prawidłowego numeru telefonu. Sprawdź numer na karcie Klienci i dodaj prefiks międzynarodowy, jeśli numer jest spoza Hiszpanii."
  ],
  "El cliente no tiene una dirección de correo válida guardada. Revisa el email en la pestaña Clientes.": [
    "The customer does not have a valid email address saved. Check the email in the Customers tab.",
    "Aucune adresse e-mail valide n’est enregistrée pour ce client. Vérifiez l’e-mail dans l’onglet Clients.",
    "Für diesen Kunden ist keine gültige E-Mail-Adresse gespeichert. Prüfen Sie die E-Mail im Tab „Kunden“.",
    "Il cliente non ha un indirizzo e-mail valido salvato. Controlla l’e-mail nella scheda Clienti.",
    "Klient nie ma zapisanego prawidłowego adresu e-mail. Sprawdź adres e-mail na karcie Klienci."
  ],
  "No se ha podido generar el PDF. Comprueba los datos del documento e inténtalo de nuevo.": [
    "The PDF could not be generated. Check the document details and try again.",
    "Impossible de générer le PDF. Vérifiez les données du document et réessayez.",
    "Das PDF konnte nicht erstellt werden. Prüfen Sie die Dokumentdaten und versuchen Sie es erneut.",
    "Impossibile generare il PDF. Controlla i dati del documento e riprova.",
    "Nie udało się wygenerować pliku PDF. Sprawdź dane dokumentu i spróbuj ponownie."
  ],
  "¿Eliminar este presupuesto guardado?": [
    "Delete this saved quote?",
    "Supprimer ce devis enregistré ?",
    "Dieses gespeicherte Angebot löschen?",
    "Eliminare questo preventivo salvato?",
    "Usunąć tę zapisaną ofertę?"
  ],
  "¿Borrar este registro de bobinas del inventario?": [
    "Delete this spool inventory record?",
    "Supprimer cet enregistrement de bobine de l’inventaire ?",
    "Diesen Spuleneintrag aus dem Lager löschen?",
    "Eliminare questo record della bobina dall’inventario?",
    "Usunąć ten wpis szpuli z magazynu?"
  ],
  "Ya existe una factura con ese número. ¿Quieres guardarla igualmente?": [
    "An invoice with this number already exists. Do you want to save it anyway?",
    "Une facture portant ce numéro existe déjà. Voulez-vous tout de même l’enregistrer ?",
    "Eine Rechnung mit dieser Nummer existiert bereits. Möchten Sie sie trotzdem speichern?",
    "Esiste già una fattura con questo numero. Vuoi salvarla comunque?",
    "Faktura o tym numerze już istnieje. Czy mimo to chcesz ją zapisać?"
  ],
  "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.": [
    "The browser blocked the invoice window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre de la facture. Autorisez les fenêtres contextuelles pour ce fichier.",
    "Der Browser hat das Rechnungsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra della fattura. Consenti i popup per questo file.",
    "Przeglądarka zablokowała the Faktura window. Allow wyskakujące okna dla tego pliku."
  ],
  "Ese número ya existe. ¿Mantenerlo de todos modos?": [
    "That number already exists. Keep it anyway?",
    "Ce numéro existe déjà. Le conserver malgré tout ?",
    "Diese Nummer existiert bereits. Trotzdem beibehalten?",
    "Questo numero esiste già. Mantenerlo comunque?",
    "Ten numer już istnieje. Zachować go mimo to?"
  ],
  "¿Eliminar esta copia de factura guardada?": [
    "Delete this saved invoice copy?",
    "Supprimer cette copie de facture enregistrée ?",
    "Diese gespeicherte Rechnungskopie löschen?",
    "Eliminare questa copia della fattura salvata?",
    "Usunąć tę zapisaną kopię faktury?"
  ],
  "Todavía no hay una impresión activa detectada. Espera a que el panel muestre el archivo.": [
    "No active print has been detected yet. Wait until the panel shows the file.",
    "Aucune impression active n’a encore été détectée. Attendez que le panneau affiche le fichier.",
    "Es wurde noch kein aktiver Druck erkannt. Warten Sie, bis die Datei im Bedienfeld angezeigt wird.",
    "Non è ancora stata rilevata una stampa attiva. Attendi che il pannello mostri il file.",
    "Nie wykryto jeszcze aktywnego wydruku. Poczekaj, aż panel wyświetli plik."
  ],
  "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.": [
    "This job is already recorded in Accounting. No duplicate was created.",
    "Ce travail est déjà enregistré dans la comptabilité. Aucun doublon n’a été créé.",
    "Dieser Auftrag ist bereits in der Buchhaltung erfasst. Es wurde kein Duplikat erstellt.",
    "Questo lavoro è già registrato in Contabilità. Non è stato creato un duplicato.",
    "This job is already recorded w księgowość. No duplicate was utworzona."
  ],
  "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?": [
    "Restoring this backup will replace the app’s current local data. Export a backup first if you may need to undo this. Continue?",
    "La restauration de cette sauvegarde remplacera les données locales actuelles de l’application. Exportez d’abord une sauvegarde si vous souhaitez pouvoir revenir en arrière. Continuer ?",
    "Beim Wiederherstellen dieser Sicherung werden die aktuellen lokalen App-Daten ersetzt. Exportieren Sie vorher eine Sicherung, falls Sie den Vorgang rückgängig machen möchten. Fortfahren?",
    "Il ripristino di questo backup sostituirà i dati locali attuali dell’app. Esporta prima un backup se potresti voler annullare l’operazione. Continuare?",
    "Restoring this kopia zapasowa will replace the app’s bieżący lokalny data. eksportuj a kopia zapasowa najpierw if you may need do undo this. Kontynuuj?"
  ],
  "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?": [
    "The local keys included in this backup will be replaced. Export a current backup before continuing. Do you want to continue?",
    "Les clés locales incluses dans la sauvegarde vont être remplacées. Exportez une sauvegarde actuelle avant de continuer. Voulez-vous continuer ?",
    "Die in der Sicherung enthaltenen lokalen Schlüssel werden ersetzt. Exportieren Sie vor dem Fortfahren eine aktuelle Sicherung. Möchten Sie fortfahren?",
    "Le chiavi locali incluse nel backup verranno sostituite. Esporta un backup aggiornato prima di continuare. Vuoi continuare?",
    "The lokalny keys included w this kopia zapasowa zostanie replaced. eksportuj a bieżący kopia zapasowa przed continuing. Czy chcesz kontynuować?"
  ],
  "Este trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as {previous}. Do you want to change it to {next}? The previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré sous {previous}. Voulez-vous le remplacer par {next} ? Les entrées précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als {previous} erfasst. Möchten Sie ihn in {next} ändern? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come {previous}. Vuoi cambiarlo in {next}? Le voci precedenti di questo G-code saranno sostituite.",
    "To zadanie jest już zapisane jako {previous}. Czy zmienić je na {next}? Poprzednie wpisy dla tego G-code zostaną zastąpione."
  ],
  "El navegador bloqueó la ventana de la factura. Permite ventanas emergentes para este archivo.": [
    "The browser blocked the invoice window. Allow pop-ups for this file.",
    "Le navigateur a bloqué la fenêtre de la facture. Autorisez les fenêtres pop-up pour ce fichier.",
    "Der Browser hat das Rechnungsfenster blockiert. Erlauben Sie Pop-ups für diese Datei.",
    "Il browser ha bloccato la finestra della fattura. Consenti i popup per questo file.",
    "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okienka dla tego pliku."
  ],
  "Se encontró un borrador guardado el {date}. ¿Quieres recuperarlo?": [
    "A saved draft from {date} was found. Do you want to restore it?",
    "Un brouillon enregistré le {date} a été trouvé. Voulez-vous le récupérer ?",
    "Ein gespeicherter Entwurf vom {date} wurde gefunden. Möchten Sie ihn wiederherstellen?",
    "È stata trovata una bozza salvata il {date}. Vuoi recuperarla?",
    "Znaleziono wersję roboczą zapisaną {date}. Czy chcesz ją odzyskać?"
  ],
  "¿Eliminar solo la tasación de «{name}» del historial?": [
    "Delete only the estimate for “{name}” from the history?",
    "Supprimer uniquement l’estimation « {name} » de l’historique ?",
    "Nur die Kalkulation für „{name}“ aus dem Verlauf löschen?",
    "Eliminare dalla cronologia solo la stima di «{name}»?",
    "Usunąć z historii tylko wycenę „{name}”?"
  ],
  "¿Eliminar el color personalizado {hex} de la paleta?": [
    "Delete the custom colour {hex} from the palette?",
    "Supprimer la couleur personnalisée {hex} de la palette ?",
    "Die benutzerdefinierte Farbe {hex} aus der Palette löschen?",
    "Eliminare il colore personalizzato {hex} dalla tavolozza?",
    "Usuń the custom colour {hex} z the palette?"
  ],
  "¿Eliminar el movimiento «{name}» de la contabilidad?": [
    "Delete the accounting entry “{name}”?",
    "Supprimer l’écriture comptable « {name} » ?",
    "Buchung „{name}“ aus der Buchhaltung löschen?",
    "Eliminare il movimento contabile «{name}»?",
    "Usunąć wpis księgowy „{name}”?"
  ],
  "Print Cost & Profit · Versión 1.407": [
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Version 1.407",
    "Print Cost & Profit · Versione 1.407",
    "Drukuj Koszt & Zysk · Version 1.407"
  ],
  "Impresora": [
    "Printer",
    "Imprimante",
    "Drucker",
    "Stampante",
    "Drukarka"
  ],
  "Se han cargado {count} impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": [
    "Loaded {count} saved printer(s). You can select and connect to any of them without searching again. To discover new printers, click “Search automatically”.",
    "{count} imprimante(s) enregistrée(s) chargée(s). Vous pouvez en sélectionner une et vous y connecter sans relancer la recherche. Pour détecter de nouvelles imprimantes, cliquez sur « Rechercher automatiquement ».",
    "{count} gespeicherte Drucker geladen. Sie können einen auswählen und verbinden, ohne erneut zu suchen. Um neue Drucker zu finden, klicken Sie auf „Automatisch suchen“.",
    "Caricate {count} stampanti salvate. Puoi selezionarne una e connetterti senza ripetere la ricerca. Per trovare nuove stampanti, fai clic su «Cerca automaticamente».",
    "Wczytano zapisane drukarki: {count}. Możesz wybrać drukarkę i połączyć się z nią bez ponownego wyszukiwania. Aby wykryć nowe drukarki, kliknij „Szukaj automatycznie”."
  ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}": [
    "CONNECTED PRINTER · {name} · IP {ip} · Status: {state} · File: {file} · Software: {software}",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file} · Logiciel : {software}",
    "VERBUNDENER DRUCKER · {name} · IP {ip} · Status: {state} · Datei: {file} · Software: {software}",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file} · Software: {software}",
    "CONNECTED drukarka · {Nazwa} · IP {ip} · Status: {state} · Plik: {Plik} · Software: {software}"
  ],
  "consultando la impresora conectada": [
    "checking the connected printer",
    "consultation de l’imprimante connectée",
    "verbundener Drucker wird abgefragt",
    "verifica della stampante connessa",
    "checking the connected drukarka"
  ],
  "Conexión correcta con el puente. La impresora responde.": [
    "Connection to the bridge successful. The printer is responding.",
    "Connexion au pont réussie. L’imprimante répond.",
    "Verbindung zur Bridge erfolgreich. Der Drucker antwortet.",
    "Connessione al bridge riuscita. La stampante risponde.",
    "Połączenie z mostem działa. Drukarka odpowiada."
  ],
  "Perfiles de impresora": [
    "Printer profiles",
    "Profils d’imprimante",
    "Druckerprofile",
    "Profili stampante",
    "drukarka profiles"
  ],
  "Versión": [
    "Version",
    "Version",
    "Version",
    "Version",
    "Version"
  ],
  "Aplicar": [
    "Apply",
    "Appliquer",
    "Anwenden",
    "Applica",
    "Zastosuj"
  ],
  "IP guardada y validada: {ip}. Pulsa «Ver impresora conectada» para consultar su estado.": [
    "IP saved and validated: {ip}. Click “View connected printer” to check its status.",
    "Adresse IP enregistrée et validée : {ip}. Cliquez sur « Voir l’imprimante connectée » pour vérifier son état.",
    "IP gespeichert und überprüft: {ip}. Klicken Sie auf „Verbundene Drucker anzeigen“, um den Status zu prüfen.",
    "IP salvato e verificato: {ip}. Premi «Visualizza stampante connessa» per controllarne lo stato.",
    "Adres IP zapisano i sprawdzono: {ip}. Kliknij „Pokaż podłączoną drukarkę”, aby sprawdzić jej stan."
  ],
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.": [
    "Server and SQLite checked. Database: {database}. Backup folder: {backups}.",
    "Serveur et SQLite vérifiés. Base de données : {database}. Dossier des sauvegardes : {backups}.",
    "Server und SQLite überprüft. Datenbank: {database}. Sicherungsordner: {backups}.",
    "Server e SQLite verificati. Database: {database}. Cartella dei backup: {backups}.",
    "Server i SQLite checked. baza danych: {baza danych}. kopia zapasowa folder: {backups}."
  ],
  "Location: {path}": [
    "Location: {path}",
    "Emplacement : {path}",
    "Speicherort: {path}",
    "Percorso: {path}",
    "Location: {path}"
  ],
  "Copia válida. Integridad: {integrity}. Claves: {keys}. Tamaño: {size} bytes. Archivo: {file}": [
    "Valid backup. Integrity: {integrity}. Keys: {keys}. Size: {size} bytes. File: {file}",
    "Sauvegarde valide. Intégrité : {integrity}. Clés : {keys}. Taille : {size} octets. Fichier : {file}",
    "Gültige Sicherung. Integrität: {integrity}. Schlüssel: {keys}. Größe: {size} Bytes. Datei: {file}",
    "Backup valido. Integrità: {integrity}. Chiavi: {keys}. Dimensione: {size} byte. File: {file}",
    "Valid kopia zapasowa. integralność: {integralność}. Keys: {keys}. Size: {size} bytes. Plik: {Plik}"
  ],
  "ORDER 2": [
    "ORDER 2",
    "COMMANDE 2",
    "AUFTRAG 2",
    "ORDINE 2",
    "Zamówienie 2"
  ],
  "− Ocultar campos": [
    "− Hide fields",
    "− Masquer les champs",
    "− Felder ausblenden",
    "− Nascondi campi",
    "− Ukryj fields"
  ],
  "↑ Subir apartado": [
    "↑ Move section up",
    "↑ Monter la section",
    "↑ Abschnitt nach oben",
    "↑ Sposta sezione in alto",
    "↑ Move section up"
  ],
  "↓ Bajar apartado": [
    "↓ Move section down",
    "↓ Descendre la section",
    "↓ Abschnitt nach unten",
    "↓ Sposta sezione in basso",
    "↓ Move section down"
  ],
  "Ocultar campos": [
    "Hide fields",
    "Masquer les champs",
    "Felder ausblenden",
    "Nascondi campi",
    "Ukryj fields"
  ],
  "Subir apartado": [
    "Move section up",
    "Monter la section",
    "Abschnitt nach oben",
    "Sposta sezione in alto",
    "Move section up"
  ],
  "Bajar apartado": [
    "Move section down",
    "Descendre la section",
    "Abschnitt nach unten",
    "Sposta sezione in basso",
    "Move section down"
  ],
  "IP guardada y validada": [
    "IP saved and validated",
    "Adresse IP enregistrée et validée",
    "IP-Adresse gespeichert und validiert",
    "IP salvato e convalidato",
    "IP Zapisano i validated"
  ],
  "Estado:": [
    "Status:",
    "État :",
    "Status:",
    "Stato:",
    "Status:"
  ],
  "Archivo:": [
    "File:",
    "Fichier :",
    "Datei:",
    "File:",
    "Plik:"
  ],
  "Software:": [
    "Software:",
    "Logiciel :",
    "Software:",
    "Software:",
    "Software:"
  ],
  "Claves:": [
    "Keys:",
    "Clés :",
    "Schlüssel:",
    "Chiavi:",
    "Keys:"
  ],
  "Tamaño:": [
    "Size:",
    "Taille :",
    "Größe:",
    "Dimensione:",
    "Size:"
  ],
  "Integridad:": [
    "Integrity:",
    "Intégrité :",
    "Integrität:",
    "Integrità:",
    "integralność:"
  ],
  "Carpeta de copias:": [
    "Backup folder:",
    "Dossier des sauvegardes :",
    "Sicherungsordner:",
    "Cartella dei backup:",
    "kopia zapasowa folder:"
  ],
  "Servidor y SQLite comprobados. Base:": [
    "Server and SQLite checked. Database:",
    "Serveur et SQLite vérifiés. Base de données :",
    "Server und SQLite überprüft. Datenbank:",
    "Server e SQLite verificati. Database:",
    "Server i SQLite checked. baza danych:"
  ],
  "Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": [
    "2 saved printer(s) loaded. You can select and connect to any of them without searching again. To discover new printers, click “Discover automatically”.",
    "2 imprimante(s) enregistrée(s) chargée(s). Vous pouvez en sélectionner une et vous y connecter sans relancer la recherche. Pour découvrir de nouvelles imprimantes, cliquez sur « Rechercher automatiquement ».",
    "2 gespeicherte Drucker geladen. Sie können einen davon auswählen und verbinden, ohne erneut zu suchen. Um neue Drucker zu finden, klicken Sie auf „Automatisch suchen“.",
    "Caricate 2 stampanti salvate. Puoi selezionarne una e connetterti senza cercare di nuovo. Per trovare nuove stampanti, premi «Cerca automaticamente».",
    "2 Zapisano drukarka(s) loaded. You can Wybierz i connect do any of them bez searching again. do discover nowy drukarki, click “Discover automatycznie”."
  ],
  "Editando cliente guardado. Al guardar se actualizarán sus datos en toda la aplicación.": [
    "Editing saved customer. Saving will update their details throughout the application.",
    "Modification du client enregistré. L’enregistrement mettra à jour ses données dans toute l’application.",
    "Gespeicherten Kunden bearbeiten. Beim Speichern werden seine Daten in der gesamten Anwendung aktualisiert.",
    "Modifica del cliente salvato. Salvando, i dati verranno aggiornati in tutta l’applicazione.",
    "Edycja zapisanego klienta. Zapisanie zaktualizuje jego dane w całej aplikacji."
  ],
  "Introduce los datos del nuevo cliente.": [
    "Enter the new customer’s details.",
    "Saisissez les coordonnées du nouveau client.",
    "Geben Sie die Daten des neuen Kunden ein.",
    "Inserisci i dati del nuovo cliente.",
    "Enter the nowy Klient’s szczegóły."
  ],
  "Bobinas": [
    "Spools",
    "Bobines",
    "Spulen",
    "Bobine",
    "Spools"
  ],
  "✓ Aplicar": [
    "✓ Apply",
    "✓ Appliquer",
    "✓ Anwenden",
    "✓ Applica",
    "✓ Apply"
  ],
  "{count} bobina": [
    "{count} spool",
    "{count} bobine",
    "{count} Spule",
    "{count} bobina",
    "{count} szpula"
  ],
  "{count} bobinas": [
    "{count} spools",
    "{count} bobines",
    "{count} Spulen",
    "{count} bobine",
    "{count} spools"
  ],
  "MARCA": [
    "BRAND",
    "MARQUE",
    "MARKE",
    "MARCA",
    "BRAND"
  ],
  "Marca de filamento": [
    "Filament brand",
    "Marque de filament",
    "Filamentmarke",
    "Marca del filamento",
    "filament brand"
  ],
  "Se ha guardado la bobina.": [
    "Spool saved.",
    "Bobine enregistrée.",
    "Spule gespeichert.",
    "Bobina salvata.",
    "szpula Zapisano."
  ],
  "Bobina guardada correctamente.": [
    "Spool saved successfully.",
    "Bobine enregistrée.",
    "Spule erfolgreich gespeichert.",
    "Bobina salvata correttamente.",
    "Szpulę zapisano poprawnie."
  ],
  "¿Eliminar esta bobina?": [
    "Delete this spool?",
    "Supprimer cette bobine ?",
    "Diese Spule löschen?",
    "Eliminare questa bobina?",
    "Usuń this szpula?"
  ],
  "Editar bobina": [
    "Edit spool",
    "Modifier la bobine",
    "Spule bearbeiten",
    "Modifica bobina",
    "Edytuj szpula"
  ],
  "Eliminar bobina": [
    "Delete spool",
    "Supprimer la bobine",
    "Spule löschen",
    "Elimina bobina",
    "Usuń szpula"
  ],
  "Filamento": [
    "Filament",
    "Filament",
    "Filament",
    "Filamento",
    "filament"
  ],
  "Stock insuficiente": [
    "Insufficient stock",
    "Stock insuffisant",
    "Bestand unzureichend",
    "Scorte insufficienti",
    "Niewystarczający stan magazynowy"
  ],
  "Sin asignar": [
    "Unassigned",
    "Non attribué",
    "Nicht zugewiesen",
    "Non assegnato",
    "Nieprzypisane"
  ],
  "Pedidos": [
    "Orders",
    "Commandes",
    "Aufträge",
    "Ordini",
    "Zamówienia"
  ],
  "📦 Pedidos": [
    "📦 Orders",
    "📦 Commandes",
    "📦 Aufträge",
    "📦 Ordini",
    "📦 Zamówienia"
  ],
  "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y pedidos.": [
    "Central customer directory. Saved customers can be selected in quotes, invoices and orders.",
    "Répertoire central des clients. Les clients enregistrés ici peuvent être sélectionnés dans les devis, factures et commandes.",
    "Zentrale Kundenkartei. Hier gespeicherte Kunden können in Angeboten, Rechnungen und Aufträgen ausgewählt werden.",
    "Rubrica clienti centrale. I clienti salvati qui possono essere selezionati in preventivi, fatture e ordini.",
    "Centralna książka klientów. Zapisanych tutaj klientów można wybierać w ofertach, fakturach i zamówieniach."
  ],
  "Stock filamento": [
    "Filament stock",
    "Stock de filament",
    "Filamentbestand",
    "Scorte di filamento",
    "Zapas filamentu"
  ],
  "🧵 Stock filamento": [
    "🧵 Filament stock",
    "🧵 Stock de filament",
    "🧵 Filamentbestand",
    "🧵 Scorte di filamento",
    "🧵 filament Stan magazynowy"
  ],
  "Control manual del stock de filamento y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": [
    "Manual tracking of filament stock and remaining material. Price per kilogram is used as a reference for future calculations.",
    "Suivi manuel du stock de filament et du matériau restant. Le prix au kilo sert de référence pour les prochains calculs.",
    "Manuelle Verwaltung des Filamentbestands und Restmaterials. Der Kilopreis dient als Referenz für künftige Berechnungen.",
    "Gestione manuale delle scorte di filamento e del materiale rimanente. Il prezzo al chilo è un riferimento per i calcoli successivi.",
    "Ręczne zarządzanie zapasem filamentu i pozostałym materiałem. Cena za kilogram służy jako odniesienie do kolejnych obliczeń."
  ],
  "Buscar pedidos": [
    "Search orders",
    "Rechercher des commandes",
    "Aufträge suchen",
    "Cerca ordini",
    "Szukaj zamówień"
  ],
  "Cliente, producto, estado…": [
    "Customer, product, status…",
    "Client, produit, statut…",
    "Kunde, Produkt, Status…",
    "Cliente, prodotto, stato…",
    "Klient, produkt, status…"
  ],
  "Buscar presupuestos": [
    "Search quotes",
    "Rechercher des devis",
    "Angebote suchen",
    "Cerca preventivi",
    "Szukaj ofert"
  ],
  "Número, cliente, producto…": [
    "Number, customer, product…",
    "Numéro, client, produit…",
    "Nummer, Kunde, Produkt…",
    "Numero, cliente, prodotto…",
    "Numer, klient, produkt…"
  ],
  "Buscar facturas": [
    "Search invoices",
    "Rechercher des factures",
    "Rechnungen suchen",
    "Cerca fatture",
    "Szukaj faktur"
  ],
  "Número, cliente, concepto…": [
    "Number, customer, description…",
    "Numéro, client, libellé…",
    "Nummer, Kunde, Beschreibung…",
    "Numero, cliente, descrizione…",
    "Numer, klient, opis…"
  ],
  "Buscar filamento": [
    "Search filament",
    "Rechercher un filament",
    "Filament suchen",
    "Cerca filamento",
    "Szukaj filamentu"
  ],
  "Material, color, marca…": [
    "Material, colour, brand…",
    "Matériau, couleur, marque…",
    "Material, Farbe, Marke…",
    "Materiale, colore, marca…",
    "Materiał, kolor, marka…"
  ],
  "Buscar movimientos contables": [
    "Search accounting entries",
    "Rechercher les écritures comptables",
    "Buchungssätze suchen",
    "Cerca movimenti contabili",
    "Szukaj zapisów księgowych"
  ],
  "Fecha, impresora, concepto, referencia…": [
    "Date, printer, description, reference…",
    "Date, imprimante, libellé, référence…",
    "Datum, Drucker, Beschreibung, Referenz…",
    "Data, stampante, descrizione, riferimento…",
    "Data, drukarka, opis, odniesienie…"
  ],
  "Limpiar": [
    "Clear",
    "Effacer",
    "Leeren",
    "Pulisci",
    "Wyczyść"
  ],
  "No hay resultados para la búsqueda.": [
    "No search results found.",
    "Aucun résultat pour cette recherche.",
    "Keine Suchergebnisse gefunden.",
    "Nessun risultato trovato.",
    "Brak wyników wyszukiwania."
  ],
  "Ordenar por": [
    "Sort by",
    "Trier par",
    "Sortieren nach",
    "Ordina per",
    "Sortuj według"
  ],
  "Predeterminado": [
    "Default",
    "Par défaut",
    "Standard",
    "Predefinito",
    "Domyślnie"
  ],
  "Ordenar pedidos": [
    "Sort orders",
    "Trier les commandes",
    "Aufträge sortieren",
    "Ordina ordini",
    "Sortuj zamówienia"
  ],
  "Ordenar presupuestos": [
    "Sort quotes",
    "Trier les devis",
    "Angebote sortieren",
    "Ordina preventivi",
    "Sortuj oferty"
  ],
  "Ordenar facturas": [
    "Sort invoices",
    "Trier les factures",
    "Rechnungen sortieren",
    "Ordina fatture",
    "Sort invoices"
  ],
  "Ordenar filamento": [
    "Sort filament",
    "Trier le filament",
    "Filament sortieren",
    "Ordina filamento",
    "Sort filament"
  ],
  "Ordenar movimientos contables": [
    "Sort accounting entries",
    "Trier les mouvements comptables",
    "Buchungen sortieren",
    "Ordina movimenti contabili",
    "Sort księgowość wpisy"
  ],
  "Número": [
    "Number",
    "Numéro",
    "Nummer",
    "Numero",
    "Numer"
  ],
  "Color": [
    "Color",
    "Couleur",
    "Farbe",
    "Colore",
    "Kolor"
  ],
  "Importe": [
    "Amount",
    "Montant",
    "Betrag",
    "Importo",
    "kwota"
  ],
  "Mostrar campos": [
    "Show fields",
    "Afficher les champs",
    "Felder anzeigen",
    "Mostra campi",
    "Pokaż fields"
  ],
  "Buscando la impresora en la red local… Si no aparece en 18 segundos, podrás introducir su IP manualmente.": [
    "Searching for the printer on the local network… If it does not appear within 18 seconds, you can enter its IP manually.",
    "Recherche de l’imprimante sur le réseau local… Si elle n’apparaît pas dans les 18 secondes, vous pourrez saisir son adresse IP manuellement.",
    "Suche nach dem Drucker im lokalen Netzwerk… Wenn er nach 18 Sekunden nicht erscheint, können Sie die IP manuell eingeben.",
    "Ricerca della stampante nella rete locale… Se non appare entro 18 secondi, puoi inserire manualmente il suo IP.",
    "Wyszukiwanie drukarki w sieci lokalnej… Jeśli nie pojawi się w ciągu 18 sekund, możesz ręcznie wpisać jej adres IP."
  ],
  "Consultando servidor, integridad y copias…": [
    "Checking server, integrity, and backups…",
    "Vérification du serveur, de l’intégrité et des sauvegardes…",
    "Server, Integrität und Sicherungen werden geprüft…",
    "Verifica del server, dell’integrità e dei backup…",
    "Sprawdzanie serwera, integralności i kopii zapasowych…"
  ],
  "Respuesta no válida del servidor (HTTP ": [
    "Invalid server response (HTTP ",
    "Réponse du serveur non valide (HTTP ",
    "Ungültige Serverantwort (HTTP ",
    "Risposta del server non valida (HTTP ",
    "Nieprawidłowa odpowiedź serwera (HTTP "
  ],
  "Mostrar": [
    "Show",
    "Afficher",
    "Anzeigen",
    "Mostra",
    "Pokaż"
  ],
  "Aceptar": [
    "Accept",
    "Accepter",
    "Akzeptieren",
    "Accetta",
    "Accept"
  ],
  "Aviso": [
    "Notice",
    "Avis",
    "Hinweis",
    "Avviso",
    "Notice"
  ],
  "Información": [
    "Information",
    "Information",
    "Information",
    "Informazioni",
    "Information"
  ],
  "Error": [
    "Error",
    "Erreur",
    "Fehler",
    "Errore",
    "Błąd"
  ],
  "Cerrar": [
    "Close",
    "Fermer",
    "Schließen",
    "Chiudi",
    "Zamknij"
  ],
  "Conectado": [
    "Connected",
    "Connecté",
    "Verbunden",
    "Connesso",
    "Connected"
  ],
  "Desconectado": [
    "Disconnected",
    "Déconnecté",
    "Getrennt",
    "Disconnesso",
    "Disconnected"
  ],
  "Listo": [
    "Ready",
    "Prêt",
    "Bereit",
    "Pronto",
    "Ready"
  ],
  "En curso": [
    "In progress",
    "En cours",
    "In Bearbeitung",
    "In corso",
    "w progress"
  ],
  "Completado": [
    "Completed",
    "Terminé",
    "Abgeschlossen",
    "Completato",
    "ukończono"
  ],
  "Fallido": [
    "Failed",
    "Échec",
    "Fehlgeschlagen",
    "Non riuscito",
    "Niepowodzenie"
  ],
  "Buscando…": [
    "Searching…",
    "Recherche…",
    "Suche…",
    "Ricerca…",
    "Searching…"
  ],
  "No se encontraron resultados": [
    "No results found",
    "Aucun résultat trouvé",
    "Keine Ergebnisse gefunden",
    "Nessun risultato trovato",
    "Nie znaleziono wyników"
  ],
  "Seleccionar idioma": [
    "Select language",
    "Sélectionner la langue",
    "Sprache auswählen",
    "Seleziona lingua",
    "Wybierz Język"
  ],
  "Idioma": [
    "Language",
    "Langue",
    "Sprache",
    "Lingua",
    "Język"
  ],
  "Español": [
    "Spanish",
    "Espagnol",
    "Spanisch",
    "Spagnolo",
    "Spanish"
  ],
  "Inglés": [
    "English",
    "Anglais",
    "Englisch",
    "Inglese",
    "English"
  ],
  "Francés": [
    "French",
    "Français",
    "Französisch",
    "Francese",
    "French"
  ],
  "Alemán": [
    "German",
    "Allemand",
    "Deutsch",
    "Tedesco",
    "German"
  ],
  "Italiano": [
    "Italian",
    "Italien",
    "Italienisch",
    "Italiano",
    "Italian"
  ],
  "Polaco": [
    "Polish",
    "Polonais",
    "Polnisch",
    "Polacco",
    "Polish"
  ],
  "Rentable, pero por debajo del precio recomendado: faltan {amount} antes de impuestos por unidad para alcanzar el porcentaje de beneficio objetivo.": [
    "Profitable, but below the recommended price: an additional {amount} per unit before tax is needed to reach the target profit percentage.",
    "Rentable, mais en dessous du prix recommandé : il manque {amount} par unité avant impôts pour atteindre le pourcentage de bénéfice visé.",
    "Rentabel, aber unter dem empfohlenen Preis: Es fehlen {amount} pro Einheit vor Steuern, um den angestrebten Gewinnprozentsatz zu erreichen.",
    "Redditizio, ma al di sotto del prezzo consigliato: mancano {amount} per unità, al netto delle imposte, per raggiungere la percentuale di profitto obiettivo.",
    "Opłacalna, ale poniżej zalecanej ceny: do osiągnięcia docelowego procentu zysku brakuje {amount} na sztukę przed opodatkowaniem."
  ],
  "El margen se calcula sobre el precio de venta sin impuestos; la rentabilidad sobre coste se calcula dividiendo el beneficio entre el coste por unidad. El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": [
    "Margin is calculated on the pre-tax selling price; return on cost is profit divided by cost per unit. The displayed tax is configurable and estimated. Check the rate applicable to your transaction, country, product and tax status.",
    "La marge est calculée sur le prix de vente hors taxes ; la rentabilité sur coût correspond au bénéfice divisé par le coût unitaire. La taxe affichée est une estimation configurable. Vérifiez le taux applicable à votre opération, pays, produit et situation fiscale.",
    "Die Marge wird anhand des Verkaufspreises ohne Steuern berechnet; die Rentabilität bezogen auf die Kosten ist der Gewinn geteilt durch die Stückkosten. Die angezeigte Steuer ist eine konfigurierbare Schätzung. Prüfen Sie den für Geschäft, Land, Produkt und Steuersituation geltenden Satz.",
    "Il margine è calcolato sul prezzo di vendita al netto delle imposte; la redditività sul costo è il profitto diviso per il costo unitario. L’imposta mostrata è una stima configurabile. Verifica l’aliquota applicabile all’operazione, al paese, al prodotto e alla tua situazione fiscale.",
    "Marża jest liczona od ceny sprzedaży bez podatku; rentowność kosztowa to zysk podzielony przez koszt jednostkowy. Wyświetlany podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej."
  ],
  "No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n{message}": [
    "PC storage could not be started. Browser storage will not be used to avoid splitting your data.\n\n{message}",
    "Impossible de démarrer le stockage du PC. Le stockage du navigateur ne sera pas utilisé afin d’éviter de séparer les données.\n\n{message}",
    "Der PC-Speicher konnte nicht gestartet werden. Der Browserspeicher wird nicht verwendet, um eine Aufteilung der Daten zu vermeiden.\n\n{message}",
    "Impossibile avviare l’archiviazione sul PC. Non verrà utilizzata l’archiviazione del browser per evitare di separare i dati.\n\n{message}",
    "Nie udało się uruchomić pamięci na komputerze. Pamięć przeglądarki nie zostanie użyta, aby uniknąć rozdzielenia danych.\n\n{message}"
  ],
  "No se pudo aplicar la IP {ip}. {message}. Comprueba que el puente esté iniciado y que la U1 responda en el puerto 7125.": [
    "Could not apply IP {ip}. {message}. Make sure the bridge is running and the U1 responds on port 7125.",
    "Impossible d’appliquer l’adresse IP {ip}. {message}. Vérifiez que le pont est démarré et que la U1 répond sur le port 7125.",
    "IP-Adresse {ip} konnte nicht übernommen werden. {message}. Prüfen Sie, ob die Bridge läuft und die U1 auf Port 7125 antwortet.",
    "Impossibile applicare l’IP {ip}. {message}. Verifica che il bridge sia avviato e che la U1 risponda sulla porta 7125.",
    "Nie udało się zastosować adresu IP {ip}. {message}. Sprawdź, czy most działa i czy U1 odpowiada na porcie 7125."
  ],
  "No se recibió ningún archivo.": [
    "No file was received.",
    "Aucun fichier reçu.",
    "Es wurde keine Datei empfangen.",
    "Non è stato ricevuto alcun file.",
    "Nie otrzymano żadnego pliku."
  ],
  "El archivo seleccionado está vacío (0 bytes).": [
    "The selected file is empty (0 bytes).",
    "Le fichier sélectionné est vide (0 octet).",
    "Die ausgewählte Datei ist leer (0 Byte).",
    "Il file selezionato è vuoto (0 byte).",
    "Wybrany plik jest pusty (0 bajtów)."
  ],
  "Introduce una IPv4 válida, por ejemplo 192.168.1.48.": [
    "Enter a valid IPv4 address, for example 192.168.1.48.",
    "Saisissez une adresse IPv4 valide, par exemple 192.168.1.48.",
    "Geben Sie eine gültige IPv4-Adresse ein, zum Beispiel 192.168.1.48.",
    "Inserisci un indirizzo IPv4 valido, ad esempio 192.168.1.48.",
    "Wprowadź prawidłowy adres IPv4, na przykład 192.168.1.48."
  ],
  "Comprobando la impresora en {ip}:7125…": [
    "Checking the printer at {ip}:7125…",
    "Vérification de l’imprimante sur {ip}:7125…",
    "Drucker unter {ip}:7125 wird überprüft…",
    "Verifica della stampante su {ip}:7125…",
    "Sprawdzanie drukarki pod adresem {ip}:7125…"
  ],
  "IP comprobada y guardada: {ip}. Pulsa «Probar conexión» para verificar el estado.": [
    "IP checked and saved: {ip}. Click “Test connection” to verify the status.",
    "Adresse IP vérifiée et enregistrée : {ip}. Cliquez sur « Tester la connexion » pour vérifier l’état.",
    "IP-Adresse geprüft und gespeichert: {ip}. Klicken Sie auf „Verbindung testen“, um den Status zu überprüfen.",
    "IP verificato e salvato: {ip}. Fai clic su «Verifica connessione» per controllare lo stato.",
    "Adres IP sprawdzony i zapisany: {ip}. Kliknij „Testuj połączenie”, aby sprawdzić stan."
  ],
  "Buscando una Snapmaker U1 en la red local. Puede tardar hasta 15 segundos…": [
    "Searching for a Snapmaker U1 on the local network. This may take up to 15 seconds…",
    "Recherche d’une Snapmaker U1 sur le réseau local. Cela peut prendre jusqu’à 15 secondes…",
    "Suche nach einer Snapmaker U1 im lokalen Netzwerk. Dies kann bis zu 15 Sekunden dauern…",
    "Ricerca di una Snapmaker U1 nella rete locale. Potrebbero essere necessari fino a 15 secondi…",
    "Wyszukiwanie drukarki Snapmaker U1 w sieci lokalnej. Może to potrwać do 15 sekund…"
  ],
  "Snapmaker U1 encontrada y configurada: {ip}. Pulsa «Probar conexión».": [
    "Snapmaker U1 found and configured: {ip}. Click “Test connection”.",
    "Snapmaker U1 trouvée et configurée : {ip}. Cliquez sur « Tester la connexion ».",
    "Snapmaker U1 gefunden und konfiguriert: {ip}. Klicken Sie auf „Verbindung testen“.",
    "Snapmaker U1 trovata e configurata: {ip}. Fai clic su «Verifica connessione».",
    "Znaleziono i skonfigurowano Snapmaker U1: {ip}. Kliknij „Testuj połączenie”."
  ],
  "No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.": [
    "PC storage could not be started. Browser storage will not be used to avoid splitting your data.",
    "Impossible de démarrer le stockage du PC. Le stockage du navigateur ne sera pas utilisé afin d’éviter de séparer les données.",
    "Der PC-Speicher konnte nicht gestartet werden. Der Browserspeicher wird nicht verwendet, um eine Aufteilung der Daten zu vermeiden.",
    "Impossibile avviare l’archiviazione sul PC. Non verrà utilizzata l’archiviazione del browser per evitare di separare i dati.",
    "Nie udało się uruchomić pamięci na komputerze. Pamięć przeglądarki nie zostanie użyta, aby uniknąć rozdzielenia danych."
  ],
  "No se pudo aplicar la IP": [
    "Could not apply the IP",
    "Impossible d’appliquer l’adresse IP",
    "Die IP konnte nicht angewendet werden",
    "Impossibile applicare l’IP",
    "Nie udało się zastosować adresu IP"
  ],
  "Historial de tasaciones": [
    "Estimate history",
    "Historique des estimations",
    "Kalkulationsverlauf",
    "Cronologia delle stime",
    "Historia wycen"
  ],
  "Busca piezas guardadas, ordena por fecha o rentabilidad y selecciona dos tasaciones para compararlas. El historial se conserva en el almacenamiento local de esta instalación.": [
    "Search saved parts, sort by date or profitability, and select two estimates to compare. History is kept in this installation’s local storage.",
    "Recherchez les pièces enregistrées, triez par date ou rentabilité et sélectionnez deux estimations à comparer. L’historique est conservé dans le stockage local de cette installation.",
    "Suchen Sie gespeicherte Teile, sortieren Sie nach Datum oder Rentabilität und wählen Sie zwei Kalkulationen zum Vergleich aus. Der Verlauf bleibt im lokalen Speicher dieser Installation.",
    "Cerca i pezzi salvati, ordina per data o redditività e seleziona due stime da confrontare. La cronologia è conservata nell’archiviazione locale di questa installazione.",
    "Wyszukuj zapisane części, sortuj według daty lub rentowności i wybierz dwie wyceny do porównania. Historia jest przechowywana lokalnie w tej instalacji."
  ],
  "Buscar por pieza, perfil, archivo o notas": [
    "Search by part, profile, file or notes",
    "Rechercher par pièce, profil, fichier ou notes",
    "Nach Teil, Profil, Datei oder Notizen suchen",
    "Cerca per pezzo, profilo, file o note",
    "Szukaj według części, profilu, pliku lub notatek"
  ],
  "Ej. dragón, PETG, Snapmaker U1": [
    "E.g. dragon, PETG, Snapmaker U1",
    "Ex. : dragon, PETG, Snapmaker U1",
    "Z. B. Drache, PETG, Snapmaker U1",
    "Es. drago, PETG, Snapmaker U1",
    "Np. dragon, PETG, Snapmaker U1"
  ],
  "Ordenar historial": [
    "Sort history",
    "Trier l’historique",
    "Verlauf sortieren",
    "Ordina cronologia",
    "Sortuj historię"
  ],
  "Más recientes primero": [
    "Newest first",
    "Les plus récents en premier",
    "Neueste zuerst",
    "Prima i più recenti",
    "Najnowsze najpierw"
  ],
  "Más antiguas primero": [
    "Oldest first",
    "Les plus anciens en premier",
    "Älteste zuerst",
    "Prima i più vecchi",
    "Najstarsze najpierw"
  ],
  "Mayor beneficio por unidad": [
    "Highest profit per unit",
    "Bénéfice par unité le plus élevé",
    "Höchster Gewinn pro Einheit",
    "Profitto più alto per unità",
    "Najwyższy zysk na sztukę"
  ],
  "Menor coste por unidad": [
    "Lowest cost per unit",
    "Coût unitaire le plus bas",
    "Niedrigste Stückkosten",
    "Costo unitario più basso",
    "Najniższy koszt jednostkowy"
  ],
  "Nombre de pieza A–Z": [
    "Part name A–Z",
    "Nom de pièce A–Z",
    "Teilename A–Z",
    "Nome pezzo A–Z",
    "Nazwa elementu A–Z"
  ],
  "Todavía no hay tasaciones guardadas.": [
    "There are no saved estimates yet.",
    "Aucune estimation n’a encore été enregistrée.",
    "Es wurden noch keine Kalkulationen gespeichert.",
    "Non ci sono ancora stime salvate.",
    "Nie zapisano jeszcze żadnych wycen."
  ],
  "Comparar seleccionadas (2)": [
    "Compare selected (2)",
    "Comparer la sélection (2)",
    "Ausgewählte vergleichen (2)",
    "Confronta selezionate (2)",
    "Porównaj wybrane (2)"
  ],
  "Limpiar selección": [
    "Clear selection",
    "Effacer la sélection",
    "Auswahl aufheben",
    "Cancella selezione",
    "Wyczyść wybór"
  ],
  "Cliente, número de pedido o nota": [
    "Customer, order number or note",
    "Client, numéro de commande ou note",
    "Kunde, Auftragsnummer oder Notiz",
    "Cliente, numero ordine o nota",
    "Klient, numer zamówienia lub notatka"
  ],
  "Snapmaker Orca · integración local": [
    "Snapmaker Orca · local integration",
    "Snapmaker Orca · intégration locale",
    "Snapmaker Orca · lokale Integration",
    "Snapmaker Orca · integrazione locale",
    "Snapmaker Orca · integracja lokalna"
  ],
  "Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.": [
    "Found {count} printers. Select the one you want to use from the dropdown.",
    "{count} imprimantes trouvées. Sélectionnez celle que vous souhaitez utiliser dans la liste déroulante.",
    "{count} Drucker gefunden. Wählen Sie im Dropdown-Menü den gewünschten Drucker aus.",
    "Trovate {count} stampanti. Seleziona quella che vuoi usare dal menu a discesa.",
    "Znaleziono drukarki: {count}. Wybierz odpowiednią z listy rozwijanej."
  ],
  "Buscando todas las impresoras compatibles en la red local…": [
    "Searching for all compatible printers on the local network…",
    "Recherche de toutes les imprimantes compatibles sur le réseau local…",
    "Suche nach allen kompatiblen Druckern im lokalen Netzwerk…",
    "Ricerca di tutte le stampanti compatibili nella rete locale…",
    "Wyszukiwanie wszystkich zgodnych drukarek w sieci lokalnej…"
  ],
  "Error durante la búsqueda: {message}": [
    "Error during search: {message}",
    "Erreur pendant la recherche : {message}",
    "Fehler bei der Suche: {message}",
    "Errore durante la ricerca: {message}",
    "Błąd podczas wyszukiwania: {message}"
  ],
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {directory}.": [
    "Server and SQLite checked. Database: {database}. Backup folder: {directory}.",
    "Serveur et SQLite vérifiés. Base de données : {database}. Dossier des sauvegardes : {directory}.",
    "Server und SQLite überprüft. Datenbank: {database}. Sicherungsordner: {directory}.",
    "Server e SQLite verificati. Database: {database}. Cartella dei backup: {directory}.",
    "Serwer i SQLite sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {directory}."
  ],
  "Todavía no hay copias SQLite": [
    "No SQLite backups yet",
    "Aucune sauvegarde SQLite pour le moment",
    "Noch keine SQLite-Sicherungen vorhanden",
    "Ancora nessun backup SQLite",
    "Nie ma jeszcze kopii zapasowych SQLite"
  ],
  "Configuración guardada en SQLite: copia automática cada {minutes} minuto(s), máximo {max} copias. La limpieza solo elimina copias antiguas que excedan el nuevo límite.": [
    "Configuration saved in SQLite: automatic backup every {minutes} minute(s), maximum {max} backups. Cleanup only removes older backups exceeding the new limit.",
    "Configuration enregistrée dans SQLite : sauvegarde automatique toutes les {minutes} minute(s), maximum {max} sauvegardes. Le nettoyage ne supprime que les anciennes sauvegardes dépassant la nouvelle limite.",
    "Konfiguration in SQLite gespeichert: automatische Sicherung alle {minutes} Minute(n), maximal {max} Sicherungen. Die Bereinigung entfernt nur ältere Sicherungen, die das neue Limit überschreiten.",
    "Configurazione salvata in SQLite: backup automatico ogni {minutes} minuto/i, massimo {max} backup. La pulizia elimina solo i backup più vecchi che superano il nuovo limite.",
    "Zapisano konfigurację w SQLite: automatyczna kopia co {minutes} min, maksymalnie {max} kopii. Czyszczenie usuwa tylko starsze kopie przekraczające nowy limit."
  ],
  "¿Crear ahora una copia íntegra de la base SQLite? No se modificará la base de datos activa.": [
    "Create a full copy of the SQLite database now? The active database will not be modified.",
    "Créer maintenant une copie complète de la base SQLite ? La base de données active ne sera pas modifiée.",
    "Jetzt eine vollständige Kopie der SQLite-Datenbank erstellen? Die aktive Datenbank wird nicht verändert.",
    "Creare ora una copia completa del database SQLite? Il database attivo non verrà modificato.",
    "Czy teraz utworzyć pełną kopię bazy SQLite? Aktywna baza danych nie zostanie zmieniona."
  ],
  "Creando y validando copia…": [
    "Creating and validating backup…",
    "Création et validation de la sauvegarde…",
    "Sicherung wird erstellt und überprüft…",
    "Creazione e verifica del backup…",
    "Tworzenie i sprawdzanie kopii…"
  ],
  "Copia creada y validada correctamente: {name} ({size} MB).": [
    "Backup created and validated successfully: {name} ({size} MB).",
    "Sauvegarde créée et validée : {name} ({size} Mo).",
    "Sicherung erfolgreich erstellt und überprüft: {name} ({size} MB).",
    "Backup creato e verificato correttamente: {name} ({size} MB).",
    "Kopia została utworzona i sprawdzona: {name} ({size} MB)."
  ],
  "No se pudo crear la copia: {message}": [
    "Could not create the backup: {message}",
    "Impossible de créer la sauvegarde : {message}",
    "Sicherung konnte nicht erstellt werden: {message}",
    "Impossibile creare il backup: {message}",
    "Nie udało się utworzyć kopii: {message}"
  ],
  "Selecciona primero una copia.": [
    "Select a backup first.",
    "Sélectionnez d’abord une sauvegarde.",
    "Wählen Sie zuerst eine Sicherung aus.",
    "Seleziona prima un backup.",
    "Najpierw wybierz kopię zapasową."
  ],
  "Validando copia seleccionada…": [
    "Validating selected backup…",
    "Validation de la sauvegarde sélectionnée…",
    "Ausgewählte Sicherung wird überprüft…",
    "Verifica del backup selezionato…",
    "Sprawdzanie wybranej kopii…"
  ],
  "Copia válida.": [
    "Valid backup.",
    "Sauvegarde valide.",
    "Gültige Sicherung.",
    "Backup valido.",
    "Prawidłowa kopia zapasowa."
  ],
  "La copia no supera la comprobación.": [
    "The backup did not pass validation.",
    "La sauvegarde n’a pas passé la vérification.",
    "Die Sicherung hat die Prüfung nicht bestanden.",
    "Il backup non ha superato la verifica.",
    "Kopia nie przeszła weryfikacji."
  ],
  "No se pudo guardar la configuración: {message}": [
    "Could not save configuration: {message}",
    "Impossible d’enregistrer la configuration : {message}",
    "Konfiguration konnte nicht gespeichert werden: {message}",
    "Impossibile salvare la configurazione: {message}",
    "Nie udało się zapisać konfiguracji: {message}"
  ],
  "No se pudo guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.": [
    "Cannot save the expense: filament stock is insufficient or the matching spool was not found.",
    "Impossible d’enregistrer la dépense : stock de filament insuffisant ou bobine correspondante introuvable.",
    "Ausgabe kann nicht gespeichert werden: Filamentbestand unzureichend oder passende Spule nicht gefunden.",
    "Impossibile salvare la spesa: filamento insufficiente o bobina corrispondente non trovata.",
    "Nie można zapisać wydatku: za mało filamentu lub nie znaleziono odpowiedniej szpuli."
  ],
  "El precio de venta sin impuestos está por debajo del coste.": [
    "The sale price excluding tax is below cost.",
    "Le prix de vente hors taxes est inférieur au coût.",
    "Der Verkaufspreis ohne Steuern liegt unter den Kosten.",
    "Il prezzo di vendita al netto delle imposte è inferiore al costo.",
    "Cena sprzedaży bez podatku jest niższa od kosztu."
  ],
  "No se puede alcanzar el recargo objetivo con esta combinación de comisión e impuestos. Reduce la comisión o revisa el impuesto configurado.": [
    "The target markup cannot be reached with this combination of commission and tax. Reduce the commission or review the configured tax.",
    "La majoration cible est impossible à atteindre avec cette combinaison de commission et de taxe. Réduisez la commission ou vérifiez la taxe configurée.",
    "Der angestrebte Aufschlag ist mit dieser Kombination aus Provision und Steuer nicht erreichbar. Reduzieren Sie die Provision oder prüfen Sie die Steuer.",
    "Non è possibile raggiungere il ricarico obiettivo con questa combinazione di commissione e imposte. Riduci la commissione o verifica l’imposta configurata.",
    "Nie można osiągnąć docelowej marży przy tej kombinacji prowizji i podatku. Zmniejsz prowizję lub sprawdź ustawiony podatek."
  ],
  "Introduce un precio de venta superior a 0 {currency} para evaluar la rentabilidad.": [
    "Enter a sale price greater than 0 {currency} to evaluate profitability.",
    "Saisissez un prix de vente supérieur à 0 {currency} pour évaluer la rentabilité.",
    "Geben Sie einen Verkaufspreis über 0 {currency} ein, um die Rentabilität zu bewerten.",
    "Inserisci un prezzo di vendita superiore a 0 {currency} per valutare la redditività.",
    "Wprowadź cenę sprzedaży większą niż 0 {currency}, aby ocenić rentowność."
  ],
  "Vas a precio de coste: no hay beneficio por unidad después de la comisión.": [
    "You are selling at cost: there is no profit per unit after commission.",
    "Vous vendez au prix de revient : il ne reste aucun bénéfice par unité après commission.",
    "Sie verkaufen zum Selbstkostenpreis: Nach Abzug der Provision bleibt kein Gewinn pro Einheit.",
    "Stai vendendo al costo: dopo la commissione non rimane profitto per unità.",
    "Sprzedajesz po koszcie: po odliczeniu prowizji nie pozostaje zysk na sztukę."
  ],
  "Print Cost & Profit: otra ventana ha cambiado este dato. Para evitar perder información, este cambio no se ha sobrescrito. Copia lo que estabas editando si es necesario y recarga esta ventana antes de continuar.": [
    "Print Cost & Profit: another window changed this value. To prevent data loss, this change was not overwritten. Copy your edits if needed and reload this window before continuing.",
    "Print Cost & Profit : une autre fenêtre a modifié cette valeur. Pour éviter toute perte de données, cette modification n’a pas été écrasée. Copiez vos modifications si nécessaire et rechargez cette fenêtre avant de continuer.",
    "Print Cost & Profit: Ein anderes Fenster hat diesen Wert geändert. Um Datenverlust zu vermeiden, wurde diese Änderung nicht überschrieben. Kopieren Sie Ihre Eingaben bei Bedarf und laden Sie dieses Fenster neu.",
    "Print Cost & Profit: un’altra finestra ha modificato questo valore. Per evitare la perdita di dati, la modifica non è stata sovrascritta. Copia le modifiche se necessario e ricarica questa finestra prima di continuare.",
    "Print Cost & Profit: inne okno zmieniło tę wartość. Aby uniknąć utraty danych, zmiana nie została nadpisana. W razie potrzeby skopiuj edytowaną treść i odśwież to okno przed kontynuowaniem."
  ],
  "No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. {message}": [
    "External storage could not be activated. Do not continue editing in this window. {message}",
    "Impossible d’activer le stockage externe. Ne continuez pas à modifier les données dans cette fenêtre. {message}",
    "Der externe Speicher konnte nicht aktiviert werden. Bearbeiten Sie in diesem Fenster nicht weiter. {message}",
    "Impossibile attivare l’archiviazione esterna. Non continuare a modificare i dati in questa finestra. {message}",
    "Nie udało się aktywować pamięci zewnętrznej. Nie kontynuuj edycji w tym oknie. {message}"
  ],
  "ATENCIÓN: pierdes {unit} por unidad ({total} en el pedido), incluida la comisión configurada. El precio de venta sin impuestos está por debajo del coste.": [
    "WARNING: you lose {unit} per unit ({total} for the order), including the configured commission. The sale price before tax is below cost.",
    "ATTENTION : vous perdez {unit} par unité ({total} pour la commande), commission configurée comprise. Le prix de vente hors taxes est inférieur au coût.",
    "ACHTUNG: Sie verlieren {unit} pro Einheit ({total} für den Auftrag), einschließlich der eingestellten Provision. Der Verkaufspreis ohne Steuern liegt unter den Kosten.",
    "ATTENZIONE: perdi {unit} per unità ({total} per l’ordine), inclusa la commissione configurata. Il prezzo di vendita al netto delle imposte è inferiore al costo.",
    "UWAGA: strata wynosi {unit} na sztukę ({total} dla zamówienia), łącznie z ustawioną prowizją. Cena sprzedaży bez podatku jest niższa od kosztu."
  ],
  "Rentabilidad positiva: {unit} por unidad y {total} en el pedido, antes de impuestos. El precio alcanza el objetivo configurado.": [
    "Positive profitability: {unit} per unit and {total} for the order, before tax. The price meets the configured target.",
    "Rentabilité positive : {unit} par unité et {total} pour la commande, avant impôts. Le prix atteint l’objectif configuré.",
    "Positive Rentabilität: {unit} pro Stück und {total} für den Auftrag, vor Steuern. Der Preis erreicht das eingestellte Ziel.",
    "Redditività positiva: {unit} per unità e {total} per l’ordine, prima delle imposte. Il prezzo raggiunge l’obiettivo configurato.",
    "Dodatnia rentowność: {unit} na sztukę i {total} dla zamówienia, przed podatkiem. Cena osiąga skonfigurowany cel."
  ],
  "No se han encontrado impresoras": [
    "No printers found",
    "Aucune imprimante trouvée",
    "Keine Drucker gefunden",
    "Nessuna stampante trovata",
    "Nie znaleziono drukarek"
  ],
  "Selecciona una impresora…": [
    "Select a printer…",
    "Sélectionnez une imprimante…",
    "Drucker auswählen…",
    "Seleziona una stampante…",
    "Wybierz drukarkę…"
  ],
  "Impresora configurada": [
    "Configured printer",
    "Imprimante configurée",
    "Konfigurierter Drucker",
    "Stampante configurata",
    "Skonfigurowana drukarka"
  ],
  "No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir impresoras de la red.": [
    "No printers have been saved yet. Click “Search automatically” to discover printers on the network.",
    "Aucune imprimante n’est encore enregistrée. Cliquez sur « Rechercher automatiquement » pour détecter les imprimantes du réseau.",
    "Es wurden noch keine Drucker gespeichert. Klicken Sie auf „Automatisch suchen“, um Drucker im Netzwerk zu finden.",
    "Non è ancora stata salvata alcuna stampante. Fai clic su «Cerca automaticamente» per trovare le stampanti in rete.",
    "Nie zapisano jeszcze żadnych drukarek. Kliknij „Szukaj automatycznie”, aby wykryć drukarki w sieci."
  ],
  "La búsqueda no ha podido completarse: {message}. Puedes introducir la IP manualmente.": [
    "The search could not be completed: {message}. You can enter the IP address manually.",
    "La recherche n’a pas pu aboutir : {message}. Vous pouvez saisir l’adresse IP manuellement.",
    "Die Suche konnte nicht abgeschlossen werden: {message}. Sie können die IP-Adresse manuell eingeben.",
    "Impossibile completare la ricerca: {message}. Puoi inserire manualmente l’indirizzo IP.",
    "Nie udało się zakończyć wyszukiwania: {message}. Możesz ręcznie wpisać adres IP."
  ],
  "La búsqueda agotó el tiempo de espera. Introduce la IP de la impresora manualmente.": [
    "The search timed out. Enter the printer IP address manually.",
    "La recherche a expiré. Saisissez manuellement l’adresse IP de l’imprimante.",
    "Zeitüberschreitung bei der Suche. Geben Sie die IP-Adresse des Druckers manuell ein.",
    "La ricerca è scaduta. Inserisci manualmente l’IP della stampante.",
    "Przekroczono limit czasu wyszukiwania. Wpisz ręcznie adres IP drukarki."
  ],
  "No se pudo completar la búsqueda: {message}. Introduce la IP de la impresora manualmente.": [
    "The search could not be completed: {message}. Enter the printer IP address manually.",
    "La recherche n’a pas pu aboutir : {message}. Saisissez manuellement l’adresse IP de l’imprimante.",
    "Die Suche konnte nicht abgeschlossen werden: {message}. Geben Sie die Drucker-IP manuell ein.",
    "Impossibile completare la ricerca: {message}. Inserisci manualmente l’IP della stampante.",
    "Nie udało się zakończyć wyszukiwania: {message}. Wpisz ręcznie adres IP drukarki."
  ],
  "IP {ip} guardada en esta aplicación. Comprobando ahora la impresora…": [
    "IP {ip} saved in this application. Checking the printer now…",
    "Adresse IP {ip} enregistrée dans cette application. Vérification de l’imprimante…",
    "IP {ip} in dieser Anwendung gespeichert. Drucker wird jetzt überprüft…",
    "IP {ip} salvato nell’applicazione. Verifica della stampante in corso…",
    "Adres IP {ip} zapisano w aplikacji. Trwa sprawdzanie drukarki…"
  ],
  "No se pudo consultar la impresora (tiempo de espera agotado). Comprueba la IP y que el puente esté iniciado.": [
    "Could not query the printer (request timed out). Check the IP address and make sure the bridge is running.",
    "Impossible d’interroger l’imprimante (délai d’attente dépassé). Vérifiez l’adresse IP et assurez-vous que le pont est démarré.",
    "Druckerabfrage fehlgeschlagen (Zeitüberschreitung). Prüfen Sie die IP-Adresse und ob die Bridge läuft.",
    "Impossibile interrogare la stampante (tempo scaduto). Controlla l’indirizzo IP e verifica che il bridge sia avviato.",
    "Nie udało się odpytać drukarki (przekroczono limit czasu). Sprawdź adres IP i upewnij się, że mostek jest uruchomiony."
  ],
  "Se ha registrado el gasto propio y se ha descontado este filamento del inventario.": [
    "The own expense was recorded and this filament was deducted from inventory.",
    "La dépense personnelle a été enregistrée et ce filament a été déduit du stock.",
    "Die eigene Ausgabe wurde erfasst und dieses Filament wurde vom Lagerbestand abgezogen.",
    "La spesa propria è stata registrata e questo filamento è stato sottratto dal magazzino.",
    "Zarejestrowano wydatek własny i odjęto ten filament ze stanu magazynowego."
  ],
  "No se ha descontado filamento.": [
    "No filament was deducted.",
    "Aucun filament n’a été déduit.",
    "Es wurde kein Filament abgezogen.",
    "Non è stato sottratto filamento.",
    "Nie odjęto filamentu."
  ],
  "Filamento devuelto al inventario": [
    "Filament returned to inventory",
    "Filament réintégré au stock",
    "Filament wurde wieder dem Lagerbestand hinzugefügt",
    "Filamento restituito all’inventario",
    "Filament zwrócono do magazynu."
  ],
  "Filamento devuelto al inventario.": [
    "Filament returned to inventory.",
    "Filament réintégré au stock.",
    "Filament wurde dem Lagerbestand wieder hinzugefügt.",
    "Filamento restituito all’inventario.",
    "Filament zwrócono do magazynu."
  ],
  "No hay impresoras detectadas en Opciones": [
    "No printers detected in Settings",
    "Aucune imprimante détectée dans les Options",
    "Keine Drucker in den Einstellungen erkannt",
    "Nessuna stampante rilevata in Opzioni",
    "Nie wykryto drukarek w ustawieniach"
  ],
  "Este documento no contiene el desglose de filamentos necesario para descontar el inventario. Vuelve a guardar la tasación o presupuesto con una versión que guarde ese detalle.": [
    "This document does not contain the filament breakdown required to deduct inventory. Save the estimate or quote again using a version that stores these details.",
    "Ce document ne contient pas le détail des filaments nécessaire pour déduire le stock. Enregistrez à nouveau l’estimation ou le devis avec une version qui conserve ces détails.",
    "Dieses Dokument enthält nicht die für den Lagerabzug erforderliche Filamentaufschlüsselung. Speichern Sie die Kalkulation oder das Angebot erneut mit einer Version, die diese Details speichert.",
    "Questo documento non contiene il dettaglio dei filamenti necessario per scaricare l’inventario. Salva nuovamente la stima o il preventivo con una versione che memorizzi questi dettagli.",
    "Ten dokument nie zawiera zestawienia filamentów wymaganego do odjęcia zapasów. Zapisz ponownie wycenę lub ofertę w wersji, która zapisuje te szczegóły."
  ],
  "No se encontró una bobina compatible en inventario:": [
    "No compatible spool was found in inventory:",
    "Aucune bobine compatible n’a été trouvée dans le stock :",
    "Im Lager wurde keine passende Spule gefunden:",
    "Non è stata trovata una bobina compatibile nell’inventario:",
    "Nie znaleziono zgodnej szpuli w magazynie:"
  ],
  "No se pudo leer el G-code activo de la U1. No se aplicará el descuento.": [
    "Could not read the active U1 G-code. No stock deduction will be applied.",
    "Impossible de lire le G-code actif de l’U1. Aucune déduction de stock ne sera appliquée.",
    "Der aktive U1-G-Code konnte nicht gelesen werden. Es wird kein Bestand abgezogen.",
    "Impossibile leggere il G-code attivo della U1. Non verrà applicata alcuna detrazione.",
    "Nie udało się odczytać aktywnego G-code U1. Zapas nie zostanie pomniejszony."
  ],
  "Hay filamentos sin bobina asignada y no se descontarán.": [
    "Some filaments have no assigned spool and will not be deducted.",
    "Certains filaments n’ont pas de bobine attribuée et ne seront pas déduits.",
    "Einigen Filamenten ist keine Spule zugeordnet; sie werden nicht abgezogen.",
    "Alcuni filamenti non hanno una bobina assegnata e non verranno scaricati.",
    "Niektórym filamentom nie przypisano szpuli i nie zostaną odjęte od stanu."
  ],
  "La impresión terminó, pero no se pudo guardar el inventario. No cierres la aplicación; revisa almacenamiento local.": [
    "The print finished, but inventory could not be saved. Do not close the application; check local storage.",
    "L’impression est terminée, mais le stock n’a pas pu être enregistré. Ne fermez pas l’application ; vérifiez le stockage local.",
    "Der Druck ist beendet, aber der Lagerbestand konnte nicht gespeichert werden. Schließen Sie die Anwendung nicht und prüfen Sie den lokalen Speicher.",
    "La stampa è terminata, ma non è stato possibile salvare l’inventario. Non chiudere l’applicazione; controlla l’archiviazione locale.",
    "Drukowanie zakończono, ale nie udało się zapisać stanu magazynowego. Nie zamykaj aplikacji; sprawdź pamięć lokalną."
  ],
  "Impresión cancelada: coste parcial estimado guardado, sin venta ni beneficio.": [
    "Print cancelled: estimated partial cost saved, with no sale or profit.",
    "Impression annulée : coût partiel estimé enregistré, sans vente ni bénéfice.",
    "Druck abgebrochen: geschätzte Teilkosten gespeichert, ohne Verkauf und Gewinn.",
    "Stampa annullata: costo parziale stimato salvato, senza vendita né profitto.",
    "Drukowanie anulowano: zapisano szacunkowy koszt częściowy, bez sprzedaży i zysku."
  ],
  "Coste parcial estimado hasta la cancelación; sin venta ni beneficio.": [
    "Estimated partial cost up to cancellation; no sale or profit.",
    "Coût partiel estimé jusqu’à l’annulation ; aucune vente ni bénéfice.",
    "Geschätzte Teilkosten bis zum Abbruch; kein Verkauf und kein Gewinn.",
    "Costo parziale stimato fino all’annullamento; nessuna vendita né profitto.",
    "Szacunkowy koszt częściowy do momentu anulowania; bez sprzedaży i zysku."
  ],
  "Revisa el coste de fabricación y confirma el importe total que cobrarás al cliente.": [
    "Review the manufacturing cost and confirm the total amount you will charge the customer.",
    "Vérifiez le coût de fabrication et confirmez le montant total facturé au client.",
    "Prüfen Sie die Herstellungskosten und bestätigen Sie den Gesamtbetrag, den Sie dem Kunden berechnen.",
    "Controlla il costo di produzione e conferma l’importo totale da addebitare al cliente.",
    "Sprawdź koszt wytworzenia i potwierdź łączną kwotę do zapłaty przez klienta."
  ],
  "Revisa el desglose y confirma el coste total de fabricación de este trabajo.": [
    "Review the breakdown and confirm the total manufacturing cost for this job.",
    "Vérifiez le détail et confirmez le coût total de fabrication de ce travail.",
    "Prüfen Sie die Aufschlüsselung und bestätigen Sie die gesamten Herstellungskosten dieses Auftrags.",
    "Controlla il dettaglio e conferma il costo totale di produzione di questo lavoro.",
    "Sprawdź zestawienie i potwierdź całkowity koszt wytworzenia tego zlecenia."
  ],
  "El navegador ha bloqueado el almacenamiento local. Abre la aplicación desde la misma carpeta y permite el almacenamiento.": [
    "The browser blocked local storage. Open the application from the same folder and allow storage.",
    "Le navigateur a bloqué le stockage local. Ouvrez l’application depuis le même dossier et autorisez le stockage.",
    "Der Browser hat den lokalen Speicher blockiert. Öffnen Sie die Anwendung aus demselben Ordner und erlauben Sie den Speicherzugriff.",
    "Il browser ha bloccato l’archiviazione locale. Apri l’applicazione dalla stessa cartella e consenti l’archiviazione.",
    "Przeglądarka zablokowała pamięć lokalną. Otwórz aplikację z tego samego folderu i zezwól na przechowywanie danych."
  ],
  "No se ha podido iniciar el almacenamiento del PC.": [
    "Could not start PC storage.",
    "Impossible de démarrer le stockage du PC.",
    "Der PC-Speicher konnte nicht gestartet werden.",
    "Impossibile avviare l’archiviazione del PC.",
    "Nie udało się uruchomić pamięci komputera."
  ],
  "Conectando con…": [
    "Connecting to…",
    "Connexion à…",
    "Verbindung wird hergestellt mit…",
    "Connessione a…",
    "Łączenie z…"
  ],
  "No se han encontrado impresoras.": [
    "No printers were found.",
    "Aucune imprimante trouvée.",
    "Keine Drucker gefunden.",
    "Non sono state trovate stampanti.",
    "Nie znaleziono drukarek."
  ],
  "Buscando la impresora en la red local": [
    "Searching for the printer on the local network",
    "Recherche de l’imprimante sur le réseau local",
    "Suche nach dem Drucker im lokalen Netzwerk",
    "Ricerca della stampante nella rete locale",
    "Wyszukiwanie drukarki w sieci lokalnej"
  ],
  "Cliente eliminado de la agenda. Los documentos históricos se conservan.": [
    "Client removed from the address book. Historical documents are preserved.",
    "Client supprimé du répertoire. Les documents historiques sont conservés.",
    "Kunde aus dem Adressbuch gelöscht. Historische Dokumente bleiben erhalten.",
    "Cliente eliminato dalla rubrica. I documenti storici vengono conservati.",
    "Klient został usunięty z książki adresowej. Dokumenty historyczne są zachowane."
  ],
  "Selecciona un cliente guardado o pulsa «Crear cliente en Clientes» para dar de alta uno nuevo. Después guarda el presupuesto.": [
    "Select a saved customer or click “Create customer in Customers” to add a new one. Then save the quote.",
    "Sélectionnez un client enregistré ou cliquez sur « Créer un client dans Clients » pour en ajouter un. Enregistrez ensuite le devis.",
    "Wählen Sie einen gespeicherten Kunden aus oder klicken Sie auf „Kunden unter Kunden erstellen“, um einen neuen anzulegen. Speichern Sie danach das Angebot.",
    "Seleziona un cliente salvato oppure fai clic su “Crea cliente in Clienti” per aggiungerne uno nuovo. Poi salva il preventivo.",
    "Wybierz zapisanego klienta lub kliknij „Utwórz klienta” w zakładce Klienci, aby dodać nowego. Następnie zapisz ofertę."
  ],
  "Crea el cliente con el formulario central. Al guardarlo volverás al pedido.": [
    "Create the customer using the main form. After saving, you will return to the order.",
    "Créez le client avec le formulaire principal. Après l’enregistrement, vous reviendrez à la commande.",
    "Erstellen Sie den Kunden über das Hauptformular. Nach dem Speichern kehren Sie zur Bestellung zurück.",
    "Crea il cliente con il modulo principale. Dopo il salvataggio tornerai all’ordine.",
    "Utwórz klienta za pomocą głównego formularza. Po zapisaniu wrócisz do zamówienia."
  ],
  "No se ha guardado: el número está duplicado.": [
    "Not saved: this number is already in use.",
    "Non enregistré : ce numéro existe déjà.",
    "Nicht gespeichert: Diese Nummer ist bereits vergeben.",
    "Non salvato: questo numero è già utilizzato.",
    "Nie zapisano: ten numer już istnieje."
  ],
  "Creación de factura cancelada.": [
    "Invoice creation cancelled.",
    "Création de facture annulée.",
    "Rechnungserstellung abgebrochen.",
    "Creazione della fattura annullata.",
    "Tworzenie faktury anulowano."
  ],
  "No hay presupuestos guardados. Se creará una factura con los datos actuales de la calculadora.": [
    "No saved quotes are available. An invoice will be created using the calculator’s current data.",
    "Aucun devis enregistré. Une facture sera créée à partir des données actuelles du calculateur.",
    "Keine gespeicherten Angebote vorhanden. Die Rechnung wird mit den aktuellen Daten des Rechners erstellt.",
    "Non ci sono preventivi salvati. Verrà creata una fattura con i dati attuali del calcolatore.",
    "Brak zapisanych ofert. Faktura zostanie utworzona na podstawie bieżących danych kalkulatora."
  ],
  "Hay {count} presupuestos guardados. Ve a Presupuestos, pulsa Cargar en el que quieras facturar y vuelve a Facturas.": [
    "{count} quotes are saved. Go to Quotes, click Load on the one you want to invoice, then return to Invoices.",
    "{count} devis sont enregistrés. Ouvrez Devis, cliquez sur Charger pour celui à facturer, puis revenez à Factures.",
    "{count} Angebote sind gespeichert. Öffnen Sie Angebote, klicken Sie beim gewünschten Angebot auf Laden und wechseln Sie dann zurück zu Rechnungen.",
    "Sono salvati {count} preventivi. Vai a Preventivi, fai clic su Carica su quello da fatturare e poi torna a Fatture.",
    "Zapisano {count} ofert. Otwórz Oferty, kliknij Wczytaj przy wybranej ofercie, a następnie wróć do Faktur."
  ],
  "Error al preparar la factura: {message}": [
    "Error preparing the invoice: {message}",
    "Erreur lors de la préparation de la facture : {message}",
    "Fehler beim Vorbereiten der Rechnung: {message}",
    "Errore durante la preparazione della fattura: {message}",
    "Błąd podczas przygotowywania faktury: {message}"
  ],
  "¿Eliminar el color personalizado {color} de la paleta?": [
    "Delete the custom color {color} from the palette?",
    "Supprimer la couleur personnalisée {color} de la palette ?",
    "Die benutzerdefinierte Farbe {color} aus der Palette löschen?",
    "Eliminare il colore personalizzato {color} dalla tavolozza?",
    "Usunąć niestandardowy kolor {color} z palety?"
  ],
  "Color personalizado eliminado de la paleta. Las bobinas existentes no se modifican.": [
    "Custom color removed from the palette. Existing spools are unchanged.",
    "Couleur personnalisée supprimée de la palette. Les bobines existantes ne sont pas modifiées.",
    "Benutzerdefinierte Farbe aus der Palette entfernt. Vorhandene Spulen bleiben unverändert.",
    "Colore personalizzato rimosso dalla tavolozza. Le bobine esistenti non vengono modificate.",
    "Usunięto niestandardowy kolor z palety. Istniejące szpule nie zostały zmienione."
  ],
  "Bobina actualizada.": [
    "Spool updated.",
    "Bobine mise à jour.",
    "Spule aktualisiert.",
    "Bobina aggiornata.",
    "Zaktualizowano szpulę."
  ],
  "Bobina añadida.": [
    "Spool added.",
    "Bobine ajoutée.",
    "Spule hinzugefügt.",
    "Bobina aggiunta.",
    "Dodano szpulę."
  ],
  "Eliminar color personalizado {color} de la paleta?": [
    "Remove custom color {color} from the palette?",
    "Supprimer la couleur personnalisée {color} de la palette ?",
    "Benutzerdefinierte Farbe {color} aus der Palette entfernen?",
    "Eliminare il colore personalizzato {color} dalla tavolozza?",
    "Usunąć niestandardowy kolor {color} z palety?"
  ],
  "sin precio": [
    "no price",
    "sans prix",
    "ohne Preis",
    "senza prezzo",
    "bez ceny"
  ],
  "por hora": [
    "per hour",
    "par heure",
    "pro Stunde",
    "all’ora",
    "na godzinę"
  ],
  "Guardar cambios": [
    "Save changes",
    "Enregistrer les modifications",
    "Änderungen speichern",
    "Salva modifiche",
    "Zapisz zmiany"
  ],
  "Guardar perfil de impresora": [
    "Save printer profile",
    "Enregistrer le profil d’imprimante",
    "Druckerprofil speichern",
    "Salva profilo stampante",
    "Zapisz profil drukarki"
  ],
  "Escribe un nombre para la impresora antes de guardar.": [
    "Enter a printer name before saving.",
    "Saisissez un nom d’imprimante avant d’enregistrer.",
    "Geben Sie vor dem Speichern einen Druckernamen ein.",
    "Inserisci un nome per la stampante prima di salvare.",
    "Przed zapisaniem wpisz nazwę drukarki."
  ],
  "Almacenamiento bloqueado": [
    "Storage is blocked",
    "Stockage bloqué",
    "Speicher ist gesperrt",
    "Archiviazione bloccata",
    "Pamięć jest zablokowana"
  ],
  "No se pudo verificar el guardado": [
    "Could not verify save",
    "Impossible de vérifier l’enregistrement",
    "Speichern konnte nicht überprüft werden",
    "Impossibile verificare il salvataggio",
    "Nie udało się sprawdzić zapisu"
  ],
  "No se pudo guardar el perfil en este navegador. Exporta tus datos o abre la aplicación en un navegador con almacenamiento habilitado.": [
    "The profile could not be saved in this browser. Export your data or open the application in a browser with storage enabled.",
    "Impossible d’enregistrer le profil dans ce navigateur. Exportez vos données ou ouvrez l’application dans un navigateur où le stockage est activé.",
    "Das Profil konnte in diesem Browser nicht gespeichert werden. Exportieren Sie Ihre Daten oder öffnen Sie die Anwendung in einem Browser mit aktiviertem Speicher.",
    "Impossibile salvare il profilo in questo browser. Esporta i dati o apri l’applicazione in un browser con archiviazione abilitata.",
    "Nie udało się zapisać profilu w tej przeglądarce. Wyeksportuj dane lub otwórz aplikację w przeglądarce z włączonym zapisem danych."
  ],
  "Perfil actualizado correctamente.": [
    "Profile updated successfully.",
    "Profil mis à jour avec succès.",
    "Profil erfolgreich aktualisiert.",
    "Profilo aggiornato correttamente.",
    "Profil został zaktualizowany."
  ],
  "Perfil de impresora guardado correctamente.": [
    "Printer profile saved successfully.",
    "Profil d’imprimante enregistré avec succès.",
    "Druckerprofil erfolgreich gespeichert.",
    "Profilo stampante salvato correttamente.",
    "Profil drukarki został zapisany."
  ],
  "No se ha podido guardar el cliente en este navegador. Comprueba el almacenamiento local.": [
    "Could not save the customer in this browser. Check local storage.",
    "Impossible d’enregistrer le client dans ce navigateur. Vérifiez le stockage local.",
    "Der Kunde konnte in diesem Browser nicht gespeichert werden. Überprüfen Sie den lokalen Speicher.",
    "Impossibile salvare il cliente in questo browser. Controlla la memoria locale.",
    "Nie udało się zapisać klienta w tej przeglądarce. Sprawdź pamięć lokalną."
  ],
  "No se pudo guardar la factura. El navegador no permite guardar datos localmente.": [
    "Could not save the invoice. The browser does not allow local data storage.",
    "Impossible d’enregistrer la facture. Le navigateur n’autorise pas le stockage local des données.",
    "Die Rechnung konnte nicht gespeichert werden. Der Browser erlaubt keine lokale Datenspeicherung.",
    "Impossibile salvare la fattura. Il browser non consente di salvare dati localmente.",
    "Nie udało się zapisać faktury. Przeglądarka nie pozwala na lokalne zapisywanie danych."
  ],
  "Error al crear la factura: {message}": [
    "Error creating invoice: {message}",
    "Erreur lors de la création de la facture : {message}",
    "Fehler beim Erstellen der Rechnung: {message}",
    "Errore durante la creazione della fattura: {message}",
    "Błąd podczas tworzenia faktury: {message}"
  ],
  "Cliente pendiente": [
    "Pending customer",
    "Client en attente",
    "Ausstehender Kunde",
    "Cliente in sospeso",
    "Klient oczekujący"
  ],
  "Impresora seleccionada": [
    "Selected printer",
    "Imprimante sélectionnée",
    "Ausgewählter Drucker",
    "Stampante selezionata",
    "Wybrana drukarka"
  ],
  "Impresora seleccionada · {ip}": [
    "Selected printer · {ip}",
    "Imprimante sélectionnée · {ip}",
    "Ausgewählter Drucker · {ip}",
    "Stampante selezionata · {ip}",
    "Wybrana drukarka · {ip}"
  ],
  "Error consultando el progreso: HTTP {status}": [
    "Error checking progress: HTTP {status}",
    "Erreur lors de la vérification de la progression : HTTP {status}",
    "Fehler beim Abrufen des Fortschritts: HTTP {status}",
    "Errore durante la verifica dell’avanzamento: HTTP {status}",
    "Błąd sprawdzania postępu: HTTP {status}"
  ],
  "G-code activo en impresora": [
    "Active G-code on printer",
    "G-code actif sur l’imprimante",
    "Aktiver G-Code auf dem Drucker",
    "G-code attivo sulla stampante",
    "Aktywny G-code w drukarce"
  ],
  "Puente HTTP {status}": [
    "Bridge HTTP {status}",
    "Pont HTTP {status}",
    "Bridge HTTP {status}",
    "Bridge HTTP {status}",
    "Most HTTP {status}"
  ],
  "Puente no disponible: {error} · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    "Bridge unavailable: {error} · Check that the local bridge is running and responds at http://127.0.0.1:8700/.",
    "Pont indisponible : {error} · Vérifiez que le pont local est démarré et répond à http://127.0.0.1:8700/.",
    "Bridge nicht verfügbar: {error} · Prüfen Sie, ob die lokale Bridge gestartet ist und unter http://127.0.0.1:8700/ antwortet.",
    "Bridge non disponibile: {error} · Verifica che il bridge locale sia avviato e risponda a http://127.0.0.1:8700/.",
    "Most niedostępny: {error} · Sprawdź, czy lokalny most jest uruchomiony i odpowiada pod adresem http://127.0.0.1:8700/."
  ],
  "Error de almacenamiento HTTP {status}": [
    "Storage HTTP error {status}",
    "Erreur HTTP du stockage {status}",
    "HTTP-Speicherfehler {status}",
    "Errore HTTP dell’archiviazione {status}",
    "Błąd magazynu HTTP {status}"
  ],
  "Error HTTP {status}": [
    "HTTP error {status}",
    "Erreur HTTP {status}",
    "HTTP-Fehler {status}",
    "Errore HTTP {status}",
    "Błąd HTTP {status}"
  ],
  "Sin copias": [
    "No backups",
    "Aucune sauvegarde",
    "Keine Sicherungen",
    "Nessun backup",
    "Brak kopii zapasowych"
  ],
  "Seleccionar bobina del inventario": [
    "Select spool from inventory",
    "Sélectionner une bobine dans le stock",
    "Spule aus dem Lager auswählen",
    "Seleziona una bobina dall’inventario",
    "Wybierz szpulę z magazynu"
  ],
  "Desglose del impuesto ({tax})": [
    "Tax breakdown ({tax})",
    "Détail de la taxe ({tax})",
    "Steueraufschlüsselung ({tax})",
    "Dettaglio dell’imposta ({tax})",
    "Rozbicie podatku ({tax})"
  ],
  "precio base sin impuestos": [
    "base price excluding tax",
    "prix de base hors taxes",
    "Nettobasispreis",
    "prezzo base senza imposte",
    "cena bazowa bez podatku"
  ],
  "Guardado en SQLite del PC": [
    "Saved to this PC’s SQLite database",
    "Enregistré dans la base SQLite de ce PC",
    "In der SQLite-Datenbank dieses PCs gespeichert",
    "Salvato nel database SQLite di questo PC",
    "Zapisano w bazie SQLite na tym komputerze"
  ],
  "NO GUARDADO: abre Print Cost & Profit desde http://127.0.0.1:8700 para guardar en SQLite.": [
    "NOT SAVED: open Print Cost & Profit from http://127.0.0.1:8700 to save to SQLite.",
    "NON ENREGISTRÉ : ouvrez Print Cost & Profit depuis http://127.0.0.1:8700 pour enregistrer dans SQLite.",
    "NICHT GESPEICHERT: Öffnen Sie Print Cost & Profit über http://127.0.0.1:8700, um in SQLite zu speichern.",
    "NON SALVATO: apri Print Cost & Profit da http://127.0.0.1:8700 per salvare in SQLite.",
    "NIE ZAPISANO: otwórz Print Cost & Profit pod adresem http://127.0.0.1:8700, aby zapisać w SQLite."
  ],
  "El nombre del cliente es obligatorio.": [
    "Customer name is required.",
    "Le nom du client est obligatoire.",
    "Der Kundenname ist erforderlich.",
    "Il nome del cliente è obbligatorio.",
    "Nazwa klienta jest wymagana."
  ],
  "Error al preparar documento para compartir": [
    "Error preparing document for sharing",
    "Erreur lors de la préparation du document à partager",
    "Fehler beim Vorbereiten des Dokuments zum Teilen",
    "Errore durante la preparazione del documento da condividere",
    "Błąd przygotowania dokumentu do udostępnienia"
  ],
  "No se pudo guardar": [
    "Could not save",
    "Enregistrement impossible",
    "Speichern fehlgeschlagen",
    "Impossibile salvare",
    "Nie udało się zapisać"
  ],
  "Nombre guardado para {printer}": [
    "Name saved for {printer}",
    "Nom enregistré pour {printer}",
    "Name für {printer} gespeichert",
    "Nome salvato per {printer}",
    "Zapisano nazwę dla {printer}"
  ],
  "Gasto guardado correctamente": [
    "Expense saved successfully",
    "Dépense enregistrée avec succès",
    "Ausgabe erfolgreich gespeichert",
    "Spesa salvata correttamente",
    "Wydatek został zapisany."
  ],
  "Snapmaker U1 · perfil habitual": [
    "Snapmaker U1 · usual profile",
    "Snapmaker U1 · profil habituel",
    "Snapmaker U1 · Standardprofil",
    "Snapmaker U1 · profilo abituale",
    "Snapmaker U1 · zwykły profil"
  ],
  "La impresora cambió. Esperando el estado actualizado.": [
    "The printer changed. Waiting for the updated status.",
    "L’imprimante a changé. En attente de la mise à jour de son état.",
    "Der Drucker wurde gewechselt. Der aktualisierte Status wird abgewartet.",
    "La stampante è cambiata. In attesa dello stato aggiornato.",
    "Drukarka została zmieniona. Oczekiwanie na zaktualizowany stan."
  ],
  "Consultando el consumo de la impresora seleccionada…": [
    "Checking the selected printer’s consumption…",
    "Vérification de la consommation de l’imprimante sélectionnée…",
    "Verbrauch des ausgewählten Druckers wird abgefragt…",
    "Verifica del consumo della stampante selezionata…",
    "Sprawdzanie zużycia wybranej drukarki…"
  ],
  "Esperando datos de la nueva impresora.": [
    "Waiting for data from the new printer.",
    "En attente des données de la nouvelle imprimante.",
    "Warte auf Daten des neuen Druckers.",
    "In attesa dei dati della nuova stampante.",
    "Oczekiwanie na dane z nowej drukarki."
  ],
  "No hay bobinas alternativas con stock y color similar.": [
    "There are no alternative spools in stock with a similar color.",
    "Aucune bobine de remplacement en stock avec une couleur similaire.",
    "Keine alternativen Spulen mit Bestand und ähnlicher Farbe vorhanden.",
    "Non ci sono bobine alternative disponibili con un colore simile.",
    "Brak alternatywnych szpul w magazynie o podobnym kolorze."
  ],
  "Alternativa seleccionada para esta impresión": [
    "Alternative selected for this print",
    "Alternative sélectionnée pour cette impression",
    "Alternative für diesen Druck ausgewählt",
    "Alternativa selezionata per questa stampa",
    "Wybrano alternatywę dla tego wydruku"
  ],
  "No hay filamentos del trabajo disponibles. Carga o vuelve a enviar el G-code desde Orca.": [
    "The job’s filament data is unavailable. Load or resend the G-code from Orca.",
    "Les données de filament de cette tâche sont indisponibles. Chargez ou renvoyez le G-code depuis Orca.",
    "Die Filamentdaten dieses Auftrags sind nicht verfügbar. Laden Sie den G-Code in Orca oder senden Sie ihn erneut.",
    "I dati dei filamenti del lavoro non sono disponibili. Carica o invia di nuovo il G-code da Orca.",
    "Dane filamentu dla tego zadania są niedostępne. Wczytaj lub wyślij ponownie G-code z Orca."
  ],
  "Orca aún no ha proporcionado los materiales de este trabajo.": [
    "Orca has not provided this job’s materials yet.",
    "Orca n’a pas encore fourni les matériaux de cette tâche.",
    "Orca hat die Materialien für diesen Auftrag noch nicht bereitgestellt.",
    "Orca non ha ancora fornito i materiali per questo lavoro.",
    "Orca nie udostępniła jeszcze informacji o materiałach dla tego zadania."
  ],
  "Impresión finalizada, pero no había consumo de filamento válido. No se modificó el inventario.": [
    "Print finished, but there was no valid filament consumption. Inventory was not changed.",
    "Impression terminée, mais aucune consommation de filament valide n’a été relevée. Le stock n’a pas été modifié.",
    "Druck abgeschlossen, aber kein gültiger Filamentverbrauch vorhanden. Der Bestand wurde nicht geändert.",
    "Stampa terminata, ma non è stato rilevato un consumo valido di filamento. L’inventario non è stato modificato.",
    "Druk zakończony, ale brak prawidłowych danych o zużyciu filamentu. Stan magazynowy nie został zmieniony."
  ],
  "Impresión finalizada, pero no se pudo asociar el consumo a ninguna bobina. No se descontó nada.": [
    "Print finished, but consumption could not be matched to any spool. Nothing was deducted.",
    "Impression terminée, mais la consommation n’a pu être associée à aucune bobine. Rien n’a été déduit.",
    "Druck abgeschlossen, aber der Verbrauch konnte keiner Spule zugeordnet werden. Es wurde nichts abgezogen.",
    "Stampa terminata, ma non è stato possibile associare il consumo a una bobina. Non è stato scaricato nulla.",
    "Druk zakończony, ale nie udało się przypisać zużycia do żadnej szpuli. Niczego nie odjęto."
  ],
  "Descuento aplicado (estimación del G-code): {grams}": [
    "Deduction applied (G-code estimate): {grams}",
    "Déduction appliquée (estimation du G-code) : {grams}",
    "Abzug angewendet (G-Code-Schätzung): {grams}",
    "Detrazione applicata (stima G-code): {grams}",
    "Zastosowano odjęcie (szacunek G-code): {grams}"
  ],
  "Impresión finalizada": [
    "Print completed",
    "Impression terminée",
    "Druck abgeschlossen",
    "Stampa completata",
    "Drukowanie zakończone"
  ],
  "pendiente(s) de revisar": [
    "pending review",
    "à vérifier",
    "zu prüfen",
    "da verificare",
    "do sprawdzenia"
  ],
  "Sin marca": [
    "No brand",
    "Sans marque",
    "Keine Marke",
    "Senza marca",
    "Bez marki"
  ],
  "ERROR SQLite: no se han guardado los cambios.": [
    "SQLite ERROR: changes were not saved.",
    "ERREUR SQLite : les modifications n’ont pas été enregistrées.",
    "SQLite-FEHLER: Änderungen wurden nicht gespeichert.",
    "ERRORE SQLite: le modifiche non sono state salvate.",
    "BŁĄD SQLite: zmiany nie zostały zapisane."
  ],
  "Selecciona exactamente dos tasaciones en la columna «Comparar» y pulsa «Comparar seleccionadas». Seleccionadas: ": [
    "Select exactly two estimates in the “Compare” column and click “Compare selected”. Selected: ",
    "Sélectionnez exactement deux estimations dans la colonne « Comparer », puis cliquez sur « Comparer la sélection ». Sélectionnées : ",
    "Wählen Sie genau zwei Kalkulationen in der Spalte „Vergleichen“ aus und klicken Sie auf „Ausgewählte vergleichen“. Ausgewählt: ",
    "Seleziona esattamente due stime nella colonna «Confronta» e fai clic su «Confronta selezionate». Selezionate: ",
    "Wybierz dokładnie dwie wyceny w kolumnie „Porównaj” i kliknij „Porównaj wybrane”. Wybrane: "
  ],
  "Precio unitario": [
    "Unit price",
    "Prix unitaire",
    "Stückpreis",
    "Prezzo unitario",
    "Cena jednostkowa"
  ],
  "— Selecciona modelo —": [
    "— Select model —",
    "— Sélectionner le modèle —",
    "— Modell auswählen —",
    "— Seleziona modello —",
    "— Wybierz model —"
  ],
  "Introduce el nombre o la empresa del cliente antes de continuar.": [
    "Enter the customer’s name or company before continuing.",
    "Saisissez le nom du client ou de l’entreprise avant de continuer.",
    "Geben Sie vor dem Fortfahren den Namen oder das Unternehmen des Kunden ein.",
    "Inserisci il nome o l’azienda del cliente prima di continuare.",
    "Przed kontynuowaniem wpisz nazwę klienta lub firmy."
  ],
  "No se pudo guardar el cliente en este navegador. Comprueba el almacenamiento local.": [
    "The customer could not be saved in this browser. Check local storage.",
    "Impossible d’enregistrer le client dans ce navigateur. Vérifiez le stockage local.",
    "Der Kunde konnte in diesem Browser nicht gespeichert werden. Prüfen Sie den lokalen Speicher.",
    "Impossibile salvare il cliente in questo browser. Controlla l’archiviazione locale.",
    "Nie udało się zapisać klienta w tej przeglądarce. Sprawdź pamięć lokalną."
  ],
  "Incluir esta tasación en Contabilidad al guardarla": [
    "Include this estimate in Accounting when saving",
    "Inclure cette estimation dans la comptabilité lors de l’enregistrement",
    "Diese Kalkulation beim Speichern in die Buchhaltung übernehmen",
    "Includi questa stima in Contabilità al salvataggio",
    "Uwzględnij tę wycenę w księgowości podczas zapisywania"
  ],
  "Si no marcas esta opción, guardar la tasación solo la añade al historial y no crea un gasto propio.": [
    "If unchecked, saving the estimate only adds it to history and does not create an own expense.",
    "Si cette option n’est pas cochée, l’estimation est uniquement ajoutée à l’historique et ne crée pas de dépense personnelle.",
    "Wenn diese Option nicht aktiviert ist, wird die Kalkulation nur im Verlauf gespeichert und erzeugt keine eigene Ausgabe.",
    "Se non selezioni questa opzione, la stima viene aggiunta solo alla cronologia e non crea una spesa personale.",
    "Jeśli nie zaznaczysz tej opcji, zapisanie wyceny doda ją tylko do historii i nie utworzy własnego wydatku."
  ],
  "¿Usar una bobina de otra marca?": [
    "Use a spool from another brand?",
    "Utiliser une bobine d’une autre marque ?",
    "Eine Spule einer anderen Marke verwenden?",
    "Usare una bobina di un’altra marca?",
    "Czy użyć szpuli innej marki?"
  ],
  "Bobina alternativa seleccionada: {brand} · {color}. Hay {stock} g; tras el trabajo quedarían {after} g.{shortage} El inventario no se modifica.": [
    "Alternative spool selected: {brand} · {color}. {stock} g available; {after} g would remain after the job.{shortage} Inventory is not changed.",
    "Bobine alternative sélectionnée : {brand} · {color}. {stock} g disponibles ; il resterait {after} g après le travail.{shortage} Le stock n’est pas modifié.",
    "Alternative Spule ausgewählt: {brand} · {color}. {stock} g verfügbar; nach dem Auftrag blieben {after} g übrig.{shortage} Der Bestand wird nicht geändert.",
    "Bobina alternativa selezionata: {brand} · {color}. Disponibili {stock} g; dopo il lavoro ne resterebbero {after} g.{shortage} L’inventario non viene modificato.",
    "Wybrano alternatywną szpulę: {brand} · {color}. Dostępne {stock} g; po zadaniu pozostałoby {after} g.{shortage} Stan magazynowy nie zostanie zmieniony."
  ],
  " Stock insuficiente.": [
    " Insufficient stock.",
    " Stock insuffisant.",
    " Bestand unzureichend.",
    " Scorta insufficiente.",
    " Niewystarczający stan magazynowy."
  ],
  "Impresión cancelada: no se encontró gasto provisional para recalcular.": [
    "Print cancelled: no provisional expense was found to recalculate.",
    "Impression annulée : aucune dépense provisoire à recalculer n’a été trouvée.",
    "Druck abgebrochen: Es wurde keine vorläufige Ausgabe zum Neuberechnen gefunden.",
    "Stampa annullata: non è stata trovata alcuna spesa provvisoria da ricalcolare.",
    "Drukowanie anulowano: nie znaleziono tymczasowego kosztu do ponownego przeliczenia."
  ],
  "No se pudo leer SQLite": [
    "Could not read SQLite",
    "Impossible de lire SQLite",
    "SQLite konnte nicht gelesen werden",
    "Impossibile leggere SQLite",
    "Nie udało się odczytać SQLite"
  ],
  "No se pudo guardar la lista en SQLite": [
    "Could not save the list to SQLite",
    "Impossible d’enregistrer la liste dans SQLite",
    "Die Liste konnte nicht in SQLite gespeichert werden",
    "Impossibile salvare l’elenco in SQLite",
    "Nie udało się zapisać listy w SQLite"
  ],
  "No se pudo guardar la lista de impresoras en SQLite: {message}": [
    "Could not save the printer list to SQLite: {message}",
    "Impossible d’enregistrer la liste des imprimantes dans SQLite : {message}",
    "Die Druckerliste konnte nicht in SQLite gespeichert werden: {message}",
    "Impossibile salvare l’elenco delle stampanti in SQLite: {message}",
    "Nie udało się zapisać listy drukarek w SQLite: {message}"
  ],
  "Impresora seleccionada y conectada: {ip}.": [
    "Printer selected and connected: {ip}.",
    "Imprimante sélectionnée et connectée : {ip}.",
    "Drucker ausgewählt und verbunden: {ip}.",
    "Stampante selezionata e connessa: {ip}.",
    "Wybrano drukarkę i połączono: {ip}."
  ],
  "Conectando con {ip}…": [
    "Connecting to {ip}…",
    "Connexion à {ip}…",
    "Verbindung zu {ip} wird hergestellt…",
    "Connessione a {ip}…",
    "Łączenie z {ip}…"
  ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}.": [
    "PRINTER CONNECTED · {name} · IP {ip} · Status: {state} · File: {file}{software}.",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file}{software}.",
    "DRUCKER VERBUNDEN · {name} · IP {ip} · Status: {state} · Datei: {file}{software}.",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file}{software}.",
    "DRUKARKA POŁĄCZONA · {name} · IP {ip} · Stan: {state} · Plik: {file}{software}."
  ],
  "No se pudo seleccionar la impresora: {message}": [
    "Could not select the printer: {message}",
    "Impossible de sélectionner l’imprimante : {message}",
    "Der Drucker konnte nicht ausgewählt werden: {message}",
    "Impossibile selezionare la stampante: {message}",
    "Nie udało się wybrać drukarki: {message}"
  ],
  "No hay impresoras guardadas todavía. Pulsa «Buscar automáticamente» para descubrir las impresoras de la red.": [
    "No printers have been saved yet. Click “Search automatically” to discover printers on the network.",
    "Aucune imprimante n’est encore enregistrée. Cliquez sur « Rechercher automatiquement » pour détecter les imprimantes du réseau.",
    "Es sind noch keine Drucker gespeichert. Klicken Sie auf „Automatisch suchen“, um Drucker im Netzwerk zu finden.",
    "Non è ancora stata salvata alcuna stampante. Fai clic su «Cerca automaticamente» per rilevare le stampanti nella rete.",
    "Nie zapisano jeszcze żadnych drukarek. Kliknij „Szukaj automatycznie”, aby wykryć drukarki w sieci."
  ],
  "Impresora encontrada y configurada: {ip}.": [
    "Printer found and configured: {ip}.",
    "Imprimante trouvée et configurée : {ip}.",
    "Drucker gefunden und konfiguriert: {ip}.",
    "Stampante trovata e configurata: {ip}.",
    "Znaleziono i skonfigurowano drukarkę: {ip}."
  ],
  "No se encontraron impresoras": [
    "No printers were found",
    "Aucune imprimante n’a été trouvée",
    "Es wurden keine Drucker gefunden",
    "Non è stata trovata alcuna stampante",
    "Nie znaleziono drukarek"
  ],
  "desconocido": [
    "unknown",
    "inconnu",
    "unbekannt",
    "sconosciuto",
    "nieznany"
  ],
  "ninguno": [
    "none",
    "aucun",
    "keine",
    "nessuno",
    "brak"
  ],
  "Introduce una dirección que empiece por http:// o https://.": [
    "Enter an address starting with http:// or https://.",
    "Saisissez une adresse commençant par http:// ou https://.",
    "Geben Sie eine Adresse ein, die mit http:// oder https:// beginnt.",
    "Inserisci un indirizzo che inizi con http:// o https://.",
    "Wprowadź adres zaczynający się od http:// lub https://."
  ],
  "Probando conexión…": [
    "Testing connection…",
    "Test de la connexion…",
    "Verbindung wird getestet…",
    "Verifica della connessione…",
    "Testowanie połączenia…"
  ],
  "Conexión correcta (HTTP {status}). Respuesta recibida del puente local.": [
    "Connection successful (HTTP {status}). Response received from the local bridge.",
    "Connexion réussie (HTTP {status}). Réponse reçue du pont local.",
    "Verbindung erfolgreich (HTTP {status}). Antwort von der lokalen Bridge erhalten.",
    "Connessione riuscita (HTTP {status}). Risposta ricevuta dal bridge locale.",
    "Połączenie udane (HTTP {status}). Otrzymano odpowiedź z lokalnego mostu."
  ],
  "No se pudo confirmar la conexión: {message}. Comprueba que el puente está iniciado, la dirección es correcta y el navegador permite la conexión local.": [
    "Could not confirm the connection: {message}. Check that the bridge is running, the address is correct, and the browser allows local connections.",
    "Impossible de confirmer la connexion : {message}. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise les connexions locales.",
    "Die Verbindung konnte nicht bestätigt werden: {message}. Prüfen Sie, ob die Bridge läuft, die Adresse korrekt ist und der Browser lokale Verbindungen zulässt.",
    "Impossibile confermare la connessione: {message}. Verifica che il bridge sia avviato, che l’indirizzo sia corretto e che il browser consenta le connessioni locali.",
    "Nie można potwierdzić połączenia: {message}. Sprawdź, czy most jest uruchomiony, adres jest prawidłowy, a przeglądarka zezwala na połączenia lokalne."
  ],
  "Impresora encontrada: {ip}{hostname}.": [
    "Printer found: {ip}{hostname}.",
    "Imprimante trouvée : {ip}{hostname}.",
    "Drucker gefunden: {ip}{hostname}.",
    "Stampante trovata: {ip}{hostname}.",
    "Znaleziono drukarkę: {ip}{hostname}."
  ],
  "No se encontró la impresora. {message}": [
    "Printer not found. {message}",
    "Imprimante introuvable. {message}",
    "Drucker nicht gefunden. {message}",
    "Stampante non trovata. {message}",
    "Nie znaleziono drukarki. {message}"
  ],
  "No se encontró la impresora. Introduce su IP manualmente y pulsa Guardar IP manual.": [
    "Printer not found. Enter its IP address manually and click Save IP manually.",
    "Imprimante introuvable. Saisissez son adresse IP manuellement et cliquez sur Enregistrer l’IP manuellement.",
    "Drucker nicht gefunden. Geben Sie die IP manuell ein und klicken Sie auf „IP manuell speichern“.",
    "Stampante non trovata. Inserisci manualmente il suo IP e premi «Salva IP manualmente».",
    "Nie znaleziono drukarki. Wpisz jej adres IP ręcznie i kliknij „Zapisz IP ręcznie”."
  ],
  "Introduce una dirección IPv4 válida, por ejemplo 192.168.1.48.": [
    "Enter a valid IPv4 address, for example 192.168.1.48.",
    "Saisissez une adresse IPv4 valide, par exemple 192.168.1.48.",
    "Geben Sie eine gültige IPv4-Adresse ein, zum Beispiel 192.168.1.48.",
    "Inserisci un indirizzo IPv4 valido, ad esempio 192.168.1.48.",
    "Wprowadź prawidłowy adres IPv4, np. 192.168.1.48."
  ],
  "La IP {ip} se ha guardado en la aplicación, pero el puente no pudo validarla (tiempo de espera agotado). Comprueba que el puente esté iniciado; puedes volver a pulsar «Ver impresora conectada» después.": [
    "IP {ip} was saved in the application, but the bridge could not validate it (request timed out). Make sure the bridge is running; you can click “View connected printer” again later.",
    "L’adresse IP {ip} a été enregistrée, mais le pont n’a pas pu la valider (délai d’attente dépassé). Vérifiez que le pont est démarré ; vous pourrez ensuite cliquer de nouveau sur « Voir l’imprimante connectée ».",
    "IP {ip} wurde gespeichert, aber die Bridge konnte sie nicht überprüfen (Zeitüberschreitung). Prüfen Sie, ob die Bridge läuft; anschließend können Sie erneut auf „Verbundene Drucker anzeigen“ klicken.",
    "L’IP {ip} è stata salvata, ma il bridge non è riuscito a convalidarla (tempo scaduto). Verifica che il bridge sia avviato; poi puoi fare di nuovo clic su «Visualizza stampante connessa».",
    "Adres IP {ip} zapisano, ale mostek nie mógł go sprawdzić (przekroczono limit czasu). Sprawdź, czy mostek jest uruchomiony; później możesz ponownie kliknąć „Pokaż podłączoną drukarkę”."
  ],
  "La IP {ip} se ha guardado en la aplicación, pero el puente no pudo validarla: {message}. Comprueba que el puente esté iniciado; puedes volver a pulsar «Ver impresora conectada» después.": [
    "IP {ip} was saved in the application, but the bridge could not validate it: {message}. Make sure the bridge is running; you can click “View connected printer” again later.",
    "L’adresse IP {ip} a été enregistrée, mais le pont n’a pas pu la valider : {message}. Vérifiez que le pont est démarré ; vous pourrez ensuite cliquer de nouveau sur « Voir l’imprimante connectée ».",
    "IP {ip} wurde gespeichert, aber die Bridge konnte sie nicht überprüfen: {message}. Prüfen Sie, ob die Bridge läuft; anschließend können Sie erneut auf „Verbundene Drucker anzeigen“ klicken.",
    "L’IP {ip} è stata salvata, ma il bridge non è riuscito a convalidarla: {message}. Verifica che il bridge sia avviato; poi puoi fare di nuovo clic su «Visualizza stampante connessa».",
    "Adres IP {ip} zapisano, ale mostek nie mógł go sprawdzić: {message}. Sprawdź, czy mostek jest uruchomiony; później możesz ponownie kliknąć „Pokaż podłączoną drukarkę”."
  ],
  "Consultando la impresora configurada…": [
    "Checking the configured printer…",
    "Vérification de l’imprimante configurée…",
    "Konfigurierter Drucker wird überprüft…",
    "Verifica della stampante configurata…",
    "Sprawdzanie skonfigurowanej drukarki…"
  ],
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file}{software}. Consulta completada.": [
    "PRINTER CONNECTED · {name} · IP {ip} · Status: {state} · File: {file}{software}. Check complete.",
    "IMPRIMANTE CONNECTÉE · {name} · IP {ip} · État : {state} · Fichier : {file}{software}. Vérification terminée.",
    "DRUCKER VERBUNDEN · {name} · IP {ip} · Status: {state} · Datei: {file}{software}. Prüfung abgeschlossen.",
    "STAMPANTE CONNESSA · {name} · IP {ip} · Stato: {state} · File: {file}{software}. Verifica completata.",
    "DRUKARKA POŁĄCZONA · {name} · IP {ip} · Stan: {state} · Plik: {file}{software}. Sprawdzanie zakończone."
  ],
  "No se pudo consultar la impresora: {message}. Comprueba la IP y que el puente esté iniciado.": [
    "Could not query the printer: {message}. Check the IP address and make sure the bridge is running.",
    "Impossible d’interroger l’imprimante : {message}. Vérifiez l’adresse IP et assurez-vous que le pont est démarré.",
    "Druckerabfrage fehlgeschlagen: {message}. Prüfen Sie die IP-Adresse und ob die Bridge läuft.",
    "Impossibile interrogare la stampante: {message}. Controlla l’indirizzo IP e verifica che il bridge sia avviato.",
    "Nie udało się odpytać drukarki: {message}. Sprawdź adres IP i upewnij się, że mostek jest uruchomiony."
  ],
  "No se puede guardar el gasto: falta stock de filamento.": [
    "The expense cannot be saved: there is not enough filament in stock.",
    "Impossible d’enregistrer la dépense : le stock de filament est insuffisant.",
    "Die Ausgabe kann nicht gespeichert werden: Der Filamentbestand reicht nicht aus.",
    "Impossibile salvare la spesa: scorte di filamento insufficienti.",
    "Nie można zapisać wydatku: niewystarczający zapas filamentu."
  ],
  "Buscando la impresora en la red local…": [
    "Searching for the printer on the local network…",
    "Recherche de l’imprimante sur le réseau local…",
    "Drucker wird im lokalen Netzwerk gesucht…",
    "Ricerca della stampante nella rete locale…",
    "Wyszukiwanie drukarki w sieci lokalnej…"
  ],
  "No se pudo aplicar la IP.": [
    "Could not apply the IP address.",
    "Impossible d’appliquer l’adresse IP.",
    "Die IP-Adresse konnte nicht angewendet werden.",
    "Impossibile applicare l’indirizzo IP.",
    "Nie udało się zastosować adresu IP."
  ],
  "No se pudo iniciar el almacenamiento externo.": [
    "External storage could not be started.",
    "Impossible de démarrer le stockage externe.",
    "Der externe Speicher konnte nicht gestartet werden.",
    "Impossibile avviare l’archiviazione esterna.",
    "Nie udało się uruchomić pamięci zewnętrznej."
  ],
  "No se pudo leer el archivo G-code.": [
    "The G-code file could not be read.",
    "Impossible de lire le fichier G-code.",
    "Die G-Code-Datei konnte nicht gelesen werden.",
    "Impossibile leggere il file G-code.",
    "Nie udało się odczytać pliku G-code."
  ],
  "No se ha podido guardar la copia de seguridad.": [
    "The backup could not be saved.",
    "Impossible d’enregistrer la sauvegarde.",
    "Die Sicherung konnte nicht gespeichert werden.",
    "Impossibile salvare il backup.",
    "Nie udało się zapisać kopii zapasowej."
  ],
  "Margen sobre venta": [
    "Sales margin",
    "Marge sur vente",
    "Verkaufsmarge",
    "Margine sulle vendite",
    "Marża od sprzedaży"
  ],
  "Rentabilidad sobre coste": [
    "Return on cost",
    "Rentabilité sur coût",
    "Rentabilität bezogen auf Kosten",
    "Redditività sul costo",
    "Rentowność względem kosztu"
  ],
  "PANEL U1: integrado sobre la base funcional v1.154": [
    "U1 PANEL: integrated on functional base v1.154",
    "PANNEAU U1 : intégré sur la base fonctionnelle v1.154",
    "U1-PANEL: auf der funktionsfähigen Basis v1.154 integriert",
    "PANNELLO U1: integrato sulla base funzionale v1.154",
    "PANEL U1: zintegrowany z działającą bazą v1.154"
  ],
  "Selecciona una impresora": [
    "Select a printer",
    "Sélectionnez une imprimante",
    "Drucker auswählen",
    "Seleziona una stampante",
    "Wybierz drukarkę"
  ],
  "🖨️ Conexión con impresora": [
    "🖨️ Printer connection",
    "🖨️ Connexion à l’imprimante",
    "🖨️ Druckerverbindung",
    "🖨️ Connessione alla stampante",
    "🖨️ Połączenie z drukarką"
  ],
  "Print Cost & Profit · Versión 1.479": [
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Versione 1.480",
    "Print Cost & Profit · Wersja 1.480"
  ],
  "El archivo se ha abierto, pero está vacío o no contiene texto legible. Tamaño: ": [
    "The file was opened, but is empty or contains no readable text. Size: ",
    "Le fichier a été ouvert, mais il est vide ou ne contient aucun texte lisible. Taille : ",
    "Die Datei wurde geöffnet, ist aber leer oder enthält keinen lesbaren Text. Größe: ",
    "Il file è stato aperto, ma è vuoto o non contiene testo leggibile. Dimensione: ",
    "Plik został otwarty, ale jest pusty lub nie zawiera czytelnego tekstu. Rozmiar: "
  ],
  "El archivo se leyó, pero falló el análisis del G-code: ": [
    "The file was read, but G-code parsing failed: ",
    "Le fichier a été lu, mais l’analyse du G-code a échoué : ",
    "Die Datei wurde gelesen, aber die G-Code-Analyse ist fehlgeschlagen: ",
    "Il file è stato letto, ma l’analisi del G-code non è riuscita: ",
    "Plik został odczytany, ale analiza G-code nie powiodła się: "
  ],
  "Datos de integración incompletos.": [
    "Incomplete integration data.",
    "Données d’intégration incomplètes.",
    "Unvollständige Integrationsdaten.",
    "Dati di integrazione incompleti.",
    "Niekompletne dane integracji."
  ],
  "La integración no recibió miniatura del G-code.": [
    "The integration did not receive a G-code thumbnail.",
    "L’intégration n’a pas reçu de miniature du G-code.",
    "Die Integration hat kein G-Code-Miniaturbild erhalten.",
    "L’integrazione non ha ricevuto una miniatura del G-code.",
    "Integracja nie otrzymała miniatury G-code."
  ],
  "No se pudieron importar los datos de integración: ": [
    "Could not import integration data: ",
    "Impossible d’importer les données d’intégration : ",
    "Integrationsdaten konnten nicht importiert werden: ",
    "Impossibile importare i dati di integrazione: ",
    "Nie udało się zaimportować danych integracji: "
  ],
  "No hay tasaciones que coincidan con la búsqueda.": [
    "No estimates match the search.",
    "Aucune estimation ne correspond à la recherche.",
    "Keine Kalkulation entspricht der Suche.",
    "Nessuna stima corrisponde alla ricerca.",
    "Brak wycen pasujących do wyszukiwania."
  ],
  "Tasación eliminada del historial.": [
    "Estimate removed from history.",
    "Estimation supprimée de l’historique.",
    "Kalkulation aus dem Verlauf entfernt.",
    "Stima rimossa dalla cronologia.",
    "Wycena została usunięta z historii."
  ],
  "Selecciona como máximo dos tasaciones.": [
    "Select no more than two estimates.",
    "Sélectionnez au maximum deux estimations.",
    "Wählen Sie höchstens zwei Kalkulationen aus.",
    "Seleziona al massimo due stime.",
    "Wybierz maksymalnie dwie wyceny."
  ],
  "Tiempo de impresión": [
    "Print time",
    "Temps d’impression",
    "Druckzeit",
    "Tempo di stampa",
    "Czas drukowania"
  ],
  "Selección de comparativa limpiada.": [
    "Comparison selection cleared.",
    "Sélection de comparaison effacée.",
    "Vergleichsauswahl zurückgesetzt.",
    "Selezione del confronto azzerata.",
    "Wybór porównania został wyczyszczony."
  ],
  "Copia JSON descargada. No se pudo consultar la versión central del servidor.": [
    "JSON backup downloaded. The central server version could not be checked.",
    "Sauvegarde JSON téléchargée. Impossible de vérifier la version centrale du serveur.",
    "JSON-Sicherung heruntergeladen. Die zentrale Serverversion konnte nicht abgefragt werden.",
    "Backup JSON scaricato. Impossibile verificare la versione centrale del server.",
    "Pobrano kopię JSON. Nie udało się sprawdzić centralnej wersji serwera."
  ],
  "Copia JSON descargada: incluye historial, ajustes y cálculo actual.": [
    "JSON backup downloaded: includes history, settings and current calculation.",
    "Sauvegarde JSON téléchargée : elle comprend l’historique, les paramètres et le calcul actuel.",
    "JSON-Sicherung heruntergeladen: Verlauf, Einstellungen und aktuelle Berechnung sind enthalten.",
    "Backup JSON scaricato: include cronologia, impostazioni e calcolo attuale.",
    "Pobrano kopię JSON: zawiera historię, ustawienia i bieżące obliczenie."
  ],
  "Copia restaurada: historial, ajustes y cálculo actual.": [
    "Backup restored: history, settings and current calculation.",
    "Sauvegarde restaurée : historique, paramètres et calcul actuel.",
    "Sicherung wiederhergestellt: Verlauf, Einstellungen und aktuelle Berechnung.",
    "Backup ripristinato: cronologia, impostazioni e calcolo attuale.",
    "Przywrócono kopię: historia, ustawienia i bieżące obliczenie."
  ],
  "Copia restaurada. Este archivo antiguo no incluía el cálculo actual.": [
    "Backup restored. This older file did not include the current calculation.",
    "Sauvegarde restaurée. Cet ancien fichier ne contenait pas le calcul actuel.",
    "Sicherung wiederhergestellt. Diese ältere Datei enthielt die aktuelle Berechnung nicht.",
    "Backup ripristinato. Questo vecchio file non includeva il calcolo attuale.",
    "Przywrócono kopię. Ten starszy plik nie zawierał bieżącego obliczenia."
  ],
  "El navegador no permitió copiarlo; se ha descargado el resumen en TXT.": [
    "The browser did not allow copying; the summary was downloaded as a TXT file.",
    "Le navigateur n’a pas autorisé la copie ; le résumé a été téléchargé au format TXT.",
    "Der Browser hat das Kopieren verhindert; die Zusammenfassung wurde als TXT-Datei heruntergeladen.",
    "Il browser non ha consentito la copia; il riepilogo è stato scaricato in formato TXT.",
    "Przeglądarka nie zezwoliła na kopiowanie; podsumowanie pobrano jako plik TXT."
  ],
  "Datos del vendedor guardados. Se reutilizarán en presupuestos y documentos imprimibles.": [
    "Seller details saved. They will be reused in quotes and printable documents.",
    "Coordonnées du vendeur enregistrées. Elles seront réutilisées dans les devis et documents imprimables.",
    "Verkäuferdaten gespeichert. Sie werden in Angeboten und druckbaren Dokumenten wiederverwendet.",
    "Dati del venditore salvati. Verranno riutilizzati nei preventivi e nei documenti stampabili.",
    "Zapisano dane sprzedawcy. Będą używane ponownie w ofertach i dokumentach do wydruku."
  ],
  "Crea el cliente aquí con el formulario de la agenda. Al guardarlo volverás al presupuesto.": [
    "Create the customer here using the address-book form. After saving, you will return to the quote.",
    "Créez le client ici à l’aide du formulaire du répertoire. Après l’enregistrement, vous reviendrez au devis.",
    "Erstellen Sie den Kunden hier über das Adressbuchformular. Nach dem Speichern kehren Sie zum Angebot zurück.",
    "Crea qui il cliente usando il modulo della rubrica. Dopo il salvataggio tornerai al preventivo.",
    "Utwórz tutaj klienta za pomocą formularza książki adresowej. Po zapisaniu wrócisz do oferty."
  ],
  "Escribe un nombre, correo o teléfono para buscar.": [
    "Enter a name, email, or phone number to search.",
    "Saisissez un nom, une adresse e-mail ou un numéro de téléphone pour rechercher.",
    "Geben Sie zum Suchen einen Namen, eine E-Mail-Adresse oder eine Telefonnummer ein.",
    "Inserisci un nome, un indirizzo e-mail o un numero di telefono per cercare.",
    "Wpisz imię i nazwisko, adres e-mail lub numer telefonu, aby wyszukać."
  ],
  "No hay clientes que coincidan con la búsqueda.": [
    "No customers match the search.",
    "Aucun client ne correspond à la recherche.",
    "Keine Kunden entsprechen der Suche.",
    "Nessun cliente corrisponde alla ricerca.",
    "Brak klientów pasujących do wyszukiwania."
  ],
  "Cliente guardado. Ya está disponible en presupuestos, facturas y pedidos.": [
    "Customer saved. They are now available in quotes, invoices and orders.",
    "Client enregistré. Il est désormais disponible dans les devis, factures et commandes.",
    "Kunde gespeichert. Er steht jetzt in Angeboten, Rechnungen und Aufträgen zur Verfügung.",
    "Cliente salvato. Ora è disponibile in preventivi, fatture e ordini.",
    "Zapisano klienta. Jest teraz dostępny w ofertach, fakturach i zamówieniach."
  ],
  ". La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.": [
    ". Restore first creates and validates a safety copy of the current database. Do not close the application until it finishes.",
    ". La restauration crée et valide d’abord une copie de sauvegarde de la base actuelle. Ne fermez pas l’application avant la fin.",
    ". Bei der Wiederherstellung wird zunächst eine Sicherung der aktuellen Datenbank erstellt und geprüft. Schließen Sie die Anwendung erst nach Abschluss.",
    ". Il ripristino crea e convalida prima una copia di sicurezza del database attuale. Non chiudere l’applicazione prima del termine.",
    ". Przywracanie najpierw tworzy i sprawdza kopię zabezpieczającą bieżącej bazy danych. Nie zamykaj aplikacji przed zakończeniem."
  ],
  "PCP v1.198: cierre de quotesView antes de las pestañas independientes": [
    "PCP v1.198: close quotesView before independent tabs",
    "PCP v1.198 : fermer quotesView avant les onglets indépendants",
    "PCP v1.198: quotesView vor den unabhängigen Registerkarten schließen",
    "PCP v1.198: chiusura di quotesView prima delle schede indipendenti",
    "PCP v1.198: zamknięcie quotesView przed niezależnymi kartami"
  ],
  " · Comisión aplicada al precio con impuestos: ": [
    " · Commission applied to the price including tax: ",
    " · Commission appliquée au prix TTC : ",
    " · Provision auf den Preis inklusive Steuern angewendet: ",
    " · Commissione applicata al prezzo comprensivo di imposte: ",
    " · Prowizja naliczona od ceny z podatkiem: "
  ],
  "estimados a partir de la extrusión (aproximados)": [
    "estimated from extrusion (approximate)",
    "estimés à partir de l’extrusion (approximatif)",
    "aus der Extrusion geschätzt (ungefähr)",
    "stimati dall’estrusione (approssimativi)",
    "oszacowane na podstawie ekstruzji (wartości przybliżone)"
  ],
  "según las estadísticas de Orca": [
    "according to Orca statistics",
    "selon les statistiques d’Orca",
    "laut Orca-Statistik",
    "secondo le statistiche di Orca",
    "według statystyk Orca"
  ],
  "<span class=\"warn\">El peso por extrusión es una estimación; verifica el dato antes de calcular el precio.</span>": [
    "<span class=\"warn\">Extrusion weight is an estimate; verify it before calculating the price.</span>",
    "<span class=\"warn\">Le poids calculé à partir de l’extrusion est une estimation ; vérifiez-le avant de calculer le prix.</span>",
    "<span class=\"warn\">Das Extrusionsgewicht ist ein Schätzwert; prüfen Sie ihn vor der Preisberechnung.</span>",
    "<span class=\"warn\">Il peso da estrusione è una stima; verifica il dato prima di calcolare il prezzo.</span>",
    "<span class=\"warn\">Masa wyliczona na podstawie ekstruzji jest szacunkowa; sprawdź ją przed obliczeniem ceny.</span>"
  ],
  "SQLite no está conectado: abre la aplicación desde http://127.0.0.1:8700.": [
    "SQLite is not connected: open the application from http://127.0.0.1:8700.",
    "SQLite n’est pas connecté : ouvrez l’application depuis http://127.0.0.1:8700.",
    "SQLite ist nicht verbunden: Öffnen Sie die Anwendung unter http://127.0.0.1:8700.",
    "SQLite non è connesso: apri l’applicazione da http://127.0.0.1:8700.",
    "SQLite nie jest połączone: otwórz aplikację pod adresem http://127.0.0.1:8700."
  ],
  "¿Eliminar solo la tasación de «": [
    "Delete only the estimate for “",
    "Supprimer uniquement l’estimation de «",
    "Nur die Kalkulation für „ löschen",
    "Eliminare solo la stima di «",
    "Usunąć tylko wycenę „"
  ],
  "</strong><br><span class=\"section-note\">Modelo estadístico orientativo: supone que cada intento es independiente y que un fallo obliga a repetir toda la pieza.</span>": [
    "</strong><br><span class=\"section-note\">Indicative statistical model: assumes each attempt is independent and a failure requires the entire part to be printed again.</span>",
    "</strong><br><span class=\"section-note\">Modèle statistique indicatif : chaque tentative est supposée indépendante et un échec impose de réimprimer toute la pièce.</span>",
    "</strong><br><span class=\"section-note\">Orientierendes statistisches Modell: Jeder Versuch gilt als unabhängig; bei einem Fehler muss das gesamte Teil erneut gedruckt werden.</span>",
    "</strong><br><span class=\"section-note\">Modello statistico indicativo: ogni tentativo è indipendente e un errore richiede di ristampare l’intero pezzo.</span>",
    "</strong><br><span class=\"section-note\">Orientacyjny model statystyczny: każda próba jest niezależna, a niepowodzenie wymaga ponownego wydrukowania całej części.</span>"
  ],
  "</strong><br>Cálculos guardados este mes: ": [
    "</strong><br>Calculations saved this month: ",
    "</strong><br>Calculs enregistrés ce mois-ci : ",
    "</strong><br>Diesen Monat gespeicherte Berechnungen: ",
    "</strong><br>Calcoli salvati questo mese: ",
    "</strong><br>Obliczenia zapisane w tym miesiącu: "
  ],
  "<br><span class=\"section-note\">Solo se cuentan los cálculos guardados; no se detectan automáticamente ventas reales ni cobros.</span>": [
    "<br><span class=\"section-note\">Only saved calculations are counted; actual sales and payments are not detected automatically.</span>",
    "<br><span class=\"section-note\">Seuls les calculs enregistrés sont comptabilisés ; les ventes réelles et les encaissements ne sont pas détectés automatiquement.</span>",
    "<br><span class=\"section-note\">Es werden nur gespeicherte Berechnungen gezählt; tatsächliche Verkäufe und Zahlungseingänge werden nicht automatisch erkannt.</span>",
    "<br><span class=\"section-note\">Vengono conteggiati solo i calcoli salvati; le vendite reali e gli incassi non vengono rilevati automaticamente.</span>",
    "<br><span class=\"section-note\">Uwzględniane są tylko zapisane obliczenia; rzeczywista sprzedaż i płatności nie są wykrywane automatycznie.</span>"
  ],
  "La dépense ne peut pas être enregistrée : stock de filament insuffisant ou bobine correspondante introuvable.": [
    "The expense cannot be saved: insufficient filament stock or matching spool not found.",
    "La dépense ne peut pas être enregistrée : stock de filament insuffisant ou bobine correspondante introuvable.",
    "Die Ausgabe kann nicht gespeichert werden: Filamentbestand reicht nicht aus oder passende Spule wurde nicht gefunden.",
    "Impossibile salvare la spesa: scorte di filamento insufficienti o bobina corrispondente non trovata.",
    "Nie można zapisać kosztu: za mało filamentu w magazynie lub nie znaleziono odpowiedniej szpuli."
  ],
  "La dépense propre a été enregistrée et ce filament a été déduit du stock.": [
    "Personal expense recorded and this filament has been deducted from stock.",
    "Dépense personnelle enregistrée et filament déduit du stock.",
    "Eigene Ausgabe gespeichert und dieses Filament vom Bestand abgezogen.",
    "Spesa personale registrata e filamento detratto dalle scorte.",
    "Zapisano koszt własny i odjęto ten filament ze stanu magazynowego."
  ],
  "Filament restitué au stock": [
    "Filament returned to stock",
    "Filament remis en stock",
    "Filament wieder dem Bestand hinzugefügt",
    "Filamento restituito alle scorte",
    "Filament zwrócono do magazynu"
  ],
  "Filament zwrócono do magazynu": [
    "Filament returned to stock",
    "Filament remis en stock",
    "Filament wieder dem Bestand hinzugefügt",
    "Filamento restituito alle scorte",
    "Filament zwrócono do magazynu"
  ],
  "La búsqueda no ha podido completarse: ": [
    "The search could not be completed: ",
    "La recherche n’a pas pu aboutir : ",
    "Die Suche konnte nicht abgeschlossen werden: ",
    "Impossibile completare la ricerca: ",
    "Nie udało się zakończyć wyszukiwania: "
  ],
  "Probando conexión con el puente local…": [
    "Testing connection to the local bridge…",
    "Test de la connexion au pont local…",
    "Verbindung zur lokalen Bridge wird getestet…",
    "Verifica della connessione al bridge locale…",
    "Testowanie połączenia z lokalnym mostem…"
  ],
  "Se ha cambiado de impresora. Esperando el estado actualizado; no se aplicará ningún descuento hasta confirmar el trabajo.": [
    "Printer changed. Waiting for updated status; no stock deduction will be applied until the job is confirmed.",
    "Imprimante modifiée. En attente de l’état mis à jour ; aucun stock ne sera déduit avant confirmation du travail.",
    "Drucker geändert. Warten auf den aktualisierten Status; der Bestand wird erst nach Bestätigung des Auftrags abgezogen.",
    "Stampante cambiata. In attesa dello stato aggiornato; non verrà detratta alcuna scorta finché il lavoro non sarà confermato.",
    "Zmieniono drukarkę. Oczekiwanie na aktualny stan; materiał nie zostanie odjęty od magazynu przed potwierdzeniem zadania."
  ],
  "Falló la lectura completa del G-code": [
    "Full G-code read failed",
    "La lecture complète du G-code a échoué",
    "Das vollständige Einlesen des G-Codes ist fehlgeschlagen",
    "Lettura completa del G-code non riuscita",
    "Pełny odczyt G-code nie powiódł się"
  ],
  "El puente devolvió un archivo distinto del activo": [
    "The bridge returned a different file from the active one",
    "Le pont a renvoyé un fichier différent du fichier actif",
    "Die Bridge hat eine andere Datei als die aktive zurückgegeben",
    "Il bridge ha restituito un file diverso da quello attivo",
    "Mostek zwrócił plik inny niż aktywny"
  ],
  "Consumo leído del G-code activo: ": [
    "Usage read from active G-code: ",
    "Consommation lue dans le G-code actif : ",
    "Verbrauch aus aktivem G-Code gelesen: ",
    "Consumo letto dal G-code attivo: ",
    "Zużycie odczytane z aktywnego G-code: "
  ],
  "La impresión terminó": [
    "The print finished",
    "L’impression est terminée",
    "Der Druck ist abgeschlossen",
    "La stampa è terminata",
    "Drukowanie zakończono"
  ],
  " · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    " · Check that the local bridge is running and responds at http://127.0.0.1:8700/.",
    " · Vérifiez que le pont local est démarré et répond à l’adresse http://127.0.0.1:8700/.",
    " · Prüfen Sie, ob die lokale Bridge läuft und unter http://127.0.0.1:8700/ antwortet.",
    " · Verifica che il bridge locale sia avviato e risponda su http://127.0.0.1:8700/.",
    " · Sprawdź, czy lokalny mostek jest uruchomiony i odpowiada pod adresem http://127.0.0.1:8700/."
  ],
  "No se pudo conectar. Comprueba que el puente esté iniciado, la dirección sea correcta y que el navegador permita la conexión. Detalle: ": [
    "Could not connect. Check that the bridge is running, the address is correct and the browser allows the connection. Details: ",
    "Connexion impossible. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise la connexion. Détail : ",
    "Verbindung fehlgeschlagen. Prüfen Sie, ob die Bridge läuft, die Adresse korrekt ist und der Browser die Verbindung zulässt. Details: ",
    "Impossibile connettersi. Verifica che il bridge sia avviato, l’indirizzo sia corretto e il browser consenta la connessione. Dettagli: ",
    "Nie udało się połączyć. Sprawdź, czy mostek jest uruchomiony, adres jest prawidłowy, a przeglądarka zezwala na połączenie. Szczegóły: "
  ],
  "No se pudo consultar la gestión de copias: {message}. Comprueba que el servidor local esté iniciado.": [
    "Could not check backup management: {message}. Make sure the local server is running.",
    "Impossible de consulter la gestion des sauvegardes : {message}. Vérifiez que le serveur local est démarré.",
    "Die Sicherungsverwaltung konnte nicht abgefragt werden: {message}. Prüfen Sie, ob der lokale Server läuft.",
    "Impossibile consultare la gestione dei backup: {message}. Verifica che il server locale sia avviato.",
    "Nie udało się sprawdzić zarządzania kopiami: {message}. Sprawdź, czy lokalny serwer jest uruchomiony."
  ],
  "La copia de protección previa, si llegó a crearse, se conserva.": [
    "The previous safety backup, if created, is retained.",
    "La copie de sécurité précédente, si elle a été créée, est conservée.",
    "Die vorherige Sicherung bleibt erhalten, sofern sie erstellt wurde.",
    "La copia di sicurezza precedente, se creata, viene conservata.",
    "Poprzednia kopia zabezpieczająca, jeśli została utworzona, zostaje zachowana."
  ],
  "Print Cost & Profit · Versión 1.480": [
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Version 1.480",
    "Print Cost & Profit · Versione 1.480",
    "Print Cost & Profit · Wersja 1.480"
  ],
  "Filamento genérico": [
    "Generic filament",
    "Filament générique",
    "Generisches Filament",
    "Filamento generico",
    "Filament ogólny"
  ],
  "snapmaker orca · integración local": [
    "snapmaker orca · local integration",
    "snapmaker orca · intégration locale",
    "snapmaker orca · lokale Integration",
    "snapmaker orca · integrazione locale",
    "snapmaker orca · integracja lokalna"
  ],
  "Si tienes cualquier duda, estaré encantada de ayudarte.": [
    "If you have any questions, I’ll be happy to help.",
    "Si vous avez la moindre question, je serai ravie de vous aider.",
    "Wenn Sie Fragen haben, helfe ich Ihnen gerne weiter.",
    "Se hai dubbi, sarò felice di aiutarti.",
    "Jeśli masz pytania, chętnie pomogę."
  ],
  "¡Muchas gracias por confiar en mí! 🙌": [
    "Thank you so much for trusting me! 🙌",
    "Merci beaucoup de votre confiance ! 🙌",
    "Vielen Dank für Ihr Vertrauen! 🙌",
    "Grazie mille per la fiducia! 🙌",
    "Bardzo dziękuję za zaufanie! 🙌"
  ],
  "Después, cuando se abra el destinatario, adjunta el PDF manualmente al mensaje. El documento todavía no se ha descargado.": [
    "Then, when the recipient opens, attach the PDF to the message manually. The document has not been downloaded yet.",
    "Ensuite, lorsque le destinataire s’ouvre, joignez manuellement le PDF au message. Le document n’a pas encore été téléchargé.",
    "Wenn sich anschließend der Empfänger öffnet, hängen Sie das PDF manuell an die Nachricht an. Das Dokument wurde noch nicht heruntergeladen.",
    "Poi, quando si apre il destinatario, allega manualmente il PDF al messaggio. Il documento non è ancora stato scaricato.",
    "Następnie, gdy otworzy się odbiorca, ręcznie dołącz plik PDF do wiadomości. Dokument nie został jeszcze pobrany."
  ],
  "Amortización (": [
    "Depreciation (",
    "Amortissement (",
    "Abschreibung (",
    "Ammortamento (",
    "Amortyzacja ("
  ],
  "📄 Todavía no hay facturas guardadas": [
    "📄 No invoices saved yet",
    "📄 Aucune facture enregistrée pour le moment",
    "📄 Noch keine Rechnungen gespeichert",
    "📄 Nessuna fattura salvata",
    "📄 Nie zapisano jeszcze żadnych faktur"
  ],
  "Conexión correcta (HTTP ": [
    "Connection successful (HTTP ",
    "Connexion réussie (HTTP ",
    "Verbindung erfolgreich (HTTP ",
    "Connessione riuscita (HTTP ",
    "Połączenie działa (HTTP "
  ],
  "El puente respondió HTTP ": [
    "The bridge responded with HTTP ",
    "Le pont a répondu HTTP ",
    "Die Bridge antwortete mit HTTP ",
    "Il bridge ha risposto HTTP ",
    "Mostek odpowiedział kodem HTTP "
  ],
  ". Verifica que el puente esté iniciado y la IP configurada.": [
    ". Make sure the bridge is running and the IP is configured.",
    ". Vérifiez que le pont est démarré et que l’adresse IP est configurée.",
    ". Prüfen Sie, ob die Bridge läuft und die IP konfiguriert ist.",
    ". Verifica che il bridge sia avviato e che l’IP sia configurato.",
    ". Sprawdź, czy mostek jest uruchomiony i skonfigurowano adres IP."
  ],
  "No se encontró la impresora.": [
    "Printer not found.",
    "Imprimante introuvable.",
    "Drucker nicht gefunden.",
    "Stampante non trovata.",
    "Nie znaleziono drukarki."
  ],
  "Puedes escribir su IP manualmente.": [
    "You can enter its IP address manually.",
    "Vous pouvez saisir son adresse IP manuellement.",
    "Sie können die IP-Adresse manuell eingeben.",
    "Puoi inserire manualmente il suo indirizzo IP.",
    "Możesz ręcznie wpisać jej adres IP."
  ],
  "Conectando con la impresora…": [
    "Connecting to the printer…",
    "Connexion à l’imprimante…",
    "Verbindung zum Drucker wird hergestellt…",
    "Connessione alla stampante…",
    "Łączenie z drukarką…"
  ],
  "Buscando impresoras guardadas…": [
    "Searching saved printers…",
    "Recherche des imprimantes enregistrées…",
    "Gespeicherte Drucker werden gesucht…",
    "Ricerca delle stampanti salvate…",
    "Wyszukiwanie zapisanych drukarek…"
  ],
  "No hay impresoras guardadas.": [
    "No saved printers.",
    "Aucune imprimante enregistrée.",
    "Keine gespeicherten Drucker.",
    "Nessuna stampante salvata.",
    "Brak zapisanych drukarek."
  ],
  "Conexión correcta. La impresora responde.": [
    "Connection successful. The printer is responding.",
    "Connexion réussie. L’imprimante répond.",
    "Verbindung erfolgreich. Der Drucker antwortet.",
    "Connessione riuscita. La stampante risponde.",
    "Połączenie działa poprawnie. Drukarka odpowiada."
  ],
  "No se pudo probar la conexión.": [
    "Could not test the connection.",
    "Impossible de tester la connexion.",
    "Die Verbindung konnte nicht getestet werden.",
    "Impossibile verificare la connessione.",
    "Nie udało się przetestować połączenia."
  ],
  "Comprobando dirección IP…": [
    "Checking IP address…",
    "Vérification de l’adresse IP…",
    "IP-Adresse wird überprüft…",
    "Verifica dell’indirizzo IP…",
    "Sprawdzanie adresu IP…"
  ],
  "Introduce una dirección IPv4 válida.": [
    "Enter a valid IPv4 address.",
    "Saisissez une adresse IPv4 valide.",
    "Geben Sie eine gültige IPv4-Adresse ein.",
    "Inserisci un indirizzo IPv4 valido.",
    "Wprowadź prawidłowy adres IPv4."
  ],
  "La dirección IP se ha guardado.": [
    "The IP address has been saved.",
    "L’adresse IP a été enregistrée.",
    "Die IP-Adresse wurde gespeichert.",
    "L’indirizzo IP è stato salvato.",
    "Adres IP został zapisany."
  ],
  "No se pudo guardar la dirección IP.": [
    "Could not save the IP address.",
    "Impossible d’enregistrer l’adresse IP.",
    "Die IP-Adresse konnte nicht gespeichert werden.",
    "Impossibile salvare l’indirizzo IP.",
    "Nie udało się zapisać adresu IP."
  ],
  "Esperando datos de la impresora…": [
    "Waiting for printer data…",
    "En attente des données de l’imprimante…",
    "Warten auf Druckerdaten…",
    "In attesa dei dati della stampante…",
    "Oczekiwanie na dane drukarki…"
  ],
  "Total previsto: —": [
    "Estimated total: —",
    "Total prévu : —",
    "Voraussichtliche Summe: —",
    "Totale previsto: —",
    "Przewidywana suma: —"
  ],
  "La selección se guardará para el descuento al finalizar; el inventario no cambia ahora.": [
    "The selection will be saved for deduction when the print finishes; inventory will not change now.",
    "La sélection sera enregistrée pour le prélèvement à la fin ; le stock ne change pas pour le moment.",
    "Die Auswahl wird für den Abzug nach Druckende gespeichert; der Bestand ändert sich jetzt nicht.",
    "La selezione verrà salvata per lo scarico a fine stampa; l’inventario non cambia ora.",
    "Wybór zostanie zapisany do rozliczenia po zakończeniu druku; stan magazynowy teraz się nie zmieni."
  ],
  "Impresora desconectada": [
    "Printer disconnected",
    "Imprimante déconnectée",
    "Drucker getrennt",
    "Stampante disconnessa",
    "Drukarka rozłączona"
  ],
  "Estado de la impresora desconocido": [
    "Printer status unknown",
    "État de l’imprimante inconnu",
    "Druckerstatus unbekannt",
    "Stato della stampante sconosciuto",
    "Nieznany stan drukarki"
  ],
  "No se pudo leer el G-code activo de la U1.": [
    "Could not read the active U1 G-code.",
    "Impossible de lire le G-code actif de la U1.",
    "Der aktive G-Code der U1 konnte nicht gelesen werden.",
    "Impossibile leggere il G-code attivo della U1.",
    "Nie udało się odczytać aktywnego pliku G-code drukarki U1."
  ],
  "No se descontará filamento hasta confirmar el trabajo.": [
    "Filament will not be deducted until the job is confirmed.",
    "Aucun filament ne sera déduit avant la confirmation du travail.",
    "Filament wird erst nach Bestätigung des Auftrags abgezogen.",
    "Il filamento non verrà scalato finché il lavoro non sarà confermato.",
    "Filament nie zostanie odjęty, dopóki zadanie nie zostanie potwierdzone."
  ],
  "Puente no disponible: {message} · Comprueba que el puente local está iniciado y que responde en http://127.0.0.1:8700/.": [
    "Bridge unavailable: {message} · Make sure the local bridge is running and responds at http://127.0.0.1:8700/.",
    "Pont indisponible : {message} · Vérifiez que le pont local est démarré et répond à http://127.0.0.1:8700/.",
    "Bridge nicht verfügbar: {message} · Prüfen Sie, ob die lokale Bridge läuft und unter http://127.0.0.1:8700/ antwortet.",
    "Bridge non disponibile: {message} · Verifica che il bridge locale sia avviato e risponda su http://127.0.0.1:8700/.",
    "Mostek jest niedostępny: {message} · Sprawdź, czy lokalny mostek działa i odpowiada pod adresem http://127.0.0.1:8700/."
  ],
  "Preparando lectura completa del G-code… {progress}%": [
    "Preparing full G-code read… {progress}%",
    "Préparation de la lecture complète du G-code… {progress} %",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… {progress} %",
    "Preparazione della lettura completa del G-code… {progress}%",
    "Przygotowywanie pełnego odczytu G-code… {progress}%"
  ],
  "Selecciona impresora": [
    "Select printer",
    "Sélectionner une imprimante",
    "Drucker auswählen",
    "Seleziona stampante",
    "Wybierz drukarkę"
  ],
  "No hay impresoras detectadas": [
    "No printers detected",
    "Aucune imprimante détectée",
    "Keine Drucker erkannt",
    "Nessuna stampante rilevata",
    "Nie wykryto drukarek"
  ],
  "Gasto pedido": [
    "Order expense",
    "Dépense de commande",
    "Bestellausgabe",
    "Spesa dell’ordine",
    "Koszt zamówienia"
  ],
  "Ingreso cobrado": [
    "Collected income",
    "Revenu encaissé",
    "Eingenommener Betrag",
    "Entrata incassata",
    "Otrzymany przychód"
  ],
  "Personal": [
    "Personal",
    "Personnel",
    "Persönlich",
    "Personale",
    "Osobiste"
  ],
  "Pedido de venta": [
    "Sales order",
    "Commande de vente",
    "Verkaufsauftrag",
    "Ordine di vendita",
    "Zamówienie sprzedaży"
  ],
  "Impresión en curso": [
    "Print in progress",
    "Impression en cours",
    "Druck läuft",
    "Stampa in corso",
    "Drukowanie w toku"
  ],
  "Comisión estimada": [
    "Estimated commission",
    "Commission estimée",
    "Geschätzte Provision",
    "Commissione stimata",
    "Szacowana prowizja"
  ],
  "Tiempo usado": [
    "Time used",
    "Temps utilisé",
    "Verwendete Zeit",
    "Tempo utilizzato",
    "Wykorzystany czas"
  ],
  "Desglose": [
    "Breakdown",
    "Détail",
    "Aufschlüsselung",
    "Dettaglio",
    "Zestawienie"
  ],
  "Comisión del punto 04": [
    "Point 04 commission",
    "Commission du point 04",
    "Provision für Punkt 04",
    "Commissione del punto 04",
    "Prowizja punktu 04"
  ],
  "sobre": [
    "on",
    "sur",
    "auf",
    "su",
    "od"
  ],
  "cobrado estimado": [
    "estimated amount charged",
    "montant estimé encaissé",
    "geschätzter Zahlungseingang",
    "incasso stimato",
    "szacowana kwota pobrana"
  ],
  "Editar movimiento contable": [
    "Edit accounting entry",
    "Modifier l’écriture comptable",
    "Buchung bearbeiten",
    "Modifica movimento contabile",
    "Edytuj wpis księgowy"
  ],
  "El detalle de referencia se conserva.": [
    "The reference details will be preserved.",
    "Les détails de référence seront conservés.",
    "Die Referenzdetails bleiben erhalten.",
    "I dettagli di riferimento verranno conservati.",
    "Szczegóły odniesienia zostaną zachowane."
  ],
  "Revisa los valores del movimiento.": [
    "Check the entry values.",
    "Vérifiez les valeurs de l’écriture.",
    "Überprüfen Sie die Buchungswerte.",
    "Controlla i valori del movimento.",
    "Sprawdź wartości wpisu."
  ],
  "Resumen por impresora": [
    "Printer summary",
    "Résumé par imprimante",
    "Zusammenfassung nach Drucker",
    "Riepilogo per stampante",
    "Podsumowanie według drukarki"
  ],
  "Resumen económico": [
    "Financial summary",
    "Résumé financier",
    "Finanzübersicht",
    "Riepilogo economico",
    "Podsumowanie finansowe"
  ],
  "Ver detalle": [
    "View details",
    "Voir le détail",
    "Details anzeigen",
    "Visualizza dettagli",
    "Zobacz szczegóły"
  ],
  "Total de gastos": [
    "Total expenses",
    "Total des dépenses",
    "Gesamtausgaben",
    "Totale spese",
    "Łączne wydatki"
  ],
  "Documento importado": [
    "Imported document",
    "Document importé",
    "Importiertes Dokument",
    "Documento importato",
    "Zaimportowany dokument"
  ],
  "Elige un documento guardado.": [
    "Choose a saved document.",
    "Choisissez un document enregistré.",
    "Wählen Sie ein gespeichertes Dokument aus.",
    "Scegli un documento salvato.",
    "Wybierz zapisany dokument."
  ],
  "No registra ventas, IVA ni beneficios.": [
    "It does not record sales, VAT, or profit.",
    "Aucune vente, TVA ni aucun bénéfice ne sont enregistrés.",
    "Es werden keine Verkäufe, Mehrwertsteuer oder Gewinne erfasst.",
    "Non registra vendite, IVA né profitti.",
    "Nie rejestruje sprzedaży, VAT ani zysku."
  ],
  "Punto 04: precio introducido {entered}; objetivo {margin}% o mínimo {minimum}; precio base aplicado {applied}; venta base total {net}; impuesto {tax} ({rate}%); total al cliente {gross}; comisión {commission}; beneficio estimado {profit}.": [
    "Point 04: entered price {entered}; target {margin}% or minimum {minimum}; applied base price {applied}; total net sales {net}; tax {tax} ({rate}%); customer total {gross}; commission {commission}; estimated profit {profit}.",
    "Point 04 : prix saisi {entered} ; objectif {margin} % ou minimum {minimum} ; prix de base appliqué {applied} ; total des ventes HT {net} ; taxe {tax} ({rate} %) ; total client {gross} ; commission {commission} ; bénéfice estimé {profit}.",
    "Punkt 04: eingegebener Preis {entered}; Ziel {margin}% oder Mindestwert {minimum}; angewendeter Nettopreis {applied}; Nettoumsatz gesamt {net}; Steuer {tax} ({rate}%); Kundensumme {gross}; Provision {commission}; geschätzter Gewinn {profit}.",
    "Punto 04: prezzo inserito {entered}; obiettivo {margin}% o minimo {minimum}; prezzo base applicato {applied}; totale vendite netto {net}; imposta {tax} ({rate}%); totale cliente {gross}; commissione {commission}; profitto stimato {profit}.",
    "Punkt 04: wprowadzona cena {entered}; cel {margin}% lub minimum {minimum}; zastosowana cena podstawowa {applied}; łączna sprzedaż netto {net}; podatek {tax} ({rate}%); suma dla klienta {gross}; prowizja {commission}; szacowany zysk {profit}."
  ],
  "Está marcada como provisional; revísala cuando termine la impresión.": [
    "It is marked as provisional; review it when printing finishes.",
    "Elle est marquée comme provisoire ; vérifiez-la à la fin de l’impression.",
    "Sie ist als vorläufig markiert; überprüfen Sie sie nach Druckende.",
    "È contrassegnata come provvisoria; controllala al termine della stampa.",
    "Oznaczono ją jako tymczasową; sprawdź ją po zakończeniu drukowania."
  ],
  "No se pudo consultar la gestión de copias: {message}. Comprueba que el servidor local está iniciado.": [
    "Could not query backup management: {message}. Make sure the local server is running.",
    "Impossible de consulter la gestion des sauvegardes : {message}. Vérifiez que le serveur local est démarré.",
    "Sicherungsverwaltung konnte nicht abgefragt werden: {message}. Prüfen Sie, ob der lokale Server läuft.",
    "Impossibile consultare la gestione dei backup: {message}. Verifica che il server locale sia avviato.",
    "Nie udało się sprawdzić zarządzania kopiami zapasowymi: {message}. Sprawdź, czy serwer lokalny jest uruchomiony."
  ],
  "No se puede guardar el gasto: falta stock de filamento o no se encuentra la bobina correspondiente.": [
    "The expense cannot be saved: filament stock is insufficient or the matching spool could not be found.",
    "Impossible d’enregistrer la dépense : le stock de filament est insuffisant ou la bobine correspondante est introuvable.",
    "Die Ausgabe kann nicht gespeichert werden: Der Filamentbestand reicht nicht aus oder die passende Spule wurde nicht gefunden.",
    "Impossibile salvare la spesa: il filamento disponibile è insufficiente oppure non è stata trovata la bobina corrispondente.",
    "Nie można zapisać wydatku: zapas filamentu jest niewystarczający lub nie znaleziono odpowiedniej szpuli."
  ],
  "Se ha eliminado el movimiento y se ha recuperado el filamento de estas bobinas:": [
    "The entry was deleted and filament was returned from these spools:",
    "L’écriture a été supprimée et le filament a été restitué depuis ces bobines :",
    "Der Eintrag wurde gelöscht und Filament von diesen Spulen wurde zurückgebucht:",
    "Il movimento è stato eliminato e il filamento è stato recuperato da queste bobine:",
    "Usunięto wpis i przywrócono filament z następujących szpul:"
  ],
  "Total de todas las impresoras": [
    "Total for all printers",
    "Total de toutes les imprimantes",
    "Gesamtsumme aller Drucker",
    "Totale di tutte le stampanti",
    "Łącznie dla wszystkich drukarek"
  ],
  "Sin impresora asignada": [
    "No printer assigned",
    "Aucune imprimante attribuée",
    "Kein Drucker zugewiesen",
    "Nessuna stampante assegnata",
    "Nie przypisano drukarki"
  ],
  "Desglose de gastos propios": [
    "Personal expenses breakdown",
    "Détail des dépenses personnelles",
    "Aufschlüsselung eigener Ausgaben",
    "Dettaglio delle spese personali",
    "Zestawienie własnych wydatków"
  ],
  "Gastos sin desglose guardado": [
    "Expenses without a saved breakdown",
    "Dépenses sans détail enregistré",
    "Ausgaben ohne gespeicherte Aufschlüsselung",
    "Spese senza dettaglio salvato",
    "Wydatki bez zapisanego zestawienia"
  ],
  "Total de gastos propios": [
    "Total personal expenses",
    "Total des dépenses personnelles",
    "Gesamtsumme eigener Ausgaben",
    "Totale delle spese personali",
    "Łączne wydatki własne"
  ],
  "Desglose no guardado en este registro": [
    "No breakdown saved for this entry",
    "Aucun détail enregistré pour cette écriture",
    "Für diesen Eintrag wurde keine Aufschlüsselung gespeichert",
    "Nessun dettaglio salvato per questa registrazione",
    "Brak zestawienia zapisanego dla tego wpisu"
  ],
  "No hay gastos propios registrados para esta impresora.": [
    "No own expenses are recorded for this printer.",
    "Aucune dépense personnelle n’est enregistrée pour cette imprimante.",
    "Für diesen Drucker sind keine eigenen Ausgaben erfasst.",
    "Non sono registrate spese proprie per questa stampante.",
    "Brak zarejestrowanych wydatków własnych dla tej drukarki."
  ],
  "Resumen de costes": [
    "Cost summary",
    "Récapitulatif des coûts",
    "Kostenübersicht",
    "Riepilogo dei costi",
    "Podsumowanie kosztów"
  ],
  "No se pudo guardar el gasto": [
    "Could not save the expense",
    "Impossible d’enregistrer la dépense",
    "Die Ausgabe konnte nicht gespeichert werden",
    "Impossibile salvare la spesa",
    "Nie udało się zapisać wydatku"
  ],
  "Impresora seleccionada ·": [
    "Selected printer ·",
    "Imprimante sélectionnée ·",
    "Ausgewählter Drucker ·",
    "Stampante selezionata ·",
    "Wybrana drukarka ·"
  ],
  "La lectura del G-code supera los 15 minutos y se ha detenido la espera.": [
    "G-code reading exceeded 15 minutes; waiting has stopped.",
    "La lecture du G-code dépasse 15 minutes ; l’attente a été arrêtée.",
    "Das Einlesen des G-Codes überschritt 15 Minuten; das Warten wurde beendet.",
    "La lettura del G-code ha superato 15 minuti; l’attesa è stata interrotta.",
    "Odczyt G-code przekroczył 15 minut; oczekiwanie zostało zatrzymane."
  ],
  "El G-code activo no contiene metadatos de filamento": [
    "The active G-code contains no filament metadata",
    "Le G-code actif ne contient pas de métadonnées de filament",
    "Der aktive G-Code enthält keine Filament-Metadaten",
    "Il G-code attivo non contiene metadati del filamento",
    "Aktywny G-code nie zawiera metadanych filamentu"
  ],
  "No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo.": [
    "No spool was deducted: the combined stock of compatible spools does not cover total consumption.",
    "Aucune bobine n’a été débitée : le stock cumulé des bobines compatibles ne couvre pas toute la consommation.",
    "Keine Spule wurde abgebucht: Der Gesamtbestand kompatibler Spulen reicht für den gesamten Verbrauch nicht aus.",
    "Non è stata scaricata alcuna bobina: la scorta complessiva delle bobine compatibili non copre tutto il consumo.",
    "Nie odjęto materiału z żadnej szpuli: łączny zapas zgodnych szpul nie wystarcza na całe zużycie."
  ],
  "Descuento aplicado (estimación del G-code):": [
    "Deduction applied (G-code estimate):",
    "Prélèvement appliqué (estimation du G-code) :",
    "Abzug angewendet (G-Code-Schätzung):",
    "Scarico applicato (stima G-code):",
    "Zastosowano odjęcie materiału (szacunek z G-code):"
  ],
  "· Se ha repartido el consumo entre bobinas compatibles cuando ha sido necesario.": [
    "· Consumption was split across compatible spools when necessary.",
    "· La consommation a été répartie entre les bobines compatibles si nécessaire.",
    "· Der Verbrauch wurde bei Bedarf auf kompatible Spulen verteilt.",
    "· Il consumo è stato ripartito tra bobine compatibili quando necessario.",
    "· W razie potrzeby zużycie rozdzielono między zgodne szpule."
  ],
  "Este registro solo contabiliza el gasto. No añade ventas ni beneficio.": [
    "This entry records the expense only. It does not add sales or profit.",
    "Cette écriture comptabilise uniquement la dépense. Elle n’ajoute ni vente ni bénéfice.",
    "Dieser Eintrag erfasst nur die Ausgabe. Er fügt weder Umsatz noch Gewinn hinzu.",
    "Questa registrazione contabilizza solo la spesa. Non aggiunge vendite né profitto.",
    "Ten wpis rejestruje wyłącznie wydatek. Nie dodaje sprzedaży ani zysku."
  ],
  "Introduce un importe válido igual o mayor que cero.": [
    "Enter a valid amount greater than or equal to zero.",
    "Saisissez un montant valide supérieur ou égal à zéro.",
    "Geben Sie einen gültigen Betrag größer oder gleich null ein.",
    "Inserisci un importo valido maggiore o uguale a zero.",
    "Wprowadź prawidłową kwotę większą lub równą zero."
  ],
  "No se pudo registrar como personal:": [
    "Could not record as a personal print:",
    "Impossible d’enregistrer comme impression personnelle :",
    "Konnte nicht als persönlicher Druck erfasst werden:",
    "Impossibile registrare come stampa personale:",
    "Nie udało się zapisać jako wydruku prywatnego:"
  ],
  "No se pudo registrar como pedido:": [
    "Could not record as an order:",
    "Impossible d’enregistrer comme commande :",
    "Konnte nicht als Auftrag erfasst werden:",
    "Impossibile registrare come ordine:",
    "Nie udało się zapisać jako zamówienia:"
  ],
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {after} g.": [
    "Inventory: {stock} g available · {used} g would be used · {after} g would remain.",
    "Stock : {stock} g disponibles · {used} g seraient utilisés · {after} g resteraient.",
    "Bestand: {stock} g verfügbar · {used} g würden verbraucht · {after} g würden verbleiben.",
    "Inventario: {stock} g disponibili · verrebbero usati {used} g · resterebbero {after} g.",
    "Zapas: dostępne {stock} g · zużycie {used} g · pozostałoby {after} g."
  ],
  "⚠ Stock insuficiente: hay {stock} g y se necesitan {used} g; faltarían {missing} g.": [
    "⚠ Insufficient stock: {stock} g available, {used} g required; {missing} g short.",
    "⚠ Stock insuffisant : {stock} g disponibles, {used} g nécessaires ; il manque {missing} g.",
    "⚠ Bestand unzureichend: {stock} g verfügbar, {used} g benötigt; es fehlen {missing} g.",
    "⚠ Scorta insufficiente: {stock} g disponibili, {used} g necessari; ne mancano {missing} g.",
    "⚠ Niewystarczający zapas: dostępne {stock} g, wymagane {used} g; brakuje {missing} g."
  ],
  "Color aproximado (HEX inventario: {hex}); revisa la bobina antes de confirmar.": [
    "Approximate color (inventory HEX: {hex}); check the spool before confirming.",
    "Couleur approximative (HEX du stock : {hex}) ; vérifiez la bobine avant de confirmer.",
    "Ungefähre Farbe (Lager-HEX: {hex}); Spule vor der Bestätigung prüfen.",
    "Colore approssimativo (HEX inventario: {hex}); controlla la bobina prima di confermare.",
    "Kolor przybliżony (HEX w magazynie: {hex}); sprawdź szpulę przed zatwierdzeniem."
  ],
  "No se encontró una bobina compatible en inventario: {brand} {material} {color} ({hex}). Revisa marca, material y color.": [
    "No compatible spool found in inventory: {brand} {material} {color} ({hex}). Check brand, material, and color.",
    "Aucune bobine compatible trouvée : {brand} {material} {color} ({hex}). Vérifiez la marque, le matériau et la couleur.",
    "Keine passende Spule im Lager gefunden: {brand} {material} {color} ({hex}). Marke, Material und Farbe prüfen.",
    "Nessuna bobina compatibile in inventario: {brand} {material} {color} ({hex}). Controlla marca, materiale e colore.",
    "Nie znaleziono pasującej szpuli w magazynie: {brand} {material} {color} ({hex}). Sprawdź markę, materiał i kolor."
  ],
  "Amortización ({detail}) por hora": [
    "Depreciation ({detail}) per hour",
    "Amortissement ({detail}) par heure",
    "Abschreibung ({detail}) pro Stunde",
    "Ammortamento ({detail}) all’ora",
    "Amortyzacja ({detail}) na godzinę"
  ],
  "Impresión personal": [
    "Personal print",
    "Impression personnelle",
    "Privater Druck",
    "Stampa personale",
    "Wydruk prywatny"
  ],
  "Desglose por impresión": [
    "Breakdown by print",
    "Détail par impression",
    "Aufschlüsselung nach Druck",
    "Dettaglio per stampa",
    "Podział według wydruku"
  ],
  "Detalle disponible": [
    "Details available",
    "Détails disponibles",
    "Details verfügbar",
    "Dettagli disponibili",
    "Dostępne szczegóły"
  ],
  "No hay movimientos que exportar.": [
    "There are no entries to export.",
    "Aucun mouvement à exporter.",
    "Keine Buchungen zum Exportieren vorhanden.",
    "Non ci sono movimenti da esportare.",
    "Brak wpisów do wyeksportowania."
  ],
  "La ventana del informe fue bloqueada por el navegador.": [
    "The report window was blocked by the browser.",
    "La fenêtre du rapport a été bloquée par le navigateur.",
    "Das Berichtsfenster wurde vom Browser blockiert.",
    "La finestra del rapporto è stata bloccata dal browser.",
    "Przeglądarka zablokowała okno raportu."
  ],
  "¿Confirmar acción?": [
    "Confirm action?",
    "Confirmer l’action ?",
    "Aktion bestätigen?",
    "Confermare l’azione?",
    "Potwierdzić działanie?"
  ],
  "Puente no disponible:": [
    "Bridge unavailable:",
    "Pont indisponible :",
    "Bridge nicht verfügbar:",
    "Bridge non disponibile:",
    "Mostek jest niedostępny:"
  ],
  "El trabajo figura como registrado, pero no se encuentran movimientos contables guardados. Comprueba la copia de seguridad y el almacenamiento SQLite.": [
    "The job is marked as recorded, but no saved accounting entries were found. Check the backup and SQLite storage.",
    "Le travail est indiqué comme enregistré, mais aucune écriture comptable sauvegardée n’a été trouvée. Vérifiez la sauvegarde et le stockage SQLite.",
    "Der Auftrag ist als erfasst markiert, aber es wurden keine gespeicherten Buchungen gefunden. Prüfen Sie Sicherung und SQLite-Speicher.",
    "Il lavoro risulta registrato, ma non sono state trovate registrazioni contabili salvate. Controlla il backup e l’archiviazione SQLite.",
    "Zadanie oznaczono jako zarejestrowane, ale nie znaleziono zapisów księgowych. Sprawdź kopię zapasową i bazę SQLite."
  ],
  "Este trabajo ya figura como registrado. He abierto Contabilidad y solicitado actualizar la lista. Si no aparece el movimiento, no vuelvas a registrarlo: revisa el estado del almacenamiento y la copia de seguridad.": [
    "This job is already recorded. I opened Accounting and requested a list refresh. If the entry does not appear, do not record it again: check storage status and the backup.",
    "Ce travail est déjà enregistré. J’ai ouvert la comptabilité et demandé l’actualisation de la liste. Si l’écriture n’apparaît pas, ne l’enregistrez pas à nouveau : vérifiez le stockage et la sauvegarde.",
    "Dieser Auftrag ist bereits erfasst. Die Buchhaltung wurde geöffnet und eine Aktualisierung der Liste angefordert. Falls der Eintrag fehlt, erfassen Sie ihn nicht erneut: Prüfen Sie Speicherstatus und Sicherung.",
    "Questo lavoro risulta già registrato. Ho aperto la contabilità e richiesto l’aggiornamento dell’elenco. Se il movimento non compare, non registrarlo di nuovo: controlla lo stato dell’archiviazione e il backup.",
    "To zadanie jest już zarejestrowane. Otwarto księgowość i zażądano odświeżenia listy. Jeśli wpis się nie pojawi, nie rejestruj go ponownie: sprawdź stan pamięci i kopię zapasową."
  ],
  "No hay historial que exportar.": [
    "There is no history to export.",
    "Aucun historique à exporter.",
    "Es gibt keinen Verlauf zum Exportieren.",
    "Non c’è cronologia da esportare.",
    "Brak historii do wyeksportowania."
  ],
  "Configura y guarda tus datos para reutilizarlos.": [
    "Set up and save your details to reuse them.",
    "Configurez et enregistrez vos coordonnées pour les réutiliser.",
    "Richten Sie Ihre Angaben ein und speichern Sie sie zur Wiederverwendung.",
    "Configura e salva i tuoi dati per riutilizzarli.",
    "Skonfiguruj i zapisz swoje dane, aby używać ich ponownie."
  ],
  "Cliente sin nombre": [
    "Unnamed customer",
    "Client sans nom",
    "Kunde ohne Namen",
    "Cliente senza nome",
    "Klient bez nazwy"
  ],
  "Nombre del filamento": [
    "Filament name",
    "Nom du filament",
    "Filamentname",
    "Nome del filamento",
    "Nazwa filamentu"
  ],
  "Precio por kilo": [
    "Price per kilogram",
    "Prix au kilogramme",
    "Preis pro Kilogramm",
    "Prezzo al chilogrammo",
    "Cena za kilogram"
  ],
  "Color HEX del filamento": [
    "Filament HEX color",
    "Couleur HEX du filament",
    "HEX-Farbe des Filaments",
    "Colore HEX del filamento",
    "Kolor HEX filamentu"
  ],
  "Marca no identificada": [
    "Unknown brand",
    "Marque non identifiée",
    "Marke nicht erkannt",
    "Marca non identificata",
    "Nie rozpoznano marki"
  ],
  "Material no indicado": [
    "Material not specified",
    "Matériau non indiqué",
    "Material nicht angegeben",
    "Materiale non indicato",
    "Nie podano materiału"
  ],
  "color no indicado": [
    "color not specified",
    "couleur non indiquée",
    "Farbe nicht angegeben",
    "colore non indicato",
    "nie podano koloru"
  ],
  "HEX no indicado": [
    "HEX not specified",
    "HEX non indiqué",
    "HEX nicht angegeben",
    "HEX non indicato",
    "Nie podano kodu HEX"
  ],
  "El peso por extrusión es una estimación; verifica el dato antes de calcular el precio.": [
    "Weight per extrusion is an estimate; verify it before calculating the price.",
    "Le poids par extrusion est une estimation ; vérifiez cette donnée avant de calculer le prix.",
    "Das Gewicht pro Extrusion ist ein Schätzwert; prüfen Sie ihn vor der Preisberechnung.",
    "Il peso per estrusione è una stima; verifica il dato prima di calcolare il prezzo.",
    "Masa na ekstrudowaną porcję jest szacunkowa; sprawdź ją przed obliczeniem ceny."
  ],
  "Falta en inventario: {brand} {material} {color}. Habría que comprar esta bobina.": [
    "Missing from inventory: {brand} {material} {color}. This spool would need to be purchased.",
    "Absent de l’inventaire : {brand} {material} {color}. Cette bobine devra être achetée.",
    "Nicht im Lager vorhanden: {brand} {material} {color}. Diese Spule müsste gekauft werden.",
    "Manca in inventario: {brand} {material} {color}. Questa bobina andrebbe acquistata.",
    "Brak w magazynie: {brand} {material} {color}. Tę szpulę trzeba będzie kupić."
  ],
  "Precio recomendado de referencia:": [
    "Reference recommended price:",
    "Prix recommandé de référence :",
    "Empfohlener Referenzpreis:",
    "Prezzo consigliato di riferimento:",
    "Zalecana cena referencyjna:"
  ],
  "Beneficio de referencia:": [
    "Reference profit:",
    "Bénéfice de référence :",
    "Referenzgewinn:",
    "Profitto di riferimento:",
    "Zysk referencyjny:"
  ],
  "Impuesto:": [
    "Tax:",
    "Taxe :",
    "Steuer:",
    "Imposta:",
    "Podatek:"
  ],
  "Precio sin impuesto": [
    "Price excluding tax",
    "Prix hors taxe",
    "Preis ohne Steuer",
    "Prezzo senza imposta",
    "Cena bez podatku"
  ],
  "Precio final con impuesto": [
    "Final price including tax",
    "Prix final TTC",
    "Endpreis inklusive Steuer",
    "Prezzo finale con imposta",
    "Cena końcowa z podatkiem"
  ],
  "Precio recomendado con impuesto": [
    "Recommended price including tax",
    "Prix recommandé TTC",
    "Empfohlener Preis inklusive Steuer",
    "Prezzo consigliato con imposta",
    "Zalecana cena z podatkiem"
  ],
  "Precio recomendado con impuestos:": [
    "Recommended price including taxes:",
    "Prix recommandé toutes taxes comprises :",
    "Empfohlener Preis inklusive Steuern:",
    "Prezzo consigliato comprensivo di imposte:",
    "Zalecana cena z podatkami:"
  ],
  "Coste esperado por pieza vendible:": [
    "Expected cost per sellable piece:",
    "Coût prévu par pièce vendable :",
    "Erwartete Kosten pro verkaufsfähigem Stück:",
    "Costo previsto per pezzo vendibile:",
    "Przewidywany koszt jednej sprzedawalnej sztuki:"
  ],
  "Mejor beneficio unitario del historial:": [
    "Best unit profit in history:",
    "Meilleur bénéfice unitaire de l’historique :",
    "Höchster Stückgewinn im Verlauf:",
    "Miglior profitto unitario della cronologia:",
    "Najwyższy zysk jednostkowy w historii:"
  ],
  "Solo se cuentan los cálculos guardados; no se detectan automáticamente ventas reales ni cobros.": [
    "Only saved calculations are counted; actual sales and payments are not detected automatically.",
    "Seuls les calculs enregistrés sont pris en compte ; les ventes réelles et les paiements ne sont pas détectés automatiquement.",
    "Es werden nur gespeicherte Berechnungen berücksichtigt; tatsächliche Verkäufe und Zahlungseingänge werden nicht automatisch erkannt.",
    "Vengono conteggiati solo i calcoli salvati; le vendite reali e gli incassi non vengono rilevati automaticamente.",
    "Uwzględniane są tylko zapisane obliczenia; rzeczywista sprzedaż i płatności nie są wykrywane automatycznie."
  ],
  "Probabilidad de fallo:": [
    "Failure probability:",
    "Probabilité d’échec :",
    "Fehlerwahrscheinlichkeit:",
    "Probabilità di errore:",
    "Prawdopodobieństwo niepowodzenia:"
  ],
  "No hay resultados que coincidan con tu búsqueda.": [
    "No results match your search.",
    "Aucun résultat ne correspond à votre recherche.",
    "Keine Ergebnisse entsprechen Ihrer Suche.",
    "Nessun risultato corrisponde alla ricerca.",
    "Brak wyników pasujących do wyszukiwania."
  ],
  "No se ha podido guardar la preferencia en SQLite.": [
    "Could not save the preference in SQLite.",
    "Impossible d’enregistrer la préférence dans SQLite.",
    "Die Einstellung konnte nicht in SQLite gespeichert werden.",
    "Impossibile salvare la preferenza in SQLite.",
    "Nie udało się zapisać ustawienia w bazie SQLite."
  ],
  "No se pudieron migrar las preferencias a SQLite:": [
    "Preferences could not be migrated to SQLite:",
    "Impossible de migrer les préférences vers SQLite :",
    "Die Einstellungen konnten nicht nach SQLite migriert werden:",
    "Impossibile migrare le preferenze in SQLite:",
    "Nie udało się przenieść ustawień do bazy SQLite:"
  ],
  "No se pudo guardar el orden en SQLite:": [
    "Could not save the order in SQLite:",
    "Impossible d’enregistrer l’ordre dans SQLite :",
    "Die Reihenfolge konnte nicht in SQLite gespeichert werden:",
    "Impossibile salvare l’ordine in SQLite:",
    "Nie udało się zapisać kolejności w bazie SQLite:"
  ],
  "No se pudo restaurar copia JSON": [
    "Could not restore JSON backup",
    "Impossible de restaurer la sauvegarde JSON",
    "JSON-Sicherung konnte nicht wiederhergestellt werden",
    "Impossibile ripristinare il backup JSON",
    "Nie udało się przywrócić kopii JSON"
  ],
  "La copia restaurada no incluía el cálculo actual.": [
    "The restored backup did not include the current calculation.",
    "La sauvegarde restaurée ne contenait pas le calcul actuel.",
    "Die wiederhergestellte Sicherung enthielt die aktuelle Berechnung nicht.",
    "Il backup ripristinato non includeva il calcolo attuale.",
    "Przywrócona kopia nie zawierała bieżącego obliczenia."
  ],
  "El navegador ha bloqueado la ventana del informe PDF.": [
    "The browser blocked the PDF report window.",
    "Le navigateur a bloqué la fenêtre du rapport PDF.",
    "Der Browser hat das Fenster für den PDF-Bericht blockiert.",
    "Il browser ha bloccato la finestra del rapporto PDF.",
    "Przeglądarka zablokowała okno raportu PDF."
  ],
  "No se encontraron resultados.": [
    "No results found.",
    "Aucun résultat trouvé.",
    "Keine Ergebnisse gefunden.",
    "Nessun risultato trovato.",
    "Nie znaleziono wyników."
  ],
  "Leyendo datos del G-code…": [
    "Reading G-code data…",
    "Lecture des données du G-code…",
    "G-Code-Daten werden gelesen…",
    "Lettura dei dati G-code…",
    "Odczytywanie danych G-code…"
  ],
  "fecha de estado desconocida": [
    "status timestamp unknown",
    "horodatage d’état inconnu",
    "Zeitstempel des Status unbekannt",
    "data dello stato sconosciuta",
    "nieznany znacznik czasu stanu"
  ],
  "Fuente: leyendo G-code activo de la U1:": [
    "Source: reading active U1 G-code:",
    "Source : lecture du G-code actif de la U1 :",
    "Quelle: Aktiver U1-G-Code wird gelesen:",
    "Fonte: lettura del G-code attivo della U1:",
    "Źródło: odczytywanie aktywnego G-code drukarki U1:"
  ],
  "Preparando lectura completa del G-code… 0%": [
    "Preparing full G-code read… 0%",
    "Préparation de la lecture complète du G-code… 0 %",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… 0 %",
    "Preparazione della lettura completa del G-code… 0%",
    "Przygotowywanie pełnego odczytu G-code… 0%"
  ],
  "No se pudo iniciar la lectura del G-code": [
    "Could not start reading the G-code",
    "Impossible de démarrer la lecture du G-code",
    "Das Einlesen des G-Codes konnte nicht gestartet werden",
    "Impossibile avviare la lettura del G-code",
    "Nie udało się rozpocząć odczytu G-code"
  ],
  "Error consultando el progreso: HTTP": [
    "Error checking progress: HTTP",
    "Erreur lors de la vérification de la progression : HTTP",
    "Fehler beim Abrufen des Fortschritts: HTTP",
    "Errore durante il controllo dell’avanzamento: HTTP",
    "Błąd sprawdzania postępu: HTTP"
  ],
  "Fuente confirmada: G-code activo de la U1 ·": [
    "Confirmed source: active U1 G-code ·",
    "Source confirmée : G-code actif de l’U1 ·",
    "Bestätigte Quelle: aktiver U1-G-Code ·",
    "Fonte confermata: G-code attivo della U1 ·",
    "Potwierdzone źródło: aktywny G-code U1 ·"
  ],
  "Consumo leído del G-code activo:": [
    "Consumption read from active G-code:",
    "Consommation lue depuis le G-code actif :",
    "Verbrauch aus aktivem G-Code ausgelesen:",
    "Consumo letto dal G-code attivo:",
    "Zużycie odczytane z aktywnego G-code:"
  ],
  "g previstos. Bobinas asignadas:": [
    "g planned. Spools assigned:",
    "g prévus. Bobines affectées :",
    "g geplant. Zugeordnete Spulen:",
    "g previsti. Bobine assegnate:",
    "g przewidywane. Przypisane szpule:"
  ],
  "Comprueba las asignaciones antes del descuento.": [
    "Check assignments before deducting stock.",
    "Vérifiez les affectations avant de déduire le stock.",
    "Prüfen Sie die Zuordnungen vor dem Lagerabzug.",
    "Controlla le assegnazioni prima di scaricare il magazzino.",
    "Sprawdź przypisania przed odjęciem ze stanu magazynowego."
  ],
  "Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.": [
    "Add stock or review the assignments, then check the job again.",
    "Ajoutez du stock ou vérifiez les affectations, puis contrôlez à nouveau la tâche.",
    "Fügen Sie Bestand hinzu oder prüfen Sie die Zuordnungen und kontrollieren Sie den Auftrag erneut.",
    "Aggiungi scorte o controlla le assegnazioni, quindi verifica di nuovo il lavoro.",
    "Dodaj zapasy lub sprawdź przypisania, a następnie ponownie zweryfikuj zadanie."
  ],
  "No se pudo actualizar el estado contable de la impresión finalizada": [
    "Could not update the accounting status of the completed print",
    "Impossible de mettre à jour le statut comptable de l’impression terminée",
    "Der Buchhaltungsstatus des abgeschlossenen Drucks konnte nicht aktualisiert werden",
    "Impossibile aggiornare lo stato contabile della stampa completata",
    "Nie udało się zaktualizować statusu księgowego zakończonego wydruku"
  ],
  "No se pudo recalcular el coste parcial de la impresión cancelada": [
    "Could not recalculate the partial cost of the cancelled print",
    "Impossible de recalculer le coût partiel de l’impression annulée",
    "Die Teilkosten des abgebrochenen Drucks konnten nicht neu berechnet werden",
    "Impossibile ricalcolare il costo parziale della stampa annullata",
    "Nie udało się ponownie obliczyć częściowego kosztu anulowanego wydruku"
  ],
  "El trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.": [
    "This job is already recorded as {previous}. Do you want to change it to {next}? Previous entries for this G-code will be replaced.",
    "Ce travail est déjà enregistré comme {previous}. Voulez-vous le remplacer par {next} ? Les entrées précédentes de ce G-code seront remplacées.",
    "Dieser Auftrag ist bereits als {previous} erfasst. Möchten Sie ihn in {next} ändern? Frühere Einträge für diesen G-Code werden ersetzt.",
    "Questo lavoro è già registrato come {previous}. Vuoi cambiarlo in {next}? Le voci precedenti di questo G-code verranno sostituite.",
    "To zadanie jest już zapisane jako {previous}. Czy chcesz zmienić je na {next}? Poprzednie wpisy dla tego G-code zostaną zastąpione."
  ],
  "El trabajo ya está registrado.": [
    "This job is already recorded.",
    "Ce travail est déjà enregistré.",
    "Dieser Auftrag ist bereits erfasst.",
    "Questo lavoro è già registrato.",
    "To zadanie jest już zarejestrowane."
  ],
  "Coste": [
    "Cost",
    "Coût",
    "Kosten",
    "Costo",
    "Koszt"
  ],
  "Finalizada": [
    "Completed",
    "Terminée",
    "Abgeschlossen",
    "Completata",
    "Zakończona"
  ],
  "Provisional": [
    "Provisional",
    "Provisoire",
    "Vorläufig",
    "Provvisoria",
    "Tymczasowa"
  ],
  "Preferencias guardadas.": [
    "Preferences saved.",
    "Préférences enregistrées.",
    "Einstellungen gespeichert.",
    "Preferenze salvate.",
    "Zapisano preferencje."
  ],
  "Tema de la aplicación": [
    "Application theme",
    "Thème de l’application",
    "App-Design",
    "Tema dell’applicazione",
    "Motyw aplikacji"
  ],
  "Configuración de conexión de la impresora": [
    "Printer connection settings",
    "Paramètres de connexion de l’imprimante",
    "Druckerverbindungseinstellungen",
    "Impostazioni di connessione della stampante",
    "Ustawienia połączenia drukarki"
  ],
  "Dirección del puente local": [
    "Local bridge address",
    "Adresse du pont local",
    "Adresse der lokalen Bridge",
    "Indirizzo del bridge locale",
    "Adres lokalnego mostu"
  ],
  "Permite ventanas emergentes para exportar a PDF.": [
    "Allow pop-ups to export to PDF.",
    "Autorisez les fenêtres contextuelles pour exporter en PDF.",
    "Erlauben Sie Pop-ups, um als PDF zu exportieren.",
    "Consenti i popup per esportare in PDF.",
    "Zezwól na wyskakujące okna, aby eksportować do PDF."
  ],
  "Bobina aplicada al material. Los gramos del G-code se mantienen.": [
    "Spool applied to the material. G-code grams remain unchanged.",
    "Bobine appliquée au matériau. Les grammes du G-code restent inchangés.",
    "Spule dem Material zugewiesen. Die G-Code-Grammzahl bleibt unverändert.",
    "Bobina applicata al materiale. I grammi del G-code restano invariati.",
    "Szpula przypisana do materiału. Gramatura z G-code pozostaje bez zmian."
  ],
  "Datos recibidos directamente del postprocesado de Snapmaker Orca.": [
    "Data received directly from Snapmaker Orca post-processing.",
    "Données reçues directement du post-traitement de Snapmaker Orca.",
    "Daten direkt aus der Nachbearbeitung von Snapmaker Orca empfangen.",
    "Dati ricevuti direttamente dal post-processing di Snapmaker Orca.",
    "Dane otrzymane bezpośrednio z postprocessingu Snapmaker Orca."
  ],
  "Escenario duplicado. Cambia el precio de venta y guarda el resultado.": [
    "Scenario duplicated. Change the sale price and save the result.",
    "Scénario dupliqué. Modifiez le prix de vente et enregistrez le résultat.",
    "Szenario dupliziert. Ändern Sie den Verkaufspreis und speichern Sie das Ergebnis.",
    "Scenario duplicato. Modifica il prezzo di vendita e salva il risultato.",
    "Scenariusz został skopiowany. Zmień cenę sprzedaży i zapisz wynik."
  ],
  "Presupuesto individual exportado a CSV.": [
    "Individual quote exported to CSV.",
    "Devis individuel exporté au format CSV.",
    "Einzelangebot als CSV exportiert.",
    "Preventivo singolo esportato in CSV.",
    "Pojedyncza oferta wyeksportowana do CSV."
  ],
  "Resumen copiado al portapapeles.": [
    "Summary copied to clipboard.",
    "Résumé copié dans le presse-papiers.",
    "Zusammenfassung in die Zwischenablage kopiert.",
    "Riepilogo copiato negli appunti.",
    "Podsumowanie skopiowano do schowka."
  ],
  "Cliente borrado.": [
    "Customer deleted.",
    "Client supprimé.",
    "Kunde gelöscht.",
    "Cliente eliminato.",
    "Klient został usunięty."
  ],
  "Selecciona un archivo de imagen.": [
    "Select an image file.",
    "Sélectionnez un fichier image.",
    "Wählen Sie eine Bilddatei aus.",
    "Seleziona un file immagine.",
    "Wybierz plik obrazu."
  ],
  "No se pudo cargar la imagen.": [
    "Could not load the image.",
    "Impossible de charger l’image.",
    "Das Bild konnte nicht geladen werden.",
    "Impossibile caricare l’immagine.",
    "Nie udało się wczytać obrazu."
  ],
  "Selecciona un cliente guardado o créalo desde la pestaña Clientes antes de guardar el pedido.": [
    "Select a saved customer or create one from the Customers tab before saving the order.",
    "Sélectionnez un client enregistré ou créez-en un depuis l’onglet Clients avant d’enregistrer la commande.",
    "Wählen Sie vor dem Speichern des Auftrags einen gespeicherten Kunden aus oder erstellen Sie einen im Tab „Kunden“.",
    "Seleziona un cliente salvato o creane uno dalla scheda Clienti prima di salvare l’ordine.",
    "Przed zapisaniem zamówienia wybierz zapisanego klienta lub utwórz go na karcie Klienci."
  ],
  "Pedido guardado en este navegador.": [
    "Order saved in this browser.",
    "Commande enregistrée dans ce navigateur.",
    "Auftrag in diesem Browser gespeichert.",
    "Ordine salvato in questo browser.",
    "Zamówienie zapisano w tej przeglądarce."
  ],
  "Color personalizado guardado.": [
    "Custom color saved.",
    "Couleur personnalisée enregistrée.",
    "Benutzerdefinierte Farbe gespeichert.",
    "Colore personalizzato salvato.",
    "Zapisano niestandardowy kolor."
  ],
  "No se pudo conectar: {message}. Verifica que el puente esté iniciado y la IP configurada.": [
    "Could not connect: {message}. Make sure the bridge is running and the IP address is configured.",
    "Connexion impossible : {message}. Vérifiez que le pont est démarré et que l’adresse IP est configurée.",
    "Verbindung fehlgeschlagen: {message}. Prüfen Sie, ob die Bridge läuft und die IP-Adresse konfiguriert ist.",
    "Impossibile connettersi: {message}. Verifica che il bridge sia avviato e che l’indirizzo IP sia configurato.",
    "Nie można się połączyć: {message}. Sprawdź, czy most działa i czy skonfigurowano adres IP."
  ],
  "Preparando lectura completa del G-code… {percent}%": [
    "Preparing full G-code read… {percent}%",
    "Préparation de la lecture complète du G-code… {percent}%",
    "Vollständiges Einlesen des G-Codes wird vorbereitet… {percent}%",
    "Preparazione della lettura completa del G-code… {percent}%",
    "Przygotowywanie pełnego odczytu G-code… {percent}%"
  ],
  "Nie znaleziono drukarki.": [
    "Printer not found.",
    "Imprimante introuvable.",
    "Drucker nicht gefunden.",
    "Stampante non trovata.",
    "Nie znaleziono drukarki."
  ],
  "Nie udało się odczytać SQLite": [
    "Could not read SQLite",
    "Impossible de lire SQLite",
    "SQLite konnte nicht gelesen werden",
    "Impossibile leggere SQLite",
    "Nie udało się odczytać bazy SQLite."
  ],
  "Nie udało się zapisać listy w SQLite": [
    "Could not save the list to SQLite",
    "Impossible d’enregistrer la liste dans SQLite",
    "Die Liste konnte nicht in SQLite gespeichert werden",
    "Impossibile salvare l’elenco in SQLite",
    "Nie udało się zapisać listy w bazie SQLite."
  ],
  "Nie udało się wybrać drukarki: {message}": [
    "Could not select the printer: {message}",
    "Impossible de sélectionner l’imprimante : {message}",
    "Drucker konnte nicht ausgewählt werden: {message}",
    "Impossibile selezionare la stampante: {message}",
    "Nie udało się wybrać drukarki: {message}"
  ],
  "Guardar preferencias": [
    "Save preferences",
    "Enregistrer les préférences",
    "Einstellungen speichern",
    "Salva preferenze",
    "Zapisz preferencje"
  ],
  "Leyendo G-code": [
    "Reading G-code",
    "Lecture du G-code",
    "G-Code wird gelesen",
    "Lettura del G-code",
    "Odczytywanie G-code"
  ],
  "datos de hace": [
    "data from",
    "données datant de",
    "Daten von vor",
    "dati di",
    "dane sprzed"
  ],
  "Anterior": [
    "Previous",
    "Précédent",
    "Zurück",
    "Precedente",
    "Poprzednia"
  ],
  "Siguiente": [
    "Next",
    "Suivant",
    "Weiter",
    "Successivo",
    "Następna"
  ],
  "Página": [
    "Page",
    "Page",
    "Seite",
    "Pagina",
    "Strona"
  ],
  "movimientos": [
    "entries",
    "opérations",
    "Einträge",
    "movimenti",
    "wpisów"
  ],
  "Consolidado general": [
    "Overall total",
    "Total général",
    "Gesamtübersicht",
    "Totale complessivo",
    "Zestawienie ogólne"
  ],
  "Desgaste y amortización": [
    "Wear and depreciation",
    "Usure et amortissement",
    "Verschleiß und Abschreibung",
    "Usura e ammortamento",
    "Zużycie i amortyzacja"
  ],
  "DESGLOSE": [
    "BREAKDOWN",
    "DÉTAIL",
    "AUFSCHLÜSSELUNG",
    "DETTAGLIO",
    "PODSUMOWANIE"
  ],
  "provisional": [
    "provisional",
    "provisoire",
    "vorläufig",
    "provvisorio",
    "tymczasowe"
  ],
  "finalizada": [
    "completed",
    "terminée",
    "abgeschlossen",
    "completata",
    "zakończona"
  ],
  "impresión en curso (provisional)": [
    "print in progress (provisional)",
    "impression en cours (provisoire)",
    "Druck läuft (vorläufig)",
    "stampa in corso (provvisoria)",
    "drukowanie w toku (tymczasowe)"
  ],
  "impresión finalizada": [
    "print completed",
    "impression terminée",
    "Druck abgeschlossen",
    "stampa completata",
    "drukowanie zakończone"
  ],
  "detectado del nombre del archivo": [
    "detected from filename",
    "détecté à partir du nom de fichier",
    "aus dem Dateinamen erkannt",
    "rilevato dal nome del file",
    "wykryto na podstawie nazwy pliku"
  ],
  "tomado del campo de tiempo de Inicio": [
    "from the Home time field",
    "repris du champ de temps de l’accueil",
    "aus dem Zeitfeld auf der Startseite",
    "dal campo tempo della Home",
    "pobrano z pola czasu na ekranie głównym"
  ],
  "Venta": [
    "Sale",
    "Vente",
    "Verkauf",
    "Vendita",
    "Sprzedaż"
  ],
  "¿Registrar como gasto propio o como venta?": [
    "Record as own expense or sale?",
    "Enregistrer comme dépense propre ou vente ?",
    "Als eigene Ausgabe oder Verkauf erfassen?",
    "Registrare come spesa propria o vendita?",
    "Zarejestrować jako wydatek własny czy sprzedaż?"
  ],
  "Registrar pedido": [
    "Register order",
    "Enregistrer la commande",
    "Auftrag erfassen",
    "Registra ordine",
    "Zarejestruj zamówienie"
  ],
  "Registrar como gasto personal": [
    "Record as personal expense",
    "Enregistrer comme dépense personnelle",
    "Als private Ausgabe erfassen",
    "Registra come spesa personale",
    "Zarejestruj jako wydatek osobisty"
  ],
  "Desglose del coste de fabricación": [
    "Manufacturing cost breakdown",
    "Détail du coût de fabrication",
    "Aufschlüsselung der Herstellungskosten",
    "Dettaglio del costo di produzione",
    "Zestawienie kosztów wytworzenia"
  ],
  "Reserva para fallos": [
    "Failure allowance",
    "Provision pour échecs",
    "Fehlerreserve",
    "Riserva per errori",
    "Rezerwa na nieudane wydruki"
  ],
  "Resumen de venta": [
    "Sale summary",
    "Récapitulatif de vente",
    "Verkaufsübersicht",
    "Riepilogo vendita",
    "Podsumowanie sprzedaży"
  ],
  "Precio configurado por unidad": [
    "Configured price per unit",
    "Prix configuré par unité",
    "Eingestellter Stückpreis",
    "Prezzo configurato per unità",
    "Ustawiona cena za sztukę"
  ],
  "Perfil fiscal": [
    "Tax profile",
    "Profil fiscal",
    "Steuerprofil",
    "Profilo fiscale",
    "Profil podatkowy"
  ],
  "Objetivo de beneficio": [
    "Profit target",
    "Objectif de bénéfice",
    "Gewinnziel",
    "Obiettivo di profitto",
    "Docelowy zysk"
  ],
  "mínimo": [
    "minimum",
    "minimum",
    "Mindestbetrag",
    "minimo",
    "minimum"
  ],
  "Base sin impuestos": [
    "Subtotal before tax",
    "Montant hors taxes",
    "Nettobetrag",
    "Importo al netto delle imposte",
    "Kwota netto"
  ],
  "Comisión": [
    "Commission",
    "Commission",
    "Provision",
    "Commissione",
    "Prowizja"
  ],
  "Total a cobrar al cliente": [
    "Total to charge the customer",
    "Total à facturer au client",
    "Vom Kunden zu zahlender Gesamtbetrag",
    "Totale da addebitare al cliente",
    "Łączna kwota do zapłaty przez klienta"
  ],
  "Coste total de fabricación": [
    "Total manufacturing cost",
    "Coût total de fabrication",
    "Herstellungskosten gesamt",
    "Costo totale di produzione",
    "Całkowity koszt wytworzenia"
  ],
  "Registrar gasto": [
    "Record expense",
    "Enregistrer la dépense",
    "Ausgabe erfassen",
    "Registra spesa",
    "Zarejestruj wydatek"
  ],
  "Coste de fabricación": [
    "Manufacturing cost",
    "Coût de fabrication",
    "Herstellungskosten",
    "Costo di produzione",
    "Koszt wytworzenia"
  ],
  "Usar otra bobina": [
    "Use another spool",
    "Utiliser une autre bobine",
    "Andere Spule verwenden",
    "Usa un’altra bobina",
    "Użyj innej szpuli"
  ],
  "Bobinas alternativas por material y color similar": [
    "Alternative spools with matching material and similar colour",
    "Bobines alternatives avec matériau identique et couleur similaire",
    "Alternative Spulen mit gleichem Material und ähnlicher Farbe",
    "Bobine alternative con materiale uguale e colore simile",
    "Alternatywne szpule o zgodnym materiale i podobnym kolorze"
  ],
  "asignación(es) correctas": [
    "valid assignment(s)",
    "affectation(s) valide(s)",
    "gültige Zuordnung(en)",
    "assegnazione(i) valida(e)",
    "prawidłowe przypisanie(a)"
  ],
  "No se pudo registrar como personal: ": [
    "Could not register as a personal expense: ",
    "Impossible d’enregistrer comme dépense personnelle : ",
    "Konnte nicht als private Ausgabe erfasst werden: ",
    "Impossibile registrare come spesa personale: ",
    "Nie udało się zarejestrować jako wydatek własny: "
  ],
  "No se pudo registrar como pedido: ": [
    "Could not register as an order: ",
    "Impossible d’enregistrer comme commande : ",
    "Konnte nicht als Auftrag erfasst werden: ",
    "Impossibile registrare come ordine: ",
    "Nie udało się zarejestrować jako zamówienie: "
  ],
  "Descargar CSV": [
    "Download CSV",
    "Télécharger CSV",
    "CSV herunterladen",
    "Scarica CSV",
    "Pobierz CSV"
  ],
  "Descargar PDF": [
    "Download PDF",
    "Télécharger PDF",
    "PDF herunterladen",
    "Scarica PDF",
    "Pobierz PDF"
  ],
  "Selecciona primero una impresora o introduce su IP.": [
    "Select a printer first or enter its IP address.",
    "Sélectionnez d’abord une imprimante ou saisissez son adresse IP.",
    "Wählen Sie zuerst einen Drucker aus oder geben Sie seine IP-Adresse ein.",
    "Seleziona prima una stampante o inserisci il suo indirizzo IP.",
    "Najpierw wybierz drukarkę lub wpisz jej adres IP."
  ],
  "Filamento (sin peso detectado)": [
    "Filament (no weight detected)",
    "Filament (poids non détecté)",
    "Filament (kein Gewicht erkannt)",
    "Filamento (peso non rilevato)",
    "Filament (nie wykryto masy)"
  ],
  "Datos del vendedor guardados.": [
    "Seller details saved.",
    "Coordonnées du vendeur enregistrées.",
    "Verkäuferdaten gespeichert.",
    "Dati del venditore salvati.",
    "Zapisano dane sprzedawcy."
  ],
  "Presupuesto cargado.": [
    "Quote loaded.",
    "Devis chargé.",
    "Angebot geladen.",
    "Preventivo caricato.",
    "Wczytano ofertę."
  ],
  "Factura ": [
    "Invoice ",
    "Facture ",
    "Rechnung ",
    "Fattura ",
    "Faktura "
  ],
  "Precio recomendado ": [
    "Recommended price ",
    "Prix recommandé ",
    "Empfohlener Preis ",
    "Prezzo consigliato ",
    "Zalecana cena "
  ],
  "No se descontó ninguna bobina: el stock combinado de las bobinas compatibles no cubre todo el consumo. ": [
    "No spool was deducted: the combined stock of compatible spools does not cover the full usage. ",
    "Aucune bobine n’a été déduite : le stock cumulé des bobines compatibles ne couvre pas toute la consommation. ",
    "Es wurde keine Spule abgezogen: Der Gesamtbestand kompatibler Spulen reicht für den gesamten Verbrauch nicht aus. ",
    "Non è stata scalata alcuna bobina: la giacenza complessiva delle bobine compatibili non copre tutto il consumo. ",
    "Nie odjęto żadnej szpuli: łączny zapas zgodnych szpul nie pokrywa całego zużycia. "
  ],
  ". Añade stock o revisa las asignaciones y vuelve a comprobar el trabajo.": [
    ". Add stock or review the assignments and check the job again.",
    ". Ajoutez du stock ou vérifiez les affectations, puis contrôlez à nouveau le travail.",
    ". Fügen Sie Bestand hinzu oder prüfen Sie die Zuordnungen und kontrollieren Sie den Auftrag erneut.",
    ". Aggiungi scorte o controlla le assegnazioni e verifica di nuovo il lavoro.",
    ". Uzupełnij zapas lub sprawdź przypisania, a następnie ponownie zweryfikuj zadanie."
  ],
  "Descuento aplicado (estimación del G-code): ": [
    "Deduction applied (G-code estimate): ",
    "Déduction appliquée (estimation du G-code) : ",
    "Abzug angewendet (G-Code-Schätzung): ",
    "Scarico applicato (stima del G-code): ",
    "Zastosowano odjęcie (szacunek z G-code): "
  ],
  " · impresión finalizada": [
    " · print completed",
    " · impression terminée",
    " · Druck abgeschlossen",
    " · stampa completata",
    " · drukowanie zakończone"
  ],
  " · impresión en curso (provisional)": [
    " · print in progress (provisional)",
    " · impression en cours (provisoire)",
    " · Druck läuft (vorläufig)",
    " · stampa in corso (provvisoria)",
    " · drukowanie w toku (tymczasowe)"
  ],
  "impresión cancelada · coste parcial": [
    "print cancelled · partial cost",
    "impression annulée · coût partiel",
    "Druck abgebrochen · Teilkosten",
    "stampa annullata · costo parziale",
    "drukowanie anulowane · koszt częściowy"
  ],
  "Comisión estimada · ": [
    "Estimated commission · ",
    "Commission estimée · ",
    "Geschätzte Provision · ",
    "Commissione stimata · ",
    "Szacowana prowizja · "
  ],
  "Comisión del punto 04 · ": [
    "Section 04 commission · ",
    "Commission de la section 04 · ",
    "Provision aus Abschnitt 04 · ",
    "Commissione della sezione 04 · ",
    "Prowizja z sekcji 04 · "
  ],
  "Este trabajo ya está registrado como ": [
    "This job is already registered as ",
    "Ce travail est déjà enregistré comme ",
    "Dieser Auftrag ist bereits registriert als ",
    "Questo lavoro è già registrato come ",
    "To zadanie jest już zarejestrowane jako "
  ],
  ". ¿Quieres cambiarlo a ": [
    ". Do you want to change it to ",
    "Voulez-vous le remplacer par ",
    ". Möchten Sie es ändern in ",
    "Vuoi cambiarlo in ",
    "Czy chcesz zmienić na "
  ],
  "? Se sustituirán las entradas anteriores de este G-code.": [
    "? The previous entries for this G-code will be replaced.",
    "? Les entrées précédentes de ce G-code seront remplacées.",
    "? Die bisherigen Einträge für diesen G-Code werden ersetzt.",
    "? Le voci precedenti di questo G-code verranno sostituite.",
    "? Poprzednie wpisy dla tego G-code zostaną zastąpione."
  ],
  "% o mínimo ": [
    "% or minimum ",
    "% ou minimum ",
    "% oder mindestens ",
    "% o minimo ",
    "% lub minimum "
  ],
  "Descripción de la pieza": [
    "Part description",
    "Description de la pièce",
    "Bauteilbeschreibung",
    "Descrizione del pezzo",
    "Opis części"
  ],
  "Nombre o descripción de la pieza": [
    "Part name or description",
    "Nom ou description de la pièce",
    "Name oder Beschreibung des Bauteils",
    "Nome o descrizione del pezzo",
    "Nazwa lub opis części"
  ],
  " · Envío: ": [
    " · Shipping: ",
    " · Livraison : ",
    " · Versand: ",
    " · Spedizione: ",
    " · Wysyłka: "
  ],
  "Te envío ": [
    "I’m sending you ",
    "Je vous envoie ",
    "Ich sende Ihnen ",
    "Ti invio ",
    "Wysyłam "
  ],
  " línea(s) adicional(es)": [
    " additional line(s)",
    " ligne(s) supplémentaire(s)",
    " zusätzliche Zeile(n)",
    " riga/e aggiuntiva/e",
    " dodatkowa(e) pozycja(e)"
  ],
  "Dato oficial: 127,4 W medios en impresión PLA de cuatro colores; mantenimiento no verificado. Amortización calculada con precio de referencia y vida útil editable.": [
    "Official figure: 127.4 W average for four-colour PLA printing; maintenance not verified. Depreciation is calculated using a reference price and editable service life.",
    "Donnée officielle : 127,4 W en moyenne pour une impression PLA à quatre couleurs ; entretien non vérifié. L’amortissement est calculé à partir d’un prix de référence et d’une durée de vie modifiable.",
    "Offizieller Wert: durchschnittlich 127,4 W beim vierfarbigen PLA-Druck; Wartung nicht verifiziert. Die Abschreibung wird anhand eines Referenzpreises und einer anpassbaren Lebensdauer berechnet.",
    "Dato ufficiale: 127,4 W medi per la stampa PLA a quattro colori; manutenzione non verificata. L’ammortamento è calcolato con un prezzo di riferimento e una vita utile modificabile.",
    "Oficjalna wartość: średnio 127,4 W podczas druku PLA w czterech kolorach; konserwacja niezweryfikowana. Amortyzacja jest obliczana na podstawie ceny referencyjnej i edytowalnej żywotności."
  ],
  "Amortización calculada: ": [
    "Calculated depreciation: ",
    "Amortissement calculé : ",
    "Berechnete Abschreibung: ",
    "Ammortamento calcolato: ",
    "Obliczona amortyzacja: "
  ],
  " · El precio está en EUR: convierte el importe a ": [
    " · The price is in EUR: convert the amount to ",
    " · Le prix est en EUR : convertissez le montant en ",
    " · Der Preis ist in EUR: Rechnen Sie den Betrag um in ",
    " · Il prezzo è in EUR: converti l’importo in ",
    " · Cena jest w EUR: przelicz kwotę na "
  ],
  "No se pudo activar el almacenamiento externo. No continúes editando en esta ventana. ": [
    "Could not activate external storage. Do not continue editing in this window. ",
    "Impossible d’activer le stockage externe. Ne continuez pas à modifier les données dans cette fenêtre. ",
    "Der externe Speicher konnte nicht aktiviert werden. Bearbeiten Sie die Daten in diesem Fenster nicht weiter. ",
    "Impossibile attivare l’archiviazione esterna. Non continuare a modificare i dati in questa finestra. ",
    "Nie udało się włączyć pamięci zewnętrznej. Nie kontynuuj edycji w tym oknie. "
  ],
  "Secciones de la aplicación": [
    "Application sections",
    "Sections de l’application",
    "Anwendungsbereiche",
    "Sezioni dell’applicazione",
    "Sekcje aplikacji"
  ],
  "Ej. orientación, soportes, acabado, incidencias...": [
    "E.g. orientation, supports, finish, issues...",
    "Ex. orientation, supports, finition, incidents…",
    "Z. B. Ausrichtung, Stützen, Oberfläche, Probleme…",
    "Es. orientamento, supporti, finitura, problemi…",
    "Np. orientacja, podpory, wykończenie, problemy…"
  ],
  "Colores básicos": [
    "Basic colours",
    "Couleurs de base",
    "Grundfarben",
    "Colori di base",
    "Kolory podstawowe"
  ],
  "Tasación guardada correctamente. Puedes cargarla desde el historial.": [
    "Estimate saved successfully. You can load it from the history.",
    "Estimation enregistrée. Vous pouvez la charger depuis l’historique.",
    "Kalkulation erfolgreich gespeichert. Sie können sie aus dem Verlauf laden.",
    "Stima salvata correttamente. Puoi caricarla dalla cronologia.",
    "Wycena została zapisana. Możesz ją wczytać z historii."
  ],
  "Continuar": [
    "Continue",
    "Continuer",
    "Fortfahren",
    "Continua",
    "Kontynuuj"
  ],
  "Conexión con impresora": [
    "Printer connection",
    "Connexion à l’imprimante",
    "Druckerverbindung",
    "Connessione alla stampante",
    "Połączenie z drukarką"
  ],
  "Mostrar monitor Snapmaker U1": [
    "Show Snapmaker U1 monitor",
    "Afficher le moniteur Snapmaker U1",
    "Snapmaker-U1-Monitor anzeigen",
    "Mostra monitor Snapmaker U1",
    "Pokaż monitor Snapmaker U1"
  ],
  "Base de datos y copias de seguridad": [
    "Database and backups",
    "Base de données et sauvegardes",
    "Datenbank und Sicherungen",
    "Database e backup",
    "Baza danych i kopie zapasowe"
  ],
  "Vista previa de la pieza": [
    "Part preview",
    "Aperçu de la pièce",
    "Teilevorschau",
    "Anteprima del pezzo",
    "Podgląd części"
  ],
  "Nombre, correo o teléfono": [
    "Name, email or phone",
    "Nom, e-mail ou téléphone",
    "Name, E-Mail oder Telefonnummer",
    "Nome, e-mail o telefono",
    "Imię/nazwa, e-mail lub telefon"
  ],
  "Ej.: U1 taller, U1 principal…": [
    "E.g. workshop U1, main U1…",
    "Ex. : U1 atelier, U1 principale…",
    "Z. B. U1 Werkstatt, U1 Hauptdrucker…",
    "Es.: U1 officina, U1 principale…",
    "Np. U1 warsztatowa, U1 główna…"
  ],
  "No se pudieron importar los datos de integración: {message}": [
    "Could not import integration data: {message}",
    "Impossible d’importer les données d’intégration : {message}",
    "Integrationsdaten konnten nicht importiert werden: {message}",
    "Impossibile importare i dati di integrazione: {message}",
    "Nie udało się zaimportować danych integracji: {message}"
  ],
  "Pedidos abierto. Selecciona un cliente o créalo con el formulario de la pestaña Clientes antes de guardar.": [
    "Orders opened. Select a customer or create one using the form in the Customers tab before saving.",
    "Commandes ouvertes. Sélectionnez un client ou créez-le avec le formulaire de l’onglet Clients avant d’enregistrer.",
    "Aufträge geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder legen Sie ihn über das Formular im Tab „Kunden“ an.",
    "Ordini aperti. Seleziona un cliente o creane uno con il modulo nella scheda Clienti prima di salvare.",
    "Otwarto Zamówienia. Przed zapisaniem wybierz klienta lub utwórz go za pomocą formularza na karcie Klienci."
  ],
  "Tasación cargada para preparar el presupuesto. Revisa los datos del cliente y guarda/imprime el presupuesto.": [
    "Estimate loaded to prepare the quote. Check the customer details and save/print the quote.",
    "Estimation chargée pour préparer le devis. Vérifiez les données du client puis enregistrez/imprimez le devis.",
    "Kalkulation zur Angebotserstellung geladen. Prüfen Sie die Kundendaten und speichern/drucken Sie das Angebot.",
    "Stima caricata per preparare il preventivo. Controlla i dati del cliente e salva/stampa il preventivo.",
    "Wczytano wycenę do przygotowania oferty. Sprawdź dane klienta i zapisz/wydrukuj ofertę."
  ],
  "Tasación cargada para preparar la factura. Completa o confirma los datos del cliente.": [
    "Estimate loaded to prepare the invoice. Complete or confirm the customer details.",
    "Estimation chargée pour préparer la facture. Complétez ou confirmez les données du client.",
    "Kalkulation zur Rechnungserstellung geladen. Ergänzen oder bestätigen Sie die Kundendaten.",
    "Stima caricata per preparare la fattura. Completa o conferma i dati del cliente.",
    "Wczytano wycenę do przygotowania faktury. Uzupełnij lub potwierdź dane klienta."
  ],
  "Al cargar el G-code se detectan automáticamente material, color y peso. Si coincide exactamente una bobina en stock, se selecciona; si no, se crea un filamento genérico con el color del laminador.": [
    "When G-code is loaded, material, colour, and weight are detected automatically. If exactly one spool in stock matches, it is selected; otherwise, a generic filament is created using the slicer colour.",
    "Au chargement du G-code, le matériau, la couleur et le poids sont détectés automatiquement. Si une seule bobine en stock correspond, elle est sélectionnée ; sinon, un filament générique est créé avec la couleur du slicer.",
    "Beim Laden des G-Codes werden Material, Farbe und Gewicht automatisch erkannt. Passt genau eine Lager-Spule, wird sie ausgewählt; andernfalls wird ein generisches Filament mit der Slicer-Farbe angelegt.",
    "Al caricamento del G-code vengono rilevati automaticamente materiale, colore e peso. Se corrisponde esattamente una bobina disponibile, viene selezionata; altrimenti viene creato un filamento generico con il colore dello slicer.",
    "Po wczytaniu G-code materiał, kolor i masa są wykrywane automatycznie. Jeśli pasuje dokładnie jedna dostępna szpula, zostanie wybrana; w przeciwnym razie zostanie utworzony ogólny filament w kolorze z programu tnącego."
  ],
  "Precio recomendado {recommended} + suplemento {extra} = {total}. Aplicado al cálculo principal.": [
    "Recommended price {recommended} + surcharge {extra} = {total}. Applied to the main calculation.",
    "Prix conseillé {recommended} + supplément {extra} = {total}. Appliqué au calcul principal.",
    "Empfohlener Preis {recommended} + Aufschlag {extra} = {total}. Auf die Hauptberechnung angewendet.",
    "Prezzo consigliato {recommended} + supplemento {extra} = {total}. Applicato al calcolo principale.",
    "Zalecana cena {recommended} + dopłata {extra} = {total}. Zastosowano do głównej kalkulacji."
  ],
  "{printer}: valores de referencia cargados. Ajusta consumo y costes según tu uso real.": [
    "{printer}: reference values loaded. Adjust power use and costs to match your actual use.",
    "{printer} : valeurs de référence chargées. Ajustez la consommation et les coûts selon votre utilisation réelle.",
    "{printer}: Referenzwerte geladen. Passen Sie Verbrauch und Kosten an die tatsächliche Nutzung an.",
    "{printer}: valori di riferimento caricati. Regola consumi e costi in base all’uso reale.",
    "{printer}: wczytano wartości referencyjne. Dostosuj zużycie i koszty do rzeczywistego użytkowania."
  ],
  "No se pudo registrar como personal: {message}": [
    "Could not register as a personal print: {message}",
    "Impossible d’enregistrer comme impression personnelle : {message}",
    "Registrierung als persönlicher Druck fehlgeschlagen: {message}",
    "Impossibile registrare come stampa personale: {message}",
    "Nie udało się zarejestrować jako wydruk prywatny: {message}"
  ],
  "No se pudo registrar como pedido: {message}": [
    "Could not register as an order: {message}",
    "Impossible d’enregistrer comme commande : {message}",
    "Registrierung als Auftrag fehlgeschlagen: {message}",
    "Impossibile registrare come ordine: {message}",
    "Nie udało się zarejestrować jako zamówienie: {message}"
  ],
  "{printer} · cancelada · progreso estimado {progress}% · {hours} h · DESGLOSE: Filamento {filament} €; electricidad {electricity} €; desgaste {wear} €; mantenimiento/recambios {maintenance} €; mano de obra y extras {labor} €; reserva fallos {reserve} €. Coste parcial estimado hasta la cancelación; sin venta ni beneficio.": [
    "{printer} · cancelled · estimated progress {progress}% · {hours} h · BREAKDOWN: Filament {filament} €; electricity {electricity} €; wear {wear} €; maintenance/parts {maintenance} €; labor and extras {labor} €; failure reserve {reserve} €. Estimated partial cost up to cancellation; no sale or profit.",
    "{printer} · annulée · progression estimée {progress}% · {hours} h · DÉTAIL : filament {filament} € ; électricité {electricity} € ; usure {wear} € ; entretien/pièces {maintenance} € ; main-d’œuvre et extras {labor} € ; réserve pour pannes {reserve} €. Coût partiel estimé jusqu’à l’annulation ; aucune vente ni aucun bénéfice.",
    "{printer} · abgebrochen · geschätzter Fortschritt {progress}% · {hours} h · AUFSCHLÜSSELUNG: Filament {filament} €; Strom {electricity} €; Verschleiß {wear} €; Wartung/Ersatzteile {maintenance} €; Arbeitskosten und Extras {labor} €; Rücklage für Fehldrucke {reserve} €. Geschätzte Teilkosten bis zum Abbruch; kein Verkauf und kein Gewinn.",
    "{printer} · annullata · avanzamento stimato {progress}% · {hours} h · DETTAGLIO: filamento {filament} €; elettricità {electricity} €; usura {wear} €; manutenzione/ricambi {maintenance} €; manodopera ed extra {labor} €; riserva guasti {reserve} €. Costo parziale stimato fino all’annullamento; nessuna vendita né profitto.",
    "{printer} · anulowano · szacowany postęp {progress}% · {hours} h · ZESTAWIENIE: filament {filament} €; energia elektryczna {electricity} €; zużycie {wear} €; konserwacja/części zamienne {maintenance} €; robocizna i dodatki {labor} €; rezerwa na awarie {reserve} €. Szacunkowy koszt częściowy do momentu anulowania; bez sprzedaży i zysku."
  ],
};

const langs={es:'Español',en:'English',fr:'Français',de:'Deutsch',it:'Italiano',pl:'Polski'};const locales={es:'es-ES',en:'en-GB',fr:'fr-FR',de:'de-DE',it:'it-IT',pl:'pl-PL',
'Copiar resumen':["Copy summary","Copier le résumé","Zusammenfassung kopieren","Copia riepilogo","Kopiuj podsumowanie"],
'Nuevo cálculo':["New calculation","Nouveau calcul","Neue Berechnung","Nuovo calcolo","Nowe obliczenie"],
'Quitar imagen':["Remove image","Supprimer l’image","Bild entfernen","Rimuovi immagine","Usuń image"],
'＋ Añadir color/material':["＋ Add colour/material","＋ Ajouter couleur/matériau","＋ Farbe/Material hinzufügen","＋ Aggiungi colore/materiale","＋ Dodaj colour/Materiał"],
'▣ Guardar tasación':["▣ Save estimate","▣ Enregistrer l’estimation","▣ Kalkulation speichern","▣ Salva stima","▣ Zapisz Wycena"],
'▤ Guardar presupuesto':["▤ Save quote","▤ Enregistrer le devis","▤ Angebot speichern","▤ Salva preventivo","▤ Zapisz Oferta"],
'✓ Calcular precio final':["✓ Calculate final price","✓ Calculer le prix final","✓ Endpreis berechnen","✓ Calcola prezzo finale","✓ Calculate final Cena"],
'📦 Realizar pedido':["📦 Place order","📦 Passer commande","📦 Bestellung aufgeben","📦 Effettua ordine","📦 Place Zamówienie"],
'Estimar coste esperado':["Estimate expected cost","Estimer le coût prévu","Erwartete Kosten schätzen","Stima costo previsto","Wycena expected Koszt"],
'Usar precio A':["Use price A","Utiliser le prix A","Preis A verwenden","Usa prezzo A","Use Cena A"],
'Usar precio B':["Use price B","Utiliser le prix B","Preis B verwenden","Usa prezzo B","Use Cena B"],
'Usar precio C':["Use price C","Utiliser le prix C","Preis C verwenden","Usa prezzo C","Use Cena C"],
'Comparar seleccionadas (2)':["Compare selected (2)","Comparer la sélection (2)","Ausgewählte vergleichen (2)","Confronta selezionati (2)","Porównaj wybrane (2)"],
'Limpiar selección':["Clear selection","Effacer la sélection","Auswahl aufheben","Cancella selezione","Wyczyść wybór"],
'Borrar historial':["Clear history","Effacer l’historique","Verlauf löschen","Cancella cronologia","Wyczyść historię"],
'Guardar perfil':["Save profile","Enregistrer le profil","Profil speichern","Salva profilo","Zapisz profile"],
'Exportar perfiles CSV':["Export profiles CSV","Exporter les profils CSV","Profile als CSV exportieren","Esporta profili CSV","eksportuj profiles CSV"],
'Buscar':["Search","Rechercher","Suchen","Cerca","Szukaj"],
'＋ Cliente nuevo':["＋ New customer","＋ Nouveau client","＋ Neuer Kunde","＋ Nuovo cliente","＋ nowy Klient"],
'Limpiar campos':["Clear fields","Effacer les champs","Felder leeren","Pulisci campi","Wyczyść fields"],
'Eliminar cliente':["Delete customer","Supprimer le client","Kunden löschen","Elimina cliente","Usuń Klient"],
'＋ Crear factura desde calculadora':["＋ Create invoice from calculator","＋ Créer une facture depuis la calculatrice","＋ Rechnung aus dem Rechner erstellen","＋ Crea fattura dalla calcolatrice","＋ Utwórz Faktura z calculator"],
'Crear desde presupuesto cargado':["Create from loaded quote","Créer depuis le devis chargé","Aus geladenem Angebot erstellen","Crea da preventivo caricato","Utwórz z loaded Oferta"],
'Continuar y crear factura':["Continue and create invoice","Continuer et créer la facture","Weiter und Rechnung erstellen","Continua e crea fattura","Kontynuuj i Utwórz Faktura"],
'Cancelar':["Cancel","Annuler","Abbrechen","Annulla","Anuluj"],
'＋ Guardar color personalizado':["＋ Save custom colour","＋ Enregistrer la couleur personnalisée","＋ Benutzerdefinierte Farbe speichern","＋ Salva colore personalizzato","＋ Zapisz custom colour"],
'Añadir bobina':["Add spool","Ajouter une bobine","Spule hinzufügen","Aggiungi bobina","Dodaj szpula"],
'Exportar bobinas CSV':["Export spools CSV","Exporter les bobines CSV","Spulen als CSV exportieren","Esporta bobine CSV","eksportuj spools CSV"],
'Todas':["All","Toutes","Alle","Tutte","All"],
'＋ Crear cliente en Clientes':["＋ Create customer in Customers","＋ Créer un client dans Clients","＋ Kunden unter Kunden erstellen","＋ Crea cliente in Clienti","＋ Utwórz Klient w Klienci"],
'Guardar pedido':["Save order","Enregistrer la commande","Bestellung speichern","Salva ordine","Zapisz Zamówienie"],
'Exportar pedidos CSV':["Export orders CSV","Exporter les commandes CSV","Bestellungen als CSV exportieren","Esporta ordini CSV","eksportuj Zamówienia CSV"],
'Buscar cliente':["Search customer","Rechercher un client","Kunden suchen","Cerca cliente","Szukaj Klient"],
'Guardar / actualizar cliente':["Save / update customer","Enregistrer / mettre à jour le client","Kunden speichern / aktualisieren","Salva / aggiorna cliente","Zapisz / Aktualizuj Klient"],
'Borrar cliente seleccionado':["Delete selected customer","Supprimer le client sélectionné","Ausgewählten Kunden löschen","Elimina cliente selezionato","Usuń wybrany Klient"],
'＋ Añadir pieza manual':["＋ Add item manually","＋ Ajouter un article manuellement","Artikel manuell hinzufügen","＋ Aggiungi elemento manualmente","＋ Dodaj item manually"],
'＋ Añadir pieza de calculadora':["＋ Add item from calculator","＋ Ajouter un article depuis la calculatrice","Artikel aus dem Rechner hinzufügen","＋ Aggiungi elemento dalla calcolatrice","＋ Dodaj item z calculator"],
'Imprimir presupuesto para cliente':["Print customer quote","Imprimer le devis client","Kundenangebot drucken","Stampa preventivo cliente","Drukuj Klient Oferta"],
'Ocultar':["Hide","Masquer","Ausblenden","Nascondi","Ukryj"],
'Actualizar':["Refresh","Actualiser","Aktualisieren","Aggiorna","Odśwież"],
'Registrar como personal':["Record as personal use","Enregistrer comme usage personnel","Als Eigenverbrauch buchen","Registra come uso personale","Record as personal use"],
'Registrar como pedido':["Record as sales order","Enregistrer comme commande client","Als Kundenauftrag buchen","Registra come ordine cliente","Record as sales Zamówienie"],
'Cerrar panel':["Close panel","Fermer le panneau","Panel schließen","Chiudi pannello","Zamknij panel"],
'Exportar contabilidad CSV':["Export accounting CSV","Exporter la comptabilité CSV","Buchhaltung als CSV exportieren","Esporta contabilità CSV","eksportuj księgowość CSV"],
'Guardar datos del vendedor':["Save seller details","Enregistrer les coordonnées du vendeur","Verkäuferdaten speichern","Salva dati venditore","Zapisz dane sprzedawcy"],
'Guardar moneda e impuestos':["Save currency and taxes","Enregistrer la devise et les taxes","Währung und Steuern speichern","Salva valuta e imposte","Zapisz Waluta i taxes"],
'Guardar nombre':["Save name","Enregistrer le nom","Namen speichern","Salva nome","Zapisz Nazwa"],
'Guardar IP manual':["Save IP manually","Enregistrer l’adresse IP manuellement","IP-Adresse manuell speichern","Salva IP manualmente","Zapisz IP manually"],
'Buscar automáticamente':["Discover automatically","Rechercher automatiquement","Automatisch suchen","Cerca automaticamente","Discover automatycznie"],
'Ver impresora conectada':["View connected printer","Voir l’imprimante connectée","Verbundene Drucker anzeigen","Visualizza stampante connessa","View connected drukarka"],
'Probar conexión':["Test connection","Tester la connexion","Verbindung testen","Prova connessione","Test connection"],
'Guardar configuración':["Save settings","Enregistrer la configuration","Einstellungen speichern","Salva configurazione","Zapisz Ustawienia"],
'Crear copia ahora':["Create backup now","Créer une sauvegarde maintenant","Jetzt Sicherung erstellen","Crea backup ora","Utwórz kopia zapasowa now"],
'Actualizar estado':["Refresh status","Actualiser l’état","Status aktualisieren","Aggiorna stato","Odśwież status"],
'Guardar apariencia':["Save appearance","Enregistrer l’apparence","Darstellung speichern","Salva aspetto","Zapisz appearance"],
'Print Cost & Profit · Versión 1.409':["Print Cost & Profit · Version 1.409","Print Cost & Profit · Version 1.409","Print Cost & Profit · Version 1.409","Print Cost & Profit · Versione 1.409","Drukuj Koszt & Zysk · Version 1.409"]};



// v1.414: nombres actualizados de las pestañas y textos relacionados, en los cinco idiomas.







// Cobertura adicional para textos de módulos que se crean fuera del diccionario principal.



const PCP_POLISH_OVERRIDES={
  "Inicio": "Start",
  "Opciones": "Opcje",
  "Clientes": "Klienci",
  "Presupuestos": "Oferty",
  "Pedidos": "Zamówienia",
  "Facturas": "Faktury",
  "Stock filamento": "Stan filamentu",
  "Contabilidad": "Księgowość",
  "Cargar G-code laminado": "Wczytaj przygotowany G-code",
  "Copiar resumen": "Kopiuj podsumowanie",
  "Nuevo cálculo": "Nowe obliczenie",
  "Tipo de impresión": "Typ wydruku",
  "Personal · gasto propio": "Własny · wydatek własny",
  "Cliente / referencia del pedido (opcional)": "Klient / numer zamówienia (opcjonalnie)",
  "Datos de la pieza": "Dane elementu",
  "Venta, moneda e impuestos": "Sprzedaż, waluta i podatki",
  "Nombre de la pieza": "Nazwa elementu",
  "Imagen de la pieza": "Obraz elementu",
  "Elegir archivo": "Wybierz plik",
  "No se ha seleccionado ningún archivo": "Nie wybrano pliku",
  "Guardar tasación": "Zapisz wycenę",
  "Guardar presupuesto": "Zapisz ofertę",
  "Calcular precio final": "Oblicz cenę końcową",
  "Realizar pedido": "Utwórz zamówienie",
  "Incluir esta tasación en Contabilidad al guardarla": "Uwzględnij tę wycenę w księgowości podczas zapisywania",
  "Si no marcas esta opción, guardar la tasación solo la añade al historial y no crea un gasto propio.": "Jeśli nie zaznaczysz tej opcji, zapisanie wyceny doda ją tylko do historii i nie utworzy własnego wydatku.",
  "Cliente eliminado de la agenda. Histórico documentos se conservan.": "Klient został usunięty z książki adresowej. Dokumenty historyczne pozostają zachowane.",
  "Datos del vendedor guardados en la base de datos SQLite de este PC.": "Dane sprzedawcy zapisano w bazie SQLite na tym komputerze.",
  "Moneda e impuestos guardados.": "Waluta i podatki zostały zapisane.",
  "Cálculo guardado en este navegador.": "Obliczenie zapisano w tej przeglądarce.",
  "ATENCIÓN: se restaurarán los datos de la copia seleccionada y se sustituirán los datos SQLite actuales. Antes se creará y validará automáticamente una copia de protección de la base actual. ¿Quieres continuar?": "UWAGA: dane z wybranej kopii zostaną przywrócone i zastąpią obecne dane SQLite. Najpierw zostanie automatycznie utworzona i sprawdzona kopia zabezpieczająca bieżącej bazy. Czy chcesz kontynuować?",
  "Selecciona primero una copia SQLite.": "Najpierw wybierz kopię zapasową SQLite.",
  "Validando la copia seleccionada…": "Sprawdzanie wybranej kopii zapasowej…",
  "Copia válida. Integridad SQLite correcta.": "Kopia zapasowa jest prawidłowa. Integralność SQLite jest poprawna.",
  "Restaurar copia seleccionada": "Przywróć wybraną kopię",
  "Validar copia seleccionada": "Sprawdź wybraną kopię",
  "Consultando copias…": "Wyszukiwanie kopii zapasowych…",
  "Ubicación:": "Lokalizacja:",
  "Correcta": "Poprawna",
  "100 copias": "100 kopii zapasowych",
  "Historial de tasaciones": "Historia wycen",
  "Buscar por pieza, perfil, archivo o notas": "Szukaj według elementu, profilu, pliku lub notatek",
  "Ordenar historial": "Sortuj historię",
  "Más recientes primero": "Najnowsze najpierw",
  "Más antiguas primero": "Najstarsze najpierw",
  "Mayor beneficio por unidad": "Największy zysk na jednostkę",
  "Menor coste por unidad": "Najniższy koszt na jednostkę",
  "Nombre de pieza A–Z": "Nazwa elementu A–Z",
  "Todavía no hay tasaciones guardadas.": "Nie zapisano jeszcze żadnych wycen.",
  "Comparar seleccionadas (2)": "Porównaj wybrane (2)",
  "Limpiar selección": "Wyczyść wybór",
  "Borrar historial": "Wyczyść historię",
  "Cliente, número de pedido o nota": "Klient, numer zamówienia lub notatka",
  "No hay movimientos para exportar.": "Brak operacji do wyeksportowania.",
  "El navegador bloqueó la ventana del informe. Permite ventanas emergentes para exportar a PDF.": "Przeglądarka zablokowała okno raportu. Zezwól na wyskakujące okna, aby wyeksportować dokument do PDF.",
  "El navegador bloqueó la ventana de la factura. Permite ventanas emergentes para este archivo.": "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.",
  "Se encontró un borrador guardado el {date}. ¿Quieres recuperarlo?": "Znaleziono wersję roboczą zapisaną {date}. Czy chcesz ją odzyskać?",
  "¿Usar una bobina de otra marca?": "Czy użyć szpuli innej marki?",
  " Stock insuficiente.": " Za mało materiału w magazynie.",
  "Print Cost & Profit · Snapmaker Orca": "Print Cost & Profit · Snapmaker Orca",
  "Cliente eliminado de la agenda.": "Klient został usunięty z książki adresowej.",
  "Última confirmación: ¿restaurar {name}? No cierres Orca ni esta ventana durante el proceso.": "Ostatnie potwierdzenie: przywrócić {name}? Nie zamykaj Orca ani tego okna podczas wykonywania operacji.",
  "Validando la copia y creando una copia de protección de los datos actuales…": "Trwa sprawdzanie kopii zapasowej i tworzenie kopii zabezpieczającej bieżące dane…",
  "Restauración completada. Integridad SQLite correcta. Registros: {count}. Copia de protección creada: {safetyBackup}. Actualizando la aplicación para cargar todos los datos restaurados…": "Przywracanie zakończone. Integralność bazy SQLite jest prawidłowa. Liczba rekordów: {count}. Utworzono kopię zabezpieczającą: {safetyBackup}. Aplikacja zostanie odświeżona, aby wczytać wszystkie przywrócone dane…",
  "No se pudo restaurar la copia: {message}": "Nie udało się przywrócić kopii zapasowej: {message}",
  "No se pudo validar la copia: {message}": "Nie udało się sprawdzić kopii zapasowej: {message}",
  "Al abrir Opciones se consultará el estado del servidor y de SQLite.": "Po otwarciu ustawień zostanie sprawdzony stan serwera i bazy SQLite.",
  "La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.": "Przed przywróceniem tworzona i sprawdzana jest kopia zabezpieczająca bieżącej bazy danych. Nie zamykaj aplikacji do zakończenia procesu.",
  "El borrador se guarda automáticamente en este navegador.": "Wersja robocza jest automatycznie zapisywana w tej przeglądarce.",
  "Gestiona las copias de la base SQLite de este ordenador. Las copias se validan antes de mostrarse como correctas. Estas opciones no eliminan la base actual.": "Zarządzaj kopiami zapasowymi bazy SQLite na tym komputerze. Kopie są sprawdzane przed oznaczeniem ich jako prawidłowe. Te ustawienia nie usuwają bieżącej bazy danych.",
  "El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": "Wyświetlony podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej.",
  "Vencimiento / condiciones de pago": "Termin płatności / warunki płatności",
  "Presupuestos · Clientes y documentos": "Oferty · Klienci i dokumenty",
  "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.": "Ta opcja służy do klasyfikowania wyceny w księgowości podczas zapisywania. Wydatki własne nie generują sprzedaży ani zysku handlowego.",
  "Carga el archivo G-code que has exportado desde Snapmaker Orca. También puedes rellenar los datos manualmente.": "Wczytaj plik G-code wyeksportowany z programu Snapmaker Orca. Możesz też wprowadzić dane ręcznie.",
  "El archivo se procesa en este navegador y no se envía a ningún servidor.": "Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.",
  "La imagen se guarda comprimida en el borrador y en el historial local.": "Obraz jest zapisywany w postaci skompresowanej w wersji roboczej i lokalnej historii.",
  "Introduce dinero por pieza, no minutos. El tiempo se añade en posprocesado o montaje.": "Wprowadź koszt pieniężny na sztukę, a nie liczbę minut. Czas dodaje się w sekcji obróbki końcowej lub montażu.",
  "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.": "Po sprawdzeniu danych części oblicz zalecaną cenę i rentowność.",
  "Antes de crear la factura: selecciona el cliente": "Przed utworzeniem faktury wybierz klienta.",
  "Escribe un concepto para el movimiento.": "Wpisz opis operacji.",
  "El importe no puede ser negativo.": "Kwota nie może być ujemna.",
  "Perfil de impresora aplicado al cálculo.": "Profil drukarki został zastosowany w obliczeniu.",
  "Archivo cargado. Revisa los datos del laminado.": "Plik wczytano. Sprawdź dane z programu do cięcia.",
  "El número de factura no puede estar vacío.": "Numer faktury nie może być pusty.",
  "¿Borrar este cliente guardado?": "Czy usunąć zapisanego klienta?",
  "Los clientes se guardan en la base de datos SQLite de este PC.": "Dane klientów są przechowywane w bazie SQLite na tym komputerze.",
  "Crea facturas desde un presupuesto guardado o con los datos actuales de la calculadora. La numeración se propone automáticamente y puedes editarla.": "Twórz faktury na podstawie zapisanej oferty lub bieżących danych kalkulatora. Numer jest proponowany automatycznie i można go edytować.",
  "Usa {AAAA} para el año y {0000} para el contador correlativo.": "Użyj {AAAA} dla roku i {0000} dla kolejnego numeru.",
  "Elige un cliente guardado o rellena los datos para crear uno nuevo. La factura usará también los datos guardados del vendedor.": "Wybierz zapisanego klienta lub wprowadź dane, aby dodać nowego. Faktura wykorzysta również zapisane dane sprzedawcy.",
  "Las facturas guardadas se conservarán en la base de datos SQLite de este PC.": "Zapisane faktury będą przechowywane w bazie SQLite na tym komputerze.",
  "Comprueba siempre los datos detectados antes de calcular el precio.": "Zawsze sprawdzaj wykryte dane przed obliczeniem ceny.",
  "No se pudo guardar automáticamente en este navegador": "Nie udało się automatycznie zapisać danych w tej przeglądarce",
  "No se muestran gramos: no se pudo leer el G-code activo de la U1.": "Nie wyświetlono masy filamentu: nie udało się odczytać aktywnego pliku G-code z drukarki U1.",
  "Consumo no disponible. No se debe descontar usando datos del cálculo cargado.": "Zużycie jest niedostępne. Nie odejmuj materiału ze stanu magazynowego na podstawie danych z wczytanego obliczenia.",
  "Leyendo datos del G-code… {progress}%": "Odczytywanie danych G-code… {progress}%",
  "No se han encontrado impresoras. Puedes introducir la IP manualmente.": "Nie znaleziono drukarek. Możesz ręcznie wpisać adres IP.",
  "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.": "Automatyczne wyszukiwanie drukarki nie powiodło się: {error}. Możesz użyć zapisanego adresu IP lub wyszukać drukarkę ręcznie.",
  "No hay bobinas en esta categoría": "Brak szpul w tej kategorii",
  "Notas internas sobre el cliente": "Notatki wewnętrzne dotyczące klienta",
  "Documentos": "Dokumenty",
  "Impuestos desglosados según el perfil configurable": "Podatki wyszczególnione zgodnie z konfigurowalnym profilem",
  "El estado de la impresora no está claro. ¿Quieres registrar este trabajo igualmente como provisional?": "Stan drukarki jest niejednoznaczny. Czy mimo to chcesz zapisać to zadanie jako tymczasowe?",
  "La restauración sustituirá el historial local actual y, si la copia contiene uno, el cálculo en curso. ¿Continuar?": "Przywracanie zastąpi bieżącą historię lokalną oraz aktualne obliczenie, jeśli kopia je zawiera. Kontynuować?",
  "No se pudo restaurar: el archivo no parece una copia válida de Print Cost & Profit.": "Nie udało się przywrócić danych: plik nie wygląda na prawidłową kopię zapasową Print Cost & Profit.",
  "El navegador bloqueó la ventana del presupuesto. Permite las ventanas emergentes para este archivo.": "Przeglądarka zablokowała okno oferty. Zezwól na wyskakujące okna dla tego pliku.",
  "Introduce al menos el nombre, correo o teléfono del cliente.": "Wprowadź co najmniej imię i nazwisko klienta, adres e-mail lub numer telefonu.",
  "Ya existe un cliente con ese nombre. ¿Actualizarlo?": "Klient o tej nazwie już istnieje. Czy zaktualizować jego dane?",
  "¿Eliminar este cliente de la agenda? Los documentos ya guardados no se borrarán.": "Czy usunąć tego klienta z książki adresowej? Zapisane dokumenty nie zostaną usunięte.",
  "No se ha podido generar el PDF. Comprueba los datos del documento e inténtalo de nuevo.": "Nie udało się wygenerować pliku PDF. Sprawdź dane dokumentu i spróbuj ponownie.",
  "¿Eliminar este presupuesto guardado?": "Czy usunąć zapisaną ofertę?",
  "¿Borrar este registro de bobinas del inventario?": "Czy usunąć ten wpis szpuli z magazynu?",
  "Ya existe una factura con ese número. ¿Quieres guardarla igualmente?": "Faktura o tym numerze już istnieje. Czy mimo to chcesz ją zapisać?",
  "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.": "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.",
  "¿Eliminar esta copia de factura guardada?": "Czy usunąć zapisaną kopię faktury?",
  "Todavía no hay una impresión activa detectada. Espera a que el panel muestre el archivo.": "Nie wykryto jeszcze aktywnego wydruku. Poczekaj, aż panel wyświetli nazwę pliku.",
  "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.": "To zadanie jest już zapisane w księgowości. Nie utworzono duplikatu.",
  "¿Eliminar solo la tasación de «{name}» del historial?": "Czy usunąć z historii tylko wycenę „{name}”?",
  "¿Eliminar el color personalizado {hex} de la paleta?": "Czy usunąć z palety niestandardowy kolor {hex}?",
  "¿Eliminar el movimiento «{name}» de la contabilidad?": "Czy usunąć operację „{name}” z księgowości?",
  "Fecha, impresora, concepto, referencia…": "Data, drukarka, opis, numer referencyjny…",
  "Buscando la impresora en la red local… Si no aparece en 18 segundos, podrás introducir su IP manualmente.": "Wyszukiwanie drukarki w sieci lokalnej… Jeśli nie pojawi się w ciągu 18 sekund, możesz ręcznie wpisać jej adres IP.",
  "Rentable, pero por debajo del precio recomendado: faltan {amount} antes de impuestos por unidad para alcanzar el porcentaje de beneficio objetivo.": "Opłacalne, ale poniżej zalecanej ceny: brakuje {amount} na sztukę przed opodatkowaniem, aby osiągnąć docelowy procent zysku.",
  "El margen se calcula sobre el precio de venta sin impuestos; la rentabilidad sobre coste se calcula dividiendo el beneficio entre el coste por unidad. El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": "Marżę oblicza się od ceny sprzedaży bez podatku; rentowność względem kosztu oblicza się, dzieląc zysk przez koszt jednostkowy. Wyświetlany podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej.",
  "Precio electricidad (": "Koszt energii elektrycznej (",
  "Selecciona un perfil guardado en «Perfiles de impresora» para aplicar sus valores de potencia, desgaste y mantenimiento.": "Wybierz zapisany profil w sekcji „Profile drukarek”, aby zastosować ustawienia mocy, zużycia i konserwacji.",
  "Pulsa «Calcular precio final» para comprobar la rentabilidad.": "Kliknij „Oblicz cenę końcową”, aby sprawdzić rentowność.",
  "Gestión de clientes": "Zarządzanie klientami",
  "Conexión con la Snapmaker U1": "Połączenie z drukarką Snapmaker U1",
  "Actualizar resumen": "Aktualizuj podsumowanie",
  "€/kg": "€/kg",
  "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.": "Snapmaker U1: szacunkowo 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.",
  "Retirada de soportes, lijado y limpieza.": "Usuwanie podpór, szlifowanie i czyszczenie.",
  "El precio introducido siempre es la base sin impuestos. El desglose se actualiza al cambiar el precio o el porcentaje, sin pulsar el botón de cálculo.": "Wprowadzona cena zawsze oznacza kwotę bez podatku. Zestawienie aktualizuje się po zmianie ceny lub stawki, bez klikania przycisku obliczania.",
  "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.": "Zysk oblicza się od ceny sprzedaży bez podatku; pobrany podatek jest wykazywany osobno. Prowizję oblicza się od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — koszty należy wprowadzić w wybranej walucie.",
  "El redondeo nunca reduce el precio recomendado ni el porcentaje de beneficio objetivo.": "Zaokrąglenie nigdy nie obniża zalecanej ceny ani docelowego procentu zysku.",
  "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.": "Cena referencyjna: udokumentowana cena początkowa, a jeśli jej brak — aktualna cena sprzedaży; można ją edytować i nie oznacza kwoty faktycznie zapłaconej. Wprowadzone kwoty są w EUR; dla źródeł w USD zastosowano kurs EBC z 21.10.2026 (1 EUR = 1,1234 USD). Koszty konserwacji to edytowalne oszacowanie zależne od złożoności (zestaw części zamiennych na 1000 godzin), a nie stawka producenta. Jeśli cena nie ma źródła, pole pozostaje puste. Początkowy okres eksploatacji wynosi 10 000 godzin i można go edytować. Koszty energii, amortyzacji i konserwacji są obliczane osobno.",
  "Precio de referencia de venta / compra (EUR)": "Referencyjna cena sprzedaży / zakupu (EUR)",
  "El tema se aplica a esta página. Algunos paneles integrados pueden conservar sus colores propios.": "Motyw dotyczy tej strony. Niektóre osadzone panele mogą zachować własne kolory.",
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):": "Szacunkowy CAŁKOWITY koszt wykonania „{file}” (nie tylko filament). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):",
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:": "Szacunkowy CAŁKOWITY koszt wykonania „{file}” (nie tylko filament). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby skoryguj koszt wykonania:",
  "Moneda de cálculo (se cambia en Opciones)": "Waluta obliczeń (zmiana w Opcjach)",
  "Al cargar el G-code se detectan automáticamente material, color y gramos. Si coincide con una única bobina en stock, se selecciona; si no, se crea un filamento genérico con el color del laminador.": "Po wczytaniu G-code materiał, kolor i masa są wykrywane automatycznie. Jeśli dane pasują dokładnie do jednej szpuli w magazynie, zostanie ona wybrana; w przeciwnym razie zostanie utworzony ogólny wpis filamentu z kolorem ustawionym w slicerze.",
  "Desmárcalo para calcular sin impuestos: el impuesto será 0,00 y el total será igual al precio base. El porcentaje fiscal queda guardado para volver a activarlo.": "Odznacz tę opcję, aby obliczyć cenę bez podatku: podatek wyniesie 0,00, a suma będzie równa cenie bazowej. Stawka podatku zostanie zapisana, aby można ją było ponownie włączyć.",
  "Porcentajes ilustrativos editables; comprueba las tarifas reales de tu cuenta.": "Przykładowe stawki można edytować; sprawdź rzeczywiste opłaty na swoim koncie.",
  "El precio recomendado cubrirá este beneficio mínimo o el porcentaje de beneficio indicado, el que exija un precio mayor.": "Zalecana cena zapewni minimalny zysk lub wskazany procent zysku — w zależności od tego, który wymaga wyższej ceny.",
  "Resumen de los cálculos guardados en la base de datos SQLite de este PC. No equivale a contabilidad ni a ventas cobradas.": "Podsumowanie obliczeń zapisanych w bazie SQLite na tym komputerze. Nie zastępuje księgowości ani ewidencji opłaconej sprzedaży.",
  "La potencia es editable. El mantenimiento estimado usa una cesta por categoría y 1.000 h; su base aparece al seleccionar un modelo.": "Moc można edytować. Szacunkowy koszt konserwacji opiera się na zestawie części dla danej kategorii na 1000 godzin; podstawę wyświetla się po wybraniu modelu.",
  "Crea facturas desde un presupuesto guardado o con los datos actuales de la calculadora. La numeración se propone correlativamente y puedes editarla manualmente.": "Twórz faktury na podstawie zapisanej oferty lub aktualnych danych kalkulatora. Numer jest proponowany kolejno i można go ręcznie edytować.",
  "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.": "Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do zakładki „Klienci”, aby można go było używać w zamówieniach, ofertach i fakturach. Wersja do wydruku nie pokazuje kosztów wewnętrznych ani marży.",
  "Perfil / ajustes de impresión (opcional)": "Profil / ustawienia drukowania (opcjonalnie)",
  "Ucrania · IVA general 20%": "Ukraina · standardowa stawka VAT 20%",
  "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.": "Print Cost & Profit v1.283 · lokalna baza SQLite na komputerze; diagnostyka integralności i kopii zapasowych.",
  "RGB #000000 · Negro": "RGB #000000 · Czarny",
  "🖨 Snapmaker U1 · Mostrar panel": "🖨 Snapmaker U1 · Pokaż panel",
  "Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.": "Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie SQLite na tym komputerze.",
  "Reino Unido · tipo general 20%": "Wielka Brytania · standardowa stawka VAT 20%",
  "Integración directa: {file}": "Bezpośrednia integracja: {file}",
  "{n} filamento(s) · {assigned} asignación(es) correctas · {pending} pendiente(s) de revisar": "Filamenty: {n} · prawidłowo przypisane szpule: {assigned} · do sprawdzenia: {pending}",
  "Fuente: Leyendo datos del G-code… {progress}% · {file}": "Źródło: odczytywanie danych G-code… {progress}% · {file}",
  "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.": "Wstępne oszacowanie, a nie rzeczywisty pomiar dla każdego koloru. Materiał jest odejmowany ze stanu dopiero po zakończeniu zadania.",
  "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.": "Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Okres eksploatacji 10 000 godzin jest edytowalnym założeniem.",
  "Amortización calculada: {rate} por hora ({price} ÷ {hours} h).": "Obliczona amortyzacja: {rate} na godzinę ({price} ÷ {hours} h).",
  "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio.": "Referencyjna zalecana cena: {gross} z podatkami · referencyjny zysk: {profit} na sztukę. Dodatki A/B/C są doliczane do tej ceny.",
  "Encontradas {count} impresoras. Elige la IP que quieres usar en «Impresoras encontradas».": "Znaleziono drukarki: {count}. Wybierz adres IP w sekcji „Znalezione drukarki”.",
  "Toolchanger: estimated spare-parts budget EUR 160 na 1,000 h": "Toolchanger: szacunkowy budżet na części zamienne wynosi 160 EUR na 1000 godzin",
  "Dual-extruder IDEX: estimated spare-parts budget EUR 120 na 1,000 h": "Podwójny ekstruder IDEX: szacunkowy budżet na części zamienne wynosi 120 EUR na 1000 godzin",
  "Enclosed CoreXY z sensors i filter: EUR 90 na 1,000 h": "Zamknięta drukarka CoreXY z czujnikami i filtrem: 90 EUR na 1000 godzin",
  "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.": "Magazyn: łączna liczba szpul: {all} · szpule w tym filtrze: {filtered}.",
  "Los clientes se guardan localmente en este navegador.": "Dane klientów są przechowywane lokalnie w tej przeglądarce.",
  "Elige un cliente guardado o rellena los datos para crear uno nuevo.": "Wybierz zapisanego klienta lub wypełnij dane, aby dodać nowego.",
  "Cuando crees una factura, aparecerá aquí para que puedas imprimirla o eliminarla.": "Po utworzeniu faktura pojawi się tutaj i będzie można ją wydrukować lub usunąć.",
  "Número de factura (editable)": "Numer faktury (można edytować)",
  "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Poprzednie wpisy dotyczące tego pliku G-code zostaną zastąpione.",
  "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a gasto personal? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na wydatek własny? Poprzednie wpisy dotyczące tego pliku G-code zostaną zastąpione.",
  "Introduce el nombre, correo o teléfono del cliente antes de guardar el presupuesto.": "Przed zapisaniem oferty wprowadź imię i nazwisko klienta, adres e-mail lub numer telefonu.",
  "El cliente no tiene un teléfono válido guardado. Comprueba el teléfono en la pestaña Clientes e incluye el prefijo internacional si el número es de fuera de España.": "Zapisany numer telefonu klienta jest nieprawidłowy. Sprawdź go w zakładce „Klienci” i dodaj prefiks międzynarodowy, jeśli numer pochodzi spoza Hiszpanii.",
  "El cliente no tiene un correo electrónico válido guardado. Comprueba el correo en la pestaña Clientes.": "Zapisany adres e-mail klienta jest nieprawidłowy. Sprawdź go w zakładce „Klienci”.",
  "Ese número ya existe. ¿Mantenerlo de todos modos?": "Ten numer już istnieje. Czy mimo to go zachować?",
  "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?": "Przywrócenie tej kopii zastąpi bieżące lokalne dane aplikacji. Przed kontynuowaniem wyeksportuj kopię zapasową, jeśli chcesz mieć możliwość cofnięcia zmian. Kontynuować?",
  "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?": "Lokalne dane zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?",
  "Este trabajo ya está registrado como {previous}. ¿Quieres cambiarlo a {next}? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako {previous}. Czy chcesz zmienić je na {next}? Poprzednie wpisy dotyczące tego pliku G-code zostaną zastąpione.",
  "Quitar imagen": "Usuń obraz",
  "Usar precio A": "Użyj ceny A",
  "Usar precio B": "Użyj ceny B",
  "Usar precio C": "Użyj ceny C",
  "Todas": "Wszystkie",
  "Registrar como personal": "Zapisz jako użytek własny",
  "Probar conexión": "Test connection",
  "Actualizar estado": "Aktualizuj status",
  "Se han cargado {count} impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": "Wczytano zapisane drukarki: {count}. Możesz wybrać dowolną i połączyć się z nią bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.",
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}": "POŁĄCZONA DRUKARKA · {name} · IP {ip} · Stan: {state} · Plik: {file} · Oprogramowanie: {software}",
  "consultando la impresora conectada": "Sprawdzanie stanu połączonej drukarki",
  "Conexión correcta con el puente. La impresora responde.": "Połączenie z mostkiem działa poprawnie. Drukarka odpowiada.",
  "IP guardada y validada: {ip}. Pulsa «Ver impresora conectada» para consultar su estado.": "Zapisano i sprawdzono adres IP: {ip}. Kliknij „Pokaż podłączoną drukarkę”, aby sprawdzić jej stan.",
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.": "Sprawdzono serwer i SQLite. Baza danych: {database}. Folder kopii zapasowych: {backups}.",
  "Servidor y SQLite comprobados. Base:": "Sprawdzono serwer i SQLite. Baza danych:",
  "Editando cliente guardado. Al guardar se actualizarán sus datos en toda la aplicación.": "Edytujesz zapisanego klienta. Po zapisaniu jego dane zostaną zaktualizowane w całej aplikacji.",
  "Introduce los datos del nuevo cliente.": "Wprowadź dane nowego klienta.",
  "Bobina guardada correctamente.": "Szpulę zapisano poprawnie.",
  "¿Eliminar esta bobina?": "Czy usunąć tę szpulę?",
  "Stock insuficiente": "Niewystarczający stan magazynowy",
  "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y pedidos.": "Centralna książka adresowa klientów. Zapisanych tutaj klientów można wybierać w ofertach, fakturach i zamówieniach.",
  "Control manual del stock de filamento y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": "Ręczne zarządzanie zapasem filamentu i pozostałą ilością materiału. Cena za kilogram służy jako punkt odniesienia w kolejnych obliczeniach.",
  "Cliente, producto, estado…": "Klient, produkt, status…",
  "Número, cliente, producto…": "Numer, klient, produkt…",
  "Número, cliente, concepto…": "Numer, klient, opis…",
  "No hay resultados para la búsqueda.": "Brak wyników wyszukiwania.",
  "Ordenar pedidos": "Sortuj zamówienia",
  "Ordenar presupuestos": "Sortuj oferty",
  "Ordenar facturas": "Sortuj faktury",
  "Ordenar filamento": "Sortuj filament",
  "Ordenar movimientos contables": "Sortuj operacje księgowe",
  "Fecha": "Data",
  "Número": "Numer",
  "Producto": "Produkt",
  "Estado": "Status",
  "Concepto": "Opis",
  "Consultando servidor, integridad y copias…": "Sprawdzanie serwera, integralności bazy i kopii zapasowych…",
  "Respuesta no válida del servidor (HTTP ": "Nieprawidłowa odpowiedź serwera (HTTP ",
  "Buscando…": "Wyszukiwanie…",
  "No se encontraron resultados": "Nie znaleziono wyników",
  "Busca piezas guardadas, ordena por fecha o rentabilidad y selecciona dos tasaciones para compararlas. El historial se conserva en el almacenamiento local de esta instalación.": "Wyszukuj zapisane elementy, sortuj według daty lub rentowności i wybierz dwie wyceny do porównania. Historia jest przechowywana lokalnie w tej instalacji.",
  "Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.": "Znaleziono drukarki: {count}. Wybierz z listy rozwijanej tę, której chcesz używać.",
  "Buscando todas las impresoras compatibles en la red local…": "Wyszukiwanie wszystkich zgodnych drukarek w sieci lokalnej…",
  "Error durante la búsqueda: {message}": "Błąd wyszukiwania: {message}",
  "No se ha podido iniciar el almacenamiento del PC. No se cambiará al almacenamiento del navegador para evitar separar los datos.\n\n{message}": "Nie udało się uruchomić pamięci na komputerze. Nie zostanie użyta pamięć przeglądarki, aby uniknąć rozdzielenia danych.\n\n{message}"
};


const idx={es:-1,en:0,fr:1,de:2,it:3,pl:4};let lang='es';try{lang=localStorage.getItem('pcp_language')||'es'}catch(e){}if(!idx.hasOwnProperty(lang))lang='es';


const COLOR_I18N={
'negro':["black","noir","schwarz","nero","czarny"],'blanco':["white","blanc","weiß","bianco","biały"],'rojo':["red","rouge","rot","rosso","czerwony"],'rojo oscuro':["dark red","rouge foncé","dunkelrot","rosso scuro","ciemnoczerwony"],'naranja':["orange","orange","orange","arancione","pomarańczowy"],'amarillo':["yellow","jaune","gelb","giallo","żółty"],'verde lima':["lime green","vert citron","limettengrün","verde lime","limonkowy"],'verde':["green","vert","grün","verde","zielony"],'cian':["cyan","cyan","cyan","ciano","cyjan"],'azul celeste':["sky blue","bleu ciel","himmelblau","azzurro","błękitny"],'celeste':["light blue","bleu clair","hellblau","celeste","jasnoniebieski"],'azul':["blue","bleu","blau","blu","niebieski"],'violeta':["violet","violet","violett","violetto","fioletowy"],'morado':["purple","violet","lila","viola","purpurowy"],'magenta':["magenta","magenta","magenta","magenta","magenta"],'rosa claro':["light pink","rose clair","hellrosa","rosa chiaro","jasnoróżowy"],'rosa':["pink","rose","rosa","rosa","różowy"],'gris':["gray","gris","grau","grigio","szary"],'marrón cuero':["leather brown","brun cuir","lederbraun","marrone cuoio","skórzany brąz"],'marrón':["brown","brun","braun","marrone","brązowy"],'turquesa':["turquoise","turquoise","türkis","turchese","turkusowy"],'beige':["beige","beige","beige","beige","beżowy"],'dorado':["gold","doré","gold","oro","złoty"],'plateado':["silver","argent","silber","argento","srebrny"],'índigo':["indigo","indigo","indigo","indaco","indygo"],'marfil':["ivory","ivoire","elfenbein","avorio","kość słoniowa"],'rojo ladrillo':["brick red","rouge brique","ziegelrot","rosso mattone","ceglasty"],'verde césped':["grass green","vert gazon","rasengrün","verde erba","trawiasty"],'verde azulado':["teal","bleu sarcelle","blaugrün","verde petrolio","morski"],'verde oscuro':["dark green","vert foncé","dunkelgrün","verde scuro","ciemnozielony"],'azul real':["royal blue","bleu roi","königsblau","blu reale","królewski niebieski"],'lavanda':["lavender","lavande","lavendel","lavanda","lawendowy"],'personalizado':["custom","personnalisé","benutzerdefiniert","personalizzato","niestandardowy"]
};
const COLOR_ALIAS=new Map();for(const [es,values] of Object.entries(COLOR_I18N)){COLOR_ALIAS.set(es.toLocaleLowerCase(),es);for(const value of values)COLOR_ALIAS.set(value.toLocaleLowerCase(),es)}COLOR_ALIAS.set('marron','marrón');
const COLOR_NAMES=[...COLOR_ALIAS.keys()].sort((a,b)=>b.length-a.length);
const translateColorTokens=value=>{const raw=String(value??'');const normalized=raw.trim().toLocaleLowerCase();const exact=COLOR_ALIAS.has(normalized);const contextual=/#(?:[0-9a-f]{3,8})\b/i.test(raw)||/(?:PETG|PLA|ABS|TPU|PVA|ASA|PC|PA|filament|filamento|\bRGB\b)/i.test(raw);if(!exact&&!contextual)return raw;let text=raw;for(const alias of COLOR_NAMES){const re=new RegExp('(^|[^\\p{L}])('+alias+')(?=$|[^\\p{L}])','giu');text=text.replace(re,(all,left,word)=>{const canonical=COLOR_ALIAS.get(word.toLocaleLowerCase());if(!canonical)return all;let result=lang==='es'?canonical:(COLOR_I18N[canonical]&&COLOR_I18N[canonical][idx[lang]])||canonical;if(typeof result!=='string'||!result)result=canonical;if(/^\p{Lu}/u.test(word))result=result.charAt(0).toLocaleUpperCase()+result.slice(1);return left+result})}return text};

const norm=s=>String(s||'').replace(/\s+/g,' ').trim();const reverse=new Map();for(const [key,values] of Object.entries(D))for(const value of values){const k=norm(value);if(k&&!reverse.has(k))reverse.set(k,key)}const source=s=>{const k=norm(s);return D[k]?k:(reverse.get(k)||s)};const templatePatterns=[];for(const [key,values] of Object.entries(D)){if(!/\{\w+\}/.test(key))continue;const variants=[key,...values];for(const variant of variants){const parts=norm(variant).split(/(\{\w+\})/g);const names=[];const body=parts.map(part=>{const m=part.match(/^\{(\w+)\}$/);if(m){names.push(m[1]);return '([\\s\\S]+?)'}return part.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&')}).join('');templatePatterns.push({key,names,re:new RegExp('^'+body+'$')})}}const PCP_POLISH_PHRASES={'Customer': 'Klient', 'customer': 'klient', 'Customers': 'Klienci', 'customers': 'klienci', 'Saved': 'Zapisano', 'saved': 'zapisano', 'Save': 'Zapisz', 'save': 'zapisz', 'saving': 'zapisywanie', 'Delete': 'Usuń', 'delete': 'usuń', 'Remove': 'Usuń', 'remove': 'usuń', 'Add': 'Dodaj', 'add': 'dodaj', 'Edit': 'Edytuj', 'edit': 'edytuj', 'Select': 'Wybierz', 'select': 'wybierz', 'selected': 'wybrany', 'Search': 'Szukaj', 'search': 'szukaj', 'History': 'Historia', 'history': 'historia', 'Estimate': 'Wycena', 'estimate': 'wycena', 'estimates': 'wyceny', 'Quote': 'Oferta', 'quote': 'oferta', 'Invoice': 'Faktura', 'invoice': 'faktura', 'Order': 'Zamówienie', 'order': 'zamówienie', 'Orders': 'Zamówienia', 'orders': 'zamówienia', 'Filament': 'Filament', 'filament': 'filament', 'spool': 'szpula', 'Spool': 'Szpula', 'printer': 'drukarka', 'Printer': 'Drukarka', 'printers': 'drukarki', 'Print': 'Drukuj', 'print': 'drukuj', 'printing': 'drukowanie', 'Cost': 'Koszt', 'cost': 'koszt', 'costs': 'koszty', 'Price': 'Cena', 'price': 'cena', 'Profit': 'Zysk', 'profit': 'zysk', 'Material': 'Materiał', 'material': 'materiał', 'Color': 'Kolor', 'color': 'kolor', 'Stock': 'Stan magazynowy', 'stock': 'stan magazynowy', 'Inventory': 'Magazyn', 'inventory': 'magazyn', 'Settings': 'Ustawienia', 'settings': 'ustawienia', 'Options': 'Opcje', 'options': 'opcje', 'Language': 'Język', 'language': 'język', 'Currency': 'Waluta', 'currency': 'waluta', 'Tax': 'Podatek', 'tax': 'podatek', 'VAT': 'VAT', 'Total': 'Łącznie', 'total': 'łącznie', 'Unit': 'Jednostka', 'unit': 'jednostka', 'Time': 'Czas', 'time': 'czas', 'Date': 'Data', 'date': 'data', 'Name': 'Nazwa', 'name': 'nazwa', 'File': 'Plik', 'file': 'plik', 'Cancel': 'Anuluj', 'cancel': 'anuluj', 'Confirm': 'Potwierdź', 'confirm': 'potwierdź', 'Continue': 'Kontynuuj', 'continue': 'kontynuuj', 'Error': 'Błąd', 'error': 'błąd', 'Warning': 'Ostrzeżenie', 'warning': 'ostrzeżenie', 'Success': 'Sukces', 'success': 'sukces', 'Failed': 'Niepowodzenie', 'failed': 'niepowodzenie', 'Could not': 'Nie udało się', 'could not': 'nie udało się', 'Please': 'Proszę', 'please': 'proszę', 'No ': 'Brak ', 'no ': 'brak ', 'not found': 'nie znaleziono', 'available': 'dostępny', 'Available': 'Dostępny', 'current': 'bieżący', 'Current': 'Bieżący', 'backup': 'kopia zapasowa', 'Backup': 'Kopia zapasowa', 'restore': 'przywróć', 'Restore': 'Przywróć', 'restored': 'przywrócono', 'database': 'baza danych', 'Database': 'Baza danych', 'SQLite': 'SQLite', 'browser': 'przeglądarka', 'Browser': 'Przeglądarka', 'local': 'lokalny', 'Local': 'Lokalny', 'saved in this browser': 'zapisano w tej przeglądarce', 'manual': 'ręczny', 'Manual': 'Ręczny', 'entry': 'wpis', 'entries': 'wpisy', 'accounting': 'księgowość', 'Accounting': 'Księgowość', 'seller': 'sprzedawca', 'Seller': 'Sprzedawca', 'details': 'szczegóły', 'Details': 'Szczegóły', 'report': 'raport', 'Report': 'Raport', 'export': 'eksportuj', 'Export': 'Eksportuj', 'import': 'importuj', 'Import': 'Importuj', 'loading': 'ładowanie', 'Loading': 'Ładowanie', 'completed': 'ukończono', 'Completed': 'Ukończono', 'backup is valid': 'kopia zapasowa jest prawidłowa', 'part': 'część', 'Part': 'Część', 'piece': 'element', 'piece name': 'nazwa elementu', 'quantity': 'ilość', 'Quantity': 'Ilość', 'amount': 'kwota', 'Amount': 'Kwota', 'Profitability': 'Rentowność', 'profitability': 'rentowność', 'per unit': 'na jednostkę', 'per': 'na', 'first': 'najpierw', 'last': 'ostatni', 'new': 'nowy', 'New': 'Nowy', 'Create': 'Utwórz', 'create': 'utwórz', 'Open': 'Otwórz', 'open': 'otwórz', 'Close': 'Zamknij', 'close': 'zamknij', 'Show': 'Pokaż', 'show': 'pokaż', 'Hide': 'Ukryj', 'hide': 'ukryj', 'Update': 'Aktualizuj', 'update': 'aktualizuj', 'Refresh': 'Odśwież', 'refresh': 'odśwież', 'Compare': 'Porównaj', 'compare': 'porównaj', 'Clear': 'Wyczyść', 'clear': 'wyczyść', 'Download': 'Pobierz', 'download': 'pobierz', 'Copy': 'Kopiuj', 'copy': 'kopiuj', 'summary': 'podsumowanie', 'Summary': 'Podsumowanie', 'address book': 'książka adresowa', 'address': 'adres', 'phone': 'telefon', 'email': 'e-mail', 'customer details': 'dane klienta', 'seller details': 'dane sprzedawcy', 'Saved estimate': 'Zapisana wycena', 'Saved quote': 'Zapisana oferta', 'manual entry': 'wpis ręczny', 'selected backup': 'wybrana kopia zapasowa', 'protective backup': 'kopia zapasowa ochronna', 'current data': 'bieżące dane', 'Do you want to': 'Czy chcesz', 'Do not close': 'Nie zamykaj', 'first.': 'najpierw.', 'is saved': 'zapisano', 'is valid': 'jest prawidłowa', 'There are no': 'Brak', 'No saved': 'Brak zapisanych', 'No printers found': 'Nie znaleziono drukarek', 'Search by': 'Szukaj według', 'sort by': 'sortuj według', 'Newest first': 'Najnowsze najpierw', 'Oldest first': 'Najstarsze najpierw', 'local integration': 'integracja lokalna', 'Direct integration': 'Integracja bezpośrednia', 'Source': 'Źródło', 'source': 'źródło', 'E.g.': 'Np.', 'for this file': 'dla tego pliku', 'pop-ups': 'wyskakujące okna', 'network': 'sieć', 'network…': 'sieć…', 'records': 'rekordy', 'Records': 'Rekordy', 'integrity': 'integralność', 'correct': 'poprawny', 'Correct': 'Poprawny', 'current SQLite data': 'bieżące dane SQLite', 'estimate saved': 'wycenę zapisano', 'quote saved': 'ofertę zapisano', 'estimate history': 'historia wycen', 'Saved estimates history': 'Historia zapisanych wycen', 'Part name': 'Nazwa elementu', 'by date': 'według daty', 'or': 'lub', 'and': 'i', 'from': 'z', 'to': 'do', 'with': 'z', 'without': 'bez', 'for': 'dla', 'in': 'w', 'on': 'na', 'Do you want': 'Czy chcesz', 'The browser blocked': 'Przeglądarka zablokowała', 'The selected': 'Wybrana', 'will be': 'zostanie', 'created': 'utworzona', 'before': 'przed', 'after': 'po', 'automatically': 'automatycznie', 'current database': 'bieżąca baza danych', 'during the process': 'podczas procesu', 'Do you want to continue?': 'Czy chcesz kontynuować?'};
Object.assign(PCP_POLISH_PHRASES, {"Home": "Strona główna", "Settings": "Ustawienia", "Customers": "Klienci", "Quotes": "Oferty", "Invoices": "Faktury", "Orders": "Zamówienia", "Accounting": "Księgowość", "Filament stock": "Stan filamentu", "Load sliced G-code": "Wczytaj przygotowany G-code", "Copy summary": "Kopiuj podsumowanie", "New calculation": "Nowe obliczenie", "Print type": "Typ wydruku", "Own use": "Użytek własny", "Customer / order number (optional)": "Klient / numer zamówienia (opcjonalnie)", "Customer, order number or note": "Klient, numer zamówienia lub notatka", "Part details": "Szczegóły części", "Sale, currency and taxes": "Sprzedaż, waluta i podatki", "Item name": "Nazwa elementu", "Item image": "Obraz elementu", "Choose file": "Wybierz plik", "No file selected": "Nie wybrano pliku", "Calculate final price": "Oblicz cenę końcową", "Save estimate": "Zapisz wycenę", "Save quote": "Zapisz ofertę", "Create order": "Utwórz zamówienie", "Save invoice": "Zapisz fakturę", "Download PDF": "Pobierz PDF", "Print PDF": "Drukuj PDF", "Recommended selling price": "Zalecana cena sprzedaży", "Profit per unit": "Zysk na jednostkę", "Actual margin": "Rzeczywista marża", "Apply VAT / tax to calculation": "Uwzględnij VAT / podatek w obliczeniach", "VAT / tax (%)": "VAT / podatek (%)", "Calculation currency": "Waluta obliczeń", "Sales channel profile": "Profil kanału sprzedaży", "Sales channel": "Kanał sprzedaży", "Commission": "Prowizja", "Electricity cost": "Koszt energii elektrycznej", "Machine wear": "Zużycie maszyny", "Printer profile": "Profil drukarki", "Printer profiles": "Profile drukarek", "Filament inventory": "Magazyn filamentów", "Filament brand": "Marka filamentu", "Filament material": "Materiał filamentu", "Filament color": "Kolor filamentu", "Weight (g)": "Masa (g)", "Price per kg": "Cena za kg", "Add filament": "Dodaj filament", "Save changes": "Zapisz zmiany", "Discard changes": "Odrzuć zmiany", "Cancel": "Anuluj", "Confirm": "Potwierdź", "Delete": "Usuń", "Edit": "Edytuj", "Add": "Dodaj", "Search": "Szukaj", "Filter": "Filtruj", "Sort by": "Sortuj według", "Date": "Data", "Name": "Nazwa", "Status": "Status", "Actions": "Działania", "No results found": "Nie znaleziono wyników", "Loading…": "Ładowanie…", "Loading...": "Ładowanie...", "Connection": "Połączenie", "Connected": "Połączono", "Disconnected": "Rozłączono", "Ready": "Gotowy", "Printing": "Drukowanie", "Completed": "Zakończono", "Pending": "Oczekujące", "Failed": "Niepowodzenie", "Error": "Błąd", "Warning": "Ostrzeżenie", "Success": "Sukces", "Update": "Aktualizuj", "Refresh": "Odśwież", "Hide": "Ukryj", "Show": "Pokaż", "Close": "Zamknij", "Open": "Otwórz", "Download": "Pobierz", "Export": "Eksportuj", "Import": "Importuj", "Backup": "Kopia zapasowa", "Restore": "Przywróć", "Database": "Baza danych", "Saved to SQLite on this PC": "Zapisano w bazie SQLite na tym komputerze", "Seller details": "Dane sprzedawcy", "Customer details": "Dane klienta", "Address": "Adres", "Phone": "Telefon", "Email": "E-mail", "Tax number": "Numer identyfikacji podatkowej", "Company": "Firma", "Quantity": "Ilość", "Unit price": "Cena jednostkowa", "Subtotal": "Suma częściowa", "Total": "Razem", "Discount": "Rabat", "Tax": "Podatek", "VAT": "VAT", "Payment method": "Metoda płatności", "Due date": "Termin płatności", "Invoice number": "Numer faktury", "Order number": "Numer zamówienia", "Quote number": "Numer oferty", "Notes": "Uwagi", "Description": "Opis", "Material cost": "Koszt materiału", "Print time": "Czas drukowania", "Total cost": "Koszt całkowity", "Estimated cost": "Szacowany koszt", "Profit": "Zysk", "Profitability": "Rentowność", "Save": "Zapisz", "Create": "Utwórz", "Select": "Wybierz", "Select language": "Wybierz język", "Language": "Język", "Spanish": "Hiszpański", "English": "Angielski", "French": "Francuski", "German": "Niemiecki", "Italian": "Włoski", "Polish": "Polski", "Settings saved": "Ustawienia zapisane", "Data saved": "Dane zapisane", "Could not save": "Nie udało się zapisać", "Are you sure?": "Czy na pewno?", "Do you want to continue?": "Czy chcesz kontynuować?", "The operation was completed successfully": "Operacja zakończyła się pomyślnie", "Choose an option": "Wybierz opcję", "Calculation history": "Historia obliczeń", "Saved estimates": "Zapisane wyceny", "Saved quotes": "Zapisane oferty", "Saved invoices": "Zapisane faktury", "Order tracking": "Śledzenie zamówień"});
// Polski jest piątą kolumną słownika (ES, EN, FR, DE, IT, PL).
// Tworzymy wpisy PL na podstawie angielskiej kolumny i kontrolowanego słownika terminów;
// wpisy ręczne z PCP_POLISH_OVERRIDES mają pierwszeństwo.
const PCP_POLISH_TERMS={
'Customer':'Klient','customer':'klient','Customers':'Klienci','customers':'klienci',
'Saved':'Zapisano','saved':'zapisano','Save':'Zapisz','save':'zapisz','saving':'zapisywanie',
'Delete':'Usuń','delete':'usuń','Remove':'Usuń','remove':'usuń','Add':'Dodaj','add':'dodaj',
'Edit':'Edytuj','edit':'edytuj','Select':'Wybierz','select':'wybierz','selected':'wybrany',
'Search':'Szukaj','search':'szukaj','History':'Historia','history':'historia','Estimate':'Wycena','estimate':'wycena','estimates':'wyceny',
'Quote':'Oferta','quote':'oferta','Invoice':'Faktura','invoice':'faktura','Order':'Zamówienie','order':'zamówienie','Orders':'Zamówienia','orders':'zamówienia',
'Filament':'Filament','filament':'filament','spool':'szpula','Spool':'Szpula','printer':'drukarka','Printer':'Drukarka','printers':'drukarki',
'Print':'Drukuj','print':'drukuj','printing':'drukowanie','Cost':'Koszt','cost':'koszt','costs':'koszty','Price':'Cena','price':'cena','Profit':'Zysk','profit':'zysk',
'Material':'Materiał','material':'materiał','Color':'Kolor','color':'kolor','Stock':'Stan magazynowy','stock':'stan magazynowy','Inventory':'Magazyn','inventory':'magazyn',
'Settings':'Ustawienia','settings':'ustawienia','Options':'Opcje','options':'opcje','Language':'Język','language':'język','Currency':'Waluta','currency':'waluta','Tax':'Podatek','tax':'podatek','Total':'Razem','total':'razem',
'Unit':'Jednostka','unit':'jednostka','Time':'Czas','time':'czas','Date':'Data','date':'data','Name':'Nazwa','name':'nazwa','File':'Plik','file':'plik',
'Cancel':'Anuluj','cancel':'anuluj','Confirm':'Potwierdź','confirm':'potwierdź','Continue':'Kontynuuj','continue':'kontynuuj','Error':'Błąd','error':'błąd','Warning':'Ostrzeżenie','warning':'ostrzeżenie',
'Success':'Sukces','success':'sukces','Failed':'Niepowodzenie','failed':'niepowodzenie','Could not':'Nie udało się','could not':'nie udało się','Please':'Proszę','please':'proszę',
'available':'dostępny','Available':'Dostępny','current':'bieżący','Current':'Bieżący','backup':'kopia zapasowa','Backup':'Kopia zapasowa','restore':'przywróć','Restore':'Przywróć','restored':'przywrócono',
'database':'baza danych','Database':'Baza danych','browser':'przeglądarka','Browser':'Przeglądarka','local':'lokalny','Local':'Lokalny','manual':'ręczny','Manual':'Ręczny','entry':'wpis','entries':'wpisy',
'accounting':'księgowość','Accounting':'Księgowość','seller':'sprzedawca','Seller':'Sprzedawca','details':'szczegóły','Details':'Szczegóły','report':'raport','Report':'Raport','export':'eksportuj','Export':'Eksportuj','import':'importuj','Import':'Importuj',
'loading':'ładowanie','Loading':'Ładowanie','completed':'ukończono','Completed':'Zakończono','part':'część','Part':'Część','piece':'element','quantity':'ilość','Quantity':'Ilość','amount':'kwota','Amount':'Kwota',
'Profitability':'Rentowność','profitability':'rentowność','Create':'Utwórz','create':'utwórz','Open':'Otwórz','open':'otwórz','Close':'Zamknij','close':'zamknij','Show':'Pokaż','show':'pokaż','Hide':'Ukryj','hide':'ukryj',
'Update':'Aktualizuj','update':'aktualizuj','Refresh':'Odśwież','refresh':'odśwież','Compare':'Porównaj','compare':'porównaj','Clear':'Wyczyść','clear':'wyczyść','Download':'Pobierz','download':'pobierz','Copy':'Kopiuj','copy':'kopiuj',
'summary':'podsumowanie','Summary':'Podsumowanie','address':'adres','phone':'telefon','email':'e-mail','Description':'Opis','Notes':'Uwagi','Subtotal':'Suma częściowa','Discount':'Rabat','Payment method':'Metoda płatności','Due date':'Termin płatności','Print time':'Czas drukowania'
};


// v1.473: explicit six-language translations for dynamic UI messages still hard-coded in modules.


const pcpPolishMake=en=>{let out=String(en??'');for(const [a,b] of Object.entries(PCP_POLISH_PHRASES||{}).sort((x,y)=>y[0].length-x[0].length)){try{out=out.replace(new RegExp(a.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&'),'g'),b)}catch(_){}}for(const [a,b] of Object.entries(PCP_POLISH_TERMS).sort((x,y)=>y[0].length-x[0].length)){try{out=out.replace(new RegExp(a.replace(/[.*+?^${}()|[\\]\\]/g,'\\$&'),'g'),b)}catch(_){}}return out};
// v1.469: Polish translations are materialized in the fifth column of each dictionary entry.

for(const [key,values] of Object.entries(D)){if(!Array.isArray(values))continue;const polish=PCP_POLISH_OVERRIDES[key];if(polish){values[4]=polish;}else if(typeof values[4]!=='string'||!values[4].trim()){values[4]=pcpPolishMake(values[0]||key);}if(values.length>5)values.length=5;}
const translate=s=>{const k=source(s);if(lang==='pl'&&PCP_POLISH_OVERRIDES[norm(k)])return translateColorTokens(PCP_POLISH_OVERRIDES[norm(k)]);const v=D[norm(k)];if(v){const selected=lang==='es'?k:(lang==='pl'?(v[4]??pcpPolishMake(v[0]||k)):(v[idx[lang]]??v[0]??k));return translateColorTokens(String(selected??k))}const text=norm(s);for(const p of templatePatterns){const m=p.re.exec(text);if(!m)continue;const vals=D[p.key];const template=lang==='es'?p.key:(vals&&((lang==='pl'?(vals[4]??pcpPolishMake(vals[0]||p.key)):vals[idx[lang]])??vals[0]))||p.key;let i=0;return translateColorTokens(String(template??p.key).replace(/\{\w+\}/g,()=>m[++i]||''))}return translateColorTokens(lang==='es'?k:String(s??''))};
const pcpTextOriginal=new WeakMap(),pcpTextRendered=new WeakMap(),pcpAttrOriginal=new WeakMap(),pcpAttrRendered=new WeakMap();function pcpStableText(node){const current=String(node.nodeValue??'');const last=pcpTextRendered.get(node);let original;if(last!==undefined&&current===last)original=pcpTextOriginal.get(node);else{original=current;pcpTextOriginal.set(node,original)}const rendered=translate(original);pcpTextRendered.set(node,rendered);if(rendered!==current)node.nodeValue=rendered}function pcpStableAttr(el,a){const current=el.getAttribute(a);if(current===null)return;let store=pcpAttrOriginal.get(el);if(!store){store={};pcpAttrOriginal.set(el,store)}let renderedStore=pcpAttrRendered.get(el);if(!renderedStore){renderedStore={};pcpAttrRendered.set(el,renderedStore)}const last=renderedStore[a];let original;if(last!==undefined&&current===last)original=store[a];else{original=current;store[a]=original}const rendered=translate(original);renderedStore[a]=rendered;if(rendered!==current)el.setAttribute(a,rendered)}function walk(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(w.nextNode()){const n=w.currentNode;if(n.parentElement&&n.parentElement.closest('script,style,textarea,pre,code'))continue;nodes.push(n)}for(const n of nodes)pcpStableText(n);const selector='[data-i18n],input,textarea,option,button,[aria-label],[title]';const els=[];if(root.matches&&root.matches(selector))els.push(root);if(root.querySelectorAll)els.push(...root.querySelectorAll(selector));for(const e of els){if(e.hasAttribute('data-i18n')){const v=translate(e.getAttribute('data-i18n'));if(e.textContent!==v)e.textContent=v;}for(const a of ['placeholder','title','aria-label'])pcpStableAttr(e,a)}}
const pcpTitleState={original:document.title,rendered:null};function pcpStableDocumentTitle(){const current=document.title;if(pcpTitleState.rendered===null||current!==pcpTitleState.rendered)pcpTitleState.original=current;const rendered=translate(pcpTitleState.original);pcpTitleState.rendered=rendered;if(current!==rendered)document.title=rendered}function apply(){document.documentElement.setAttribute('translate','no');document.documentElement.lang=lang;window.PCP_LOCALE=locales[lang]||'es-ES';pcpStableDocumentTitle();walk(document.body);const spoolColor=document.getElementById('spoolColor');if(spoolColor){const localized=translateColorTokens(spoolColor.value);if(localized!==spoolColor.value)spoolColor.value=localized}const sel=document.getElementById('pcpLanguage');if(sel)sel.value=lang;const qv=document.getElementById('quoteValidity');if(qv){const qvk=source(qv.value);if(D[norm(qvk)])qv.value=translate(qv.value)}/* No recalcular aquí: calculate() vuelve a renderizar textos en el idioma base y deshace el cambio de idioma. */}

// v1.481: cadenas emitidas directamente por los módulos, centralizadas para los seis idiomas.


// v1.485: central dictionary coverage for remaining invoice/customer/inventory UI messages.


// v1.486: traducciones centralizadas para perfiles de impresora, bobinas y facturación.



// v1.514: cadenas adicionales detectadas en HTML dinámico y flujos de clientes/documentos/impresión.

window.PCP_I18N={dictionary:D,refresh:apply,completePolish(){let added=0;for(const [key,values] of Object.entries(D)){if(!Array.isArray(values))continue;if(values.length<5){values[4]=PCP_POLISH_OVERRIDES[key]||pcpPolishMake(values[0]||key);added++}else if(PCP_POLISH_OVERRIDES[key])values[4]=PCP_POLISH_OVERRIDES[key]}return added},t:key=>translate(key),colorSource:value=>COLOR_ALIAS.get(norm(value).toLocaleLowerCase())||value,colorDisplay:value=>translateColorTokens(value),format(key,values={}){return String(translate(key)).replace(/\{(\w+)\}/g,(_,k)=>values[k]??'')},get language(){return lang},setLanguage(code){if(!Object.prototype.hasOwnProperty.call(idx,code)||code===lang)return;lang=code;try{localStorage.setItem('pcp_language',code)}catch(e){}apply();requestAnimationFrame(()=>apply())}};const nativeAlert=window.alert.bind(window),nativeConfirm=window.confirm.bind(window);window.alert=msg=>nativeAlert(window.PCP_I18N.t(String(msg)));window.confirm=msg=>nativeConfirm(window.PCP_I18N.t(String(msg)));
const init=()=>{const nav=document.querySelector('.tab-navigation');if(nav&&!document.getElementById('pcpLanguage')){const wrap=document.createElement('label');wrap.className='language-switch';wrap.style.cssText='margin-left:auto;display:flex;align-items:center;gap:6px;padding:4px 8px;color:var(--muted);font-size:12px';wrap.innerHTML='<span>🌐</span><select id="pcpLanguage" aria-label="Language" style="background:#0c1424;color:var(--txt);border:1px solid #30415e;border-radius:7px;padding:7px">'+Object.entries(langs).map(([k,v])=>'<option value="'+k+'">'+v+'</option>').join('')+'</select>';nav.appendChild(wrap);wrap.querySelector('select').addEventListener('change',e=>window.PCP_I18N.setLanguage(e.target.value))}apply();let pendingNodes=new Set(),translationFrame=0;const obs=new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData'&&m.target)pendingNodes.add(m.target);for(const n of m.addedNodes)if(n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE)pendingNodes.add(n)}if(translationFrame||!pendingNodes.size)return;translationFrame=requestAnimationFrame(()=>{translationFrame=0;const list=[...pendingNodes];pendingNodes.clear();const roots=list.filter(n=>!list.some(p=>p!==n&&p.nodeType===Node.ELEMENT_NODE&&p.contains(n)));for(const n of roots){if(n.nodeType===Node.ELEMENT_NODE)walk(n);else{const v=translate(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v}}})});obs.observe(document.body,{subtree:true,childList:true,characterData:true});if(window.PCP_INTEGRATION_DATA&&typeof loadIntegrationData==='function')loadIntegrationData()};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

;if(window.PCP_I18N){if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();}

;

;
/* v1.478 — Consolidación final de traducciones de interfaz y corrección de polaco mezclado. */

/* v1.529: usunięto automatyczne podmienianie słów, które psuło całe zdania po polsku. */

// v1.479: jawne korekty polskich tłumaczeń, bez automatycznego mieszania języków.




/* v1.480 — Catálogo central de textos de interfaz ES/EN/FR/DE/IT/PL. */



/* v1.480 — complementos de cobertura para textos HTML restantes. */


/* v1.480 — textos dinámicos restantes de cálculo, contabilidad, U1 y SQLite. */


/* v1.480 — etiquetas dinámicas y fragmentos de HTML generados por módulos. */


/* v1.482 — ampliación central para estados dinámicos del monitor y conexión U1. */


// v1.484: uzupełnienie brakujących tłumaczeń interfejsu i korekta języka polskiego.

const PCP_PL_FIXES_V1484={"El borrador se guarda automáticamente en este navegador.":"Wersja robocza jest automatycznie zapisywana w tej przeglądarce.","Gestiona las copias de la base SQLite de este ordenador. Las copias se validan antes de mostrarse como correctas. Cambiar estos ajustes no borra la base de datos actual.":"Zarządzaj kopiami zapasowymi bazy SQLite na tym komputerze. Kopie są sprawdzane przed oznaczeniem ich jako prawidłowe. Zmiana tych ustawień nie usuwa bieżącej bazy danych.","La restauración crea y valida primero una copia de protección de la base actual. No cierres la aplicación mientras termina.":"Przed przywróceniem danych tworzona i sprawdzana jest kopia zabezpieczająca bieżącej bazy. Nie zamykaj aplikacji do zakończenia procesu.","Pulsa «Calcular precio final» para comprobar la rentabilidad.":"Kliknij „Oblicz cenę końcową”, aby sprawdzić rentowność.","Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y seguimiento de pedidos.":"Centralna baza klientów. Zapisanych tu klientów można wybierać w ofertach, fakturach i śledzeniu zamówień.","El archivo se procesa en este navegador y no se envía a ningún servidor.":"Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.","La imagen se guarda comprimida en el borrador y en el historial local.":"Obraz jest zapisywany w postaci skompresowanej w wersji roboczej i lokalnej historii.","Introduce dinero por pieza, no minutos. El tiempo se añade en posprocesado o montaje.":"Wpisz koszt pieniężny na sztukę, a nie liczbę minut. Czas uwzględnij w obróbce końcowej lub montażu.","Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.":"Po sprawdzeniu danych części oblicz zalecaną cenę i rentowność.","El precio introducido siempre es la base sin impuestos. El desglose se actualiza al cambiar el precio o el porcentaje, sin pulsar el botón de cálculo.":"Wprowadzona cena zawsze oznacza kwotę bez podatku. Zestawienie aktualizuje się po zmianie ceny lub stawki, bez klikania przycisku obliczania.","El redondeo nunca reduce el precio recomendado ni el porcentaje de beneficio objetivo.":"Zaokrąglenie nigdy nie obniża zalecanej ceny ani docelowego procentu zysku.","El importe no puede ser negativo.":"Kwota nie może być ujemna.","Antes de crear la factura: selecciona el cliente":"Przed utworzeniem faktury wybierz klienta.","Los clientes se guardan en la base de datos SQLite de este PC.":"Klienci są zapisywani w bazie danych SQLite na tym komputerze.","Los presupuestos se guardan en la base de datos SQLite de este PC y puedes volver a cargarlos, imprimirlos o eliminarlos.":"Oferty są zapisywane w bazie danych SQLite na tym komputerze. Możesz je ponownie wczytać, wydrukować lub usunąć.","Las facturas guardadas se conservarán en la base de datos SQLite de este PC.":"Zapisane faktury będą przechowywane w bazie danych SQLite na tym komputerze.","Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.":"Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie danych SQLite na tym komputerze.","Configura tus datos una sola vez. Se guardan en este navegador y se reutilizan en presupuestos y documentos imprimibles.":"Wprowadź swoje dane tylko raz. Są zapisywane w tej przeglądarce i wykorzystywane ponownie w ofertach oraz dokumentach do druku.","No se han encontrado impresoras. Puedes introducir la IP manualmente.":"Nie znaleziono drukarek. Możesz ręcznie wpisać adres IP.","Se encontraron {count} impresoras. Selecciona la que quieres usar en el desplegable.":"Znaleziono drukarki: {count}. Wybierz drukarkę z listy rozwijanej.","Buscando todas las impresoras compatibles en la red local…":"Wyszukiwanie wszystkich zgodnych drukarek w sieci lokalnej…","Error durante la búsqueda: {message}":"Błąd podczas wyszukiwania: {message}","Integración directa: {file}":"Integracja bezpośrednia: {file}","Origen: {source}":"Źródło: {source}"};
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const normalizeKey=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 for(const [k,pl] of Object.entries(PCP_PL_FIXES_V1484)){
   const key=normalizeKey(k);
   for(const dk of Object.keys(dict)){
     if(normalizeKey(dk)===key&&Array.isArray(dict[dk]))dict[dk][4]=pl;
   }
 }
})();


// v1.487: cadenas de interfaz centralizadas detectadas en módulos dinámicos.
const PCP_V1487_ADDITIONS = {"No hay pedidos guardados.":["No saved orders.","Aucune commande enregistrée.","Keine gespeicherten Aufträge.","Nessun ordine salvato.","Brak zapisanych zamówień."],"— Selecciona un cliente guardado —":["— Select a saved customer —","— Sélectionnez un client enregistré —","— Gespeicherten Kunden auswählen —","— Seleziona un cliente salvato —","— Wybierz zapisanego klienta —"],"＋ Crear cliente nuevo…":["＋ Create new customer…","＋ Créer un nouveau client…","＋ Neuen Kunden erstellen…","＋ Crea nuovo cliente…","＋ Utwórz nowego klienta…"],"— Selecciona tasación o presupuesto —":["— Select estimate or quote —","— Sélectionnez une estimation ou un devis —","— Kalkulation oder Angebot auswählen —","— Seleziona stima o preventivo —","— Wybierz wycenę lub ofertę —"],"Tasaciones guardadas":["Saved estimates","Estimations enregistrées","Gespeicherte Kalkulationen","Stime salvate","Zapisane wyceny"],"Presupuestos guardados":["Saved quotes","Devis enregistrés","Gespeicherte Angebote","Preventivi salvati","Zapisane oferty"],"Sin cliente":["No customer","Aucun client","Kein Kunde","Nessun cliente","Brak klienta"],"Pendiente":["Pending","En attente","Ausstehend","In attesa","Oczekujące"],"En impresión":["Printing","En cours d’impression","Wird gedruckt","In stampa","W trakcie drukowania"],"Posprocesado":["Post-processing","Post-traitement","Nachbearbeitung","Post-elaborazione","Obróbka końcowa"],"Listo para entregar":["Ready for delivery","Prêt à livrer","Zur Übergabe bereit","Pronto per la consegna","Gotowe do odbioru"],"Entregado":["Delivered","Livré","Ausgeliefert","Consegnato","Dostarczono"],"Cancelado":["Cancelled","Annulé","Storniert","Annullato","Anulowano"],"Presupuesto":["Quote","Devis","Angebot","Preventivo","Oferta"],"Factura":["Invoice","Facture","Rechnung","Fattura","Faktura"],"Editar":["Edit","Modifier","Bearbeiten","Modifica","Edytuj"],"Eliminar":["Delete","Supprimer","Löschen","Elimina","Usuń"],"Guardar cambios del pedido":["Save order changes","Enregistrer les modifications de la commande","Auftragsänderungen speichern","Salva modifiche ordine","Zapisz zmiany zamówienia"],"Tasación cargada para preparar el presupuesto. Revisa los datos del cliente y guarda/imprime el presupuesto.":["Estimate loaded to prepare the quote. Review customer details and save/print the quote.","Estimation chargée pour préparer le devis. Vérifiez les coordonnées du client puis enregistrez/imprimez le devis.","Kalkulation zum Erstellen des Angebots geladen. Kundendaten prüfen und Angebot speichern/drucken.","Stima caricata per preparare il preventivo. Controlla i dati del cliente e salva/stampa il preventivo.","Wczytano wycenę do przygotowania oferty. Sprawdź dane klienta i zapisz/wydrukuj ofertę."],"Tasación cargada para preparar la factura. Completa o confirma los datos del cliente.":["Estimate loaded to prepare the invoice. Complete or confirm customer details.","Estimation chargée pour préparer la facture. Complétez ou confirmez les coordonnées du client.","Kalkulation zum Erstellen der Rechnung geladen. Kundendaten ergänzen oder bestätigen.","Stima caricata per preparare la fattura. Completa o conferma i dati del cliente.","Wczytano wycenę do przygotowania faktury. Uzupełnij lub potwierdź dane klienta."],"Presupuestos abierto. Selecciona o crea el cliente antes de guardar.":["Quotes opened. Select or create the customer before saving.","Devis ouverts. Sélectionnez ou créez le client avant d’enregistrer.","Angebote geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder legen Sie ihn an.","Preventivi aperti. Seleziona o crea il cliente prima di salvare.","Otwarto oferty. Przed zapisaniem wybierz klienta lub utwórz nowego."],"Pedidos abierto. Selecciona un cliente o créalo con el formulario de la pestaña Clientes antes de guardar.":["Orders opened. Select a customer or create one in the Customers tab before saving.","Commandes ouvertes. Sélectionnez un client ou créez-le dans l’onglet Clients avant d’enregistrer.","Aufträge geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder erstellen Sie ihn im Tab „Kunden“.","Ordini aperti. Seleziona un cliente o crealo nella scheda Clienti prima di salvare.","Otwarto zamówienia. Przed zapisaniem wybierz klienta lub utwórz go na karcie Klienci."],"Presupuesto cargado. Puedes modificar los datos y guardarlo como otro presupuesto.":["Quote loaded. You can edit the details and save it as another quote.","Devis chargé. Vous pouvez modifier les données et l’enregistrer comme un autre devis.","Angebot geladen. Sie können die Angaben ändern und als neues Angebot speichern.","Preventivo caricato. Puoi modificare i dati e salvarlo come un altro preventivo.","Wczytano ofertę. Możesz zmienić dane i zapisać ją jako kolejną ofertę."],"Presupuesto eliminado.":["Quote deleted.","Devis supprimé.","Angebot gelöscht.","Preventivo eliminato.","Oferta została usunięta."],"Tasación eliminada del historial.":["Estimate removed from history.","Estimation supprimée de l’historique.","Kalkulation aus dem Verlauf entfernt.","Stima eliminata dalla cronologia.","Wycena została usunięta z historii."],"Selecciona como máximo dos tasaciones.":["Select no more than two estimates.","Sélectionnez deux estimations au maximum.","Wählen Sie höchstens zwei Kalkulationen aus.","Seleziona al massimo due stime.","Wybierz maksymalnie dwie wyceny."],"Todavía no hay tasaciones guardadas.":["No estimates have been saved yet.","Aucune estimation n’a encore été enregistrée.","Es wurden noch keine Kalkulationen gespeichert.","Non ci sono ancora stime salvate.","Nie zapisano jeszcze żadnych wycen."],"No hay tasaciones que coincidan con la búsqueda.":["No estimates match your search.","Aucune estimation ne correspond à votre recherche.","Keine Kalkulationen entsprechen der Suche.","Nessuna stima corrisponde alla ricerca.","Brak wycen pasujących do wyszukiwania."],"Comparar":["Compare","Comparer","Vergleichen","Confronta","Porównaj"],"Fecha":["Date","Date","Datum","Data","Data"],"Imagen":["Image","Image","Bild","Immagine","Obraz"],"Pieza":["Part","Pièce","Bauteil","Pezzo","Element"],"Perfil":["Profile","Profil","Profil","Profilo","Profil"],"Tiempo":["Time","Durée","Zeit","Tempo","Czas"],"Material":["Material","Matériau","Material","Materiale","Materiał"],"Coste/u.":["Cost/unit","Coût/unité","Kosten/Stück","Costo/unità","Koszt/szt."],"Venta/u.":["Sale/unit","Vente/unité","Verkauf/Stück","Vendita/unità","Sprzedaż/szt."],"Beneficio/u.":["Profit/unit","Bénéfice/unité","Gewinn/Stück","Profitto/unità","Zysk/szt."],"Acciones":["Actions","Actions","Aktionen","Azioni","Działania"],"Cargar":["Load","Charger","Laden","Carica","Wczytaj"],"No se ha podido iniciar el almacenamiento del PC.":["Could not start PC storage.","Impossible de démarrer le stockage sur le PC.","Der PC-Speicher konnte nicht gestartet werden.","Impossibile avviare l’archiviazione del PC.","Nie udało się uruchomić pamięci komputera."],"No se pudo guardar el orden en SQLite:":["Could not save the order in SQLite:","Impossible d’enregistrer l’ordre dans SQLite :","Die Reihenfolge konnte nicht in SQLite gespeichert werden:","Impossibile salvare l’ordine in SQLite:","Nie udało się zapisać kolejności w SQLite:"],"No se pudo guardar el estado del apartado en SQLite:":["Could not save the section state in SQLite:","Impossible d’enregistrer l’état de la section dans SQLite :","Der Abschnittsstatus konnte nicht in SQLite gespeichert werden:","Impossibile salvare lo stato della sezione in SQLite:","Nie udało się zapisać stanu sekcji w SQLite:"],"Introduce una dirección que empiece por http:// o https://.":["Enter an address beginning with http:// or https://.","Saisissez une adresse commençant par http:// ou https://.","Geben Sie eine Adresse ein, die mit http:// oder https:// beginnt.","Inserisci un indirizzo che inizi con http:// o https://.","Wpisz adres zaczynający się od http:// lub https://."],"Probando conexión…":["Testing connection…","Test de la connexion…","Verbindung wird getestet…","Verifica della connessione…","Testowanie połączenia…"],"Conexión correcta (HTTP {status}). Respuesta recibida del puente local.":["Connection successful (HTTP {status}). Response received from the local bridge.","Connexion réussie (HTTP {status}). Réponse reçue du pont local.","Verbindung erfolgreich (HTTP {status}). Antwort von der lokalen Bridge empfangen.","Connessione riuscita (HTTP {status}). Risposta ricevuta dal bridge locale.","Połączenie działa (HTTP {status}). Otrzymano odpowiedź z lokalnego mostu."],"No se pudo confirmar la conexión: {message}. Comprueba que el puente está iniciado, la dirección es correcta y el navegador permite la conexión local.":["Could not confirm the connection: {message}. Check that the bridge is running, the address is correct, and the browser allows local connections.","Impossible de confirmer la connexion : {message}. Vérifiez que le pont est démarré, que l’adresse est correcte et que le navigateur autorise les connexions locales.","Verbindung konnte nicht bestätigt werden: {message}. Prüfen Sie, ob die Bridge läuft, die Adresse korrekt ist und der Browser lokale Verbindungen zulässt.","Impossibile confermare la connessione: {message}. Verifica che il bridge sia avviato, che l’indirizzo sia corretto e che il browser consenta connessioni locali.","Nie można potwierdzić połączenia: {message}. Sprawdź, czy most jest uruchomiony, adres jest poprawny, a przeglądarka zezwala na połączenia lokalne."],"No se pudo leer SQLite":["Could not read SQLite","Impossible de lire SQLite","SQLite konnte nicht gelesen werden","Impossibile leggere SQLite","Nie udało się odczytać SQLite"],"No se pudo guardar la lista en SQLite":["Could not save the list in SQLite","Impossible d’enregistrer la liste dans SQLite","Die Liste konnte nicht in SQLite gespeichert werden","Impossibile salvare l’elenco in SQLite","Nie udało się zapisać listy w SQLite"],"No se han encontrado impresoras":["No printers found","Aucune imprimante trouvée","Keine Drucker gefunden","Nessuna stampante trovata","Nie znaleziono drukarek"],"Selecciona una impresora…":["Select a printer…","Sélectionnez une imprimante…","Drucker auswählen…","Seleziona una stampante…","Wybierz drukarkę…"],"Impresora seleccionada y conectada: {ip}.":["Printer selected and connected: {ip}.","Imprimante sélectionnée et connectée : {ip}.","Drucker ausgewählt und verbunden: {ip}.","Stampante selezionata e connessa: {ip}.","Wybrano i połączono drukarkę: {ip}."],"Conectando con {ip}…":["Connecting to {ip}…","Connexion à {ip}…","Verbindung mit {ip} wird hergestellt…","Connessione a {ip}…","Łączenie z {ip}…"],"No se pudo seleccionar la impresora: {message}":["Could not select the printer: {message}","Impossible de sélectionner l’imprimante : {message}","Drucker konnte nicht ausgewählt werden: {message}","Impossibile selezionare la stampante: {message}","Nie udało się wybrać drukarki: {message}"],"Bobina alternativa seleccionada: {brand} · {color}. Hay {stock} g; tras el trabajo quedarían {after} g.{shortage} El inventario no se modifica.":["Alternative spool selected: {brand} · {color}. {stock} g available; {after} g would remain after the job.{shortage} Inventory is unchanged.","Bobine alternative sélectionnée : {brand} · {color}. {stock} g disponibles ; il resterait {after} g après le travail.{shortage} Le stock n’est pas modifié.","Alternative Spule ausgewählt: {brand} · {color}. {stock} g verfügbar; nach dem Auftrag blieben {after} g.{shortage} Der Lagerbestand wird nicht geändert.","Bobina alternativa selezionata: {brand} · {color}. Disponibili {stock} g; dopo il lavoro resterebbero {after} g.{shortage} L’inventario non cambia.","Wybrana alternatywna szpula: {brand} · {color}. Dostępne {stock} g; po pracy pozostałoby {after} g.{shortage} Stan magazynowy nie ulega zmianie."]," Stock insuficiente.":[" Insufficient stock."," Stock insuffisant."," Bestand unzureichend."," Scorta insufficiente."," Niewystarczający stan magazynowy."]};
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 for(const [key,values] of Object.entries(PCP_V1487_ADDITIONS)){if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;}
})();
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.488: lote adicional de cadenas de interfaz centralizadas (seis idiomas).
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.489: cadenas adicionales de interfaz centralizadas en el diccionario principal.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.490: ampliación del diccionario centralizado para monitor U1 y contabilidad.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();

// v1.491: traducciones centralizadas adicionales para el monitor U1 y el control de consumo.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.492: centralización adicional de mensajes de lectura del G-code activo de la U1.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.493: centralización de mensajes de validación e informes de Contabilidad.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.495: etiquetas y estados del informe contable centralizados.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.496: textos de Opciones y estado de conexión del puente U1.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.497: mensajes de validación y exportación del módulo Contabilidad.
;
if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.498 — mensajes de interfaz centralizados del cálculo, clientes e imágenes.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.499 — conexión y diagnóstico U1: los mensajes dinámicos usan el diccionario central.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.500 — mensajes de configuración y prueba de conexión de la Snapmaker U1.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.501 — textos adicionales del selector y estado de impresoras U1.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.502 — mensajes dinámicos del consumo de filamento y revisión de traducciones polacas.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.503 — opciones de moneda, impuestos y prueba de conexión de impresora.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.504 — etiquetas del selector y detección de impresoras, verificadas contra monitor-u1-impresora.js.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.505 — mensajes de conexión y persistencia del selector U1, contrastados con monitor-u1-impresora.js.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.507 — estados de lectura del G-code activo centralizados y conectados al traductor.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.508 — etiquetas visibles de Opciones centralizadas en el diccionario.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.509 — estados de prueba de conexión de Opciones centralizados.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.510 — etiquetas de estado y avisos del monitor U1 conectados al traductor central.

if(window.PCP_I18N&&window.PCP_I18N.refresh)window.PCP_I18N.refresh();


// v1.511 — auditoría de cobertura: cadenas nuevas de monitor U1, contabilidad y documentos añadidas al diccionario central para los seis idiomas.

if(window.PCP_I18N&&typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();

;
if(window.PCP_I18N){if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();}


// v1.515 — audyt łańcuchów komunikatów dynamicznych i korekty polskich tłumaczeń.
;(function(){
 const d=window.PCP_I18N&&window.PCP_I18N.dictionary; if(!d)return;
 
 if(typeof window.PCP_I18N.completePolish==='function')window.PCP_I18N.completePolish();
 if(typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
})();

// v1.515 — formatos traducibles para mensajes con valores dinámicos.
;(function(){const d=window.PCP_I18N&&window.PCP_I18N.dictionary;if(!d)return;if(window.PCP_I18N.completePolish)window.PCP_I18N.completePolish();if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();})();


// v1.527 — Audyt uzupełniający: poprawki polskich tłumaczeń bez dodawania duplikatów.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const fixes={"Color (nombre y HEX)":"Kolor (nazwa i kod HEX)","＋ Añadir color/material":"＋ Dodaj kolor/materiał","Color del filamento":"Kolor filamentu","Conexión con la Snapmaker U1":"Połączenie z drukarką Snapmaker U1","✓ Calcular precio final":"✓ Oblicz cenę końcową","Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.":"Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.","El archivo se procesa en este navegador y no se envía a ningún servidor.":"Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.","Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.":"Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.","Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.":"Po sprawdzeniu danych części oblicz zalecaną cenę sprzedaży i rentowność.","El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.":"Zysk jest obliczany na podstawie ceny sprzedaży bez podatku; pobrany podatek jest wykazywany osobno. Prowizja jest naliczana od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — wprowadź koszty w wybranej walucie.","Material, color y marca":"Materiał, kolor i marka","Color (A–Z)":"Kolor (A–Z)","Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko koszt filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):","Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko koszt filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:","＋ Guardar color personalizado":"＋ Zapisz własny kolor","Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.":"Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument przeznaczony do wydruku nie pokazuje kosztów wewnętrznych ani marży.","Ver impresora conectada":"Zobacz podłączoną drukarkę","Material / color":"Materiał / kolor","Preferencias generales de Print Cost & Profit. Los cambios se guardan en la base de datos SQLite de este PC.":"Ogólne ustawienia Print Cost & Profit. Zmiany są zapisywane w bazie danych SQLite na tym komputerze.","Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.":"Wyeksportuj informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.","🖨️ Conexión con la Snapmaker U1":"🖨️ Połączenie z drukarką Snapmaker U1","Contabilidad · Print Cost & Profit":"Księgowość · Print Cost & Profit","Color aproximado (HEX inventario: {hex}); revisa la bobina.":"Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.","Fuente confirmada: G-code activo de la U1 · {file}":"Potwierdzone źródło: aktywny plik G-code drukarki U1 · {file}","Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.":"Wstępne oszacowanie, nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.","Venta/u.":"Sprzedaż/szt.","Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.":"Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.","Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.":"Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.","Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».":"Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.","No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.":"Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.","Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.","Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.","El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.":"Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.","Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?":"Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby móc w razie potrzeby przywrócić poprzedni stan. Kontynuować?","Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?":"Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?","¿Eliminar el color personalizado {hex} de la paleta?":"Czy usunąć własny kolor {hex} z palety?","IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}":"PODŁĄCZONA DRUKARKA · {name} · IP {ip} · Stan: {state} · Plik: {file} · Oprogramowanie: {software}","consultando la impresora conectada":"sprawdzanie stanu podłączonej drukarki","Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».":"Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.","Introduce los datos del nuevo cliente.":"Wprowadź dane nowego klienta.","Conectado":"Połączono","Desconectado":"Rozłączono","Listo":"Gotowe","Introduce un precio de venta superior a 0 {currency} para evaluar la rentabilidad.":"Aby ocenić rentowność, podaj cenę sprzedaży wyższą niż 0 {currency}.","¿Eliminar el color personalizado {color} de la paleta?":"Czy usunąć własny kolor {color} z palety?","Probar conexión":"Przetestuj połączenie"};
 let corrected=0;
 for(const [key,polish] of Object.entries(fixes)){
   if(Object.prototype.hasOwnProperty.call(dict,key)&&Array.isArray(dict[key])&&dict[key].length>=5){dict[key][4]=polish;corrected++;}
 }
 if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();
})();


// v1.528 — audyt uzupełniający: poprawione polskie tłumaczenia i brakujące klucze bez duplikowania istniejących wpisów.
;(function(){
 const api=window.PCP_I18N, dict=api&&api.dictionary;
 if(!dict)return;
 if(typeof api.completePolish==='function')api.completePolish();
 const polishFixes={
  "Color del filamento":"Kolor filamentu",
  "Estado":"Stan",
  "Conexión con la Snapmaker U1":"Połączenie z drukarką Snapmaker U1",
  "🖨️ Conexión con la Snapmaker U1":"🖨️ Połączenie z drukarką Snapmaker U1",
  "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.":"Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.",
  "El archivo se procesa en este navegador y no se envía a ningún servidor.":"Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.",
  "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.":"Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.",
  "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.":"Po sprawdzeniu danych części oblicz zalecaną cenę sprzedaży i rentowność.",
  "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.":"Zysk jest obliczany od ceny sprzedaży bez podatku, a pobrany podatek wykazywany jest osobno. Prowizja jest naliczana od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — wprowadź koszty w wybranej walucie.",
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):",
  "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:":"Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:",
  "Venta directa · 0%":"Sprzedaż bezpośrednia · 0%",
  "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.":"Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument do wydruku nie pokazuje kosztów wewnętrznych ani marży.",
  "Ver impresora conectada":"Wyświetl podłączoną drukarkę",
  "Impresoras encontradas":"Znalezione drukarki",
  "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.":"Print Cost & Profit v1.283 · lokalna baza SQLite na komputerze; diagnostyka integralności i kopii zapasowych.",
  "Esperando puente…":"Oczekiwanie na most komunikacyjny…",
  "Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.":"Wyeksportuj informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.",
  "Precio del filamento importado desde el laminador: {n} precio(s) por kg. Comprueba que coincida con el precio de tu bobina.":"Cena filamentu zaimportowana z programu do cięcia: {n} cena(y) za kg. Sprawdź, czy odpowiada cenie Twojej szpuli.",
  "Stock insuficiente: hay {stock} g y se necesitan {need} g; faltarían {missing} g. No llegaría con esta bobina.":"Niewystarczający stan magazynowy: dostępne {stock} g, wymagane {need} g; brakuje {missing} g. Ta szpula nie wystarczy.",
  "Color aproximado (HEX inventario: {hex}); revisa la bobina.":"Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.",
  "No se pudo guardar automáticamente en este navegador":"Nie udało się automatycznie zapisać danych w tej przeglądarce",
  "{n} filamento(s) · {assigned} asignación(es) correctas · {pending} pendiente(s) de revisar":"{n} filamentów · {assigned} prawidłowo przypisanych szpul · {pending} do sprawdzenia",
  "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.":"Wstępne oszacowanie — nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.",
  "Venta/u.":"Sprzedaż/szt.",
  "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.":"Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.",
  "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.":"Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.",
  "Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».":"Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.",
  "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.":"Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.",
  "Nombre de tu negocio":"Nazwa Twojej firmy",
  "FDM rápido con alimentador preparado para multicolor: 80 EUR por 1.000 h":"Szybka drukarka FDM z podajnikiem do druku wielokolorowego: 80 EUR na 1000 godzin",
  "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.",
  "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.":"To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.",
  "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.":"Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.",
  "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.":"To zadanie jest już zapisane w Księgowości. Nie utworzono duplikatu.",
  "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?":"Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby w razie potrzeby móc przywrócić poprzedni stan. Kontynuować?",
  "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?":"Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?",
  "¿Eliminar el color personalizado {hex} de la paleta?":"Czy usunąć własny kolor {hex} z palety?",
  "IMPRESORA CONECTADA · {name} · IP {ip} · Estado: {state} · Archivo: {file} · Software: {software}":"PODŁĄCZONA DRUKARKA · {name} · IP {ip} · Stan: {state} · Plik: {file} · Oprogramowanie: {software}",
  "consultando la impresora conectada":"sprawdzanie stanu podłączonej drukarki",
  "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.":"Serwer i SQLite zostały sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {backups}.",
  "Estado:":"Stan:",
  "Carpeta de copias:":"Folder kopii zapasowych:",
  "Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».":"Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.",
  "Introduce los datos del nuevo cliente.":"Wprowadź dane nowego klienta.",
  "Marca de filamento":"Marka filamentu",
  "¿Eliminar esta bobina?":"Czy usunąć tę szpulę?",
  "Filamento":"Filament",
  "🧵 Stock filamento":"🧵 Stan magazynowy filamentu",
  "Cliente, producto, estado…":"Klient, produkt, stan…",
  "Ordenar filamento":"Sortuj filament",
  "Conectado":"Połączono",
  "Desconectado":"Rozłączono",
  "Listo":"Gotowe",
  "Buscando…":"Wyszukiwanie…",
  "ready":"Gotowe",
  "Stock insuficiente.":"Niewystarczający stan magazynowy.",
  "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.":"Magazyn: łącznie {all} szpul · {filtered} szpul w tym filtrze.",
  "Filamento (sin peso detectado)":"Filament (masa niewykryta)",
  "Fuente: leyendo G-code activo de la U1: {file}":"Źródło: odczytywany aktywny plik G-code drukarki U1: {file}",
  "Inventario: hay {stock} g · gastaría {used} g · quedarían {left} g.":"Stan magazynowy: dostępne {stock} g · zużycie wyniosłoby {used} g · pozostałoby {left} g.",
  "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.":"Cena referencyjna: najpierw udokumentowana cena początkowa, a jeśli jej brak — aktualna cena sprzedaży; można ją edytować i nie oznacza kwoty zapłaconej za urządzenie. Zaimportowane kwoty podano w EUR; dla źródeł w USD zastosowano kurs EBC z 21.10.2026 (1 EUR = 1,1234 USD). Koszt konserwacji jest szacunkiem budżetowym zależnym od złożoności (zestaw części zamiennych na 1000 godzin), a nie stawką producenta; można go edytować. Jeśli brak źródła ceny, pole pozostaje puste. Początkowa żywotność wynosi 10 000 godzin i można ją edytować. Koszty energii elektrycznej, amortyzacji i konserwacji są obliczane oddzielnie.",
  "Print Cost & Profit · Versión 1.479":"Print Cost & Profit · Wersja 1.479"
 };
 let corrected=0;
 for(const [key,pl] of Object.entries(polishFixes)){
   if(Object.prototype.hasOwnProperty.call(dict,key)&&Array.isArray(dict[key])&&dict[key].length>=5){if(dict[key][4]!==pl){dict[key][4]=pl;corrected++;}}
 }
 const additions={
  "Sin cliente":["No customer","Aucun client","Kein Kunde","Nessun cliente","Brak klienta"],
  "Guardar cambios del pedido":["Save order changes","Enregistrer les modifications de la commande","Auftragsänderungen speichern","Salva modifiche ordine","Zapisz zmiany zamówienia"],
  "Presupuestos abierto. Selecciona o crea el cliente antes de guardar.":["Quotes are open. Select or create the customer before saving.","Les devis sont ouverts. Sélectionnez ou créez le client avant d’enregistrer.","Angebote sind geöffnet. Wählen Sie vor dem Speichern einen Kunden aus oder legen Sie einen neuen an.","Preventivi aperti. Seleziona o crea il cliente prima di salvare.","Otwarto oferty. Przed zapisaniem wybierz klienta lub utwórz nowego."],
  "Presupuesto cargado. Puedes modificar los datos y guardarlo como otro presupuesto.":["Quote loaded. You can edit the details and save it as another quote.","Devis chargé. Vous pouvez modifier les informations et l’enregistrer comme un autre devis.","Angebot geladen. Sie können die Angaben ändern und als weiteres Angebot speichern.","Preventivo caricato. Puoi modificare i dati e salvarlo come un altro preventivo.","Wczytano ofertę. Możesz zmienić dane i zapisać ją jako kolejną ofertę."],
  "Presupuesto eliminado.":["Quote deleted.","Devis supprimé.","Angebot gelöscht.","Preventivo eliminato.","Oferta została usunięta."],
  "Comparar":["Compare","Comparer","Vergleichen","Confronta","Porównaj"],
  "No se pudo guardar el estado del apartado en SQLite:":["Could not save the section state in SQLite:","Impossible d’enregistrer l’état de la section dans SQLite :","Der Abschnittsstatus konnte nicht in SQLite gespeichert werden:","Impossibile salvare lo stato della sezione in SQLite:","Nie udało się zapisać stanu sekcji w SQLite:"]
 };
 let added=0;
 for(const [key,values] of Object.entries(additions))if(!Object.prototype.hasOwnProperty.call(dict,key)){dict[key]=values;added++;}
 if(typeof api.refresh==='function')api.refresh();
 window.PCP_TRANSLATION_AUDIT_V1528={corrected,added};
})();

// v1.529 — korekty pełnych zdań po polsku; bez automatycznych podmian słów i bez duplikowania kluczy.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary; if(!dict)return;
 const fixes={"Mantenimiento y recambios": "Konserwacja i części zamienne", "Presupuestos guardados": "Zapisane oferty", "🛡️ Base de datos y copias de seguridad": "🛡️ Baza danych i kopie zapasowe", "10 copias": "10 kopii zapasowych", "25 copias": "25 kopii zapasowych", "50 copias": "50 kopii zapasowych", "200 copias": "200 kopii zapasowych", "500 copias": "500 kopii zapasowych", "Copias guardadas": "Zapisane kopie zapasowe", "Copias de seguridad disponibles": "Dostępne kopie zapasowe", "Todavía no hay copias SQLite.": "Nie ma jeszcze kopii zapasowych SQLite.", "Agenda central de clientes. Los clientes guardados aquí se pueden seleccionar desde presupuestos, facturas y seguimiento de pedidos.": "Centralna książka klientów. Zapisanych tutaj klientów można wybierać w ofertach, fakturach i śledzeniu zamówień.", "Presupuestos · Clientes y documentos": "Oferty · Klienci i dokumenty", "💾 Copias de seguridad": "💾 Kopie zapasowe", "📄 Presupuestos": "📄 Oferty", "🧾 Facturas": "🧾 Faktury", "Se usa al guardar la tasación para clasificarla en Contabilidad. Personal no genera ventas ni beneficios comerciales.": "Opcja służy do klasyfikowania wyceny w Księgowości podczas jej zapisywania. Wydruki na własny użytek nie generują sprzedaży ani zysku handlowego.", "El archivo se procesa en este navegador y no se envía a ningún servidor.": "Plik jest przetwarzany w tej przeglądarce i nie jest wysyłany na żaden serwer.", "Snapmaker U1: estimación 160 EUR por 1.000 h (0,16 EUR/h); editable y no garantizada por fabricante.": "Snapmaker U1: szacunkowy koszt 160 EUR na 1000 godzin (0,16 EUR/h); wartość można edytować i nie jest gwarantowana przez producenta.", "Cuando termines de revisar los datos de la pieza, calcula el precio recomendado y la rentabilidad.": "Po sprawdzeniu danych części oblicz zalecaną cenę sprzedaży i rentowność.", "El beneficio se calcula sobre la venta sin impuestos; el impuesto cobrado se muestra aparte. La comisión se calcula sobre el importe total cobrado. Cambiar la moneda no convierte importes con un tipo de cambio: introduce los costes en la moneda seleccionada.": "Zysk oblicza się od ceny sprzedaży bez podatku; pobrany podatek jest wykazywany osobno. Prowizję oblicza się od całej pobranej kwoty. Zmiana waluty nie przelicza kwot według kursu wymiany — koszty należy wprowadzić w wybranej walucie.", "Precio de referencia: primero el precio de lanzamiento documentado y, si no, el precio actual de venta; es editable y no indica lo pagado. Los importes cargados están en EUR; para fuentes USD se aplicó el cambio BCE del 21-10-2026 (1 EUR = 1,1234 USD). Mantenimiento es una estimación presupuestaria por complejidad (cesta de repuestos por 1.000 h), no una tarifa del fabricante; puedes editarla. Para el precio sin fuente, el campo sigue vacío. Vida útil inicial de 10.000 h editable. Electricidad, amortización y mantenimiento se calculan por separado.": "Cena referencyjna to udokumentowana cena początkowa, a jeśli jej brak — aktualna cena sprzedaży. Można ją edytować; nie oznacza kwoty faktycznie zapłaconej. Zaimportowane kwoty podano w EUR; dla źródeł w USD zastosowano kurs EBC z 21.10.2026 (1 EUR = 1,1234 USD). Koszt konserwacji jest szacunkiem budżetowym zależnym od złożoności (zestaw części zamiennych na 1000 godzin), a nie stawką producenta; można go edytować. Jeśli brak źródła ceny, pole pozostaje puste. Początkowa żywotność wynosi 10 000 godzin i można ją edytować. Koszty energii elektrycznej, amortyzacji i konserwacji są obliczane oddzielnie.", "Estimación Snapmaker U1: 160 EUR de cesta presupuestaria / 1.000 h. Editable.": "Szacunkowy budżet części zamiennych dla Snapmaker U1: 160 EUR na 1000 godzin. Wartość można edytować.", "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Importe TOTAL que se cobrará al cliente (con impuestos incluidos):": "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}CAŁKOWITA kwota do pobrania od klienta (z podatkami):", "Coste TOTAL estimado de fabricación de «{file}» (no solo filamento). Desglose: {breakdown}. {context}Revisa el tiempo de impresión y corrige el coste de fabricación si es necesario:": "Szacowany CAŁKOWITY koszt wykonania „{file}” (nie tylko filamentu). Zestawienie: {breakdown}. {context}Sprawdź czas drukowania i w razie potrzeby popraw koszt wykonania:", "Control manual de bobinas y material restante. El precio por kilo sirve como referencia para los próximos cálculos.": "Ręczna kontrola szpul i pozostałego materiału. Cena za kilogram służy jako punkt odniesienia do kolejnych obliczeń.", "Introduce los datos del cliente en este formulario. Al guardar el presupuesto, el cliente nuevo se añadirá automáticamente a la pestaña «Clientes» para reutilizarlo en pedidos, presupuestos y facturas. El documento imprimible no muestra los costes internos ni el margen.": "Wprowadź dane klienta w tym formularzu. Po zapisaniu oferty nowy klient zostanie automatycznie dodany do karty „Klienci”, aby można go było ponownie wybierać przy zamówieniach, ofertach i fakturach. Dokument do wydruku nie pokazuje kosztów wewnętrznych ani marży.", "Impresoras encontradas": "Znalezione drukarki", "Estados Unidos · depende del estado/localidad": "Stany Zjednoczone · zależnie od stanu lub miejscowości", "Print Cost & Profit v1.283 · SQLite local en el PC; diagnóstico de integridad y copias de seguridad.": "Print Cost & Profit v1.283 · lokalna baza SQLite na komputerze; diagnostyka integralności i kopii zapasowych.", "Exporta la información guardada por esta aplicación en el almacenamiento local del navegador. Guarda el archivo fuera de la carpeta temporal.": "Eksportuje informacje zapisane przez aplikację w pamięci lokalnej przeglądarki. Zapisz plik poza folderem tymczasowym.", "Precio del filamento importado desde el laminador: {n} precio(s) por kg. Comprueba que coincida con el precio de tu bobina.": "Cena filamentu zaimportowana z programu do cięcia: {n} cena/ceny za kg. Sprawdź, czy odpowiada cenie Twojej szpuli.", "Stock insuficiente: hay {stock} g y se necesitan {need} g; faltarían {missing} g. No llegaría con esta bobina.": "Niewystarczający stan magazynowy: dostępne {stock} g, wymagane {need} g; brakuje {missing} g. Ta szpula nie wystarczy.", "Color aproximado (HEX inventario: {hex}); revisa la bobina.": "Przybliżony kolor (kod HEX z magazynu: {hex}); sprawdź szpulę.", "No se pudo guardar automáticamente en este navegador": "Nie udało się automatycznie zapisać danych w tej przeglądarce.", "Estimación preliminar, no es una medición real por color. El stock solo se descuenta al completar el trabajo.": "Wstępne oszacowanie — nie jest to rzeczywisty pomiar zużycia poszczególnych kolorów. Stan magazynowy zostanie pomniejszony dopiero po zakończeniu zadania.", "Precio de compra sin introducir: amortización 0 por hora. La vida útil de 10.000 h es un supuesto editable.": "Nie podano ceny zakupu: amortyzacja wynosi 0 na godzinę. Żywotność 10 000 godzin jest edytowalnym założeniem.", "Precio recomendado de referencia: {gross} con impuestos · beneficio de referencia: {profit} por unidad. Los suplementos A/B/C se suman a ese precio. Impuesto: {tax} · Comisión aplicada al precio con impuestos: {commission} · Unidades: {units}. ★ indica el mayor beneficio por unidad.": "Orientacyjna zalecana cena: {gross} z podatkami · orientacyjny zysk na sztukę: {profit}. Dodatki A/B/C są doliczane do tej ceny. Podatek: {tax} · Prowizja naliczana od ceny z podatkami: {commission} · Liczba sztuk: {units}. ★ oznacza najwyższy zysk na sztukę.", "Se encontraron {count} impresoras. Elige la IP que quieres utilizar en «Impresoras encontradas».": "Znaleziono drukarki: {count}. Wybierz adres IP, którego chcesz użyć w sekcji „Znalezione drukarki”.", "No se pudo buscar automáticamente la impresora: {error}. Puedes usar la IP guardada o buscar manualmente.": "Nie udało się automatycznie wyszukać drukarki: {error}. Możesz użyć zapisanego adresu IP lub wyszukać ją ręcznie.", "Nombre de tu negocio": "Nazwa Twojej firmy", "Multicabezal/toolchanger: cesta presupuestaria de 160 EUR por 1.000 h": "Drukarka wielogłowicowa/toolchanger: szacunkowy budżet części zamiennych 160 EUR na 1000 godzin", "IDEX de doble extrusor: cesta presupuestaria de 120 EUR por 1.000 h": "Drukarka IDEX z dwoma ekstruderami: szacunkowy budżet części zamiennych 120 EUR na 1000 godzin", "Inventario: {all} bobina(s) en total · {filtered} bobina(s) en este filtro.": "Magazyn: łącznie {all} szpul · {filtered} szpul w tym filtrze.", "No hay facturas guardadas": "Nie zapisano jeszcze żadnych faktur.", "Este trabajo ya está registrado como personal. ¿Quieres cambiarlo a pedido? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako użytek własny. Czy chcesz zmienić je na zamówienie? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.", "Este trabajo ya está registrado como pedido. ¿Quieres cambiarlo a personal? Se sustituirán las entradas anteriores de este G-code.": "To zadanie jest już zapisane jako zamówienie. Czy chcesz zmienić je na użytek własny? Wcześniejsze wpisy dotyczące tego pliku G-code zostaną zastąpione.", "El navegador bloqueó la ventana de la factura. Permite las ventanas emergentes para este archivo.": "Przeglądarka zablokowała okno faktury. Zezwól na wyskakujące okna dla tego pliku.", "Este trabajo ya está registrado en Contabilidad. No se ha creado un duplicado.": "To zadanie jest już zapisane w Księgowości. Nie utworzono duplikatu.", "Restaurar esta copia reemplazará los datos locales actuales de la aplicación. Antes exporta una copia de seguridad por si necesitas volver atrás. ¿Continuar?": "Przywrócenie tej kopii zastąpi bieżące dane aplikacji zapisane lokalnie. Przed kontynuowaniem wyeksportuj kopię zapasową, aby w razie potrzeby móc przywrócić poprzedni stan. Kontynuować?", "Se van a reemplazar las claves locales incluidas en la copia. Antes de continuar, exporta una copia actual. ¿Deseas continuar?": "Lokalne wpisy zawarte w kopii zostaną zastąpione. Przed kontynuowaniem wyeksportuj aktualną kopię zapasową. Czy chcesz kontynuować?", "¿Eliminar el color personalizado {hex} de la paleta?": "Czy usunąć własny kolor {hex} z palety?", "consultando la impresora conectada": "Sprawdzanie stanu podłączonej drukarki", "Servidor y SQLite comprobados. Base: {database}. Carpeta de copias: {backups}.": "Serwer i SQLite zostały sprawdzone. Baza danych: {database}. Folder kopii zapasowych: {backups}.", "Se han cargado 2 impresora(s) guardadas. Puedes seleccionar y conectar cualquiera sin volver a buscar. Para descubrir impresoras nuevas, pulsa «Buscar automáticamente».": "Wczytano 2 zapisane drukarki. Możesz wybrać i połączyć się z dowolną z nich bez ponownego wyszukiwania. Aby znaleźć nowe drukarki, kliknij „Szukaj automatycznie”.", "Introduce los datos del nuevo cliente.": "Wprowadź dane nowego klienta.", "Ordenar presupuestos": "Sortuj oferty", "Ordenar facturas": "Sortuj faktury", "Venta/u.": "Sprzedaż/szt.", "Material, color y marca": "Materiał, kolor i marka", "Color (A–Z)": "Kolor (A–Z)", "＋ Guardar color personalizado": "＋ Zapisz własny kolor", "Material / color": "Materiał / kolor", "Falta en inventario: {brand} {material} {color} ({hex}). Habría que comprar esta bobina.": "Brak w magazynie: {brand} {material} {color} ({hex}). Tę szpulę trzeba będzie kupić.", "Falta en inventario: {brand} {material} {color}. Habría que comprar esta bobina.": "Brak w magazynie: {brand} {material} {color}. Tę szpulę trzeba będzie kupić.", "Fuente: Leyendo datos del G-code… {progress}% · {file}": "Źródło: odczytywanie danych z G-code… {progress}% · {file}", "Leyendo datos del G-code… {progress}%": "Odczytywanie danych z G-code… {progress}%", "¿Eliminar esta bobina?": "Czy usunąć tę szpulę?", "El margen se calcula sobre el precio de venta sin impuestos; la rentabilidad sobre coste se calcula dividiendo el beneficio entre el coste por unidad. El impuesto mostrado es una estimación configurable. Comprueba el tipo aplicable a tu operación, país, producto y situación fiscal.": "Marżę oblicza się od ceny sprzedaży bez podatku; rentowność kosztową oblicza się, dzieląc zysk przez koszt jednostkowy. Wyświetlany podatek jest konfigurowalnym szacunkiem. Sprawdź stawkę właściwą dla transakcji, kraju, produktu i swojej sytuacji podatkowej."};
 let corrected=0;
 for(const [key,pl] of Object.entries(fixes)){if(Object.prototype.hasOwnProperty.call(dict,key)&&Array.isArray(dict[key])&&dict[key].length>=5){if(dict[key][4]!==pl){dict[key][4]=pl;corrected++;}}}
 if(window.PCP_I18N&&typeof window.PCP_I18N.refresh==='function')window.PCP_I18N.refresh();
 window.PCP_TRANSLATION_AUDIT_V1529={corrected,missingExplicitKeys:0,automaticPolishWordReplacement:false};
})();


// v1.530: traducciones explícitas para los estados y etiquetas dinámicas del monitor U1.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "En espera":["Standby","En veille","Bereit","In attesa","Oczekiwanie"],
  "Listo":["Ready","Prêt","Bereit","Pronto","Gotowe"],
  "Inactivo":["Idle","Inactif","Inaktiv","Inattivo","Bezczynny"],
  "Imprimiendo":["Printing","Impression en cours","Druck läuft","In stampa","Drukowanie"],
  "Pausada":["Paused","En pause","Pausiert","In pausa","Wstrzymano"],
  "Completada":["Completed","Terminée","Abgeschlossen","Completata","Zakończono"],
  "Cancelada":["Cancelled","Annulée","Abgebrochen","Annullata","Anulowano"],
  "Asignada":["Assigned","Attribuée","Zugewiesen","Assegnata","Przypisano"],
  "Sin asignar":["Unassigned","Non attribuée","Nicht zugewiesen","Non assegnata","Nieprzypisane"],
  "Stock insuficiente":["Insufficient stock","Stock insuffisant","Unzureichender Bestand","Scorta insufficiente","Niewystarczający stan magazynowy"],
  "Bobina":["Spool","Bobine","Spule","Bobina","Szpula"],
  "Cambiar impresora":["Switch printer","Changer d’imprimante","Drucker wechseln","Cambia stampante","Zmień drukarkę"],
  "Ocultar":["Hide","Masquer","Ausblenden","Nascondi","Ukryj"],
  "Mostrar":["Show","Afficher","Anzeigen","Mostra","Pokaż"],
  "Cerrar panel":["Close panel","Fermer le panneau","Panel schließen","Chiudi pannello","Zamknij panel"],
  "Registrar como pedido":["Record as order","Enregistrer comme commande","Als Auftrag erfassen","Registra come ordine","Zarejestruj jako zamówienie"],
  "Registrar como personal":["Record as personal expense","Enregistrer comme dépense personnelle","Als private Ausgabe erfassen","Registra come spesa personale","Zarejestruj jako wydatek osobisty"],
  "Actualizar":["Refresh","Actualiser","Aktualisieren","Aggiorna","Odśwież"],
  "Material / color":["Material / color","Matériau / couleur","Material / Farbe","Materiale / colore","Materiał / kolor"],
  "Consumo previsto · G-code activo de la U1":["Expected usage · active U1 G-code","Consommation prévue · G-code actif de l’U1","Erwarteter Verbrauch · aktiver U1-G-Code","Consumo previsto · G-code attivo della U1","Przewidywane zużycie · aktywny G-code U1"],
  "Estimación previa; no es una medición real por color. El stock solo se descuenta al completar el trabajo.":["Preliminary estimate; not an actual measurement per color. Stock is deducted only when the job finishes.","Estimation préliminaire ; ce n’est pas une mesure réelle par couleur. Le stock n’est déduit qu’à la fin du travail.","Vorläufige Schätzung, keine tatsächliche Messung pro Farbe. Der Bestand wird erst nach Abschluss des Auftrags abgezogen.","Stima preliminare; non è una misurazione reale per colore. Le scorte vengono detratte solo al termine del lavoro.","Wstępny szacunek, a nie rzeczywisty pomiar dla każdego koloru. Zapas jest odejmowany dopiero po zakończeniu zadania."]
 };
 for(const [key,values] of Object.entries(additions)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key])){for(let i=0;i<5;i++)dict[key][i]=values[i];}
 }
 if(window.PCP_I18N.refresh)window.PCP_I18N.refresh();
})();



// v1.533: traducciones completas para etiquetas inglesas que aparecían en el monitor y el inventario.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const fixes={
  "Progress":["Progress","Progression","Fortschritt","Avanzamento","Postęp"],
  "Layers":["Layers","Couches","Schichten","Livelli","Warstwy"],
  "Estimated Cena/kg":["Estimated price/kg","Prix estimé/kg","Geschätzter Preis/kg","Prezzo stimato/kg","Szacowana cena/kg"],
  "Remaining na szpula":["Remaining on spool","Restant sur la bobine","Rest auf der Spule","Residuo sulla bobina","Pozostało na szpuli"],
  "Initial na szpula":["Initial spool amount","Quantité initiale sur la bobine","Anfangsmenge der Spule","Quantità iniziale della bobina","Początkowa ilość na szpuli"],
  "black":["black","noir","schwarz","nero","czarny"],
  "white":["white","blanc","weiß","bianco","biały"],
  "yellow":["yellow","jaune","gelb","giallo","żółty"],
  "red":["red","rouge","rot","rosso","czerwony"],
  "blue":["blue","bleu","blau","blu","niebieski"],
  "sky blue":["sky blue","bleu ciel","Himmelblau","azzurro cielo","błękitny"],
  "beige":["beige","beige","beige","beige","beżowy"],
  "Assigned":["Assigned","Attribué","Zugewiesen","Assegnato","Przypisano"],
  "Estimated Total":["Estimated total","Total estimé","Geschätzte Gesamtsumme","Totale stimato","Szacunkowa suma"],
  "No file":["No file","Aucun fichier","Keine Datei","Nessun file","Brak pliku"],
  "Standby":["Standby","En veille","Bereitschaft","In attesa","Oczekiwanie"],
  "Material / color":["Material / color","Matériau / couleur","Material / Farbe","Materiale / colore","Materiał / kolor"],
  "Spool":["Spool","Bobine","Spule","Bobina","Szpula"],
  "Hide":["Hide","Masquer","Ausblenden","Nascondi","Ukryj"],
  "Close panel":["Close panel","Fermer le panneau","Panel schließen","Chiudi pannello","Zamknij panel"],
  "Refresh":["Refresh","Actualiser","Aktualisieren","Aggiorna","Odśwież"],
  "Register as order":["Register as order","Enregistrer comme commande","Als Auftrag erfassen","Registra come ordine","Zarejestruj jako zamówienie"]
 };
 for(const [key,values] of Object.entries(fixes)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];
 }
})();


// v1.541 — textos preparados para la futura integración de licencias de pago.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "El sistema de licencias todavía no está configurado.":["The licensing system is not configured yet.","Le système de licences n’est pas encore configuré.","Das Lizenzsystem ist noch nicht konfiguriert.","Il sistema di licenze non è ancora configurato.","System licencji nie jest jeszcze skonfigurowany."],
  "La dirección del servicio de licencias debe usar HTTPS.":["The licensing service URL must use HTTPS.","L’adresse du service de licences doit utiliser HTTPS.","Die URL des Lizenzdienstes muss HTTPS verwenden.","L’indirizzo del servizio di licenze deve usare HTTPS.","Adres usługi licencyjnej musi używać HTTPS."],
  "No se pudo contactar con el servicio de licencias.":["Could not contact the licensing service.","Impossible de contacter le service de licences.","Der Lizenzdienst konnte nicht erreicht werden.","Impossibile contattare il servizio di licenze.","Nie udało się połączyć z usługą licencji."],
  "Licencia de pago":["Paid license","Licence payante","Kostenpflichtige Lizenz","Licenza a pagamento","Płatna licencja"],
  "Estado de la licencia":["License status","État de la licence","Lizenzstatus","Stato della licenza","Stan licencji"],
  "Activar licencia":["Activate license","Activer la licence","Lizenz aktivieren","Attiva licenza","Aktywuj licencję"],
  "La comprobación de licencia estará disponible cuando se conecte el servicio privado.":["License checking will be available when the private service is connected.","La vérification de licence sera disponible lorsque le service privé sera connecté.","Die Lizenzprüfung ist verfügbar, sobald der private Dienst verbunden ist.","La verifica della licenza sarà disponibile quando il servizio privato sarà collegato.","Sprawdzanie licencji będzie dostępne po podłączeniu prywatnej usługi."]
 };
 for(const [key,values] of Object.entries(additions)){
  if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;
  else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];
 }
})();


// v1.542 — textos para sesión y periodo temporal sin conexión de licencias.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "Introduce tu correo electrónico y contraseña.":["Enter your email address and password.","Saisissez votre adresse e-mail et votre mot de passe.","Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.","Inserisci il tuo indirizzo e-mail e la password.","Wprowadź adres e-mail i hasło."],
  "Sin conexión: se utiliza la autorización temporal guardada.":["Offline: the saved temporary authorization is being used.","Hors ligne : l’autorisation temporaire enregistrée est utilisée.","Offline: Die gespeicherte temporäre Berechtigung wird verwendet.","Offline: viene utilizzata l’autorizzazione temporanea salvata.","Offline: używane jest zapisane tymczasowe uprawnienie."],
  "Conéctate a Internet para iniciar sesión o renovar la autorización sin conexión.":["Connect to the internet to sign in or renew offline authorization.","Connectez-vous à Internet pour vous connecter ou renouveler l’autorisation hors ligne.","Stellen Sie eine Internetverbindung her, um sich anzumelden oder die Offline-Berechtigung zu erneuern.","Connettiti a Internet per accedere o rinnovare l’autorizzazione offline.","Połącz się z Internetem, aby się zalogować lub odnowić uprawnienie offline."],
  "Periodo sin conexión agotado":["Offline period expired","Période hors ligne expirée","Offline-Zeitraum abgelaufen","Periodo offline scaduto","Okres offline wygasł"],
  "Sesión iniciada correctamente":["Signed in successfully","Connexion réussie","Erfolgreich angemeldet","Accesso riuscito","Zalogowano pomyślnie"],
  "Cerrar sesión":["Sign out","Se déconnecter","Abmelden","Esci","Wyloguj się"]
 };
 for(const [key,values] of Object.entries(additions)){if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];}
})();


// v1.544 — interfaz de inicio de sesión activada; API pendiente de conexión.
;(function(){
 const dict=window.PCP_I18N&&window.PCP_I18N.dictionary;
 if(!dict)return;
 const additions={
  "Inicia sesión con tu cuenta de la web de licencias.":["Sign in with your licensing website account.","Connectez-vous avec votre compte du site des licences.","Melden Sie sich mit Ihrem Konto auf der Lizenz-Website an.","Accedi con il tuo account del sito delle licenze.","Zaloguj się na konto w witrynie licencji."],
  "Correo electrónico":["Email address","Adresse e-mail","E-Mail-Adresse","Indirizzo e-mail","Adres e-mail"],
  "Contraseña":["Password","Mot de passe","Passwort","Password","Hasło"],
  "Cancelar":["Cancel","Annuler","Abbrechen","Annulla","Anuluj"],
  "Abrir web de licencias":["Open licensing website","Ouvrir le site des licences","Lizenz-Website öffnen","Apri il sito delle licenze","Otwórz witrynę licencji"],
  "Conectando…":["Connecting…","Connexion…","Verbindung wird hergestellt…","Connessione…","Łączenie…"],
  "Comprobando la cuenta con el servicio privado…":["Checking the account with the private service…","Vérification du compte auprès du service privé…","Konto wird beim privaten Dienst überprüft…","Verifica dell'account con il servizio privato…","Sprawdzanie konta w usłudze prywatnej…"],
  "No se pudo iniciar sesión. Comprueba tus datos o la configuración del servicio.":["Could not sign in. Check your details or service configuration.","Connexion impossible. Vérifiez vos identifiants ou la configuration du service.","Anmeldung fehlgeschlagen. Prüfen Sie Ihre Daten oder die Dienstkonfiguration.","Accesso non riuscito. Controlla i dati o la configurazione del servizio.","Nie udało się zalogować. Sprawdź dane lub konfigurację usługi."],
  "Sesión válida con autorización temporal sin conexión.":["Session valid with temporary offline authorization.","Session valide avec autorisation temporaire hors ligne.","Sitzung mit temporärer Offline-Berechtigung gültig.","Sessione valida con autorizzazione temporanea offline.","Sesja jest ważna dzięki tymczasowemu uprawnieniu offline."],
  "Sesión iniciada, pero no se pudo validar la licencia.":["Signed in, but the license could not be validated.","Session ouverte, mais la licence n'a pas pu être validée.","Angemeldet, aber die Lizenz konnte nicht überprüft werden.","Accesso effettuato, ma non è stato possibile convalidare la licenza.","Zalogowano, ale nie udało się zweryfikować licencji."],
  "Mi cuenta":["My account","Mon compte","Mein Konto","Il mio account","Moje konto"],
  "Licencia consultada":["License checked","Licence vérifiée","Lizenz geprüft","Licenza verificata","Licencja sprawdzona"],
  "Licencia Pro":["Pro license","Licence Pro","Pro-Lizenz","Licenza Pro","Licencja Pro"],
  "Licencia Gratis":["Free license","Licence gratuite","Kostenlose Lizenz","Licenza gratuita","Licencja bezpłatna"],
  "Activa":["Active","Active","Aktiv","Attiva","Aktywna"],
  "En prueba":["Trial","Essai","Testphase","Prova","Wersja próbna"],
  "Activada manualmente":["Manually activated","Activée manuellement","Manuell aktiviert","Attivata manualmente","Aktywowana ręcznie"],
  "Sin licencia Pro activa":["No active Pro license","Aucune licence Pro active","Keine aktive Pro-Lizenz","Nessuna licenza Pro attiva","Brak aktywnej licencji Pro"],
  "Caducada":["Expired","Expirée","Abgelaufen","Scaduta","Wygasła"],
  "Sin caducidad":["No expiration","Sans expiration","Kein Ablaufdatum","Senza scadenza","Bez daty wygaśnięcia"],
  "Funciones Pro activas":["Pro features active","Fonctions Pro actives","Pro-Funktionen aktiv","Funzioni Pro attive","Funkcje Pro aktywne"],
  "Funciones Pro no activas":["Pro features inactive","Fonctions Pro inactives","Pro-Funktionen inaktiv","Funzioni Pro non attive","Funkcje Pro nieaktywne"],
  "Vencimiento":["Expiration","Expiration","Ablauf","Scadenza","Wygaśnięcie"],
  "Última consulta guardada; pendiente de validar online":["Last checked result cached; online validation pending","Dernier résultat enregistré ; validation en ligne en attente","Letztes Ergebnis gespeichert; Online-Prüfung ausstehend","Ultimo risultato salvato; verifica online in attesa","Ostatni wynik zapisany; oczekiwanie na weryfikację online"],
  "No hay conexión. Se muestra la última licencia consultada; vuelve a conectarte para validarla.":["Offline. Showing the last checked license; reconnect to validate it.","Hors ligne. Dernière licence vérifiée affichée ; reconnectez-vous pour la valider.","Offline. Letzte geprüfte Lizenz wird angezeigt; zur Validierung erneut verbinden.","Offline. Mostro l'ultima licenza verificata; riconnettiti per convalidarla.","Offline. Wyświetlam ostatnio sprawdzoną licencję; połącz się ponownie, aby ją zweryfikować."],
  "Debes verificar tu correo electrónico antes de consultar la licencia. Te hemos enviado un enlace de verificación.":["Verify your email before checking your license. A verification link has been sent.","Vérifiez votre e-mail avant de consulter la licence. Un lien de vérification a été envoyé.","Bestätigen Sie Ihre E-Mail, bevor Sie die Lizenz prüfen. Ein Bestätigungslink wurde gesendet.","Verifica l'e-mail prima di controllare la licenza. È stato inviato un link di verifica.","Zweryfikuj e-mail przed sprawdzeniem licencji. Wysłano link weryfikacyjny."],
  "No se pudo conectar con la web de licencias.":["Could not connect to the licensing website.","Impossible de se connecter au site des licences.","Verbindung zur Lizenz-Website fehlgeschlagen.","Impossibile connettersi al sito delle licenze.","Nie udało się połączyć z witryną licencji."],
  "Inicia sesión para consultar la licencia.":["Sign in to check your license.","Connectez-vous pour consulter votre licence.","Melden Sie sich an, um Ihre Lizenz zu prüfen.","Accedi per controllare la licenza.","Zaloguj się, aby sprawdzić licencję."],
  "No se pudo consultar la licencia en la web.":["Could not check the license on the website.","Impossible de vérifier la licence sur le site.","Lizenz konnte auf der Website nicht geprüft werden.","Impossibile verificare la licenza sul sito.","Nie udało się sprawdzić licencji na stronie."],
  "No has iniciado sesión. La licencia se consultará después de autenticarte.":["You are not signed in. The license will be checked after authentication.","Vous n’êtes pas connecté. La licence sera vérifiée après authentification.","Sie sind nicht angemeldet. Die Lizenz wird nach der Anmeldung geprüft.","Non hai effettuato l’accesso. La licenza sarà verificata dopo l’autenticazione.","Nie jesteś zalogowany. Licencja zostanie sprawdzona po uwierzytelnieniu."],
  "Licencia verificada online":["License verified online","Licence vérifiée en ligne","Lizenz online überprüft","Licenza verificata online","Licencja zweryfikowana online"],
  "Prueba":["Trial","Essai","Testphase","Prova","Wersja próbna"],
  "Inactiva":["Inactive","Inactive","Inaktiv","Inattiva","Nieaktywna"],
  "Sesión iniciada, pero el servidor no ha devuelto una licencia válida.":["Signed in, but the server did not return a valid license.","Session ouverte, mais le serveur n’a pas renvoyé de licence valide.","Angemeldet, aber der Server hat keine gültige Lizenz zurückgegeben.","Accesso effettuato, ma il server non ha restituito una licenza valida.","Zalogowano, ale serwer nie zwrócił prawidłowej licencji."],
  "Licencia verificada online":["License verified online","Licence vérifiée en ligne","Lizenz online überprüft","Licenza verificata online","Licencja zweryfikowana online"],
  "Vencimiento":["Expiration","Expiration","Ablauf","Scadenza","Wygaśnięcie"],
  "Comprobada":["Checked","Vérifiée","Geprüft","Verificata","Sprawdzono"],
  "Caché sin conexión; no es una verificación actual":["Offline cache; this is not a current verification","Cache hors ligne ; il ne s’agit pas d’une vérification actuelle","Offline-Cache; dies ist keine aktuelle Prüfung","Cache offline; questa non è una verifica attuale","Pamięć offline; to nie jest bieżąca weryfikacja"],
  "Sesión iniciada ni verificar la licencia.":["Could not sign in or verify the license.","Impossible de se connecter ou de vérifier la licence.","Anmeldung oder Lizenzprüfung fehlgeschlagen.","Impossibile accedere o verificare la licenza.","Nie udało się zalogować ani zweryfikować licencji."],
  "Función disponible con licencia Pro":["Feature available with a Pro license","Fonction disponible avec une licence Pro","Funktion mit Pro-Lizenz verfügbar","Funzione disponibile con licenza Pro","Funkcja dostępna w licencji Pro"],
  "Esta sección requiere una licencia Pro activa. Inicia sesión o actualiza tu licencia para comprobar tus permisos.":["This section requires an active Pro license. Sign in or refresh your license to check your permissions.","Cette section nécessite une licence Pro active. Connectez-vous ou actualisez votre licence pour vérifier vos autorisations.","Dieser Bereich erfordert eine aktive Pro-Lizenz. Melden Sie sich an oder aktualisieren Sie Ihre Lizenz, um Ihre Berechtigungen zu prüfen.","Questa sezione richiede una licenza Pro attiva. Accedi o aggiorna la licenza per verificare i permessi.","Ta sekcja wymaga aktywnej licencji Pro. Zaloguj się lub odśwież licencję, aby sprawdzić uprawnienia."],
  "Esta función requiere una licencia Pro activa. Inicia sesión o actualiza tu licencia para comprobar tus permisos.":["This feature requires an active Pro license. Sign in or refresh your license to check your permissions.","Cette fonction nécessite une licence Pro active. Connectez-vous ou actualisez votre licence pour vérifier vos autorisations.","Diese Funktion erfordert eine aktive Pro-Lizenz. Melden Sie sich an oder aktualisieren Sie Ihre Lizenz, um Ihre Berechtigungen zu prüfen.","Questa funzione richiede una licenza Pro attiva. Accedi o aggiorna la licenza per verificare i permessi.","Ta funkcja wymaga aktywnej licencji Pro. Zaloguj się lub odśwież licencję, aby sprawdzić uprawnienia."]
 };
 for(const [key,values] of Object.entries(additions)){if(!Object.prototype.hasOwnProperty.call(dict,key))dict[key]=values;else if(Array.isArray(dict[key]))for(let i=0;i<5;i++)dict[key][i]=values[i];}
})();
