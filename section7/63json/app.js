var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // create an object with some key value pairs
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
}).listen(8080);