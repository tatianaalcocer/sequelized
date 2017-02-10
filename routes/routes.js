var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var HandlebarsIntl = require("handlebars-intl");
var momentTimer = require('moment-timer');
var moment = require('moment');
var express = require('express');

module.exports = function(app) {

  // Set handlebars
  app.set("views");
  var hbs = exphbs.create({
    defaultLayout: "main"
  });
// var timer = moment.duration(1, "seconds").timer({loop: true},function() {
//   counter++;
//   console.log(counter);
//   if(counter == 5) {
//     timer.stop();
//   }
// });

  HandlebarsIntl.registerWith(hbs.handlebars);
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");

  app.use(methodOverride('_method'));
  // Set up the Express app to handle data parsing 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.text());
  app.use(bodyParser.json({type:"application/vnd.api+json"}));

  app.get("/", function(req, res) {
    res.render("index");
  });
};