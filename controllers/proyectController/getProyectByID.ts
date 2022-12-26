import { RequestHandler } from "express";
import Proyect from "../../models/proyect";
const getProyect: RequestHandler = async (req, res) => {
  try {
    const id = req.params?.id;
    const proyect = await Proyect.findByPk(id);
    res.status(200).json(proyect);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getProyect;
