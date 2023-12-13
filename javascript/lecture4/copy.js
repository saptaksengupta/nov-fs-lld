var a = 5;
var b = a;
b = 10;
console.log(a); // ?


// Shallow Copy.
var foo = {
    a: 5
};

var bar = foo;
bar.a = 10;

console.log(foo.a);

// 
// let objectVariable = {...objectValue};

var foo = {
    name: "Saptak",
    address: {
        city: "Kolkata",
        currentAddress: "Bengaluru",
        houseDetails: {
            number:2, 
            floor: 1
        }
    }
}

var bar = {...foo};
bar.name = "Scaler";
bar.address.city = "Bengaluru";

console.log(foo.name); // 
console.log(bar.name); //


console.log(foo.address.city); // 
console.log(bar.address.city); //


// Shallow copy using object assing method...
// It will act as same as spread operator
// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//    },
// };

// // Object.assign(target, source);
// var copiedObj = Object.assign({}, person);
// copiedObj.firstName = "Odison";
// copiedObj.address.street = "South 1st street";

// console.log(person);
// console.log(copiedObj);


// Deep Copy
// recursive iteration
// JSON parse and stringify

//JSON approach
var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
   },
};

var copiedObj = JSON.parse(JSON.stringify(person));

console.log(JSON.stringify(person));
copiedObj.firstName = "Odison";
copiedObj.address.street = "South 1st street";

console.log(person);
console.log(copiedObj);


// Polyfill of deep copy.
var person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
   },
   arr: [1, 10, 34, 2]
};

var deepClone = function(value) {
    if (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'function'
    ) {
        return value;
    } else if (Array.isArray(value)) { // for array
        return value.map((elem) => {
            deepClone(elem);
        });
    } else if (typeof value === 'object') {
        const keys = Object.keys(value); // ['street', 'city', 'country', 'state']
        const obj = {};
        return keys.map(key => obj[key] = deepClone(value[key]));
    } 
    // else if (typeof value === 'object') {
    //     return Object.keys(value).reduce((acc, key) => {
    //         acc[key] = deepClone(value[key]);
    //     }, {}); 
    // }
};

var copiedObject = deepClone(person);
copiedObj.address.city = "Texus";
console.log("Source: ", person);
console.log("Deep copied: ", copiedObj);



