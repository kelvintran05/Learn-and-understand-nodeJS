var express = require('express');
var app = express();
// require mongoose
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://yourusername:yourpassword@yourmongodbaddress');

// set a var for schema (the structure of a document)
var Schema = mongoose.Schema;

// create a new person schema
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

// now we can generate a constuctor
var Person = mongoose.model('Person', personSchema);

// and then create new instances or new versions of this type of object, following the structure
var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user to MongoDB
john.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

// save the user
jane.save(function(err) {
  if (err) throw err;

  console.log('person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


// middleware
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	
	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;
		
		// object of all the users
		console.log(users);
	});
	
	next();
});

htmlController(app);

apiController(app);

app.listen(port);