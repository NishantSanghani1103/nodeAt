import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { postModel, userModel } from "./index.js";
export const bookmarkModel = sequelize.define("bookmark", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: userModel,
            key: "id"
        }
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: postModel,
            key: "id"
        }
    }
}, { timestamps: true });