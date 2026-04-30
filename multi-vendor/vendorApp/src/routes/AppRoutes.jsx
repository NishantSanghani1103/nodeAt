import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/pages/Home";
import SellerDashboard from "../pages/user/seller/dashboard/pages/SellerDashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../pages/user/admin/pages/AdminDashboard";
import SellerLayout from "../components/layouts/SellerLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import SellerProperty from "../pages/user/seller/dashboard/pages/SellerProperty";
import AddProperty from "../pages/user/seller/dashboard/pages/AddProperty";
import Enquiry from "../pages/user/seller/dashboard/pages/Enquiry";
import Profile from "../pages/user/seller/dashboard/pages/Profile";
import ManageUser from "../pages/user/admin/pages/ManageUser";
import ManageProperty from "../pages/user/admin/pages/ManageProperty";
import AdminEnquiry from "../pages/user/admin/pages/AdminEnquiry";
import Reports from "../pages/user/admin/pages/Reports";
import Settings from "../pages/user/admin/pages/Settings";
import Property from "../pages/properties/pages/Property";

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
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "properties",
                element:<Property/>
            }





        ]

    },
    // for the admin user
    {
        path: "admin",
        element: <ProtectedRoutes role={["admin"]} />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashboard />
                    },
                    {
                        path: "user",
                        element: <ManageUser />
                    },
                    {
                        path: "property",
                        element: <ManageProperty />
                    },
                    {
                        path: "enquiry",
                        element: <AdminEnquiry />
                    },
                    {
                        path: "reports",
                        element: <Reports />
                    },
                    {
                        path: "settings",
                        element: <Settings />
                    }
                ]
            }
        ]

    },
    // for the seller user
    {
        path: "seller",
        element: <ProtectedRoutes role={["seller"]} />,
        children: [
            {
                element: <SellerLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <SellerDashboard />
                    },
                    {
                        path: "property",
                        element: <SellerProperty />
                    },
                    {
                        path: "add-property",
                        element: <AddProperty />
                    },
                    {
                        path: "enquiry",
                        element: <Enquiry />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            }
        ]

    },

])