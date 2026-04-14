import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: String(process.env.DB_PASSWORD),
    port: Number(process.env.DB_PORT),
});
pool.query("")
    .then(() => {
        console.log("PostgreSQL Connected Successfully...!!");
    })
    .catch((error) => {
        console.log(`PostgreSQL Error Is: ${error.message}`);
    });

export default pool;