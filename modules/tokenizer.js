/*! Nalapa v1.10.0 - MIT license */

'use strict'

/**
 * Module dependencies
 */
 var _ = require('lodash')


/**
 * @param {}
 * @return {}
 * @api public
 */

var Tokenizer = function () {}

Tokenizer.prototype._isPunctuation = function(_char) {
  return /[^a-zA-Z0-9]/.test(_char)
}

Tokenizer.prototype.tokenize = function(_sentence) {
  var words = _sentence.replace(/([^a-zA-Z0-9])/g, function(match) { return "\|"+match+"\|" })
  words = words.replace(/(\d)\|([\.\/])\|(\d)/g, function(match, $1, $2, $3) { return $1+$2+$3 })
  words = words.replace(/([^\s])\|([\-])\|([^\s])/g, function(match, $1, $2, $3) { return $1+$2+$3 })
  words = words.split(/\|/)
  words = _.without(words, '\|')
  words = _.without(words, ' ')
  words = _.without(words, '\r')
  words = _.without(words, '\n')
  words = _.without(words, '\t')
  words = _.without(words, '')
  return words
}

Tokenizer.prototype.splitSentence = function(_text) {
  var text = _text
  var quotations = getInsideQuotations(text)
  quotations
    .map(function(quo) { return transformEvade(quo) })
    .forEach(function (quo, idx) { text = text.replace(quotations[idx], quo) })
  var words = text
    .replace(/(\.|\!|\?|\ -)(?:\s|\r|\n)+/g, '$1_SPLIT_')
    .split('_SPLIT_')
  words = _.without(words, '')
  words = words.map(function (word) { return transformEvade(word, true) })
  return words
}

Tokenizer.prototype.getQuotations = function(_sentence) {
  return getAllMatches(/"[^"]+"[^"\.]+\./g, _sentence)
    .map(function (matches) { return matches[0] })
}

var getAllMatches = function (regex, text) {
    var res = []
    var match = null
    if (regex.global)
      while (match = regex.exec(text))
        res.push(match)
    else
      if (match = regex.exec(text))
        res.push(match)
    return res
}

var getInsideQuotations = function(_sentence) { return getAllMatches(/("[^"]+")[^"\.]+\./g, _sentence).map(function (matches) { return matches[1] }) }

var transformEvade = function (text, reverse) {
    var res = text
    var rgxs = [".", "!", "?", " -"]
    var reps = ["_DOT_", "_EXC_", "_QUO_", "_SD_"]
    if (reverse) {
      for (var i = 0; i < rgxs.length; i++)
        res = res.replace(new RegExp(reps[i], 'g'), rgxs[i])
    }
    else
      for (var i = 0; i < reps.length; i++)
        res = res.replace(new RegExp('\\'+rgxs[i], 'g'), reps[i])
    return res
}

/**
 * Module exports
 */

 module.exports = new Tokenizer ()