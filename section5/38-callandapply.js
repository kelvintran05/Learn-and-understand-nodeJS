// create a simple object

var obj = {
    name: 'John Doe',
    greet: function() {
        // using ES6 template literal
        console.log(`Hello ${ this.name }`);
    }
}

// invoke greet method
obj.greet();

// use .call to invoke the function
// but also pass an object in to override this
obj.greet.call({ name: 'Jane Doe' });

// use .apply to do the same thing
obj.greet.apply({ name: 'Jane Doe' });