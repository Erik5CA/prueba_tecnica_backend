import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the database connection URL
const { POSTGRES_URL } = process.env;

// Create a new Sequelize instance
export const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: "postgres",
  logging: false,
});
