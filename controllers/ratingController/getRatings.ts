import { RequestHandler } from "express";
import Rating from "../../models/rating";

const getRatings: RequestHandler = async (req, res) => {
  let userID, proyectID;
  if (req.query.userID) userID = String(req.query.userID);
  if (req.query.proyectID) proyectID = String(req.query.proyectID);

  console.log(typeof userID, typeof proyectID);

  try {
    // Get Rating from userID in ProyectID
    if (userID && proyectID) {
      const response = await Rating.findAll({
        where: {
          idUser: userID,
          idProyect: proyectID,
        },
      });
      if (response) return res.status(200).json(response);
      else throw new Error("User has not rated this proyect yet");
    }

    // Get ratings from userID
    if (userID) {
      const response = await Rating.findAll({
        where: {
          idUser: userID,
        },
      });
      if (response) return res.status(200).json(response);
      else throw new Error("User has not rated any proyect yet");
    }

    // Get rating of all users in ProyectID
    if (proyectID) {
      const response = await Rating.findAll({
        where: {
          idProyect: proyectID,
        },
      });
      if (response) return res.status(200).json(response);
      else throw new Error("This proyect has not been rated yet");
    }

    if (!proyectID && !userID)
      throw new Error("You need to specify a ProyectID or a UserID");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getRatings;
