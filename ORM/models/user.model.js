const { DataTypes } = require("sequelize");
const sequelize = require("../congif/db");


const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userMobile: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;