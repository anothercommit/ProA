import { useEffect, useRef, useState } from "react";

// Classes
import Queue from "./utils/Queue.js";
import Stack from "./utils/Stack.js";

// Modules
import StructForm from "./components/StructForm.jsx";
import Pila from "./components/Pila.jsx";
import Cola from "./components/Cola.jsx";

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
        setRerender(true);
    };

    const handleAdd = (e) => {
        structName.current == "stack"
            ? struct.current.push(e)
            : struct.current.enqueue(e);

        setRerender(true);
    };

    const handleRemove = () => {
        if (struct.current.elements.length) {
            structName.current == "stack"
                ? struct.current.pop()
                : struct.current.dequeue();
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

            {structName.current == "stack"
                ? <Pila elements={struct.current.elements} />
                : <Cola elements={struct.current.elements} />}
        </>
    );
}
