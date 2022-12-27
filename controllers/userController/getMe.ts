import { RequestHandler } from "express";

const getMe: RequestHandler = async (req, res) => {
  try {
    const user = res.locals.user;
    console.log(user);

    res.status(200).json(user);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getMe;
