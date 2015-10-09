/*! jsmodule1 v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash');
var Tokenizer = require('../modules/tokenizer.js');

/**
 * @param {}
 * @return {}
 * @api public
 */

var BIOLabel = function () {};

BIOLabel.prototype.label = function(_data) {

  var text = (_.isUndefined(_data.text)) ? '' : _data.text;
  var tokens = Tokenizer.tokenize(text);

  var data = {};
  data['tokens'] = tokens;
  data['labels'] = new Array(tokens.length);
  for (var i = 0; i < data['labels'].length; i++)
    data['labels'][i] = []

  var biolabels = _data.labels;
  biolabels = (_.isUndefined(biolabels)) ? [] : biolabels;
  
  biolabels.forEach(function (biolabel) {
    var label = biolabel.label;
    var words = biolabel.words;

    words.forEach(function (word) {
      var tokens = Tokenizer.tokenize(word);

      // get array of match val between text and  label word (true|false)
      var matchArray = _.map(data['tokens'], function (edata, idata) {
        var matchLabelWords = _.map(tokens, function (elw, ilw) { return elw == data['tokens'][idata+ilw]; });
        return _.every(matchLabelWords, _.identity);
      });
      
      // concat 'begin' & 'in' data['labels'] right now
      var count = 0;
      _.each(matchArray, function (match, idx){
        count = ((match == true)||(count>0 && count<tokens.length)) ? count+1 : 0;
        if (count == 1)
          data['labels'][idx] = data['labels'][idx].concat("b_" + label);
        else if (count>0 && count<=tokens.length)
          data['labels'][idx] = data['labels'][idx].concat("i_" + label);
      });   
    });
  });

  // concat 'other' to data['labels']
  _.each(data['labels'], function (e, i) {
    if (e.length == 0)
      data['labels'][i] = data['labels'][i].concat("other");
  });

  return data;
}

module.exports = new BIOLabel ();