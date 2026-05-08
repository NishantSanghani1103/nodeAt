import { body } from "express-validator";

export const postValidation = [
    body()
        .custom((value, { req }) => {
            if (!req.files?.image?.length) {
                throw new Error("Image Is Required");
            }
            return true
        })
]