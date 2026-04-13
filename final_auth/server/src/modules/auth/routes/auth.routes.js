import express from "express"
import { changePassword, loginController, registerController } from "../controllers/auth.controller.js"
import { checkToken } from "../../../middleware/checkToken.js"
import { registrationValidator } from "../../../validators/user.validators.js"
const authRoutes = express.Router()
authRoutes.post("/register",registrationValidator, registerController)
authRoutes.post("/login", loginController)
authRoutes.post("/change-password",checkToken,changePassword)
export default authRoutes