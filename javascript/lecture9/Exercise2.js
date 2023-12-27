// Suppose that you need to perform three asynchronous operations in the following sequence:

// Select a user from the database.
// Get services of the user from an API.
// Calculate the service cost based on the services from the server

// MOCK API
function getUser(userId){
    return new Promise((res, rej) => {
        setTimeout(function() {
            if (userId === "123"){
                res({
                    id: 123, 
                    name: "Saptak",
                    age: 50,
                    gender: "M"
                });
            } else {
                rej("User not found");
            }
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            if (user.name === "Saptak") {
                res(["BeardShaving", "BodyMassage"]);
            }
        }, 1000);
    })
}

function getServicesCost(services) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            let cost = 0; 
            if (services.includes("Haircut")){
                cost += 100;
            } 

            if (services.includes("HairSpa")){
                cost += 200;
            }

            if (services.includes("BodyMassage")){
                cost += 300;
            }

            if (services.includes("Shampoo")){
                cost += 150;
            }

            if (services.includes("BeardShaving")){
                cost += 120;
            }

            res(cost);

        }, 1000);
    })
}


// getUser("123")
// .then(user => getServices(user))
// .then(services => getServicesCost(services))
// .then(totalCost => console.log("The cost is: ", totalCost));


async function getTotalCost(userId) {
    const user = await getUser(userId);
    const service = await getServices(user);
    const cost = await getServicesCost(service);

    return cost;
}

async function printResult () {
    try {
        const cost = await getTotalCost("12");
        console.log(cost);
    } catch(err) {
        console.log(err);
    }
}

printResult();


