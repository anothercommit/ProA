import { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
    const [logged, setLogged] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setLogged(true);
    };

    return (
        <>
            {logged
                ? (
                    <p>
                        Already logged. Go to the{" "}
                        <Link to="/tasks">tasks page</Link>.
                    </p>
                )
                : (
                    <form action="POST" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input type="text" />

                        <label htmlFor="pass">Password</label>
                        <input type="text" />

                        <button type="submit">Log In</button>
                    </form>
                )}
        </>
    );
}
