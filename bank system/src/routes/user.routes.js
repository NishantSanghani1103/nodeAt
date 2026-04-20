import express from "express"
import { userLoginController, userRegisterController } from "../controllers/register.controller.js"
import { userValidator } from "../validator/user.validator.js"
const userRoutes = express.Router()
userRoutes.post("/register", userValidator, userRegisterController)
userRoutes.post("/login", userLoginController)
export default userRoutes