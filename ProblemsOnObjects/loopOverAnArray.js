/*
    Iterate over an object’s properties using a for...in loop and print key-value pairs. (Medium)
*/

let userObj = {
    name:"Ram",
    age:25,
    address:"Kolkata"
}

for(let key in userObj){
    console.table(`${key} : ${userObj[key]}`)
}