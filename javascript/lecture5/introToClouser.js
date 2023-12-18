function outerFunction() {
    let count  = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}

// increment();
// increment();

const inFn = outerFunction(); // getting a refrence 
console.log(inFn()); //1 // it is pushed into call stack and EC is created.
console.log(inFn()); //2
console.log(inFn()); //3
console.log(inFn()); //4
console.log(inFn()); //5


function createCounter(int, delta) {
    function count() {
        int = int + delta;
        return int;
    }
    return count;
}

let c1 = createCounter(10, 5); 
let c2 = createCounter(5, 2);

c1();
c2();
c1();
c2();


