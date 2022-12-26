import { RequestHandler } from "express";
import Rating from "../../models/rating";

type EditRating = {
  punctuation?: number;
  comments?: string;
};
const modifyRating: RequestHandler = async (req, res) => {
  const id = req.params?.id;
  const mod = req.body as EditRating;
  try {
    if (!(mod.punctuation || mod.comments))
      throw new Error("You need to specify at least one field to modify");

    const rating = await Rating.findByPk(id);
    console.log(rating);
    if (!rating) throw new Error("Rating not found");

    mod.punctuation
      ? (rating.punctuation = mod.punctuation)
      : rating.punctuation;
    mod.comments ? (rating.comments = mod.comments) : rating.comments;

    await rating.save();
    return res.status(200).json(rating);
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default modifyRating;
