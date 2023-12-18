// var foo = 10;
function b() {
    console.log("in b", foo);
}

function fn() {
    var foo = 20;
    b();
    console.log(foo);
}

fn();

//
//