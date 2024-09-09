function PhoneTable({ contacts }) {
  return (
    <>
      <table>
        <caption>Contactos</caption>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Numero</th>
          </tr>
        </thead>
        <tbody>
          {contacts.forEach((contact) => {
            <tr>
              <td>{contact.name}</td>
              <td>{contact.lastName}</td>
              <td>{contact.number}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}

export default PhoneTable;
