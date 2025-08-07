/*
    Given an array of interger nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise return -1
*/

function searchAnElement(arr, target){
    //two pointers to get the starting and ending of the array
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    //while loop will run until leftPointer is less than or equal too rightPointer
    while(leftPointer <= rightPointer){
        let middle = Math.floor(leftPointer + (rightPointer - leftPointer) / 2);

        if(arr[middle] === target){
            return middle
        }else if(arr[middle] < target){
            leftPointer = middle + 1;
        }else {
            rightPointer = middle - 1;
        }
    }
    //if no match found
    return -1;
}

console.log(searchAnElement([-1,0,3,5,9,12], 9));