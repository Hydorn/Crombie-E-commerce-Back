import { RequestHandler } from "express";
import Rating from "../../models/rating";

const deleteRating: RequestHandler = async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) throw new Error("need to specify an ID to delete");
    const del = await Rating.findByPk(id);
    if (!del) throw new Error("Rating not found");

    await del.destroy();
    res.status(200).json(del);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
  return;
};

export default deleteRating;
