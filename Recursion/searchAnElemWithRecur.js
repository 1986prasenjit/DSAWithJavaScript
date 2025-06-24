/*
    Write a function which search an element with the help of Recursive function and return the result
*/

function searchElem(arr, data, index = 0){
    //Base Case
    if(index >= arr.length) return;

    //condition
    if(arr[index] === data){
        return index + 1;
    }
    //Recursive Call
    return searchElem(arr, data, index + 1)
}

let result = searchElem([1, 5, 3, 6, 9, 5, 3, 10], 10);

console.log(result);