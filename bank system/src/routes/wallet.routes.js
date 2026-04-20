import express from "express"
import { walletTransferController, walletViewController } from "../controllers/wallet.controller.js"
import { checkToken } from "../middleware/checkToken.js"
const walletRoutes = express.Router()
walletRoutes.get("/view", checkToken, walletViewController)
walletRoutes.post("/transfer", checkToken, walletTransferController)
export default walletRoutes