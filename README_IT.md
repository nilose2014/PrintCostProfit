# Print Cost & Profit
## Calcolatore dei costi di stampa 3D, inventario e gestione delle stampanti

**Windows Desktop: 2.0 | Linux: 1.4**  
Sviluppatrice: Beatriz Toro Martin

Repository ufficiale: https://github.com/nilose2014/PrintCostProfit  
Tutte le release: https://github.com/nilose2014/PrintCostProfit/releases

## 1. Download

Scarica sempre dalle release ufficiali GitHub.

### Windows 10 / 11 — Versione 2.0

**ZIP installer:** `PrintCostProfit-Setup-v2.0.zip`  
[Release Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Scarica lo ZIP e seleziona **Estrai tutto**.
2. Apri la cartella estratta.
3. Avvia `PrintCostProfit-Setup.exe` e segui la procedura guidata.

**ZIP portable:** `PrintCostProfit-Portable-v2.0.zip`  
[Release Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Scarica ed estrai lo ZIP in una cartella permanente.
2. Avvia `PrintCostProfit-Portable.exe` dalla cartella estratta.

Non eseguire file direttamente dallo ZIP. Mantieni insieme tutti i file estratti.

### Linux — Versione 1.4

[Release Linux 1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu:** `printcostprofit_1.4.1_amd64.deb`  
[Scarica .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

In alternativa, fai doppio clic sul file `.deb` e usa il gestore pacchetti del sistema.

**AppImage:** `PrintCostProfit-Linux-x86_64.AppImage`  
[Scarica AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

I pacchetti Linux sono destinati ai sistemi AMD64 a 64 bit. **Windows è alla versione 2.0; la release Linux pubblicata è la 1.4. Sono linee di rilascio separate.**

## 2. Avviso di sicurezza Windows

Gli eseguibili Windows sono distribuiti senza certificato commerciale di firma del codice. SmartScreen o altri software di sicurezza possono mostrare un avviso. Verifica che il download provenga dal repository ufficiale. Non ignorare rilevamenti antivirus reali né aggirare avvisi se l'origine non è verificabile.

## 3. Funzionalità principali

- **Calcolatore costi 3D:** stima i costi usando consumo di filamento, prezzo del materiale, tempo di stampa, funzionamento macchina, ammortamento, manutenzione e altre spese configurate.
- **Prezzo e redditività:** mostra costo stimato, prezzo di vendita, profitto, margine e prezzo consigliato. I risultati dipendono dai valori inseriti.
- **Inventario filamenti:** gestisce marche, materiali, colori, quantità delle bobine e prezzi.
- **Profili stampante:** memorizza i parametri delle apparecchiature usati nei calcoli.
- **Monitoraggio stampanti:** la Snapmaker U1 ha compatibilità completa confermata. Altre stampanti Moonraker, Fluidd o Mainsail possono funzionare secondo configurazione e funzioni supportate.
- **Integrazione slicer:** progettata per Snapmaker Orca, OrcaSlicer e Creality Print. La compatibilità è circa del 90% e varia per versione e configurazione; non è garantita al 100%.
- **Elaborazione G-code:** legge informazioni disponibili, tempo stimato, consumo stimato e metadati dei filamenti. Le stime dello slicer non equivalgono necessariamente al consumo reale.
- **Preventivi, fatture e contabilità:** strumenti per organizzare documenti commerciali e attività finanziarie.
- **SQLite locale:** Windows 2.0 salva i dati localmente con SQLite ed Electron IPC.

## 4. Architettura Windows — Versione 2.0

Windows 2.0 carica l'interfaccia da file Electron locali e non usa più il precedente bridge HTTP PowerShell. L'interfaccia comunica con SQLite tramite IPC. Le stampanti compatibili sono raggiunte in rete tramite Moonraker. Il flusso G-code Orca usa il monitoraggio locale dei file gestito da Electron. Le vecchie istruzioni sul server HTTP o sul bridge PowerShell non descrivono Windows 2.0.

## 5. Integrazione slicer

L'integrazione è pensata per applicazioni basate su OrcaSlicer, in particolare Snapmaker Orca, OrcaSlicer e Creality Print. I menu possono variare in base all'applicazione e alla versione.

1. Apri lo slicer e seleziona il profilo stampante.
2. Apri le impostazioni di stampa e attiva la modalità avanzata se necessario.
3. Cerca **Altro** e l'impostazione degli script di post-elaborazione.
4. Segui le istruzioni incluse nel pacchetto corrispondente.
5. Salva il profilo, genera un G-code di prova e verifica la ricezione delle informazioni disponibili.

Windows 2.0 usa il monitoraggio locale dei file gestito da Electron. Non seguire le vecchie istruzioni che richiedono il bridge HTTP PowerShell.

## 6. Rete della stampante

Per stampanti Moonraker compatibili, verifica che computer e stampante comunichino in rete, individua l'IP, verifica l'accesso a Moonraker e configura la connessione nell'applicazione. Le funzioni dipendono da stampante, firmware e rete. Snapmaker U1 è il modello con compatibilità completa confermata.

## 7. Dati e backup

Windows Desktop usa un database SQLite locale. Esegui backup regolari, soprattutto prima degli aggiornamenti. Non eliminare o spostare il database mentre l'applicazione è in esecuzione. Se l'inizializzazione fallisce, conserva il database e analizza l'errore prima di inserire dati importanti.

## 8. Requisiti di sistema

- **Windows:** Windows 10 o 11, 64 bit e spazio sufficiente. Serve la rete per monitorare le stampanti. I pacchetti utente non richiedono l'installazione manuale di Node.js o Python.
- **Linux:** AMD64 a 64 bit. Usa il pacchetto Debian su sistemi Debian/Ubuntu compatibili oppure l'AppImage.
- Integrazioni opzionali: Snapmaker Orca, OrcaSlicer, Creality Print e stampanti compatibili in rete.

## 9. Aggiornamento

1. Apri le release ufficiali.
2. Leggi le note e verifica sistema e versione.
3. Scarica il pacchetto corretto.
4. Esegui il backup dei dati importanti.
5. Installa o estrai il nuovo pacchetto.

Non eliminare i dati esistenti durante l'aggiornamento. Windows e Linux hanno linee di rilascio separate; controlla la versione.

## 10. Risoluzione dei problemi

- **Windows non si avvia:** verifica che lo ZIP sia estratto completamente e che i file restino insieme. Annota l'errore.
- **Avviso di sicurezza:** verifica origine e rilevamenti antivirus. La build Windows non è attualmente firmata con certificato commerciale.
- **Monitoraggio non funziona:** controlla alimentazione, rete, IP, accesso a Moonraker e impostazioni.
- **Integrazione non funziona:** controlla versione slicer, post-processing, G-code e ricezione locale.
- **Dati non salvati:** conserva il database, controlla SQLite e registra l'errore. Non cancellare i dati come soluzione improvvisata.
- **AppImage non parte:** esegui `chmod +x`, avvia da terminale e controlla gli errori. Per `.deb`, verifica installazione e dipendenze.

## 11. Codice sorgente e sviluppo

Codice sorgente: https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Per creare la distribuzione Windows:

```bash
npm run dist:win
```

Questi comandi sono per sviluppatori. Gli utenti devono scaricare i pacchetti pronti da GitHub Releases.

## 12. Licenza, copyright e supporto

Print Cost & Profit è distribuito secondo le condizioni indicate in `LICENSE.txt` nel repository. Leggi la licenza prima di ridistribuire o modificare il software.

Per segnalare un problema, includi versione, sistema operativo, modelli/versioni di stampante e slicer se pertinenti, descrizione, messaggio completo e passaggi per riprodurlo. Non includere password, chiavi private o dati personali non necessari.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Sviluppato da Beatriz Toro Martin.
