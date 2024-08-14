"use strict";

import { useState, useEffect } from "react"
import axios from "axios";

import Formulario from './components/Formulario.jsx'
import Tabla from './components/Tabla.jsx'

function App() {
  const [actualizar, setActualizar] = useState(true);
  const [contactos, setContactos] = useState([]);
  const [wrongFields, setWrongFields] = useState([false, false, false]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");

  const baseUrl = "http://localhost:3000"

  useEffect(() => {
    if (actualizar)
      axios.get(`${baseUrl}/contactos`)
        .then(res => setContactos(res.data))
        .catch(error => console.error("Could't fetch /contactos\n", error))
    setActualizar(false);
  }, [actualizar])

  const handleNombre = (event) => {
    setNombre(event.target.value);

    if (nombre && wrongFields[0])
      setWrongFields([false, wrongFields[1], wrongFields[2]]);
  };

  const handleApellido = (event) => {
    setApellido(event.target.value);

    if (apellido && wrongFields[1])
      setWrongFields([wrongFields[0], false, wrongFields[2]]);
  };

  const handleNumero = (event) => {
    setNumero(event.target.value);

    if (numero && wrongFields[2])
      setWrongFields([wrongFields[0], wrongFields[1], false]);
  };

  const checkSubmit = () => {
    let ok = true;

    if (!nombre) {
      setWrongFields([true, wrongFields[1], wrongFields[2]]);
      ok = false;
    }

    if (!apellido) {
      setWrongFields([wrongFields[0], true, wrongFields[2]]);
      ok = false;
    }

    if (!numero) {
      setWrongFields([wrongFields[0], wrongFields[1], true]);
      ok = false;
    }

    return ok;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkSubmit())
      return;

    setActualizar(true);

    let repetido = -1;
    for (let i = 0; i < contactos.length; i++) {
      if (contactos[i].apellido.toLowerCase() == apellido.toLowerCase()
        && contactos[i].nombre.toLowerCase() == nombre.toLowerCase()) {
        if (contactos[i].numero == numero) {
          alert("El contacto ya existe");
          return;
        }
        repetido = i;
        break;
      }
    }

    let nuevoContacto = {
      nombre: nombre,
      apellido, apellido,
      numero, numero,
      id: contactos.length + 1
    };

    if (repetido >= 0) {
      let confirmacion = confirm(
        `El contacto ${nombre} ${apellido} ya existe ¿Desea modificar su número?`);
      if (confirmacion) {
        axios.put(`${baseUrl}/contactos/${repetido + 1}`, nuevoContacto)
          .then(res =>
            console.log('Contacto actualizado:', res.data))
          .catch(error => {
            console.error('¡Error actualizando el contacto!', error);
            alert("No se pudo actualizar el contacto. Corrobore los datos ingresados y la lista de contactos")ñ
          })
          .finally(() => setActualizar(true));
      }
    } else {
      axios.post(`${baseUrl}/contactos`, nuevoContacto)
        .then(response =>
          console.log('Post created:', response.data))
        .catch(error => {
          console.error('There was an error creating the post!', error);
        })
        .finally(() => setActualizar(true));
    }
  }

  const handleEliminar = (id) => {
    axios.delete(`${baseUrl}/contactos/${id}`)
      .then(response => {
        console.log('Post deleted:', response.data);
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      })
      .finally(() => setActualizar(true));
  }

  return (
    <>
      <h1>Agenda de contactos</h1>

      <Formulario
        handleNombre={handleNombre}
        handleApellido={handleApellido}
        handleNumero={handleNumero}
        handleSubmit={handleSubmit}
        status={wrongFields}
      />
      <Tabla contactos={contactos} handleEliminar={handleEliminar} />
    </>
  )
}

export default App
