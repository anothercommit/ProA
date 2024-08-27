import express from "express";
import Contacto from "../models/Contacto.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { nombre, apellido, numero } = req.body;
    const contacto = new Contacto({ nombre, apellido, numero });
    await contacto.save();
    res.status(201).json(contacto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await Contacto.findByIdAndDelete(req.params.id);

    if (!user)
      //
      return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
