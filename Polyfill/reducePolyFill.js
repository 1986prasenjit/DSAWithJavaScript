let arr = [1, 2, 3, 4, 5, 6];

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callBack, initialValue){
       let accumulator = initialValue;
       let startIndex = initialValue === undefined ? 1 : 0;

       for(let i = startIndex; i < this.length; i++){
        accumulator = callBack(accumulator, this[i], i, this)
       }
       return accumulator
    }
}
let result = arr.myReduce((acc, curr) =>(acc + curr),0)
console.log(result);