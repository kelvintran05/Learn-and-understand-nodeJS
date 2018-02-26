var express = require('express');
var app = express();
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/todo');
// seed db with data from setupController
setupController(app);
// our api end points (back end routes)
apiController(app);

app.listen(port);