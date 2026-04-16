import express from "express"
import { wallerAddController } from "../controller/wallet.controller.js"
import { checkToken } from "../middleware/checkToken.js"
const walletRoutes = express.Router()
walletRoutes.post("/add", checkToken, wallerAddController)
export default walletRoutes