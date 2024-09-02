import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { nombre, contraseña } = req.body;
});

export default router;
