import { Router } from "express";
import loginCheck from "../middlewares/loginCheck";
import getMe from "../controllers/userController/getMe";

const meRouter = Router();

meRouter.get("/", loginCheck, getMe);

export default meRouter;
