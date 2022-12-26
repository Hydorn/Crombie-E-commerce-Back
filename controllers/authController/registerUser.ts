import { RequestHandler } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  admin?: boolean;
  password: string;
  repeatPassword: string;
};

const registerUser: RequestHandler = async (req, res) => {
  try {
    const body = req.body as Body;
    if (body.password !== body.repeatPassword)
      throw new Error("password does not match");

    // Encrypt password
    const saltRounds = 10;
    bcrypt.hash(body.password, saltRounds, async function (err, hash) {
      const user = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        admin: body.admin || false,
        password: hash,
      });
    });

    return res.status(201).json({ message: "User created succesfully" });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
};

export default registerUser;
