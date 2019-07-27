function segitigaTiga(num) {
  var baris = num
  
  var print = ''
  var v = baris - 1
  for (var i = 0; i < baris; i++) {
    for (var x = v; x > 0; x--) {
      print += ' '
    }
    
    for(var y = 0; y < baris-v; y++){
        print += '*'
      }
    
    console.log(print)
    
    print = ''
    v -= 1
  }
  
}