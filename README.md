# pass-words

Creates a set of random words, that can be used as passwords or passphrases.

## Install

```bash
npm install -g @iamso/pass-words
```

## Usage

### Programmatically

```javascript
const passWords = require('pass-words');

// shown with default values
const words = passWords({
  words: 6,
  number: false,
  numberRange: [0, 9],
  separator: ' ',
});
```

### Command Line

The CLI is a little simpler, you can use it without an option:

```bash
pass-words
```

Or pass in the desired number of words:

```bash
pass-words 8
```

## License

[ISC License](LICENSE)
