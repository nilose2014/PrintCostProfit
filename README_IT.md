# Print Cost & Profit

**Soluzione completa per calcolare i costi, monitorare la produzione e gestire un’attività di stampa 3D.**

Print Cost & Profit aiuta maker e piccole attività a conoscere il costo reale di ogni stampa, stabilire prezzi sostenibili, monitorare stampanti compatibili, gestire il filamento e organizzare il lavoro quotidiano.

> **Versione stabile Windows: v1.4**  
> **Pacchetto Linux: v1.4**  
> Consulta [GitHub Releases](https://github.com/nilose2014/PrintCostProfit/releases) per release e download disponibili.

## Download, repository e installazione

| Piattaforma | Download | Installazione |
|---|---|---|
| **Windows** | [Ultime release](https://github.com/nilose2014/PrintCostProfit/releases/latest): scarica l’installer `.exe` o il pacchetto Windows disponibile. | Esegui l’installer e segui la procedura. |
| **Linux** | [Ramo Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) o [Releases](https://github.com/nilose2014/PrintCostProfit/releases/latest): scarica il pacchetto Linux v1.4 quando pubblicato. | Estrai il pacchetto ed esegui lo script di avvio. |

### Link ufficiali
- Repository principale: https://github.com/nilose2014/PrintCostProfit
- Codice Linux: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Tutte le release: https://github.com/nilose2014/PrintCostProfit/releases
- Ultima release: https://github.com/nilose2014/PrintCostProfit/releases/latest
- Problemi: https://github.com/nilose2014/PrintCostProfit/issues

La pagina Releases è la fonte ufficiale per installer e pacchetti. I file possono cambiare: non usare vecchi link diretti.

### Installazione Windows
1. Apri [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Scarica l’ultimo installer `.exe` o il pacchetto ZIP disponibile.
3. Esegui l’installer oppure estrai tutto lo ZIP in una cartella scrivibile.
4. Avvia l’applicazione dal collegamento o dallo script incluso.
5. Se il browser non si apre, visita `http://127.0.0.1:8700/`.
6. Mantieni insieme i file HTML, JavaScript, CSS e del server.

Il server locale deve restare attivo. Dopo un aggiornamento, arresta il vecchio server, avvia quello dalla cartella aggiornata e ricarica con `Ctrl + F5`. Esegui backup prima di sostituire i file e non cancellare la cartella dati.

### Installazione Linux (Ubuntu, Debian e derivate)
1. Scarica il pacchetto dal [ramo Linux](https://github.com/nilose2014/PrintCostProfit/tree/linux) o da [Releases](https://github.com/nilose2014/PrintCostProfit/releases).
2. Estrai il pacchetto e apri un terminale nella cartella principale.
3. Esegui:
   ```bash
   chmod +x linux/iniciar_linux.sh
   ./linux/iniciar_linux.sh
   ```
4. Apri `http://127.0.0.1:8700/`.

Esegui i comandi in un terminale Linux; con WSL usa Ubuntu, non PowerShell. Sono necessari Python 3 e SQLite. Conserva la struttura delle cartelle. I dati utente sono separati dai file del programma. Non ignorare test di avvio non superati.

### Primo avvio e stampante
Avvia il server prima di aprire il sito. Computer e stampante devono essere raggiungibili sulla rete locale. Configura Moonraker con IP LAN e porta della stampante. Le impostazioni possono essere salvate anche a stampante spenta, ma il monitoraggio live richiede la connessione. L’integrazione Snapmaker Orca usa il flusso locale supportato e lo script post-processing incluso.

---

## Che cos’è Print Cost & Profit?

Unisce gli aspetti tecnici e commerciali della stampa 3D. Oltre a materiale e durata, considera elettricità, usura della macchina, manutenzione, manodopera, finiture, stampe fallite, scorte e prezzo finale.

Il flusso consente di importare dati G-code o inserirli manualmente, calcolare il costo reale, definire il profitto desiderato e il prezzo consigliato, controllare materiale e stampante, salvare valutazioni e documenti e seguire produzione, scorte, manutenzione e finanze.

## Funzioni principali

### 1. Calcolatrice dei costi
Considera consumo di filamento in grammi, prezzo al kg, durata, elettricità, ammortamento, costi macchina, manutenzione, manodopera, preparazione, costi extra, verniciatura e finitura per unità e riserva per stampe fallite. Mostra profitto obiettivo, prezzo consigliato, costo e profitto per unità e margine. Distingue **costo di produzione**, **prezzo di vendita**, **profitto** e **margine**.

#### G-code e slicer
L’integrazione Orca può importare nome file, materiali, colori e codici HEX, consumo stimato, durata e miniature disponibili. Verifica i dati e gli abbinamenti prima del calcolo, soprattutto per stampe multicolore o multimateriale.

#### Confronto e valutazioni salvate
Confronta scenari di prezzo e l’effetto di un diverso obiettivo di profitto o di importi aggiuntivi. Le valutazioni possono essere salvate.

### 2. Dashboard
Panoramica di vendite, costi, profitti, grafici finanziari, scorte, stato stampanti, produzione e attività recenti. I dettagli sono nelle sezioni dedicate.

### 3. Monitor stampanti — Snapmaker U1 / Moonraker
Connessione alle stampanti compatibili tramite rete locale e Moonraker. Include rilevamento e IP manuale, salvataggio connessione, stato online/offline, stato e avanzamento stampa, lavoro attivo, nome file e consumo disponibili, elenco file, miniature G-code, selezione tra più stampanti e invio del lavoro attivo alla calcolatrice.

Il computer deve raggiungere la stampante sulla rete locale. Firewall, isolamento di rete, IP errato o Moonraker non disponibile possono impedire il monitoraggio.

### 4. Inventario filamenti
Registra marca, materiale (PLA, PETG e altri), nome e codice HEX colore, peso iniziale e residuo, prezzo al kg e scorte. Confronta materiali e colori G-code con le bobine registrate. Le corrispondenze dubbie vanno verificate; gli avvisi dipendono dall’aggiornamento dei pesi.

### 5. Stampanti e profili
Configura stampanti e connessioni, le rileva in rete quando supportato, conserva i dati, mostra lo stato e associa produzione e contabilità. Il flusso è orientato a Snapmaker U1; altri dispositivi e firmware possono richiedere endpoint Moonraker compatibili e non sono necessariamente validati.

### 6. Centro manutenzione
Organizza pulizia, lubrificazione degli assi, controllo cinghie e guide, hotend, ugelli, estrusore, alimentazione filamento, ventole, raffreddamento, piano, cavi e connettori. Registra interventi e stato. Segui sempre manuale e indicazioni di sicurezza del produttore.

### 7. Preventivi, ordini e fatture
Crea e salva preventivi, gestisce ordini e fatture, associa clienti, mostra dettagli e totali, genera PDF e converte preventivi in fatture quando previsto. Verifica numerazione, imposte, valuta, cliente e PDF prima dell’invio.

### 8. Clienti
Conserva i dati dei clienti e li associa ai documenti commerciali, evitando inserimenti ripetuti e organizzando preventivi, ordini e fatture.

### 9. Contabilità
Registra movimenti e consente di esaminare entrate, costi e profitti, anche per stampante se configurato. Verifica i dati con la contabilità ufficiale e gli obblighi fiscali. Non è consulenza contabile o fiscale.

### 10. Catalogo prodotti
Organizza i prodotti realizzati o venduti. Quando disponibili, presentazione prodotti e funzioni QR collegano il prodotto fisico alle informazioni del catalogo.

### 11. Registro e diagnostica
I log locali aiutano a diagnosticare server, connessione stampante, API, importazione, integrazione, backup e archiviazione. Per segnalare problemi, includi versione, sistema, passaggi e log senza dati privati.

### 12. Backup e ripristino
Archiviazione locale con backup e ripristino nelle build supportate. Il server Linux offre API per snapshot, controllo revisioni, backup e log; Windows ha server e archiviazione propri. Esegui backup prima degli aggiornamenti, conserva copie fuori dalla cartella programma e non modificare il database durante l’esecuzione.

### 13. Opzioni e interfaccia
Raggruppa la configurazione. In base alla versione, permette di organizzare sezioni, nascondere campi e modificare l’ordine.

### 14. Otto lingue
Testi centralizzati in `js/traducciones.js`: spagnolo, inglese, francese, tedesco, italiano, polacco, arabo con supporto RTL e cinese semplificato. Nuovi campi, finestre, pulsanti, avvisi ed errori devono essere centralizzati e tradotti.

---

## Screenshot

Le immagini sono incluse in `assets/screenshots/`.

### Dashboard
![Dashboard](assets/screenshots/screenshot-02.jpg)

### Calcolatrice e dati stampa
![Calcolatrice](assets/screenshots/screenshot-03.jpg)
![Dati stampa](assets/screenshots/screenshot-01.jpg)

### Produzione e gestione commerciale
![Gestione commerciale](assets/screenshots/screenshot-05.jpg)
![Costi e prezzi](assets/screenshots/screenshot-06.jpg)
![Configurazione e documenti](assets/screenshots/screenshot-07.jpg)

### Impostazioni e aggiornamenti
![Configurazione](assets/screenshots/screenshot-08.jpg)
![Opzioni](assets/screenshots/screenshot-09.jpg)
![Versione e aggiornamenti](assets/screenshots/screenshot-10.jpg)

### Clienti, ordini e fatture
![Clienti](assets/screenshots/screenshot-12.jpg)
![Clienti e documenti](assets/screenshots/screenshot-13.jpg)
![Documenti](assets/screenshots/screenshot-14.jpg)
![Ordini e preventivi](assets/screenshots/screenshot-15.jpg)
![Fatture](assets/screenshots/screenshot-16.jpg)
![Vendite](assets/screenshots/screenshot-17.jpg)

### Filamenti e stampanti
![Scorte filamenti](assets/screenshots/screenshot-18.jpg)
![Inventario](assets/screenshots/screenshot-19.jpg)
![Stampante e materiali](assets/screenshots/screenshot-20.jpg)

### Redditività e report
![Redditività](assets/screenshots/screenshot-21.jpg)
![Riepilogo finanziario](assets/screenshots/screenshot-22.jpg)
![PDF fattura](assets/screenshots/screenshot-23.jpg)

### Manutenzione
![Centro manutenzione](assets/screenshots/screenshot-24.jpg)
![Attività manutenzione](assets/screenshots/screenshot-25.jpg)

### Altre schermate
![Schermata aggiuntiva](assets/screenshots/screenshot-04.jpg)
![Schermata aggiuntiva](assets/screenshots/screenshot-11.jpg)
![Schermata aggiuntiva](assets/screenshots/screenshot-26.jpg)

---

## Flusso di lavoro tipico
1. Prepara il lavoro nello slicer e genera G-code.
2. Importa i dati tramite Orca o inseriscili manualmente.
3. Verifica materiali e colori e associali all’inventario.
4. Controlla stampante e filamento disponibile.
5. Calcola materiale, tempo, elettricità, macchina, manodopera e finiture.
6. Definisci il prezzo e verifica il margine.
7. Salva il preventivo e associalo al cliente.
8. Monitora la stampa.
9. Registra vendita o fattura e verifica i dati finanziari.
10. Aggiorna scorte e manutenzione.

## Requisiti di sistema
**Windows:** Windows 64 bit compatibile, permessi per eseguire e scrivere i dati, rete locale e Internet per GitHub.

**Linux:** Ubuntu, Debian o derivate compatibili, Python 3, SQLite, permesso di esecuzione dello script e rete locale.

**Stampante:** connessione compatibile, API Moonraker locale accessibile, IP corretto e integrazione Orca configurata secondo il pacchetto.

## Versioni e aggiornamenti
La versione stabile Windows e il pacchetto Linux descritti sono **v1.4**. Prima di aggiornare, esegui un backup, scarica il pacchetto corretto, arresta il server, aggiorna i file, avvia il server dalla nuova cartella e verifica la versione. Non avviare due server sulla stessa porta. Indirizzo predefinito: `127.0.0.1:8700`.

## Risoluzione dei problemi
- **L’app non si apre:** verifica il server, terminale/PowerShell, apri `http://127.0.0.1:8700/` e controlla la porta 8700.
- **Versione errata:** arresta il vecchio server, avvia quello dalla cartella corretta, controlla `http://127.0.0.1:8700/api/version`, verifica `VERSION` e ricarica con `Ctrl + F5`.
- **Stampante offline:** verifica alimentazione, rete, IP, Moonraker e firewall; prova l’IP manuale.
- **Metadati o miniature mancanti:** controlla G-code e dati esportati dallo slicer; verifica materiale, colore, peso e durata.
- **Test Linux falliti:** avvia lo script dalla radice, verifica Python 3 e SQLite e conserva l’errore completo.

## Struttura del progetto
- `Print_Cost_Profit.html` — interfaccia.
- `js/` — moduli, integrazioni e traduzioni.
- `css/` — stili.
- `VERSION` — versione letta dal server.
- `Servidor_Panel_U1.ps1` — server Windows.
- `linux/` — server Linux, avvio e test.
- Dati locali — database, log e backup separati dai file del programma secondo la piattaforma.

Il contenuto può variare tra pacchetti Windows e Linux.

## Supporto e contributi
- Bug: https://github.com/nilose2014/PrintCostProfit/issues
- Codice sorgente: https://github.com/nilose2014/PrintCostProfit
- Codice Linux: https://github.com/nilose2014/PrintCostProfit/tree/linux
- Release: https://github.com/nilose2014/PrintCostProfit/releases

Includi versione, sistema operativo, pacchetto, stampante e connessione, passaggi per riprodurre, log ripuliti e screenshot. Non pubblicare password, token, credenziali private, dati clienti o database privati.

## Informazioni importanti
Print Cost & Profit supporta il calcolo dei costi e la gestione delle attività di stampa 3D. I risultati dipendono dai dati, dai metadati dello slicer, dalla configurazione, dalle tariffe elettriche, dai prezzi dei materiali e dalle impostazioni. Verifica calcoli, scorte, preventivi e fatture. Il monitoraggio dipende da servizi locali compatibili e firmware/API; le funzioni possono variare per piattaforma e versione.

**Print Cost & Profit — conosci i costi, definisci il prezzo delle stampe e gestisci il flusso di lavoro 3D.**
