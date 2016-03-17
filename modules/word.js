/*! Nalapa v1.10.0 - MIT license */

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

var prefix = require('./dictionary/stemming/prefix.js')
var suffix = require('./dictionary/stemming/suffix.js')
var confix = require('./dictionary/stemming/confix.js')

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

Word.prototype.stemPrefix = function(word) {
  var candidate = _.chain(prefix)
    .map(function (p) {
      var prefix = p[0]
      var starts = p[1]
      var dissolve = p[2]
      var result = []
      if (word.indexOf(prefix) == 0) {
        result = starts.map(function (start) {
          var sub = word.substring(prefix.length)
          sub = (dissolve) ? start+sub : sub
          if ((sub.indexOf(start) == 0) || (start == '*'))
            return sub
          else
            return ''
        })
      }
      return result
    })
    .flatten()
    .filter(function (c) { return c !== '' })
    .filter(function (c) { return Word.prototype.isBasicWord(c) })
    .value()
  var result = (candidate.length>0) ? candidate[0] : word
  return result
}

Word.prototype.stemSuffix = function(word) {
  var candidate = _.chain(suffix)
    .map(function (s) {
      var suffix = s
      var result = ''
      var limit = word.length-suffix.length
      if (word.lastIndexOf(suffix) == limit)
        result = word.substring(0, limit)
      return result
    })
    .filter(function (c) { return c !== '' })
    .filter(function (c) { return Word.prototype.isBasicWord(c) })
    .value()
  var result = (candidate.length>0) ? candidate[0] : word
  return result
}

Word.prototype.stemConfix = function(word) {
  var candidate = _.chain(confix)
    .map(function (p) {
      var confix = p[0]
      var starts = p[1]
      var dissolve = p[2]
      var end = p[3]
      var result = []
      if (word.indexOf(confix) == 0) {
        result = starts.map(function (start) {
          var sub = word.substring(confix.length)
          sub = (dissolve) ? start+sub : sub
          if ((sub.indexOf(start) == 0) || (start == '*')) {
            var limit = sub.length-end.length
            if (sub.lastIndexOf(end) == limit)
              sub = sub.substring(0, limit)
            return sub
          }
          else
            return ''
        })
      }
      return result
    })
    .flatten()
    .filter(function (c) { return c !== '' })
    .filter(function (c) { return Word.prototype.isBasicWord(c) })
    .value()
  var result = (candidate.length>0) ? candidate[0] : word
  return result
}

Word.prototype.stem = function(word) {
  var candidate = []
  candidate.push(Word.prototype.stemConfix(word))
  candidate.push(Word.prototype.stemPrefix(word))
  candidate.push(Word.prototype.stemSuffix(word))
  candidate = candidate.filter(function (c) { return c !== word})
  var result = (candidate.length>0) ? candidate[0] : word
  return result
}

module.exports = new Word ()