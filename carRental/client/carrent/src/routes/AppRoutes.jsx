import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/pages/Home";
import CarDetails from "../pages/carDetails/pages/CarDetails";
import Cars from "../pages/cars/pages/Cars";
import Order from "../pages/myOrder/pages/Order";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "car/:id",
                element: <CarDetails />
            },
            {
                path: "cars",
                element: <Cars />
            },
            {
                path: "order",
                element: <Order />  
            }
        ]
    }
])