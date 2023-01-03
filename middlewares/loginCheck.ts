import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
require("dotenv").config();

type Payload = {
  userName: string;
  userID: string;
  email: string;
  admin: boolean;
  iat: number;
  exp: number;
};

const loginCheck: RequestHandler = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new Error("invalid request");

    const payload = jwt.verify(token, "lamotitodecarlitos") as Payload;
    const user = await User.findByPk(payload.userID);

    res.locals.payload = payload;
    res.locals.user = user;

    if (!user) throw new Error("invalid user");
    next();
  } catch (err: any) {
    return res.status(401).json(err.message);
  }
};

export default loginCheck;
