import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
  },
  contraseña: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Usuario", UsuarioSchema);
