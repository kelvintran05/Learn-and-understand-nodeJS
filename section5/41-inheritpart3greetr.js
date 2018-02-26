// to use ES6 classes
'use strict';


// require (use) node core modules events and util
var EventEmitter = require('events');

// create function constructor using ES6 classes
// use extends to add inheritence

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello World!";
    }
    
    // the new ES6 class way of writing prototypes
    greet(data) {
        console.log(this.greeting + ': ' + data);
        // use a method and property from the EventEmitter that we inherited
        // the emit method invokes the greet listener (greeter1.on)
        this.emit('greet', data);
    }
}