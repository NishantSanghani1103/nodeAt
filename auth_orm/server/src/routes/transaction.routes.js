import exress from "express"
import { transactionController } from "../controller/transaction.controller.js"
import { checkToken } from "../middleware/checkToken.js"
const transactionRoutes = exress.Router()
transactionRoutes.get("/view", checkToken, transactionController)
export default transactionRoutes