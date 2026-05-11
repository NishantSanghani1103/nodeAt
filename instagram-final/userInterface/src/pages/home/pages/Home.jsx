/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import Stories from '../../../components/story/Stories'
import {
    FiHeart,
    FiMessageCircle,
    FiSend,
    FiBookmark,
    FiMoreHorizontal,
} from "react-icons/fi";
import { postViewAllApi } from '../../../services/post.service';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../utils/user.utils';
import LikeModel from '../../../components/LikeModel';
export default function Home() {
    const [postData, setpostData] = useState([])
    const [likeData, setlikeData] = useState([])
    const [likeModel, setlikeModel] = useState(false)
    const navigate = useNavigate()
    const { user } = useAuth()
    const getPost = async () => {
        try {
            const res = await postViewAllApi()
            setpostData(res?.data?.data)

        } catch (error) {
            console.log(error?.message);

        }
    }
    useEffect(() => {
        if (!user) {
            return navigate("/")
        }
        getPost()

    }, [])
    return (
        <div>
            <Stories />
            {
                postData?.map((value, index) => {

                    return (
                        <div className="w-full bg-white border border-gray-300 rounded-md overflow-hidden">

                            {/* Post Header */}
                            <div className="flex items-center justify-between px-4 py-3">

                                {/* Left Side */}
                                <div className="flex items-center gap-3">

                                    <img
                                        src="https://i.pravatar.cc/150?img=20"
                                        alt="profile"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />

                                    <div>
                                        <h3 className="text-sm font-semibold text-black">
                                            {value.user.userName}
                                        </h3>


                                    </div>

                                </div>

                                {/* Right Side */}
                                <FiMoreHorizontal className="text-xl cursor-pointer text-black" />

                            </div>

                            {/* Post Image */}


                            <div className="w-full">

                                <img
                                    src={value.imageUrl[0]}
                                    alt="post"
                                    className="w-full h-[300px] md:h-[550px] object-cover"
                                />

                            </div>

                            {/* Post Actions */}
                            <div className="px-4 py-3">

                                {/* Top Actions */}
                                <div className="flex items-center justify-between">

                                    {/* Left Icons */}
                                    <div className="flex items-center gap-4">

                                        <FiHeart className="text-2xl cursor-pointer hover:text-gray-500 transition" />

                                        <FiMessageCircle className="text-2xl cursor-pointer hover:text-gray-500 transition" />

                                        <FiSend className="text-2xl cursor-pointer hover:text-gray-500 transition" />

                                    </div>

                                    {/* Save Icon */}
                                    <FiBookmark className="text-2xl cursor-pointer hover:text-gray-500 transition" />

                                </div>

                                {/* Likes */}
                                <p onClick={() =>navigate(`/like-view/${value.id}`)} className="text-sm cursor-pointer font-semibold mt-4 text-black">
                                    {value?.likes?.length} likes
                                </p>

                                {/* Caption */}
                                <div className="mt-2 text-sm text-black">

                                    <span className="font-semibold mr-2">
                                        {value?.user?.userName}
                                    </span>

                                    {value.caption}
                                </div>

                                {/* Comments */}
                                <p onClick={() => navigate(`/post-view/${value.id}`)} className="text-sm text-gray-500 mt-2 cursor-pointer">
                                    {
                                        value?.comments?.length != 0
                                        &&
                                        `View all ${value?.comments?.length} comments`
                                    }

                                </p>

                                {/* Time */}
                                <p className="text-xs text-gray-400 mt-2 uppercase">
                                    2 HOURS AGO
                                </p>

                            </div>

                        </div>
                    )
                })
            }



        </div>
    )
}
