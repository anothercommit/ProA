import myAxios from "../myAxios.js";
import { useRef } from "react";

export default function CreateTask() {
    const title = useRef("");
    const desc = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <h1>Create task</h1>
            <form action="POST" onSubmit={handleSubmit}>
                <label htmlFor="title">{"Title "}</label>
                <input
                    type="text"
                    id="title"
                    onChange={(e) => title.current = e.target.value}
                />

                <textarea
                    rows={4}
                    cols={50}
                    onChange={(e) => desc.current = e.target.value}
                >
                    Description
                </textarea>
            </form>
        </>
    );
}
