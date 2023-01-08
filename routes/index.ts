import { Router } from "express";
import meRouter from "./meRoutes";
import authRouter from "./authRoutes";
import proyectRouter from "./proyecRoutes";
import ratingRouter from "./ratingRoutes";
import userRouter from "./userRoutes";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/proyects", proyectRouter);
appRouter.use("/ratings", ratingRouter);
appRouter.use("/me", meRouter);
appRouter.use("/user", userRouter);

export default appRouter;
