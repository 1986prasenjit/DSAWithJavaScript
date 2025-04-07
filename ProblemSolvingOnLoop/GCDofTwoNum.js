/*
    !Given two numbers a and b find the greatest common divisor of a abd b {greatest common divisor --->gcd ---> hcf ---> highest common factor}. Ex-->a=28 b=24. ans-->4
*/

function gcd(a,b){
    let potencialAns = 1;
    for(let i = 0; i < Math.min(a,b); i++){
        if(a % i === 0 && b % i === 0){
            potencialAns = i;
        }
    }
    return potencialAns;
}
let result = gcd(7,28);
console.log(`The GCD of a and b is ${result}`);