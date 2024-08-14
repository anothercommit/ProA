import { useState } from "react"

function Formulario({ handleNombre, handleApellido, handleNumero, handleSubmit, status }) {

  return (
    <>
      <form action="POST">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="nombre" onChange={handleNombre} />
        {status[0] && <p style={{ color: "red" }}>Introduzca un nombre</p>}

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="apellido" onChange={handleApellido} />
        {status[1] && <p style={{ color: "red" }}>Introduzca un apellido</p>}

        <label htmlFor="numero">Numero</label>
        <input type="text" id="numero" placeholder="numero de telefono" onChange={handleNumero} />
        {status[2] && <p style={{ color: "red" }}>Introduzca un número de teléfono válido</p>}

        <button type="submit" onClick={handleSubmit}>Guardar</button>
      </form>
    </>
  )
}

export default Formulario
