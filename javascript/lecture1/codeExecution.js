// JS Code execution
// Lexical scope

var a = 10;
function fn() {
    console.log("I am fn!");
    function inner() {
        var inm = 109;
        console.log("I am inner!"); 
    }
    inner();
}

fn(); // invoking -> get call stack entry 

// var a = 10;
// console.log(a);

function real() {
    console.log("I am real. Always run me");
}
function real() {
    console.log("No I am real one ");
}
real();
function real() {
    console.log("You both are wasted");
}