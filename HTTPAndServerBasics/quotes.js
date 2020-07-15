const express = require("express");
const router = express.Router();

let counter = 0;

let quotes = [
  {
    id: counter++,
    quote: "W imię zasad...",
    author: "Franz Maurer",
  },
];

router.get("/", (req, res) => {
  res.send(quotes);
});

router.get("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const quote = quotes.find((q) => q.id === id);
  if (quote) {
    res.send(quote);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { quote, author } = req.body;
  if (!quote || !author) {
    res.sendStatus(400);
  } else {
    const newQuote = {
      id: counter++,
      quote,
      author,
    };
    quotes.push(newQuote);
    res.sendStatus(201);
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = quotes.length;

  quotes = quotes.filter((q) => q.id !== id);

  if (lengthBeforeFilter === quotes.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

router.put("/:id", (req, res) => {
  const id = JSON.parse(req.params.id);
  const item = quotes.find((q) => q.id === id);
  if (!item) {
    res.sendStatus(404);
  } else {
    const { quote, author } = req.body;
    if (!quote || !author) {
      res.sendStatus(400);
    } else {
      const newQuote = {
        id,
        quote,
        author,
      };
      quotes = quotes.map((q) => (q === item ? newQuote : q));
      res.sendStatus(200);
    }
  }
});

module.exports = router;
