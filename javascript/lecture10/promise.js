// const fs = require('fs');

// const promise = fs.promises.readFile("./f1.txt");


// promise.then(function(resp){
//     console.log(resp.toString());
// });

// promise.then(function(resp){
//     console.log(resp.toString() + "I am adding some extra string here!"); //
// });

// promise.catch(function(err){
//     console.log(err.message);
// });

// const scb = function(resp){
//     console.log(resp.toString());
// }

// const fcb = function(err) {
//     console.log(err.message);
// }

// const finallyCb = function() { // no parameter...
//     console.log("I am finally block!");
// }


// promise.then(scb).catch(fcb);

// // .then(successCallback, errCallback);
// promise.then(scb, fcb);

// promise.then(null, fcb);
// promise.catch(fcb);
// promise.finally(finallyCb);


const pResolve = Promise.resolve("Resolved it!");
pResolve.then(function(value) {
    console.log(value);
});


const pReject = Promise.reject("Rejected!");

pReject.catch(function(err) {
    console.log(err);
});


pReject.then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.log(err);
});;


