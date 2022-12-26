import { RequestHandler } from "express";
import Proyect from "../../models/proyect";

type ModifyProyect = {
  name?: string;
  description?: string;
  contactEmail?: string;
};
const modifyProyects: RequestHandler = async (req, res) => {
  try {
    const id = req.params?.id;
    const modify = req.body as ModifyProyect;
    const proyect = await Proyect.findByPk(id);

    if (!proyect) throw new Error("Proyect not found");

    modify.name ? (proyect.name = modify.name) : proyect.name;
    modify.description
      ? (proyect.description = modify.description)
      : proyect.description;
    modify.contactEmail
      ? (proyect.contactEmail = modify.contactEmail)
      : proyect.contactEmail;

    await proyect.save();

    return res.status(200).json(proyect);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default modifyProyects;
