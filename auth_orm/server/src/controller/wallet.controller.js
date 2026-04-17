import { walletTransferService } from "../services/wallet.service.js"

export const walleTrnasferController = async (req, res) => {
    try {
        const data = await walletTransferService(req.body)
        console.log(data);
        
        return res.status(201).json({
            status: true,
            message: "Money transferred successfully...!!"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}