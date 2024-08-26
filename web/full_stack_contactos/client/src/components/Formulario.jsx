"use strict"

function Formulario({ handleInput, handleSubmit, handleNumero, fieldStatus }) {

  return (
    <>
      <form action="POST">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"
          placeholder="nombre"
          onChange={(event) => handleInput(event, "nombre")}
        />
        {fieldStatus.nombre && <p style={{ color: "red" }}>Introduzca un nombre</p>}

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido"
          placeholder="apellido"
          onChange={(event) => handleInput(event, "apellido")}
        />
        {fieldStatus.apellido && <p style={{ color: "red" }}>Introduzca un apellido</p>}

        <label htmlFor="numero">Numero</label>
        <input type="tel" id="numero"
          placeholder="numero de telefono"
          onChange={handleNumero}
        />
        {fieldStatus.numero && <p style={{ color: "red" }}>Introduzca un número de teléfono válido</p>}

        <button type="submit" onClick={handleSubmit}>Guardar</button>
      </form>
    </>
  )
}

export default Formulario
