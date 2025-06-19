/*

        Star pattern :-             *
                                  * *
                                * * *
                              * * * *
                            * * * * *

*/

let n = 5;
for(let i = 1; i <= n; i++){
    let row = "";
    //this j Loop is for spaces
    for(let j = 1; j <= n - i; j++){
        row += " "
    }
    //this k loop is for star
    for(let k = 1; k <= i; k++){
        row += "*"
    }
    console.log(row);
}

