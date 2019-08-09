const express = require("express");
const router = express.Router();
const Tag = require("../models/tag");
const tags = require("../models/tag2");


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

// We use Query to search the Database and send the Json Response as result
router.get('/search', function (req, res, next){
    const q = req.query.q;

// Partial text search using mongoDB regex
tags.find({
    storeName: {
        $regex: new RegExp(q)
    }
}, {
    _id: 0,
    __v: 0
}, function (err, data) {
    res.json(data);
}).limit(10);

});

module.exports = router;
