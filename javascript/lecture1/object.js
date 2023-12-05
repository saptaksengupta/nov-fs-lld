// JSON: Javascript Object notaion
var a = {
    age: 10,
    name: "Saptak",
    isMarried: false,
    placesVisit: ["Kolkata", "Bengaluru"],
    sayHi: function() {
        console.log("Hi from my side!");
    },
    address: {
        area: "asdad",
        houseNumber: 67
    }
};

console.log(a);
console.log(a.sayHi());
console.log(a.address.houseNumber); "dot"
console.log(a['address']['houseNumber']); "square bracket"
