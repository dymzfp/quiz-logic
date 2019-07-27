function potongYa(str) {
  
  var string = str
  var arr = ['pro', 'gram', 'merit', 'program', 'merit', 'it', 'programmer']
  var ulang = 1
  var has
  var buang = []
  var buang_hasil = []
  var t = 0
  var cek = ''
  
  var hasil = ''
  
  for(var x = 0; x < arr.length; x++) {
    has = string.indexOf(arr[x])
    if(has >= 0) {
      buang.push(arr[x])
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
    
    if(t < buang.length) {
       ulang += 1
      
    }
    
    var arr2 = [ ...arr, ...buang_hasil]
    arr = arr2

    
    var b = ''
    for(var h = 0; h < buang_hasil.length; h++) {
      b += buang_hasil[h]
    }
    
    if(b == str) {
        console.log(buang_hasil)
    }
    
    string = str
    buang_hasil = []
    
  }
    
}

potongYa('programmerit')