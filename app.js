/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
//var http = require('http');

var app = express();

app.set('port', 3000);

app.get('/', function(req, res){ //URL here is the root of the application
	res.send("express works!"); 
	//res.json({message: 'hooray!  welcome to our api!'}); only one will work at a time
});


//app.get('/', routes.index);

app.listen(app.get('port'), function() {
	//http.createServer(app).listen(app.get('port'), function () {  //vs app.listen.(app.get('port'), function() { //blah });
    console.log('Express server listening on port ' + app.get('port'));
});
