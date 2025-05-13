/*
    !The above series of numbers are called fibonacci numbers. Given a value n, Write a code to print the first n Fibonacci numbers
*/

function printFibonacci(num){
    if(num === 0){
        console.log(0);
        return;
    }
    if(num >= 1){
        console.log(0);
        console.log(1);
    }
    let lastDigit = 1;
    let secondLastDigit = 0;
    let ans = 0;
    for(let i = 2; i <= num; i++){
        ans = lastDigit + secondLastDigit;
       console.log(ans);
        secondLastDigit = lastDigit;
        lastDigit = ans;
    }
    return ans;
}
console.log(printFibonacci(11));