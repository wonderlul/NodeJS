const fs = require("fs");
const chalk = require("chalk");
const getListHandler = args => {
  if (process.argv[4]) {
    console.log(
      chalk.red(
        ` Oh, oh! Looks like something went wrong. \n Please check if you're not trying to delete more than one quote at the time. \n Please type ${chalk.whiteBright(
          `node app`
        )} to get back to main menu and try again. \n If problem still occurs, try to contact us with problem description logged above on exmaple@email.com`
      )
    );
  } else {
    fs.unlink(`quotes/${args.id}.txt`, error => {
      if (error) {
        console.log(error.message);
        console.log(
          chalk.red(
            `\n Oh, oh! Looks like something went wrong. \n Please check if ID that you're using to delete a quote exists.\n Please type ${chalk.whiteBright(
              `node app`
            )} to get back to main menu and try again. \n If problem still occurs, try to contact us with problem description logged above on exmaple@email.com`
          )
        );
      } else {
        console.log(
          chalk.greenBright(
            `\n Your quote was successfully deleted! Please type ${chalk.whiteBright(
              `node app`
            )} to get back to main menu.`
          )
        );
      }
    });
  }
};

module.exports = {
  command: "delete <id>",
  desc: "Delete a quote using it's ID",
  handler: getListHandler
};
