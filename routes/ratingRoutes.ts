import { Router } from "express";
import getRatings from "../controllers/ratingController/getRatings";
import createRating from "../controllers/ratingController/createRating";
import deleteRating from "../controllers/ratingController/deleteRating";
import modifyRating from "../controllers/ratingController/putRating";
import loginCheck from "../middlewares/loginCheck";
import getRatingAvg from "../controllers/ratingController/getRatingAvg";

const ratingRouter = Router();

/*ratingRouter.get("/?", getRatings);*/
ratingRouter.get("/?", getRatingAvg);
ratingRouter.post("/", loginCheck, createRating);
ratingRouter.put("/:id", loginCheck, modifyRating);
ratingRouter.delete("/:id", loginCheck, deleteRating);

export default ratingRouter;
