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
Tokenizer = require('nalapa').tokenizer;

Tokenizer.tokenize("Hello world, my name is Alice...")
['Hello', 'world', ',', 'my', 'name', 'is', 'Alice', '.', '.', '.']

Tokenizer.tokenize("Monday, (1/11). I have 1.000 rupiah.")
[ 'Monday', ',', '(', '1/11', ')', '.', 'I', 'have', '1.000', 'rupiah', '.' ]

```

### Cleaner
```
Cleaner = require('nalapa').cleaner;

Cleaner.isASCII("abc123");      /* true */
Cleaner.isASCII("abc_-8+");     /* true */
Cleaner.isASCII("ابت");         /* false */

Cleaner.isAlphaNumeric("abc123");       /* true */
Cleaner.isAlphaNumeric("abc_-8+");      /* false */
Cleaner.isAlphaNumeric("ابت");          /* false */

Cleaner.removeNonASCII("abc123");       /* "abc123" */
Cleaner.removeNonASCII("abc_-8+");      /* "abc_-8+" */
Cleaner.removeNonASCII("ابت");          /* "" */

Cleaner.removeNonAlphaNumeric("abc123");        /* abc123 */
Cleaner.removeNonAlphaNumeric("abc_-8+");       /* abc8 */
Cleaner.removeNonAlphaNumeric("ابت");           /* "" */

Cleaner.removeHTMLTags("<p class="long">some long paragraph</p>");          /* "some long paragraph" */

```

### BIO Label
```
BIOLabel = require('nalapa').BIOLabel;

var data = {
  text : 'i eat nasi goreng for breakfast, lunch, and dinner',
  labels : [
    { label : 'food', words : ['nasi goreng'] }
  ]
}

BIOLabel.label(data);
{
  tokens : ['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'],
  labels : [['other'], ['other'], ['b_food'], ['i_food'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other']]
} 

var data2 = {
  text : 'i eat nasi goreng at midnight too',
  labels : [
    { label : 'who', words : ['i'] },
    { label : 'what', words : ['i eat nasi goreng'] }
  ]
}

BIOLabel.label(data2);
{
  tokens : ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too'],
  labels : [['b_who', 'b_what'], ['i_what'], ['i_what'], ['i_what'], ['other'], ['other'], ['other']]
}

var data3 = {
  text : 'if you are reading this, you are reading this',
  labels : [
    { label : 'person', words : ['you'] },
    { label : 'activity', words : ['you are reading'] }
  ]
}

BIOLabel.label(data3);
{ 
  tokens: ['if', 'you', 'are', 'reading', 'this', ',', 'you', 'are', 'reading', 'this'],
  labels: [['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other'], ['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other']]
}

var data4 = {
  text : 'friday, saturday, and sunday morning',
  labels : [
    { label : 'day_name', words : ['friday', 'saturday', 'sunday'] },
    { label : 'time', words : ['sunday morning'] }
  ]
}

BIOLabel.label(data4);
{
  tokens : [ 'friday', ',', 'saturday', ',', 'and', 'sunday', 'morning' ],
  labels : [ ['b_day_name'], ['other'], ['b_day_name'], ['other'], ['other'], ['b_day_name', 'b_time'], ['i_time'] ]
}

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
