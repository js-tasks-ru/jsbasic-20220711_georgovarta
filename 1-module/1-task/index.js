
  function factorial(n) {

    if (n === 0){
 
      return n + 1;     // Проверка N != 0
 
    } else if (n === 1){
 
      return n;     // Проверка N != 1
 
    }else {
 
      for (let i = 0; i <= n; i++) {
 
        return n * factorial(n - 1) / 1;
 
     }
 
 
 
    }
    
   
 
 }

