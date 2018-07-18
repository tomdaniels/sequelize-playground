const config = require('config');

module.exports = {
  username: config.get('sql.username'),
  password: config.get('sql.password'),
  database: config.get('sql.database'),
  host: config.get('sql.host'),
  dialect: 'mysql',
  operatorsAliases: false,
};
