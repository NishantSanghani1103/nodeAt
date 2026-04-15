import express from "express"
import multer from "multer"
import { userAdd, userView } from "../controllers/user.controller.js"
const userRoutes = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "uploads/category")
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage })
userRoutes.post("/add", upload.single("categoryImage"), userAdd)
userRoutes.get("/view", userView)
export default userRoutes