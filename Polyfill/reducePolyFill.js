let arr = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callBack, initialValue){
       let accumulator;
       let startIndex;

       if(initialValue === undefined){
            accumulator = this[0];
            startIndex = 1;
       }else {
            accumulator = initialValue;
            startIndex = 0;
       }

       for(let i = startIndex; i < this.length; i++){
        accumulator = callBack(accumulator, this[i], i, this)
       }
       return accumulator
    }
}
let result = arr.myReduce((acc, curr) =>(acc + curr))
console.log(result);