const express = require("express");
const router = express.Router();
const Tag = require("../models/tag");


// Set the home page route
router.get("/", (req, res) => {
    // Ejs render automatically looks in the views folder
    res.render("index");
});

// Get a list of tags from de db
router.get("/tags", (req, res) => {
    Tag.find({}).then((tags) => res.send(tags));
});

// Add a new tag to the db
router.post("/tags", (req, res, next) => {
    Tag.create(req.body).then(tag => res.send(tag)).catch(next);
});

module.exports = router;
