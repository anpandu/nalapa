
var _ = require('lodash');
var expect = require('chai').expect;
var assert = require('chai').assert;

var index = require('../index.js');

describe('Index', function () {

  it('should contains tokenizer', function () {
    assert(!_.isUndefined(index.tokenizer), 'tokenizer not found')
  })

  it('should contains cleaner', function () {
    assert(!_.isUndefined(index.cleaner), 'cleaner not found')
  })

  it('should contains BIOLabel', function () {
    assert(!_.isUndefined(index.BIOLabel), 'BIOLabel not found')
  })

})
