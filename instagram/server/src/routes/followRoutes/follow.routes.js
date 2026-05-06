import express from "express"
import { followController } from "../../controller/followersController/follow.controller.js"
import { checkToken } from "../../middleware/checkToken.js"
export const followRoutes = express.Router()

followRoutes.post("/add/:id", checkToken, followController)
