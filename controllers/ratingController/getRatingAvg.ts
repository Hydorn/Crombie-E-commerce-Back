import { RequestHandler } from "express";
import { Sequelize } from "sequelize-typescript";
import Rating from "../../models/rating";

const getRatingAvg: RequestHandler = async (req, res) => {
  try {
    let proyectID = req.params.proyectID;
    if (!proyectID) throw new Error("You need to specify proyect ID");
    proyectID = String(proyectID);

    const ratings = await Rating.findAndCountAll({
      raw: true,
      attributes: [
        [Sequelize.fn("AVG", Sequelize.col("punctuation")), "punctuation"],
      ],
      where: {
        idProyect: proyectID,
      },
    });

    const response = {
      average: ratings.rows[0]?.punctuation,
      votes: ratings.count,
    };

    return res.status(200).json(response);

    //else throw new Error("This proyect has not been rated yet");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getRatingAvg;
