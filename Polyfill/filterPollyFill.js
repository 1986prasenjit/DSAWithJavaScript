let arr = [20, 3, 50, 7, 88, 90, 55, 75, 33, 95];

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFunc){
        let newArray = [];
        for(let i = 0; i < this.length; i++){
            if(userFunc(this[i])){
                newArray.push(this[i])
            }
        }
        return newArray;
    }
}

let result = arr.myFilter((num)=> num % 2 !== 0);

console.log(result);

console.log(arr);