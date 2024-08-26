import express from "express";
import Contacto from "../models/Contacto.js";

const router = express.Router();

router.get("/contactos", async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.status(200).json(contactos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contacto = await Contacto.findById(req.params.id);
    if (!contacto) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(contacto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
