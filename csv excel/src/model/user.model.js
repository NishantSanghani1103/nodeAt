import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


export const userModel = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
});