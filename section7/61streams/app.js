var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // use a stream to read and pipe to the write stream (res)
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(8080);