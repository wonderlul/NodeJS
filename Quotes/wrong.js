const chalk = require("chalk");

let wrong = function() {
  if (
    process.argv[2] &&
    process.argv[2] !== `add` &&
    process.argv[2] !== `list` &&
    process.argv[2] !== `random-from-api` &&
    process.argv[2] !== `random` &&
    process.argv[2] !== `delete`
  ) {
    console.log(chalk.red(" Oh, oh! Looks like you got your command wrong."));
    console.log(
      chalk.greenBright(
        `\n Please type ${chalk.whiteBright(
          `node app`
        )} to get back to main menu and try again.`
      )
    );
  }
};

module.exports = wrong;
