const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('orm', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // default PostgreSQL port
    logging: false // optional: disable SQL logs
});


module.exports=sequelize