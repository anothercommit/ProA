import { useState } from "react"

function Tabla({ usuarios, handleEditar, handleEliminar }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value)
  };

  const filterUsuarios = () => {
    return usuarios.filter((usuario) => usuario.name.toLowerCase().includes(filter));
  }

  return (
    <>
      <input type="search" placeholder="filtrar usuarios" onChange={handleFilter} />
      <table>
        <tbody>
          <tr>
            <td><b>Nombre</b></td>
            <td><b>Correo</b></td>
          </tr>

          {filterUsuarios().map((usuario) => (
            <tr>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>
                <button style={{ marginRight: "10px" }} onClick={() => handleEditar(usuario.id)}>Editar</button>
                <button onClick={() => handleEliminar(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table >
    </>
  )
}

export default Tabla

