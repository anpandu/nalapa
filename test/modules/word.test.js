
var expect = require('chai').expect
var assert = require('chai').assert

var word = require('../../modules/word.js')

describe('Word', function () {


  describe('Stopword', function () {

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


  describe('Basic Word', function () {

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

  describe('Stemming', function () {

    describe('Prefix', function () {

      it('Me-', function () {
        // me-
        assert.deepEqual(word.stemPrefix('melarang'), 'larang')
        assert.deepEqual(word.stemPrefix('merawat'), 'rawat')
        assert.deepEqual(word.stemPrefix('menyanyi'), 'nyanyi')
        assert.deepEqual(word.stemPrefix('memasak'), 'masak')
        assert.deepEqual(word.stemPrefix('melipat'), 'lipat')
        assert.deepEqual(word.stemPrefix('merobek'), 'robek')
        assert.deepEqual(word.stemPrefix('mengaji'), 'ngaji')
        // mem-
        assert.deepEqual(word.stemPrefix('memberi'), 'beri')
        assert.deepEqual(word.stemPrefix('memprotes'), 'protes')
        // me-m-
        assert.deepEqual(word.stemPrefix('memahat'), 'pahat')
        assert.deepEqual(word.stemPrefix('memanas'), 'panas')
        // men-
        assert.deepEqual(word.stemPrefix('mencangkul'), 'cangkul')
        assert.deepEqual(word.stemPrefix('mendengar'), 'dengar')
        assert.deepEqual(word.stemPrefix('menjahit'), 'jahit')
        // me-n-
        assert.deepEqual(word.stemPrefix('menebang'), 'tebang')
        assert.deepEqual(word.stemPrefix('menebal'), 'tebal')
        // meng-
        assert.deepEqual(word.stemPrefix('mengajar'), 'ajar')
        assert.deepEqual(word.stemPrefix('mengingat'), 'ingat')
        assert.deepEqual(word.stemPrefix('mengusap'), 'usap')
        assert.deepEqual(word.stemPrefix('mengejek'), 'ejek')
        assert.deepEqual(word.stemPrefix('mengomel'), 'omel')
        assert.deepEqual(word.stemPrefix('menghirup'), 'hirup')
        assert.deepEqual(word.stemPrefix('menggugat'), 'gugat')
        // me-ng-
        assert.deepEqual(word.stemPrefix('mengail'), 'kail')
        assert.deepEqual(word.stemPrefix('mengeras'), 'keras')
        // menge-
        assert.deepEqual(word.stemPrefix('mengetes'), 'tes')
        assert.deepEqual(word.stemPrefix('mengebom'), 'bom')
        // me-ny-
        assert.deepEqual(word.stemPrefix('menyadap'), 'sadap')
        assert.deepEqual(word.stemPrefix('menyempit'), 'sempit')
        assert.deepEqual(word.stemPrefix('menyatu'), 'satu')
        // not prefix
        assert.deepEqual(word.stemPrefix('meong'), 'meong')
      })

      it('Ber-', function () {
        // ber-
        assert.deepEqual(word.stemPrefix('berbicara'), 'bicara')
        assert.deepEqual(word.stemPrefix('berada'), 'ada')
        assert.deepEqual(word.stemPrefix('berbeda'), 'beda')
        assert.deepEqual(word.stemPrefix('bersatu'), 'satu')
        assert.deepEqual(word.stemPrefix('bertobat'), 'tobat')
        assert.deepEqual(word.stemPrefix('berpikir'), 'pikir')
        // be-
        assert.deepEqual(word.stemPrefix('berupa'), 'rupa')
        assert.deepEqual(word.stemPrefix('bekerja'), 'kerja')
        // bel-
        assert.deepEqual(word.stemPrefix('belajar'), 'ajar')
      })

    })

  })

})
