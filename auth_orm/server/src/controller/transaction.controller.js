import { transactionService } from "../services/transaction.service.js"

export const transactionController = async (req, res) => {
    try {
        const data = await transactionService(req.body)
        return res.status(200).json({
            status: true,
            message: "Transaction Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}