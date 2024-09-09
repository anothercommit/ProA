import { useState } from "react";
import myAxios from "../myAxios.js";

function LogIn({ handleLogIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, password);

    myAxios
      .post("/login", { name: name, password: password })
      .then((res) => {
        console.log(res.data);

        handleLogIn(true);
      })
      .catch((err) => {
        console.log(err);

        handleLogIn(false);
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
      <button type="submit">Log In</button>
    </form>
  );
}

export default LogIn;
