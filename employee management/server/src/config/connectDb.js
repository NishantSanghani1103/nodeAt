import { app } from "../app.js"
import { sequelize } from "./db.js"

const port = process.env.PORT
export const connectDB = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server Running On Port : ${port}`)
        })

        await sequelize.authenticate()
        console.log("Neon PostgreSQL Connected Successfully")

        await sequelize.sync({ alter: true })
        console.log("Tables Modified")

    } catch (error) {
        console.log("Database Connection Error:", error)
    }
}