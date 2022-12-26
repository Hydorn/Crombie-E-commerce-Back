import { Router } from "express";
import modifyProyects from "../controllers/proyectController/putProyect";
import deleteProyects from "../controllers/proyectController/deleteProyect";
import createProyects from "../controllers/proyectController/createProyect";
import getProyects from "../controllers/proyectController/getProyects";
import getProyect from "../controllers/proyectController/getProyectByID";
import loginCheck from "../middlewares/loginCheck";
import adminCheck from "../middlewares/adminCheck";

const proyectRouter = Router();

proyectRouter.get("/", loginCheck, adminCheck, getProyects);
proyectRouter.get("/:id", loginCheck, adminCheck, getProyect);
proyectRouter.post("/", loginCheck, adminCheck, createProyects);
proyectRouter.put("/:id", loginCheck, adminCheck, modifyProyects);
proyectRouter.delete("/:id", loginCheck, adminCheck, deleteProyects);

export default proyectRouter;
