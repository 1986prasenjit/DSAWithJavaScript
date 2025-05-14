/*
    Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
*/
function checkPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1)){
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("Hello"));

//!DRY RUN OF THE ABOVE PROBLEM 

/*
    !Let's walk through the function step-by-step using the input string "Racecar". The goal of the function is to check if the input string is a palindrome, which means it reads the same backward as forward. At the beginning of the function, the input string "Racecar" is converted to lowercase using str.toLowerCase(), resulting in "racecar". This is done to make the comparison case-insensitive, so that uppercase and lowercase letters are treated as equal. Now we need to compare characters from the beginning and end of the string moving toward the middle. To do this, we use a for loop that runs from i = 0 up to i < str.length / 2. The reason we only go halfway through the string is because each character on the left side has a corresponding character on the right side that it needs to match with. If all these matching pairs are equal, the string is a palindrome. Once we pass the halfway point, we’d just be repeating the same comparisons in reverse, which is unnecessary.

    !Within the loop, for each i, we compare str.charAt(i) (which is the i-th character from the start) with str.charAt(str.length - i - 1) (which is the i-th character from the end). This might be a bit confusing at first, so let’s break it down: str.length gives the total number of characters in the string, and since indexing starts at zero, the last character is at str.length - 1. So when i = 0, we compare the first character str.charAt(0) with the last character str.charAt(str.length - 0 - 1) which simplifies to str.charAt(str.length - 1). When i = 1, we compare the second character from the start with the second character from the end, i.e., str.charAt(1) with str.charAt(str.length - 2), and so on. This pattern ensures that we compare mirror positions in the string.

    !Now let’s walk through a dry run of the function with "Racecar" step by step. After converting to lowercase, we have "racecar". The string has 7 characters, so str.length is 7. The loop will run for i = 0 to i < 3.5, which means it will run for i = 0, 1, 2 (since we can't use half indexes and loops compare using <). When i = 0, we compare str.charAt(0) which is 'r' with str.charAt(6) which is also 'r'. They match, so we move to the next iteration. When i = 1, we compare str.charAt(1) which is 'a' with str.charAt(5) which is 'a'. Again, they match. On i = 2, we compare str.charAt(2) which is 'c' with str.charAt(4) which is 'c'. This also matches. Since we have reached the midpoint of the string and all corresponding characters matched, the function concludes that the string is a palindrome and returns true.

    !Now to answer your questions in summary: The reason we use str.length / 2 in the loop is because a palindrome check only requires comparing the first half of the string with the second half, since every character in the first half has a mirror character in the second half. Comparing beyond the midpoint would just be redundant. The reason we use str.charAt(str.length - i - 1) instead of str.charAt(str.length - 1) is because we don’t want to keep comparing to the same last character — we want to compare to characters moving backward from the end of the string. The expression str.length - i - 1 dynamically calculates the position of the character that mirrors the one at index i. If we only used str.length - 1, we would always compare with the last character, which would break the logic entirely and only compare one pair repeatedly.
*/