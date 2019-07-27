function segitagaSatu(baris) {
  var baris = baris
  
  var print = ''
  for (var i = 0; i < baris; i++) {
    for (var x = 0; x <= i; x++) {
      print += '* '
    }
    console.log(print)
    
    print = ''
  }
}