"use strict";

import { useState } from "react"
import Formulario from './components/Formulario.jsx'
import Tabla from './components/Tabla.jsx'

function App() {
  const [contactos, setContactos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");

  const handleNombre = (event) => setNombre(event.target.value);
  const handleApellido = (event) => setApellido(event.target.value);
  const handleNumero = (event) => setNumero(event.target.value);

  const handleEliminar = (i) => {
    setContactos([...contactos.slice(0, i), ...contactos.slice(i + 1)]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    contactos.forEach((c, i) => {
      if (c.apellido.toLowerCase() == apellido.toLowerCase() &&
        c.nombre.toLowerCase() == nombre.toLowerCase()) {
        let confirmation = confirm(
          `El contacto ${nombre} ${apellido} ya existe ¿Desea modificar su número?`);

        if (confirmation)
          setContactos([
            ...contactos.slice(0, i),
            { nombre: nombre, apellido: apellido, numero: numero },
            ...contactos.slice(i + 1)
          ]);
      }
    })

    setContactos([
      ...contactos,
      { nombre: nombre, apellido: apellido, numero: numero }
    ]);
  }

  return (
    <>
      <h1>Agenda de contactos</h1>

      <Formulario
        handleNombre={handleNombre}
        handleApellido={handleApellido}
        handleNumero={handleNumero}
        handleSubmit={handleSubmit}
      />
      <Tabla contactos={contactos} handleEliminar={handleEliminar} />
    </>
  )
}

export default App
