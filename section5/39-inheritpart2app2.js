var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    Person.call(this);
    this.badgenumber = '1234';
}

// Policeman is a child of Person (inherits from Person)
util.inherits(Policeman, Person);
var officer = new Policeman();
// the below code will only work with the Person.call(this); line included 
// otherwise the names will be undefined - greet will run Hello undefined undefined
officer.greet();
console.log(officer.firstname);