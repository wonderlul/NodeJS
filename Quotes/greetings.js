const chalk = require("chalk");
const { table } = require("table");
const figlet = require("figlet");

let greetings = function(
  addCommand,
  deleteCommand,
  listCommand,
  randomCommand,
  randomFromAPICommand
) {
  console.log(
    chalk.yellow(figlet.textSync("Quotes", { horizontalLayout: "full" }))
  );
  console.log(
    `${chalk.cyan(
      figlet.textSync(`by Michal Lul`, { horizontalLayout: "full" })
    )}\n \n`
  );
  if (!process.argv[2]) {
    console.log(
      `${chalk.greenBright(
        ` Welcome to my simple CLI "Quotes". Feel free to contact us on example@mail.com with any questions. \n`
      )}`
    );

    let data = [
      [
        `${chalk.cyanBright(`Command`)}`,
        `${chalk.cyanBright(`Description`)}`,
        `${chalk.cyanBright(`Required arguments`)}`,
        `${chalk.cyanBright(`Example`)}`
      ],
      [addCommand.command, addCommand.desc, "3", `node app add "1" "2" "3"`],
      [deleteCommand.command, deleteCommand.desc, "1", `node app delete "1"`],
      [listCommand.command, listCommand.desc, "none", `node app list`],
      [randomCommand.command, randomCommand.desc, "none", `node app random`],
      [
        randomFromAPICommand.command,
        randomFromAPICommand.desc,
        "none",
        "node app random-from-api"
      ]
    ];
    console.log(table(data));
  }
};

module.exports = greetings;
