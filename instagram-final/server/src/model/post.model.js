import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { userModel } from "./index.js";
export const postModel = sequelize.define("post", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    image: {
        type: DataTypes.JSON,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.VIRTUAL,
        get() {
            const baseUrl =
                process.env.POST_IMAGE_STATICPATH ||
                "http://localhost:3000/images";

            const images = this.getDataValue("image");

            return images.map(img => `${baseUrl}/${img}`);
        }
    },
    caption: DataTypes.STRING,
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: userModel,
            key: "id"
        }
    }
}, { timestamps: true });