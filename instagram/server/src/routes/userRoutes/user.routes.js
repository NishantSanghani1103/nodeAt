import express from "express"
import { checkToken } from "../../middleware/checkToken.js"
import { userViewController } from "../../controller/userController/user.controller.js"


export const useRoutes = express.Router()
useRoutes.get("/view", checkToken, userViewController)