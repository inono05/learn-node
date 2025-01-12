const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }
    greet(name) {
       this.emit('greet', `${this.greeting} ${name}`);
    }
}

const cs = new MyCustomEmitter();
cs.on('greet', (message) => console.log(message));
cs.greet('John Doe');