
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

      it('Di-', function () {
        // di-
        assert.deepEqual(word.stemPrefix('diajar'), 'ajar')
        assert.deepEqual(word.stemPrefix('dibuka'), 'buka')
      })

      it('Pe-', function () {
        // per-
        assert.deepEqual(word.stemPrefix('perbagus'), 'bagus')
        // pe-
        assert.deepEqual(word.stemPrefix('pelari'), 'lari')
        assert.deepEqual(word.stemPrefix('perumit'), 'rumit')
        assert.deepEqual(word.stemPrefix('pesuruh'), 'suruh')
        assert.deepEqual(word.stemPrefix('pekerja'), 'kerja')
        // pe-
        assert.deepEqual(word.stemPrefix('pelarang'), 'larang')
        assert.deepEqual(word.stemPrefix('perawat'), 'rawat')
        assert.deepEqual(word.stemPrefix('penyanyi'), 'nyanyi')
        assert.deepEqual(word.stemPrefix('pemasak'), 'masak')
        assert.deepEqual(word.stemPrefix('pelipat'), 'lipat')
        assert.deepEqual(word.stemPrefix('perobek'), 'robek')
        assert.deepEqual(word.stemPrefix('pengaji'), 'ngaji')
        // pem-
        assert.deepEqual(word.stemPrefix('pemberi'), 'beri')
        assert.deepEqual(word.stemPrefix('pemprotes'), 'protes')
        // pe-m-
        assert.deepEqual(word.stemPrefix('pemahat'), 'pahat')
        assert.deepEqual(word.stemPrefix('pemanas'), 'panas')
        // pen-
        assert.deepEqual(word.stemPrefix('pencangkul'), 'cangkul')
        assert.deepEqual(word.stemPrefix('pendengar'), 'dengar')
        assert.deepEqual(word.stemPrefix('penjahit'), 'jahit')
        // pe-n-
        assert.deepEqual(word.stemPrefix('penebang'), 'tebang')
        assert.deepEqual(word.stemPrefix('penebal'), 'tebal')
        // peng-
        assert.deepEqual(word.stemPrefix('pengajar'), 'ajar')
        assert.deepEqual(word.stemPrefix('pengingat'), 'ingat')
        assert.deepEqual(word.stemPrefix('pengusap'), 'usap')
        assert.deepEqual(word.stemPrefix('pengejek'), 'ejek')
        assert.deepEqual(word.stemPrefix('pengomel'), 'omel')
        assert.deepEqual(word.stemPrefix('penghirup'), 'hirup')
        assert.deepEqual(word.stemPrefix('penggugat'), 'gugat')
        // pe-ng-
        assert.deepEqual(word.stemPrefix('pengail'), 'kail')
        assert.deepEqual(word.stemPrefix('pengeras'), 'keras')
        // penge-
        assert.deepEqual(word.stemPrefix('pengetes'), 'tes')
        assert.deepEqual(word.stemPrefix('pengebom'), 'bom')
        // pe-ny-
        assert.deepEqual(word.stemPrefix('penyadap'), 'sadap')
        assert.deepEqual(word.stemPrefix('penyempit'), 'sempit')
        assert.deepEqual(word.stemPrefix('penyatu'), 'satu')
        // pel-
        assert.deepEqual(word.stemPrefix('pelajar'), 'ajar')
      })

      it('Se-', function () {
        // se-
        assert.deepEqual(word.stemPrefix('sebagus'), 'bagus')
        assert.deepEqual(word.stemPrefix('seingat'), 'ingat')
      })

      it('Se-', function () {
        // se-
        assert.deepEqual(word.stemPrefix('sebagus'), 'bagus')
        assert.deepEqual(word.stemPrefix('seingat'), 'ingat')
      })

      it('Ter-', function () {
        // ter-
        assert.deepEqual(word.stemPrefix('terbuka'), 'buka')
        assert.deepEqual(word.stemPrefix('teringat'), 'ingat')
        assert.deepEqual(word.stemPrefix('terbaik'), 'baik')
        assert.deepEqual(word.stemPrefix('tertawa'), 'tawa')
      })
    })

    describe('Suffix', function () {

      it('-kan', function () {
        assert.deepEqual(word.stemSuffix('ambilkan'), 'ambil')
        assert.deepEqual(word.stemSuffix('bagikan'), 'bagi')
        assert.deepEqual(word.stemSuffix('kandaskan'), 'kandas')
        assert.deepEqual(word.stemSuffix('basahkan'), 'basah')
        assert.deepEqual(word.stemSuffix('bacakan'), 'baca')
      })
    })

  })

})
