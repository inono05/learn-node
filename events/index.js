const e = require('events');
const emitter = new e.EventEmitter();

//register a listener
emitter.on('login', (name) => {
    console.log(`${name} has logged in`);
})

//fire an event
emitter.emit('login', 'John Doe');