/*
    Write a function that takes a string as input and returns the numbers of words in the sentence that starts with a vowel.The Program should use a function to perform the Calculation.
*/

function countTheVowels(str){
    str = str.toLowerCase()
    let count = 0;
    let vowels = ["a","e","i","o","u"];
    for(let i = 0; i < str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;

}
console.log(countTheVowels("I am A Good Boy"))