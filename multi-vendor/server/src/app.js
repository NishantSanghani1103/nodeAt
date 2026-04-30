import express from "express"
import cors from "cors"
import { authRoutes } from "./routes/authRoutes/auth.routes.js"
import { userRoutes } from "./routes/userRoutes/user.routes.js"
import { propertyRoutes } from "./routes/propertyRoutes/property.routes.js"
export const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/property", propertyRoutes)