## v2.0.224

- v2.0.224: żądania do U1, I7 i K2 PRO są teraz wysyłane bezpośrednio z głównego procesu Electron do Moonraker przez adres IP każdej drukarki. Stan, informacje o drukarce i odczyt nagłówka G-code nie przechodzą już przez lokalne endpointy PowerShell. Karty i monitor korzystają z tego samego ograniczonego transportu IPC oraz osobnej pamięci podręcznej dla każdego IP. Serwer lokalny pozostaje dla plików aplikacji, integracji Orca i usług, które nadal go wymagają.

## v2.0.222

- v2.0.222: odczyt danych filamentu nie wymaga już pobierania całego pliku G-code. Serwer pobiera tylko nagłówek (maksymalnie 8 MiB), który zawiera metadane i miniaturę. Monitor i panel współdzielą to samo zadanie dla adresu IP i nazwy pliku, unikając podwójnego pobierania; oba sprawdzają też stan tego samego wybranego adresu IP.

- v2.0.221: karta Drukarki i monitor korzystają teraz z tego samego trwałego procesu stanu dla każdego adresu IP. Każda drukarka ma własne połączenie Moonraker i pamięć podręczną; zmiana wyboru nie uruchamia ponownie ani nie zmienia procesu innego urządzenia. Karty nie korzystają już z osobnego endpointu stanu na żywo. Wspólna telemetria obejmuje teraz siatkę, czujniki i dane warstw.

## v2.0.220

- v2.0.220: analiza G-code jest teraz przypisana do dokładnego adresu IP wybranej drukarki. Zmiana drukarki anuluje również odczyt działający w tle po stronie serwera, a nie tylko odpytywanie przeglądarki. Dzięki temu stary odczyt nie zużywa zasobów ani nie zakłóca nowego wyboru.

## v2.0.219

- v2.0.219: ujednolicono przyrostowe przetwarzanie tłumaczeń, aby uniknąć wielokrotnego skanowania całego dokumentu. Powtarzane wywołania refresh są łączone, a oczekiwać może tylko jedno pełne skanowanie. Zmiana drukarki natychmiast przerywa poprzednie żądanie, nadaje priorytet ostatniemu wyborowi i nie zgłasza oczekiwanych anulowań jako błędów.

## v2.0.219

- v2.0.219: poprawiono odczyt postępu G-code, aby przejściowe stany odczytu/zapisu pliku zadania nie były zwracane jako HTTP 400; ten status otrzymują tylko nieprawidłowe identyfikatory zadań. Tłumaczenie przyrostowe podzielono na małe zadania obejmujące maksymalnie 4 węzły lub 5 ms na klatkę, a zmiana języka przetwarza dokument stopniowo.

## v2.0.217

- v2.0.217: poprawiono koordynację odpytywania podczas zmiany drukarki. Jeśli poprzednie żądanie nadal zwalnia kontroler, nowe odpytywanie zostaje zakolejkowane i uruchamia się automatycznie; stare dane są czyszczone na czas łączenia. Oczekiwane anulowania nie są już wyświetlane jako błędy połączenia.

## v2.0.216

- v2.0.216: ograniczono pracę dynamicznego tłumacza na klatkę, aby zapobiec zawieszaniu interfejsu. Początkowe skanowanie przetwarza maksymalnie 60 węzłów na klatkę, a aktualizacje obserwatora 35; tłumaczenie przyrostowe pozostaje bez zmian, podobnie jak klucze i dane słownika.

## v2.0.216

- v2.0.216: ujednolicono wybór drukarki na kartach, liście rozwijanej i monitorze. Wybranie karty natychmiast przekazuje wybrany adres IP do wszystkich elementów sterujących; błędy konfiguracji lub anulowanie nie przywracają już poprzedniej drukarki. Odpowiedzi starszych żądań wyboru są ignorowane.


- v2.0.214: naprawia wybór drukarki z poziomu kart. Wybrana karta aktualizuje się natychmiast, a nieaktualne odpowiedzi odpytywania są odrzucane, aby nie przywracać poprzedniej drukarki.

- v2.0.213: aplikacja desktopowa wykonuje odczyty migawek SQLite i partie zapisów przez IPC Electron zamiast HTTP. Zachowano optymistyczne rewizje oraz ten sam plik SQLite współdzielony z serwerem lokalnym. Kopie zapasowe i integracje Orca/U1 nadal korzystają z serwera lokalnego.

## v2.0.212
- Ograniczono powtarzające się zapisy i szybkie pętle ponawiania, gdy SQLite lub most nie potwierdza operacji. Kolejka zachowuje ostatnią oczekującą zmianę i stosuje stopniowe opóźnienie; synchronizacja wznawia się po wybudzeniu systemu Windows.

﻿- v2.0.212: dodano trwały proces adaptera SQLite, aby nie uruchamiać nowego procesu dla każdego żądania; zapisy, rewizje, obsługa konfliktów, kopie zapasowe i przywracanie pozostają zachowane.
- v2.0.210: poprawiono deklarację i obsługę `pendingSelectedIp` w panelu drukarek.
- v2.0.209: naprawiono błąd niezdefiniowanego `pendingSelectedIp` i kolejkowanie zmian drukarki podczas odświeżania.
## v2.0.208
- Naprawiono zmianę drukarki na karcie Drukarki: żądany adres IP ma priorytet, a oczekujące odświeżenia nie anulują zmiany.
- Selektor przywraca poprzedni wybór, jeśli mostek nie potwierdzi nowego adresu IP.
- Ograniczono częstotliwość zapisu historii temperatur, aby zmniejszyć liczbę zapisów SQLite.

﻿- v2.0.207: Naprawiono przełączanie drukarki na karcie Drukarki: po potwierdzeniu połączenia przez most nowy adres IP jest natychmiast synchronizowany z wyborem szczegółów przed odświeżeniem kart i informacji. Dzięki temu poprzedni adres IP nie pozostaje priorytetowy. Bez zmian w SQLite i ścieżkach.
- v2.0.207: Przywrócono Servidor_Panel_U1.ps1 dokładnie z wersji 2.0.204, cofając jedyną zmianę PowerShell wprowadzoną w 2.0.205; pozostałe poprawki pozostają. Usunięto przypadkowy plik .pyc z archiwum ZIP.
- v2.0.205: Ograniczono zapisy telemetrii monitora U1: czas jest zapisywany co pięć minut, a zmiany stanu natychmiast. Poprawiono wykrywanie pierwszej telemetrii, aby zapis nie następował przy każdym odpytywaniu. Wybranie karty drukarki tworzy brakującą opcję w selektorze U1 i uruchamia rzeczywistą zmianę połączenia. Bez zmian schematu ani ścieżek SQLite.
- v2.0.203: Monitor U1 uznaje wydruk za zakończony dopiero po otrzymaniu jawnego stanu complete/completed/finished; standby, ready i idle nie powodują już zużycia filamentu ani zamknięcia prowizorycznego wpisu księgowego. Stan canceling/cancelling nie jest już traktowany jako potwierdzone anulowanie. Przywrócono okno podsumowania anulowania. Komunikat startowy zmieniono na „Uruchamianie programu, proszę czekać…”. Bez zmian w SQLite.
- v2.0.202: Serwer lokalny traktuje teraz rozłączenia przeglądarki podczas wysyłania odpowiedzi jako anulowane połączenia, a nie ogólne błędy serwera. Konwersja wieku pamięci podręcznej U1 używa teraz typu Int64, aby zapobiec przepełnieniu Int32. Baza danych, schemat, zapisane dane i ścieżki pozostają bez zmian.
- v2.0.201: Zastąpiono pojedyncze zapisy w kolejce partiami obejmującymi do 25 kluczy w jednym żądaniu i transakcji SQLite. Każdy klucz zachowuje własną rewizję; konflikty są zgłaszane osobno dla kluczy i ponawiane bez odrzucania poprawnych zmian z partii. Synchronizacja między oknami sprawdza teraz migawkę co 15 sekund zamiast co 5. Nie zmieniono schematu, lokalizacji ani danych SQLite. Adapter Python nadal uruchamia się raz na partię; zmniejsza to liczbę uruchomień, ale nie wprowadza jeszcze stale działającego procesu.
- v2.0.200: Ręczny adres IP jest zapisywany dopiero po potwierdzeniu wyboru przez most; błąd /api/u1/config nie dodaje więc do kolejki adresu, który nie został zastosowany. Odświeżanie pulpitu głównego wywoływane przez moduł konserwacji działa teraz tylko wtedy, gdy karta główna jest widoczna, i jest odraczane do czasu bezczynności; częstotliwość zmniejszono z 30 do 60 sekund. Bez zmian w SQLite, schemacie i ścieżkach.
- v2.0.200: Usunięto podwójne odświeżanie po wybraniu drukarki z karty. /api/u1/config oddziela teraz zapis IP od uruchomienia procesu monitorowania; szczegóły błędów są zapisywane w printcostprofit_app.log. Rzeczywiste błędy zapisu nadal zwracają 502. SQLite i jego ścieżki pozostają bez zmian.
- v2.0.198: Zoptymalizowano inicjalizację tłumaczeń: żądania odświeżenia słownika są łączone, dzięki czemu indeksy są przebudowywane tylko raz, a pierwsze tłumaczenie DOM odbywa się partiami, aby nie blokować uruchamiania strony. Zachowano dynamiczne tłumaczenie dodawanych elementów i zmianę języka. Dane ani ścieżki SQLite nie zostały zmienione.
- v2.0.197: Ulepszono kolejkę zapisów SQLite i obsługę konfliktów między oknami. Most zwraca teraz bieżącą rewizję i wartość konfliktującego klucza, dzięki czemu klient może uzgodnić zapis bez pobierania całego zrzutu. Kontrola rewizji i ponawianie ostatniej oczekującej wartości pozostają zachowane. Nie zmieniono schematu, lokalizacji ani danych SQLite.
- v2.0.196: Naprawiono błąd uniemożliwiający aktualizację monitora U1: kontroler AbortController odpytywania jest teraz zadeklarowany we właściwym zakresie. Przy zmianie drukarki poprzednie żądanie jest jawnie anulowane przed rozpoczęciem nowego cyklu, co zapobiega odwołaniom do niezdefiniowanej zmiennej i spóźnionym odpowiedziom poprzedniej drukarki. Baza danych i zapisane dane pozostają bez zmian.
- v2.0.195: Naprawiono zapisywanie aktywnego zadania U1: rekord miniatury dla pliku jest teraz poprawnie definiowany i porównywany, co usuwa błąd `thumbnailRecord is not defined`. Zmiana drukarki anuluje poprzednie odpytywanie, natychmiast wyświetla ostatnie zapisane zadanie wybranej drukarki i uruchamia nowe odpytywanie. Wybór adresu IP nie czeka już na drugie synchroniczne żądanie Moonraker; proces stanu aktualizuje połączenie w tle. Nowe komunikaty przetłumaczono na wszystkie osiem języków.
- v2.0.194: Usprawniono zapis danych monitora U1: miniatura aktywnego zadania jest oddzielona od danych postępu i zapisywana tylko po zmianie; poprawiono odzyskiwanie kolejki zapisów i priorytet operacji interaktywnych. SQLite nie wykonuje już DDL ani nie negocjuje ponownie WAL przy każdym żądaniu, jeśli schemat jest aktualny. Odczyt pamięci podręcznej stanu U1 jest ponawiany, a w razie błędu zwracany jest bezpieczny stan przejściowy.
- v2.0.193: Zmniejszono obciążenie pamięci monitora U1: miniatura aktywnego zadania jest zapisywana osobno i tylko po zmianie, więc okresowe aktualizacje nie przesyłają ponownie obrazu base64. Ulepszono odzyskiwanie kolejki zapisów i priorytetyzację operacji interaktywnych względem telemetrii. Zrezygnowano z ponownego negocjowania WAL w każdym procesie SQLite. Endpoint stanu U1 ponawia odczyt pamięci podręcznej i zwraca stan przejściowy zamiast HTTP 502 przy błędach odczytu.
- v2.0.193: Poprawiono obsługę plików tymczasowych pamięci podręcznej drukarek. Jeśli zapis lub podmiana pamięci podręcznej U1 się nie powiedzie, plik tymczasowy jest usuwany w bloku finally. Podczas uruchamiania serwera usuwane są wyłącznie znane pliki tymczasowe starsze niż 24 godziny; baza SQLite, kopie zapasowe i właściwe pliki pamięci podręcznej pozostają nietknięte.
- v2.0.191: Przebudowano listę alertów na stronie głównej przy użyciu pionowego kontenera flex i kart o automatycznej wysokości z minimalną wysokością, usuwając układ grid nadal powodujący nakładanie się treści. Ustalono przepływ i wymiary ikony, tytułu oraz opisu; arkusz naprawczy jest ładowany na końcu, aby nadpisywać odziedziczone style.
- v2.0.190: Naprawiono układ alertów na stronie głównej: usunięto odziedziczoną ikonę pseudoelementu, która zajmowała dodatkową komórkę siatki i przesuwała tekst, powodując jego pionowe układanie. Przywrócono normalne zawijanie tekstu w kartach.
- v2.0.190: Przeprojektowano alerty na pulpicie jako ciemne karty z bardziej widocznymi ikonami, oddzielonymi tytułami i opisami oraz lepszym odstępem i kontrastem. Podgląd ograniczono do czterech alertów, aby tekst nie był ściśnięty. Dodano osobną ikonę problemów drukarki.
- v2.0.190: Dodano powiadomienia o błędach i problemach wykrytych w wybranej drukarce, w tym o stanach awarii i rozłączeniu. Powiadomienia są aktualizowane i oznaczane jako rozwiązane po ustąpieniu problemu. W Opcjach dodano pole wyboru umożliwiające włączenie lub wyłączenie tych powiadomień. Tłumaczenia scentralizowane dla wszystkich ośmiu języków.
- v2.0.190: Orca: punkt wykrywania kontrolki kółka myszy przeniesiono na 85% wysokości natywnego okna, do dolnej części ustawień. Dzięki temu nie zależy on od zmiennego układu rozwiniętej lub zwiniętej sekcji „Drukarka”.
- v2.0.190: Orca: przewijanie nie korzysta już z WindowFromPoint, które mogło zwracać nakładającą się powierzchnię PCP. Widoczne kontrolki potomne okna Orca są enumerowane, a następnie wybierana jest kontrolka procesu Orca pokrywająca dolny punkt panelu; jeśli jej nie ma, operacja zostaje anulowana bez interakcji z innym oknem.
- v2.0.190: Orca: strzałki przewijania przeniesiono na 62% obszaru slicera, a punkt docelowy kółka myszy na 68%, do dolnej widocznej części ustawień. Kontrola procesu pozostaje aktywna, aby zapobiec interakcjom poza Orca.
- v2.0.184: Naprawiono kodowanie `package.json`: usunięto BOM UTF-8, który uniemożliwiał `@electron/rebuild` odczytanie pliku JSON podczas kompilowania instalatora Windows.
- v2.0.184: Alerty konserwacji uwzględniają teraz rzeczywiste godziny drukowania, tak jak ekran Konserwacja, i są ponownie sprawdzane okresowo oraz po zmianie zadań. Orca: usunięto SendInput i fizyczne przesuwanie kursora; strzałki wysyłają kółko myszy wyłącznie do wykrytej kontrolki należącej do procesu Orca. Jeśli cel jest inny, działanie zostaje anulowane.
- v2.0.182: Naprawiono konwersję ujemnej wartości przewijania do UInt32 dla SendInput. PowerShell nie konwertuje już bezpośrednio -120 na UInt32; reprezentacja binarna jest zachowywana przez BitConverter. Eliminuje to błąd blokujący ScrollOptions.
- v2.0.181: Naprawiono właściwy skrypt ScrollOptions: używa teraz SendInput z MOUSEEVENTF_WHEEL nad lewym obszarem ustawień i przywraca pozycję kursora. Usunięto nieskuteczne wysyłanie WM_MOUSEWHEEL do głównego HWND.
- v2.0.180: Komunikaty kółka myszy wysyłane do domniemanych HWND zastąpiono rzeczywistym wejściem kółka Windows (SendInput) nad ustawieniami Orca. Pierwotne położenie kursora jest przywracane.
- v2.0.179: Przewijanie jest ponownie kierowane do rzeczywistego kontrolki potomnej Orca, znalezionej w stałym punkcie zawartości lewego panelu. Zdarzenie nie jest już wysyłane do głównego okna, którego Qt nie obsługiwał. PID celu jest sprawdzany; wysokość strzałek nie ma znaczenia.
- v2.0.178: Zastąpiono wskazywanie WindowFromPoint wysyłaniem WM_MOUSEWHEEL bezpośrednio do głównego okna Orca, ze współrzędnymi wewnątrz lewego panelu ustawień. Przewijanie nie zależy już od wysokości strzałek ani ich wyrównania z paskiem przewijania.
- v2.0.177: Przewijanie ustawień Orca wykorzystuje teraz rzeczywistą pionową pozycję kliknięcia strzałki. Zdarzenie kółka myszy jest wysyłane do obszaru lewego panelu na tej samej wysokości, nawet gdy sekcje Drukarka lub Filamenty są zwijane/rozwijane i zmienia się położenie paska przewijania.
- v2.0.176: Dodano brakujące deklaracje Win32 WindowFromPoint i SendMessageTimeout w PCPWin32Overlay. Przewijanie natywnych ustawień Orca może teraz znaleźć lewy element sterujący i wysłać WM_MOUSEWHEEL bez błędu brakującej metody.
- v2.0.175: Naprawiono rozmiar zintegrowanego obszaru Orca: kontener roboczy ponownie zajmuje całą dostępną wysokość. Sterowanie przewijaniem pozostaje w stałej kolumnie bocznej i nie zmniejsza wysokości slicera. W wersji 2.0.174 kontener flex nie miał wzrostu, przez co Orca pojawiała się tylko w górnym pasku.
- v2.0.174: Dodano przewijanie natywnego lewego panelu ustawień Snapmaker Orca. Kompaktowe przyciski góra/dół wysyłają WM_MOUSEWHEEL do rzeczywistego elementu sterującego w obszarze ustawień (22% szerokości okna), a nie do krawędzi okna ani stołu 3D. Sprawdzana jest przynależność celu do Orca, a błędy są zgłaszane. Dodano tłumaczenia we wszystkich ośmiu językach.
- v2.0.173: Całkowicie usunięto zewnętrzny pasek przewijania opcji Orca wprowadzony w wersji 2.0.172, ponieważ nie działał z natywnym panelem. Przywrócono pierwotny obszar hosta slicera i usunięto powiązany kod IPC oraz PowerShell. Zachowano natywną integrację z wersji 2.0.171.
- v2.0.172: Dodano kompaktowy panel boczny do przewijania ustawień drukowania Snapmaker Orca z poziomu PCP za pomocą przycisków, kółka myszy i przeciągania. Wysyła przewijanie do natywnego lewego panelu bez zmiany profili i nakładania HTML na Orca. Pięć nowych tekstów w ośmiu językach w traducciones.js.
- v2.0.171: Poprawiono dopasowanie alternatywnych szpul: oferowane są tylko zbliżone chromatycznie odcienie z tej samej rodziny kolorów (np. czerwony i czerwono-pomarańczowy); czarny, biały, beżowy i inne rodziny są wykluczone. Kompaktowa lista wyboru chroni układ monitora.
- v2.0.170: Wybór alternatywnych szpul w monitorze U1 i panelu drukarek rozpoznaje teraz odcienie z tej samej rodziny kolorów. Możliwy jest np. czerwony ↔ czerwono-pomarańczowy oraz różne odcienie zieleni; nadal wymagana jest zgodność materiału i dostępny zapas. Inne rodziny kolorów są wykluczone.
- v2.0.169: Orca jest wyświetlany bez paska tytułu i ramek okna wewnątrz obszaru przydzielonego przez PCP. Pozostaje oknem Qt najwyższego poziomu należącym do PCP, aby zachować działanie okien modalnych; po odłączeniu przywracane są zwykłe ramki i przyciski.
- v2.0.168: Powiększono pionowy obszar zintegrowanego slicera przez zmniejszenie nagłówka, przycisków i wiersza stanu. Natywny obszar Orca wypełnia pozostałe miejsce, a jego wymiary są ograniczane do dostępnego obszaru klienta PCP, także po zmniejszeniu okna.
- v2.0.167: Powiększono użyteczny obszar Snapmaker Orca. Nagłówek, przyciski i komunikat stanu są bardziej zwarte, a drugorzędne opisy są ukrywane na ekranach o typowej wysokości, aby zwiększyć miejsce w pionie na elementy sterujące i przewijanie Orca.
- v2.0.166: Naprawiono integrację modalnych okien dialogowych Snapmaker Orca. Okno Qt ponownie jest oknem najwyższego poziomu należącym do PCP, a nie oknem WS_CHILD, dzięki czemu okna Nowy projekt, Otwórz i Zapisz mogą wyświetlać się prawidłowo. Dodano synchronizację przy przesuwaniu, zmianie rozmiaru, maksymalizacji i przywracaniu PCP; obszar Orca jest ograniczony do obszaru aplikacji.
- v2.0.165: Zoptymalizowano przyrostowe tłumaczenie DOM. Obserwator nie przeszukuje już całych poddrzew ani nie porównuje każdego węzła ze wszystkimi pozostałymi; przetwarza małe partie i pomija mutacje wywołane przez samo tłumaczenie, aby zapobiec długim zawieszeniom interfejsu.
- v2.0.164: Orca staje się natywnym oknem potomnym PCP, przycinanym przez Windows do obszaru klienta, dzięki czemu nie wychodzi poza aplikację podczas zmiany rozmiaru. Panel wykorzystuje dostępne miejsce bez wymuszania minimalnej wysokości; zmniejszono minimalny rozmiar głównego okna.
- v2.0.163: Powiększono widoczny obszar slicera Orca i zmniejszono górne elementy sterujące, aby zapewnić natywnemu oknu więcej miejsca w pionie.
- v2.0.162: Integracja Orca odrzuca nienazwane okna startowe i czeka na główne okno Snapmaker/Orca, sprawdzając tytuł, uchwyt i PID przed zadokowaniem.
- v2.0.161: Orca czeka na ustabilizowanie głównego okna Qt przed integracją, ponownie wykrywa zastąpione uchwyty HWND i odrzuca nieprawidłowe współrzędne po zminimalizowaniu aplikacji.
- 2.0.160: Orca jest wyświetlany jako bezramkowe natywne okno Qt należące do PCP i umieszczone nad obszarem slicera; usunięto SetParent, aby uniknąć błędów renderowania między Qt i Electron. Położenie jest synchronizowane przy przesuwaniu, zmianie rozmiaru, minimalizacji i przywracaniu PCP.
- 2.0.159: poprawiono integrację natywną: Orca jest osadzany bezpośrednio jako okno potomne głównego okna PCP, bez nieprzezroczystego okna hosta Electron zasłaniającego zawartość Qt. Naprawiono również brakujący separator w traducciones.js, który blokował system językowy.
- 2.0.158: przywrócono zintegrowany panel Orca z wersji bazowej 2.0.148. Okno hosta nie otrzymuje już stałych współrzędnych podczas przesuwania/zmiany rozmiaru; jego geometria pochodzi z rzeczywistego obszaru zmierzonego przez interfejs. Synchronizacja także podczas przewijania i zmiany karty.
- 2.0.157: zmiana strategii slicera: Snapmaker Orca otwiera się w osobnym oknie, bez SetParent i nakładającego się okna hosta. Interaktywne zapisy SQLite mają priorytet przed historią telemetrii temperatury.
- 2.0.156: przywrócono main.cjs i orca-window.ps1 z wersji bazowej 2.0.148, ostatniej wersji z widocznym osadzeniem Orca. Cofnięto późniejsze zmiany widoczności, pozycjonowania i wyboru okna.
- 2.0.155: przywrócono wykrywanie okien Qt z wersji bazowej 2.0.148. Główne okna w uruchomionym drzewie procesów są akceptowane także przed nadaniem tytułu przez Snapmaker Orca; późniejsze ulepszenia hosta i zmiany rozmiaru pozostają.
- 2.0.154: poprawiono wybór okna Snapmaker Orca. Pomocnicze okna Qt lub okna bez tytułu nie są już osadzane; aplikacja czeka na rozpoznanie głównego okna, aby uniknąć pustego panelu.
- 2.0.153: poprawiono kolejność wyświetlania okna hosta Orca; powierzchnia hosta jest pokazywana przed osadzeniem, a okno Qt jest ponownie dopasowywane, aby Chromium go nie zasłaniał. Usunięto zduplikowany listener przywracający stałe współrzędne.
- 2.0.152: poprawiono rozmiar i położenie natywnego panelu Orca; zmiana rozmiaru okna i karty zachowuje rzeczywiste wymiary widocznego obszaru.
## v2.0.151
- Zintegrowany Orca: stabilny wybór głównego okna Qt, z priorytetem dla tytułów Snapmaker/Orca i pomijaniem przejściowych okien bez tytułu podczas uruchamiania.
- Zintegrowany Orca: zmiany rozmiaru są grupowane i serializowane; po utracie powiązania z oknem nadrzędnym Windows okno Qt jest ponownie wyszukiwane i osadzane.

## v2.0.150
- Zintegrowany Orca: puste okno hosta nie jest już wyświetlane podczas uruchamiania Snapmaker Orca ani wyszukiwania jego okna Qt.
- Zintegrowany Orca: natywne okno jest wyświetlane dopiero po potwierdzeniu prawidłowego uchwytu okna; przełączenie karty podczas uruchamiania pozostawia okno hosta ukryte.
- Zintegrowany Orca: jeśli proces już działa, ale pierwsze osadzenie nie zostało zakończone, przycisk ponawia osadzanie zamiast błędnie informować, że slicer jest gotowy.

## v2.0.149
- Stabilność: synchronizacja SQLite powiadamia interfejs tylko o rzeczywistych zmianach.
- Ekran główny: usunięto okresowe pełne odświeżanie; aktualizacja następuje po zmianach i nawigacji, a wykrywanie drukarek jest ograniczone.
- Powiadomienia: usunięto pełne skanowanie co 5 sekund; skanowanie odbywa się przy uruchomieniu i po zmianie danych.

## 2.0.148
- Orca: naprawiono błąd PowerShell uniemożliwiający osadzenie okna Qt; identyfikator procesu zwracany przez `GetWindowThreadProcessId` nie używa już zarezerwowanej zmiennej automatycznej `$PID`.

## 2.0.147
- Orca: osadzone okno natywne dopasowuje się teraz do rzeczywistego obszaru panelu, także przy zmianie karty i rozmiaru okna.

### v2.0.147
- Naprawiono ręczne przypisywanie alternatywnych szpul w monitorze U1: jawnie wybrana szpula pozostaje przypisana także wtedy, gdy jej kolor HEX jest przybliżony.
- Dodano komunikat o przypisaniu we wszystkich ośmiu językach.

## v2.0.143
- Monitor U1: odpytywanie postępu G-code zmieniono z 500 ms na adaptacyjne odstępy 1,5–2,5 s, z ograniczonym czasem oczekiwania i limitem czasu każdego żądania. Zachowywane są szczegóły błędów HTTP serwera.

## v2.0.136
- Orca: dodano diagnostyczne uruchamianie w osobnym oknie, bez osadzania okna Qt wewnątrz Electron. Umożliwia to niezależne sprawdzenie zaznaczania obiektów i odróżnienie problemów osadzania okna od problemów silnika Orca.

## v2.0.134
- Serwer Windows: plik `Servidor_Panel_U1.ps1` jest zapisywany w UTF-8 z BOM i zakończeniami wierszy Windows, aby PowerShell 5.1 poprawnie odczytywał polskie znaki i nie uszkadzał ciągów ani cudzysłowów podczas uruchamiania.

## v2.0.133
- Konserwacja: lista wyboru nie łączy już zapisanych profili kosztowych z Opcji z rzeczywistymi drukarkami. Wyświetla wykryte drukarki z aliasami przypisanymi do adresów IP i zachowuje urządzenia dodane ręcznie.

## v2.0.133
- Orca: wyszukiwanie głównego okna jest teraz ograniczone do procesów potomnych wybranego pliku wykonywalnego lub jego dokładnego folderu instalacyjnego. Zapobiega to dołączaniu innej uruchomionej instancji Orca.

## v2.0.129
- Integracja Snapmaker Orca: przed wyświetleniem panelu sprawdza, czy skrypt osadzania zwrócił uchwyt okna i PID; pusty obszar nie będzie przedstawiany jako prawidłowo osadzony slicer.
- Diagnostyka: zapisuje ścieżkę pliku wykonywalnego, PID procesu uruchamiającego, wynik osadzania oraz nieoczekiwane zakończenia procesów potomnych Electron, aby odróżnić błędy interfejsu od zamknięć procesu Orca.

## v2.0.128
- Siatka stołu: gęste siatki lepiej wykorzystują dostępną przestrzeń i nie są zmniejszane do maleńkiej kratki. Nakładające się liczby są ukrywane, pozostaje pięć oznaczeń każdej osi, a po wskazaniu komórki wyświetlane są współrzędne X/Y i wysokość Z.
- Snapmaker Orca: wyszukiwanie natywnego okna trwa do 90 sekund i rozpoznaje delegowane procesy OrcaSlicer/Snapmaker w folderze instalacyjnym. Limit czasu Electron zapobiega przedwczesnemu przerwaniu wyszukiwania.

## v2.0.127
Zapobiega nadpisywaniu aktywnego wydruku przez nieaktualne asynchroniczne odczyty G-code po zmianie drukarki lub pliku. Nieaktualne odpowiedzi sondowania są odrzucane, a pamięci podręczne telemetrii są rozdzielone według adresu IP.

- Snapmaker Orca: naprawia limit czasu procesu integracji natywnej. Skrypt Windows mógł czekać do 35 sekund na znalezienie właściwego okna, ale Electron kończył go po 25 sekundach, pozostawiając panel na komunikacie „Przygotowywanie Snapmaker Orca”. Limit czasu jest teraz dłuższy niż maksymalny czas oczekiwania skryptu.
- Siatka stołu: zastępuje zniekształconą powierzchnię 3D widokiem z góry w formie mapy cieplnej, z wartościami Z w każdym punkcie, osiami X/Y w milimetrach i czytelną skalą kolorów. Usuwa perspektywę i obracanie powodujące zniekształcenia.

- Komunikacja U1: jeden trwały proces w tle odpytuje Moonraker i współdzieli pamięć podręczną między kartami; zmiana sekcji nie rozpoczyna ponownego łączenia. Wybór lub wykrycie innej drukarki uruchamia ponownie tylko ten proces.
## v2.0.124
- Naprawia błąd zakresu JavaScript podczas przypisywania nowo utworzonej szpuli z monitora U1. Akcja korzysta teraz ze scentralizowanego API tłumaczeń i nie przerywa działania po utworzeniu oraz przypisaniu szpuli.

## v2.0.123
- Naprawia odczyt wartości kalkulatora z przecinkiem lub kropką dziesiętną podczas rejestrowania zadań z monitora U1, aby robocizna, dodatki i inne składniki nie zmieniały się na zero z powodu formatu regionalnego.
- Zapisuje robociznę i dodatki pod zgodnymi kluczami (`laborAndExtras`, `labor`, `extras`); Księgowość odczytuje nowe i starsze wpisy.
- Wzmacnia natywne osadzanie Snapmaker Orca: wykrywa także okna główne, których proces odłączył się od programu uruchamiającego, preferuje tytuły Snapmaker/Orca, przywraca osadzone okno i ponownie pozycjonuje panel po przesunięciu lub zmianie rozmiaru aplikacji.
- Zwraca tytuł osadzonego okna, aby ułatwić sprawdzenie integracji.

## v2.0.122
- Zmienia integrację Snapmaker Orca: natywne okno slicera jest osadzane bezpośrednio jako okno potomne głównego okna Print Cost & Profit; nie jest już tworzony osobny nakładający się panel.
- Umieszcza natywny obszar w obszarze roboczym aplikacji i zmienia jego rozmiar wraz ze zmianą rozmiaru głównego okna.
- Pokazywanie/ukrywanie ponownie ustawia natywne okno w osadzonym obszarze; odłączenie Orca pozostaje osobną, świadomą akcją.
- Usuwa poprzedni mechanizm, który mógł wyświetlać Orca jako oddzielne okno.

## v2.0.121
- Naprawia osadzanie natywnego okna Snapmaker Orca, wyszukując również procesy potomne uruchamiane przez program startowy i oczekując na widoczne okno główne.
- Sprawdza, czy system Windows rzeczywiście ustawił okno Orca jako potomne wobec panelu; w razie błędu ukrywa pusty panel i wyświetla komunikat.
- Śledzi właściwy proces Orca nawet po zakończeniu programu startowego i dopasowuje rozmiar osadzonego okna po zmianie rozmiaru aplikacji.
- Zamknięcie slicera kończy osadzony proces Orca.

## v2.0.120
- Dodaje sekcję Snapmaker Orca w aplikacji desktopowej. Umożliwia wybór pliku wykonywalnego i osadzenie natywnego okna w panelu aplikacji w systemie Windows.
- Dodaje opcje odłączenia i zamknięcia slicera; profile Orca nie są modyfikowane.

## v2.0.120
- Dodaje sekcję Snapmaker Orca w aplikacji desktopowej, z wyborem pliku wykonywalnego i osadzeniem natywnego okna w panelu aplikacji w systemie Windows.
- Dodaje opcje odłączenia i zamknięcia slicera. Profile Orca pozostają bez zmian.

## v2.0.119
- Odzyskiwanie po uśpieniu/hibernacji: oczekujące zapisy SQLite są ponawiane, nieaktualne żądania anulowane, a stan aplikacji ponownie synchronizowany po powrocie.
- Monitor U1: zapobiega nakładaniu się odpytań i odświeża stan drukarki po wznowieniu komputera lub ponownym pokazaniu okna.

## v2.0.118
- Statystyki głowic korzystają teraz z trwałych liczników Snapmaker w `extruder_switch_recorder.json`, odczytywanych przez Moonraker.
- Wykorzystują `switch_count`, `error_count`, `retry_count` oraz, gdy plik jest dostępny, `fan_error_count`.
- Usunięto mylące wnioskowanie z tekstu dzienników; trzeci wskaźnik pokazuje rzeczywiste ponowienia.

## v2.0.116
- Siatka stołu: dodaje numeryczne oznaczenia X/Y i pięć podziałek skali Z na podstawie fizycznych wymiarów zgłaszanych przez drukarkę.
- Statystyki głowic: usuwa zliczanie na podstawie wzmianek T0/T1 i ogólnych słów; uwzględnia tylko jawne aktywacje oraz błędy powiązane z dokładną nazwą ekstrudera.
- Stare statystyki są unieważniane; przy braku dowodów wyświetlane jest „—”.

## v2.0.115
- Siatka 3D zajmuje pełną szerokość i pokazuje wszystkie punkty bez przycinania, z oznaczeniami X/Y.

## v2.0.114
- Rzeczywiście dodaje wizualizację 3D siatki stołu w szczegółach każdej drukarki, korzystając z macierzy udostępnianej przez Klipper/Moonraker.
- Pokazuje wymiary, skalę wysokości, minimum, maksimum i zakres; wyraźnie informuje o braku prawidłowej macierzy.

## v2.0.113
- Statystyki głowic nie liczą już poleceń T0/T1 jako fizycznych zmian głowicy; wartości są wyświetlane tylko przy wyraźnie potwierdzających zdarzeniach. Ogólne błędy nie są już przypisywane wszystkim głowicom.
- Poziomowanie pokazuje teraz trójwymiarową reprezentację rzeczywistej macierzy siatki stołu, ze skalą wysokości, zakresem oraz wartościami minimalną i maksymalną.

## v2.0.112
- Magazyn filamentów: każda zgrupowana szpula może przechowywać osobną ilość pozostałych gramów bez zmiany kompaktowego wyglądu kart.
- Monitor U1: sumuje zapas zgodnych szpul według materiału i koloru oraz rozdziela zużycie z uwzględnieniem indywidualnej masy.

## v2.0.111
- Zamówienia tworzone z księgowości wstępnie wypełniają formularz klientem, opisem, wybranymi zadaniami i kwotą; zapis następuje dopiero po kliknięciu „Zapisz zamówienie”.
- Zapobiega zapisywaniu pustych zamówień lub zamówień o wartości zero w tym procesie.

## v2.0.111
- Tabela księgowa dopasowuje się do dostępnej szerokości bez przewijania poziomego.
- Zaznaczenie wielu pozycji pozostaje zachowane po odświeżeniu i synchronizacji.

## v2.0.109
- Księgowość: wielokrotny wybór ruchów, w tym wydatków własnych, z możliwością wysłania do kalkulatora oraz utworzenia wycen, faktur lub zamówień. Wydatki własne pozostają kosztami wewnętrznymi i nie są automatycznie fakturowane.

## v2.0.108
- Naprawia wybór dokumentów w zamówieniach: po wybraniu zapisanego kosztorysu wczytywane są jego właściwy produkt, klient i suma; kwota jest przeliczana po zmianie ilości i ponownie sprawdzana przy zapisie. Faktura z zamówienia zachowuje pozycje i kwoty kosztorysu.
- Zapobiega duplikowaniu klientów podczas zapisywania z poziomu klientów, zamówień i faktur, porównując e-mail, telefon, identyfikator podatkowy lub pełną tożsamość; dokładne duplikaty są łączone z zachowaniem istniejących danych.
- Nowe zamówienia zachowują kopię wybranej wyceny lub oferty, a faktura tworzona z zamówienia używa tej kopii, klienta i oryginalnych pozycji. Starsze zamówienia bez kopii nie utworzą faktury z niepowiązanych danych.

## v2.0.106
- Poprawia statystyki głowic: globalne błędy i pośrednie wzmianki nie są już przypisywane poszczególnym ekstruderom. Liczone są tylko jawne aktywacje i polecenia wyboru narzędzia; gdy logi nie pozwalają wskazać głowicy, interfejs pokazuje „—” zamiast mylącego zera.

## v2.0.105
- Naprawia kontrolę stanu magazynowego monitora, gdy inwentarz grupuje identyczne szpule: oblicza łączny zapas (pozostałość na szpulę × liczba sztuk) i rozdziela zużycie między sztuki bez podwójnego odejmowania.

## v2.0.103
- Naprawia okno rejestrowania wydatku osobistego/zamówienia monitora otwierane z Księgowości: `app-10.css` jest ładowany w globalnym nagłówku dokumentu.

## v2.0.103
- Ogranicza powtarzające się zapisy `pcp_active_job_by_printer`: monitor nie zapisuje już całego zadania w SQLite przy każdym odpytywaniu. Rzeczywiste zmiany stanu/pliku są zapisywane natychmiast, a aktualizacje samego czasu są ograniczone do jednej na 30 sekund.

## v2.0.103
- Zapobiega migotaniu kart: przy chwilowych błędach zapytań ostatni poprawny stan jest zachowywany przez 90 sekund podczas ponawiania połączenia.
- Zapisywane są tylko stabilne dane identyfikacyjne i konfiguracja; stan online/offline nie jest już zapisywany w SQLite przy każdym odpytywaniu.
- Zapisane drukarki są odczytywane tylko raz na sesję.
- Historia temperatur jest zapisywana najwyżej co pięć minut, aby zmniejszyć obciążenie SQLite.

### v2.0.103
- Statystyki głowic są zachowywane dla każdej drukarki między odświeżeniami i ponownym wyborem.
- Dokładniejsze przypisywanie zdarzeń do ekstruderów zapobiega zawyżonym licznikom.
- Ograniczono powtarzające się zapisy, aby odciążyć kolejkę SQLite.
- Zapisane statystyki pozostają widoczne, gdy odczyt dzienników się nie powiedzie.

## v2.0.99
- Statystyki głowic ładują się automatycznie po wyświetleniu szczegółów drukarki.
- Odczyt dzienników korzysta z osobnego endpointu, który nie odpytuje ponownie stanu, czujników ani historii drukowania, dzięki czemu nie zakłóca Monitora.
- Dodano okno postępu podczas wykrywania i początkowego ładowania drukarek.
- Usunięto zbędne drugie zapytanie o stan wybranej drukarki.

## v2.0.99
- Magazyn zgodny z localStorage kolejkuje teraz zapisy SQLite przez asynchroniczny XHR bez blokowania interfejsu.
- Kolejne aktualizacje tego samego klucza są łączone, a operacje serializowane, aby ograniczyć konflikty rewizji.
- Konflikty 409 asynchronicznie odświeżają wartości i rewizje, po czym następuje kontrolowana ponowna próba.
- Synchronizacja zewnętrzna nie nadpisuje już wartości oczekujących na zapis.

## v2.0.99
- Naprawiono synchronizację rewizji magazynu: wartości i rewizje są aktualizowane razem, co zapobiega konfliktom 409 spowodowanym nieaktualnymi rewizjami.
- Dodano jedną kontrolowaną próbę ponowienia zapisu/usunięcia, gdy inne okno zmieni ten sam klucz.
- Ograniczono zapisy telemetrii Monitora: zapisywane są tylko zmiany stanu lub postęp minutowy.
- Zmniejszono częstotliwość zapisu historii temperatur z 9 do 30 sekund.
- Dostosowano limity czasu odczytu dzienników i ograniczono oczekiwanie na każdy plik.

## v2.0.96
- Surową listę dzienników zastąpiono wizualnymi kartami statystyk każdej wykrytej głowicy: zmian, aktywacji i powiązanych błędów.
- Statystyki są pobierane na żądanie i nie obciążają okresowego odświeżania.

## v2.0.95
- Naprawiono przypadkowe zamykanie okna Tworzenie szpuli po kliknięciu prawym przyciskiem pól liczbowych.
- Rozszerzono wykrywanie danych warstw w obiektach Moonraker różnych drukarek.
- Dodano ręczne pobieranie dzienników Klipper w celu wykrywania zmian głowicy, ostrzeżeń i błędów; dzienniki są pobierane tylko na żądanie.

## v2.0.94
- Usunięto panel diagnostyczny „Dane otrzymane z drukarki” oraz jego zrzut JSON.
- Usunięto okresową serializację i aktualizowanie danych diagnostycznych w interfejsie.
- API panelu nie wysyła już listy wykrytych obiektów używanej wyłącznie przez diagnostykę.

## v2.0.93
- Nowa paleta temperatur o wysokim kontraście i wyraźnie różnych kolorach.
- Trwałe przypisanie koloru do czujnika między sesjami i odświeżeniami.
- Normalizacja etykiet historii, aby w legendzie nie pojawiały się stare nazwy.

## v2.0.92
- Dynamiczne wykrywanie czujników temperatury i obiektów udostępnianych przez Moonraker, bez stałych list modeli.
- Odpytanie obiektów partiami dla drukarek z wieloma czujnikami.
- Wykres i karty temperatur wykorzystują rzeczywiście dostępne pomiary; wentylatory bez odczytu temperatury nie są rysowane.
- Wykrywanie i wyświetlanie prędkości wentylatorów, gdy Moonraker udostępnia te dane.
- Znane nazwy czujników są tłumaczone, a nieznane nazwy firmware pozostają bez zmian.

## v2.0.89 — Poprawka statystyk Moonraker i wykresu temperatur
- Sumy są odczytywane z `result.job_totals`, struktury odpowiedzi `/server/history/totals`; obsługiwane są także zgodne odpowiedzi płaskie.
- Liczba zadań, czas drukowania, całkowity czas pracy i filament są wyświetlane, gdy udostępnia je Moonraker; łączny filament jest podawany w metrach.
- Poprawiono szerokość, skalę i hierarchię wizualną wykresu temperatur oraz kart statystyk.

## v2.0.88 — Poprawa statystyk i wykresów drukarek
- Łączny czas drukowania i liczba zadań pochodzą wyłącznie z oficjalnych sum Moonraker; lista 20 ostatnich zadań nie jest już przedstawiana jako pełna historia.
- Słupki wykorzystują całkowity czas, czas drukowania lub dostępne znaczniki początku i końca.
- Wykres temperatury ma stałą skalę SVG, czytelne etykiety i prawidłowe proporcje.

## v2.0.85

### v2.0.87 — Przebudowa panelu drukarek i statystyk
- Siatka obejmuje wszystkie wykryte drukarki, także główną, maksymalnie cztery karty w wierszu i układ responsywny.
- Karty drukarek, szczegóły techniczne i statystyki produkcji są wyraźnie rozdzielone.
- Wykres temperatur otrzymuje skalę °C, siatkę i oś czasu; czasy ostatnich wydruków są prezentowane, gdy dostępna jest historia.
- Nowe teksty są centralizowane w `js/traducciones.js` i tłumaczone na wszystkie osiem języków.

- Drukarki: siatka do czterech kart w wierszu; główna drukarka pozostaje również widoczna w siatce.
- Wybierz kartę, aby zmienić aktywne urządzenie i zobaczyć pełne szczegóły w osobnym obszarze.
- Szczegóły są oddzielone od kart drukarek. Układ responsywny.
## v2.0.82
- Naprawiono uruchamianie wyszukiwania drukarek: parametr wykrywania i stan wewnętrzny są teraz poprawnie zadeklarowane.
- Naprawiono komunikat błędu odczytu G-code wywołujący niezdefiniowaną funkcję tłumaczenia.
- Usunięto dwa stare bloki odwołujące się poza zakresem do prywatnego indeksu tłumaczeń; indeks jest odbudowywany przez PCP_I18N.refresh().
## v2.0.81
- Drukarki: karty na żywo dla wszystkich wykrytych lub zapisanych urządzeń ze stanem online/offline, aktywnym plikiem i paskiem postępu.
- Drukarki: własna nazwa przypisana do adresu IP ma pierwszeństwo; w przeciwnym razie wyświetlana jest nazwa/hostname zgłoszona przez urządzenie.
- Drukarki: odczyt modelu, bieżących/łącznych warstw i czasu, jeśli udostępnia je Moonraker; bez zakładania stałej liczby ekstruderów.
## v2.0.80
- Księgowość: wybrana strona jest zachowywana podczas ponownego renderowania, dzięki czemu strona 2 nie wraca automatycznie do strony 1.
- Księgowość: wpisy są sortowane malejąco według daty i godziny — najnowsze na górze, najstarsze na dole.
## v2.0.80
- Księgowość: nowe wpisy zapisują rzeczywisty znacznik czasu i wyświetlają lokalny czas komputera; starsze wpisy zawierające tylko datę nie pokazują już błędnej godziny 01:00.
- Monitor: przycisk przełącza się między Pokaż i Ukryj zgodnie ze stanem panelu i zachowuje właściwą etykietę po zmianie języka.
## v2.0.80
- Drukarki: dolny komunikat wybiera teraz tekst bezpośrednio na podstawie aktywnego języka i odświeża się po zmianie języka dokumentu.
- Kalkulator: nowy układ na komputerach z czterema sekcjami u góry, panelami podatków i zestawienia w drugim rzędzie, wyróżnioną sumą oraz porównaniem i działaniami w trzecim rzędzie. Zachowano istniejące identyfikatory i logikę obliczeń.
## v2.0.80
- Poprawiono dolny komunikat informacyjny na stronie Drukarki: jest jawnie odświeżany po zmianie języka z użyciem klucza centralnego słownika.
## v2.0.80
- Naprawiono ładowanie tłumaczeń sekcji Drukarki: teksty są dodawane do centralnego słownika przed utworzeniem indeksów językowych, także dla elementów dynamicznych. Bez zmian w Moonraker i danych ekstruderów.
## v2.0.80
- Sprawdzono i poprawiono tłumaczenia całej sekcji Drukarki: nagłówka, stanu, identyfikacji, bieżącego zadania, temperatur, ekstruderów, stołu grzewczego, ruchu, oprogramowania, komunikatów i odebranych danych. Wszystkie teksty są scentralizowane w traducciones.js dla ośmiu języków.
## v2.0.80
- Odświeżenie wyglądu strony Drukarki: górne podsumowanie z okrągłym wskaźnikiem postępu, aktywnym plikiem i najważniejszymi czasami.
- Panel temperatur z osobnymi kartami i paskami dla każdego ekstrudera oraz stołu grzewczego; dostosowany do drukarek z jednym lub wieloma ekstruderami.
- Nowe etykiety scentralizowane we wszystkich ośmiu językach.
## v2.0.80
- Zapytania Moonraker wykrywają teraz obiekty dostępne w każdej maszynie i pobierają dane wszystkich niezależnych ekstruderów, stołu, ruchu oraz obsługiwanych czujników.
- Strona Drukarki pokazuje każdy ekstruder osobno: jeden w drukarkach z jednym ekstruderem i cztery w Snapmaker U1, jeśli udostępnia je firmware.
## v2.0.80
- Sekcja Drukarki korzysta teraz z istniejących punktów końcowych monitora Moonraker (/api/u1/printer i /api/u1/status), wyświetlając dostępny stan, postęp, warstwy, czas, temperatury i pozycje osi.
- Stan połączenia jest aktualizowany po każdym zapytaniu, a dane odświeżają się co 3 sekundy, gdy sekcja jest widoczna.
## v2.0.80
- Przywrócono flagi SVG w selektorze języka, tak jak w wersji stabilnej. Zachowano pojedynczy selektor i centralne tłumaczenia.
- Skrypty PowerShell są zapisywane z BOM UTF-8, aby Windows PowerShell 5.1 poprawnie odczytywał znaki diakrytyczne i nie przerywał uruchamiania mostu z powodu kodowania.

## v2.0.80
- Usunięto zduplikowane tworzenie selektora; tylko jeden moduł odpowiada teraz za wybór języka.
- Selektor jest dodawany po skryptach aplikacji i przywracany po ponownym utworzeniu paska.
- Zachowano centralne tłumaczenia i wszystkie osiem języków.

## v2.0.61
- Dodano widoczny i trwały wybór języka na górnym pasku, niezależny od wcześniejszego mechanizmu montowania.
- Zachowano wszystkie osiem języków i centralny mechanizm tłumaczeń.

## v2.0.60
- Naprawiono zmianę języka: tłumaczenie nie zastępuje już zawartości kontrolek ani nie usuwa elementów potomnych z obsługą zdarzeń.
- Język jest stosowany w jednym przebiegu, a wybór zostaje zapisany.
- Diagnostyka renderera i DevTools (Ctrl+Shift+I / F12) pozostają włączone.

## v2.0.59
- Trwałe rejestrowanie błędów JavaScript i procesu renderera Electron.
- Narzędzia deweloperskie dostępne w zainstalowanej aplikacji przez Ctrl+Shift+I lub F12.
- System licencji pozostaje wyłączony.

## v2.0.38
- Przywraca układ kalkulatora z wersji 2.0.26 i zapobiega nakładaniu się wskaźników oraz zestawienia kosztów w trybach Osobistym i Sprzedaży.

## v2.0.36
- Bezpieczne cofnięcie zmian interfejsu z wersji 2.0.35; przywrócenie strony i działania z wersji 2.0.34.
- Przywrócenie poprzednich reguł układu kalkulatora. Moduły funkcjonalne i dane użytkownika pozostają bez zmian.

## v2.0.34
- Naprawia nakładanie się kart wyników w trybach Osobistym i Sprzedaży, przywracając stabilny układ pionowy.
- Listy drukarek pokazują zapisaną nazwę niestandardową bez statusu offline i identyfikatorów firmware.
- Normalizuje starsze powiadomienia księgowe zapisane po chińsku i wyświetla je z tłumaczalnymi tekstami źródłowymi.
- Centralizuje podtytuł alertów we wszystkich ośmiu językach.

## v2.0.33
- Naprawia siatkę kalkulatora osobistego, przywracając oryginalny układ 12 kolumn i zapobiegając nakładaniu się wskaźników oraz zestawienia.
- Ikona odświeżania ponownie ładuje stronę zamiast sprawdzać aktualizacje aplikacji.
- Oddziela wizualnie tytuł i treść powiadomienia.
- Szczegóły osobistych zapisów pokazują zapisane dane filamentu, energii, amortyzacji, konserwacji, gramów i czasu.
- Dodaje centralne tłumaczenia we wszystkich ośmiu językach.

## v2.0.32
- Naprawia odwołanie do arkusza CSS kalkulatora, aby ładowały się style przypiętego nagłówka i trybu osobistego.
- Przywraca oryginalną siatkę kalkulatora i usuwa `display: contents`, które przesuwało panele i powodowało nakładanie się elementów.
- Poprawia responsywny układ wskaźników i szczegółów kosztów.

## v2.0.31
- Tryb osobisty pokazuje koszty filamentu, energii, amortyzacji i konserwacji, ukrywając pozycje sprzedażowe i dodatki.
- Nagłówek pozostaje przypięty do ekranu we wszystkich kartach.
- Ilości filamentu są ograniczone do dwóch miejsc po przecinku.
- Usunięcie ruchu, który odjął filament, zwraca go do magazynu i tworzy powiadomienie.
- Dodaje skrót w nagłówku do sprawdzania aktualizacji i otwierania dostępnego pobierania.

## v2.0.30
- Naprawia układ kolumn kalkulatora w trybie osobistym; panel boczny zachowuje `display: contents`.
- Aktualizuje widoczną wersję w nagłówku do 2.0.30.

## v2.0.29
- Księgowość: zapobiega duplikowaniu wydatków osobistych z tej samej wyceny oznaczonej w kalkulatorze.
- Górny nagłówek pozostaje przypięty podczas przewijania.

## v2.0.28
- W trybie osobistym panel wyników pozostaje widoczny i po obliczeniu pokazuje koszt całkowity oraz jednostkowy.
- Naprawiono przypadkowe ukrywanie kolumny wyników.

## v2.0.27
- W trybie osobistym obliczenie pokazuje rzeczywisty koszt jednostkowy bez ustawiania ceny sprzedaży na zero.
- Porównywarka cen jest ukryta w trybie osobistym.

## v2.0.26
- Tryb osobisty oblicza tylko koszty z bloków 1, 2 i 3; wyklucza robociznę, dodatki, pakowanie, minimalny zysk, marżę i podatki.
- Górny nagłówek pozostaje przypięty podczas przewijania.

﻿## v2.0.25
- Naprawiono otwieranie wygenerowanych plików PDF w Electron przez bezpieczne zezwolenie na lokalne okno `about:blank`, które następnie ładuje PDF.
- Zaktualizowano komunikat błędu i przetłumaczono go na osiem języków.

## v2.0.24
- Kontrolowane zamykanie lokalnego serwera uruchomionego przez aplikację przy zamknięciu i przed aktualizacją. Zatrzymywany jest wyłącznie zweryfikowany zapisany PID; serwery zewnętrzne pozostają aktywne.

## v2.0.23
- Panel główny pokazuje rzeczywisty procent drukowania wybranej drukarki U1. Dla pozostałych drukarek postęp nie jest zgadywany.
- Wykorzystuje buforowany stan lokalnego mostu bez dodatkowego skanowania.
- Zachowuje stabilne uruchamianie z wersji 2.0.22.

## v2.0.22
- Naprawiono automatyczne uruchamianie: Electron nadzoruje Iniciar_Puente_Orca.ps1, który tworzy trwały serwer za pomocą Start-Process.
- Wyjścia stdout/stderr programu uruchamiającego są zapisywane osobno; uniknięto bezpośredniego uruchamiania serwera jako odłączonego procesu Electron, który natychmiast się kończył.
- Czas oczekiwania nadzorcy ograniczono do 25 sekund bez kończenia niezależnego serwera.
- Wzmocniono ponawianie usuwania plików programu przez instalator; dane, SQLite, licencje i kopie zapasowe pozostają zachowane.

## v2.0.21 — Bezpośrednie uruchamianie serwera lokalnego z Electron

- Gdy `/api/version` nie odpowiada, Electron uruchamia bezpośrednio `Servidor_Panel_U1.ps1` jako niezależny proces i zapisuje dzienniki stdout/stderr do diagnostyki.
- Jeśli port odpowiada inną wersją, nadal używany jest program konserwacyjny z kontrolami bezpieczeństwa.
- Interfejs otwiera się dopiero po potwierdzeniu zainstalowanej wersji przez `/api/version`. SQLite i dane użytkownika pozostają bez zmian.

## v2.0.17 — Ekran ładowania podczas uruchamiania
- Natychmiast wyświetla okno ładowania po uruchomieniu Print Cost & Profit, przed sprawdzeniem lub uruchomieniem serwera lokalnego.
- Pokazuje przygotowanie, sprawdzanie serwera lokalnego i otwieranie aplikacji; ekran ładowania zamyka się, gdy główne okno jest gotowe do wyświetlenia.
- W przypadku błędu uruchamiania ekran ładowania zostaje zamknięty, a istniejący ekran błędu pozostaje bez zmian.
- Teksty są scentralizowane w `js/traducciones.js` i przetłumaczone na wszystkie osiem obsługiwanych języków.
- Nie zmienia SQLite, licencji, kopii zapasowych, ścieżek danych ani działania serwera lokalnego.

## v2.0.16 — Poprawne wykrywanie poprzedniej instalacji
- Naprawia wykrywanie w 64-bitowym Windows, sprawdzając jawnie `$PROGRAMFILES64` oraz `$PROGRAMFILES`.
- Poprzednie okno nie pojawiało się, ponieważ sprawdzana mogła być ścieżka `Program Files (x86)` zamiast `C:\\Program Files`.
- Po znalezieniu pliku wykonywalnego w znanej lokalizacji instalator prosi o potwierdzenie, usuwa wyłącznie folder programu i czyści stare klucze rejestru instalatora.
- Nie zmienia AppData, SQLite, licencji, kopii zapasowych ani serwera lokalnego.

## v2.0.15 — Poprawka kompilacji instalatora
- Naprawia dołączanie NSIS odpowiedzialne za wcześniejsze usunięcie: usuwa `customHeader` i zmienne niestandardowe, które nie były rozwijane i powodowały ostrzeżenie NSIS 6001.
- `customInit` bezpośrednio używa dokładnej starej ścieżki `C:\\Program Files\\print-cost-profit-desktop`, sprawdza plik wykonywalny, prosi o potwierdzenie i przerywa instalację, jeśli folderu nie można usunąć.
- Usuwa stare klucze rejestru instalacji/deinstalacji, aby NSIS nie uruchamiał ponownie wadliwego starego deinstalatora.
- Nie zmienia lokalnego serwera ani ścieżek danych użytkownika/SQLite.

## v2.0.14 — Kontrolowane usunięcie poprzedniej instalacji
- Dodaje procedurę NSIS `customInit`, która wykrywa zarejestrowaną poprzednią instalację i tylko wtedy, gdy jej ścieżka to `C:\\Program Files\\print-cost-profit-desktop` oraz zawiera oczekiwany plik wykonywalny, prosi o potwierdzenie i usuwa pliki programu przed instalacją nowej wersji.
- Jeśli folderu nie można usunąć, instalacja zostaje przerwana, aby uniknąć pomieszania wersji.
- Nie uruchamia starego deinstalatora, który błędnie zgłaszał, że aplikacja jest uruchomiona.
- Nie usuwa AppData/LocalAppData ani nie zmienia SQLite, licencji, kopii zapasowych lub serwera lokalnego.

## v2.0.13 — Instalacja z uprawnieniami w Program Files
- Konfiguruje NSIS do instalacji dla całego komputera (`perMachine`) z podniesieniem uprawnień (`allowElevation`), aby aktualizacje w `C:\\Program Files` miały wymagane uprawnienia.
- Usuwa niestandardowy skrypt NSIS z v2.0.12: makra bezpośredniego usuwania nie rozwiązywały blokady i mogły skasować cały folder docelowy.
- Nie zmienia serwera lokalnego, bazy SQLite ani lokalizacji danych użytkownika.

## v2.0.12 — Poprawka instalatora NSIS
- `builder-debug.yml` potwierdza, że `customCheckAppRunning` nie występuje w wygenerowanym skrypcie NSIS, więc poprawka v2.0.11 nie była wykonywana.
- Zastąpiono go obsługiwanymi hakami `customUnInstallCheck` i `customRemoveFiles`, aby ominąć problematyczne atomowe usuwanie poprzedniej instalacji.
- Usuwanie obejmuje wyłącznie `$INSTDIR`; dane użytkownika pozostają poza tym katalogiem.

## v2.0.11 — Poprawka zamykania podczas aktualizacji
- Używa haka NSIS `customCheckAppRunning`; poprzedni `customInit` nie przechwytywał komunikatu instalatora.
- Instalator zamyka wyłącznie Print Cost & Profit przed zastąpieniem plików.

## v2.0.9 — Naprawa uruchamiania lokalnego mostu

- Dostępność mostu jest teraz sprawdzana przez `/api/version`; wolny dziennik aktywności nie powoduje już fałszywego błędu.
- Wydłużono limit czasu sprawdzania, aby uniknąć uruchomienia drugiego serwera HTTP.sys.
- Jeśli HTTP.sys nadal rejestruje adres, ale nie można potwierdzić wersji, program uruchamiający bezpiecznie kończy działanie i zapisuje diagnostykę; nie zatrzymuje nieznanych procesów.
- Baza danych i lokalizacja danych pozostają bez zmian.

## v2.0.8 — Poprawka kompilacji Windows
- Usunięto BOM UTF-8 z `package.json` i plików JSON, aby `@electron/rebuild` oraz `JSON.parse` mogły je poprawnie odczytać.
- Zachowano UTF-8 z BOM w `Servidor_Panel_U1.ps1`, wymagane przez Windows PowerShell 5.1 dla znaków międzynarodowych.
- Sprawdzono składnię JSON i zaktualizowano wersję do v2.0.8.

## v2.0.7
- Dodano tryby Sprzedaż (domyślny) i Osobisty (tylko koszty) z pływającym objaśnieniem.
- Tryb osobisty pomija VAT, sprzedaż, prowizje, robociznę, rezerwę awarii i obliczanie zysku.
- Księgowość używa aktywnego aliasu Snapmaker i stabilnej identyfikacji drukarki, aby uniknąć duplikatów U1.
- Dokumentacja dostosowana do szerokich okien; lokalne ilustracje zastępcze przy braku opcjonalnych zrzutów galerii.
- Nowe teksty scentralizowane w js/traducciones.js dla ośmiu języków.

### v2.0.6 — Rzeczywiste godziny drukowania, licznik nieprzeczytanych alertów i lokalna dokumentacja
- Konserwacja sumuje rzeczywiste godziny drukowania zgłaszane przez `print_stats` monitora U1 podczas pracy oraz po zakończeniu lub anulowaniu.
- Wyceny i szacowany czas druku nie są traktowane jako rzeczywiste godziny pracy maszyny.
- Czerwony licznik na ekranie głównym pokazuje tylko nieprzeczytane alerty; ostatnio przeczytane nadal są widoczne na liście.
- Dodano lokalne instrukcje HTML w ośmiu językach i poprawiono odnośniki Dokumentacja oraz Pomoc.
- Wszystkie nowe teksty są scentralizowane w `js/traducciones.js` dla ośmiu obsługiwanych języków.

### v2.0.5 — Poprawka kodowania serwera PowerShell
- Dodano BOM UTF-8 do `Servidor_Panel_U1.ps1`, aby Windows PowerShell 5.1 poprawnie odczytywał znaki spoza ASCII.
- Naprawiono błąd analizy blokujący uruchomienie serwera lokalnego.
- Zaktualizowano widoczną wersję i odwołania pamięci podręcznej do v2.0.5.

### v2.0.4 — Poprawka uruchamiania aplikacji i instalatora
- Uruchamiacz serwera lokalnego korzysta z Start-Process, gdy WMI/CIM jest niedostępne.
- Wyjście stdout i stderr serwera jest zapisywane w lokalnym folderze logów.
- Instalator NSIS jawnie włącza wybór języka, zachowuje umowę licencyjną i pozwala wybrać folder instalacji.
- Widoczna wersja została zaktualizowana do v2.0.4.

### v2.0.3 — Poprawki powiadomień, księgowości i magazynu
- Panel Alerty na ekranie głównym korzysta z tych samych aktywnych powiadomień co ikona dzwonka.
- Zapis wyceny z włączoną księgowością tworzy ruch księgowy i odejmuje filament G-code z przypisanych szpul, z kontrolą stanu i ochroną przed duplikatami.
- Monitor U1 używa tego samego okna tworzenia szpuli co kalkulator.
- Zadania konserwacji można sortować według priorytetu, interwału rosnąco/malejąco lub nazwy.
- Instalator NSIS zawiera umowę licencyjną, wybór języka i folderu instalacji.

### v2.0.3 — Powiadomienia o błędach kopii zapasowych

- Powiadamia również o problemach wykrytych podczas kontroli integralności SQLite; alert zostaje rozwiązany po przywróceniu prawidłowego stanu.
- Doprecyzowuje, że ustawienie księgowości obejmuje wydruki z potwierdzonym odjęciem filamentu.
- Dodaje osobne ustawienie powiadomień o niepowodzeniu ręcznego tworzenia lub przywracania kopii zapasowej.
- Alerty są deduplikowane według operacji i oznaczane jako rozwiązane po kolejnym pomyślnym wykonaniu operacji.
- Wykrywanie zakończonych wydruków U1 korzysta teraz z potwierdzonego stanu księgowego (`provisional=false`), a nie z przetłumaczonego tekstu wpisu.
- Zachowano lokalne ustawienia i historię, progi zapasów oraz centralne tłumaczenia we wszystkich ośmiu językach.

### v2.0.1 — Centrum powiadomień i ustawienia

- Kliknięcie dzwonka otwiera wspólne centrum powiadomień z licznikiem nieprzeczytanych, historią, oznaczaniem pojedynczych lub wszystkich jako przeczytane oraz usuwaniem przeczytanych.
- Powiadomienia o zbliżającym się i wymaganym serwisie; domyślnie włączone.
- Alerty stanu filamentu dla każdej szpuli i koloru: domyślnie 200 g, próg można ustawić według gramów, liczby szpul lub obu kryteriów.
- Powiadomienia księgowe o zakończonych lub anulowanych wydrukach U1 tylko wtedy, gdy zapis potwierdza rzeczywiste zużycie filamentu.
- Powiadomienia o nowych wersjach programu i osobne ustawienia każdej kategorii. Ustawienia i historia są zapisywane lokalnie.

### v2.0.0 — Aplikacja desktopowa Windows

- Dodano osobne okno aplikacji; Print Cost & Profit otwiera się bez kart i paska adresu przeglądarki.
- Zachowano istniejący interfejs, serwer lokalny, bazę SQLite, ścieżkę danych oraz integrację Orca/U1.
- Przed połączeniem sprawdzana jest wersja lokalnego mostu; aplikacja nie łączy się z serwerem w innej wersji.
- Dodano komunikaty uruchamiania i błędów aplikacji desktopowej w `js/traducciones.js` we wszystkich ośmiu językach.
- Dodano proces budowania instalatora Windows. Plik wykonywalny wymaga jeszcze kompilacji i końcowej weryfikacji w systemie Windows.

### v5.58
- Przebudowano centrum konserwacji: kompaktowe zadania na całej szerokości, zwijane porady poniżej i formularz na całą szerokość. Układ responsywny.

### v5.57
- PDF RTL: poprawiono lustrzane położenie asymetrycznych elementów graficznych (separatora sum i zielonego paska łącznej kwoty), aby arabskie etykiety i kwoty były prawidłowo wyrównane. Etykieta podatku korzysta teraz ze wspólnego klucza tłumaczeń we wszystkich ośmiu językach.

### v5.56
- PDF faktur i ofert: zastąpiono ograniczone kodowanie Helvetica/WinAnsi renderowaniem Unicode w wysokiej rozdzielczości z dołączonymi czcionkami Noto dla arabskiego i chińskiego. Generowanie PDF pozostaje lokalne i niezależne od domyślnej przeglądarki oraz zainstalowanych czcionek.

### v5.55
- Naprawiono panel alertów: powiadomienia o filamencie i konserwacji nie nadpisują się już ani nie znikają podczas odświeżania pulpitu.

### v5.53
- Serwer U1: naprawiono parsowanie PowerShell zapytań Moonraker zawierających `&`; separatory są teraz składane bezpiecznie. Skrypt zapisano z BOM UTF-8 dla Windows PowerShell 5.1, aby poprawnie wyświetlać polskie znaki.

- Monitor U1: zwiększono limit czasu żądania statusu do 8 sekund, a czas oczekiwania przeglądarki do 10 sekund. Zapobiega to błędnemu oznaczaniu drukarki jako offline, gdy odczyt G-code działa, ale status odpowiada wolniej.

### v5.51
- Konserwacja: usunięto etykietę PRO i przeniesiono kartę bezpośrednio pod Księgowość.
- Odświeżono panel konserwacji, karty, wskaźniki, formularze i historię; układ dostosowuje się do małych ekranów.
- Rozszerzono kontrole hotendu, zużycia dyszy, grzałki/termistora, ekstrudera, pasków, wentylatorów, stołu, czujników i okablowania.
- Poprawiono rozpoznawanie rodzin Snapmaker J1/Artisan, Anycubic Kobra 2 Pro, ELEGOO Neptune 4 Pro i Bambu Lab.
- Nowe zadania są dodawane także do istniejących drukarek bez usuwania godzin, zadań niestandardowych ani historii. Wspólne interwały są orientacyjne i edytowalne.
- Zaktualizowano centralne tłumaczenia we wszystkich ośmiu językach.

### v5.50
- Dodano kartę Konserwacja PRO z wyborem drukarki, rejestrowaniem godzin, zadaniami według godzin/kalendarza, alertami, własnymi zadaniami i historią.
- Udokumentowane harmonogramy początkowe dla Snapmaker U1/J1/Artisan, Creality K2 Pro, Prusa MK4S, Flashforge Adventurer 5M Pro, Anycubic Kobra 2 Pro/Kobra 3 i ELEGOO Neptune 4 Pro. Bambu Lab i pozostałe modele korzystają z edytowalnej ogólnej bazy. Pozostałe modele korzystają z edytowalnej ogólnej bazy wymagającej sprawdzenia w instrukcji.
- Dodano tłumaczenia interfejsu, okien i zadań na wszystkie osiem języków.

### v5.49
- Strona główna: monitor drukarek wyświetla teraz zapisaną nazwę niestandardową dla każdego adresu IP zamiast nazwy sieciowej, jeśli alias istnieje.

### v5.48
- Kalkulator: sekcja „01 · Dane części” zawsze rozciąga się na całą wysokość wiersza, tak jak sekcje filamentu i kosztów.

### v5.47
- Kalkulator: kolumna „Filament według koloru/materiału” jest szersza, a „Koszty dodatkowe” węższe na dużych ekranach. Pozostałe kolumny i układ responsywny pozostają bez zmian.

### v5.46
- Strona główna: panel drukarek ma stałą wysokość i przewijanie pionowe, gdy urządzeń jest więcej. „Otwórz monitor” prowadzi do Opcji, bezpośrednio do połączenia drukarki i przycisku „Szukaj automatycznie”.

### v5.45
- Strona główna: panel pokazuje rozpoznane drukarki i rozróżnia stany połączona, offline oraz niezweryfikowana. „Otwórz monitor” przywraca właściwy monitor i przewija do niego.

### v5.44
- Księgowość: zwężono kolumnę „Kwota/koszt” i nieznacznie zwiększono rozmiar tekstu tabeli.

### v5.43
- Księgowość: zmniejszono kolumny „Otrzymano” i „Zysk” oraz wyrównano szerokość wszystkich dziewięciu kolumn historii. Poprawiono kontrast, wyrównanie i szczegóły.

### v5.42
- Księgowość: skrócono nagłówki tabeli do „Otrzymano” i „Zysk”, zachowując wszystkie dziewięć kolumn.

### v5.41
- Księgowość: powiększono tekst historii, filtrów i przycisków. Szczegóły referencji pozostają otwarte po odświeżeniu tabeli.

### v5.40
- Odświeżono wygląd księgowości, dopasowując go do panelu głównego: karty, wskaźniki, filtry, formularz i historia mają teraz czytelniejszą hierarchię wizualną. Dotychczasowe funkcje i paginacja pozostają bez zmian.
### v5.39 — Odświeżenie wyglądu księgowości
- Dopasowuje księgowość do stylu pulpitu Start: warstwowe tła, świetlne akcenty i spójne karty.
- Poprawia hierarchię wskaźników i paneli analitycznych.
- Ulepsza formularz operacji i historię bez zmiany kontrolek ani logiki księgowej.
- Poprawia układ na ekranach o różnych szerokościach.

### v5.38 — Przeprojektowanie księgowości
- Odświeżona hierarchia wizualna rentowności, wskaźników i wykresów.
- Bardziej kompaktowy i lepiej uporządkowany formularz operacji.
- Historia księgowa z proporcjonalnymi kolumnami, wyróżnionymi kwotami, rozwijanymi referencjami i czytelniejszym wyszukiwaniem.
- Zachowano logikę obliczeń, zapisu, edycji, usuwania i eksportu. Bez nowych pól i okien dialogowych.

### v5.37 — Poprawka stronicowania szpul
- Karty spoza bieżącej strony są ukrywane także wtedy, gdy style motywu próbują je wyświetlić.
- Magazyn pokazuje dokładnie 8 szpul na stronę (4 kolumny × 2 wiersze na komputerze).
- Wyszukiwanie, filtry i edycja magazynu pozostają dostępne.

### v5.36 — Paginacja magazynu filamentu
- Naprawiono paginację kart magazynu: na każdej stronie wyświetla się teraz dokładnie 8 szpul zamiast całego zapasu.
- Naprawiono przyciski Poprzednia/Następna i wskaźnik strony; układ czterech kolumn i wyszukiwanie pozostają bez zmian.
- Dane magazynu, edycja gramów i pozostałe operacje działają jak dotychczas.

### v5.35 — Precyzja gramów w magazynie
- Pozostała ilość filamentu na szpuli jest wyświetlana z maksymalnie dwoma miejscami po przecinku, a edytowalne pole używa kroku 0,01 g. Zapisana wartość nie zmienia się, dopóki użytkownik nie edytuje pola.

### v5.23 — Profesjonalne odświeżenie sprzedaży, zapasów i księgowości
- Oferty, Zamówienia i Faktury otrzymały wizualne nagłówki, uporządkowane formularze, ciemne pola i czytelniejsze tabele; dotychczasowe działania i przepływy pozostają bez zmian.
- Ulepszono prezentację magazynu filamentów: czytelniejszy formularz, karty szpul, wskaźniki pozostałego materiału i kontrolki edycji.
- Wygląd Księgowości dopasowano do pulpitu Start, w tym karty rentowności i panele operacji.
- Układ dostosowano do wąskich ekranów. Dane, struktura SQLite i logika biznesowa pozostają bez zmian. Nie dodano nowych tekstów interfejsu.

### v5.22 — Profesjonalne odświeżenie sekcji Klienci
- Przeprojektowano kartę Klienci: dodano wyraźny nagłówek, uporządkowano formularz, zastosowano ciemne pola zgodne ze stroną główną i poprawiono hierarchię przycisków.
- Pole Uwagi nie jest już natywnym białym polem — teraz pasuje do ciemnego motywu i pozostałych pól.
- Lista klientów korzysta z kompaktowych, czytelniejszych kart bez niepotrzebnej pustej przestrzeni. Wyszukiwanie, edycja, zapis i usuwanie oraz używanie klientów w ofertach, zamówieniach i fakturach pozostają bez zmian.
- Bez zmian danych i schematu SQLite. Nie dodano nowych tekstów interfejsu.

### v5.21 — Jednolity układ strony Opcje
- Wszystkie sekcje Opcji mają teraz tę samą pełną szerokość, jednolite wyrównanie i odstępy; usunięto duże puste obszary obok ustawień Waluta i Wygląd.
- Formularze zachowują dwie kolumny, aby lepiej wykorzystać miejsce; szerokie pola i całe sekcje zajmują pełną szerokość. Na małych ekranach układ przechodzi na jedną kolumnę.
- Elementy sterujące, zapisane dane i tłumaczenia pozostają bez zmian; baza SQLite nie jest modyfikowana.

### v5.20 — Profesjonalny wygląd Opcji i naprawa zwijania sekcji
- Przeprojektowano kartę Opcje: kompaktowe kafelki w dwóch kolumnach, wyraźniejsza hierarchia i styl zgodny z ekranem głównym; drukarka, kopie zapasowe, profile i dziennik zachowują pełną szerokość, gdy jest potrzebna.
- Naprawiono przyciski „Pokaż pola” i „Ukryj pola” — teraz rzeczywiście zwijają i rozwijają zawartość oraz prawidłowo aktualizują dostępny stan kontrolki.
- Zachowano istniejące pola, kontrolki, ustawienia kolejności i zwijania, tłumaczenia oraz zapisane dane. Baza SQLite nie jest modyfikowana.

### v5.19 — Naprawa izolacji kart
- Naprawiono regułę CSS Opcji, która nadpisywała ukrywanie nieaktywnych kart.
- Opcje są widoczne tylko po wybraniu; Strona główna, Kalkulator, Wyceny i pozostałe sekcje są prawidłowo odizolowane.
- Zachowano układ, elementy sterujące i istniejące dane.

### v5.18 — Poprawa układu ustawień
- Usunięto zagnieżdżoną siatkę powodującą duże puste przestrzenie między sekcjami. Ustawienia są teraz wyświetlane w ciągłym układzie na całą szerokość.
- Ustawienia waluty i podatków oraz profile drukarek wykorzystują dostępną szerokość; pola i karty profili są wyrównane.
- Zachowano dotychczasowe elementy sterujące, dane oraz zwijanie i zmianę kolejności sekcji.

### v5.17 — Przeprojektowanie ustawień
- Porządkuje ustawienia w zwartej siatce kart z wyraźniejszą hierarchią wizualną i stylem zgodnym z ekranem głównym.
- Usuwa zduplikowany kontener danych sprzedawcy.
- Zachowuje wszystkie sekcje, kontrolki oraz zwijanie i zmianę kolejności. Dziennik aktywności nadal pokazuje 50 najnowszych wpisów bez usuwania historii.

## v5.16
- Przeprojektowano Opcje, dopasowując karty i elementy sterujące do panelu Start. Dziennik aktywności pokazuje 50 najnowszych zdarzeń; pełna historia pozostaje zapisana lokalnie.
- Usunięto również mały, zduplikowany tekst pod tytułem Kalkulator; tytuł i ikona pozostają.
- Flagi wyboru języka używają teraz osadzonych obrazów SVG i nie zależą od czcionek emoji systemu Windows.
- Usunięto mały, zduplikowany tekst pod tytułem karty Wyceny. Własny opis karty pozostaje widoczny.
- Poprawiono wybór języka: obok wybranego języka wyświetla się teraz widoczna flaga, aktualizowana po zmianie języka.
- Odświeżono wygląd karty Wyceny: wyróżniony nagłówek, pogrupowane filtry i wiersze historii dopasowane do pulpitu.
- Selektor języka wyświetla teraz odpowiednią flagę obok każdej wersji językowej.
- Zastępuje skrót „Wyceny” skrótem „Zamówienia”. Sekcja „Ostatnie wyceny” na stronie głównej i karta Wyceny pozostają bez zmian.
- Jeszcze bardziej ograniczono zewnętrzną poświatę ikon sekcji kalkulatora, zachowując kolory, rozmiar i kreski.
- Dodano „Wyceny” do szybkich skrótów na stronie głównej, z neonową ikoną i bezpośrednim dostępem do pełnej historii.

## v5.6
- Przywrócono wektorową ikonę kalkulatora w nagłówku karty. Zmniejszono poświatę ikon sekcji, aby poprawić komfort oglądania, zachowując ich rozmiar, kształty i kolory.

## v5.5
- Przywraca na stronie głównej sekcję „Ostatnie wyceny” z czterema ostatnio zapisanymi wycenami i skrótem do pełnej historii na karcie Wyceny.

## v5.4
- Zmniejszono poświatę ikon sekcji kalkulatora, aby poprawić komfort widzenia, zachowując ich rozmiar i neonowy styl.

## v5.3
- Dodaje osobną kartę „Wyceny” pod „Kalkulatorem” z neonową ikoną wektorową dopasowaną do stylu aplikacji.
- Przenosi pełną historię wycen do tej karty i usuwa z ekranu głównego sekcję ostatnich wycen oraz jej skrót.
- Zachowuje zapisane dane oraz funkcje wyszukiwania, sortowania, porównywania, wczytywania i usuwania.
- Dodaje nowe etykiety do `js/traducciones.js` we wszystkich ośmiu językach.
- Nieznacznie zmniejsza poświatę neonowych ikon kalkulatora, zachowując efekt świetlny i poprawiając czytelność.

## v5.1
- Naprawia nakładanie się ikon przez usunięcie odziedziczonej maski, która rysowała drugi symbol pod ikoną neonową.
- Nieznacznie powiększa ramkę i ikonę, zachowując cyjanowy, niebieski i fioletowy styl.
- Nie zmienia obliczeń, pól, układu ani działania kalkulatora.

## v5.0
- Zastępuje znaki tekstowe kalkulatora wektorowymi ikonami liniowymi w ramkach z neonową poświatą w kolorze cyjanowym, niebieskim i fioletowym, zgodnie z ekranem głównym.
- Ujednolica ikony nagłówka oraz paneli części, filamentu, kosztów, podatków, wyników i porównania cen bez zmiany elementów sterujących ani obliczeń.

## v4.9
- Przenosi ustawienia drukowania (czas, liczba sztuk, rezerwa błędów, profil i uwagi) do panelu rozliczenia podatku; karta części zachowuje nazwę, G-code i obraz.

## v4.8
- Zapobiega nadmiernemu wydłużaniu karty „Dane elementu” podczas importowania G-code z wieloma kolorami: raport wykrywania i stanu magazynowego ma własny obszar przewijania.
- Dodaje większe neonowe ikony w sekcjach kalkulatora, z poświatą w kolorze cyjanowym, fioletowym i zielonym, dopasowaną do ekranu głównego.
- Nie zmienia obliczeń, identyfikatorów pól, przypisywania szpul ani importowania G-code.

## v4.7
- Dostosowuje kalkulator do zatwierdzonego projektu: proporcje kart, hierarchię wyników i porównywarkę obok panelu akcji.
- Porządkuje sekcję wyniku, wyróżnia cenę całkowitą i usuwa pustą przestrzeń przesuwającą wskaźniki.
- Poprawia wyrównanie nagłówka i układ pól na dużych oraz małych ekranach.
- Nie zmienia obliczeń, identyfikatorów pól ani importowania G-code.

## v4.5
## v4.6
- Przebudowa kalkulatora: karty w dwóch rzędach, porównanie i działania obok siebie, bez nachodzącego paska narzędzi.
- Wizualne oddzielenie kosztów drukowania od kosztów dodatkowych bez zmiany identyfikatorów pól i obliczeń.

- Przeprojektowuje kartę Kalkulatora: dodaje karty, czytelniejszą hierarchię wizualną i bardziej widoczne ikony, zgodnie z profesjonalnym neonowym stylem strony głównej.
- Układa panele elementu, filamentu, kosztów, podatków i wyników w responsywnej siatce.
- Odświeża sekcję działań i porównywarkę cen.
- Zachowuje istniejące pola, identyfikatory, obliczenia, import G-code, zapis i elementy sterujące.

## v4.4
- Doprecyzowuje komunikat zapisu, wyraźnie wskazując bazę danych SQLite tego komputera.
- Dodaje unieważnianie pamięci podręcznej, aby przeglądarka ładowała aktualne skrypty tłumaczeń i kalkulatora.

## v4.3
- Naprawia nawigację po wysłaniu G-code z monitora U1: teraz otwiera się karta Kalkulator zamiast strony głównej.
- Zaimportowane dane pozostają wczytane, a pole nazwy elementu jest widoczne w kalkulatorze.

## v4.2
- Poprawia komunikat po zapisaniu wyceny: teraz potwierdza zapis w bazie SQLite tego komputera.
- Doprecyzowuje również potwierdzenie usuwania historii wycen.
- Zapis nadal korzysta ze zintegrowanego adaptera SQLite zgodnego z localStorage; format danych pozostaje bez zmian.

## v4.1
- Przenosi cały kalkulator do osobnej karty „Kalkulator”.
- Porównywarka cen, symulator awarii, wyniki i pola obliczeniowe znajdują się teraz w tej karcie.
- Strona główna zachowuje pulpit i wskaźniki; „Nowe obliczenie” oraz „Wczytaj G-code” najpierw otwierają kalkulator.
- Zachowano identyfikatory i logikę istniejących pól, aby nie naruszyć obliczeń ani funkcji.

## v4.0
- Naprawia dokumentację w Opcjach: wszystkie osiem plików README zostaje przekonwertowanych na osobne, zlokalizowane strony HTML.
- Każdy język otwiera teraz własną instrukcję HTML z poziomu aplikacji; usunięto błędną ścieżkę do nieistniejących plików.
- Instrukcja arabska używa kierunku RTL, a wszystkie instrukcje korzystają z ciemnego motywu aplikacji.

## v3.9
- Zastępuje dekoracyjne symbole na górnym pasku działającymi przyciskami w stylu neonowym: alerty, dokumentacja i opcje.
- Dzwonek prowadzi do panelu alertów i pokazuje aktualną liczbę powiadomień.
- Znak zapytania otwiera instrukcję w wybranym języku; ścieżki wskazują dołączone pliki README.
- Koło zębate otwiera bezpośrednio kartę Opcje.

## v3.8
- Łączy monitor drukarek na stronie głównej z rzeczywistym lokalnym endpointem mostu `/api/u1/status`, zamiast odczytywać tekst z potencjalnie ukrytego panelu.
- Wyświetla połączenie, stan drukarki, aktywny plik i postęp drukowania; informuje o braku połączenia, gdy most lub drukarka nie odpowiada.
- Przycisk otwierania monitora odświeża stan przed otwarciem pełnego widoku.
- Nie dodano nowych tekstów; ponownie wykorzystano istniejące tłumaczenia z traducciones.js.

## v3.7
- Poprawia wskaźniki pulpitu, aby korzystały z tych samych zasad i normalizacji co księgowość.
- Wyklucza wyceny nieuwzględnione w księgowości i zapobiega podwójnemu liczeniu przychodów ze starszych zamówień.
- Przychody, koszty, zysk, marża i otrzymane płatności są teraz obliczane według tych samych kryteriów co zaawansowana rentowność.
- Nie dodano nowych tekstów interfejsu.

## v3.6
- Nieznacznie powiększa ikony głównych przycisków, wskaźników KPI, nawigacji bocznej i skrótów, aby były lepiej widoczne.
- Ikony są oddzielone od etykiet, dzięki czemu można zmieniać ich rozmiar bez wpływu na tekst i tłumaczenia.
- Nie dodano nowych tekstów interfejsu.

## v3.5
- Dopasowuje nagłówek strony głównej do dostarczonego wzoru: „TWÓJ WARSZTAT 3D”, tytuł i opis po lewej, drukarka po prawej oraz pięć przycisków akcji na dole.
- Poprawia proporcje i odstępy, aby drukarka nie zasłaniała tekstu ani przycisków.
- Zachowuje pięć kart KPI, wykresy, rentowność, historię, skróty i prawą kolumnę wraz z dotychczasowymi danymi i działaniem.
- Nie dodano nowych tekstów interfejsu; tłumaczenia pozostają scentralizowane w js/traducciones.js dla wszystkich ośmiu języków.

## v3.4
- Usuwa napis „Snapmaker U1” ze środka nagłówka i zastępuje go paskiem opisującym funkcje programu: kalkulację, produkcję i rentowność.
- Przeprojektowuje przyciski akcji i karty wskaźników, aby lepiej odpowiadały zatwierdzonemu projektowi pod względem rozmiaru, hierarchii, ikon i neonowych kolorów.
- Zastępuje słupki kosztów wykresem pierścieniowym z legendą, kwotami i procentami obliczanymi na podstawie zapisanych danych.
- Zachowuje istniejące działania i dane; nowy tekst nagłówka jest centralnie tłumaczony w traducciones.js na wszystkie osiem języków.

- Przebudowano siatkę strony głównej na dwie niezależne strefy: główną zawartość i prawą kolumnę, aby wysokość sekcji zapasów nie tworzyła dużych pustych przestrzeni.
- Karty rozmieszczono zgodnie z zatwierdzonym projektem: pięć wskaźników, wykresy i rentowność w jednym rzędzie, historia i skróty poniżej, a monitor drukarek/zapas/alerty po prawej stronie.
- Wykorzystano przezroczyste wycięcie prawdziwego zdjęcia Snapmaker U1; usunięto białą ramkę i dodano neonową poświatę bez zasłaniania drukarki.
- Dodano oznaczenie Snapmaker U1 w nagłówku. Zachowano istniejące funkcje i źródła danych; nie dodano nowych tekstów do tłumaczenia.

## v3.1
- Zastępuje ogólną ilustrację rzeczywistym zdjęciem drukarki Snapmaker U1 przekazanym do projektu.
- Usuwa białe tło zdjęcia i integruje je z neonowym podświetleniem w kolorze cyjanowym i fioletowym w nagłówku oraz panelu bocznym.
- Zachowuje panele, wykresy, dane i działające skróty; nie dodaje nowych tekstów interfejsu ani kluczy tłumaczeń.

## v3.0
- Przebudowano ekran główny zgodnie z zatwierdzonym projektem: drukarka 3D w nagłówku, ilustrowany pasek boczny, równe wskaźniki i układ trzech obszarów.
- Dodano wskaźnik ogólnej rentowności oparty na lokalnych przychodach i kosztach.
- Nowe teksty scentralizowano w `js/traducciones.js` i przetłumaczono na wszystkie osiem języków.
- Zachowano kalkulator, dane, integrację Orca i monitor U1.

## v2.9
- Dodaje wektorowe ilustracje drukarki 3D w pasku bocznym i nagłówku pulpitu.
- Wyrównuje karty KPI i porządkuje panele w siatce 12 kolumn o spójnych wysokościach.
- Poprawia układ na małych ekranach, nie zasłaniając elementów sterujących.

## v2.8
- Przebudowano ekran główny: wskaźniki, wykresy, ostatnie zadania, zapas filamentu, skróty i alerty.
- Dane są odczytywane lokalnie; istniejące funkcje pozostają bez zmian.
- Nowe teksty scentralizowane i przetłumaczone na osiem języków.

### v2.7 — Uproszczenie księgowości i odświeżenie historii
- Usunięto zduplikowane podsumowanie wydatków własnych i zamówień, dostępne już w zaawansowanej rentowności.
- Usunięto zduplikowane podsumowanie według drukarki.
- Formularz dodawania operacji i pełna historia pozostają bez zmian.
- Ulepszono tabelę: proporcjonalne kolumny, wyrównane kwoty, czytelne typy i rozwijane długie opisy.
- Nie dodano nowych tekstów: istniejące tłumaczenie „Zobacz szczegóły” jest używane we wszystkich ośmiu językach.

### v2.6 — Poprawki nagłówków i widocznych tekstów zaawansowanej rentowności
- Poprawia tłumaczenia nagłówków zawierających ikony dekoracyjne, które wcześniej uniemożliwiały dokładne dopasowanie w słowniku.

### v2.5 — Audyt i poprawki tłumaczeń zaawansowanej rentowności
- Uzupełnia brakujące teksty w panelu zaawansowanej rentowności, w tym status marży, podtytuły, legendy i objaśnienia.
- Centralizuje nowe tłumaczenia w `js/traducciones.js` dla wszystkich ośmiu obsługiwanych języków.
- Zapobiega dodawaniu zduplikowanych kluczy słownika.

### v2.4 — Naprawa kwot otrzymanych za zamówienia U1
- Zamówienia potwierdzone w monitorze U1 zapisują również kwotę wprowadzoną przez użytkownika jako zarejestrowaną płatność, oddzielnie od szacowanych przychodów.
- Kwoty otrzymane są odzyskiwane z zamówień U1 zapisanych w poprzednich wersjach, bez ponownego rejestrowania zamówień i zmieniania istniejących zapisów.
- Zapobiega podwójnemu liczeniu płatności powiązanych z tym samym zamówieniem.

### v2.3 — Karty podsumowania w jednym wierszu
- Umieszcza cztery karty: najbardziej rentowna drukarka, główny koszt, najlepsza marża i analizowany okres, w jednym poziomym wierszu na szerokich ekranach.
- Pozostawia wnioski za okres w osobnej wyróżnionej karcie i dostosowuje układ do tabletów oraz telefonów.

### v2.2 — Wizualny pulpit zaawansowanej rentowności
- Przekształca zaawansowaną rentowność w pulpit z KPI, wykresem trendu z sześciu miesięcy, strukturą kosztów, wskaźnikiem marży i porównaniem drukarek.
- Dynamiczne wykresy korzystają z zapisanych wpisów; filtry okresu i drukarki aktualizują wskaźniki oraz porównania bez powielania danych.
- Dodaje wnioski za okres i ulepsza układ responsywny oraz RTL.
- Wszystkie nowe teksty są scentralizowane w `js/traducciones.js` i przetłumaczone na osiem języków.

### v2.1 — Zaawansowany panel rentowności
- Dodaje filtrowaną według okresu i drukarki analizę szacowanych przychodów, kosztów, zysku, marży i zarejestrowanych wpłat.
- Dodaje porównanie rentowności drukarek i podział kosztów na podstawie istniejących danych, bez duplikowania zapisów.
- Wyjaśnia różnicę między szacunkami a potwierdzonymi płatnościami.

## Historia wersji

### v2.0 — Pełne tłumaczenie dziennika aktywności
- Moduły, komunikaty i poziomy dziennika są teraz wyświetlane w wybranym języku, a nie tylko nagłówki i przyciski.
- Szczegóły JSON używają przetłumaczonych etykiet i zachowują wartości techniczne potrzebne do diagnozowania błędów.
- Poprawiono nieaktualny numer wersji w stopce i szczegółach dziennika.
- Nowe teksty są scentralizowane w `js/traducciones.js` we wszystkich ośmiu obsługiwanych językach.


### v1.9 — Wykrywanie i ponowne uruchamianie starego mostu
- Program uruchamiający sprawdza teraz `/api/logs` oraz `/api/version`.
- Jeśli port 8700 zajmuje starsza instancja serwera Print Cost & Profit, ponownie uruchamia wyłącznie ten proces projektu, aby załadować nowe trasy.
- Jeśli port należy do innej aplikacji, nie zamyka jej i wyświetla czytelny błąd.
- Ręczne uruchamianie i przetwarzanie końcowe Orca korzystają z tej samej kontroli.


### v1.8 — Poprawka tworzenia dziennika aktywności
- Poprawiono inicjalizację i zapis UTF-8, aby plik dziennika był tworzony podczas uruchamiania serwera lokalnego.
- Obsługiwane są adresy `localhost` i `127.0.0.1`.
- Podgląd pokazuje rzeczywistą ścieżkę pliku dziennika.


### v1.7 — Scentralizowany dziennik aktywności i błędów
- Dodano trwałe lokalne rejestrowanie błędów JavaScript, nieobsłużonych odrzuceń Promise, problemów SQLite i aktywności najważniejszych elementów interfejsu.
- W Opcjach dodano podgląd dziennika z filtrowaniem poziomów, wyszukiwaniem, eksportem JSON i ręcznym czyszczeniem.
- Dzienniki są przechowywane poza folderem instalacyjnym, w lokalnych danych użytkownika; obowiązuje automatyczna rotacja, a widok pokazuje do 500 wpisów.
- System nie zapisuje wartości formularzy ani danych wrażliwych. Wygenerowane pliki dziennika nigdy nie są dołączane do dystrybucyjnych archiwów ZIP.
- Wszystkie nowe teksty są scentralizowane w `js/traducciones.js` i przetłumaczone na osiem języków.


### v1.3 — Tłumaczenia systemu licencji i obsługa języków
- Brakujące tłumaczenia dodano do `js/traducciones.js` dla procesów logowania, uwierzytelniania i sprawdzania licencji w językach hiszpańskim, angielskim, francuskim, niemieckim, włoskim i polskim.
- Stałe teksty globalnego okna dialogowego („Uwaga” i „Akceptuj”) korzystają z centralnego systemu tłumaczeń zamiast z oddzielnego słownika.
- Teksty aplikacji są zintegrowane i utrzymywane w ośmiu dostępnych językach: hiszpańskim, angielskim, francuskim, niemieckim, włoskim, polskim, arabskim i chińskim uproszczonym.
- Nowe teksty i okna dialogowe są centralizowane w `js/traducciones.js`, aby uniknąć pojedynczych ciągów tekstowych w plikach aplikacji.
- Dodano dwa nowe języki: arabski i chiński uproszczony. Aplikacja obsługuje teraz osiem języków: hiszpański, angielski, francuski, niemiecki, włoski, polski, arabski i chiński uproszczony.
- Naprawiono problemy z miniaturami plików G-code: pobierana jest dostępna miniatura o najwyższej rozdzielczości, a obraz jest zachowywany podczas wysyłania zadania z monitora do kalkulatora.
- Naprawiono drobne błędy działania, inicjalizacji, tłumaczeń i aliasów kolorów.

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

## v5.24
- Nowoczesne przeprojektowanie sekcji klientów, dopasowane do panelu głównego.
- Ulepszono nagłówek, formularz, wyszukiwanie, przyciski i karty klientów.
- Zachowano istniejące identyfikatory, dane i przepływy pracy.

## v5.25
- Premiumowa zmiana wyglądu wycen, dopasowana do panelu głównego.
- Ulepszono nagłówek, dane klienta, edytor pozycji, warunki, wyszukiwanie i tabelę zapisanych wycen.
- Zachowano istniejące identyfikatory i logikę działania.

## v5.26
- Udoskonalono listę zapisanych wycen: wyraźniejsza hierarchia wierszy, wyróżnione sumy i zawijane grupy przycisków.
- Poprawiono kontrast, efekty najechania, numerację i obsługę małych ekranów.

## v5.27
- Przeprojektowano widok Klientów: bardziej wyrazisty nagłówek, wyróżnione wyszukiwanie, lepiej uporządkowany formularz i elegantsze karty klientów zgodne z ekranem głównym.
- Zachowano istniejące identyfikatory pól i działania; zmiany dotyczą wyłącznie wyglądu.

## v5.28
- Nowy, bardziej elegancki wygląd Zamówień: nagłówek, formularz, wyszukiwarka i tabela mają wyraźniejszą hierarchię oraz turkusowo-fioletowe akcenty zgodne z ekranem głównym.
- Zachowano istniejące pola, identyfikatory, statusy i działania.

## v5.29
- Nowy, profesjonalny wygląd Faktur: czytelniejszy panel tworzenia, ustawienia numeracji i podatków, wybór klienta oraz archiwum faktur dopasowane do strony głównej.
- Zachowano istniejące identyfikatory, numerację, dane, drukowanie i działania. Nie dodano nowych pól ani okien dialogowych.

## v5.30
- Globalna poprawka kontrastu list rozwijanych, aby opcje były czytelne w systemach Windows i przeglądarce Edge.

## v5.31
- Ulepszony wygląd magazynu filamentów: formularz, filtry, wyszukiwanie i karty szpul z czytelniejszą hierarchią.

## v5.32
- Druga poprawa wyglądu magazynu filamentów: szersze karty w trzech kolumnach, formularz w czterech kolumnach i lepsza czytelność.

## v5.34
- Magazyn filamentów: 8 kart na stronę, w 4 kolumnach i 2 wierszach na komputerze.
- Oddziela rutynowe czyszczenie od zaplanowanej konserwacji: jest teraz poradą informacyjną i nie generuje alertów. Usuwa stare wpisy czyszczenia z zadań i historii. Poprawia pusty stan powiadomień.

## 2.0.118
- Interaktywna siatka stołu: obracanie myszą lub dotykiem, powiększanie kółkiem, reset widoku i pełny ekran.

## v2.0.136
- Zabezpiecza inicjalizację kalkulatora, gdy w widoku brakuje pól wyboru marki/modelu.

## v2.0.138
- Inicjalizuje wybór marki i modelu drukarki po załadowaniu HTML, zapobiegając addEventListener na null. Ogranicza zbędne zapisy SQLite monitora U1 i nie zapisuje ponownie niezmienionego ręcznego adresu IP.

## 2.0.143
- Automatyczne kopie zapasowe nie blokują już interaktywnych zapisów SQLite; są wykonywane osobnym żądaniem asynchronicznym.
- Listy drukarek i aliasy korzystają z centralnej kolejki zapisu.
- Opóźnione ponawianie prób po konflikcie 409.

- v2.0.147: naprawiono ręczne przypisywanie szpul U1; wybór jest zapisywany natychmiast i identyfikowany stabilnym ID, aby odświeżenie lub zmiana kolejności nie usuwały przypisania.
