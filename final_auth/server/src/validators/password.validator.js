import { body, validationResult } from "express-validator";

export const passwordValidator = [
    body("oldPassword")
        .notEmpty().withMessage("Please Enter Current Password...!!"),
    body("newPassword")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Characters...!!"),
    body("confirmPassword")
        .custom((value, { req }) => {
            if (value != req.body.newPassword) {
                throw new Error("Confirm Password Doesn't Matched...!!")
            }
            return true
        }),
    (req, res, next) => {
        const error = validationResult(res)
        if (!error.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: error.array()[0].msg // only first error
            });
        }
        next()
    }
]