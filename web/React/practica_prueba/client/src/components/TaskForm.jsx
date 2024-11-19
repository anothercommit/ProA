import { useRef } from "react";

export default function TaskForm({ handler }) {
    const taskTitle = useRef(null);

    const createTask = (event) => {
        event.preventDefault();

        taskTitle
            ? handler(taskTitle.current)
            : alert("The title can not be empty");
    };

    return (
        <>
            <form action="POST" onSubmit={createTask}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    onChange={(e) => (taskTitle.current = e.target.value)}
                />

                <input type="submit" />
            </form>
        </>
    );
}
