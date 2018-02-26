var fs = require('fs');

// create a readable stream
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

// create a writable stream
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// listen for the data event on the stream
readable.on('data', function(chunk) {
    console.log(chunk.length);
    // write the read chunk data to the writable stream
    writable.write(chunk);
});