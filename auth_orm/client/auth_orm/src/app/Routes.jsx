import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Login from "../features/auth/pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
])