//Q1
// const promise1 = Promise.reject("Some error");
// promise1.catch(function (err) {
//     console.log("78");
//     console.log("error", err);
// })

// promise1.then(function () {
//     console.log("83", err);
// }).catch(function (err) {
//     console.log("85", err);
// })

// promise1.then(function (data){
//     return "Resolved";
// }, function (err) {
//     console.log("90", err); 
// }).then(function (err) {
//     console.log("92", err);
// });

// OP:
// 78
// error Some error
// 90 Some error
// 85 Some error
// 92 undefined

// Q2
var fs = require('fs');

// let promise = Promise.resolve(10);
// promise.then(function(data){
//     console.log("92", data); // 92 10
// }).then(function(firstThenVal) {
//     console.log("113", firstThenVal); // 113 undefined
//     return 100;
// }).then(function(secondThenVal){
//     console.log("116", secondThenVal); // 116 100
//     return fs.promises.readFile("./f1.txt"); 
// }).then(function(thirdVal){
//     console.log("120", thirdVal); // 120 file content
// });


// OP
// 92 10
// 113 undefined
// 116 100
// 120 <Buffer 49 20 61 6d 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 21>


// Q3
// let promise = Promise.reject(10);
// promise
//     .catch(function (data) {
//         console.log("92", data); // 92 10
//         return "hello";
//     }).then(function (firstThenVal) {
//         console.log("113", firstThenVal); // 113 hello
//         return 100;
//     }).then(function (secondThenVal) {
//         console.log("116", secondThenVal); // 116 100
//         return fs.promises.readFile(".f1.txt");
//     }).catch(function (thirdThen) {
//         console.log("120", thirdThen);
//         throw new Error("error");
//     }).then(function (firstThenVal) {
//         console.log("115", firstThenVal); // 115 file content
//         return 100
//     })
//     .catch(err=>{
//         console.log("150", err);
//     })


//     /***
//  * catch -> if it is reciving a rejected value/ error -> it will take it 
//  * then -> then will completely ignored 
//  * and vice versa 
//    * /



// OP if file path is correct 
//     92 10
// 113 hello
// 116 100
// 115 <Buffer 49 20 61 6d 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 21>



// OP: if file path is not correct
// 92 10
// 113 hello
// 116 100
// 120 [Error: ENOENT: no such file or directory, open '.f1.txt'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: '.f1.txt'
// }
// 150 Error: error;


let promise = Promise.reject(10);
promise
    .then(function (data) {
        console.log("92", data); // 92 10
        return "hello";
    })
    .finally(function (data) {
        console.log("117", data); // 117 undefined
        throw new Error("i am an error");
    })
    .catch(function (err) {
        console.log("113", err.message); // 113 I am an error
        return 100;
    })
    .finally(function (data) {
        console.log("118", data); // 118 undefined
    })
    .then(function (secondThenVal) {
        console.log("116", secondThenVal); // 116 100
        return fs.promises.readFile("./f1.txt");
    }).then(function (thirdThen) {
        console.log("120", thirdThen); // 120 file content
    }).catch(function (firstThenVal) {
        console.log("113", firstThenVal);
        return 100
    })
    .finally(function (data) {
        console.log("118", data); // 118 undefined
    })


//     NOTE: 
//      /**
//  * 1.finally -> do not take anything 
//  * 2.for values and promises -> it does not returns anything / and neither take anything
//  * 3.Rejection -> goes to catch -> and give it the error/ rejection
//  * 
//  * **/ 


    // OP: 
//     117 undefined
// 113 i am an error
// 118 undefined
// 116 100
// 120 <Buffer 49 20 61 6d 20 74 68 65 20 66 69 72 73 74 20 66 69 6c 65 21>
// 118 undefined


    // let prom1 = Promise.reject(10);

    // prom1.finally(function() {
    //     console.log("finally");
    // }).catch(function(err){
    //     console.log(err);
    // });