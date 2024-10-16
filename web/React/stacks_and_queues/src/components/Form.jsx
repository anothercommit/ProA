import { useRef } from "react";

export default function Form({ handler, handleAdd }) {
    const value = useRef();

    // TODO: Si no hay ningun radio selected, segundo fieldset deshabilitado

    return (
        <>
            <form>
                <fieldset style={{ maxWidth: "fit-content" }}>
                    <legend>Choose the data structure</legend>

                    <label htmlFor="stack">
                        <input
                            type="radio"
                            id="stack"
                            name="structure"
                            value="stack"
                            onChange={(e) => handler(e.target.value)}
                        />
                        Stack
                    </label>

                    <label htmlFor="queue">
                        <input
                            type="radio"
                            id="queue"
                            name="structure"
                            value="queue"
                            onChange={(e) => handler(e.target.value)}
                        />
                        Queue
                    </label>
                </fieldset>

                <fieldset>
                    <form onSubmit={() => handleAdd(value)}>
                        <input
                            type="text"
                            id="value"
                            onChange={(e) => value.current = e.target.value}
                        />
                        <input type="submit" />
                    </form>
                </fieldset>
            </form>
        </>
    );
}
