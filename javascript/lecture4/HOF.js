const arr = [1, 2, 3, 4, 5, 6, 7];

// get all the even number out of it;
const isEven = (number) => {
    return number % 2 === 0;
}

const isOdd = (number) => {
    return number % 2 !== 0;
}


// map, reduce, find... 
const evenNumbers = arr.filter(isEven);
const oddNumbers = arr.filter(isOdd);
console.log(evenNumbers);
console.log(oddNumbers);