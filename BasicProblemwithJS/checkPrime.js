/*
    !Write a function to check whether a number is prime or not?
*/

function isPrime(num){
    for(let i = 2; i <= num - 1; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(12))