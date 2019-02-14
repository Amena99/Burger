//SOURCE: Heavily drew from class activity "CATS" for this HW
//=====================================
var express = require ("express");

var PORT = process.env.PORT || 8080;

//use express through the app variable
var app = express();

//parse application body as JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(express.static("public"));
app.use(routes);
app.use(express.static("public"));
//Start our server so that it can begin listening to client requests
app.listen(PORT, function(){
    console.log("Server listening on http://localhost:"+ PORT);
});


