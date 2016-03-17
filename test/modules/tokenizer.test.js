
var expect = require('chai').expect
var assert = require('chai').assert

var tokenizer = require('../../modules/tokenizer.js')

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
      "",
      "PDI-P",
      "PDI - P"
    ]
    // answers
    tokenss = [
      ["Hello", "world", ",", "my", "name", "is", "Alice", ".", ".", "."],
      ["kerusuhan","yang","terjadi","di","sana","?","\"","Panik",".","\"",".","TOKOH","utama","film","ini","diperankan","oleh"],
      [ 'Monday', ',', '(', '1/11', ')', '.', 'I', 'have', '1.000', 'rupiah', '.' ],
      ["single"],
      ["betweenspaces"],
      [],
      [],
      ["PDI-P"],
      ["PDI","-","P"]
    ]
    for (var i = 0; i < sentences.length; i++) {
      t = tokenizer.tokenize(sentences[i])
      assert.typeOf(t, 'array')
      assert.lengthOf(t, tokenss[i].length)
      assert.deepEqual(t, tokenss[i])
    }
  })


  it('splitSentence', function () {
    var text = "Hello world, my name is Alice! I live in Bandung. Jakarta kebanjiran gara-gara hujan - tugas kuliah sulit? Baiklah.\r\nHa.\n\rgoogle.com"
    var sentence = [
      "Hello world, my name is Alice!",
      "I live in Bandung.",
      "Jakarta kebanjiran gara-gara hujan -",
      "tugas kuliah sulit?",
      "Baiklah.",
      "Ha.",
      "google.com"
    ]

    var result = tokenizer.splitSentence(text)
    assert.deepEqual(result.length, sentence.length)
    for (var i = 0; i < sentence.length; i++)
      assert.deepEqual(true, result[i] == sentence[i])

    var text = "Seorang remaja berinisal HAS (15) ditangkap aparat Polres Magelang lantaran diduga menjadi pelaku penjambretan. HAS ditangkap bersama rekannya, Abdul Azis (22), asal Kecamatan Kepil, Kabupaten Wonosobo. Remaja laki-laki itu diketahui masih duduk di bangku SMP dan juga tinggal di Kecamatan Kepil, Kabupaten Wonosobo. Informasi yang dihimpun, dua pelaku sudah kerap bekerja sama menjambret di beberapa lokasi di Kabupaten Magelang. Salah satunya di ruas jalan Desa Sukomulyo, Desa Sidowangi, Kecamatan Kajoran, Kabupaten Magelang dengan korban Aditya Nucahyani (16) asal desa setempat. Kepala Polres Magelang AKBP Zain Dwi Nugroho mengungkapkan, sebelum beraksi, keduanya sudah mengincar korban yang sedang berdiri di pinggir jalan sembari memegang ponsel. Di saat situasi sepi, mereka langsung mengambil ponsel dan dompet milik korban dengan cara paksa. \"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu. Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016). Zain melanjutkan, semula korban tidak melapor ke polisi pasca-penjambretan yang dialaminya. Korban baru melapor setelah ia melihat ponsel mirip miliknya sedang dipegang oleh seseorang yang kini menjadi saksi. \"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu. Polisi lantas mengembangkan kasus tersebut hingga kemudian menangkap kedua pelaku di rumah masing-masing belum lama ini. Dari tangan , polisi menyita barang bukti berupa satu unit ponsel dan satu unit sepeda motor matik putih nomor polisi AA 6027 GP yang disinyalir sebagai sarana penjambretan. Zain menegaskan, pelaku Abdul Azis terancam Pasal 365 KUHP tentang pencurian disertai kekerasan dengan ancaman maksimal 12 penjara. Sedangkan pelaku HAS sejauh ini tidak ditahan karena masih dibawah umur. \"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya. Sementara itu, salah satu pelaku, Abdul Azis mengaku sudah empat kali menjambret bersama HAS dalam kurun 1,5 bulan terakhir. Sasaran mereka adalah perempuan di beberapa wilayah Kabupaten Magelang. Abdul Azis mengaku nekat menjambret lantaran sedang membutuhkan uang untuk membantu biaya pernikahan mertuanya. \"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini. Apapun alasannya pelaku kini harus mendekam di tahanan Mapolres Magelang untuk mempertanggungjawabkan perbuatannya."
    var result = tokenizer.splitSentence(text)
  })


  it('getQuotations', function () {
    var text = "Seorang remaja berinisal HAS (15) ditangkap aparat Polres Magelang lantaran diduga menjadi pelaku penjambretan. HAS ditangkap bersama rekannya, Abdul Azis (22), asal Kecamatan Kepil, Kabupaten Wonosobo. Remaja laki-laki itu diketahui masih duduk di bangku SMP dan juga tinggal di Kecamatan Kepil, Kabupaten Wonosobo. Informasi yang dihimpun, dua pelaku sudah kerap bekerja sama menjambret di beberapa lokasi di Kabupaten Magelang. Salah satunya di ruas jalan Desa Sukomulyo, Desa Sidowangi, Kecamatan Kajoran, Kabupaten Magelang dengan korban Aditya Nucahyani (16) asal desa setempat. Kepala Polres Magelang AKBP Zain Dwi Nugroho mengungkapkan, sebelum beraksi, keduanya sudah mengincar korban yang sedang berdiri di pinggir jalan sembari memegang ponsel. Di saat situasi sepi, mereka langsung mengambil ponsel dan dompet milik korban dengan cara paksa. \"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu. Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016). Zain melanjutkan, semula korban tidak melapor ke polisi pasca-penjambretan yang dialaminya. Korban baru melapor setelah ia melihat ponsel mirip miliknya sedang dipegang oleh seseorang yang kini menjadi saksi. \"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu. Polisi lantas mengembangkan kasus tersebut hingga kemudian menangkap kedua pelaku di rumah masing-masing belum lama ini. Dari tangan , polisi menyita barang bukti berupa satu unit ponsel dan satu unit sepeda motor matik putih nomor polisi AA 6027 GP yang disinyalir sebagai sarana penjambretan. Zain menegaskan, pelaku Abdul Azis terancam Pasal 365 KUHP tentang pencurian disertai kekerasan dengan ancaman maksimal 12 penjara. Sedangkan pelaku HAS sejauh ini tidak ditahan karena masih dibawah umur. \"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya. Sementara itu, salah satu pelaku, Abdul Azis mengaku sudah empat kali menjambret bersama HAS dalam kurun 1,5 bulan terakhir. Sasaran mereka adalah perempuan di beberapa wilayah Kabupaten Magelang. Abdul Azis mengaku nekat menjambret lantaran sedang membutuhkan uang untuk membantu biaya pernikahan mertuanya. \"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini. Apapun alasannya pelaku kini harus mendekam di tahanan Mapolres Magelang untuk mempertanggungjawabkan perbuatannya."
    var ans = ["\"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu. Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016).","\"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu.","\"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya.","\"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini."]
    var result = tokenizer.getQuotations(text)

    assert.deepEqual(ans, result)
  })


  it('splitSentence with quotations', function () {
    var text = "Seorang remaja berinisal HAS (15) ditangkap aparat Polres Magelang lantaran diduga menjadi pelaku penjambretan. HAS ditangkap bersama rekannya, Abdul Azis (22), asal Kecamatan Kepil, Kabupaten Wonosobo. Remaja laki-laki itu diketahui masih duduk di bangku SMP dan juga tinggal di Kecamatan Kepil, Kabupaten Wonosobo. Informasi yang dihimpun, dua pelaku sudah kerap bekerja sama menjambret di beberapa lokasi di Kabupaten Magelang. Salah satunya di ruas jalan Desa Sukomulyo, Desa Sidowangi, Kecamatan Kajoran, Kabupaten Magelang dengan korban Aditya Nucahyani (16) asal desa setempat. Kepala Polres Magelang AKBP Zain Dwi Nugroho mengungkapkan, sebelum beraksi, keduanya sudah mengincar korban yang sedang berdiri di pinggir jalan sembari memegang ponsel. Di saat situasi sepi, mereka langsung mengambil ponsel dan dompet milik korban dengan cara paksa. \"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu! Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016). Zain melanjutkan, semula korban tidak melapor ke polisi pasca-penjambretan yang dialaminya. Korban baru melapor setelah ia melihat ponsel mirip miliknya sedang dipegang oleh seseorang yang kini menjadi saksi. \"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu. Polisi lantas mengembangkan kasus tersebut hingga kemudian menangkap kedua pelaku di rumah masing-masing belum lama ini. Dari tangan , polisi menyita barang bukti berupa satu unit ponsel dan satu unit sepeda motor matik putih nomor polisi AA 6027 GP yang disinyalir sebagai sarana penjambretan. Zain menegaskan, pelaku Abdul Azis terancam Pasal 365 KUHP tentang pencurian disertai kekerasan dengan ancaman maksimal 12 penjara. Sedangkan pelaku HAS sejauh ini tidak ditahan karena masih dibawah umur. \"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya. Sementara itu, salah satu pelaku, Abdul Azis mengaku sudah empat kali menjambret bersama HAS dalam kurun 1,5 bulan terakhir. Sasaran mereka adalah perempuan di beberapa wilayah Kabupaten Magelang. Abdul Azis mengaku nekat menjambret lantaran sedang membutuhkan uang untuk membantu biaya pernikahan mertuanya. \"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini. Apapun alasannya pelaku kini harus mendekam di tahanan Mapolres Magelang untuk mempertanggungjawabkan perbuatannya."
    var ans = ["Seorang remaja berinisal HAS (15) ditangkap aparat Polres Magelang lantaran diduga menjadi pelaku penjambretan.","HAS ditangkap bersama rekannya, Abdul Azis (22), asal Kecamatan Kepil, Kabupaten Wonosobo.","Remaja laki-laki itu diketahui masih duduk di bangku SMP dan juga tinggal di Kecamatan Kepil, Kabupaten Wonosobo.","Informasi yang dihimpun, dua pelaku sudah kerap bekerja sama menjambret di beberapa lokasi di Kabupaten Magelang.","Salah satunya di ruas jalan Desa Sukomulyo, Desa Sidowangi, Kecamatan Kajoran, Kabupaten Magelang dengan korban Aditya Nucahyani (16) asal desa setempat.","Kepala Polres Magelang AKBP Zain Dwi Nugroho mengungkapkan, sebelum beraksi, keduanya sudah mengincar korban yang sedang berdiri di pinggir jalan sembari memegang ponsel.","Di saat situasi sepi, mereka langsung mengambil ponsel dan dompet milik korban dengan cara paksa.","\"Mereka beraksi siang hari, sekitar pukul 13.00 WIB akhir pekan lalu! Saat itu korban terlihat sendirian,\" kata Zain dalam gelar perkara, Selasa (16/2/2016).","Zain melanjutkan, semula korban tidak melapor ke polisi pasca-penjambretan yang dialaminya.","Korban baru melapor setelah ia melihat ponsel mirip miliknya sedang dipegang oleh seseorang yang kini menjadi saksi.","\"Korban mengenali ponsel yang dipegang saksi adalah miliknya, baru kemudian ia melapor ke Polsek Kajoran. Saksi tersebut mengatakan kalau ponsel tersebut dibeli dari tetangga seharga Rp 250.000,\" papar mantan Kapolsek Metro Tamansari, Jakarta itu.","Polisi lantas mengembangkan kasus tersebut hingga kemudian menangkap kedua pelaku di rumah masing-masing belum lama ini.","Dari tangan , polisi menyita barang bukti berupa satu unit ponsel dan satu unit sepeda motor matik putih nomor polisi AA 6027 GP yang disinyalir sebagai sarana penjambretan.","Zain menegaskan, pelaku Abdul Azis terancam Pasal 365 KUHP tentang pencurian disertai kekerasan dengan ancaman maksimal 12 penjara.","Sedangkan pelaku HAS sejauh ini tidak ditahan karena masih dibawah umur.","\"Kami masih koordinasi dengan pihak terkait apakah pelaku HAS ini akan menjalani diversi atau tidak,\" katanya.","Sementara itu, salah satu pelaku, Abdul Azis mengaku sudah empat kali menjambret bersama HAS dalam kurun 1,5 bulan terakhir.","Sasaran mereka adalah perempuan di beberapa wilayah Kabupaten Magelang.","Abdul Azis mengaku nekat menjambret lantaran sedang membutuhkan uang untuk membantu biaya pernikahan mertuanya.","\"Ponselnya saya jual lagi, uangnya buat bantu mertua yang mau nikah lagi. Saya dulu sales di Sumatera tapi sekarang nganggur,\" ucap bapak dari dua anak ini.","Apapun alasannya pelaku kini harus mendekam di tahanan Mapolres Magelang untuk mempertanggungjawabkan perbuatannya."]
    var result = tokenizer.splitSentence(text)

    assert.deepEqual(ans, result)
  })
    
})
