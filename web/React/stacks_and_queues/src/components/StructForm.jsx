import { useRef, useState } from "react";

export default function StructForm({ select, add, remove }) {
    const [enabled, setEnabled] = useState(true);
    const inputRef = useRef(null);

    const handleSelect = (e) => {
        select(e.target.value);
        setEnabled(false);
    };

    return (
        <>
            <form>
                <fieldset style={{ maxWidth: "fit-content" }}>
                    <legend>Choose a structure</legend>

                    <label>
                        <input
                            type="radio"
                            value="stack"
                            name="struct"
                            onChange={handleSelect}
                        />
                        Stack
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="queue"
                            name="struct"
                            onChange={handleSelect}
                        />
                        Queue
                    </label>
                </fieldset>
            </form>

            <form>
                <fieldset disabled={enabled} style={{ border: "0px" }}>
                    <input
                        type="text"
                        ref={inputRef}
                        style={{ width: "100px" }}
                    />
                    <button
                        type="button"
                        onClick={() => add(inputRef.current.value)}
                    >
                        +
                    </button>

                    <button type="button" onClick={() => remove()}>-</button>
                </fieldset>
            </form>
        </>
    );
}
