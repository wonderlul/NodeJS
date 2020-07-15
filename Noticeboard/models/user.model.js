const mongoose = require("mongoose");

module.exports = mongoose.model("users", {
  login: String,
  password: String,
  firstName: String,
  lastName: String,
});
