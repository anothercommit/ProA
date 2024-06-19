import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(6);

    return (
        <div>
            <button onClick={setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={setCount(count + 1)}>+</button>
        </div>
    )
}
