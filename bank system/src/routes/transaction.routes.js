import express from "express"
import { transactionExportController, transactionViewController, transactionZipArchieveController, transactionZipController } from "../controllers/transaction.controller.js"
import { checkToken } from "../middleware/checkToken.js"
const transactionRoutes = express.Router()
transactionRoutes.get("/view", checkToken,transactionViewController)
transactionRoutes.get("/export/:type",checkToken,transactionExportController)
transactionRoutes.get("/zip",checkToken,transactionZipController)
transactionRoutes.get("/zip/archieve",checkToken,transactionZipArchieveController)
export default transactionRoutes