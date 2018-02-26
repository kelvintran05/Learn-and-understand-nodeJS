function greet(callback) {
    // the work of this function
    console.log('Hello!');
    // add some data
    var data = {
        name: 'John Doe'
    };
    // invoke the callback function and pass the data
    callback(data);
}

greet(function(data) {
   console.log('The callback was invoked!'); 
   console.log(data);
});

greet(function(data) {
   console.log('A different callback was invoked!'); 
   console.log(data.name);
});