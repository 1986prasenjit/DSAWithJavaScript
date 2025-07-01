/*
    Write a Javascript program to find the duplicates values in a given arrays and return a new array containing the duplicates values
*/

function findTheDuplicates(arr){
    let duplicatesValues = [];
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== i && !duplicatesValues.includes(arr[i])){
            duplicatesValues.push(arr[i])
        }
    }
    return duplicatesValues
}

let arr = [11,88,99,77,88,66,99,77,25,30,66,25];
let result = findTheDuplicates(arr);
console.log(result);