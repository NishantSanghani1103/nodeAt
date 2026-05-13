import { DataTypes } from "sequelize"
import { sequelize } from "../config/index.js"


export const userModel = sequelize.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 250]
        }
    },
    role: {
        type: DataTypes.ENUM("owner", "user"),
        defaultValue: "user",
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING
    },
    profilePictureUrl: {
        type: DataTypes.VIRTUAL,
        get() {
            const baseUrl = process.env.PROFILE_PICTURE_BASE_URL || 'http://localhost:7000/uploads/user'
            return `${baseUrl}/${this.getDataValue('profilePicture')}`
        }
    }
})