/*
    Function `reverseNum()` returns the reversed number for the given argument number value. 
*/

function reverseANumber(num){
    let reverseNum = 0;
    while(num !== 0){
        let lastDigit = num % 10;
        reverseNum = reverseNum * 10 + lastDigit
        num = Math.floor(num/10);
    }
    return reverseNum
}
console.log(reverseANumber(12345));