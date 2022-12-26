import { RequestHandler } from "express";
import Proyect from "../../models/proyect";

const getProyects: RequestHandler = async (req, res) => {
  try {
    const proyects = await Proyect.findAll();
    return res.status(200).json(proyects);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getProyects;
