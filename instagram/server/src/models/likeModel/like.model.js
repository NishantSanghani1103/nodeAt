import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";
import { userModel } from "../userModels/user.model.js";
import { postModel } from "../postModel/post.model.js";

export const likeModel = sequelize.define("like", {
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
            key:"id"
        }
    }
}, { timestamps: true });