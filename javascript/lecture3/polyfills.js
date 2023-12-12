// cal
// func.call();
// func2.myCall();

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


// s1: creating a new func into that object (ironMan);
// s2: call the function.
// s3: remove it.
// ironMane.petersTeam() // ?????/

Function.prototype.myCall = function(context, ...args) {
    const fnInstance = this;

    // creating and attaching the function
    // ironman.petersTeam = petersTeam;
    context.func = fnInstance;

    // calling the function
    // ironMan.petersTeam();
    context.func(...arguments);    

    //removing the function from the context
    // removing ironMan.petersTeam;
    delete context.func;

}

cap.petersTeam.myCall(ironMan, "John", "Mike"); 

// SomeOtherFunc.myCall();

// Polyfill of bind...
// It can be easily built with the help of call or apply.
Function.prototype.myBind = function(context) {
    // this ?? functionInstance
    const funcInstnce = this;  
    return function(...args) {
        // this will be executed ....
        funcInstnce.call(context, ...args);
    }
}

const bindedFn = cap.petersTeam.myBind(ironMan);
bindedFn("John", "Mike");
bindedFn("John1", "Mike1");
bindedFn("John2", "Mike2");
// bindedFn();
// bindedFn();
// bindedFn();

// bindedFn("John", "mike");