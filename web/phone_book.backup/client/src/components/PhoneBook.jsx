import { useEffect, useState } from "react";
import PhoneTable from "./PhoneTable";
import myAxios from "../myAxios";

function PhoneBook() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    myAxios
      .get("/get_contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <PhoneTable contacts={contacts} />;
}

export default PhoneBook;
