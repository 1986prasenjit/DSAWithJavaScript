/*
    Write a function with the help of Recursion to find out Sum of first n numbers
*/

function sumOfNums(n){
    //base case
    if(n === 0)return 0;

    //recursive call
    return n + sumOfNums(n - 1)
}
console.log(sumOfNums(5));