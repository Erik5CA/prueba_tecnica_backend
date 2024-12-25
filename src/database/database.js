import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { POSTGRES_URL } = process.env;

export const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: "postgres",
  logging: false,
});
