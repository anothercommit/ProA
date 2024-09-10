import { useEffect, useState } from "react";
import myAxios from "../myAxios.js";
import { useEffect, useState } from "react";
import Task from "./Task.jsx";

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
<<<<<<< HEAD
            {console.log("tasks ", tasks)}
=======
>>>>>>> c0280bc54ab10236feffec4824e278c7fbaa90ed
            {tasks.map((task) => <Task task={task} key={task.id} />)}
        </>
    );
}
