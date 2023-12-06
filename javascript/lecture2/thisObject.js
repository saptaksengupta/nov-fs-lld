// Host Objects 
// console.log(window); // accessing utilities
// console.log(document); // dom manupulation
// console.log(localStorage);

// console.log(window.alert(""));

// Host Object
// Objects that are provide by the environment are known as Host OBject. 
// Ex: window, document, localstorage.


console.log(this); // window obj

function fun() {
    console.log(this); // window
}
fun();// function call (wihtout object).

var obj = {
    fn: function() {
        console.log(this); // obj 
    }
}
obj.fn();// ? that function scope

// PR 1: 

// let cap = {
//     firstName: "Steve",
//     sayHi: function() {
//         console.log("Hi From:", this.firstName);
//     }
// }

// console.log(cap.sayHi()); // Method invokation
// var firstName = "Loki";
// var sayhiAdd = cap.sayHi;
// console.log(sayhiAdd()); // function call

// var cap = {
//     firstName: "Steve",
//     sayHi: function() {
//         console.log("44", this.firstName); // 
//         const iAmInner = function() {
//             console.log("46", this.firstName); // 
//         }
//         iAmInner(); // method inv / func call ?
//     }
// }
// cap.sayHi(); // method invokation




// arrow functions borrow this from parent context...
// var cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName); // 53 steve. 
//         const iAmInner = () => {
//             console.log("55",this.firstName); // what is the "this" in parent -> sayHi | 55 Steve 
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// what is parentCOntext ? sayHi()
// what is "this" value in parentContext????? 

// var cap = {
//     firstName : "Steve",
//     sayHi: () => {
//         console.log("53", this.firstName); // 53 undefined.
//         const iAmInner = () => {
//             console.log("55",this.firstName); // what is the "this" in parent -> sayHi  | undefined
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


// var firstName = "Loki";
// var cap = {
//     firstName : "Steve",
//     sayHi: () => {
//         console.log("53", this.firstName); // 53 undefined.
//         const iAmInner = () => {
//             console.log("55",this.firstName); // what is the "this" in parent -> sayHi  | undefined
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();


//? 
// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName); // this -> cap -> Steve
//         const subInner = () => {
//             console.log("54", this.firstName); // parent this -> Steve
//             const iAmInner = ()=> {
//                 console.log("55", this.firstName); // parent this -> parent this -> cap -> steve
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi(); //m inv


// let ladder = {
//     stop:0,
//     up: function(){
//         this.stop ++ ;
//     },
//     down: function(){
//         this.stop -- ;
//     },
//     showStep: function(){
//         console.log(this.stop);
//     }
// }
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 


let ladder = {
    stop:0,
    up: function(){
        this.stop ++ ;
        return this;
    },
    down: function(){
        this.stop -- ;
        return this;
    },
    showStep: function(){
        console.log(this.stop);
    }
}

// chaining.
ladder.up().up().up().down().showStep();

