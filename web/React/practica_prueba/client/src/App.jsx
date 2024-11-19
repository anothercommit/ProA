import { useState, useEffect } from "react";
import { getTasks, postTask } from "./CRUD.js";

// Modules
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(true);

    useEffect(() => {
        getTasks()
            .then((res) => setTasks(res))
            .catch((err) => console.log(err));

        setUpdate(false);
    }, [update]);

    const handleTaskForm = (taskTitle) => {
        postTask(tasks[tasks.length - 1].id + 1, taskTitle).then(() =>
            setUpdate(true),
        );
    };

    return (
        <>
            <TaskForm handler={handleTaskForm} />
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;
