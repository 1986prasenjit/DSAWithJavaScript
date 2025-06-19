/*
        Number pattern with 1 AND 0 :- 1
                                       1 0 
                                       1 0 1
                                       1 0 1 0
                                       1 0 1 0 1
                                       1 0 1 0 1 0
*/

let n = 6;

for(let i = 1; i <= n; i++){
    let row = "";
    let switchNum = 1;
    for(let j = 1; j <= i; j++){
        row = row + " " + switchNum;
        if(switchNum === 1){
            switchNum = 0
        }else {
            switchNum = 1
        }
    }
    console.log(row);
}