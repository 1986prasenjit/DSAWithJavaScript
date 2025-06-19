/*
    !Write a function that returns the count of digits in a number
    Example :- 493 --> output will be 3
*/

function countTheDigit(n){
    let count = 0;

    //to handle the corner case if the n is equal to negative
    n = Math.abs(n);

    //to handle the corner case if the n is equal to 0[zero]
    if(num === 0) return 1;

    while(n > 0){
        n = Math.floor(n / 10);
        count++
    }
    return count;
}

let num = 0;

let result = countTheDigit(num);

console.log(result);