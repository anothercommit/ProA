import { useState, useEffect } from "react";
import {
    getTasks,
    postTask,
    patchTitleTask,
    patchCompletedTask,
} from "./CRUD.js";

function App() {
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        getTasks()
            .then((res) => setTasks(res))
            .catch((err) => console.log(err));

        setUpdate(false);
    }, [update]);

    return <></>;
}

export default App;
