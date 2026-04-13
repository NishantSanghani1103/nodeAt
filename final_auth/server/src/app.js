import express from "express"
import authRoutes from "./modules/auth/routes/auth.routes.js"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
export default app