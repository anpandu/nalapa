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
/* ['Hello', 'world', ',', 'my', 'name', 'is', 'Alice', '.', '.', '.'] */

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

Cleaner.removeHTMLTags("<p class="long">some long paragraph</p>");			/* "some long paragraph" */

```

### BIO Label
```
BIOlabel = require('../modules/BIOlabel.js');

var data = {
    'text' : 'i eat nasi goreng for breakfast, lunch, and dinner',
    'food' : 'nasi goreng'
};

BIOlabel.label(data);
/* 	
	{
        'tokens' : ['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'],
        'labels' : [['other'], ['other'], ['b_food'], ['i_food'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other']]
    } 
*/

var data2 = {
    'text' : 'i eat nasi goreng at midnight too',
    'who' : 'i',
    'what' : 'i eat nasi goreng'
};

BIOlabel.label(data2);
/* 	
	{
        'tokens' : ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too'],
        'labels' : [['b_who', 'b_what'], ['i_what'], ['i_what'], ['i_what'], ['other'], ['other'], ['other']]
    } 
*/

var data3 = {
    'text' : 'if you are reading this, you are reading this',
    'person' : 'you',
    'activity' : 'you are reading'
};

BIOlabel.label(data3);
/* 	
	{ 
        tokens: ['if', 'you', 'are', 'reading', 'this', ',', 'you', 'are', 'reading', 'this'],
        labels: [['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other'], ['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other']]
    } 
*/

```

### Feature Extractor
```
```


## Testing

From the repo root:

```
npm test
```
or

```
mocha
```
