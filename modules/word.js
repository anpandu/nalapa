/*! jsmodule1 v0.0.0 - MIT license */

'use strict'

/**
 * Module dependencies
 */

var _ = require('lodash')
var stopwords = require('./dictionary/indonesian-stopwords-complete.js')
var adj = require('./dictionary/adj.js')
var adv = require('./dictionary/adv.js')
var num = require('./dictionary/num.js')
var pre = require('./dictionary/pre.js')
var pron = require('./dictionary/pron.js')
var v = require('./dictionary/v.js')


/**
 * @param {}
 * @return {}
 * @api public
 */

var Word = function () {}

Word.prototype.isStopword = function(word) {
  return (stopwords.indexOf(word) > -1)
}

Word.prototype.removeStopwordsFromArray = function(arr, word) {
  return _.filter(arr, function (a) { 
    return !Word.prototype.isStopword(a)
  })
}

Word.prototype.isAdjective = function(word) {
  return (adj.indexOf(word) > -1)
}

Word.prototype.isAdverb = function(word) {
  return (adv.indexOf(word) > -1)
}

Word.prototype.isNum = function(word) {
  return (num.indexOf(word) > -1)
}

Word.prototype.isPre = function(word) {
  return (pre.indexOf(word) > -1)
}

Word.prototype.isPron = function(word) {
  return (pron.indexOf(word) > -1)
}

Word.prototype.isVerb = function(word) {
  return (v.indexOf(word) > -1)
}

Word.prototype.isBasicWord = function(word) {
  return (
    Word.prototype.isAdjective(word) ||
    Word.prototype.isAdverb(word) ||
    Word.prototype.isNum(word) ||
    Word.prototype.isPre(word) ||
    Word.prototype.isPron(word) ||
    Word.prototype.isVerb(word)
  )
}

module.exports = new Word ()