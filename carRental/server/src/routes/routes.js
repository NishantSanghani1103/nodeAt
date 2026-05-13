import expres from "express"
import { authRoutes } from "./index.js"


export const routes = expres.Router()
routes.use("/auth", authRoutes)