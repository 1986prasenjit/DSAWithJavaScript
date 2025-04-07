/*
    !Given a number x, Calculate the sum of digits of the no x. Exam--->4136 ---> (4 + 1 + 3 + 6) ---> 14
*/

function calSumOfDigits(num) {
  let countResult = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    countResult += lastDigit;
    num = Math.floor(num / 10);
  }
  return countResult;
}

console.log(calSumOfDigits(4136));
