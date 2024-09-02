import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();
const saltRounds = 10;

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  bcrypt
    .hash(password, saltRounds)
    .then(async () => {
      const user = new User({ name, password });
      await user.save();
      res.status(201).json(user);
    })
    .catch((error) => res.status(400).json({ message: error.message }));
});

export default router;
