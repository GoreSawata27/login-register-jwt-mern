import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

db();
dotenv.config();
const app = express();
app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
