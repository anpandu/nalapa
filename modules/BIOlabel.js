/*! jsmodule1 v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
var _ = require('underscore');
var Tokenizer = require('../modules/tokenizer.js');

/**
 * @param {}
 * @return {}
 * @api public
 */

var BIOlabel = function () {};

BIOlabel.prototype.label = function(_data) {

	var tokens = Tokenizer.tokenize(_data.text);

	var data = {};
	data['tokens'] = tokens;
	data['labels'] = new Array(tokens.length);
	for (var i = 0; i < data['labels'].length; i++)
		data['labels'][i] = []
	
	// concat 'begin' & 'in' to data['labels']
	for (var label in _data){
		if (label!="text") {
			var labelWords = Tokenizer.tokenize(_data[label]);
			// get array of match val between text and  label word (true|false)
			var matchArray = _.map(data['tokens'], function (edata, idata) {
				var matchLabelWords = _.map(labelWords, function (elw, ilw) { return elw == data['tokens'][idata+ilw]; });
				return _.every(matchLabelWords, _.identity);
			});
			// concat 'begin' & 'in' data['labels'] right now
			var count = 0;
			_.each(matchArray, function (match, idx){
				count = ((match == true)||(count>0 && count<labelWords.length)) ? count+1 : 0;
				if (count == 1)
					data['labels'][idx] = data['labels'][idx].concat("b_" + label);
				else if (count>0 && count<=labelWords.length)
					data['labels'][idx] = data['labels'][idx].concat("i_" + label);
			});		
		}
	}

	// concat 'other' to data['labels']
	_.each(data['labels'], function (e, i) {
		if (e.length == 0)
			data['labels'][i] = data['labels'][i].concat("other");
	});

	return data;
}

module.exports = new BIOlabel ();