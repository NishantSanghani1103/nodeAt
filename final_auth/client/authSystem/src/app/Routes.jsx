import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";

import Auth from "../features/auth/pages/Auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Auth />
            }
        ]
    }
])