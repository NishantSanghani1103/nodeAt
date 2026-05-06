import express from "express"
import cors from "cors"
import { authRoutes } from "./routes/authRoutes/auth.routes.js"
import { useRoutes } from "./routes/userRoutes/user.routes.js"
import { followRoutes } from "./routes/followRoutes/follow.routes.js"
export const app = express()
app.use(express.json())
app.use(cors())


app.use("/auth", authRoutes)
app.use("/user", useRoutes)
app.use("/follow", followRoutes)