import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name must be provided",
        },
        notNull: {
          args: true,
          msg: "Name must be provided",
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Last name must be provided",
        },
        notNull: {
          args: true,
          msg: "Last name must be provided",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email must be provided",
        },
        notNull: {
          args: true,
          msg: "Email must be provided",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password must be provided",
        },
        notNull: {
          args: true,
          msg: "Password must be provided",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);
