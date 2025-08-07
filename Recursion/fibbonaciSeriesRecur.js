function fib(n){
    //base case
    if( n <= 1 )return n;

    //recursive call
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(10));