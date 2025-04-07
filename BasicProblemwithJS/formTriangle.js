/*
    !given 3 integers a, b, c, check if we can form a triangle with the sides of the triangles having length a, b, and c. 
*/

let a = 1;
let b = 10;
let c = 12;

if(a + b > c && b + c > a && a + c > b){
    console.log("Yes we can form a Triangle");
}else {
    console.log("No we cannot form a Triangle");
}