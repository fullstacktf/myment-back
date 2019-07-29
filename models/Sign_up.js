const Sequelize = require('sequelize');
const db = require('../config/database');

const Myment = db.define('sign_up', {
  // Object of fields
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  },
});

module.exports = Myment;
