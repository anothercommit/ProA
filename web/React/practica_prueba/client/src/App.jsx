import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    // TODO: hacer la peticion con axios
    let tasks;
    setTasks(tasks);
  }, [update]);

  return <></>;
}

export default App;
