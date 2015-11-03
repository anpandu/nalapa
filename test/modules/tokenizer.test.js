
var expect = require('chai').expect;
var assert = require('chai').assert;

var tokenizer = require('../../modules/tokenizer.js');

describe('Tokenizer', function () {

  it('tokenize', function () {
    // test cases
    sentences = [
      "Hello world, my name is Alice...",
      "kerusuhan yang terjadi di sana?\"Panik.\".\r\n\r\n\tTOKOH utama film ini diperankan oleh",
      "Monday, (1/11). I have 1.000 rupiah.",
      "single",
      " betweenspaces ",
      " ",
      ""
    ];
    // answers
    tokenss = [
      ["Hello", "world", ",", "my", "name", "is", "Alice", ".", ".", "."],
      ["kerusuhan","yang","terjadi","di","sana","?","\"","Panik",".","\"",".","TOKOH","utama","film","ini","diperankan","oleh"],
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


  it('splitSentence', function () {
    var text = "Hello world, my name is Alice! I live in Bandung. Jakarta kebanjiran gara-gara hujan - tugas kuliah sulit? Baiklah.\r\nHa.\n\rgoogle.com";
    var sentence = [
      "Hello world, my name is Alice!",
      "I live in Bandung.",
      "Jakarta kebanjiran gara-gara hujan -",
      "tugas kuliah sulit?",
      "Baiklah.",
      "Ha.",
      "google.com"
    ];

    var result = tokenizer.splitSentence(text);
    assert.deepEqual(result.length, sentence.length);
    for (var i = 0; i < sentence.length; i++)
        assert.deepEqual(true, result[i] == sentence[i]);
  });
    
});
