import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    }
])