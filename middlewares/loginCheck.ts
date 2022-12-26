import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User, { UserCreationAttributes } from "../models/user";
require("dotenv").config();

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkVtYW51ZWwiLCJ1c2VySUQiOiI4MzgyMGQzZS1lNjkyLTQzZmItYWQzZC00NThkNTM3NjA0MzEiLCJlbWFpbCI6IkVtYW51ZWxfMjJfMDgwQGhvdG1haWwuY29tIiwiaWF0IjoxNjcxOTI3NDI1LCJleHAiOjE2NzE5MzEwMjV9.OjTqpvhDUPG0ASUnwZkEH3HGl_hyyZabQFsbnZzRtYw"
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
    res.locals.user = payload;

    if (!user) throw new Error("invalid user");

    next();
  } catch (err: any) {
    return res.status(401).json(err.message);
  }
};

export default loginCheck;
