## Node.js - Laboratorium 10

## Zadania do wykonania na laboratorium

## Ważne! Pliki o nazwie firstTask itd. należy w celu wywołania zmienić na app.js.

1. Stwórzmy nasz pierwszą aplikację serwerową wykorzystującą system szablonów PUG. Obsłużmy ścieżki takie jak:
   '/' - wyświetli przywitanie 'hello world!' jako nagłówek ('h1')
   '/Jan' - wyświetli przywitanie 'hello Jan!' jako nagłówek ('h1')
   '/Adam' - wyświetli przywitanie 'hello Adam!' jako nagłówek ('h1')
   ...
2. Przećwiczmy wczytywanie szablonów zmieniając system szablonów PUG na MUSTACHE(https://github.com/bryanburgers/node-mustache-express). Stwórzmy aplikację, która wyliczy nam podatek z podanej kwoty i zwróci nam widok z danymi.
   Przykład ścieżki /podatek/19/25, gdzie 19 to wysokość vat podana w procentach oraz 25 kwota.

3) Stwórzmy aplikację, która będzie dzieliła dwie liczby. W przypadku dzielenia przez 0, aplikacja ma rzucić wyjątkiem. Dodajmy do naszej aplikacji middleware, który wyświetli w konsoli informacje o wystąpieniu błędu.

4) Stwórzmy WEB API które wczyta podany plik(asynchronicznie!) i wyśle zawartość do użytkownika końcowego. W katalogu 04/static zostały dodane przykładowe pliki.

Scenariusz 1: ścieżka: /music.txt - wczytaj zawartość pliku i wyślij do użytkownika

Scenariusz 2: ścieżka: /movies.txt - wyrzuci błąd

Scenariusz 3: ścieżka: /sample.txt - wczytaj zawartość pliku i wyślij do użytkownika

5. Dodajmy do zdania 4 middleware obsługujący błąd i wyświetlmy swoją stronę z błędem. W zadaniu wykorzystajmy system szablonów mustache

Kolejnym zadaniem jest stworzenie aplikacji pozwalającej na jednocześnie pobranie danych użytkownika oraz pogody. Pamiętajmy o obsłudze błędów zewnętrznych API.

Przykład adresu: http://localhost:4000/user/2

Adres do pobierania użytkownika: https://jsonplaceholder.typicode.com/users/2

Adres do pobierania pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
