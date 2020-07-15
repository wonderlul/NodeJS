## Zadania do wykonania na laboratorium

1. Stwórzmy nasz pierwszy serwer wykorzystując wbudowany moduł `HTTP`, który wyśle do naszego klienta przywitanie. Sprawdźmy czy działa aplikacja poprzez uruchomienie przeglądarki i wysłanie żądania do naszego serwera. (port 4700)

2. Dodajmy do naszej aplikacji z zadania 1 warunek, jeżeli w adresie pojawi się parametr `name` przywitajmy naszego użytkownika po nazwie. (wykorzystajmy wbudowany moduł `URL`)

3. Jak możemy zaobserwować podczas tworzenia aplikacji na wbudowanym module `HTTP` uciążliwe jest pobieranie danych wysłanych przez klienta. Aby usprawnić tworzenie serwera web powstały różne frameworki, m.in. `Express` który pozwala na szybsze postawienie naszego serwera.

Zmodyfikujmy nasz kod z zadania 2 tak aby był wykorzystywany framework `Express`.

4. Stwórzmy aplikację która pobierając 2 parametry `a` i `b` z adresu url wykona mnożenie w naszej aplikacji. Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

5. Rozszerzmy naszą aplikację z zadania 4 o dodatkowe działania matematyczne takie jak mnożenie, dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.

```bash
/mnozenie...
/dzielenie...
/dodawanie...
/odejmowanie...
```

6. Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

   - Stworzyć 'końcówkę' `/add` do dodawania użytkownika która przyjmuje parametry `?name=Jan&username=janko&email=jan@nowak.abc`

   - Dodać ścieżkę wyświetlania wszystkich użytkowników oraz jeżeli zostanie podany odpowiedni `id` wyświetlić jedynie jednego użytkownika

   - Rozszerzyć aplikację o kasowanie użytkownika poprzez odpowiednią ścieżkę.

7. Wzorując się na zadaniu 6 stwórzmy analogicznie obsługę tablicy zawierającej posty. Aplikacja ma rozszerzyć naszą już istniejącą aplikację z zadania 6.

Struktura `postu`:

```javascript
{
    id: 0,
    userId: 0,
    title: '',
    body: ''
}
```

8. Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując `express.Router`(https://expressjs.com/en/4x/api.html#router)
