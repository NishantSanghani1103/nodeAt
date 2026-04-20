import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const userModel = sequelize.define("user", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    userMobile: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric:true,
            len: [10, 10]
        }
    },
    userPassword: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [6, 250]
        }
    }
})