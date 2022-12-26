import { RequestHandler } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Body = {
  email: string;
  password: string;
};

const loginUser: RequestHandler = async (req, res) => {
  try {
    const body = req.body as Body;

    const [{ dataValues: user }] = await User.findAll({
      where: {
        email: body.email,
      },
    });

    if (!user)
      return res.send(400).json({ message: "Invalid email or password" });

    const logged = bcrypt.compareSync(body.password, user.password);

    if (logged) {
      const payload = {
        userName: user.firstName,
        userID: user.id,
        email: user.email,
        admin: user.admin,
      };
      const token = jwt.sign(payload, "lamotitodecarlitos", {
        expiresIn: "1h",
      });

      return res.status(200).json({ payload: { token } });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (err: any) {
    res.status(400).json(err.message);
  }
};

export default loginUser;
