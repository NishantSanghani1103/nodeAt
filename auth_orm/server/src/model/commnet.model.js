import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
export const commentModel = sequelize.define("comment", {
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})