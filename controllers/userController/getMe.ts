import { RequestHandler } from "express";

type Response = {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
const getMe: RequestHandler = async (req, res) => {
  try {
    const user = res.locals.user.dataValues as Response;
    const { password, id, deletedAt, createdAt, updatedAt, ...resp } = user;
    res.status(200).json(resp);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getMe;
