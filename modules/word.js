/*! jsmodule1 v0.0.0 - MIT license */

'use strict'

/**
 * Module dependencies
 */

var _ = require('lodash')
var stopwords = require('./dictionary/indonesian-stopwords-complete.js')


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

module.exports = new Word ()