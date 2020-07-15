let request = require("request");

let userRequestFunction = (userURL, getWeatherFunction, saveData) => {
  request(userURL, function (error, response, body) {
    let userData = JSON.parse(body);
    let userLAT = userData.address.geo.lat;
    let userLNG = userData.address.geo.lng;
    let userName = userData.name;

    if (response.statusCode === 404) {
      console.log("User not found");
    } else {
      console.log(userData.name);

      getWeatherFunction(userLAT, userLNG, userName, saveData);
    }
  });
};

module.exports = {
  getUser: userRequestFunction,
};
