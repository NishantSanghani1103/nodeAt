import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
export const userRegister = sequelize.define("userRegister", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    userMobile: {
        type: DataTypes.STRING,
        validate: {
            isNumeric: true,
            len: [10, 10]
        }
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[6,100]
        }
    },
    userRole: {
        type: DataTypes.ENUM("admin", "user", "guest"),
        defaultValue:"user"
    }
})

