import { DataTypes, UUID, UUIDV4 } from "sequelize";
import { sequelize } from "../../config/db.js";

export const userModel = sequelize.define("user", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 250]
        }
    },
    role: {
        type: DataTypes.ENUM("buyer", "seller", "admin"),
        defaultValue: "buyer"
    },
    phone: {
        type: DataTypes.STRING
    },
    isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    profilePic: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    isApproved: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    varificationToken: {
        type: DataTypes.STRING
    },
    resetPasswordToken: {
        type: DataTypes.STRING
    },
    resetPasswordExpire: {
        type: DataTypes.DATE
    }
}, { timestamps: true })