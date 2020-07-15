//Zad 1

// const http = require("http");

// const app = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });
//   res.write("Hello World!");

//   res.end();
// });

// app.listen(4700);

//Zad 2

// const http = require("http");

// const app = http.createServer((req, res) => {
//   const url = new URL(req.url, "http://localhost");
//   const name = url.searchParams.get("name") || "World";
//   res.write("Hello " + name + "!");

//   res.end();

//   // tutaj musimy wyświetlić stronę localhost:4700/?name=Michal
// });

// app.listen(4700);

//Zad 3

// const express = require("express");
// const app = express();

// app.get("/:name?", (req, res) => {
//   //tutaj "?" stwarza możliwość, że ten parametr może być lub nie
//   const name = req.params.name || "World";
//   res.send(`Hello ${name}`);
// });

// app.listen(4700, () => console.log("server started"));

//Zad 4
// const express = require("express");
// const app = express();

// app.get("/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   let result = a * b;
//   res.send(result.toString());

// });

// app.listen(4700, () => console.log("server started"));

//Zad 5
// const express = require("express");
// const app = express();

// app.get("/mnozenie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   let result = a * b;
//   res.send(result.toString());
// });
// app.get("/dodawanie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   let result = +a + +b;
//   res.send(result.toString());
// });
// app.get("/odejmowanie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   let result = a - b;
//   res.send(result.toString());
// });
// app.get("/dzielenie/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   let result = a / b;
//   res.send(result.toString());
// });

// app.listen(4700, () => console.log("server started"));

//Zad 6

// GET /search?q=tobi+ferret
// console.dir(req.query.q)
// => 'tobi ferret'

// const express = require("express");
// const app = express();
// const users = [
//   {
//     name: "Michal",
//     username: "BOB",
//     email: "mojemail@kropka.com",
//   },
//   {
//     name: "Maciej",
//     username: "Maćko",
//     email: "asdasdadasa@kropka.com",
//   },
// ];

// app.get("/add", (req, res) => {
//   users.push(req.query);

//   res.send(users);
// });

// app.get("/list/:id?", (req, res) => {
//   const { id } = req.params;

//   res.send(users[id] || users);
// });

// app.get("/del/:id", (req, res) => {
//   const { id } = req.params;
//   users.splice(id, 1);
//   res.send(users);
//
// });

// app.listen(4700, () => console.log("server started"));

//Zad 7&8

// const express = require("express");
// const app = express();
// const users = [
//   {
//     name: "Michal",
//     username: "BOB",
//     email: "mojemail@kropka.com"
//   },
//   {
//     name: "Maciej",
//     username: "Maćko",
//     email: "asdasdadasa@kropka.com"
//   }
// ];

// const posts = [
//   {
//     title: "",
//     body: ""
//   }
// ];

// app.get("/add", (req, res) => {
//   users.push(req.query);
//   res.send(users);
// });

// app.get("/postsadd", (req, res) => {
//   posts.push(req.query);
//   res.send(posts);
// });

// app.get("/list/:id?", (req, res) => {
//   const { id } = req.params;

//   res.send(users[id] || users);
// });

// app.get("/postslist/:id?", (req, res) => {
//   const { id } = req.params;

//   res.send(posts[id] || posts);
// });

// app.get("/del/:id", (req, res) => {
//   const { id } = req.params;
//   users.splice(id, 1);
//   res.send(users);
// });

// app.get("/postsdel/:id", (req, res) => {
//   const { id } = req.params;
//   posts.splice(id, 1);
//   res.send(posts);
// });

// app.listen(4700, () => console.log("server started"));

//Zad 8

// const express = require("express");
// const app = express();
// app.use(express.json());

// const taxRouter = require("./tax");
// const quotesRouter = require("./quotes");
// const tasksRouter = require("./tasks");
// const usersRouter = require("./users");

// app.use("/podatek", taxRouter);
// app.use("/quotes", quotesRouter);
// app.use("/tasks", tasksRouter);
// app.use("/users", usersRouter);

// app.listen(4500, () => console.log("server started"));
