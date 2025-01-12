/*
async function buildTunnel() {
    console.log("Start digging the tunnel...");

    // The builder takes some time to dig the tunnel
    const result = await new Promise((resolve) => {
        setTimeout(() => resolve("Tunnel is done! 🚀"), 3000); // Pretend it takes 3 seconds
    });

    console.log(result);  // "Tunnel is done!"
    console.log("Let's go through the tunnel now!");
}

// You start the tunnel-building and then go play!
buildTunnel().then(r => console.log("Tunnel built!"));
console.log("Playing with friends while waiting for the tunnel...");
*/


//
function delayFn(time) {
    return new Promise((resolve) => setTimeout(() => resolve(), time));
}

async function delayGreenLight(name){
    await delayFn(2000);
    console.log(`Green light for ${name}`);
}

delayGreenLight('John Doe').then(() => console.log("Go!"));

//
async function dividedFn(num1, num2){
    return new Promise((resolve, reject) => {
        if(num2 === 0){
            reject("Cannot divide by zero");
        } else {
            resolve(num1 / num2);
        }
    })
}

dividedFn(10, 0)
    .then(result => console.log(result))
    .catch(error => console.error(error));