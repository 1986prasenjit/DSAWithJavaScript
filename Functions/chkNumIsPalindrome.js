/*
    !Given an integer x, return true if x is a Palindrome, and false otherwise

    *Example:-Input: x = 121; Output: true; Explanation: 121 reads as 121 from left to right and from right to left.

    *Example:- Input: x = -121; Output: false; Explanation: From  left to right, it reads -121. From right to left, it becomes 121-. Therefore its not a palindrome.

    *Example:- Input: x = 10; Output: false; Explanation: Reads 01 from right to left. Therefore its not a palindrome.

*/

function checkPalindrome(num){

    //for handling negative numbers
    if(num < 0 ) return false;

    //just coping the original number so that can check with the reverseNumber later
    let numCopy = num;

    let reverseNum = 0;

    while(num > 0){
        let lastDigit = num % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    if(reverseNum === numCopy ) {
        return true
    }else {
        return false;
    }
}

let result = checkPalindrome(121);

console.log(result);