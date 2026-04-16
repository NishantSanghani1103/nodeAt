import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
export const postModel = sequelize.define("post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT
    }
})  