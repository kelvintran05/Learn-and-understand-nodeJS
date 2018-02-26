var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // first route
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    // second route
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        // handle other routes
        res.writeHead(404);
        res.end("Page not found");  
    }

}).listen(8080);