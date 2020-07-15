const fs = require("fs");
const chalk = require("chalk");
const _ = require("lodash");

let allQuotes = fs
  .readdirSync("./quotes", "utf-8")
  .map(quote => JSON.parse(fs.readFileSync(`./quotes/${quote}`, "utf-8")));

let genres = [...new Set(allQuotes.map(quote => quote.genre))];

const getListHandler = () => {
  if (_.isEmpty(allQuotes)) {
    console.log(
      chalk.red(
        `\n Oh, oh! Looks like our database is empty. Please type ${chalk.whiteBright(
          `node app`
        )} to get back to main menu and add your quote! `
      )
    );
  } else {
    console.log(
      ` ${chalk.magenta(`List of all quotes, filtered by it's genre:`)}  \n`
    );
    for (let i = 0; i < genres.length; i++) {
      let quotesByGenre = [];

      console.log(chalk.blueBright(`\n Genre: ${genres[i]}\n`));
      allQuotes
        .filter(quote => quote.genre === genres[i])
        .map(quote => quotesByGenre.push(quote));
      quotesByGenre.map(quote => {
        console.log(
          `${chalk.red(`  Author: `)} ${quote.author} ${chalk.red(
            `  Quote: `
          )} "${quote.quote}" ${chalk.red(`  ID: `)} ${quote.ID}\n`
        );
      });
    }
    console.log(
      chalk.greenBright(
        `\n Please type ${chalk.whiteBright(
          `node app`
        )} to get back to main menu.`
      )
    );
  }
};

module.exports = {
  command: "list",
  desc: "Display all quotes from the list",
  handler: getListHandler
};
