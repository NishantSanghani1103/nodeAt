import { body } from "express-validator";

export const commentValidation = [
    body("postId")
        .notEmpty().withMessage("Please Select Post"),
    body("text")
        .notEmpty().withMessage("Comment Is Required")
]