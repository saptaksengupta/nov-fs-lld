console.log("Before");

function fn() {
    console.log("I am fn!");
}

setTimeout(fn, 0); // is it a JS thing?

console.log("after");


function testCb() {
    console.log("asdasd");
}

function foo(cb) {
    cb();
}

foo(testCb);// 

// Q1
// let a  = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop!");
// }, 1000);

// console.log("after");

// while(a) {

// }

// Q2.
// console.log("Before"); // 1

// const cb2 = () => {
//         console.log("Set timeout 1"); // 3
//         while(1){

//         }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000) // 1s

// setTimeout(cb1, 2000) // 2s

// console.log("After"); // 2

// Q3

console.log("Before"); //1 

const cb2 = () => {
        console.log("Set timeout 1"); // 3 after 1 sec
        let timeInFuture = Date.now() + 5000; 
        while(Date.now() < timeInFuture){

        }
}

const cb1 = () => console.log("hello"); // hello after 6 secs 

setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

console.log("After"); //2 