"use strict"

function Formulario({ handleName, handleEmail, handleSubmit }) {

  return (
    <>
      <form action="POST">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name"
          placeholder="nombre"
          onChange={handleName}
        />

        <label htmlFor="email">Correo</label>
        <input type="text" id="email"
          placeholder="email"
          onChange={handleEmail}
        />

        <button type="submit" onClick={handleSubmit}>Guardar</button>
      </form>
    </>
  )
}

export default Formulario
