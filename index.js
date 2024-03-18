// const sum = require("./sum.js");
import sum from "./sum.js";
import chalk from "chalk";
console.log(chalk.blue("Hello world"));

sum(20, 10);

const colleagues = ["John", "Isaac", "Mathew", "Paul"];
const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow];

for (let i = 0; i < colleagues.length; i++) {
  console.log(colors[i % colors.length](colleagues[i]));
}

export default sum;
