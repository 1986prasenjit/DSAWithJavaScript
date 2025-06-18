/*
    Star pattern :- *
                    **
                    ***
                    ****
                    *****
*/

let numOfStars = 5;

for(let i = 0; i < numOfStars; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        row = row + " * "
    }
    console.log(row);
}