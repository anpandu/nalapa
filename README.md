# NALAPA
Collection of NodeJS NLP Library for Bahasa Indonesia.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]


## Installation

Install node modules with npm:

```
npm install --save nalapa
```


## API

### Tokenizer
```js
Tokenizer = require('nalapa').tokenizer;

Tokenizer.tokenize("Hello world, my name is Alice...")
// ['Hello', 'world', ',', 'my', 'name', 'is', 'Alice', '.', '.', '.']

Tokenizer.tokenize("Monday, (1/11). I have 1.000 rupiah.")
// [ 'Monday', ',', '(', '1/11', ')', '.', 'I', 'have', '1.000', 'rupiah', '.' ]

Tokenizer.splitSentence("Hello world, my name is Alice! I live in Bandung. Jakarta kebanjiran gara-gara hujan - tugas kuliah sulit? Baiklah.");
/*
[
  "Hello world, my name is Alice",
  "I live in Bandung",
  "Jakarta kebanjiran gara-gara hujan",
  "tugas kuliah sulit",
  "Baiklah"
]
*/

var text = "Seorang remaja berinisal HAS (15) ditangkap aparat Polres Magelang lantaran diduga ..."
Tokenizer.getQuotations(text);
/*
[
  "\"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu. Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016).", 
  "\"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu.", 
  "\"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya.", 
  "\"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini."
]
*/

```

### Word
```js
Word = require('nalapa').word;

// stopword
Word.isStopword("adalah") // true
Word.isStopword("Indonesia") // false

// basic word properties
Word.isBasicWord('masak')  // true
Word.isAdjective('abadi')  // true
Word.isAdverb('adakala')  // true
Word.isNum('wahid')  // true
Word.isPre('adapun')  // true
Word.isPron('aku')  // true
Word.isVerb('ambil')  // true
Word.isBasicWord('wrongxxx') // false

// stemming
Word.stem('memberikan') // beri
Word.stem('meong') // meong

// stemming for prefix, suffix, or confix
Word.stemPrefix('penyadap') // sadap
Word.stemSuffix('minuman') // minum
Word.stemConfix('memberikan') // beri

```

### Cleaner
```js
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
```js
BIOLabel = require('nalapa').BIOLabel;

var data = {
  text : 'i eat nasi goreng for breakfast, lunch, and dinner',
  labels : [
    { label : 'food', words : ['nasi goreng'] }
  ]
}

BIOLabel.label(data);
/*
{
  tokens : ['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'],
  labels : [['other'], ['other'], ['b_food'], ['i_food'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other']]
}
*/ 

var data2 = {
  text : 'i eat nasi goreng at midnight too',
  labels : [
    { label : 'who', words : ['i'] },
    { label : 'what', words : ['i eat nasi goreng'] }
  ]
}

BIOLabel.label(data2);
/*
{
  tokens : ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too'],
  labels : [['b_who', 'b_what'], ['i_what'], ['i_what'], ['i_what'], ['other'], ['other'], ['other']]
}
*/

var data3 = {
  text : 'if you are reading this, you are reading this',
  labels : [
    { label : 'person', words : ['you'] },
    { label : 'activity', words : ['you are reading'] }
  ]
}

BIOLabel.label(data3);
/*
{ 
  tokens: ['if', 'you', 'are', 'reading', 'this', ',', 'you', 'are', 'reading', 'this'],
  labels: [['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other'], ['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other']]
}
*/

var data4 = {
  text : 'friday, saturday, and sunday morning',
  labels : [
    { label : 'day_name', words : ['friday', 'saturday', 'sunday'] },
    { label : 'time', words : ['sunday morning'] }
  ]
}

BIOLabel.label(data4);
/*
{
  tokens : [ 'friday', ',', 'saturday', ',', 'and', 'sunday', 'morning' ],
  labels : [ ['b_day_name'], ['other'], ['b_day_name'], ['other'], ['other'], ['b_day_name', 'b_time'], ['i_time'] ]
}
*/

// get label from sequence of BIOLabel
var tags = [['other', 'other', 'b_food', 'i_food', 'other', 'other', 'other', 'other', 'other', 'other', 'other'], ['b_action', 'i_action', 'i_action', 'i_action', 'other', 'other', 'other']]
var tokens = [['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'], ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too']]
BIOLabel.getLabelFromSequence(tags, tokens)
/*
{ 
  food: [ 'nasi goreng' ],
  action: [ 'i eat nasi goreng' ]
}
*/

```

### Feature
```js
Feature = require('nalapa').feature;

Feature.isEquals('hehe', 'hehe') // true
Feature.isEquals('hehe', 'hoho') // false

Feature.isAllCapital('ABCD') // true
Feature.isAllCapital('Abcd') // false

Feature.isBeginsWithCapital('ABc') // true
Feature.isBeginsWithCapital('aBC') // false

Feature.isContainsNumber('he1he') // true
Feature.isContainsNumber('hehe') // false

Feature.isContainsYear('1985haihai') // true
Feature.isContainsYear('hoho') // false
Feature.isContainsYear('666') // false

Feature.isRomanNumber('MCMXCII') // true
Feature.isRomanNumber('MCMXCIIPOPO') // false

Feature.isContainsNonAlphanumeric('abc') // false
Feature.isContainsNonAlphanumeric('@bc') // true

Feature.isContainsPunctuation('abcd;') // true
Feature.isContainsPunctuation(';') // true
Feature.isContainsPunctuation('abcd') // false

```

## Testing

From the repo root:

```
npm test
```

## License

MIT © [Ananta Pandu](anpandu.com)


[npm-image]: https://badge.fury.io/js/nalapa.svg
[npm-url]: https://npmjs.org/package/nalapa
[travis-image]: https://travis-ci.org/anpandu/nalapa.svg?branch=master
[travis-url]: https://travis-ci.org/anpandu/nalapa
[daviddm-image]: https://david-dm.org/anpandu/nalapa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/anpandu/nalapa