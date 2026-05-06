import express from "express"
import { loginController, registerController } from "../../controller/authController/auth.controller.js"
import { loginValidator, registerValidator } from "../../validators/authValidator/auth.validators.js"
import { uploads } from "../../utils/multer.js"
export const authRoutes = express.Router()

authRoutes.post("/register", uploads("user").single("profilePicture"), registerController)
authRoutes.post("/login", loginValidator, loginController)