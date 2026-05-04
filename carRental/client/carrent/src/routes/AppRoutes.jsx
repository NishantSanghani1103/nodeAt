import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/pages/Home";
import CarDetails from "../pages/carDetails/pages/CarDetails";
import Cars from "../pages/cars/pages/Cars";
import Order from "../pages/myOrder/pages/Order";
import AdminLayouts from "../layouts/AdminLayouts";
import AdminDashboard from "../pages/admin/pages/AdminDashboard";
import AddCar from "../pages/admin/pages/AddCar";
import ManageCar from "../pages/admin/pages/ManageCar";
import ManageBookings from "../pages/admin/pages/ManageBookings";

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
            },
            {
                path: "admin",
                element: <AdminLayouts />,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashboard />
                    },
                    {
                        path:"add/car",
                        element:<AddCar/>
                    },
                    {
                        path:"/admin/manage/car",
                        element:<ManageCar/>
                    },
                    {
                        path:"/admin/manage/booking",
                        element:<ManageBookings/>
                    }
                ]
            }

        ]
    }
])