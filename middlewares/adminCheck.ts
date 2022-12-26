import { RequestHandler } from "express";

const adminCheck: RequestHandler = async (req, res, next) => {
  try {
    const admin = res.locals.user.admin;
    if (admin) next();
    else throw new Error("You need to be an administrator to access");
  } catch (err: any) {
    return res.status(426).json(err.message);
  }
};

export default adminCheck;
