//Zad 1&2

// const helloPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "Hello World");
// });

// helloPromise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//Zad 3

// const sub = (a, b) => {
//   let result = a - b;
//   const subPromise = new Promise((resolve, reject) => {
//     if (result >= 0) {
//       resolve(result);
//     } else {
//       reject("Value is below 0");
//     }
//   });
//   return subPromise;
// };

// sub(5, 6)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Zad 4

// let request = require("request");
// let yargs = require("yargs").argv;

// let myID = yargs.ID;

// const getUser = id => {
//   let userURL = `https://jsonplaceholder.typicode.com/users/${id}`;

//   const userPromise = new Promise((resolve, reject) => {
//     request(userURL, function(error, response, body) {
//       let userData = JSON.parse(body);
//       if (response.statusCode === 404) {
//         reject("User not found");
//       } else {
//         resolve(userData);
//       }
//     });
//   });

//   return userPromise;
// };

// getUser(myID)
//   .then(result => {
//     console.log(result.name);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Zad 5&7

// const fs = require("fs");
// const request = require("request");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return new Promise((resolve, reject) => {
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         resolve(user);
//       } else {
//         reject("User not found");
//       }
//     });
//   });
// };

// const getWeather = (lat, lng) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
//   return new Promise((resolve, reject) => {
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const data = JSON.parse(body);
//         resolve(data);
//       } else {
//         reject("Weather not found");
//       }
//     });
//   });
// };

// getUser(2)
//   .then(user => {
//     console.log(user.name);
//     return getWeather(user.address.geo.lat, user.address.geo.lng);
//   })
//   .then(weather => {
//     console.log(weather.main.temp);
//     return weather;
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Zad 6
// const request = require("request");

// const getUser = id => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   return new Promise((resolve, reject) => {
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const user = JSON.parse(body);
//         resolve(user);
//       } else {
//         reject("User not found");
//       }
//     });
//   });
// };

// const ids = [2, 5, 7];

// const userPromises = ids.map(id => getUser(id));

// Promise.all(userPromises)
//   .then(users => {
//     users.forEach(user => {
//       console.log(user.name);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("");
//   });

//Zad 8&9
// let axios = require("axios");
// const util = require("util");
// const fs = require("fs");
// const writeFile = util.promisify(fs.writeFile);

// function getUser(id) {
//   return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// }

// function getWeather(lat, lng) {
//   return axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
//   );
// }

// getUser(2)
//   .then(function(user) {
//     console.log(user.data.name);
//     return getWeather(user.data.address.geo.lat, user.data.address.geo.lng);
//   })
//   .then(function(weather) {
//     console.log(weather.data.main.temp);
//     writeFile("userWeather.txt", JSON.stringify(weather.data));
//   })
//   .then(() => {
//     console.log("File saved succesfully");
//   })
//   .catch(function(error) {
//     // handle error
//     console.log(error);
//   });

//Zad 10&11
// const util = require("util");
// const fs = require("fs");
// const writeFile = util.promisify(fs.writeFile);
// const axios = require("axios");

// function getUser(id) {
//   return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
// }
// function getAlbum(id) {
//   return axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
// }
// function getPhotos(id) {
//   return axios.get(
//     ` https://jsonplaceholder.typicode.com/photos?albumId=${id}`
//   );
// }

// axios
//   .all([getUser(1), getAlbum(1), getPhotos(1)])
//   .then(
//     axios.spread(function(user, albums, photos) {
//       console.log(`User name is: ${user.data.name}`);
//       console.log(`First album title is: ${albums.data[0].title}`);
//       console.log(`Number of albums is: ${albums.data.length}`);
//       console.log("User photo titles are:");
//       photos.data.forEach(photo => {
//         console.log(photo.title);
//         let photoTitle = photo.title;
//         if (photoTitle.length > 10) photoTitle = photoTitle.substring(0, 10);
//         writeFile(`photos/${photoTitle}.txt`, JSON.stringify(photo));
//       });
//     })
//   )
//   .catch(function(error) {
//     console.log(error);
//   });
