/*
    Number Pattern :- 1 2 3 4 5
                      1 2 3 4
                      1 2 3 
                      1 2
                      1  
*/

/*
// 1st approach
let n = 5;

for(let i = n; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i; j++){
        row = row + " " + j;
    }
    console.log(row);
}
*/

//2nd approach

let n = 5;

for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 1; j <= n - i; j++){
        row = row + " " + j
    }
    console.log(row);
}