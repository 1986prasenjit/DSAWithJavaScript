/*
    !Write a function which will find the second largest element or number in the Array
    *Some of the corner cases we should keep in mind :- 
    * 1. Array Length should be greater than 0 and Array should contain atleast 2 elements. 2. Our function should handle the duplicate values in an Array  
*/

function secondlargest(arr) {
    //!Corner case if my array is empty or my array contain only 1 element
    if (arr.length === 0 || arr.length < 2) {
        return -1 //["Array must be greater than 0 and should have atleast 2 elements"];
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    //FOR Loop which will loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
const arr = [4, 20, 9, 0, 8, 7, 20, 10, 15, 16, 15];

let result = secondlargest(arr);

console.log(result);