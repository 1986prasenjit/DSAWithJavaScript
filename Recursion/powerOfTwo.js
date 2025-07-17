function powerOfTwo(n){
    //base case
    if(n === 1) return true;

    //condition
    if((n % 2 !== 0) || n < 1) return false;

    //recursive call
    return powerOfTwo(n / 2)
}
console.log(powerOfTwo(16));