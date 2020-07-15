const axios = require("axios");
const chalk = require("chalk");

const addTaskHandler = () => {
  (async function() {
    try {
      const quote = await axios.get(
        "http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php"
      );

      console.log(` ${chalk.magenta(`Random quote from external API:`)}  \n`);
      console.log(
        `${chalk.red(`  Author: `)} ${quote.data.author} ${chalk.red(
          `  Quote: `
        )} "${quote.data.quote}" ${chalk.red(`  ID: `)} ${quote.data.id}\n`
      );
      console.log(
        chalk.greenBright(
          `\n Please type ${chalk.whiteBright(
            `node app`
          )} to get back to main menu.`
        )
      );
    } catch (error) {
      console.log(error.message);
      console.log(
        chalk.red(
          `\n Oh, oh! Looks like something went wrong. Please type ${chalk.whiteBright(
            `node app`
          )} to get back to main menu and try again. \n If problem still occurs, try to contact us with problem description logged above on exmaple@email.com`
        )
      );
    }
  })();
};

module.exports = {
  command: "random-from-api",
  desc: "Display random quote from API",
  handler: addTaskHandler
};
