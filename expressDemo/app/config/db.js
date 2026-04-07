require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

pool.query('SELECT')
    .then(() => console.log("PostgreSQL Connected"))
    .catch(err => console.log("Error", err.message));

module.exports = pool;