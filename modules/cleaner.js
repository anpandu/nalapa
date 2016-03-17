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

 var Cleaner = function () {}

 Cleaner.prototype.isASCII = function(_text) {
  return /^[\x00-\x7F]+$/.test(_text)
}

Cleaner.prototype.isAlphaNumeric = function(_text) {
  return /^[a-zA-Z0-9]+$/.test(_text)
}

Cleaner.prototype.removeNonASCII = function(_text) {
  return _text.replace(/[^\x00-\x7F]/g, "")
}

Cleaner.prototype.removeNonAlphaNumeric = function(_text) {
  return _text.replace(/[^a-zA-Z0-9]/g, "")
}

Cleaner.prototype.removeHTMLTags = function(_text) {
  return _text.replace(/<[^>]*>?/g, "")
}

module.exports = new Cleaner ()