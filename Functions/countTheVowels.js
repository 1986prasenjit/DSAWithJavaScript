/*
    Function `countVowel()` returns the number of vowels in input string.
*/

function countVowel(str){
    str = str.toLowerCase();
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u"){
            count++;
        }
    }
    return count;
}
console.log(countVowel("aeroplane"));