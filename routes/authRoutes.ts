import { Router } from "express";
import loginUser from "../controllers/authController/loginUser";
import registerUser from "../controllers/authController/registerUser";

const authRouter = Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

export default authRouter;
