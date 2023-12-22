const { runAlgo } = require("./lib");

console.log("before");

let amount = 100;
let priceOfOne = 20;
runAlgo(amount, cb); // make the payment


function cb(amount, cb) {
    amount = amount - priceOfOne;
    console.log("Amount: ", amount);
}

console.log("After");