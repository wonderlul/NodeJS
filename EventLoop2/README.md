## Zadania do wykonania na laboratorium

1. Stwórzmy aplikację która pozwoli na zapisanie całego obiektu do pliku. W tym celu powinniśmy wykorzystać wbudowany moduł `fs` oraz funkcję pozwalającą na przekonwertowanie obiektu na postać tekstową(`JSON.stringify`).

Obiekt do zapisu:

```javascript
const user = {
  name: "Jan",
  lastName: "Nowak",
};
```

Wynik zapisać do pliku `user.json`.

2. Rozszerzmy aplikację z zadania 1 o wprowadzanie dynamiczne danych które chcemy zapisać do pliku. W zadaniu tym może być pomocny zewnętrzny moduł `yargs`.

Przykład uruchomienia aplikacji

```bash
node app.js --name=Adam --lastName=Mickiewicz
```

Wprowadzane dane powinny być zapisane do pliku.

3. Dodajmy do naszej aplikacji z zadania 2 przed nadpisaniem nowymi wartościami, wczytanie już wcześniej zapisanego obiektu. W konsoli wypiszmy jedynie imię wczytanego użytkownika.

4. Stwórz aplikację która pobierze informację o użytkowniku podając jego id z API i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.

Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie `ID` to identyfikator użytkownika.

Endpoint z przykładowym `ID`: https://jsonplaceholder.typicode.com/users/2

Wynik w konsoli

```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

5. Rozszerzmy zadanie 4 tak aby nasza aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie. ([link do opisu funkcji zwrotnej modułu `request`](#funkcja-zwrotna-modułu-request))

6. Dodajmy do zadania 5 możliwość dynamicznego wprowadzania `ID` poprzez użycie zewnętrznej biblioteki `yargs`.

Przykład uruchomienia aplikacji

```bash
node app.js --id=2
```

Wynik w konsoli

```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

```bash
node app.js --id=20
```

Wynik w konsoli

```bash
User not found.
```

7. Wykorzystując zadanie 6 dodajmy opcję pobrania pogody dla wczytanego
   użytkownika. Pamiętajmy o odpowiednim zabezpieczeniu naszej aplikacji w przypadku błędu API(podobnie jak w z zadaniu 5).

Adres do pobrania danych:

```bash
https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}

gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika
```

8. Podzielmy naszą aplikację z punktu 7 na moduły odpowiednio:

`app.js` – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu `user.js`

`user.js` – plik z pobieraniem danych użytkownika

`weather.js` – plik z pobieraniem danych o prognozie pogody

9. Dodajmy do zadania 8 zapis do pliku obiektu składającego się z nazwy użytkownika oraz pobranej temperatury.
