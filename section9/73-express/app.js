var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080;

// this will respond to a http request and map to a url aka a route
app.get('/', function(req, res) {
    res.send('<html><h1>Hello world!</h1></html>');
});
app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// listen for connections
app.listen(port);