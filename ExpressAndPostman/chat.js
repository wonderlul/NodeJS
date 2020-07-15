const express = require("express");
const fs = require("fs");
const router = express.Router();
const bodyParser = require("body-parser");

const textParser = bodyParser.text();
const users = [];
let counter = 0;
const forbiddenWords = ["cukier", "disco-polo", "hazard", "niepiwo"];

const authorizationMiddleware = (req, res, next) => {
  if (req.headers["authorization"] !== "janek92:haslo123") next("router");
  else next();
};

const addingUserMiddleware = (req, res, next) => {
  const newUser = {
    id: req.headers["id"],
    firstName: req.headers["first-name"],
    lastName: req.headers["last-name"],
  };
  if (users.findIndex((user) => user.id === newUser.id) === -1)
    users.push(newUser);
  next();
};

const censorTextMiddleware = (req, res, next) => {
  let filteredWords = req.body
    .split(" ")
    .filter((word) => forbiddenWords.indexOf(word) !== -1);

  if (filteredWords.length >= 1) {
    next(new Error("You tried to post forbidden word"));
  } else {
    next();
  }
};

const isTextMiddleware = async (req, res, next) => {
  try {
    await fs.readFile(`${req.params["id"]}.txt`, "utf8", (err, data) => {
      if (err) {
        next(new Error("File does not exist"));
      } else {
        console.log(data);
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

router.get(
  "/",
  textParser,
  authorizationMiddleware,
  addingUserMiddleware,
  (req, res) => res.send(users)
);

router.get(
  "/:id",
  textParser,
  authorizationMiddleware,
  addingUserMiddleware,
  isTextMiddleware,
  (req, res) => {
    res.sendStatus(200);
  }
);

router.post(
  "/",
  textParser,
  authorizationMiddleware,
  censorTextMiddleware,
  async (req, res) => {
    try {
      await fs.writeFile(`${counter++}.txt`, JSON.stringify(req.body), () =>
        console.log("File was succesfully saved")
      );
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
