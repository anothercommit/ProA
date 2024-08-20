import { useEffect, useState } from 'react'
import { myAxios } from "./myAxios.jsx";
import Tabla from './components/Tabla.jsx';
import Formulario from './components/Formulario.jsx';

function App() {
  const [userList, setUserList] = useState([])
  const [actualizar, setActualizar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    myAxios.get(`/usuarios`)
      .then(res => setUserList(res.data))
      .catch(error => console.error("Could't fetch /usuarios\n", error))
    setActualizar(false);
  }, [actualizar]);

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setActualizar(true);

    for (const usuario of userList) {
      if (usuario.name.toLowerCase() == name.toLowerCase()) {
        if (usuario.email.toLowerCase() == email.toLowerCase()) {
          alert("El usuario ya existe");
          return;
        }
        let confirmacion = confirm(
          `El usuario ${name} (email: ${email}) ya existe ¿Desea modificar su correo?`);

        if (confirmacion)
          putUsuario(usuario.id);

        return;
      }
    }

    myAxios.post(`/usuarios`,
      { id: userList.length + 1, name, email })
      .then(response =>
        console.log('Usuario posteado:', response.data))
      .catch(error => {
        console.error('Error posteando el usuario!', error);
      })
      .finally(() => setActualizar(true));
  }

  const putUsuario = (id) => {
    myAxios.patch(`/usuarios/${id}`, { email: email })
      .then(res =>
        console.log(`Usuario (id: ${id}) actualizado:`, res.data))
      .catch(error => {
        console.error(`Error actualizando el usuario id: ${id}:`, error);
        alert("No se pudo actualizar el usuario. Corrobore los datos ingresados y la lista de usuarios");
      })
      .finally(() => setActualizar(true));
  }

  const handleEditar = (id) => {
    putUsuario(id);
  }

  const handleEliminar = (id) => {
    setActualizar(true);

    myAxios.delete(`/usuarios/${id}`)
      .then(response => {
        console.log('Usuario eliminado:', response.data);
      })
      .catch(error => {
        console.error('Error eliminando el usuario!', error);
      })
      .finally(() => setActualizar(true));
  }

  return (
    <>
      <h3>Crear usuario</h3>

      <Formulario
        handleName={handleName}
        handleEmail={handleEmail}
        handleSubmit={handleSubmit}
      />

      <Tabla
        usuarios={userList}
        handleEditar={handleEditar}
        handleEliminar={handleEliminar}
      />
    </>
  )
}

export default App
