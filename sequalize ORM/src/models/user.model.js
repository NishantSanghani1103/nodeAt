import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const customer = sequelize.define("customer", {
    custName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    custEmail:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    custMobile:{
        type:DataTypes.STRING
    }
})