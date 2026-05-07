import express from "express"
import { loginController, registerController } from "../controller/index.js"
import { loginValidator, registerValidator, validateRequest } from "../validation/index.js"
import { uploads } from "../utils/index.js"
import { checkUser, checkUserPassword } from "../middleware/index.js"

export const authRoutes = express.Router()
authRoutes.post("/register", uploads("user").single("profilePicture"), registerValidator, validateRequest, checkUser, registerController)

authRoutes.post("/login",loginValidator,validateRequest,checkUserPassword,loginController)