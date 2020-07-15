const chalk = require("chalk");
const fs = require("fs");
const createId = require("create-id");

const addTaskHandler = args => {
  if (process.argv[6]) {
    console.log(
      chalk.red(
        " Oh, oh! Looks like you have input too many arguments. Please enter only three, which is: quote, author and genre"
      )
    );
    console.log(
      chalk.greenBright(
        `\n Please type ${chalk.whiteBright(
          `node app`
        )} to get back to main menu and try again.`
      )
    );
  } else {
    try {
      const newLine = {
        quote: args.quote,
        author: args.author,
        genre: args.genre,
        ID: +createId(null, null, 6, "1234567890"),
        views: 1
      };
      fs.writeFile(
        `quotes/${newLine.ID}.txt`,
        `${JSON.stringify(newLine)}\n`,
        () => {
          console.log(
            chalk.greenBright(
              `You have added your quote successfully! It's ID number is ${
                newLine.ID
              }. Please type ${chalk.whiteBright(
                `node app`
              )} to get back to main menu.`
            )
          );
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = {
  command: "add <quote> <author> <genre>",
  desc: "Add your quote to the list",
  handler: addTaskHandler
};
