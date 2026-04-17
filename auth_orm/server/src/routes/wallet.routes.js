import express from "express"
import { walleTrnasferController } from "../controller/wallet.controller.js"
import { checkToken } from "../middleware/checkToken.js"
import { walletTransferValidator } from "../validator/wallet.validator.js"
const walletRoutes = express.Router()
walletRoutes.post("/transfer", checkToken, walletTransferValidator,walleTrnasferController)
export default walletRoutes