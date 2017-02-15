var express = require('express');
var path = require("path");
var app = express();


var dotenv = require("dotenv");
dotenv.load();

app.set("port", process.env.PORT || 3000);


app.use("/", express.static(path.join(__dirname, "public")));

// Routes
// =============================================================
require("./routes/routes.js")(app);

app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});