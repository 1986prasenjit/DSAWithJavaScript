/*
    !Given the sides length of a triangle in the form of 3 integers.Check if the given triangle is equilateral or scalene or isosceles
*/

let a = 8;
let b = 8;
let c = 8;
if(a === b && b === c && a === c){
    console.log("This Equilateral triangle");
}else if(a === c && c !== b){
    console.log("This Isosceles triangle");
}else {
    console.log("This Scalene triangle")
}