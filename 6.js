function arkaFood(harga, kode, jarak, iya) {
  var voucher = ['ARKAFOOD5', 'DITRAKTIRDEMY']
  var harga_akhir = harga
  var ongkir = 0
  var diskon = 0
  
  if(kode == voucher[0] && harga >= 50000) {
    diskon += harga * 50 / 100
    if( diskon > 50000) {
      diskon = 50000
    }
  }
  else if(kode == voucher[1] && harga >= 25000) {
    diskon += harga * 60 / 100
    if( diskon > 30000) {
      diskon = 30000
    }
  }
  
  harga_akhir -= diskon
  
  if(jarak <= 1.5) {
    ongkir += 5000
  }
  else {
    var jarak_akhir = Math.ceil(jarak - 1.5)
    var biaya_ongkir = (jarak_akhir * 3000) + 5000
    ongkir += biaya_ongkir
  }
  
  harga_akhir += ongkir
  
  if(iya) {
    var pajak = harga * 5 / 100
    harga_akhir += pajak
  }
  
  console.log('Rp. '+ harga_akhir)
  
}