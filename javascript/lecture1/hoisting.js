// console.log(a);
// var a = 10;

// console.log(foo);
// // function foo() {
// //     console.log("I am foo");
// // }


// // foo(); '' I dont know it's a function
// var foo = function() {
//     console.log("I am foo");
// }

// foo(); // it will work;

// function foo() {

// }


// // IIFE => Immidiatly invoked function expression
// (function() {

// })(); 

// es6 way of declare variable;
// console.log(a);
//
//
//
// TDZ => temporal dead zone for 'a' 
// let a = 10;
// console.log(a);


// example of var

var foo = "foo";
function bar(){
    var b = 20;
    console.log(foo);
}
bar();
console.log(b);
