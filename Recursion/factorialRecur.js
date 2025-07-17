/*
    Write a Recursive function to find out the factorial of a number
*/

function factorialOfNum(n){
    //base case
    if(n === 1) return 1;

    //recursive call
    return n * factorialOfNum(n - 1)
}
console.log(factorialOfNum(5));