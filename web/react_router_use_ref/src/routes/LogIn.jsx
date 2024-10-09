import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import myAxios from "../myAxios.js";

export default function LogIn() {
    const [logged, setLogged] = useState(false);
    const users = useRef([]);
    const name = useRef("");
    const password = useRef("");
    const [logInTry, setLogInTry] = useState(false);

    useEffect(() => {
        if (logInTry && !logged) {
            setLogInTry(false);
            alert("Wrong username/password");
        }
    }, [logInTry]);

    const handleSubmit = (event) => {
        event.preventDefault();

        myAxios.get("/users/")
            .then((res) => users.current = res.data)
            .then(() => {
                users.current.forEach((user) => {
                    if (
                        user.username == name.current &&
                        user.password == password.current
                    ) {
                        setLogged(true);
                    }
                });
            })
            .catch((err) => console.log(err))
            .finally(() => setLogInTry(true));
    };

    return (
        <>
            {logged
                ? (
                    <p>
                        {"Already logged. Go to the "}
                        <Link to="/tasks">tasks page</Link>.
                    </p>
                )
                : (
                    <form action="POST" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            onChange={(event) =>
                                name.current = event.target.value}
                        />

                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            onChange={(event) =>
                                password.current = event.target.value}
                        />

                        <button type="submit">Log In</button>
                    </form>
                )}
        </>
    );
}
