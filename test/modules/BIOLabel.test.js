
var expect = require('chai').expect
var assert = require('chai').assert

var BIOLabel = require('../../modules/BIOLabel.js')

describe('BIOLabel', function () {

  it('should return bio label from single tag', function () {
    var data = {
      text : 'i eat nasi goreng for breakfast, lunch, and dinner',
      labels : [
        { label : 'food', words : ['nasi goreng'] }
      ]
    }
    var ans = {
      tokens : ['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'],
      labels : [['other'], ['other'], ['b_food'], ['i_food'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other']]
    }
    var res = BIOLabel.label(data)
    assert.lengthOf(res['labels'], ans['labels'].length)
    assert.deepEqual(res, ans)
  })

  it('should return bio label from multiple tag', function () {
    var data2 = {
      text : 'i eat nasi goreng at midnight too',
      labels : [
        { label : 'who', words : ['i'] },
        { label : 'what', words : ['i eat nasi goreng'] }
      ]
    }
    var ans2 = {
      tokens : ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too'],
      labels : [['b_who', 'b_what'], ['i_what'], ['i_what'], ['i_what'], ['other'], ['other'], ['other']]
    }
    var res2 = BIOLabel.label(data2)
    assert.deepEqual(res2['tokens'], ans2['tokens'])
    assert.lengthOf(res2['labels'], ans2['labels'].length)
    for (var i = 0; i < res2.labels.length; i++)
      assert.deepEqual(res2.labels[i], ans2.labels[i])

    var data3 = {
      text : 'if you are reading this, you are reading this',
      labels : [
        { label : 'person', words : ['you'] },
        { label : 'activity', words : ['you are reading'] }
      ]
    }
    var ans3 = { 
      tokens: ['if', 'you', 'are', 'reading', 'this', ',', 'you', 'are', 'reading', 'this'],
      labels: [['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other'], ['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other']]
    }
    var res3 = BIOLabel.label(data3)
    assert.deepEqual(res3['tokens'], ans3['tokens'])
    assert.lengthOf(res3['labels'], ans3['labels'].length)
    for (var i = 0; i < res3.labels.length; i++)
      assert.deepEqual(res3.labels[i], ans3.labels[i])
  })

  it('should return bio label from multiple words in one tag', function () {
    var data = {
      text : 'friday, saturday, and sunday morning',
      labels : [
        { label : 'day_name', words : ['friday', 'saturday', 'sunday'] },
        { label : 'time', words : ['sunday morning'] }
      ]
    }
    var ans = {
      tokens : [ 'friday', ',', 'saturday', ',', 'and', 'sunday', 'morning' ],
      labels : [ ['b_day_name'], ['other'], ['b_day_name'], ['other'], ['other'], ['b_day_name', 'b_time'], ['i_time'] ]
    }
    var res = BIOLabel.label(data)
    assert.deepEqual(res['tokens'], ans['tokens'])
    assert.lengthOf(res['labels'], ans['labels'].length)
    for (var i = 0; i < res.labels.length; i++)
      assert.deepEqual(res.labels[i], ans.labels[i])
  })

  it('should not return \'other\' BIO label if no \'labels\' field found', function () {
    var data = {}
    var ans = {tokens : [], labels : []}
    var res = BIOLabel.label(data)
    assert.lengthOf(res['labels'], ans['labels'].length)
    assert.deepEqual(res, ans)
  })

  it('getLabelFromSequence', function () {
    var tags = [['other', 'other', 'b_food', 'i_food', 'other', 'other', 'other', 'other', 'other', 'other', 'other'], ['b_action', 'i_action', 'i_action', 'i_action', 'other', 'other', 'other']]
    var tokens = [['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'], ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too']]
    var ans = { food: [ 'nasi goreng' ], action: [ 'i eat nasi goreng' ] }
    var res = BIOLabel.getLabelFromSequence(tags, tokens)
    assert.deepEqual(res, ans)
  })

})
