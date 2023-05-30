const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Videojuego = require("./videojuego");
// const ejs = require("ejs");
// const path = require("path");
// const fs = require("fs");
const port = 3000;

mongoose.connect(
  "mongodb+srv://joaco:dBch3oZVGb1aBTFu@form-navbar.hdp9qa2.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// const morgan = require("morgan");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get('/videojuegos', async (req, res) => {
  try {
    const documentos = await Videojuego.find();

    res.render("videojuegos", { videojuegos: documentos })
    // res.json(documentos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving documentos');
  }
});

app.post("/", (req, res) => {
  const nombre = req.body.nombre;
  const dev = req.body.dev;
  const publisher = req.body.publisher;
  // const indie = req.body.indie;
  const precio = req.body.precio;
  const fecha = req.body.fecha;

  const videojuego = new Videojuego({
    nombre: nombre,
    dev: dev,
    indie: true,
    publisher: publisher,
    precio: precio,
    fecha: fecha,
  });

  videojuego.save();
  console.log(videojuego);
});
