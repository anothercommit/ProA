import { useState } from "react";

// classes
import Stack from "./utils/Stack.js";
import Queue from "./utils/Queue.js";

// modules
import Form from "./components/Form.jsx";
import StructureElement from "./components/StructureElement.jsx";

export default function App() {
    const [structure, setStructure] = useState({
        type: "",
        content: new Stack(),
    });

    const handleSelectStructure = (value) => {
        setStructure({
            type: value,
            content: value == "stack" ? new Stack() : new Queue(),
        });
    };

    const handleAdd = (value) => {
        if (structure.type == "stack") {
            structure.content.push(value);
        } else {
            structure.content.enqueue(value);
        }
    };

    return (
        <>
            <Form
                handler={handleSelectStructure}
                handleAdd={handleAdd}
            />

            <h2>{structure.type}</h2>
            <div style={{ border: "solid 2px", maxWidth: "fit-content" }}>
                {
                    //
                    structure.content.elements.map((el, key) => (
                        <StructureElement value={el} key={key} />
                    ))
                    //
                }
            </div>
        </>
    );
}
