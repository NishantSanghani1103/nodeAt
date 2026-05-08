import express from "express"
import { commentAddController, commentViewPostController } from "../controller/index.js"
import { checkAddComment, checkToken } from "../middleware/index.js"
import { commentValidation, validateRequest } from "../validation/index.js"

export const commentRoutes = express.Router()
commentRoutes.post("/add", checkToken, commentValidation, validateRequest, checkAddComment,commentAddController)

commentRoutes.get("/view/:postId",commentViewPostController)
