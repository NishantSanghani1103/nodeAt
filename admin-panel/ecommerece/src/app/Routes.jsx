import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import Home from "../pages/Home";
import Login from "../features/auth/pages/Login";
import Cart from "../features/cart/pages/Cart";
import Checkout from "../features/checkOut/pages/Checkout";
import Order from "../features/order/pages/Order";
import WishList from "../features/wishList/pages/WishList";
import ProductDetails from "../features/products/pages/ProductDetails";
import ProductItems from "../features/categoryProduct/pages/ProductItems";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import ChangePassword from "../features/auth/pages/ChangePassword";

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
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/change-password",
                element:<ChangePassword/>
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element: <Checkout />
            },
            {
                path: "order",
                element: <Order />
            },
            {
                path: "wishlist",
                element: <WishList />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: "/product-items/:catName",
                element: <ProductItems />
            }

        ]
    }
])