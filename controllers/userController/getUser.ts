import { RequestHandler } from "express";
import User from "../../models/user";

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
const getUser: RequestHandler = async (req, res) => {
  const userID = req.params?.id;

  try {
    if (userID) {
      const user = (await User.findByPk(userID)) as Response;
      const response = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };

      return res.status(200).json(response);
    }
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getUser;
