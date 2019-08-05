const express = require('express');

// Set up express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// Set the home page route
app.get('/', function(req, res) {

	// Ejs render automatically looks in the views folder
	res.render('index');
});

// Listen to the port set by Heroku
const port = process.env.PORT;
app.listen(port || port, () => console.log(`Now express listening for requests on port ${port}`));

