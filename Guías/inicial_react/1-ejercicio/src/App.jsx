"use strict";
import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handler = (event) => {
    event.preventDefault();

    if (isDataOk()) {
      usuario.nombre = nombre;
      usuario.correo = correo;

      console.log(usuario);
    }
  }


  const isDataOk = () => {
    if (nombre.length == 0 || correo.length == 0)
      return false;

    let splittedCorreo = correo.split("@");

    if (!splittedCorreo[0].length || !splittedCorreo[1].length)
      return false;

    return true;
  }

  const warning = () => {
    if (!isDataOk())
      return (
        <>
          <p style={{ color: "red" }}>El nombre/correo no es válido</p>
        </>
      )
    else
      return (<></>)
  }

  let usuario = {
    nombre: "",
    correo: "",
  }

  return (
    <>
      Hola Mundo
      <form action="POST">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"
          onChange={(event) => setNombre(event.target.value)} />

        <label htmlFor="correo">Correo electrónico</label>
        <input type="email" id="correo"
          onChange={(event) => setCorreo(event.target.value)} />

        <button type="submit" onClick={handler}>Enviar</button>
      </form>

      <p>{nombre}</p>
      {warning()}
    </>
  )
}

export default App
