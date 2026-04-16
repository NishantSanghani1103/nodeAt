import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
export const walletModel = sequelize.define("wallet", {
    balance: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});