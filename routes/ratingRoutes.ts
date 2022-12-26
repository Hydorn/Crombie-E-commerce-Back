import { Router } from "express";
import getRatings from "../controllers/ratingController/getRatings";
import createRating from "../controllers/ratingController/createRating";
import deleteRating from "../controllers/ratingController/deleteRating";
import modifyRating from "../controllers/ratingController/putRating";

const ratingRouter = Router();

ratingRouter.get("/?", getRatings);
ratingRouter.post("/", createRating);
ratingRouter.put("/:id", modifyRating);
ratingRouter.delete("/:id", deleteRating);

export default ratingRouter;
