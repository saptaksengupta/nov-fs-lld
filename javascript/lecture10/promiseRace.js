// takes array of promises
// return the promise which setlled first. 
// Be it resolved, be it rejected. 

function sleep(time, value, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfill") {
          return resolve(value);
        } else {
          return reject(new Error(value));
        }
      }, time);
    });
  }

//   const p1 = sleep(400, "one", "fulfill");
//   const p2 = sleep(100, "two", "rejected");

//   Promise.race([p1, p2]).then(value => {
//     console.log(value);
//   }).catch(err => {
//     console.log(err.message);
//   });

  const p3 = sleep(500, "three", "fulfill");
  const p4 = sleep(100, "four", "rejected");

  Promise.race([p3, p4])
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));