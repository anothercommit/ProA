const mongoose = require("mongoose");

const videojuegoSchema = new mongoose.Schema({
  nombre: String,
  dev: String,
  publisher: String,
  indie: Boolean,
  precio: Number,
  fecha: String,
});

const Videojuego = mongoose.model('Videojuego', videojuegoSchema);

// module.exports = mongoose.model("Videojuego", videojuegoSchema);

module.exports = Videojuego;