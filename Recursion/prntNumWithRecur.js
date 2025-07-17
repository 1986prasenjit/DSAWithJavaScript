function printNum(num){
    //Base Case
    if(num === 0)return;
    
    console.log(num);
    num = num - 1;

    //Recursive Call
    printNum(num)
}

let a = 5;
printNum(a);