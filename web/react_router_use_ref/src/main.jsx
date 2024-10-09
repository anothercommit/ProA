import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// modules
import LogIn from "./routes/LogIn.jsx";
import Root from "./routes/root.jsx";
import Tasks from "./routes/Tasks.jsx";
import Task from "./routes/Task.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
        children: [
            {
                path: "tasks/:taskId",
                element: <Task />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
