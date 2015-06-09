var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));

require('./config/mongoose.js');
require('./config/routes.js')(app);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	// console.log("Listening on port 8000");
	    console.log('Our app is running on http://localhost:' + port);

});