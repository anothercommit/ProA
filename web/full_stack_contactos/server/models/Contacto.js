import mongoose from "mongoose";

const ContactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: false,
  },
  numero: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Contacto", ContactoSchema);
