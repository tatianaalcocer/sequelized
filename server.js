// I just want to say that han's dog is highly inefficient
// ========================================
// STATING MY REQUIRED DEPENDENCIES
// ========================================

// EXPRESS JS PACKAGE
var express = require("express");	
// BODY PARSER PACKAGE
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
require('dotenv').config()

var Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.JAWSDB_URL,
{
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});// PATH PACKAGE
var path = require("path");


// ========================================
// STATING MY GLOBAL VARIABLES
// ========================================

// TURNING AN EXPRESS FUNCTION INTO THE VARIABLE APP
var app = express();

// SPECIFY WHICH PORT I AM GOING TO USE TO SET UP A CONNECTION
var PORT = process.env.PORT || 4000;

// ========================================
// A SHORT SECTION TO INCORPORATE BODYPARSER INTO MY APP VARIABLE
// ========================================

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ========================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ========================================

// WEB ROUTES
// ========================================
app.get('/', function(req, res){
	res.send('ayo')
});

sequelize
  .authenticate()
  .then(function(err) {
  	if (err) throw err;
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// API ROUTES
// ========================================



// ========================================
// LISTENER
// The below code effectively "starts" our server 
// ========================================

app.listen(PORT, function() {

	console.log("APP LISTENING ON PORT: " + PORT);

});