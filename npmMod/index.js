const chalk=require('chalk');
const validator=require('validator');
//console.log(chalk.blue('hello world'));

const res=validator.isEmail("foo@barcom")
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res))