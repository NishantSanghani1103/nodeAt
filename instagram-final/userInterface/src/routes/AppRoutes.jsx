import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/home/pages/Home";
import Profile from "../pages/profile/pages/Profile";
import SignUp from "../pages/auth/pages/SignUp";
import SingnIn from "../pages/auth/pages/singnIn/pages/SingnIn";
import Post from "../components/Post";
import Comment from "../components/Comment";
import PostViewModel from "../components/PostViewModel";
import Followers from "../components/Followers";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            }

        ]
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <SingnIn />
    },
    {
        path: "/post",
        element: <Post />
    },
    {
        path:"/comment",
        element:<Comment/>
    },
    {
        path:"/post-view",
        element:<PostViewModel/>
    },
    {
        path:"/followrs",
        element:<Followers/>
    }
])