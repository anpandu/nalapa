
var expect = require('chai').expect;
var assert = require('chai').assert;

var tokenizer = require('../../modules/tokenizer.js');

describe('Tokenizer', function () {

  it('tokenize', function () {
    // test cases
    sentences = [
      "Hello world, my name is Alice...",
      "Monday, (1/11). I have 1.000 rupiah.",
      "single",
      " betweenspaces ",
      " ",
      ""
    ];
    // answers
    tokenss = [
      ["Hello", "world", ",", "my", "name", "is", "Alice", ".", ".", "."],
      [ 'Monday', ',', '(', '1/11', ')', '.', 'I', 'have', '1.000', 'rupiah', '.' ],
      ["single"],
      ["betweenspaces"],
      [],
      []
    ];
    for (var i = 0; i < sentences.length; i++) {
      t = tokenizer.tokenize(sentences[i]);
      assert.typeOf(t, 'array');
      assert.lengthOf(t, tokenss[i].length);
      assert.deepEqual(t, tokenss[i]);
    };
  });
    
});
