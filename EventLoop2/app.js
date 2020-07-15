// Zadanie 1 & 2

// let fs = require("fs");
// let yargs = require("yargs").argv;

// let user = {
//   name: yargs.name,
//   lastName: yargs.lastName
// };

// const userJSON = JSON.stringify(user);

// fs.writeFile("userData.txt", userJSON, function(userJSON) {
//   if (userJSON) throw userJSON;
// });

// fs.writeFile("userData.txt", userJSON, () => {
//   console.log("Dane zostały zapisane");
// });

// Zadanie 3
// let fs = require("fs");
// let yargs = require("yargs").argv;

// let user = {
//   name: yargs.name,
//   lastName: yargs.lastName,
// };

// fs.readFile("userData.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   let userData = JSON.parse(data);
//   console.log(userData.name);
//   const userJSON = JSON.stringify(user);
//   fs.writeFile("userData.txt", userJSON, () => {});
// });

// Zadanie 4 & 5 & 6 & 7

// let request = require("request");
// let yargs = require("yargs").argv;
// let _ = require("lodash");
// let ID = yargs.id;

// let userUrl = `https://jsonplaceholder.typicode.com/users/${ID}`;

// request(userUrl, function(error, response, body) {
//   let userData = JSON.parse(body);
//   if (response.statusCode === 404) {
//     console.log("User not found");
//   } else {
//     console.log(userData.name);
//     let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${userData.address.geo.lat}&lon=${userData.address.geo.lng}`;
//     request(weatherUrl, function(error, response, body) {
//       let userWeather = JSON.parse(body);
//       console.log(userWeather.main);
//     });
//   }
// });

// Zadanie 8&9

// let yargs = require("yargs").argv;
// let user = require("./user");
// let weather = require("./weather");
// let saveData = require("./saveData");

// let ID = yargs.id;
// let userURL = `https://jsonplaceholder.typicode.com/users/${ID}`;

// user.getUser(userURL, weather.getWeather, saveData.getSaveData);
