const express = require('express');
const router = express.Router(); // Express router
const db = require('../config/database');
const Myment = require('../models/Myment');

router.get('/', (req, res) =>
  Myment.findAll()
    .then(myment => {
      console.log(myment);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)),
);

module.exports = router;
