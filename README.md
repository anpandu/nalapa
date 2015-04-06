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

### Cleaner
```
Cleaner = require('modules/cleaner.js')

Cleaner.isASCII("abc123");		/* true */
Cleaner.isASCII("abc_-8+");		/* true */
Cleaner.isASCII("ابت");			/* false */

Cleaner.isAlphaNumeric("abc123");		/* true */
Cleaner.isAlphaNumeric("abc_-8+");		/* false */
Cleaner.isAlphaNumeric("ابت");			/* false */

Cleaner.removeNonASCII("abc123");		/* "abc123" */
Cleaner.removeNonASCII("abc_-8+");		/* "abc_-8+" */
Cleaner.removeNonASCII("ابت");			/* "" */

Cleaner.removeNonAlphaNumeric("abc123");		/* abc123 */
Cleaner.removeNonAlphaNumeric("abc_-8+");		/* abc8 */
Cleaner.removeNonAlphaNumeric("ابت");			/* "" */

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
