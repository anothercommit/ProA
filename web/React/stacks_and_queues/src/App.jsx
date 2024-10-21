import { useEffect, useRef, useState } from "react";

import Queue from "./utils/Queue.js";
import Stack from "./utils/Stack.js";

import StructForm from "./components/StructForm.jsx";

export default function App() {
    const [rerender, setRerender] = useState(false);
    const structName = useRef("stack");
    const struct = useRef(new Stack());

    useEffect(() => {
        if (rerender) setRerender(false);
    }, [rerender]);

    const handleSelect = (value) => {
        struct.current = value == "queue" ? new Queue() : new Stack();
        structName.current = value;
    };

    const handleAdd = (e) => {
        structName == "stack"
            ? struct.current.push(e)
            : struct.current.enqueue(e);

        setRerender(true);
    };

    const handleRemove = () => {
        if (struct.current.elements.length) {
            structName == "stack"
                ? struct.current.pop(e)
                : struct.current.dequeue(e);
            setRerender(true);
        }
    };

    return (
        <>
            <StructForm
                select={handleSelect}
                add={handleAdd}
                remove={handleRemove}
            />

            {struct.current.elements.map((e, k) => <p key={k}>{e}</p>)}
        </>
    );
}
