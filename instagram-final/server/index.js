import env from "dotenv"
env.config()
import { app } from "./src/app.js"
import { sequelize } from "./src/config/db.js";
import "./src/model/relation.js";
// import * as db from "./src/model/index.js"
const port = process.env.PORT
const dbName=process.env.DB_NAME
sequelize.sync({ alter: true })
    .then(() => {
        console.log(`Database Conneted : ${dbName}`);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.log(err.message));