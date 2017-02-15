// Dependencies
var Sequelize = require("sequelize");

// Selects a connection (can be changed quickly as needed)

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// Exports the connection for other files to use
// Exported to ../models/todos.js
module.exports = sequelize;

