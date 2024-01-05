// Also takes a array of promises and returns one promise with 
// the value of the first fulfilled promise. 

// const pErr = new Promise((resolve, reject) => {
//     reject("Always fails");
// });

// const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Done eventually");
// });

const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
});

// Promise.any([pErr, pSlow, pFast]).then(value => {
//     console.log(value);
// })

const failure = new Promise((resolve, reject) => {
    reject("Always fails!");
});


// failure.catch(function(err){
//     console.log(err.message);
// });

Promise.any([failure, pFast]).then(val => {
    console.log(val);
}).catch(function(err){
    console.log(err);
});

