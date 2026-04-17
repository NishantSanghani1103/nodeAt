import sequelize from "../config/db.js"
import { transactionModel } from "../model/transaction.model.js"
import { walletModel } from "../model/wallet.model.js"

export const walletTransferService = async (data) => {
    const { userId, receiverId, amount } = data
    const senderId = userId
    const t = await sequelize.transaction()
    try {
        const senderWallet = await walletModel.findOne(
            {
                where: {
                    userRegisterId: senderId
                },
                transaction: t
            }
        )
        // console.log("sender", senderWallet.balance);

        const receiverWallet = await walletModel.findOne(
            {
                where: {
                    userRegisterId: receiverId
                },
                transaction: t
            }
        )

        if (!receiverWallet) {
            throw new Error("Receiver Not Found....!!")
        }

        if (senderId == receiverId) {
            throw new Error("Receiver Details Not Valid....!!")
        }

        if (senderWallet.balance < amount) {
            throw new Error("Insufficient Balance....!!")
        }
        senderWallet.balance -= amount
        await senderWallet.save({
            transaction: t
        })

        receiverWallet.balance += amount
        await receiverWallet.save({
            transaction: t
        })

        await transactionModel.create({
            senderId,
            receiverId,
            amount,
            type: "debit"
        }, { transaction: t });

        // Receiver → credit
        await transactionModel.create({
            senderId,
            receiverId,
            amount,
            type: "credit"
        }, { transaction: t });



        await t.commit()

    } catch (error) {
        await t.rollback()
        throw error
    }
}