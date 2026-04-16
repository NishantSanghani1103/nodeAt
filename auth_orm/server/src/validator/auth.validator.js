import { body, validationResult } from "express-validator";

export const authRegisterValidator = [
    body("userName")
        .notEmpty().withMessage("Please Enter UserName....!!")
        .isLength({ min: 2 }).withMessage("UserName Must Be More Than 3 Character....!!"),
    body("userEmail")
        .notEmpty().withMessage("Please Enter Email Address....!!!")
        .isEmail().withMessage("Please Enter Correct Email Address....!!"),
    body("userMobile")
        .isNumeric()
        .isLength({ min: 10, max: 10 })
        .withMessage("Please Enter Correct Mobile Number....!!"),
    body("userPassword")
        .notEmpty().withMessage("Please Enter Password....!!")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Character....!!"),
    body("userConfirmPassword")
        .notEmpty().withMessage("Please Enter User Confirm Password....!!")
        .custom((value, { req }) => {
            if (value != req.body.userPassword) {
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

export const authLoginVaidator = [
    body("userEmail")
        .notEmpty().withMessage("Please Enter Email Address....!!")
        .isEmail().withMessage("Please Enter Correct Email Address....!!"),
    body("userPassword")
        .notEmpty().withMessage("Please Enter Password....!!"),

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