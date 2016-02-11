
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
        assert.deepEqual(word.stemPrefix('mengklaim'), 'klaim')
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
        assert.deepEqual(word.stemSuffix('manfaatkan'), 'manfaat')
      })

      it('-i', function () {
        assert.deepEqual(word.stemSuffix('ambili'), 'ambil')
        assert.deepEqual(word.stemSuffix('bagii'), 'bagi')
        assert.deepEqual(word.stemSuffix('indahi'), 'indah')
        assert.deepEqual(word.stemSuffix('basahi'), 'basah')
        assert.deepEqual(word.stemSuffix('bacai'), 'baca')
      })

      it('-an', function () {
        assert.deepEqual(word.stemSuffix('ambilan'), 'ambil')
        assert.deepEqual(word.stemSuffix('bagian'), 'bagi')
        assert.deepEqual(word.stemSuffix('minuman'), 'minum')
        assert.deepEqual(word.stemSuffix('basahan'), 'basah')
        assert.deepEqual(word.stemSuffix('bacaan'), 'baca')
      })

      it('-an', function () {
        assert.deepEqual(word.stemSuffix('ambilan'), 'ambil')
        assert.deepEqual(word.stemSuffix('bagian'), 'bagi')
        assert.deepEqual(word.stemSuffix('minuman'), 'minum')
        assert.deepEqual(word.stemSuffix('basahan'), 'basah')
        assert.deepEqual(word.stemSuffix('bacaan'), 'baca')
      })
    })

    describe('Confix', function () {

      it('Ber- -an', function () {
        assert.deepEqual(word.stemConfix('berciuman'), 'cium')
        assert.deepEqual(word.stemConfix('berserakan'), 'serak')
        assert.deepEqual(word.stemConfix('berebutan'), 'rebut')
      })

      it('Per- -an', function () {
        assert.deepEqual(word.stemConfix('pertemuan'), 'temu')
        assert.deepEqual(word.stemConfix('pekerjaan'), 'kerja')
      })

      it('Pe- -an', function () {
        // pe- -an
        assert.deepEqual(word.stemConfix('pelarangan'), 'larang')
        assert.deepEqual(word.stemConfix('perawatan'), 'rawat')
        assert.deepEqual(word.stemConfix('penyanyian'), 'nyanyi')
        assert.deepEqual(word.stemConfix('pemasakan'), 'masak')
        assert.deepEqual(word.stemConfix('pelipatan'), 'lipat')
        assert.deepEqual(word.stemConfix('perobekan'), 'robek')
        assert.deepEqual(word.stemConfix('pengajian'), 'ngaji')
        // pem- -an
        assert.deepEqual(word.stemConfix('pemberian'), 'beri')
        assert.deepEqual(word.stemConfix('pemprotesan'), 'protes')
        // pe-m- -an
        assert.deepEqual(word.stemConfix('pemahatan'), 'pahat')
        assert.deepEqual(word.stemConfix('pemanasan'), 'panas')
        // pen- -an
        assert.deepEqual(word.stemConfix('pencangkulan'), 'cangkul')
        assert.deepEqual(word.stemConfix('pendengaran'), 'dengar')
        assert.deepEqual(word.stemConfix('penjahitan'), 'jahit')
        // pe-n- -an
        assert.deepEqual(word.stemConfix('penebangan'), 'tebang')
        assert.deepEqual(word.stemConfix('penebalan'), 'tebal')
        // peng- -an
        assert.deepEqual(word.stemConfix('pengajaran'), 'ajar')
        assert.deepEqual(word.stemConfix('pengingatan'), 'ingat')
        assert.deepEqual(word.stemConfix('pengusapan'), 'usap')
        assert.deepEqual(word.stemConfix('pengejekan'), 'ejek')
        assert.deepEqual(word.stemConfix('pengomelan'), 'omel')
        assert.deepEqual(word.stemConfix('penghirupan'), 'hirup')
        assert.deepEqual(word.stemConfix('penggugatan'), 'gugat')
        // pe-ng- -an
        assert.deepEqual(word.stemConfix('pengailan'), 'kail')
        assert.deepEqual(word.stemConfix('pengerasan'), 'keras')
        // penge- -an
        assert.deepEqual(word.stemConfix('pengetesan'), 'tes')
        assert.deepEqual(word.stemConfix('pengeboman'), 'bom')
        // pe-ny- -an
        assert.deepEqual(word.stemConfix('penyadapan'), 'sadap')
        assert.deepEqual(word.stemConfix('penyempitan'), 'sempit')
        assert.deepEqual(word.stemConfix('penyatuan'), 'satu')
      })

      it('Ke- -an', function () {
        assert.deepEqual(word.stemConfix('kelaparan'), 'lapar')
        assert.deepEqual(word.stemConfix('kepergian'), 'pergi')
        assert.deepEqual(word.stemConfix('kepanasan'), 'panas')
      })

      it('Me- -kan', function () {
        // me- -kan
        assert.deepEqual(word.stemConfix('melarangkan'), 'larang')
        assert.deepEqual(word.stemConfix('merawatkan'), 'rawat')
        assert.deepEqual(word.stemConfix('menyanyikan'), 'nyanyi')
        assert.deepEqual(word.stemConfix('memasakkan'), 'masak')
        assert.deepEqual(word.stemConfix('melipatkan'), 'lipat')
        assert.deepEqual(word.stemConfix('merobekkan'), 'robek')
        assert.deepEqual(word.stemConfix('mengajikan'), 'ngaji')
        // mem- -kan
        assert.deepEqual(word.stemConfix('memberikan'), 'beri')
        assert.deepEqual(word.stemConfix('memproteskan'), 'protes')
        // me-m- -kan
        assert.deepEqual(word.stemConfix('memahatkan'), 'pahat')
        assert.deepEqual(word.stemConfix('memanaskan'), 'panas')
        // men- -kan
        assert.deepEqual(word.stemConfix('mencangkulkan'), 'cangkul')
        assert.deepEqual(word.stemConfix('mendengarkan'), 'dengar')
        assert.deepEqual(word.stemConfix('menjahitkan'), 'jahit')
        // me-n- -kan
        assert.deepEqual(word.stemConfix('menebangkan'), 'tebang')
        assert.deepEqual(word.stemConfix('menebalkan'), 'tebal')
        // meng- -kan
        assert.deepEqual(word.stemConfix('mengajarkan'), 'ajar')
        assert.deepEqual(word.stemConfix('mengingatkan'), 'ingat')
        assert.deepEqual(word.stemConfix('mengusapkan'), 'usap')
        assert.deepEqual(word.stemConfix('mengejekkan'), 'ejek')
        assert.deepEqual(word.stemConfix('mengomelkan'), 'omel')
        assert.deepEqual(word.stemConfix('menghirupkan'), 'hirup')
        assert.deepEqual(word.stemConfix('menggugatkan'), 'gugat')
        // me-ng- -kan
        assert.deepEqual(word.stemConfix('mengailkan'), 'kail')
        assert.deepEqual(word.stemConfix('mengeraskan'), 'keras')
        assert.deepEqual(word.stemConfix('mengumpulkan'), 'kumpul')
        // menge- -kan
        assert.deepEqual(word.stemConfix('mengeteskan'), 'tes')
        assert.deepEqual(word.stemConfix('mengebomkan'), 'bom')
        // me-ny- -kan
        assert.deepEqual(word.stemConfix('menyadapkan'), 'sadap')
        assert.deepEqual(word.stemConfix('menyempitkan'), 'sempit')
        assert.deepEqual(word.stemConfix('menyatukan'), 'satu')
      })

      it('Di- -kan', function () {
        assert.deepEqual(word.stemConfix('dibatalkan'), 'batal')
      })

      it('Me- -i', function () {
        // me- -i
        assert.deepEqual(word.stemConfix('melarangi'), 'larang')
        assert.deepEqual(word.stemConfix('merawati'), 'rawat')
        assert.deepEqual(word.stemConfix('menyanyii'), 'nyanyi')
        assert.deepEqual(word.stemConfix('memasaki'), 'masak')
        assert.deepEqual(word.stemConfix('melipati'), 'lipat')
        assert.deepEqual(word.stemConfix('merobeki'), 'robek')
        assert.deepEqual(word.stemConfix('mengajii'), 'ngaji')
        // mem- -i
        assert.deepEqual(word.stemConfix('memberii'), 'beri')
        assert.deepEqual(word.stemConfix('memprotesi'), 'protes')
        // me-m- -i
        assert.deepEqual(word.stemConfix('memahati'), 'pahat')
        assert.deepEqual(word.stemConfix('memanasi'), 'panas')
        // men- -i
        assert.deepEqual(word.stemConfix('mencangkuli'), 'cangkul')
        assert.deepEqual(word.stemConfix('mendengari'), 'dengar')
        assert.deepEqual(word.stemConfix('menjahiti'), 'jahit')
        // me-n- -i
        assert.deepEqual(word.stemConfix('menebangi'), 'tebang')
        assert.deepEqual(word.stemConfix('menebali'), 'tebal')
        // meng- -i
        assert.deepEqual(word.stemConfix('mengajari'), 'ajar')
        assert.deepEqual(word.stemConfix('mengingati'), 'ingat')
        assert.deepEqual(word.stemConfix('mengusapi'), 'usap')
        assert.deepEqual(word.stemConfix('mengejeki'), 'ejek')
        assert.deepEqual(word.stemConfix('mengomeli'), 'omel')
        assert.deepEqual(word.stemConfix('menghirupi'), 'hirup')
        assert.deepEqual(word.stemConfix('menggugati'), 'gugat')
        // me-ng- -i
        assert.deepEqual(word.stemConfix('mengaili'), 'kail')
        assert.deepEqual(word.stemConfix('mengerasi'), 'keras')
        assert.deepEqual(word.stemConfix('mengumpuli'), 'kumpul')
        // menge- -i
        assert.deepEqual(word.stemConfix('mengetesi'), 'tes')
        assert.deepEqual(word.stemConfix('mengebomi'), 'bom')
        // me-ny- -i
        assert.deepEqual(word.stemConfix('menyadapi'), 'sadap')
        assert.deepEqual(word.stemConfix('menyempiti'), 'sempit')
        assert.deepEqual(word.stemConfix('menyatui'), 'satu')
      })

      it('Di- -i', function () {
        assert.deepEqual(word.stemConfix('disadari'), 'sadar')
      })

      it('Ter- -kan', function () {
        assert.deepEqual(word.stemConfix('terpikirkan'), 'pikir')
      })
    })

    describe('All', function () {

      it('Stem All - Prefix', function () {
        assert.deepEqual(word.stem('meong'), 'meong')
        assert.deepEqual(word.stem('melarang'), 'larang')
        assert.deepEqual(word.stem('merawat'), 'rawat')
        assert.deepEqual(word.stem('menyanyi'), 'nyanyi')
        assert.deepEqual(word.stem('memasak'), 'masak')
        assert.deepEqual(word.stem('melipat'), 'lipat')
        assert.deepEqual(word.stem('merobek'), 'robek')
        assert.deepEqual(word.stem('mengaji'), 'ngaji')
        assert.deepEqual(word.stem('memberi'), 'beri')
        assert.deepEqual(word.stem('memprotes'), 'protes')
        assert.deepEqual(word.stem('memahat'), 'pahat')
        assert.deepEqual(word.stem('memanas'), 'panas')
        assert.deepEqual(word.stem('mencangkul'), 'cangkul')
        assert.deepEqual(word.stem('mendengar'), 'dengar')
        assert.deepEqual(word.stem('menjahit'), 'jahit')
        assert.deepEqual(word.stem('menebang'), 'tebang')
        assert.deepEqual(word.stem('menebal'), 'tebal')
        assert.deepEqual(word.stem('mengajar'), 'ajar')
        assert.deepEqual(word.stem('mengingat'), 'ingat')
        assert.deepEqual(word.stem('mengusap'), 'usap')
        assert.deepEqual(word.stem('mengejek'), 'ejek')
        assert.deepEqual(word.stem('mengomel'), 'omel')
        assert.deepEqual(word.stem('menghirup'), 'hirup')
        assert.deepEqual(word.stem('menggugat'), 'gugat')
        assert.deepEqual(word.stem('mengail'), 'kail')
        assert.deepEqual(word.stem('mengeras'), 'keras')
        assert.deepEqual(word.stem('mengetes'), 'tes')
        assert.deepEqual(word.stem('mengebom'), 'bom')
        assert.deepEqual(word.stem('menyadap'), 'sadap')
        assert.deepEqual(word.stem('menyempit'), 'sempit')
        assert.deepEqual(word.stem('menyatu'), 'satu')// ber-
        assert.deepEqual(word.stem('berbicara'), 'bicara')
        assert.deepEqual(word.stem('berada'), 'ada')
        assert.deepEqual(word.stem('berbeda'), 'beda')
        assert.deepEqual(word.stem('bersatu'), 'satu')
        assert.deepEqual(word.stem('bertobat'), 'tobat')
        assert.deepEqual(word.stem('berpikir'), 'pikir')
        assert.deepEqual(word.stem('berupa'), 'rupa')
        assert.deepEqual(word.stem('bekerja'), 'kerja')
        assert.deepEqual(word.stem('belajar'), 'ajar')
        assert.deepEqual(word.stem('diajar'), 'ajar')
        assert.deepEqual(word.stem('dibuka'), 'buka')
        assert.deepEqual(word.stem('perbagus'), 'bagus')
        assert.deepEqual(word.stem('pelari'), 'lari')
        assert.deepEqual(word.stem('perumit'), 'rumit')
        assert.deepEqual(word.stem('pesuruh'), 'suruh')
        assert.deepEqual(word.stem('pekerja'), 'kerja')
        assert.deepEqual(word.stem('pelarang'), 'larang')
        assert.deepEqual(word.stem('perawat'), 'rawat')
        assert.deepEqual(word.stem('penyanyi'), 'nyanyi')
        assert.deepEqual(word.stem('pemasak'), 'masak')
        assert.deepEqual(word.stem('pelipat'), 'lipat')
        assert.deepEqual(word.stem('perobek'), 'robek')
        assert.deepEqual(word.stem('pengaji'), 'ngaji')
        assert.deepEqual(word.stem('pemberi'), 'beri')
        assert.deepEqual(word.stem('pemprotes'), 'protes')
        assert.deepEqual(word.stem('pemahat'), 'pahat')
        assert.deepEqual(word.stem('pemanas'), 'panas')
        assert.deepEqual(word.stem('pencangkul'), 'cangkul')
        assert.deepEqual(word.stem('pendengar'), 'dengar')
        assert.deepEqual(word.stem('penjahit'), 'jahit')
        assert.deepEqual(word.stem('penebang'), 'tebang')
        assert.deepEqual(word.stem('penebal'), 'tebal')
        assert.deepEqual(word.stem('pengajar'), 'ajar')
        assert.deepEqual(word.stem('pengingat'), 'ingat')
        assert.deepEqual(word.stem('pengusap'), 'usap')
        assert.deepEqual(word.stem('pengejek'), 'ejek')
        assert.deepEqual(word.stem('pengomel'), 'omel')
        assert.deepEqual(word.stem('penghirup'), 'hirup')
        assert.deepEqual(word.stem('penggugat'), 'gugat')
        assert.deepEqual(word.stem('pengail'), 'kail')
        assert.deepEqual(word.stem('pengeras'), 'keras')
        assert.deepEqual(word.stem('pengetes'), 'tes')
        assert.deepEqual(word.stem('pengebom'), 'bom')
        assert.deepEqual(word.stem('penyadap'), 'sadap')
        assert.deepEqual(word.stem('penyempit'), 'sempit')
        assert.deepEqual(word.stem('penyatu'), 'satu')
        assert.deepEqual(word.stem('pelajar'), 'ajar')
        assert.deepEqual(word.stem('sebagus'), 'bagus')
        assert.deepEqual(word.stem('seingat'), 'ingat')
        assert.deepEqual(word.stem('terbuka'), 'buka')
        assert.deepEqual(word.stem('teringat'), 'ingat')
        assert.deepEqual(word.stem('terbaik'), 'baik')
        assert.deepEqual(word.stem('tertawa'), 'tawa')
      })

      it('Stem All - Suffix', function () {
        assert.deepEqual(word.stem('ambilkan'), 'ambil')
        assert.deepEqual(word.stem('bagikan'), 'bagi')
        assert.deepEqual(word.stem('kandaskan'), 'kandas')
        assert.deepEqual(word.stem('basahkan'), 'basah')
        assert.deepEqual(word.stem('bacakan'), 'baca')
        assert.deepEqual(word.stem('ambili'), 'ambil')
        assert.deepEqual(word.stem('bagii'), 'bagi')
        assert.deepEqual(word.stem('indahi'), 'indah')
        assert.deepEqual(word.stem('basahi'), 'basah')
        assert.deepEqual(word.stem('bacai'), 'baca')
        assert.deepEqual(word.stem('ambilan'), 'ambil')
        assert.deepEqual(word.stem('bagian'), 'bagi')
        assert.deepEqual(word.stem('minuman'), 'minum')
        assert.deepEqual(word.stem('basahan'), 'basah')
        assert.deepEqual(word.stem('bacaan'), 'baca')
      })

      it('Stem All - Confix', function () {
        assert.deepEqual(word.stem('berciuman'), 'cium')
        assert.deepEqual(word.stem('berserakan'), 'serak')
        assert.deepEqual(word.stem('berebutan'), 'rebut')
        assert.deepEqual(word.stem('pertemuan'), 'temu')
        assert.deepEqual(word.stem('pekerjaan'), 'kerja')
        assert.deepEqual(word.stem('pelarangan'), 'larang')
        assert.deepEqual(word.stem('perawatan'), 'rawat')
        assert.deepEqual(word.stem('penyanyian'), 'nyanyi')
        assert.deepEqual(word.stem('pemasakan'), 'masak')
        assert.deepEqual(word.stem('pelipatan'), 'lipat')
        assert.deepEqual(word.stem('perobekan'), 'robek')
        assert.deepEqual(word.stem('pengajian'), 'ngaji')
        assert.deepEqual(word.stem('pemberian'), 'beri')
        assert.deepEqual(word.stem('pemprotesan'), 'protes')
        assert.deepEqual(word.stem('pemahatan'), 'pahat')
        assert.deepEqual(word.stem('pemanasan'), 'panas')
        assert.deepEqual(word.stem('pencangkulan'), 'cangkul')
        assert.deepEqual(word.stem('pendengaran'), 'dengar')
        assert.deepEqual(word.stem('penjahitan'), 'jahit')
        assert.deepEqual(word.stem('penebangan'), 'tebang')
        assert.deepEqual(word.stem('penebalan'), 'tebal')
        assert.deepEqual(word.stem('pengajaran'), 'ajar')
        assert.deepEqual(word.stem('pengingatan'), 'ingat')
        assert.deepEqual(word.stem('pengusapan'), 'usap')
        assert.deepEqual(word.stem('pengejekan'), 'ejek')
        assert.deepEqual(word.stem('pengomelan'), 'omel')
        assert.deepEqual(word.stem('penghirupan'), 'hirup')
        assert.deepEqual(word.stem('penggugatan'), 'gugat')
        assert.deepEqual(word.stem('pengailan'), 'kail')
        assert.deepEqual(word.stem('pengerasan'), 'keras')
        assert.deepEqual(word.stem('pengetesan'), 'tes')
        assert.deepEqual(word.stem('pengeboman'), 'bom')
        assert.deepEqual(word.stem('penyadapan'), 'sadap')
        assert.deepEqual(word.stem('penyempitan'), 'sempit')
        assert.deepEqual(word.stem('penyatuan'), 'satu')
        assert.deepEqual(word.stem('kelaparan'), 'lapar')
        assert.deepEqual(word.stem('kepergian'), 'pergi')
        assert.deepEqual(word.stem('kepanasan'), 'panas')
      })
    })

  })

})
