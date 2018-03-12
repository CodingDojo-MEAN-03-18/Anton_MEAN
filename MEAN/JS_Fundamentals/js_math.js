/**
 * Assignment: JavaScript Math
 * Complete the below challenges using JavaScript's Math object.
 */

/* Math 1
  Write a function called zero_negativity(). This function should take an array. 
  Return true if the input array contains no negative numbers, return false if it does.
*/
function zero_negativity(arr){
    for (var i in arr){
        if (arr[i] < 0) return false;
    }
    return true;
 }
console.log(zero_negativity([4,5,-6,7,8]));

/* Math 2
  Write a function called is_even(). This function should take a number. 
  Return true if the input number is even, return false if the number is odd.
*/
function is_even(num){
    if (num%2 === 0) return true;
    return false;
 }
console.log(is_even(4));

/* Math 3
  Write a function called how_many_even(). This function should take an array. 
  Return the total number of elements in the array that are even. You may call is_even() to solve this.
*/
function how_many_even(arr){
    var number_of_even = 0;
    for (i in arr){
        if (is_even(arr[i]))number_of_even += 1;
    }
    console.log("total number of elements: " + number_of_even);
}

how_many_even([5,2,2,4,1]);

/* Math 4
  Write a function called create_dummy_array(). This function should take a number n. 
  Return an array of random numbers between 0 and 9 with the length of n.
*/
function create_dummy_array(number_n){
    temp_array = []
    for(var i = 0; i < number_n; i++){
        temp_array.push(Math.floor(Math.random() * 9) + 1  )
    }
    return temp_array;
}
console.log(create_dummy_array(5));


/* Math 5
  Write a function called random_choice(). This function should take an array. 
  Return a random element of the array, based on its length. This function should never return undefined.
*/
function random_choice(incoming_array){
    var random_number = Math.floor(Math.random() * incoming_array.length)
    return incoming_array[random_number]
}
console.log(random_choice([0,1,9,2,8,3,4,5,6,7]));