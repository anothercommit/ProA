function Formulario({ handleNombre, handleApellido, handleNumero, handleSubmit }) {
  return (
    <>
      <form action="POST">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="nombre" onChange={handleNombre} />

        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="apellido" onChange={handleApellido} />

        <label htmlFor="numero">Numero</label>
        <input type="text" id="numero" placeholder="numero de telefono" onChange={handleNumero} />

        <button type="submit" onClick={handleSubmit}>Guardar</button>
      </form>
    </>
  )
}

export default Formulario
