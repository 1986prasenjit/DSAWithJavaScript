console.log("Connected");

/*
    Write a JS code to print a 2D array
    Function `printArray()` prints all the elements of a 2D array using nested for loops and return all the element in a new Array.
    Example 1 = let arr = [[1, 2],[3, 4],[5, 6]];
*/

function printAllElems(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1; j++){
      newArr.push(arr[i][j]);
    }
  }
  return newArr
}
let arr = [[1, 2],[3, 4],[5, 6]];

let result = printAllElems(arr);

console.log(result);
