import express from "express"
import { authRoutes, followRoutes, userRoutes } from "./index.js"
export const routes = express.Router()
routes.use("/auth", authRoutes)
routes.use("/user", userRoutes)
routes.use("/follow", followRoutes)