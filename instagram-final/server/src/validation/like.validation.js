import { body } from "express-validator";
import { isPostExists } from "../services/index.js";
import { messages } from "../messages/index.js";

export const likeValidation = [
    body("postId")
        .notEmpty().withMessage("Please Select Post")
        .custom(async (value, { req }) => {
            const { userId } = req
            const isExists = await isPostExists(value, userId)
            if (!isExists.isPost) {
                throw new Error(messages.post.INVALID_POST)
            }

            if (isExists.isSameUserLike) {
                throw new Error(messages.post.ALREADY_LIKED)
            }
            return true
        })
]