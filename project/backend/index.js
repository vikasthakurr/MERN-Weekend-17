import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthController from "./controllers/AuthController.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

//mongo connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("error connecting db", err);
  });

app.use("/auth/api", AuthController);

app.get("/test", (req, res) => {
  res.send("test route working");
});

//dummy route
app.get("/", (req, res) => {
  res.end("hi from server");
});

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
