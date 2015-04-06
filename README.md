# NALAPA

[![Build Status](https://secure.travis-ci.org/anpandu/nalapa.png?branch=master)](http://travis-ci.org/anpandu/nalapa)


## Installation

Install node modules with npm:

```
npm install
```


## API

### Tokenizer
```
Tokenizer = require('modules/tokenizer.js')

Tokenizer.tokenize("Hello world, my name is Alice...")
/* ["Hello", "world", ",", "my", "name", "is", "Alice", ".", ".", "."] */

Tokenizer.tokenize("Monday, (1/11). I have 1.000 rupiah.")
/* [ 'Monday', ',', '(', '1/11', ')', '.', 'I', 'have', '1.000', 'rupiah', '.' ] */

```

### BIO Label
```
```

### Feature Extractor
```
```


## Testing

From the repo root:

```
npm install
npm test
```
or

```
npm install
mocha
```
