import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("orm","postgres","1234",{
    host:"localhost",
    dialect:"postgres",
    logging:false
})