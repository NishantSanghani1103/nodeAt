import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import Cart from "../features/cart/pages/Cart";
import Checkout from "../features/checkOut/pages/Checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
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
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element: <Checkout />
            }
        ]
    }
])