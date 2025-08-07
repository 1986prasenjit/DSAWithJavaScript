/*
    Write a function that Sort an array of numbers in ascending order. Don't use any in-build JS function, u can use classic for loop or any other
*/

//helper function swap()
function swap(arr, j, i) {
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                continue;
            }else {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr
}
console.log(bubbleSort([5, 2, 4, 1]));

