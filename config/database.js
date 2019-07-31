const Sequelize = require('sequelize');

module.exports = new Sequelize('mysql', 'root', '010495a', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-3', // Verify THIS! IMPORTANT!
  },
});
