var candidate = {
    firstName: "Mathew",
    lastName: "Heyden"
}

console.log(candidate);

let b = 'Hello b';
console.log(typeof b);
console.dir(b);
console.log(b.length);

// let a = new String('Hello');
// console.log(typeof a);
// console.dir(a);

// let foo = 10;
// let foo = new Number(10);
// console.log(typeof foo);
// console.log(foo);


// Object.create(proto, propertiesOfObject);
var bar = {
    a: 5
};

var foo = Object.create(bar);
// foo.a = 10;

console.log(foo);

// 

const cricketor = {
    printInfo:  function() {
        console.log(`My name is ${this.name} and I can bat well!`);
    }
}

const c1 = Object.create(cricketor); // inheritance

// implementation
c1.name = "Sachine";

// accessing the parent
c1.printInfo();

const empty = new Object();
console.log(empty);




var test = {
    a: 10,
    b: 20,
    c: 30
};

for(k in test) {
    console.log(k, test[k]);
}

console.log(Object.keys(test));
for (var i = 0; i < Object.keys(test).length; i++) {
    console.log(Object.keys(test)[i]);
}