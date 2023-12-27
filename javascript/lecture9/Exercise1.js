const doubleAfterOneSec = function(number) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            res(number * 2);    
        }, 1000);
    });
}

// doubleAfterOneSec(10).then(d1 => {
//     return doubleAfterOneSec(20).then(d2 => {
//         return doubleAfterOneSec(30).then(d3 => {
//             console.log(d1 + d2 + d3);
//         });
//     })
// })


// const calculateSum = async function() {
//     try {
//         var res1 = await doubleAfterOneSec(10);
//         var res2 = await doubleAfterOneSec(20);
//         var res3 = await doubleAfterOneSec(30);
//         return res1 + res2 + res3;
//     } catch (err) {
//         console.log(err);
//     }
// };

// calculateSum().then(resp =>{
//     console.log(resp);
// });

async function calculateSumDependant (x) {
    const a = await doubleAfterOneSec(x);
    const a2 = await doubleAfterOneSec(a);
    const a3 = await doubleAfterOneSec(a2);

    return a + a2 + a3;
}

calculateSumDependant(10).then(resp => {
    console.log(resp);
})



