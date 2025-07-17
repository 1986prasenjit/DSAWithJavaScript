/*
    Write a function with the help of Recursion to find out Sum of all the elements in an Array
*/

function sumOfElements(n){
    if(n === 0) return arr[n];

    return arr[n] + sumOfElements(n - 1)
}
let arr = [5,3,2,0,1];
console.log(sumOfElements(arr.length - 1));