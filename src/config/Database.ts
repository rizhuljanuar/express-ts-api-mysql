import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "Development!!", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
