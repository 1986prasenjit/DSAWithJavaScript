/*
    Write a function which will print the sum of all the numbers in a 2D Array and return the total Sum
*/

function sumOfNums(arr){
    let totalSum = 0;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        for(let j = 0; j < arr.length - 1; j++){
            console.log(arr[i][j]);
            totalSum += arr[i][j]
        }
    }
    return totalSum;
}
let arr = [[1,2],[3,4],[5,6]]
let result = sumOfNums(arr);
console.log(result);