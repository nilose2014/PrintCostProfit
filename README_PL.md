# Print Cost & Profit
## Kalkulator kosztów druku 3D, magazyn filamentów i zarządzanie drukarkami

**Windows Desktop: 2.0 | Linux: 1.4**  
Autorka: Beatriz Toro Martin

Oficjalne repozytorium: https://github.com/nilose2014/PrintCostProfit  
Wszystkie wydania: https://github.com/nilose2014/PrintCostProfit/releases

## 1. Pobieranie

Pobieraj oprogramowanie wyłącznie z oficjalnych wydań GitHub.

### Windows 10 / 11 — wersja 2.0

**ZIP instalatora:** `PrintCostProfit-Setup-v2.0.zip`  
[Wydanie Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Pobierz ZIP i wybierz **Wyodrębnij wszystko**.
2. Otwórz rozpakowany folder.
3. Uruchom `PrintCostProfit-Setup.exe` i postępuj zgodnie z instalatorem.

**ZIP wersji przenośnej:** `PrintCostProfit-Portable-v2.0.zip`  
[Wydanie Windows 2.0](https://github.com/nilose2014/PrintCostProfit/releases/tag/v2.0)

1. Pobierz ZIP i rozpakuj go do stałego folderu.
2. Uruchom `PrintCostProfit-Portable.exe` z rozpakowanego folderu.

Nie uruchamiaj plików bezpośrednio z ZIP. Zachowaj wszystkie rozpakowane pliki razem.

### Linux — wersja 1.4

[Wydanie Linux 1.4](https://github.com/nilose2014/PrintCostProfit/releases/tag/linux-v1.4)

**Debian / Ubuntu:** `printcostprofit_1.4.1_amd64.deb`  
[Pobierz .deb](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/printcostprofit_1.4.1_amd64.deb)

```bash
sudo apt install ./printcostprofit_1.4.1_amd64.deb
```

Możesz też kliknąć dwukrotnie plik `.deb` i użyć systemowego instalatora pakietów.

**AppImage:** `PrintCostProfit-Linux-x86_64.AppImage`  
[Pobierz AppImage](https://github.com/nilose2014/PrintCostProfit/releases/download/linux-v1.4/PrintCostProfit-Linux-x86_64.AppImage)

```bash
chmod +x PrintCostProfit-Linux-x86_64.AppImage
./PrintCostProfit-Linux-x86_64.AppImage
```

Pakiety Linux są przeznaczone dla systemów AMD64 64-bit. **Windows ma wersję 2.0, a opublikowane wydanie Linux to 1.4. Są to oddzielne linie wydań.**

## 2. Informacja o zabezpieczeniach Windows

Pliki Windows są obecnie udostępniane bez komercyjnego certyfikatu podpisywania kodu. SmartScreen lub inne oprogramowanie zabezpieczające może wyświetlić ostrzeżenie. Sprawdź, czy pobierasz plik z oficjalnego repozytorium. Nie ignoruj rzeczywistego wykrycia antywirusowego ani nie omijaj ostrzeżenia, jeśli pochodzenie pliku nie jest pewne.

## 3. Najważniejsze funkcje

- **Kalkulator kosztów druku 3D:** szacuje koszty na podstawie zużycia filamentu, ceny materiału, czasu druku, kosztów pracy urządzenia, amortyzacji, konserwacji i innych skonfigurowanych wydatków.
- **Cena i rentowność:** pozwala analizować szacowany koszt produkcji, cenę sprzedaży, zysk, marżę i sugerowaną cenę. Wyniki zależą od wprowadzonych wartości.
- **Magazyn filamentów:** zarządza markami, materiałami, kolorami, ilością filamentu na szpulach i cenami.
- **Profile drukarek:** zapisują parametry urządzeń wykorzystywane w obliczeniach.
- **Monitorowanie drukarek:** pełna zgodność ze Snapmaker U1 została potwierdzona. Inne drukarki Moonraker, Fluidd lub Mainsail mogą działać zależnie od konfiguracji i obsługiwanych funkcji.
- **Integracja slicerów:** przeznaczona dla Snapmaker Orca, OrcaSlicer i Creality Print. Zgodność wynosi około 90% i zależy od wersji oraz konfiguracji; nie jest gwarantowana w 100%.
- **Przetwarzanie G-code:** odczytuje dostępne informacje, szacowany czas druku, zużycie materiału i metadane filamentu. Szacunki slicera nie muszą odpowiadać rzeczywistemu zużyciu.
- **Oferty, faktury i księgowość:** narzędzia do organizowania dokumentów handlowych i finansów.
- **Lokalny SQLite:** Windows 2.0 zapisuje dane lokalnie za pomocą SQLite i Electron IPC.

## 4. Architektura Windows — wersja 2.0

Windows 2.0 ładuje interfejs z lokalnych plików Electron i nie korzysta już ze starego mostu HTTP PowerShell. Interfejs komunikuje się z SQLite przez IPC. Zgodne drukarki są dostępne przez sieć za pomocą Moonraker. Przepływ G-code Orca wykorzystuje lokalne monitorowanie plików zarządzane przez Electron. Starsze instrukcje dotyczące serwera HTTP lub mostu PowerShell nie opisują Windows 2.0.

## 5. Integracja slicera

Integracja jest przeznaczona dla aplikacji opartych na OrcaSlicer, szczególnie Snapmaker Orca, OrcaSlicer i Creality Print. Nazwy menu zależą od aplikacji i wersji.

1. Otwórz slicer i wybierz profil drukarki.
2. Otwórz ustawienia druku i w razie potrzeby włącz tryb zaawansowany.
3. Znajdź sekcję **Inne** oraz ustawienia skryptów przetwarzania końcowego.
4. Postępuj zgodnie z instrukcjami dołączonymi do odpowiedniego pakietu.
5. Zapisz profil, wygeneruj testowy G-code i sprawdź odbiór dostępnych informacji.

Windows 2.0 korzysta z lokalnego monitorowania plików przez Electron. Nie stosuj starych instrukcji wymagających mostu HTTP PowerShell.

## 6. Sieć drukarki

W przypadku zgodnych drukarek Moonraker sprawdź komunikację sieciową komputera i drukarki, adres IP, dostęp do Moonraker i skonfiguruj połączenie w aplikacji. Funkcje zależą od drukarki, firmware i sieci. Snapmaker U1 to model z potwierdzoną pełną zgodnością.

## 7. Dane i kopie zapasowe

Windows Desktop korzysta z lokalnej bazy SQLite. Wykonuj regularne kopie zapasowe, szczególnie przed aktualizacją. Nie usuwaj ani nie przenoś bazy podczas działania aplikacji. Jeśli inicjalizacja się nie powiedzie, zachowaj bazę i zbadaj błąd przed wprowadzaniem ważnych danych.

## 8. Wymagania systemowe

- **Windows:** Windows 10 lub 11, 64-bit i wystarczająca ilość miejsca. Monitorowanie drukarek wymaga sieci. Pakiety dla użytkowników nie wymagają ręcznej instalacji Node.js ani Pythona.
- **Linux:** AMD64 64-bit. Użyj pakietu Debian na zgodnym Debian/Ubuntu albo dostarczonego AppImage.
- Opcjonalne integracje: Snapmaker Orca, OrcaSlicer, Creality Print i zgodne drukarki sieciowe.

## 9. Aktualizacja

1. Otwórz oficjalne wydania.
2. Przeczytaj informacje i sprawdź system oraz wersję.
3. Pobierz właściwy pakiet.
4. Wykonaj kopię ważnych danych.
5. Zainstaluj lub rozpakuj nowy pakiet zgodnie z instrukcją.

Nie usuwaj istniejących danych podczas aktualizacji. Windows i Linux mają oddzielne linie wydań; sprawdź wersję.

## 10. Rozwiązywanie problemów

- **Windows nie uruchamia się:** sprawdź pełne rozpakowanie ZIP i zachowanie wszystkich plików razem. Zapisz błąd.
- **Ostrzeżenie zabezpieczeń:** sprawdź źródło pobrania i komunikaty antywirusa. Windows nie ma obecnie komercyjnego podpisu.
- **Monitor drukarki nie działa:** sprawdź zasilanie, sieć, IP, Moonraker i ustawienia.
- **Integracja nie działa:** sprawdź wersję slicera, post-processing, G-code i lokalny odbiór plików.
- **Dane nie są zapisywane:** zachowaj bazę, sprawdź SQLite i zapisz błąd. Nie usuwaj danych jako doraźnego rozwiązania.
- **AppImage nie startuje:** użyj `chmod +x`, uruchom z terminala i sprawdź błędy. Dla `.deb` sprawdź instalację i zależności.

## 11. Kod źródłowy i rozwój

Kod źródłowy: https://github.com/nilose2014/PrintCostProfit

```bash
npm install
npm start
```

Budowanie Windows:

```bash
npm run dist:win
```

Polecenia są przeznaczone dla programistów. Użytkownicy powinni pobierać gotowe pakiety z GitHub Releases.

## 12. Licencja, prawa autorskie i pomoc

Print Cost & Profit jest rozpowszechniany zgodnie z warunkami `LICENSE.txt` w repozytorium. Przed dalszym rozpowszechnianiem lub modyfikacją przeczytaj właściwą licencję.

Zgłaszając problem, podaj wersję, system operacyjny, modele i wersje drukarki oraz slicera, jeśli są istotne, opis, pełny komunikat błędu i kroki odtworzenia. Nie podawaj haseł, kluczy prywatnych ani zbędnych danych osobowych.

**Print Cost & Profit — Windows 2.0 / Linux 1.4**  
Opracowała Beatriz Toro Martin.
