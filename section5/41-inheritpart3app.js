// to use ES6 classes
'use strict';

var Greetr = require('./greetr.js');

// create new object

var greeter1 = new Greetr();

// because has access to EventEmitter we can use 'on' to listen for the greet event

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
})

// manually trigger the greet event by calling the greet function
// and pass data

greeter1.greet('Emma');