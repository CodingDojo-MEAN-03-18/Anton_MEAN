function fib() {
    var i = 0;
    var i2 = 1;
    function nacci() {
        if (i==0){
            console.log("1");
            i++;
        }else{
            console.log(i);
            var temp = i;
            i = i + i2;
            i2 = temp;   
        }        
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"