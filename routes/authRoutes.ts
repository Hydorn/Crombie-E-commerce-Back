import { Router } from "express";
import loginUser from "../controllers/authController/loginUser";
import registerUser from "../controllers/authController/registerUser";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

export default userRouter;
