import express from "express"
import { userViewController } from "../../controller/userController/user.controller.js"
import { checkToken } from "../../middleware/checkToken.js"
export const userRoutes = express.Router()

userRoutes.get("/view", checkToken,userViewController)