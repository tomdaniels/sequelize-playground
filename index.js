const sequelize = require('./database/config');

sequelize
  .authenticate()
  .then(() => console.log('connected to DB'))
  .catch(error => console.log(error));
