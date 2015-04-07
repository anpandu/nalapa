
var expect = require('chai').expect;
var assert = require('chai').assert;

var BIOlabel = require('../modules/BIOlabel.js');

describe('Cleaner', function () {

    it('label', function () {
        var data = {
            'text' : 'i eat nasi goreng for breakfast, lunch, and dinner',
            'food' : 'nasi goreng'
        };
        var ans = {
            'tokens' : ['i', 'eat', 'nasi', 'goreng', 'for', 'breakfast', ',', 'lunch', ',', 'and', 'dinner'],
            'labels' : [['other'], ['other'], ['b_food'], ['i_food'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other'], ['other']]
        }
        var res = BIOlabel.label(data);
        assert.lengthOf(res['labels'], ans['labels'].length);
        assert.deepEqual(res, ans);

        var data2 = {
            'text' : 'i eat nasi goreng at midnight too',
            'who' : 'i',
            'what' : 'i eat nasi goreng'
        };
        var ans2 = {
            'tokens' : ['i', 'eat', 'nasi', 'goreng', 'at', 'midnight', 'too'],
            'labels' : [['b_who', 'b_what'], ['i_what'], ['i_what'], ['i_what'], ['other'], ['other'], ['other']]
        }
        var res2 = BIOlabel.label(data2);
        assert.deepEqual(res2['tokens'], ans2['tokens']);
        assert.lengthOf(res2['labels'], ans2['labels'].length);
        for (var i = 0; i < res2.length; i++)
            assert.deepEqual(res2[i], ans2[i]);

        var data3 = {
            'text' : 'if you are reading this, you are reading this',
            'person' : 'you',
            'activity' : 'you are reading'
        };
        var ans3 = { 
            tokens: ['if', 'you', 'are', 'reading', 'this', ',', 'you', 'are', 'reading', 'this'],
            labels: [['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other'], ['other'], ['b_person', 'b_activity'], ['i_activity'], ['i_activity'], ['other']]
        }
        var res3 = BIOlabel.label(data3);
        assert.deepEqual(res3['tokens'], ans3['tokens']);
        assert.lengthOf(res3['labels'], ans3['labels'].length);
        for (var i = 0; i < res3.length; i++)
            assert.deepEqual(res3[i], ans3[i]);
    });

});
