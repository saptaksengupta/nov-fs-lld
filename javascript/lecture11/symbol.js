const string1 = "Hello";
const string2 = "Hello";

console.log(string1 === string2); 

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);

const symbol1 = Symbol("description"); // 535
const symbol2 = Symbol("description"); // 454

console.log(symbol1);
console.log(symbol2);

const person = {
    name: "Learner",
    age: 30,
    [symbol1]: "A person"
}

console.log(person[symbol1]); 
console.log(person[symbol2]); 
