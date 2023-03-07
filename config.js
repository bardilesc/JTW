
require('dotenv').config({
    path: `.env.development`
});

const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbname: process.env.DB_NAME,
    user: process.env.DB_USER,
    pwd: process.env.DB_PASS,
    prefix:
      process.env.DB_PREFIX && process.env.DB_PREFIX !== ''
        ? process.env.DB_PREFIX
        : 'mongodb',
  },
  jwtKey: process.env.JWT_KEY,

};

module.exports = config;