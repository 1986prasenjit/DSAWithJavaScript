let arr = [1,2,3,4,5];


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callBack){
            let newArr = [];
            for(let i = 0; i < this.length; i++){
                let value = callBack(this[i],i);
                newArr.push(value);
            }
            return newArr
    }
}

let result = arr.myMap((item, index)=> item * 2);

console.log(result);