import { useEffect, useState } from "react";
import myAxios from "../myAxios.js";

function PhoneTable() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    myAxios
      .get("/get_contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (id) => {
    myAxios
      .delete(`/modify_contacts/:${id}`)
      .then((res) => {
        console.log(res);
        alert("deleted succesfully");
      })
      .catch((err) => console.log(err));
  };

  const filterContacts = () => {
    return filter
      ? contacts.filter((c) =>
        c.name.toLowerCase().includes(filter) ||
        c.lastName.toLowerCase().includes(filter) ||
        c.number.toLowerCase().includes(filter)
      )
      : contacts;
  };

  return (
    <>
      <h3>Contactos</h3>
      <input type="text" placeholder="search" onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Numero</th>
          </tr>
        </thead>
        <tbody>
          {filterContacts().map((contact) => (
            <tr>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(contact._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PhoneTable;
