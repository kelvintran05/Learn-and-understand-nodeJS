var fs = require('fs');
// compressed files module
var zlib = require('zlib');

// create a readable stream
var readable = fs.createReadStream(__dirname + '/greet.txt');

// create a writable stream
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

// create a duplex gzip stream to create a gzip file
var gzip = zlib.createGzip();

// pipe data
readable.pipe(writable);

// pipe data to gzip which adjusts the content and then pipe to the compressed file to save it
readable.pipe(gzip).pipe(compressed);