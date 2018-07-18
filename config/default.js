require('dotenv').config();

module.exports = {
  sql: {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
  }
};
