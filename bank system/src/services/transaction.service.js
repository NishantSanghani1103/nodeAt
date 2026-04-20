import { Op } from "sequelize"
import { transactionModel } from "../models/transaction.model.js"
import { userModel } from "../models/user.model.js";

export const transactionViewService = async (userId) => {
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
                    model: userModel,
                    as: "sender",
                    attributes: ["id", "userName"]
                },
                {
                    model: userModel,
                    as: "receiver",
                    attributes: ["id", "userName"]
                }
            ]
        })
        console.log(res);

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

export const transactionExportService = async (userId) => {
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
                    model: userModel,
                    as: "sender",
                    attributes: ["id", "userName"]
                },
                {
                    model: userModel,
                    as: "receiver",
                    attributes: ["id", "userName"]
                }
            ]
        })
        console.log(res);

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