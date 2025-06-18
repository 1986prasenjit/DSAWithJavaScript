/*
 Display the multiplication table (from 1 to 10) for a given number X.(Medium)
 Explanation: Use a loop from 1 to 10 and multiply the loop index by X, printing the result at each iteration. This produces the multiplication table for X.
*/

function Multiplication(num){
    for(let i = 1; i <= 10; i++){
        console.log(num * i);
    }
}
Multiplication(5);