// input -> nested array 
var input = [1, 2, 3, 4,
    [4, 6, 5,
        [7, 8],
        9]
    , 10
];
// output -> Single level array 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function flattern (srcArr) {
    const resultArr = [];
    for (let i = 0; i < srcArr.length; i++) {
        if (Array.isArray(srcArr[i])) {
            // then hndle it with recursion
            const smallerFlatArr = flattern(srcArr[i]);
            resultArr.push(...smallerFlatArr);
        } else {
            resultArr.push(srcArr[i]);
        }
    }

    return resultArr;
}

console.log(flattern(input));


// HW: flattern this object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}

// {
//     firstName: 'John',
//     lastName: 'Doe',
//     address.street: 'North 1st street',
//     address.city: 'San Jose',
//     address.state: 'CA',
//     ..etc
// }
