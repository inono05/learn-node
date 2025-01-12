const fs = require('fs');
function person(name, callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
}

person('John Doe', () =>{
    console.log('I am a callback function');})

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error: " + err);
    } else {
        console.log(data);
    }
});