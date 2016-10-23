var express = require("express");

// Create our app
var app = express();
// Tell it which folder to serve
app.use(express.static("public"));   //use lets you add functionality to your express application
//express.static specifies a folder name which we want to expose to the web server

//start the server, takes as arguments the port and the function which gets called once server is up
app.listen(3000, function () {
  console.log("Express server is up on port 3000");
});
