import { useState } from "react";
import { patchCompletedTask } from "../CRUD.js";

export default function Task({ task }) {
    const [completed, setCompleted] = useState(task.completed);

    const handleChange = () => {
        patchCompletedTask(task.id, completed).then(() =>
            setCompleted(!completed),
        );
    };

    return (
        <>
            <div className="tasksContainer">
                <label htmlFor="task">
                    <input
                        id="task"
                        type="checkbox"
                        defaultChecked={completed}
                        onClick={handleChange}
                    />
                    {" " + task.title}
                </label>
            </div>
        </>
    );
}
