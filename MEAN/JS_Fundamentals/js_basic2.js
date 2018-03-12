function magic_multiply(x, y){
    if (y.constructor === String){
        return "Error: Can not multiply by string";
    }else if (x.constructor === String){
        temp="";
        for (var k=0; k < y; k++){
            temp+=x;  
        }
        return temp;
    }else if (x.constructor === Array){ 
        for(var i in x){
            x[i] = x[i] * y;
        }
        return x; 
    }else if (x ===0 || y ===0){ return "All inputs 0"; //test2
    }else{x = x*y;} //test1
    
    return x;
}

/* Test 1
In order to make this test pass, we will need to add logic to magic_multiply. 
Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. 
Remember, we must use these specific inputs!
 */
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

// Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

// Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

// Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

// Test 5 - Bonus
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

//How could we check if an array is an array?
function check_var(incoming){
    if (incoming.constructor === Array) return true;
    return false;
}

console.log(check_var("4,5,6,7,8"));
console.log(check_var([4,5,6,7,8]));

