// var name = "learner";
// function greet() {
//     console.log("Hello");
// }


import {greet, PI} from "./utils.js"

console.log(greet("Saptak"));

console.log(`The value of PI is: ${PI}`)

import mul from "./utils.js";
import MyStudent from "./Student.js";

console.log(mul(2, 3));

const stu1 = new MyStudent("Saptak", "Sengupta");
stu1.printName();
stu1.isAuthenticated();