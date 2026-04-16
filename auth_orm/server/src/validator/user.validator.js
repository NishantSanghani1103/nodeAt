import { body, validationResult } from "express-validator";
export const userChangePasswordValidator = [
    body("oldPassword")
        .notEmpty().withMessage("Please Enter Current Password....!!"),
    body("newPassword")
        .notEmpty().withMessage("Please Enter New Password....!!")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Character....!!")
    ,
    body("confirmPassword")
        .notEmpty().withMessage("Please Enter Confirm Password....!!")
        .custom((value, { req }) => {
            if (value != req.body.newPassword) {
                throw new Error("Confirm Password Doesn't Matched....!!")
            }
            return true
        }),
    (req, res, next) => {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: error.array()[0].msg // only first error
            })
        }
        next()
    }
]