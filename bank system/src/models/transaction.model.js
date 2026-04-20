import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


export const transactionModel = sequelize.define("transaction", {
    senderId: {
        type: DataTypes.INTEGER,
    },
    receiverId: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM("credit", "debit"),
        allowNull: false
    }
})