import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myAxios from "../myAxios.js";

// Modules
import Task from "./Task.jsx";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        myAxios.get("/tasks/")
            .then((res) => setTasks(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <h1>Your tasks</h1>

            <button>
                <Link to="/tasks/create">Create task</Link>
            </button>

            {tasks.map((task) => <Task task={task} key={task.id} />)}
        </>
    );
}
