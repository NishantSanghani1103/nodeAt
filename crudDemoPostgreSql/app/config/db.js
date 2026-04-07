const { Pool } = require("pg")
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
})

pool.query("SELECT 1")
    .then(() => {
        console.log("Postgres Connected...!!");
    })
    .catch((error) => {
        console.log(error);
        
        console.log("PostgreSql Error....!!");
    })

module.exports = pool