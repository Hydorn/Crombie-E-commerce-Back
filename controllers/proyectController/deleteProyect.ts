import { RequestHandler } from "express";
import Proyect from "../../models/proyect";

const deleteProyects: RequestHandler = async (req, res) => {
  try {
    const id = req.params?.id;
    const del = await Proyect.findByPk(id);
    await del?.destroy();
    const deleted = {
      message: "Proyect deleted",
      del,
    };
    return res.status(200).json(deleted);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default deleteProyects;
