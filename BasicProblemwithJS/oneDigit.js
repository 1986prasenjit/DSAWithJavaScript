/*
    !Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
    !Example 1:
        ?Input: num = 38
        ?Output: 2
        ?Explanation: The process is
        ?38 --> 3 + 8 --> 11
        ?11 --> 1 + 1 --> 2 
        ?Since 2 has only one digit, return it.
*/
function addDigit(num) {
  while (true) {
    if (num <= 9) break;
    let result = 0;
    while (num > 0) {
      let digit = num % 10;
      result += digit;
      num = Math.floor(num / 10);
    }
    num = result;
  }
  return num;
}
let resultValue = addDigit(55);
console.log(resultValue);

/*
    !DRY RUN of the above problem
    ?the num is 55.
    ?The 1st While will excute and it will not get into if statement because num[55] > 10.
    ?Will initialized a Variable result with the value 0;
    ?Then the excution enters into the 2nd While Loop.
    ?1st Step num[55] > 0; ---> YES
    ?2nd Step let digit = num[55] % 10 = 5;
    ?3rd Step result[0] += digit[5]
    ?4th Step num[55] = Math.floor(num[55] / 10) = 5 and inner loops continued until the value of num = 0.
*/