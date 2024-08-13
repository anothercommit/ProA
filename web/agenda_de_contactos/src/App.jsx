"use strict";

import { useState, useEffect } from "react"
import axios from "axios";

import Formulario from './components/Formulario.jsx'
import Tabla from './components/Tabla.jsx'

function App() {
  const [modified, setModified] = useState(true);
  const [contactos, setContactos] = useState([]);
  const baseUrl = "http://localhost:3000"

  let nombre = "";
  let apellido = "";
  let numero = "";

  useEffect(() => {
    if (modified)
      axios.get(`${baseUrl}/contactos`)
        .then(res => setContactos(res.data))
        .catch(error => console.error("Could't fetch /contactos\n", error))
    setModified(false);
  }, [modified])

  const handleNombre = (event) => nombre = event.target.value;
  const handleApellido = (event) => apellido = event.target.value;
  const handleNumero = (event) => numero = event.target.value;

  const handleEliminar = (id) => {
    axios.delete(`${baseUrl}/contactos/${id}`)
      .then(response => {
        console.log('Post deleted:', response.data);
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      })
      .finally(() => setModified(true));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let repetido = -1;

    let nuevoContacto = {
      nombre: nombre,
      apellido, apellido,
      numero, numero,
      id: contactos.length + 1,
    }

    for (let i = 0; i < contactos.length; i++) {
      if (contactos[i].apellido.toLowerCase() == apellido.toLowerCase()
        && contactos[i].nombre.toLowerCase() == nombre.toLowerCase()) {
        repetido = i;
        break;
      }
    }

    if (repetido >= 0) {
      let confirmacion = confirm(
        `El contacto ${nombre} ${apellido} ya existe ¿Desea modificar su número?`);
      if (confirmacion) {
        // if (confirmation){
        //   axios.put() 
        //   modified = true;
        // }
      }
    } else {
      axios.post(`${baseUrl}/contactos`, nuevoContacto)
        .then(response => {
          console.log('Post created:', response.data);
        })
        .catch(error => {
          console.error('There was an error creating the post!', error);
        })
        .finally(() => setModified(true));
    }

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
