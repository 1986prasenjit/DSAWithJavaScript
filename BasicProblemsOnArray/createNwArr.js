/*
    Write a program that creates a copy of an Array without mutating the original array
*/

function copyArray(arr) {
    let newArr = [];
    arr.forEach((item) => {
        newArr.push(item);
        //console.log(newArr);
    })
    return newArr;
}
let arr = [1,2,3,4,5,6];

let result = copyArray(arr);

console.log(result);