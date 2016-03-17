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

var Feature = function () {}

Feature.prototype.isEquals = function(_text, _text2) {
  return (_text.localeCompare(_text2)==0)
}

Feature.prototype.isBeginsWithCapital = function(_text) {
  if (_text) { 
    if (_text.length==0)
      return false
    var firstLetter = _text[0]
    return (firstLetter == firstLetter.toUpperCase()) 
  } else
    return false
}

Feature.prototype.isContainsNumber = function(_text) {
  return /.*\d+.*/.test(_text)
}

Feature.prototype.isContainsYear = function(_text) {
  return /^.*[0-9]{4}.*$/.test(_text)
}

Feature.prototype.isRomanNumber = function(_text) {
  return /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/.test(_text)
}

Feature.prototype.isAllCapital = function(_text) {
  if (_text)
    return (_text == _text.toUpperCase()) 
  else
    return false
}

Feature.prototype.isContainsNonAlphanumeric = function(_text) {
  if (_text)
    return !/^[0-9a-zA-Z]+$/.test(_text)
  else
    return false
}

Feature.prototype.isContainsPunctuation = function(_text) {
  return /^.*[\.\,\;\[\]\-\_\:\}\{\/\>\<\=\+\)\(\*]+.*$/.test(_text)
}

module.exports = new Feature ()