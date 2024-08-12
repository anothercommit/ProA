function Tabla({ contactos, handleEliminar }) {
  return (
    <>
      <table>
        <caption><h3>Contactos</h3></caption>

        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Número</td>
          </tr>

          {contactos.map((contacto, i) => (
            <tr>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.numero}</td>
              <td>
                <button onClick={() => handleEliminar(i)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Tabla