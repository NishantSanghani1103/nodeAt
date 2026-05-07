import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./index.js";
export const postModel = sequelize.define("post", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caption: DataTypes.STRING,
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: userModel,
            key:"id"
        }
    }
}, { timestamps: true });