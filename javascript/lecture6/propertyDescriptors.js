// "use strict"

const obejct1 = {};
// params: obj, propName, options
// options: value, writable, enumurable, configurable
// Object.defineProperty(obejct1, 'prop1', {
//     value: 25,
//     writable: false
// });

// obejct1.prop1 = 35; // silently failing in case of no strict mode. 
// console.log(obejct1); 

// Object.defineProperty(obejct1, 'prop1', {
//     value: 25,
//     writable: false,
//     enumerable: false
// });

// for(key in obejct1) {
//     console.log(key); //
// }   

// configurable
Object.defineProperty(obejct1, 'prop1', {
    value: 25,
    configurable: false
});

// obejct1.prop1 = 667;

console.log(obejct1);

obejct1.prop2 = "Something";
// object as param
Object.preventExtensions(obejct1);
// delete obejct1.prop2;
// obejct1.prop3 = "Something else";

console.log(obejct1);


// [Seal] 
// Object.seal(..) creates a "sealed" object, 
// which means it takes an existing object and 
// essentially calls Object.preventExtensions(..) on it, 
// but also marks all its existing properties as `configurable:false`.
// So, not only can you not add any more properties, 
// but you also cannot reconfigure or delete any 
// existing properties (though you can still modify their values).

// Object.seal(obejct1);
// obejct1.prop2 = "sadadas";
// obejct1.prop4 = "sadadas"; // won't work
// console.log(obejct1);


// [Freeze]
// Object.freeze(..) creates a frozen object, 
// which means it takes an existing object and 
// essentially calls Object.seal(..) on it, 
// but it also marks all "data accessor" 
// properties as writable:false, so that their values cannot be changed.
// Object.freeze(obejct1);
// obejct1.prop2 = "asdasda";


