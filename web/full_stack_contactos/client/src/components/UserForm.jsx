import { useState } from "react";
import myAxios from "../myAxios.js";

function UserForm({ type }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = type == "Log In" ? "/login" : "/signup";

    console.log(name, password);

    myAxios
      .post(url, { name: name, password: password })
      .then((res) => {
        alert("Usuario creado existosamente");
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status == 406)
          alert("Ya existe un usuario con ese nombre");
        console.log(err);
      });
  };

  return (
    <form action="POST" onSubmit={handleSubmit}>
      <div className="userFormLogin">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">{type}</button>
    </form>
  );
}

export default UserForm;
