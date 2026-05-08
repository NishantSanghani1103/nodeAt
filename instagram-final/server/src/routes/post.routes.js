import express from "express"
import { checkToken } from "../middleware/index.js"
import { postAddController, postAllViewController, postViewController } from "../controller/index.js"
import { uploads } from "../utils/index.js"
import { postValidation, validateRequest } from "../validation/index.js"

export const postRoutes = express.Router()
postRoutes.post("/add",
    checkToken,
    uploads("post").fields([
        { name: "image", maxCount: 10 }
    ]),
    postValidation,
    validateRequest,
    postAddController
)

postRoutes.get("/view",checkToken,postViewController)
postRoutes.get("/view-all",postAllViewController)
