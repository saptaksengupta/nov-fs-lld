let myNumbers = new Set([10, 20, 30]);

console.log(myNumbers);
myNumbers.add(10);
console.log(myNumbers);
myNumbers.add(40).delete(20);
console.log(myNumbers);


let m1 = new Map();

m1.set("prop1", 123213);
m1.set("prop2", 123213123);
m1.set(12, "foo");
console.log(m1.has("prop1"));
console.log(m1.get("prop1"));
console.log(m1.get(12));


