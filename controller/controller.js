
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.

// NOTE: This is the same file from last week's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.

var express = require('express');
var router = express.Router();
// edit thing model to match sequelize
var thing = require('../dir/')["thing"];

//get route -> index
router.get('/', function(req,res) {
	// send us to the next get function instead.
	res.redirect('/thing')
});

// get route, edited to match sequelize
router.get('/thing', function(req,res) {
	// replace old function with sequelize function
	thing.findAll()
	// use promise method to pass the things...
	.then(function(thing_data){
		console.log(thing_data);
		// into the main index, updating the page
		return res.render('index', {thing_data})
	})
});

// post route to create things
router.post('/thing/create', function(req, res) {
	// edited thing create to add in a thing_name
	thing.create({thing_name: req.body.thing_name})
	// pass the result of our call
	.then(function(newthing){
		// log the result to our terminal/bash window
		console.log(newthing);
		// redirect
		res.redirect('/');
	});
});

// put route to devour a thing
router.put('/things/update', function(req,res){
	// update one of the things
	thing.findOne({where:{id: req.body.thing_id}})
	.then(function(thething){
		return thething.updateAttributes({
			devoured: true
		}).then(function(){
			// reload the page
			res.redirect('/');
		})
	});
});

module.exports = router;
