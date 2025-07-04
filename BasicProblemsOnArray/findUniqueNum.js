/* 
Problem
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples
Input: nums = [2, 2, 1] → Output: 1
Input: nums = [4, 1, 2, 1, 2] → Output: 4
Input: nums = [1] → Output: 1
Constraints
1 ≤ nums.length ≤ 3 × 104
-3 × 104 ≤ nums[i] ≤ 3 × 104
Each element appears twice except one that appears only once.
*/


//Brute force approach
/*
function singleNumber(nums){
    //to store the values of nums for the comparision
    let hash = {};

    //loop through the nums array and store the result
    for(let i = 0; i < nums.length; i++){

        //if the hash[nums[i]] appears for the 1st time so make the count of the hash[nums[i]] to 1
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }
        //if the number is present just increase the count of that particular hash[nums[i]]
        else {
            hash[nums[i]]++;
        }
    }
    //then check with the Loop which hash[nums[i]] has appreaed only once 
    for(let i = 0; i < nums.length; i++){

        //check which hash[nums[i]] appeared only once and return that nums[i]
        if(hash[nums[i]] === 1){
            return nums[i]
        }
    }
}
*/

//optimise approach
function singleNumber(nums){
    let xorValue = 0;
    for(let i = 0; i < nums.length; i++){
        xorValue = xorValue ^ nums[i]
    }
    return xorValue;
}
let result = singleNumber([4, 1, 2, 1, 2, 4, 6]);
console.log(result);