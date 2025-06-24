/* 
!Leet Code Question number 7, Reverse Integer, marked as Medium.
Question: Reverse Integer with Overflow Check.
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

Requirements
Reverse the digits of a 32-bit signed integer.
Return 0 if the result overflows.
Constraints
Time Complexity: O(d) where d is the number of digits.
Space Complexity: O(1) — constant space.
Example
Input: 123
Output: 321

Input: -123
Output: -321

Input: 1534236469
Output: 0 (overflow)
*/

function reverseANumber(x) {
    //this is for to store our original value to compare later with the final output
    const xCopy = x;

    //this is for if we get negative number to handle that corner case
    x = Math.abs(x); //So now if x is -21 [negative] it will be 21 positive number

    let reverseNum = 0;// to store the reverse number

    //Loop
    while (x > 0) {
        let lastDigit = x % 10;
        reverseNum = (reverseNum * 10) + lastDigit;
        x = Math.floor(x / 10)
    }
    //to handle the range of the output 32-bit integer
    let limit = Math.pow(2, 31)
    if (reverseNum < -limit || reverseNum > limit) return 0;

    //to handle the negative input and output
    return xCopy < 0 ? -reverseNum : reverseNum;
}
let result = reverseANumber(120);

console.log(result);

/*
!Step-by-Step Approach
    *Preserve the Original: Save x in xCopy.
    *Work with Absolute Value: Use Math.abs(x) or abs(x) to simplify reversal.
    *Reverse Digits:
    *Initialize rev = 0.
    *While x != 0:
    *last = x % 10
    *rev = rev * 10 + last
    *x //= 10
    *Check for Overflow: Return 0 if reversed number is outside 32-bit int range.
    *Restore Sign: Return -rev if xCopy < 0, else rev.
*/