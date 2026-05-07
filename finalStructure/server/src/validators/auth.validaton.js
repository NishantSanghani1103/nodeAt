import { body, validationResult } from "express-validator";
import { response } from "../utils/response.utils.js";

export const registerValidation = [
    body("name")
        .notEmpty().withMessage("User Name Is Required....!!")
        .isLength({ min: 2 }).withMessage("User Name Should Be More Than 2 Character....!!"),
    body("email")
        .notEmpty().withMessage("Email Is Required...!!")
        .isEmail().withMessage("Please Enter Valid Email....!!"),
    body("password")
        .notEmpty().withMessage("Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Should Be More Than 6 Character....!!"),


    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return response(res, {
                status: false,
                statusCode: 400,
                message: error.array()[0].msg
            })
        }
        next()
    }
]

export const loginValidation = [
    body("email")
        .notEmpty().withMessage("Email Is Required...!!")
        .isEmail().withMessage("Please Enter Valid Email....!!"),
    body("password")
        .notEmpty().withMessage("Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Should Be More Than 6 Character....!!"),
    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return response(res, {
                status: false,
                statusCode: 400,
                message: error.array()[0].msg
            })
        }
        next()
    }
]