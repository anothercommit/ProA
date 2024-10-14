export default function Task({ task }) {
    return (
        <>
            <div>
                <h3>{task.title}</h3>
                <p>{task.desc}</p>
                <input type="checkbox" />
            </div>
        </>
    );
}
