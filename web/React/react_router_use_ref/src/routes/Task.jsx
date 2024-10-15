import { useState } from "react";
import myAxios from "../myAxios.js";

export default function Task({ task }) {
    const [done, setDone] = useState(task.done);

    const handleChange = () => {
        myAxios.patch(`/tasks/${task.id}`, { done: !done });
        setDone(!done);
    };

    return (
        <>
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
