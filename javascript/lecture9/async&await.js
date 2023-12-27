const fs = require("fs");

// const promise = fs.promises.readFile("./f1.txt");

// promise.then((data) => {
//     console.log("Data for first file", data.toString());
//     return fs.promises.readFile("./f2.txt");
// }).then((data) => {
//     console.log("Data for Second file", data.toString());
//     return fs.promises.readFile("./f3.txt");
// }).then((data) => {
//     console.log("Data for third file", data.toString());
// }).catch((err) => {
//     console.log(err.message);
// });

// async & await 
async function sum(a, b) {
    return a + b; 
}

// console.log(sum(2,3)); 
console.log("after");

// sum(10, 3).then(resp => {
//     console.log(resp);
// }).catch(err => {
//     console.log(err.message);
// });


async function printSum() {
    const sumRes = await sum(10, 2); // code will wait here until it finished.
    console.log(sumRes + 10);
}

printSum();