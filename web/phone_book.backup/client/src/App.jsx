import { useState } from "react";
import LogIn from "./components/LogIn.jsx";

function App() {
  const [logged, setLogged] = useState(false);

  const handleLogIn = (bool) => {
    if (bool) setLogged(true);
  };

  console.log(logged);
  return !logged ? (
    <LogIn handleLogIn={handleLogIn} />
  ) : (
    <>
      <p>Logeado!</p>
    </>
  );
}

export default App;
