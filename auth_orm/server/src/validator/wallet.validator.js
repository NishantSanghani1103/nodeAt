import { body, validationResult } from "express-validator";
export const walletTransferValidator = [
    body("receiverId")
        .notEmpty().withMessage("Please Enter Receiver Details....!!"),
    body("amount")
        .notEmpty().withMessage("Please Enter Amount....!!"),

    (req, res, next) => {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(401).json({
                status: false,
                message: error.array()[0].msg
            })
        }
        next()
    }
]