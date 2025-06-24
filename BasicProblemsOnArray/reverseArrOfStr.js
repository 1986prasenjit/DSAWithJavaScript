/*
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

Examples:
Example 1:


Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
  
Example 2:


Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
  
Approach: Two Pointer Technique
Initialize two pointers, one at the start and one at the end of the array.
Swap the characters at both pointers.
Move the pointers towards the center until they meet.
*/
 function reverseStr(s){
    let length = s.length;
    let halflen = Math.floor(length / 2);
    for(let i = 0; i < halflen; i++){
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    return s;
 }

 let arr = ["h","e","l","l","o"];

 let result = reverseStr(arr);

 console.log(result);



















/*
Dry Run

Input: s = ["h", "e", "l", "l", "o"]
len = 5, halfLen = 2

i = 0 → swap s[0] and s[4] → ["o", "e", "l", "l", "h"]
i = 1 → swap s[1] and s[3] → ["o", "l", "l", "e", "h"]

Result: ["o", "l", "l", "e", "h"]
  
Complexity
Time: O(N)
Space: O(1)
*/