const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        logging:  true //false
      });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            // host: 'localhost',
            host: '127.0.0.1', //for Maggie only
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;