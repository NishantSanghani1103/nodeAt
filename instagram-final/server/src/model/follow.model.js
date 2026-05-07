import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./index.js";


export const followModel = sequelize.define("follow", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    followerId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
            model: userModel,
            key: "id"
        }
    },
    followingId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
            model: userModel,
            key: "id"
        }
    }
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["followerId", "followingId"]
        }
    ]
});