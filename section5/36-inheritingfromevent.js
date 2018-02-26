// require (use) node core modules events and util
var EventEmitter = require('events');
var util = require('util');

// create own function constructor
function Greetr() {
    this.greeting = 'Hello World!';
}

// use util.inherits to say that any objects 
// created from the function construction should also have access 
// to the methods and properties from EventEmitter

util.inherits(Greetr, EventEmitter);

// We then add our own methods and properties
// we can also pass data -> (data)

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    // use a method and property from the EventEmitter that we inherited
    // the emit method invokes the greet listener (greeter1.on)
    this.emit('greet', data);
}

// create new object

var greeter1 = new Greetr();

// because has access to EventEmitter we can use 'on' to listen for the greet event

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
})

// manually trigger the greet event by calling the greet function
// and pass data

greeter1.greet('Emma');