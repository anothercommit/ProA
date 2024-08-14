function Tabla({ contactos, handleEliminar }) {
  return (
    <>
      <table>
        <caption><h3>Contactos</h3></caption>

        <tbody>
          <tr>
            <td><b>Nombre</b></td>
            <td><b>Apellido</b></td>
            <td><b>Número</b></td>
          </tr>

          {contactos.map((contacto) => (
            <tr>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.numero}</td>
              <td>
                <button onClick={() => handleEliminar(contacto.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Tabla
