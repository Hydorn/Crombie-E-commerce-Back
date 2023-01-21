import modifyUser from "../controllers/userController/putUser";
import getUser from "../controllers/userController/getUser";
import loginCheck from "../middlewares/loginCheck";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/:id", getUser);
userRouter.put("/", loginCheck, modifyUser);

export default userRouter;
