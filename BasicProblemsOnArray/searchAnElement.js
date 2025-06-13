/*
    !Write a function that Search for an element in the array and return the index, if the element is not present then just return -1.
    *let arr = [10, 20, 4, 50, 6];
    *Examples:- searchElement(arr, 10) => 0
    *Examples:- searchElement(arr, 6) => 4
*/

let arr = [10, 20, 4, 50, 6];

function searchElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1;
}

let result = searchElement(arr, 6);

console.log(result);





