import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";

db();
dotenv.config();
const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  res.json("hello");
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
