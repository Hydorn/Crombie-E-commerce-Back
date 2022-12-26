import sequelize from "./config/sequelize";
import cors from "cors";
import express from "express";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", appRouter);

app.listen(process.env.PORT || 3000, async () => {
  console.log("Server running");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err: any) {
    console.log("Connection hasn't been established successfully.");
    console.log(err.message);
  }
});
