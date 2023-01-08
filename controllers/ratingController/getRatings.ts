import { RequestHandler } from "express";
import Proyect, { ProyectCreationAttributes } from "../../models/proyect";
import User from "../../models/user";
import Rating from "../../models/rating";
type Response = {
  userName: string;
  userID: string;
  proyectName: string;
  proyectID: string;
  punctuation: number;
  comments: string;
};
const getRatings: RequestHandler = async (req, res) => {
  let userID, proyectID;
  if (req.query.userID) userID = String(req.query.userID);
  if (req.query.proyectID) proyectID = String(req.query.proyectID);

  try {
    // Get Rating from userID in ProyectID
    if (userID && proyectID) {
      const response = await Rating.findOne({
        where: {
          idUser: userID,
          idProyect: proyectID,
        },
      });
      if (response) {
        const user = await User.findByPk(response.idUser);
        const proyect = await Proyect.findByPk(response.idProyect);
        const resp = {
          userName: user?.firstName,
          userID: user?.id,
          proyectName: proyect?.name,
          proyectID: proyect?.id,
          punctuation: response.punctuation,
          comments: response.comments,
        } as Response;
        return res.status(200).json(resp);
      } else throw new Error("User has not rated this proyect yet");
    }

    // Get ratings from userID
    if (userID) {
      const response = await Rating.findAll({
        where: {
          idUser: userID,
        },
      });
      if (response) {
        const user = await User.findByPk(response[0].idUser);

        const getRatingBody = async (el: Rating) => {
          const proyect = await Proyect.findByPk(el.idProyect);
          const ratingBody = {
            userName: user?.firstName,
            userID: user?.id,
            proyectName: proyect?.dataValues?.name,
            proyectID: proyect?.dataValues?.id,
            punctuation: el.punctuation,
            comments: el.comments,
          } as Response;
          return ratingBody;
        };

        let resp = await Promise.all(response.map(getRatingBody));
        return res.status(200).json(resp);
      } else throw new Error("User has not rated any proyect yet");
    }

    // Get rating of all users in ProyectID
    if (proyectID) {
      const response = await Rating.findAll({
        where: {
          idProyect: proyectID,
        },
      });
      if (response) {
        const proyect = await Proyect.findByPk(response[0].idProyect);

        const getRatingBody = async (el: Rating) => {
          const user = await User.findByPk(el.idUser);
          const ratingBody = {
            userName: user?.firstName,
            userID: user?.id,
            proyectName: proyect?.dataValues?.name,
            proyectID: proyect?.dataValues?.id,
            punctuation: el.punctuation,
            comments: el.comments,
          } as Response;
          return ratingBody;
        };

        let resp = await Promise.all(response.map(getRatingBody));
        return res.status(200).json(resp);
        return res.status(200).json(response);
      } else throw new Error("This proyect has not been rated yet");
    }

    if (!proyectID && !userID)
      throw new Error("You need to specify a ProyectID or a UserID");
  } catch (err: any) {
    return res.status(400).json(err.message);
  }
};

export default getRatings;
