## Zadania do wykonania na laboratorium

1. Wykorzystując ścieżki ze wzorcem(`string pattern`) stwórzmy web serwer, który udostępni końcówkę pozwalającą wyliczyć nam podatek z podanej kwoty i zwróci nam 2 wartości: podatek oraz kwota bez podatku.

```
http://localhost:4500/podatek/19/25
gdzie 19 to podatek, a 25 to kwota

w rezultacie: { "tax": 5, "amount": 20 }
```

2. Zmodyfikujmy zadanie 1 tak aby dane były przesyłane metodą `POST` zamiast `GET`.

W tym celu powinniśmy zmodyfikować naszą ścieżkę oraz pobieranie parametrów.

Aby możliwe było przetestowanie wysłanego żądania zainstalujmy POSTMAN'a

3. Stwórzmy pierwsze pełne `REST API`, które pozwoli nam na zarządzanie cytatami (klasyczny CRUD).

- wyświetlane wszystkich cytatów (`GET`)
- wyświetlane konkretnego cytatu (`GET`)
- dodawanie cytatu (`POST`)
- usunie cytatu (`DELETE`)
- edytowanie cytatu (`PUT`)

4. Dodajmy do naszej aplikacji z zadania 3 nową funkcjonalność. Stwórzmy moduł pozwalający na zarządzanie listą zadań. (Task manager/TODO list).

- wyświetlanie wszystkich dostępnych zadań (`GET`)
- wyświetlanie konkretnego zadania (`GET`)
- dodawanie zadania (`POST`)
- usuwanie zadania (`DELETE`)
- edytowanie zadania (`PUT`)

5. Zaimplementujmy nową funkcjonalność do naszego modułu zarządzania lista zadań. Nasz moduł powinien pozwalać na zaznaczenie oraz odznaczenie iż zadanie zostało już wykonane czy też nie.

- stworzyć możliwość zmiany statusu zadania (wykonane/niewykonane) (`PATCH?`)
- dać możliwość wyświetlenia wszystkich zadań lub też wykonanych/niewykonanych (`GET`)

6. Dodajmy do naszej aplikacji dodatkowy moduł, który będzie zarządzał użytkownikami.

- doda nowego użytkownika (`POST`)
- wyświetli użytkowników (`GET`)
- usunie użytkownika (`DELETE`)
- podmieni cały obiekt (`PUT`)
