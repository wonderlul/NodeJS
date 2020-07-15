const User = require("../models/user.model");

const authorizationMiddleware = async (req, res, next) => {
  const [userLogin, userPassword] = req.headers.authorization.split(":");
  const user = await User.findOne({
    login: userLogin,
    password: userPassword,
  });

  if (user) {
    req.user = user;
    next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = authorizationMiddleware;
