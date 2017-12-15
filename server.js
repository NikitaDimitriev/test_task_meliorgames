var express          = require('express');
var app              = express();
var mongoose         = require('mongoose');
var bodyParser       = require('body-parser');
var methodOverride   = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8081; // set our port
mongoose.connect(db.url, function(err, db) {
	if (err) {
		console.log("error:", err);	
	} else {
  		console.log("Connected correctly to server");
  	}
}); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); 

app.use(function(err, req, res, next){
	console.log('error' + err);
	res.status(500).json(err);
})

app.listen(port);	
console.log('Magic happens on port ' + port);
module.exports = app;

