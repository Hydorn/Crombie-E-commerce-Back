import { Sequelize, SequelizeOptions } from "sequelize-typescript";

import config from "../config/config.js";

const sequelize = new Sequelize({
  host: config.test.host,
  database: config.test.database,
  dialect: "mysql",
  username: config.test.username,
  password: config.test.password,
  //models: [User, Proyect, Rating],
} as SequelizeOptions);

export default sequelize;
