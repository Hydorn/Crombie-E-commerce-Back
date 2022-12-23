import { Sequelize } from "sequelize-typescript";
import Users from "../models/user";

const config = require("../config/config.js");

const sequelize = new Sequelize({
    database: config.development.database,
    dialect: 'mysql',
    username: config.development.username,
    password: config.development.password,
    models: [Users],
  });

export default sequelize;