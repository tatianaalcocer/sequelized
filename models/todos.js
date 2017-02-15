//This file is exported into /routes/routes.js

var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Todo = sequelize.define('Todos', {
 	id:{
 		type: Sequelize.INTEGER,
 		autoIncrement: true,
 		primaryKey: true
 	},

 	body: {
 		type: Sequelize.STRING
 	}

 }, {
 	timestamps: false
 });

// Todo.sync({force: true}).then(function () {
//   // Table created
//   return Todo.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

// Todo.sync().success(function() {
//     console.log('----- success');
//   }).error(function(error) {
//     console.log('- error \n', error);
//   })

module.exports = Todo;