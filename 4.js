function count_vowels(str) {
  var string = str.split('')
  var vocal = 'aiueo'
  var hasil = 0
  
  for( var i = 0; i < string.length; i++) {
    if(vocal.indexOf(string[i]) >= 0) {
      hasil += 1
    }
  }
  
  console.log(hasil)
}