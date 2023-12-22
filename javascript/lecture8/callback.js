let fs = require("fs");

// console.log("Before");

// // file path (relative)
// // callback
// fs.readFile("./f1.txt", function(err, data) {
//     if (err) {
//         console.log("Error in reading file!");
//     } else {
//         console.log(data.toString());
//         fs.readFile("./f2.txt", function(err2, data2) {
//             if (err) {
//                 console.log("Error in reading file 2");
//             } else {
//                 console.log(data2.toString());
//                 fs.readFile("./f3.txt", function(err3, data3) {
//                     if (err) {
//                         console.log("Error in reading file 3");
//                     } else {
//                         console.log(data3.toString());
//                     }
//                 });
//             }
//         });
//     }
// });

// console.log("After");

fs.readFile("./f1.txt", f1cb);
function f1cb(err, data) {
    if (err) {
        console.log("Error in reading file1");
    } else {
        console.log(data.toString());
        fs.readFile("./f2.txt", f2cb);
    }
}
function f2cb(err, data) {
    if (err) {
        console.log("Error in reading file2");
    } else {
        console.log(data.toString());
        fs.readFile("./f3.txt", f3cb);
    }
}
function f3cb(err, data) {
    if (err) {
        console.log("Error in reading file3");
    } else {
        console.log(data.toString());
    }
}


// IOC -> Inversion of control
// library function
function someAsynFunc(path, cb) {
    if (data) { // based on certain conditions
        // after executing some other thing
        cb(1, 2);
        cb(1, 2);
        cb(1, 2);
        cb(1, 2);
        cb(1, 2);
    }
}

function myCallBack() {
    console.log("I am in callback");
}

someAsynFunc("Mypath", myCallBack);


