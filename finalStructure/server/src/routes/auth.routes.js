import express from "express"
import { registerController } from "../controllers/index.js"
export const authRoutes = express.Router()
authRoutes.post("/register", registerController)
