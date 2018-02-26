var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080;

// middleware to sever static files
app.use('/assets', express.static(__dirname + '/public'));

// set the template engine
app.set('view engine', 'ejs');

// our own middleware
app.use('/', function(req, res, next) {
   console.log('Request url: ' + req.url);
   next();
});

// send the index template from views using ejs
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});
// dynamic route with ejs
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
});

// listen for connections
app.listen(port);