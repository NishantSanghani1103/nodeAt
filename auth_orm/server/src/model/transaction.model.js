import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const transactionModel = sequelize.define("transaction", {
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM("credit", "debit"),
        allowNull: false
    }
})