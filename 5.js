function potongYa(str) {
  
  var string = str
  var arr = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
  var ulang = 1
  var has
  var benar = []
  var buang_hasil = []
  var t = 0
  var cek = ''
  
  var hasil = ''
  
  for(var x = 0; x < arr.length; x++) {
    has = string.indexOf(arr[x])
    if(has >= 0) {
      benar.push(arr[x])
    }
  }
  
  for(var i = 0; i < ulang; i++) {
    
     for(var x = 0; x < arr.length; x++) {

       has = string.indexOf(cek+arr[x])
       if(has >= 0) {
         
           buang_hasil.push(arr[x])
           cek += arr[x]
         
           arr.splice(x, 1)
         
           x -= 1
           t += 1
         
       }
       
     }
     cek = ''
    
    var arr2 = [ ...arr, ...buang_hasil]
    arr = arr2

    
    var b = ''
    for(var h = 0; h < buang_hasil.length; h++) {
      b += buang_hasil[h]
    }

    if(t < benar.length) {
         ulang += 1
        }
    
    if(b == str) {
        console.log(buang_hasil)
        
        
    }
    else {
      
         ulang += 1
      
    }
    
    
    string = str
    
    benar2 = buang_hasil
    buang_hasil = []
    
  }
    
}

potongYa('proit')
