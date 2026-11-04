### v1.4 — Informacje o wersji i ręczne sprawdzanie aktualizacji
- W sekcji Opcje dodano obszar wyświetlający zainstalowaną wersję.
- Dodano przycisk „Sprawdź aktualizacje”, który umożliwia ręczne sprawdzanie stabilnych wydań w serwisie GitHub.
- Gdy dostępna jest nowsza wersja, wyświetlany jest jej numer i oferowany jest plik ZIP instalatora Windows, jeśli został dołączony; w przeciwnym razie otwierana jest oficjalna strona wydania.
- Jeśli nie ma nowszej wersji, aplikacja wyświetla odpowiednią informację. Zachowano automatyczne powiadomienie przy uruchomieniu i okresowe sprawdzanie.
- Wszystkie nowe teksty są centralnie przechowywane w `js/traducciones.js` i przetłumaczone na hiszpański, angielski, francuski, niemiecki, włoski, polski, arabski i chiński uproszczony.
- Nowe wydanie publiczne oparte na kompilacji 5.58: przebudowano centrum konserwacji, oddzielono porady od zadań, poprawiono alerty oraz obsługę Unicode/RTL w PDF. Przygotowano aktualizację z v1.3 przez instalator GitHub Releases z zachowaniem danych lokalnych.

- Pierwsza adaptacja Linuksa oparta na aplikacji Windows v1.4: natywny serwer Python, API magazynu SQLite, kopie zapasowe, dzienniki i usługi Snapmaker U1. Zachowano kod interfejsu i tłumaczenia na osiem języków. Integracja przetwarzania końcowego Orca i testy z rzeczywistą drukarką wymagają jeszcze weryfikacji.

- Przebudowano centrum konserwacji: kompaktowe karty zadań na całą szerokość, zwijane porady poniżej oraz formularz tworzenia na całą szerokość. Układ dostosowany do urządzeń mobilnych.

- PDF faktur i ofert: zastąpiono ograniczone kodowanie Helvetica/WinAnsi renderowaniem Unicode w wysokiej rozdzielczości z lokalnymi czcionkami Noto dla arabskiego i chińskiego. Generowanie PDF pozostaje lokalne i nie zależy od domyślnej przeglądarki ani zainstalowanych czcionek.

- Naprawiono panel alertów: powiadomienia o filamencie i konserwacji nie nadpisują się i nie znikają podczas odświeżania strony głównej.

- Serwer U1: poprawiono składnię PowerShell podczas budowania zapytań Moonraker z separatorami `&`; znak jest teraz generowany bezpiecznie. Skrypt zapisano z BOM UTF-8 dla Windows PowerShell 5.1 i prawidłowego wyświetlania polskich znaków.

- Monitor U1: zwiększono limit czasu zapytania o status do 8 sekund, a limit oczekiwania przeglądarki do 10 sekund. Zapobiega to oznaczaniu drukarki jako odłączonej, gdy odpowiada na żądania G-code, ale wolniej zwraca status.
- Przeprojektowano panel konserwacji, dodając czytelniejsze i responsywne karty, wskaźniki, formularze oraz historię.
- Rozszerzono kontrole prewencyjne hotendu, dysz, grzałki/termistora, ekstrudera, pasków, wentylatorów, stołu, czujników i okablowania.
- Poprawiono wykrywanie rodzin drukarek Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro i Bambu Lab.
- Nowe zadania prewencyjne są dodawane również do już zarejestrowanych drukarek bez usuwania godzin pracy, zadań niestandardowych ani historii. Typowe interwały są orientacyjne i można je edytować.
- Zaktualizowano centralne tłumaczenia we wszystkich ośmiu językach.
- Pozostała liczba gramów każdej szpuli jest wyświetlana z maksymalnie dwoma miejscami po przecinku, a edytowalne pole używa kroku 0,01 g. Zapisana wartość nie zmienia się, dopóki użytkownik nie edytuje pola.
- Odświeżono wygląd Ofert, Zamówień i Faktur: dodano wizualne nagłówki, uporządkowane formularze, ciemne pola i czytelniejsze tabele, zachowując dotychczasowe działania i przepływy.
- Ulepszono prezentację magazynu filamentów: czytelniejszy formularz, karty szpul, wskaźniki pozostałego materiału i elementy edycji.
- Ujednolicono wygląd Księgowości z panelem Start, w tym karty rentowności i panele operacji.
- Przeprojektowano kartę Klienci, dodając wizualny nagłówek, lepiej uporządkowany formularz, ciemne pola zgodne ze stroną Start i czytelniejszą hierarchię kontrolek.
- Pole Uwagi nie jest już natywnym białym polem; korzysta teraz z ciemnego motywu i stylu pozostałych pól.
- Książka adresowa prezentuje zwarte karty, czytelniejsze informacje i mniej pustego miejsca. Zachowano wyszukiwanie, edycję, zapisywanie i usuwanie klientów oraz ich użycie w ofertach, zamówieniach i fakturach.

- Przeprojektowano kartę Opcje z kompaktowymi kartami w dwóch kolumnach, wyraźniejszą hierarchią wizualną i stylem zgodnym ze stroną Start. Drukarka, kopie zapasowe, profile i dziennik zachowują pełną szerokość, gdy jest to potrzebne.
- Naprawiono przyciski „Pokaż pola” i „Ukryj pola”: teraz prawidłowo rozwijają i zwijają zawartość oraz odzwierciedlają stan za pomocą dostępnego atrybutu `aria-expanded`.
- Zachowano istniejące pola, kontrolki, preferencje kolejności i zwijania, tłumaczenia oraz zapisane dane. Baza SQLite nie jest modyfikowana.

- Poprawiono dokumentację Opcji: osiem plików README zamieniono na niezależne, zlokalizowane strony HTML.
- Każdy język otwiera własny podręcznik HTML z poziomu aplikacji; usunięto błędną ścieżkę prowadzącą do nieistniejących plików.
- Podręcznik arabski używa kierunku RTL, a wszystkie podręczniki korzystają z ciemnego motywu aplikacji.

- Zastąpiono dekoracyjne ikony górnego paska funkcjonalnymi przyciskami w stylu neonowym: alerty, dokumentacja i opcje.
- Dzwonek prowadzi do sekcji alertów i pokazuje rzeczywistą liczbę powiadomień.
- Znak zapytania otwiera podręcznik w wybranym języku; ścieżki prowadzą teraz do dołączonych, zlokalizowanych plików README.
- Koło zębate otwiera bezpośrednio kartę Opcje.

- Połączono blok „Monitor drukarek” na stronie Start z rzeczywistym endpointem `/api/u1/status` lokalnego mostu zamiast odczytywać tekst z panelu, który może być ukryty.
- Wyświetla połączenie, status, aktywny plik i postęp drukowania; pokazuje rozłączenie, gdy most lub drukarka nie odpowiada.
- Przycisk „Otwórz monitor” odświeża status przed otwarciem pełnego monitora.

- Poprawiono obliczanie wskaźników strony Start, aby używały tej samej normalizacji i zasad co Księgowość.
- Wykluczono nierozliczone wyceny i zapobiegnięto duplikowaniu przychodów powiązanych ze starszymi zamówieniami.
- Przychody, koszty, zysk, marża i otrzymana kwota są obliczane według tych samych kryteriów co Zaawansowana rentowność.
- Całkowicie przeprojektowano stronę Start: pulpit, wskaźniki, wykresy, ostatnie zadania, zapasy, skróty i alerty.
- Dane są odczytywane z lokalnej historii, księgowości i szpul; istniejące funkcje pozostają zachowane.
- Nowe teksty są scentralizowane i przetłumaczone na osiem języków.

- Dodano trwały lokalny dziennik błędów JavaScript, nieobsłużonych obietnic, problemów SQLite i aktywności głównych kontrolek.
- W Opcjach dodano podgląd z filtrami poziomu i wyszukiwaniem, a także eksport JSON i ręczne usuwanie.
- Dzienniki są przechowywane poza folderem instalacyjnym, w lokalnych danych użytkownika, z automatyczną rotacją i limitem 50 widocznych wpisów.
- Dziennik nie przechwytuje wartości formularzy ani danych wrażliwych. Wygenerowane pliki logów nigdy nie są dołączane do dystrybucyjnych archiwów ZIP.
- Wszystkie nowe teksty są centralnie zarządzane i tłumaczone na osiem języków.

### v1.3 — Tłumaczenia systemu licencji i rozszerzenie języków
- Dodano brakujące tłumaczenia w `js/traducciones.js` dla logowania, uwierzytelniania i sprawdzania licencji w językach hiszpańskim, angielskim, francuskim, niemieckim, włoskim i polskim.
- Stałe teksty globalnego okna dialogowego („Uwaga” i „Akceptuj”) korzystają z centralnego systemu tłumaczeń, bez osobnego słownika.
- Teksty aplikacji są zintegrowane i utrzymywane we wszystkich ośmiu dostępnych językach: hiszpańskim, angielskim, francuskim, niemieckim, włoskim, polskim, arabskim i chińskim uproszczonym.
- Nowe teksty i okna dialogowe są centralizowane w `js/traducciones.js`, aby uniknąć pojedynczych ciągów w plikach aplikacji.
- Dodano arabski i chiński uproszczony, rozszerzając aplikację do ośmiu języków.
- Naprawiono miniatury G-code: pobierana jest dostępna miniatura o najwyższej rozdzielczości i zachowywany jest obraz podczas wysyłania zadania z monitora do kalkulatora.
- Naprawiono drobne problemy działania, inicjalizacji, tłumaczeń i aliasów kolorów.

### v1.2 — Zmiany z 31 października: automatyczne ponowne łączenie drukarki przy uruchomieniu
- Po otwarciu aplikacji zapisany adres IP wybranej drukarki jest ponownie przekazywany do lokalnego mostu przed sprawdzeniem jej statusu.
- Sprawdzenie połączenia odbywa się po synchronizacji konfiguracji, co zapobiega wyświetlaniu drukarki online jako odłączonej z powodu starego adresu IP w moście.
- Wybór i zapisany adres IP są zachowywane, gdy drukarka jest rzeczywiście offline; nie wymusza się skanowania sieci ani zmiany drukarki.

#### Zmiany z 30 października: monitor U1, miniatury i SQLite
- Skonfigurowana drukarka i jej IP są zachowywane nawet wtedy, gdy urządzenie jest wyłączone lub nie odpowiada; jest oznaczane jako „BRAK POŁĄCZENIA”, a stare dane monitora są czyszczone.
- Czytnik aktywnego G-code wyodrębnia miniaturę o najwyższej rozdzielczości i zachowuje ją podczas wysyłania zadania do kalkulatora.
- Ograniczono zduplikowane zapisy SQLite: wybór drukarki używa kanonicznego klucza, a szkic kalkulatora jest zapisywany grupowo (350 ms), z opróżnieniem przy wyjściu.
- Zachowano historyczne klucze dla zgodności, a nowe teksty są centralizowane w `js/traducciones.js` dla sześciu języków.

### v1.1 — Pierwsza wersja publiczna i historia wcześniejszych funkcji
- Pierwsza wersja publiczna: kalkulator kosztów, wyceny, integracja Orca/G-code, monitor U1, magazyn, księgowość, klienci, oferty, zamówienia, faktury, SQLite i sześć języków.
- Ulepszenia opublikowane przed v1.2 zebrano tutaj, aby zachować spójną numerację handlową bez wyświetlania wewnętrznych numerów rozwojowych.

#### Pakiet instalacyjny Linux (DEB)
- Dodano instalator `.deb` dla 64-bitowych systemów Ubuntu i Debian, odpowiadający aplikacji v1.4.
- Pakiet używa rewizji Debiana `1.4-1`; sama aplikacja nadal zgłasza wersję v1.4.
- Zawiera pozycję w menu aplikacji i uruchamianie lokalnego serwera. Odinstalowanie zachowuje bazę SQLite, kopie zapasowe i ustawienia użytkownika.
