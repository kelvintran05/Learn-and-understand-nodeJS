var fs = require('fs');

// read file synchronously -> we don't need to specify utf8 as this is the default
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// read file asynchronously which takes a callback
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('Done');