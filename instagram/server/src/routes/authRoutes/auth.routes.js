import express from "express"
import { loginController, registerController } from "../../controller/authController/auth.controller.js"
import { loginValidator, registerValidator } from "../../validators/authValidator/auth.validators.js"
export const authRoutes = express.Router()

authRoutes.post("/register", registerValidator, registerController)
authRoutes.post("/login",loginValidator,loginController)