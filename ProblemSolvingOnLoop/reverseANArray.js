/*
    ⁠Reverse an array using a loop (create a new array with elements in reverse order). (Medium) 
    Explanation: Use a loop from the last index to the first, 
    pushing each element into a new array. This constructs a 
    reversed copy of the original array. 
*/

function reverseArray(arr){
    let arrayReverse = [];

    for(let i = arr.length - 1; i >= 0; i--){
        arrayReverse.push(arr[i]);
    }

    return arrayReverse;
}

let result = reverseArray([1,2,3,4,5]);
console.log(result);