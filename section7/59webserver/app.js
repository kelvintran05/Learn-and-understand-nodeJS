var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world\n');
    res.end('Goodbye world\n');
}).listen(8080);