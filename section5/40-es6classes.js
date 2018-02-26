// javascript engine will be pickier about what it lets you use and avoids mistakes
// sometimes helps when using new features which may only be allowed if we use strict
// we need this to use ES6 classes
'use strict';

// ES6 new class

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    // new ES6 class prototype these are put on the prototype
    greet() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

// old JS constructor function which we have replaced with class
// this is how we do the same thing the old way.

function OldPerson(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

// Old JS prototype

OldPerson.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john2 = new OldPerson('John', 'Doe');
john2.greet();

var jane2 = new OldPerson('Jane', 'Doe');
jane2.greet();