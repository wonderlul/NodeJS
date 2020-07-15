//Zadanie 3

// let user = require("./user-name");
// console.log("Hello " + user.imie + user.nazwisko + "!");

//Zadanie 4
// let funkcje = require("./math")

// console.log("3*5=", funkcje.mnozenie(3,5));
// console.log("3+5=", funkcje.dodawanie(3,5));
// console.log("3-5=", funkcje.odejmowanie(3,5));
// console.log("3/5=", funkcje.dzielenie(3,5));


// //Zadanie 5
// let funkcje = require("./math")

// console.log("3*5=", funkcje.mnozenie(3,5));
// console.log("3+5=", funkcje.dodawanie(3,5));
// console.log("3-5=", funkcje.odejmowanie(3,5));
// console.log("PI = ", funkcje.pi);

//Zadanie 6
// let funkcje = require("./math")
// const line = "3*5= " + funkcje.mnozenie(3,5) + "\n";
// const fs = require("fs"); //wywołujemy wbudowany moduł
// fs.writeFileSync("wynik.txt", line); //nadpisuje stałą "line" do pliku "wynik.txt" (tworząc go)
// fs.appendFileSync("wynik.txt", line); //dopisuje stałą "line" do pliku "wynik.txt" (już stworzonego)

//Zadanie 7
// const os = require("os");
// const fs = require("fs");
// const dane = os.userInfo();
// console.log(dane);
// fs.writeFileSync("dane.txt",dane.username);

//Zadanie 8
// let przywitanieKogos = "Witaj " + process.argv[2] + "!" +"\n";
// let przywitanieNieznajomego = "Witaj nieznajomy!";
// const fs = require("fs");
// if(process.argv[2] != undefined){
//     console.log("Witaj " + process.argv[2] + "!");
//     fs.writeFileSync("powitanie.txt",przywitanieKogos);
// } else{
//     console.log("Witaj nieznajomy!");
//     fs.writeFileSync("powitanie.txt", przywitanieNieznajomego);
// }



