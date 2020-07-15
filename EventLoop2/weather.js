let request = require("request");

let userWeatherFunction = (userLAT, userLNG, userName, saveData) => {
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${userLAT}&lon=${userLNG}`;

  request(weatherURL, function (error, response, body) {
    let userWeather = JSON.parse(body);
    console.log(userWeather.main);

    let userTemperature = userWeather.main.temp;
    saveData(userName, userTemperature);
  });
};

module.exports = {
  getWeather: userWeatherFunction,
};
