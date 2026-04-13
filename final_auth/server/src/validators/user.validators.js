import { body, validationResult } from "express-validator";

export const registrationValidator = [
    body("userName")
        .notEmpty().withMessage("UserName Is Required...!!"),
    body("userEmail")
        .isEmail().withMessage("Valid Email Required...!!"),
    body("userPassword")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Characters...!!"),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: error.array()[0].msg // only first error
            });
        }
        next()
    }
]