// Object
let obj = { eng: "English", math: "Mathematics" };
// custom handler
let handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      throw new Error(`Property ${prop} does not exist`);
    }
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
      return true;
    } else {
      throw new Error("Cannot add new property" + prop);
    }
  }
};

let p1 = new Proxy(obj, handler);

console.log(p1.eng);

try {
    console.log(p1.science);
} catch(err) {
    console.log(err.message);
}

try {
    p1.history = "History";
} catch(err) {
    console.log(err.message);
}


