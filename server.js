var express = require("express");

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
// Tell it which folder to serve
app.use(express.static("public"));   //use lets you add functionality to your express application
//express.static specifies a folder name which we want to expose to the web server

//start the server, takes as arguments the port and the function which gets called once server is up
app.listen(PORT, function () {
  console.log("Express server is up on port" + PORT);
});
