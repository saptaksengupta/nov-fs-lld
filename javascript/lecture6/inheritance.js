class Candidate {
    constructor(name){
        this.name = name;
    }

    greet() {
        console.log(`Hello world I am ${this.name}`);
    }
}

// class User extends Candidate {
// // empty classs
// }

// let u1 = new User("asdasd");
// console.log(u1.greet());

let c1 = new Candidate("Sachin");
console.log(c1.greet());


// Prototypal inheritance
var candidate = {
    fly: true,
    canTalk: function() {
        return "Sorry I can't talk!"
    }
}


var u1 = {
    canCook: "true",
    canCode: function () {
        return "No I can't"
    }, 
    __proto__: candidate
};
console.log(u1.__proto__);
console.log(u1.canTalk());
console.log(u1.canCode());


// constructor function.
function User (name, age) {
    this.name = name;
    this.age = age;
}

var u1 = new User("asda", 12);
var u2 = new User("asdasopipaosd", 62);
console.log(u1);
console.log(u1.name);
console.log(u2.name);