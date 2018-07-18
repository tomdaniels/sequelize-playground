const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'database',
  'username',
  'password', {
    host: 'localhost',
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

sequelize
  .authenticate()
  .then(() => console.log('connected to DB'))
  .catch(error => console.log(error));
