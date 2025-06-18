/*
    !Write a program to check is the provided number is prime number or not
*/

function checkPrime(num) {
    //The number which is greater then 1 and can only have two divisor 1 and the number itself is a prime number 

    if (num === 0 || num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false
        }
        return true;
    }
}

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(checkPrime(i)){
            console.log(i);
        }
    }
}
let result = isPrime(100);
console.log(result);