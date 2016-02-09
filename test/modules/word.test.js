
var expect = require('chai').expect
var assert = require('chai').assert

var word = require('../../modules/word.js')

describe('Word', function () {

  it('isStopword', function () {
    assert.deepEqual(word.isStopword('ada'), true)
    assert.deepEqual(word.isStopword('wrongxxx'), false)
  })

  it('removeStopwordsFromArray', function () {
    var arr = ['ada', 'wrongxxx']
    var ans = ['wrongxxx']
    assert.deepEqual(word.removeStopwordsFromArray(arr), ans)
  })

  it('isAdjective', function () {
    assert.deepEqual(word.isAdjective('abadi'), true)
    assert.deepEqual(word.isAdjective('wrongxxx'), false)
  })

  it('isAdverb', function () {
    assert.deepEqual(word.isAdverb('adakala'), true)
    assert.deepEqual(word.isAdverb('wrongxxx'), false)
  })

  it('isNum', function () {
    assert.deepEqual(word.isNum('alaf'), true)
    assert.deepEqual(word.isNum('wrongxxx'), false)
  })

  it('isPre', function () {
    assert.deepEqual(word.isPre('adapun'), true)
    assert.deepEqual(word.isPre('wrongxxx'), false)
  })

  it('isPron', function () {
    assert.deepEqual(word.isPron('aku'), true)
    assert.deepEqual(word.isPron('wrongxxx'), false)
  })

  it('isVerb', function () {
    assert.deepEqual(word.isVerb('abdas'), true)
    assert.deepEqual(word.isVerb('wrongxxx'), false)
  })

  it('isBasicWord', function () {
    assert.deepEqual(word.isBasicWord('abadi'), true)
    assert.deepEqual(word.isBasicWord('adakala'), true)
    assert.deepEqual(word.isBasicWord('alaf'), true)
    assert.deepEqual(word.isBasicWord('adapun'), true)
    assert.deepEqual(word.isBasicWord('aku'), true)
    assert.deepEqual(word.isBasicWord('abdas'), true)
    assert.deepEqual(word.isVerb('wrongxxx'), false)
  })

})
