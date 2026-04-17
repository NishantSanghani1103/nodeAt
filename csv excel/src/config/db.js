import { Sequelize } from "sequelize";

const sequelize = new Sequelize("csv_file", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

export default sequelize;