// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Selects a connection (can be changed quickly as needed)

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(process.env.JAWSDB_URL,
{
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

// // Exports the connection for other files to use
// module.exports = sequelize;


// //npm mysql package
// var mysql = require('mysql');

// //npm package to store sensitive info, e.g. login parameters
// require('dotenv').config();

// //parameters to establish mysql connection
// var connection = mysql.createConnection({
// 	host: process.env.dbhost,
// 	port: 3306,
// 	user: process.env.dbuser,
// 	password: process.env.dbpassword,
// 	database: process.env.dbname
// });


// module.exports = connection;