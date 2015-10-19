/*! jsmodule1 v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
 var _ = require('lodash');


/**
 * @param {}
 * @return {}
 * @api public
 */

var Tokenizer = function () {};

Tokenizer.prototype._isPunctuation = function(_char) {
  return /[^a-zA-Z0-9]/.test(_char);
}

Tokenizer.prototype.tokenize = function(_sentence) {
  var words = _sentence.replace(/([^a-zA-Z0-9])/g, function(match) { return "\|"+match+"\|"; })
  var words = words.replace(/(\d)\|([\.\/])\|(\d)/g, function(match, $1, $2, $3) { return $1+$2+$3; })
  var words = words.split(/[\|\ \r\n]/);
  words = _.without(words, '\|');
  words = _.without(words, ' ');
  words = _.without(words, '\r');
  words = _.without(words, '\n');
  words = _.without(words, '');
  return words;
};

Tokenizer.prototype.splitSentence = function(_sentence) {
  var words = _sentence.split(/\.\ |\!\ |\?\ |\ \-\ |\.$|\!$|\?$\s*/);
  words = _.without(words, '');
  return words;
};

/**
 * Module exports
 */

 module.exports = new Tokenizer ();