import { RequestHandler } from "express";
import Proyect, { ProyectCreationAttributes } from "../../models/proyect";

const createProyects: RequestHandler = async (req, res) => {
  try {
    const proyectBody = req.body as ProyectCreationAttributes;
    if (!proyectBody.contactEmail)
      throw new Error("You need to specify an email");
    if (!proyectBody.description)
      throw new Error("You need a description for the proyect");
    if (!proyectBody.name) throw new Error("You need to add a proyect Name");

    const proyect = await Proyect.create(proyectBody);

    return res.status(201).json(proyect);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default createProyects;
