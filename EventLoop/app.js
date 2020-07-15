//Zad 1

// const utils = require("./utils")

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// const funcResult = utils.uniq(someArray);

// console.log(someArray);
// console.log(funcResult);

//Zad 2

// const utils = require("./utils");

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));

//Zad 3
// const _ = require("lodash");
// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];
// const newMethod = _.difference(tabA, tabB);
// console.log(newMethod);

//Zad 4
// const _ = require("lodash");
// let myArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
// const getMin = _.min(myArray);
// const getMax = _.max(myArray);
// console.log(getMin, getMax);

//Zad 6

// let yargs = require("yargs").argv;
// let myOperator = yargs.operator;
// switch (myOperator) {
//   case "+":
//     console.log(yargs.a + yargs.b);
//     break;
//   case "*":
//     console.log(yargs.a * yargs.b);
//     break;
//   case "/":
//     console.log(yargs.a / yargs.b);
//     break;
//   case "-":
//     console.log(yargs.a - yargs.b);
//     break;

// }

// node app --a=1 --b=2 --operator=+

//Zad 7 & 8

// let yargs = require("yargs").argv;
// let fs = require("fs");
// let myOperator = yargs.operator;

// function getValue(a,b,callback){
//    let result = callback(a,b);
//    console.log("Wynik to " + result)
//    fs.writeFile('Wynik.txt', result, function (result) {
//     if (result) throw result;
//    });
//    return result;
//     }

// function showAddResult(a,b){
//     return a+b;
// }
// function showSubstractResult(a,b){
//     return a-b;
// }
// function showMultiplyResult(a,b){
//     return a*b;
// }
// function showDivisionResult(a,b){
//     return a/b;
// }

// switch (myOperator){

//     case "+":
// getValue(yargs.a, yargs.b, showAddResult);
// break;
//     case "-":
// getValue(yargs.a, yargs.b, showSubstractResult);
// break;
//     case "*":
// getValue(yargs.a, yargs.b, showMultiplyResult);
// break;
//     case "/":
// getValue(yargs.a, yargs.b, showDivisionResult);
// break;
// }

//Zad 9 & 10

// const os = require("os");
// let fs = require("fs");
// const userData = os.userInfo();

// function showUserData(){
//     let welcome = "Witaj " + userData.username
//     console.log(welcome);
//     fs.writeFile('userData.txt', welcome, function (welcome) {
//             if (welcome) throw welcome;
//    })
//     }
// setTimeout(showUserData,5000);

//Zad 11

// let request = require("request");
// request(
//   "https://api.openweathermap.org/data/2.5/weather?q=Bia%C5%82ystok&APPID=0ed761300a2725ca778c07831ae64d6e",
//   function(error, response, body) {
//     console.log(body);
//   }
// );

//Zad 12

// let request = require("request");
// let yargs = require("yargs").argv
// let cityName = yargs.city;
// let url = "https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q="+cityName

// request(url, function(error,response,body){
//     console.log(body);
// });
