import { useState } from "react";
import { Link } from "react-router-dom";
import myAxios from "../myAxios.js";

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
            </div>
        </>
    );
}
