const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");

// Set up express app
const app = express();

// Pass that json data for us, and attach to the request objects
app.use(bodyParser.json());

// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/tagdb", { useNewUrlParser: true }); // The db we want to connect to
mongoose.Promise = global.Promise; // Mongoose Promise version deprecated

// Initialize routes
//app.use(routes);
app.use("/api", routes);

// Error handling middleware
app.use((err, req, res, next) => res.status(422).send({error: err}))

// set the view engine to ejs
app.set("view engine", "ejs");

// Make express look in the public directory for assets (css/js/img)
app.use(express.static("public"));

// Listen to the port set by Heroku
const port = process.env.PORT;
app.listen(port || port, () =>
    console.log(`Now express listening for requests on port ${port}`)
);
