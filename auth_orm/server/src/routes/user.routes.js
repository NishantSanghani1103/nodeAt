import express from "express"
import { userChangePasswordController } from "../controller/user.controller.js"
import { userChangePasswordValidator } from "../validator/user.validator.js"
import { checkToken } from "../middleware/checkToken.js"
import { postController } from "../controller/post.controller.js"
import { commentController } from "../controller/comment.controller.js"
const userRoutes = express.Router()
userRoutes.post("/change-password", userChangePasswordValidator, checkToken, userChangePasswordController)
userRoutes.post("/post", checkToken, postController)
userRoutes.post("/post/:postId/comment",checkToken,commentController)
export default userRoutes