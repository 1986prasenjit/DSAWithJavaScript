/*
    !Write a FOR Loop which will print a 3 x 3 grid Star.
    *example:-- * * *
                * * *
                * * *
*/
for(let row = 1; row <= 4; row++){
    let str = "";
    for(let col = 1; col <= 4; col++){
        str += " * "
    }
    console.log(str);
}
