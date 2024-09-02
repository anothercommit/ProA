import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  const usuario = await User.findOne({ name: name });

  if (usuario) {
    bcrypt.compare(password, usuario.password).then((result) => {
      result //
        ? res.status(200).send(true)
        : res.status(301).send(false);
    });
  } else {
    res.status(404).send("Error: user not found");
  }
});

export default router;
