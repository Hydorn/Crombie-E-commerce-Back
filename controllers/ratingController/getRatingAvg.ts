import sequelize from "../../config/sequelize";
import { RequestHandler } from "express";
import Proyect from "../../models/proyect";
import Rating from "../../models/rating";

const getRatingAvg: RequestHandler = async (req, res) => {
  try {
    let proyectID = req.query.proyectID;
    if (!proyectID) throw new Error("You need to specify proyect ID");
    proyectID = String(proyectID);

    console.log(proyectID);
    console.log();

    const response = await Rating.findOne({
      where: {
        idProyect: proyectID,
      },
      include: [
        {
          model: Rating, //including ratings array
          as: "ratings",
          attributes: [], //but making it empty
        },
      ],
      attributes: {
        include: [
          [sequelize.fn("AVG", sequelize.col("ratings.rating")), "avgRating"],
        ],
      },

      group: ["Proyect.id"],
    });
    if (response) return res.status(200).json(response);
    else throw new Error("This proyect has not been rated yet");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getRatingAvg;
