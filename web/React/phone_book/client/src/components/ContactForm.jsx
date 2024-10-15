import { useState } from "react";
import myAxios from "../myAxios.js";

function ContactForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, lastName, number);

    myAxios
      .post("/modify_contact", {
        name: name,
        lastName: lastName,
        number: number,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h3>Agregar contacto</h3>
      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          onChange={(event) => setLastName(event.target.value)}
        />

        <label htmlFor="number">Number</label>
        <input
          type="text"
          id="number"
          onChange={(event) => setNumber(event.target.value)}
        />

        <button type="submit">Agendar</button>
      </form>
    </>
  );
}

export default ContactForm;
