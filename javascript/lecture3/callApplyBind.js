// call -> Borrow features
let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function (param1, param2) {
        console.log(
            `He ${this.name} am 
        your neighborhood spirderman and 
        I belong to ${this.team}s with 
        members ${param1} and ${param2}`
        );
    }
};

let ironMan = {
    name: "Tony", 
    team: "Iron Man"
}

// cap.petersTeam("John", "Mike");
// First Prameter is always a context to attach and the params...
cap.petersTeam.call(ironMan, "John", "Mike"); 
console.log(ironMan);

// Apply...
cap.petersTeam.apply(ironMan, ["John", "Mike"]); 

//Bind
const bindedFn = cap.petersTeam.bind(ironMan);
bindedFn("John", "Mike");
bindedFn("John1", "Mike1");
bindedFn("Joh2", "Mik2");
bindedFn("Joh3", "Mik3");


