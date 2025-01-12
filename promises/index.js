const bakeCookies = new Promise((resolve, reject) => {
    const cookiesAreReady = true; // Imagine this is like checking the oven
    if (cookiesAreReady) {
        resolve("Cookies are ready! 🍪");
    } else {
        reject("Oh no, the cookies burned! 😢");
    }
});

// What happens when the Promise is done
bakeCookies
    .then(message => {
        console.log(message); // "Cookies are ready! 🍪"
    })
    .catch(error => {
        console.error(error); // "Oh no, the cookies burned! 😢"
    });


//
function delayFn(time){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    })
}

console.log("Promise Started");
delayFn(2000).then(() => console.log('Next step after 2 seconds'));
console.log("Promise Finished");

//
function dividedFn(num1, num2){
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