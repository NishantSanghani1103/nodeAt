import { transactionModel } from "./transaction.model.js";
import { userModel } from "./user.model.js";
import { walletModel } from "./waller.model.js";

userModel.hasOne(walletModel)
walletModel.belongsTo(userModel)


transactionModel.belongsTo(userModel, {
    as: "sender",
    foreignKey: "senderId"
})

transactionModel.belongsTo(userModel, {
    as:"receiver",
    foreignKey:"receiverId"
})

export { userModel, walletModel };