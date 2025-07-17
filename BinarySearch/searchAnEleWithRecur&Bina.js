function binarySeach_recur(arr, target, left = 0, right = arr.length - 1) {
    console.log(arr.length - 1);
    if (left > right) { return -1 };

    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        return binarySeach_recur(arr, target, left, mid - 1)
    } else {
        return binarySeach_recur(arr, target, mid + 1, right)
    }
}
console.log(binarySeach_recur([1, 3, 5, 6, 9, 10], 10));