import { body, validationResult } from "express-validator";

export const userValidator = [
    body("userName")
        .notEmpty().withMessage("Please Enter UserName....!!"),
    body("userEmail")
        .isEmail().withMessage("Please Enter Valid Email Address....!!"),
    body("userPassword")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Character....!!"),
    body("userConfirmPassword")
        .custom((value, { req }) => {
            if (value != req.body.userPassword) {
                throw new Error("Confirm Password Doesn't Matched....!!")
            }
            return true
        }),
    body("userMobile")
        .isNumeric()
        .isLength({ min: 10, max: 10 }).withMessage("Please Enter Correct Mobile Number....!!"),

    (req, res, next) => {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: error.array()[0].msg
            })
        }
        next()
    }
]