function runAlgo(amount, cb) {
    console.log("running ml algo!");
    console.log("processing payment");

    setTimeout(function() {
        console.log("Payment done!");
        cb();
        cb();
        cb();
    }, 1000);
}

module.exports = {
    runAlgo
}