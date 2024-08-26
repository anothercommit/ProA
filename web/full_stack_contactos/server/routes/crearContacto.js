import express from "express";
import Contacto from "../models/Contacto.js";

const router = express.Router();

router.post("/crearContacto", async (req, res) => {
  try {
    const { nombre, apellido, numero } = req.body;
    const contacto = new Contacto({ nombre, apellido, numero });
    await contacto.save();
    res.status(201).json(contacto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
