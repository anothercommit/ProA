const mongoose = require("mongoose");

const videojuegoSchema = new mongoose.Schema({
  nombre: String,
  dev: String,
  publisher: String,
  indie: Boolean,
  precio: Number,
  fecha: String,
});

module.exports = mongoose.model("Videojuego", videojuegoSchema);
