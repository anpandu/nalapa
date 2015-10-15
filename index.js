var tokenizer = require('./modules/tokenizer.js')
var cleaner = require('./modules/cleaner.js')
var BIOLabel = require('./modules/BIOLabel.js')
var feature = require('./modules/feature.js')

module.exports = {
  tokenizer: tokenizer,
  cleaner: cleaner,
  BIOLabel: BIOLabel,
  feature: feature
}