// The default parameter in JS
// function fn(param1, param2, param3 = "Default") {
//     console.log("Hi, Params are: ", param1, param2, param3);
// }

// fn("Hi", "Hola", "hello"); // 
// fn("Hi", "Hola", [12, 1]); //


// let arr = [1, 2, 3, 4, 5];
// console.log(...arr);
// let arr2 = [...arr];
// console.log(arr2);


// let odd = [1, 3, 4, 5, 7];
// let even = [8, 10, 20, 46];

// let mergedArr = [...odd, ...even, 123, 5677];
// console.log(mergedArr);

// let str = "Hi I am Saptak!";
// console.log(...str);

// let nested = [1, 2, [3, 4], 5, 6];
// let arr2 = [...nested];
// arr2.push(10);
// arr2[2][1] = 300;
// console.log(nested);
// console.log(arr2);




// Rest Op
function fn(param1, param2, ...param3) {
    console.log("Params are: ", param1);
    console.log("param 2: ", param2);
    console.log("Rest params: ", param3);
}

fn("Hi", "hello", "Hola", "asdasd", "apsodaso");







