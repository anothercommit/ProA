<<<<<<< HEAD
import myAxios from "../myAxios.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Task({ task }) {
    const [done, setDone] = useState(task.done);

    const handleChange = () => {
        myAxios.patch(`/tasks/${task.id}`, { done: !done });
        setDone(!done);
    };

    return (
        <>
            <button>
                <Link to="/tasks/create">Create task</Link>
            </button>

            <div class="tasksContainer">
                <label htmlFor="task">
                    <input
                        id="task"
                        type="checkbox"
                        checked={done}
                        onClick={handleChange}
                    />
                    <b>{" " + task.title}</b>
                </label>
                <p>{task.description}</p>
=======
export default function Task({ task }) {
    return (
        <>
            <div>
                <h3>{task.title}</h3>
                <p>{task.desc}</p>
                <input type="checkbox" />
>>>>>>> c0280bc54ab10236feffec4824e278c7fbaa90ed
            </div>
        </>
    );
}
