import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Home from "../pages/home/pages/Home";
import Profile from "../pages/profile/pages/Profile";
import SignUp from "../pages/auth/pages/signUp/pages/SignUp";
import SingnIn from "../pages/auth/pages/singnIn/pages/SingnIn";
import Post from "../components/Post";
import Comment from "../components/Comment";
import PostViewModel from "../components/PostViewModel";
import Followers from "../components/Followers";
import EditProfile from "../pages/editProfile/pages/EditProfile";
import LikeModel from "../components/LikeModel";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "home",
                element: <Home />
            }

        ]
    },
    {
        index: true,
        element: <SignUp />
    },
    {
        path: "/profile",
        element: <Profile />
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
        path: "/comment",
        element: <Comment />
    },
    {
        path: "/post-view/:id",
        element: <PostViewModel />
    },
    {
        path: "/like-view/:id",
        element: <LikeModel />
    },
    {
        path: "/followers",
        element: <Followers />
    },
    {
        path: "/edit-profile",
        element: <EditProfile />
    }
])