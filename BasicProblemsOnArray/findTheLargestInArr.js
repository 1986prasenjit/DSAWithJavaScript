/*
    !Write a function that returns the largest number in the array
    *let arr = [5, 0, 10, 8, 17, 1];
*/
let arr = [-9, -19, -3];
function findLargest(arr){
    let largestNum = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }
    return largestNum;
}

const result = findLargest(arr);
console.log(result);