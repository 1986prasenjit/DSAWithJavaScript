/*
    Write a function which will calculate the sum of the arr given in the arr array and return the result 
*/

function calculateTheSum(num){
  let newNum = 0;
   while(num > 0){
    let lastDigit = num % 10;
    newNum += lastDigit;
    num = Math.floor(num / 10); 
   }
   return newNum;
}

let result = calculateTheSum(123456);
console.log(result);


