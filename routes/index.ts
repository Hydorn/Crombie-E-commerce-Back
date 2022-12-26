import { Router } from "express";
import authRouter from "./authRoutes";
import proyectRouter from "./proyecRoutes";
import ratingRouter from "./ratingRoutes";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/proyects", proyectRouter);
appRouter.use("/ratings", ratingRouter);
export default appRouter;
