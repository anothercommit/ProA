import mongoose from "mongoose";

const ContactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    unique: false,
    required: true,
  },
  apellido: {
    type: String,
    unique: false,
    required: false,
  },
  numero: {
    type: String,
    unique: true,
    required: true,
  },
});

export default mongoose.model("Contacto", ContactoSchema);
