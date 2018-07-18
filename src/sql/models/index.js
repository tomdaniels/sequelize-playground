const Sequelize = require('sequelize');
const dbConfig = require('../../../database/config');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: dbConfig.operatorsAliases,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize
  .authenticate()
  .then(() => console.log('connected to DB successfully'))
  .catch(error => console.log('unable to connect to DB', error));
