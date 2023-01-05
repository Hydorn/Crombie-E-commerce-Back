import { RequestHandler } from "express";
import Rating, { RatingCreationAttributes } from "../../models/rating";

type check = (userId: string, proyectId: string) => Promise<boolean>;

const checkRatings: check = async (userId, proyectId) => {
  const [rating] = await Rating.findAll({
    where: {
      idUser: userId,
      idProyect: proyectId,
    },
  });

  if (rating) return true;
  else return false;
};

const createRating: RequestHandler = async (req, res) => {
  try {
    const body = req.body as RatingCreationAttributes;
    if (!body.idProyect) throw new Error("Proyect ID is required");
    if (!body.idUser) throw new Error("User ID is required");
    if (!body.punctuation) throw new Error("Punctuation is required");
    if (body.punctuation < 0 || body.punctuation > 5)
      throw new Error("Puntuation must be a value between 0 and 5");

    const exists = await checkRatings(body.idUser, body.idProyect);

    if (!exists) {
      const rating = await Rating.create(body);
      return res.status(201).json(rating);
    } else throw new Error("This user already rated this proyect");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default createRating;
