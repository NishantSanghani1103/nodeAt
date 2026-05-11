import { body } from "express-validator";
import { checkBookMarksValidation } from "../services/index.js";
import { messages } from "../messages/index.js";

export const bookMarksValidation = [
    body("postId")
    .notEmpty().withMessage("Please Select Post")
    .custom(async(value, { req }) => {
        const { userId } = req
        const isPost = await checkBookMarksValidation(value, userId)

        if (!isPost.checkPost) {
            throw new Error(messages.post.INVALID_POST)
        }
        if (isPost.isBookMark) {
            throw new Error(messages.bookMark.ALREADY_BOOKMARKED)
        }

    })
]