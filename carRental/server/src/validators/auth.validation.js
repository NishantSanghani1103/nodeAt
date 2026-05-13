import { body } from "express-validator";

export const registerValidation = [
    body("name")
        .notEmpty().withMessage("UserName Is Required")
        .isLength({ min: 2 }).withMessage("UserName Should Be More That 2 Character")
]