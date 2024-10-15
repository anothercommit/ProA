import { useState } from "react";
import LogIn from "./components/LogIn.jsx";
import PhoneTable from "./components/PhoneTable.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogIn = (bool) => {
    if (bool) setLogged(true);
  };

  console.log("logged: ", logged);
  return !logged ? <LogIn handleLogIn={handleLogIn} /> : (
    <>
      <p>Logeado!</p>
      <ContactForm />
      <PhoneTable />
    </>
  );
}

export default App;
