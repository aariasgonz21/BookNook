/**
 * Module dependencies.
 */

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('./public'));


app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

app.get('/', function(req, res){ //URL here is the root of the application
	res.render('home'); 
	//res.json({message: 'hooray!  welcome to our api!'}); only one will work at a time
});

app.get('/profile', function(req,res){
	res.render('profile');
});

//app.get('/', routes.index);

app.listen(3001, function() {
	//http.createServer(app).listen(app.get('port'), function () {  //vs app.listen.(app.get('port'), function() { //blah });
    console.log('Express server listening on port 3001');
});
