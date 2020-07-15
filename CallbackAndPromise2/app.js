//Zad 1

// const fs = require("fs");

// try {
//   const data = fs.readFileSync("user.json", "utf-8");
//   const user = JSON.parse(data);
//   console.log(data);
//   console.log(user.name);
// } catch (error) {
//   console.log(error.message);
// }

//Zad 2

// let div = (a, b) => {
//   if (b === 0) {
//     throw new Error("Divide by 0!");
//   }
//   const result = a / b;
//   return result;
// };

// try {
//   const wynik = div(2, 0);
//   console.log(wynik);
// } catch (error) {
//   console.log(error);
// }

//Zad 3

// async function someFunction() {
//   return "Hello World!";
// }

// someFunction().then(result => {
//   console.log(result);
// });

//Zad 4,5

// (async function() {
//   const isEven = (a, b) => {
//     if ((a + b) % 2 !== 0) {
//       return a + b;
//     } else {
//       throw new Error("Number is even");
//     }
//   };
//   try {
//     const result = await isEven(3, 3);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// })();

//Zad 6,7

// const axios = require("axios");

// const getUser = async function() {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users/2"
//   );
//   return response.data;
// };

// (async function() {
//   try {
//     const response = await getUser();
//     console.log(response.name);
//   } catch (error) {
//     console.log(error);
//   }
// })();

//Zad 8

// const axios = require("axios");

// const getUser = async (id) => {
//   const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//   const response = await axios.get(url);
//   return response.data;
// };

// (async () => {
//   try {
//     const ids = [2, 3, 5, 7];
//     const usersPromises = ids.map((id) => getUser(id));
//     const users = await Promise.all(usersPromises);

//     users.forEach((user) => console.log(user.name));
//   } catch (error) {
//     console.log("user not found");
//   }
// })();
//Zad 9

// const axios = require("axios");

// async function getWeather(lat, lng) {
//   try {
//     const weatherInfo = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
//     );
//     console.log(weatherInfo.data.main.temp);
//   } catch (error) {
//     console.log(error);
//   }
// }

// (async function getUser() {
//   try {
//     const userInfo = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/2"
//     );
//     console.log(userInfo.data.name);
//     await getWeather(
//       userInfo.data.address.geo.lat,
//       userInfo.data.address.geo.lng
//     );
//   } catch (error) {
//     console.log(error);
//   }
// })();

//Zad 10
// const axios = require("axios");

// let userFunction = async function() {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/2`
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// let postsFunction = async function() {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts?userId=2`
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// axios
//   .all([getUser(), getPosts(), getActivity()])
//   .then(
//     axios.spread(function(user, post, activity) {
//       console.log(`User name is: ${user.data.email}`);
//       console.log(`User posts: ${post.data.length}`);
//       console.log(`User comments: ${activity.data.length}`);
//     })
//   )
//   .catch(function(error) {
//     console.log(error);
//   });
