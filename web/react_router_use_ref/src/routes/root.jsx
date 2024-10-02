import { Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <h1>Welcome</h1>
            <p>
                <Link to="/login">Log In</Link> in order to see the tasks.
            </p>
        </>
    );
}
