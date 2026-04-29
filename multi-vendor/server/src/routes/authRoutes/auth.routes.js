import express from "express"
import { registerController } from "../../controller/authController/auth.controller.js"
export const authRoutes = express.Router()
authRoutes.post("/register", registerController)