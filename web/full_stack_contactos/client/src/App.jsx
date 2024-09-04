import { useState, useEffect } from "react";
import UserForm from "./components/UserForm.jsx";

function App() {
  return (
    <>
      <h1>Contactos</h1>

      <h2>SignUp</h2>

      <UserForm type={"Sign Up"} />

      <h2>LogIn</h2>

      <UserForm type={"Log In"} />
    </>
  );
}

export default App;
