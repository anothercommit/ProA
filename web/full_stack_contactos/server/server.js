import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import getRoutes from "./routes/getContacto.js";
import modifyRoutes from "./routes/modifyContacto.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

app.use("/contactos", getRoutes);
app.use("/contacto", modifyRoutes);

app.get("/", (_, res) => res.send("¡Hola mundo!"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
