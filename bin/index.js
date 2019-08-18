#! /usr/bin/env node

const app = require('commander');
const colors = require('colors');
const cp = require('copy-paste');
const create = require('../index');
const pkg = require('../package.json');

app
  .version(pkg.version)
  .option('<length>')
  .action(length => {
    const options = !isNaN(length) ? {words: parseInt(length)} : {};
    const words = create(options);
    cp.copy(words);
    console.log(colors.yellow.bold(words));
  })
  .parse(process.argv);



