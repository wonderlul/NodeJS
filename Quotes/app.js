const addCommand = require("./add");
const listCommand = require("./list");
const deleteCommand = require("./delete");
const randomCommand = require("./random");
const randomFromAPICommand = require("./randomFromAPI");
const getGreetings = require("./greetings");
const getWrong = require("./wrong");

//Cleaning the terminal
("use strict");
process.stdout.write("\x1Bc");

(function() {
  process.stdout.write("\033c");
})();

//Interface
getGreetings(
  addCommand,
  deleteCommand,
  listCommand,
  randomCommand,
  randomFromAPICommand
);

//No command / wrong command handling
getWrong();

// Commands;
require("yargs")
  .command(addCommand)
  .command(randomFromAPICommand)
  .command(deleteCommand)
  .command(randomCommand)
  .command(listCommand)

  // .demandCommand(1, "You have to insert at least one command")
  .help().argv;
