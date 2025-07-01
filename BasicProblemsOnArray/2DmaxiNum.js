console.log("connected");

/*
    !You are given an 2D-array of integers. Your task is to find the maximum element in the array.

    Example 1:
    Input: args = [[1, 2, 3],[4, 5, 6],[7, 8, 9]] 
    Output: 9
*/
//! 1st approach
function findTheMax(arr) {
  let maxNum = [0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);
      if (arr[i][j] >= maxNum) {
        maxNum = arr[i][j];
      }
    }
  }
  return maxNum;
}
let result = findTheMax([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);

/*
    ?There are few problems with the above code is that :- 

    *1st --> let maxNum = [0][0]-->This line initializes a variable maxNum to the value at the first element of the first sub-array of the input array. This is the primary issue with the original code. It assumes the first element will be the maximum or at least a suitable starting point for comparison. If the array contains negative numbers, or if the maximum value is not the first element, this will lead to an incorrect result. It should be initialized to the smallest possible number.

    *2nd --> for (let j = 0; j < arr.length; j++) --> This line starts the inner loop, iterating through each element within the current row. arr[i].length would have been better here to get the number of columns in the current row. While the above solution might work if all rows have the same length, it's not robust.
*/
//! 2nd optimised approach
/*
function findTheMax(arr) {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) {
        maxNum = arr[i][j];
      }
    }
  }
  return maxNum;
}
let result = findTheMax([
  [1, -200, 3],
  [4, 5, 6, 100],
  [7, 8, 9, 10],
]);
console.log(result);
*/
/*
    !DRY RUN OF THE ABOVE CODE 

    Initial State:

    arr = [[1, -200, 3], [4, 5, 6, 100], [7, 8, 9, 10]]
    result = (undefined initially)
    1. Function Call:

    findTheMax(arr) is called.
    2. Empty Array Check:

    arr.length (which is 3) is not equal to 0. The if condition is false.
    3. Initialization:

    maxNum is initialized to -Infinity.
    4. Outer Loop (i):

    i = 0:

    Inner Loop (j):
    j = 0: arr[0][0] (which is 1) > maxNum (-Infinity) is true. maxNum becomes 1.
    j = 1: arr[0][1] (which is -200) > maxNum (1) is false.
    j = 2: arr[0][2] (which is 3) > maxNum (1) is true. maxNum becomes 3.
    Inner loop finishes.
    i = 1:

    Inner Loop (j):
    j = 0: arr[1][0] (which is 4) > maxNum (3) is true. maxNum becomes 4.
    j = 1: arr[1][1] (which is 5) > maxNum (4) is true. maxNum becomes 5.
    j = 2: arr[1][2] (which is 6) > maxNum (5) is true. maxNum becomes 6.
    j = 3: arr[1][3] (which is 100) > maxNum (6) is true. maxNum becomes 100.
    Inner loop finishes.
    i = 2:

    Inner Loop (j):
    j = 0: arr[2][0] (which is 7) > maxNum (100) is false.
    j = 1: arr[2][1] (which is 8) > maxNum (100) is false.
    j = 2: arr[2][2] (which is 9) > maxNum (100) is false.
    j = 3: arr[2][3] (which is 10) > maxNum (100) is false.
    Inner loop finishes.
    Outer loop finishes.

    5. Return Value:

    The function returns maxNum, which is 100.
    6. Assignment:

    The returned value (100) is assigned to the result variable.
    7. Console Output:

    console.log(result) prints 100 to the console.
    Final State:

    arr = [[1, -200, 3], [4, 5, 6, 100], [7, 8, 9, 10]] (unchanged)
    result = 100
    Console Output: 100
*/