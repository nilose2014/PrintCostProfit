## Historia wersji

### v1.3 — Tłumaczenia systemu licencji i obsługa języków
- Brakujące tłumaczenia dodano do `js/traducciones.js` dla procesów logowania, uwierzytelniania i sprawdzania licencji w językach hiszpańskim, angielskim, francuskim, niemieckim, włoskim i polskim.
- Stałe teksty globalnego okna dialogowego („Uwaga” i „Akceptuj”) korzystają z centralnego systemu tłumaczeń zamiast z oddzielnego słownika.
- Teksty aplikacji są zintegrowane i utrzymywane w ośmiu dostępnych językach: hiszpańskim, angielskim, francuskim, niemieckim, włoskim, polskim, arabskim i chińskim uproszczonym.
- Nowe teksty i okna dialogowe są centralizowane w `js/traducciones.js`, aby uniknąć pojedynczych ciągów tekstowych w plikach aplikacji.

### v1.2 — Zmiany z 31 października: automatyczne ponowne łączenie drukarki przy uruchomieniu
- Po otwarciu aplikacji zapisany adres IP wybranej drukarki jest ponownie przekazywany do lokalnego mostu przed sprawdzeniem jej stanu.
- Połączenie jest sprawdzane dopiero po synchronizacji konfiguracji, co zapobiega oznaczaniu drukarki online jako rozłączonej z powodu starego adresu IP w moście.
- Wybór drukarki i zapisany adres IP pozostają zachowane, gdy drukarka rzeczywiście jest offline; nie wymusza się skanowania sieci ani zmiany drukarki.

#### Zmiany z 30 października: monitor U1, miniatury i SQLite
- Skonfigurowana drukarka i jej adres IP są zachowywane nawet wtedy, gdy urządzenie jest wyłączone lub nie odpowiada; otrzymuje status „BRAK POŁĄCZENIA”, a stare dane monitora są czyszczone.
- Czytnik aktywnego G-code pobiera miniaturę o najwyższej rozdzielczości i zachowuje ją podczas wysyłania zadania do kalkulatora.
- Ograniczono zduplikowane zapisy SQLite: wybór drukarki używa kanonicznego klucza, a szkic kalkulatora jest zapisywany grupowo (350 ms), z opróżnieniem przy zamykaniu.
- Historyczne klucze pozostają obsługiwane dla zgodności, a nowe teksty są centralizowane w `js/traducciones.js` dla sześciu języków.

### v1.1 — Pierwsza wersja publiczna i historia wcześniejszych funkcji
- Pierwsza wersja publiczna: kalkulator kosztów, wyceny, integracja Orca/G-code, monitor U1, magazyn, księgowość, klienci, oferty, zamówienia, faktury, SQLite i sześć języków.
- Ulepszenia opublikowane przed v1.2 zebrano tutaj, aby zachować spójną numerację handlową bez ujawniania wewnętrznych numerów rozwojowych.
