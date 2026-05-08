import express from "express"
import { followController, unfollowController } from "../controller/index.js"
import { checkFollow, checkIsFollow, checkToken } from "../middleware/index.js"
export const followRoutes = express.Router()
followRoutes.post("/add/:id", checkToken, checkFollow, followController)
followRoutes.post("/delete/:id", checkToken, checkIsFollow, unfollowController)