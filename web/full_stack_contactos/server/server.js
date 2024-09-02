import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import getRoutes from "./routes/getContacts.js";
import modifyRoutes from "./routes/modifyContact.js";
import logIn from "./routes/logIn.js";
import signUp from "./routes/signUp.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connect to MongoDB...", err));

app.use("/contacts", getRoutes);
app.use("/contact", modifyRoutes);
app.use("/login", logIn);
app.use("/signup", signUp);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
