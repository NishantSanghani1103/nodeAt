import express from "express"
import { checkToken } from "../middleware/index.js"
import { likeAddController, likeDeleteController, likeViewAllController, likeViewByPostIdController, likeViewByUserIdController } from "../controller/index.js"
import { likeValidation, validateRequest } from "../validation/index.js"

export const likeRoutes = express.Router()
likeRoutes.post("/add", checkToken, likeValidation, validateRequest, likeAddController)
likeRoutes.get("/viewByUser", checkToken, likeViewByUserIdController)
likeRoutes.get("/view-all", likeViewAllController)
likeRoutes.delete("/delete", checkToken, likeValidation, validateRequest, likeDeleteController)
likeRoutes.get("/view/:postId", likeViewByPostIdController)
