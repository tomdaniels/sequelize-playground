const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'bulkmatching',
  'dom_dbuser',
  'a79oPQktaD2l8pqnyTz9', {
    host: 'p-support-tools.clhd2uxuvo0f.ap-southeast-2.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 1000
    },
    operatorsAliases: false
  }
);

module.exports = sequelize;
