
var expect = require('chai').expect
var assert = require('chai').assert

var feature = require('../../modules/feature.js')

describe('Feature', function () {

  it('isEquals', function () {
    assert.deepEqual(feature.isEquals('hehe', 'hehe'), true)
    assert.deepEqual(feature.isEquals('hehe', 'hoho'), false)
  })

  it('isBeginsWithCapital', function () {
    assert.deepEqual(feature.isBeginsWithCapital('Abc'), true)
    assert.deepEqual(feature.isBeginsWithCapital('ABc'), true)
    assert.deepEqual(feature.isBeginsWithCapital('aBC'), false)
    assert.deepEqual(feature.isBeginsWithCapital(''), false)
  })

  it('isContainsNumber', function () {
    assert.deepEqual(feature.isContainsNumber('1'), true)
    assert.deepEqual(feature.isContainsNumber('hehe1'), true)
    assert.deepEqual(feature.isContainsNumber('1hehe'), true)
    assert.deepEqual(feature.isContainsNumber('he1he'), true)
    assert.deepEqual(feature.isContainsNumber('hehe'), false)
    assert.deepEqual(feature.isContainsNumber(''), false)
  })

  it('isContainsYear', function () {
    assert.deepEqual(feature.isContainsYear('1985'), true)
    assert.deepEqual(feature.isContainsYear('1985haihai'), true)
    assert.deepEqual(feature.isContainsYear('hoho1985haihai'), true)
    assert.deepEqual(feature.isContainsYear('hoho'), false)
    assert.deepEqual(feature.isContainsYear('666'), false)
    assert.deepEqual(feature.isContainsYear(''), false)
  })

  it('isRomanNumber', function () {
    assert.deepEqual(feature.isRomanNumber('I'), true)
    assert.deepEqual(feature.isRomanNumber('V'), true)
    assert.deepEqual(feature.isRomanNumber('X'), true)
    assert.deepEqual(feature.isRomanNumber('L'), true)
    assert.deepEqual(feature.isRomanNumber('D'), true)
    assert.deepEqual(feature.isRomanNumber('C'), true)
    assert.deepEqual(feature.isRomanNumber('M'), true)
    assert.deepEqual(feature.isRomanNumber('MCMXCII'), true)
    assert.deepEqual(feature.isRomanNumber('MCMXCIIPOPO'), false)
    assert.deepEqual(feature.isRomanNumber('abc123'), false)
  })

  it('isAllCapital', function () {
    assert.deepEqual(feature.isAllCapital('ABCD'), true)
    assert.deepEqual(feature.isAllCapital('Abcd'), false)
    assert.deepEqual(feature.isAllCapital('AbcD'), false)
    assert.deepEqual(feature.isAllCapital(''), false)
  })

  it('isContainsNonAlphanumeric', function () {
    assert.deepEqual(feature.isContainsNonAlphanumeric('abc'), false)
    assert.deepEqual(feature.isContainsNonAlphanumeric('@bc'), true)
    assert.deepEqual(feature.isContainsNonAlphanumeric('abc1'), false)
    assert.deepEqual(feature.isContainsNonAlphanumeric(''), false)
  })

  it('isContainsPunctuation', function () {
    assert.deepEqual(feature.isContainsPunctuation('abcd;'), true);
    assert.deepEqual(feature.isContainsPunctuation(';'), true);
    assert.deepEqual(feature.isContainsPunctuation('abcd'), false)
    assert.deepEqual(feature.isContainsPunctuation(''), false)
  })

})
