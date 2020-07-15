const fs = require("fs");
const chalk = require("chalk");
const _ = require("lodash");

const getListHandler = () => {
  fs.readdir("./quotes", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      if (_.isEmpty(data)) {
        console.log(
          chalk.red(
            `\n  Oh, oh! Looks like our database is empty. Please type ${chalk.whiteBright(
              `node app`
            )} to get back to main menu and add your quote! `
          )
        );
      } else {
        console.log(` ${chalk.magenta(`Random quote:`)}  \n`);

        let pickedQuote = data[Math.floor(Math.random() * data.length)];
        fs.readFile(`./quotes/${pickedQuote}`, "utf-8", (error, data) => {
          if (error) {
            console.log(error.message);
          } else {
            let parsedQuote = JSON.parse(data);

            console.log(
              `${chalk.red(`  Author: `)} ${parsedQuote.author} ${chalk.red(
                `  Quote: `
              )} "${parsedQuote.quote}" ${chalk.red(`  ID: `)} ${
                parsedQuote.ID
              } ${chalk.red(`  Viewed: `)} ${parsedQuote.views}\n`
            );
            console.log(
              chalk.greenBright(
                `\n Please type ${chalk.whiteBright(
                  `node app`
                )} to get back to main menu.`
              )
            );
            parsedQuote.views++;
            let stringifyQuote = JSON.stringify(parsedQuote);

            fs.writeFile(`./quotes/${pickedQuote}`, stringifyQuote, () => {});
          }
        });
      }
    }
  });
};

module.exports = {
  command: "random",
  desc: "Generate random quote from the list",
  handler: getListHandler
};
