import express from "express"
import { upload } from "../utils/multer.js"
import { exportController, readFileController } from "../controller/user.controller.js"
const userRoutes = express.Router()
userRoutes.post("/import",upload.single("file"),readFileController)
userRoutes.get("/exports/:type",exportController)
export default userRoutes