/*
    !Write a function that returns  the number of negative numbers in an array
    *let arr = [2, -9, 17, 0, 1, -10, -4, 8] ---> In this array count will be 3
*/
let arr = [2, -9, 17, 0, -1, -10, -4, 8];

function countTheNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count;
}

let result = countTheNegative(arr);
console.log(result);