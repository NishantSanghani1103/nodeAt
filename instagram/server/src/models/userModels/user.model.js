import { DataTypes, UUIDV4 } from "sequelize";
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
        validate: {
            len: [2, 150]
        }
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
            len: [6, 300]
        }
    },
    role: {
        type: DataTypes.ENUM("owner", "user"),
        allowNull: false,
        defaultValue: "user"
    }
}, {
    timestamps: true
}
)