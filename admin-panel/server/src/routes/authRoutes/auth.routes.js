import express from "express"
import { changePasswordController, forgotPasswrodController, userLoginController, userRegisterController } from "../../controllers/authController/auth.controller.js"
import { changePasswordValidator, forgotPasswordValidator, loginValidator, registerValidator } from "../../validators/authValidator/auth.validator.js"
import { checkToken } from "../../middleware/checkToken.js"

export const authRoutes = express.Router()

authRoutes.post("/register", registerValidator, userRegisterController)
authRoutes.post("/login", loginValidator, userLoginController)
authRoutes.post("/forgot-password", forgotPasswordValidator,forgotPasswrodController)
authRoutes.post("/change-password",checkToken,changePasswordValidator,changePasswordController)
