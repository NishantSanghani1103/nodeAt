import { body, validationResult } from "express-validator";
export const registerValidator = [
    body("userName")
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
    body("gender")
        .notEmpty().withMessage("Gender Is Required....!!")
        .isIn(["male", "female"]).withMessage("Gender Must Be Male Or Female....!!")
]


export const loginValidator = [
    body("email")
        .notEmpty().withMessage("User Email Is Required....!!")
        .isEmail().withMessage("Please Enter Correct Email....!!"),
    body("password")
        .notEmpty().withMessage("User Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Should Be More Than 6 Character....!!")
]