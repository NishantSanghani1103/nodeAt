import express from "express";
import { authLoginController, authRegisterController } from "../controller/auth.controller.js";
import { authLoginVaidator, authRegisterValidator } from "../validator/auth.validator.js";
const authRoutes = express.Router()
authRoutes.post("/add", authRegisterValidator, authRegisterController)
authRoutes.post("/login", authLoginVaidator, authLoginController)
export default authRoutes