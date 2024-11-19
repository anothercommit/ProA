import Task from "./Task.jsx";

export default function TaskList({ tasks }) {
    return (
        <>
            {tasks.map((task, key) => (
                <Task task={task} key={key} />
            ))}
        </>
    );
}
