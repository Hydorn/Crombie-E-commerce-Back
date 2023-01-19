import { RequestHandler } from "express";
import Rating from "../../models/rating";

const getRatingAvg: RequestHandler = async (req, res) => {
  try {
    let proyectID = req.params.proyectID;
    if (!proyectID) throw new Error("You need to specify proyect ID");
    proyectID = String(proyectID);

    const ratings = await Rating.findAll({
      where: {
        idProyect: proyectID,
      },
    });
    let sum = 0;

    ratings.map((el) => (sum = sum + el.punctuation));
    const average = sum / ratings.length;

    return res.status(200).json({ average, votes: ratings.length });
    //else throw new Error("This proyect has not been rated yet");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getRatingAvg;
