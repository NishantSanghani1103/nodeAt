import { body, validationResult } from "express-validator";

export const userValidator = [
    body("userName")
        .notEmpty().withMessage("UserName Is Required....!!"),
    body("userEmail")
        .notEmpty().withMessage("UserEmail Is Required....!!")
        .isEmail().withMessage("Please Enter Valid Email....!!")
        .normalizeEmail(),
    body("userPassword")
        .notEmpty().withMessage("Password Is Required....!!")
        .isLength({ min: 6 }).withMessage("Password Must Be More Than 6 Character....!!"),
    body("userConfirmPassword")
        .notEmpty().withMessage("Please Enter Confirm Password....!!")
        .custom((value, { req }) => {
            if (value !== req.body.userPassword) {
                throw new Error("Confrim Password Doesn't Matched....!!")
            }
            return true
        }),
    body("userMobile")
        .notEmpty().withMessage("Mobile Number Is Required....!!")
        .isNumeric().withMessage("Mobile Number Must Be Numeric....!!")
        .isLength({ min: 10, max: 10 }).withMessage("Please Enter Valid Mobile Number....!!"),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({
                status: false,
                messsage: error.array()[0].msg
            })
        }
        next()
    }
]