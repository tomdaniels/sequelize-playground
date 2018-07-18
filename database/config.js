const config = require('config');

module.exports = {
  username: config.get('sql.user'),
  password: config.get('sql.password'),
  database: config.get('sql.database'),
  host: config.get('sql.host'),
  dialect: 'mysql',
  operatorsAliases: false,
};
