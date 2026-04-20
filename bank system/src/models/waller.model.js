import { DataTypes, INTEGER } from "sequelize";
import { sequelize } from "../config/db.js";

export const walletModel = sequelize.define("wallet", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    balance: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})