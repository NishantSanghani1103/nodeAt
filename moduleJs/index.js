import express from "express"
import env from "dotenv"
import { adminRoutes } from "./app/routes/admin.routes.js"
env.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use("/admin", adminRoutes)
app.listen(PORT, () => {
    console.log(`Port Listen On : ${PORT}`);
})

