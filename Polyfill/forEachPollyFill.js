let arr = [1,2,3,4,5];

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callBack){
        for(let i = 0; i < this.length; i++){
            callBack(this[i], i)
        }
    }
}


arr.myForEach((item, index)=> {
    console.log(`My For Each Loop Index Value is ${index} and Item Value is ${item} `);
})

