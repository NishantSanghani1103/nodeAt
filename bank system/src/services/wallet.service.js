import { sequelize } from "../config/db.js"
import { userModel, walletModel } from "../models/index.js"
import { transactionModel } from "../models/transaction.model.js"

export const walletViewService = async (userId) => {

    try {
        const data = await walletModel.findAll({
            where: {
                userId: userId
            },
            include: [
                {
                    model: userModel,
                    attributes: ["id", "userName"]
                }
            ]
        })
        return data
    } catch (error) {
        throw error
    }
}

export const walletTransfferService = async (data, senderId) => {
    const t = await sequelize.transaction()


    // console.log(senderId);

    try {
        const { receiverId, amount } = data
        const senderData = await walletModel.findOne({
            where: { userId: senderId },
            transaction: t
        });
        // console.log(senderData);

        const receiverData = await walletModel.findOne({
            where: {
                userId: receiverId
            },
            transaction: t
        })
        // console.log(receiverData.balance);

        if (!receiverData) {
            throw new Error("Receiver Not Found....!!")
        }
        if (senderData.id == receiverData.id) {
            throw new Error("Invalid Receiver Details....!!")
        }

        if (senderData.balance < amount) {
            throw new Error("Insufficient Balance....!!")
        }
        console.log(typeof receiverData.balance); // should be number
        console.log(typeof amount);
        senderData.balance -= amount
        await senderData.save({
            transaction: t
        })

        receiverData.balance = Number(receiverData.balance) + Number(amount);
        await receiverData.save({
            transaction: t
        })
        await transactionModel.create({
            amount: amount,
            type: "debit",
            receiverId,
            senderId
        }, { transaction: t })


        await transactionModel.create({
            amount: amount,
            type: "credit",
            receiverId,
            senderId
        }, { transaction: t })

        await t.commit()

    } catch (error) {
        await t.rollback()
        throw error
    }

}