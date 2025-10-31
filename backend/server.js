import express from "express";
import dotenv from "dotenv";
import db from "./DB/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  db();
});
