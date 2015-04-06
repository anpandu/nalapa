/*! jsmodule1 v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
var _ = require('underscore');


/**
 * @param {}
 * @return {}
 * @api public
 */

var Tokenizer = function () {};

Tokenizer.prototype._isPunctuation = function(_char) {
	// var punctuations = [',', '.', '(', ')'];
	// return punctuations.map(function(e){ return e==_char;}).reduce(function(a,b){return a || b;});
	return /[^a-zA-Z0-9]/.test(_char);
}

Tokenizer.prototype._splitPunctuationRight = function(_words) {
	var again = true;
	var result = _words;
	while (again) {
		var temp = result;
		result = result.map(function(word){ 
			var res = [word];
			var len = word.length-1;
			if (Tokenizer.prototype._isPunctuation(word[len]) && len!=0)
				res = [word.substring(0,len), word[len]];
			return res;
		});	
		result = _.flatten(result);
		again = !_.isEqual(result, temp);
	}
	return result;
};

Tokenizer.prototype._splitPunctuationLeft = function(_words) {
	var again = true;
	var result = _words;
	while (again) {
		var temp = result;
		result = result.map(function(word){ 
			var res = [word];
			if (Tokenizer.prototype._isPunctuation(word[0]) && word.length!=1)
				res = [word[0], word.substring(1, word.length)];
			return res;
		});	
		result = _.flatten(result);
		again = !_.isEqual(result, temp);
	}
	return result;
};

Tokenizer.prototype.tokenize = function(_sentence) {
	var words = _sentence.split(' ');
	words = Tokenizer.prototype._splitPunctuationRight(words);
	words = Tokenizer.prototype._splitPunctuationLeft(words);
	return words;
};

/**
 * Module exports
 */

module.exports = new Tokenizer ();