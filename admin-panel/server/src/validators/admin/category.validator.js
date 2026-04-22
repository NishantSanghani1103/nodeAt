import { body, validationResult } from "express-validator";
export const categoryValidator = [
    body("name")
        .notEmpty().withMessage("Please Enter Category....!!"),
    body("order")
        .notEmpty().withMessage("Please Enter Category Order....!!")
        .isNumeric().withMessage("Cateory Order Must Be Integer....!!"),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(401).json({
                status: false,
                message:error.array()[0].msg
            })
        }
        next()
    }
]