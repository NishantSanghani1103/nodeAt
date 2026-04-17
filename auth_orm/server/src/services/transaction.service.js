import { Op } from "sequelize"
import { transactionModel } from "../model/transaction.model.js"
import { userRegister } from "../model/auth.model.js";

export const transactionService = async (data) => {
    const { userId } = data
    // console.log(userId);
    try {
        const res = await transactionModel.findAll({
            where: {
                [Op.or]: [
                    {
                        senderId: userId
                    },
                    {
                        receiverId: userId
                    }
                ]
            },
            include: [
                {
                    model: userRegister,
                    as: "sender",
                    attributes: ["id", "userName"]
                },
                {
                    model: userRegister,
                    as: "receiver",
                    attributes: ["id", "userName"]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        const finalRes = res
            .filter(value =>
                (value.senderId === userId && value.type === "debit") ||
                (value.receiverId === userId && value.type === "credit")
            )
            .map(value => {
                const isSender = value.senderId === userId;

                return {
                    amount: value.amount,
                    type: value.type,
                    message: isSender
                        ? `-₹${value.amount} (to ${value.receiver.userName})`
                        : `+₹${value.amount} (from ${value.sender.userName})`
                };
            });
            
        return finalRes

    } catch (error) {
        throw error
    }
}