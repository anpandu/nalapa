
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

})
