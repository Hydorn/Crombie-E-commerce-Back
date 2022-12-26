import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import Proyect from "../models/proyect";
import Rating from "../models/rating";
import User from "../models/user";

//import config from "../config/config.js";

const sequelize = new Sequelize({
  database: "e-commerce", //config.development.database,
  dialect: "mysql",
  username: "root", //config.development.username,
  password: "", //config.development.password,
  //models: [User, Proyect, Rating],
} as SequelizeOptions);

sequelize.addModels([User, Proyect, Rating]);

export default sequelize;
