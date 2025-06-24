console.log("Connected");

/*
    Write a JS code to print a 2D array
    Function `printArray()` prints all the elements of a 2D array using nested for loops.
    Example 1 = let arr = [[1, 2],[3, 4],[5, 6]]; //[1,2,3,4,5,6] //1,2,3,4,5,6
*/

function printArray(arr) {
  for (let row = 0; row < arr.length; row++) {
    //console.log(arr[row]);
    for (let col = 0; col < arr[row].length; col++) {
      console.log(arr[row][col]);
    }
  }
}
printArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
