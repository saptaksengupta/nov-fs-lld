const prom1 = new Promise((res, rej) => {
    setTimeout(() => {
        // console.log('Promise 1 resolve');
        res(1);
    }, 1000);
});

const prom2 = new Promise((res, rej) => {
    setTimeout(() => {
        // console.log('Promise 2 resolve');
        res({foo: "bar"});
    }, 2000);
});

const prom3 = new Promise((res, rej) => {
    setTimeout(() => {
        // console.log('Promise 3 resolve');
        res("Hello");
    }, 1500);
});


Promise.all([prom1, prom2, prom3])
.then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
})

// NOTE:
// it takes an array of promises and executes 
// all the promises all together and returns the combined result as an Promise<array>.
// it rejects immidiatly whenever any one of them get rejected.