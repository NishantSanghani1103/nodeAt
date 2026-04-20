import { walletTransfferService, walletViewService } from "../services/wallet.service.js"

export const walletViewController = async (req, res) => {

    const { userId } = req
    try {
        const data = await walletViewService(userId)
        return res.status(201).json({
            status: true,
            message: "Wallet Data Viewd Successfully....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

export const walletTransferController = async (req, res) => {
    try {
        const { userId } = req
        const data = await walletTransfferService(req.body,userId)
        return res.status(200).json({
            status: true,
            message: "Money Trnasferred Successfull....!!",
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}