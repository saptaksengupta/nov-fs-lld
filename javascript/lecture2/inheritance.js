const obj1 = {
    foo: 6
}

console.log(obj1);

const arr = [1, 2, 4, 4];
console.log(arr.length);

arr.pop();
console.log(arr);

const str = "I am a String";
console.dir(String(str));
console.log(str.indexOf("I"));

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const sumUtil = function sum() {
    var sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    return sum;
}

Array.prototype.sum = sumUtil;

console.log(arr2); //
console.log(arr1.sum()); //
console.log(arr2.sum()); //

arr1.length;
arr2.length;