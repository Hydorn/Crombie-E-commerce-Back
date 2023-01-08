import { Router } from "express";
import getUser from "../controllers/userController/getUser";

const userRouter = Router();

userRouter.get("/:id", getUser);

export default userRouter;
