var tokenizer = require('./modules/tokenizer.js')
var cleaner = require('./modules/cleaner.js')
var BIOLabel = require('./modules/BIOlabel.js')

module.exports = {
  tokenizer: tokenizer,
  cleaner: cleaner,
  BIOLabel: BIOLabel
}