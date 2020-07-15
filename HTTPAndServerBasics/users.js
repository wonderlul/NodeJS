const express = require("express");
const router = express.Router();

let counter = 0;

let users = [
  {
    id: counter++,
    firstName: "Ziutek",
    lastName: "von Bismarck",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.sendStatus(400);
  } else {
    const newUser = {
      id: counter++,
      firstName,
      lastName,
    };
    users.push(newUser);
    res.sendStatus(201);
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = users.length;

  users = users.filter((u) => u.id !== id);

  if (lengthBeforeFilter === users.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

router.put("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const item = users.find((u) => u.id === id);
  if (!item) {
    res.sendStatus(404);
  } else {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      res.sendStatus(400);
    } else {
      const newUser = {
        id,
        firstName,
        lastName,
      };
      users = users.map((u) => (u === item ? newUser : u));
      res.sendStatus(200);
    }
  }
});

module.exports = router;
