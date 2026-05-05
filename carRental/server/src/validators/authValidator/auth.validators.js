import { body, validationResult } from "express-validator";

export const registerValidator = [
    body("name")
        .notEmpty().withMessage("User Name Is Required....!!")
        .isLength({
            min: 2
        }).withMessage("User Name Should Be More Thant 2 Character....!!"),

    body("email")
        .notEmpty().withMessage("User Email Is Required....!!")
        .isEmail().withMessage("Please Enter Correct Email....!!"),
    body("password")
        .notEmpty().withMessage("User Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Should Be More Than 6 Character....!!"),

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



export const loginValidator = [
    body("email")
        .notEmpty().withMessage("User Email Is Required....!!")
        .isEmail().withMessage("Please Enter Correct Email....!!"),
    body("password")
        .notEmpty().withMessage("User Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Should Be More Than 6 Character....!!"),

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