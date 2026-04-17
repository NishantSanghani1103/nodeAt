import { userRegister } from "./auth.model.js";
import { commentModel } from "./commnet.model.js";
import { postModel } from "./post.model.js";
import { transactionModel } from "./transaction.model.js";
import { walletModel } from "./wallet.model.js";

// for the post relationship

userRegister.hasMany(postModel)
postModel.belongsTo(userRegister)


// for the comment relationship

postModel.hasMany(commentModel)
commentModel.belongsTo(postModel)

userRegister.hasMany(commentModel)
commentModel.belongsTo(userRegister)

// for the wallter relationship

userRegister.hasOne(walletModel)
walletModel.belongsTo(userRegister)


// for tansaction

transactionModel.belongsTo(userRegister,
    {
        as: "sender",
        foreignKey: "senderId"
    }
)

transactionModel.belongsTo(userRegister,
    {
        as:"receiver",
        foreignKey:"receiverId"
    }
)

export { userRegister, postModel, commentModel, walletModel }