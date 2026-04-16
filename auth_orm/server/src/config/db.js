import { Sequelize } from "sequelize";

const sequelize = new Sequelize("auth_orm", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

export default sequelize;