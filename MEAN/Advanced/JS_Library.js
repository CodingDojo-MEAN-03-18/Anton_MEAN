function each(arr, callback) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }

var myArray = [1,4,5,6,7,8,3]

each(myArray, function callback(number) {
  console.log(number);
});



var _ = {
    map: function(arr, callback) {
      for (var key in arr){
        arr[key] = callback(arr[key] ,arr.length);
      }
      return arr;
    },
    reduce: function(arr, callback) { 
    let sum = 0;
      for (var key in arr){
         sum = callback(arr[key], sum)
      }
    return sum;
    },
    find: function(arr, callback) {   
      index = []
      for (var key in arr){
        if(callback(arr[key]))  
            index.push(key);
      }
      return index;
    },
    filter: function(arr, callback) { 
      temp = [];
      for(var i = 0; i < arr.length; i++) {
        if (callback(arr[i]))
            temp.push(arr[i]); 
      }
      return temp;
    },
    reject: function(arr, callback) { 
        temp = [];
        for(var i = 0; i < arr.length; i++) {
          if (!callback(arr[i]))
              temp.push(arr[i]); 
        }
        return temp;
    }
  }

var evens = _.map([1, 2, 3, 4, 5, 6], function(num, total){ return num * total; });
console.log(evens);

console.log(_.reduce([1, 2, 3, 4, 5, 6], function(num, sum){ return sum += num; }));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num, element){ return num == 5; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));