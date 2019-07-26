const Sequelize = require('sequelize');

module.exports = new Sequelize('myment', 'root', '010495a', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-3', // Verify THIS! IMPORTANT!
  },
});
