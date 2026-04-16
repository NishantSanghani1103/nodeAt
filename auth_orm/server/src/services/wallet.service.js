import { walletModel } from "../model"

export const walletAddService = async (data) => {
    const { userId ,walletBalance} = data
    const data = walletModel.create({
        userRegisterId: userId,
        balance:walletBalance
    })
}