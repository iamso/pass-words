const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'words.txt');
const words = fs.readFileSync(file, 'UTF-8').split('\n');

module.exports = function create(params) {
  const options = {
    words: 6,
    number: false,
    numberRange: [0, 9],
    separator: ' ',
    ...params,
  };
  const parts = [];

  for (let i = 0; i < Math.max(4, options.words); i++) {
    parts.push(randomItem(words));
  }

  if (options.number) {
    parts.push(randomNumber(...options.numberRange));
  }

  return parts.join(options.separator);
}

function randomItem(array = []) {
  return array[Math.floor(Math.random() * array.length)]
}

function randomNumber(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
