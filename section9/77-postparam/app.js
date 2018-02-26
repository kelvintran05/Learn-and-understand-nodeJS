var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

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
// post form
app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
// post form with json data
app.post('/json', jsonParser, function(req, res) {
    res.send('Thank  for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});
// listen for connections
app.listen(port);