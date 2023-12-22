const fs = require("fs");

console.log("before");
// fs.readFile()
// const promise = fs.promises.readFile("./f1.txt");
// console.log(promise);
// console.log("after");

// setTimeout(() => {
//     console.log("I am after the file read");
//     console.log(promise);
// }, 3000);


// const promise = fs.promises.readFile("./f1a.txt");
// promise.then(function(data) {
//     console.log(data.toString()); 
// });

// promise.catch(function(err) {
//     console.log("Error in reading file");
// });
// console.log("after");


const promise = fs.promises.readFile("./f1.txt");

promise.then(function(data1) {
    console.log("Content 1", data1.toString());
    return fs.promises.readFile("./f2.txt");
}).then(function(data2){
    console.log("Content 2", data2.toString());
    throw Error("Form 2");
    return fs.promises.readFile("./f3.txt");
}).then(function(data3){
    console.log("Content 3", data3.toString());
}).catch(function(err){
    console.log(err.message);
});

// fs.readFile("./f1.txt", function(err, data) {}




const customPromise = promReadFile("./faa1.txt");


// consuming my own promise.
customPromise.then(function(data){
    console.log(data);
}).catch(function(err) {
    console.log(err);
})

function promReadFile(filePath) {
    // what we are going to return?
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, function(err, data){
            if (err) {
                reject("I am rejecting!");
            } else{
                resolve(data.toString());
            }
        })
    });
}