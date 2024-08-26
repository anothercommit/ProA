"use strict";

import { useState, useEffect } from "react"

import Formulario from './components/Formulario.jsx'
import Tabla from './components/Tabla.jsx'
import { myAxios } from "./myAxios.jsx";

function App() {
  const [actualizar, setActualizar] = useState(true);
  const [contactos, setContactos] = useState([]);

  const [fields, setFields] = useState(
    { nombre: "", apellido: "", numero: "" });

  const [wrongFields, setWrongFields] = useState(
    { nombre: false, apellido: false, numero: false });

  useEffect(() => {
    if (actualizar)
      myAxios.get(`/contactos`)
        .then(res => setContactos(res.data))
        .catch(error => console.error("Could't fetch /contactos\n", error))
    setActualizar(false);
  }, [actualizar])

  useEffect(() => {
    myAxios.get('/')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, [])


  const handleInput = (event, key) => {
    let tempFields = fields;
    tempFields[key] = event.target.value;
    setFields(tempFields);

    if (fields[key] && wrongFields[key])
      updateState(key, false);
  };

  const handleNumero = (event) => {
    let tempFields = fields;
    tempFields["numero"] = event.target.value;
    setFields(tempFields);
  };

  const updateState = (key, value) => {
    let newWrongFields = wrongFields;
    newWrongFields[key] = value;
    setWrongFields(newWrongFields);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkSubmit())
      return;

    setActualizar(true);

    for (const contacto of contactos) {
      if (contacto.apellido.toLowerCase() == fields.apellido.toLowerCase()
        && contacto.nombre.toLowerCase() == fields.nombre.toLowerCase()) {

        if (contacto.numero == fields.numero) {
          alert("El contacto ya existe");
          return;
        }

        let confirmacion = confirm(
          `El contacto ${fields.nombre} ${fields.apellido} ya existe ¿Desea modificar su número?`);

        if (confirmacion) {
          myAxios.patch(`/contactos/${contacto.id}`, { numero: fields.numero })
            .then(res =>
              console.log('Contacto actualizado:', res.data))
            .catch(error => {
              console.error('¡Error actualizando el contacto!', error);
              console.error('valor de i:', i);
              alert("No se pudo actualizar el contacto. Corrobore los datos ingresados y la lista de contactos");
            })
            .finally(() => setActualizar(true));
        }

        return;
      }
    }

    myAxios.post(`/contactos`,
      { ...fields, id: contactos.length + 1 })
      .then(response =>
        console.log('Post created:', response.data))
      .catch(error => {
        console.error('There was an error creating the post!', error);
      })
      .finally(() => setActualizar(true));
  }

  const checkSubmit = () => {
    let ok = true;

    if (!fields.nombre) {
      updateState("nombre", true);
      ok = false;
    } if (!fields.apellido) {
      updateState("apellido", true);
      ok = false;
    } if (!fields.numero) {
      updateState("numero", true);
      ok = false;
    }

    return ok;
  }

  const handleEliminar = (id) => {
    setActualizar(true);

    myAxios.delete(`/contactos/${id}`)
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
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleNumero={handleNumero}
        fieldStatus={wrongFields}
      />
      <Tabla contactos={contactos} handleEliminar={handleEliminar} />
    </>
  )
}

export default App
