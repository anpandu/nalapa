
var expect = require('chai').expect
var assert = require('chai').assert

var cleaner = require('../../modules/cleaner.js')

describe('Cleaner', function () {

  it('isASCII', function () {
    assert.deepEqual(cleaner.isASCII('abc123'), true)
    assert.deepEqual(cleaner.isASCII('abc_-8+'), true)
    assert.deepEqual(cleaner.isASCII('ابت'), false)
  })

  it('isAlphaNumeric', function () {
    assert.deepEqual(cleaner.isAlphaNumeric('abc123'), true)
    assert.deepEqual(cleaner.isAlphaNumeric('abc_-8+'), false)
    assert.deepEqual(cleaner.isAlphaNumeric('ابت'), false)
  })

  it('removeNonASCII', function () {
    assert.deepEqual(cleaner.removeNonASCII('abc123'), 'abc123')
    assert.deepEqual(cleaner.removeNonASCII('abc_-8+'), 'abc_-8+')
    assert.deepEqual(cleaner.removeNonASCII('ابت'), '')
  })

  it('removeNonAlphaNumeric', function () {
    assert.deepEqual(cleaner.removeNonAlphaNumeric('abc123'), 'abc123')
    assert.deepEqual(cleaner.removeNonAlphaNumeric('abc_-8+'), 'abc8')
    assert.deepEqual(cleaner.removeNonAlphaNumeric('ابت'), '')
  })

  it('removeHTMLTags', function () {
    assert.deepEqual(cleaner.removeHTMLTags('<p class="long">some long paragraph</p>'), 'some long paragraph')
  })

})
