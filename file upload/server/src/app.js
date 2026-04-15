import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user",userRoutes)
app.use("/uploads", express.static("uploads"))
export default app