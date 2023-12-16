// currying functions???

function adder(a){
    return function(b) {
        return a + b;
    };
}

const addFive = adder(5);
const addThree = adder(3);


// Use case: I need to add 101 with addFive;
addFive(101);
addThree(101);

// Use case: I need to add 233 with addFive;
addFive(233);
addThree(233);



// Theme Provider
const colours = {
    "dark": {
        "primary": "black",
        "warning": "yellow",
        "alert": "gray"
    }, 
    "light": {
        "primary": "white",
        "warning": "orange",
        "alert": "red"
    }
};

function getTheme(theme) {
    return function(colour) {
        return colours[theme][colour];
    }
} 

const darkTheme = getTheme('dark');
const darkAlert = darkTheme('alert');

const primaryDark = getTheme('dark')('primary');
const primaryLight = getTheme('light')('primary');


// infinte currying

function counter(args) {
    // write code only inside this function
    let count = 0;
    count++;
    if (args == 's') {
        return count;
    } else {
        return function inner(args) {
            count++;
            if (args == 's') {
                return count;
            } else {
                return inner;
            }
        }
    }
}

console.log(counter('s')); // 1;
console.log(counter()('s')); // 
// console.log(counter()()()()()('s'));


// build a calculator.
var calculator = (function(){
    let privateCounter = 0;
    function changeBy(value) {
        privateCounter += value;
    }

    return {
        increment: function() {
            changeBy(1); // 
        },
        decrement: function() {
            changeBy(-1);
        },
        displayValue: function() {
            return privateCounter;
        }
    }
})();

var calculator = calculator();

console.log(calculator.increment());
console.log(calculator.increment());
console.log(calculator.decrement());
console.log(calculator.displayValue());


var fn = function() {

}

fn();

// Memo function
function memoize(fn) {
    let cache = {};
    return function (n) {
        //  cache -> res -> present
        let istheInputPresent = cache[n] == undefined;
        if (istheInputPresent) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
        //  it is not  -> call the actual fn and 
        // add the res to the cache
        //then return  the result
    }
}

function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}

let efficentCalcFN = memoize(calc);
efficentCalcFN(5);
efficentCalcFN(5);
