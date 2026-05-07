import express from "express"
import { loginController, registerController } from "../controllers/index.js"

import { loginValidation, registerValidation } from "../validators/index.js"
import { checkUserExists, checkUserNamePassword } from "../middleware/databaseMiddleware/index.js"

export const authRoutes = express.Router()
authRoutes.post("/register", registerValidation, checkUserExists, registerController)
authRoutes.post("/login",loginValidation,checkUserNamePassword,loginController)
