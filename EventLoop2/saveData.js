let fs = require("fs");

let saveDataFunction = (userName, userTemperature) => {
  let userObject = {
    name: userName,
    temperature: userTemperature,
  };
  const userJSON = JSON.stringify(userObject);
  fs.writeFile("userData.txt", userJSON, () => {});
};

module.exports = {
  getSaveData: saveDataFunction,
};
