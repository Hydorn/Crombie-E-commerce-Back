import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());
// app.use();       -> For router

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running");
});