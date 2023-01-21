import { ok } from "assert";
import { RequestHandler } from "express";
import User from "../../models/user";

type ModifyUser = {
  id: string;
  firstName?: string;
  lastName?: string;
  password: string;
};

const modifyUser: RequestHandler = async (req, res) => {
  try {
    const modify = req.body as ModifyUser;
    const user = await User.findByPk(modify.id);

    if (!user) throw new Error("User not found");
    if (!modify.password) throw new Error("Can't do that without password");

    modify.firstName ? (user.firstName = modify.firstName) : user.firstName;
    modify.lastName ? (user.lastName = modify.lastName) : user.lastName;

    await user.save();

    return res
      .status(200)
      .json({
        status: "ok",
        message: "User attributes successfully modified",
        data: user,
      });
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default modifyUser;
