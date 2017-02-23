var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var HandlebarsIntl = require("handlebars-intl");
var momentTimer = require('moment-timer');
var moment = require('moment');
var express = require('express');

//Import SQL Todo schema
var Todo = require('../models/todos.js');

module.exports = function(app) {

  // Set handlebars
  app.set("views");
  var hbs = exphbs.create({
    defaultLayout: "main"
  });

  HandlebarsIntl.registerWith(hbs.handlebars);
  app.engine("handlebars", hbs.engine);
  app.set("view engine", "handlebars");

  app.use(methodOverride('_method'));
  // Set up the Express app to handle data parsing 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.text());
  app.use(bodyParser.json({type:"application/vnd.api+json"}));

  app.get('/', function(req, res){
    Todo.findAll({}).then(function(results){
      res.render('index',
        {
          task: results
        });
    });
  });

  app.post('/api/new', function(req, res){
    var todo = req.body.todo;
    Todo.create({
      body: todo,
    }).then(function(results){
      res.redirect('/');
    });
  });

  app.get('/api', function(req, res){
    Todo.findAll({}).then(function(results){
      res.json(results);
    });
  });

  app.post('/task', function(req, res){
    // console.log(req.body.taskID);
    var taskInstance = {
      taskID: req.body.taskID,
      taskStart: new Date(),
      taskEnd: null
    };

    Todo.findAll({}).then(function(results){
      res.render('index',
        {
          task: results,
          currentTask: taskInstance
        });
    });

  });



};