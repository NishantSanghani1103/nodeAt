import React, { useEffect, useState } from 'react'
import {
    FiX,
    FiHeart,
    FiMessageCircle,
    FiSend,
    FiBookmark,
    FiMoreHorizontal,
} from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import { postViewByIdApi } from '../services/post.service';

export default function PostViewModel() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [postData, setpostData] = useState({})
    // const images = [
    //     "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    //     "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    //     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
    // ];
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const getSinglePost = async () => {
            try {
                const res = await postViewByIdApi(id)
                setImages(res?.data?.data?.imageUrl)
                setpostData(res?.data?.data)
            } catch (error) {
                console.log(error?.message);

            }
        }
        getSinglePost()
    }, [])

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 py-6">

            {/* Modal Container */}
            <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden">

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="flex-1 bg-black relative overflow-hidden">

                        {/* Images */}
                        <img
                            src={images[currentImage]}
                            alt="post"
                            className="w-full h-[300px] sm:h-[500px]  object-cover"
                        />
                        {/* Left Arrow */}
                        {
                            currentImage > 0 && (
                                <button
                                    onClick={() => setCurrentImage(currentImage - 1)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
                                >
                                    ❮
                                </button>
                            )
                        }

                        {/* Right Arrow */}
                        {
                            currentImage < images.length - 1 && (
                                <button
                                    onClick={() => setCurrentImage(currentImage + 1)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
                                >
                                    ❯
                                </button>
                            )
                        }

                        {/* Dots */}
                        {
                            images?.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

                                    {
                                        images?.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`w-2 h-2 rounded-full ${currentImage === index
                                                    ? "bg-white"
                                                    : "bg-white/40"
                                                    }`}
                                            />
                                        ))
                                    }

                                </div>
                            )
                        }

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="w-full lg:w-[420px] flex flex-col bg-white">

                        {/* ================= HEADER ================= */}
                        <div className="h-16 border-b border-gray-300 flex items-center justify-between px-4">

                            {/* User Info */}
                            <div className="flex items-center gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    alt="profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>

                                    <h3 className="text-sm font-semibold">
                                        {postData?.user?.userName}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        New York
                                    </p>

                                </div>

                            </div>

                            {/* Right Icons */}
                            <div className="flex items-center gap-4">

                                <FiMoreHorizontal className="text-xl cursor-pointer" />

                                <FiX onClick={() => {
                                    navigate(-1)
                                }} className="text-2xl cursor-pointer" />

                            </div>

                        </div>

                        {/* ================= CAPTION & COMMENTS ================= */}
                        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">

                            {/* Main Caption */}
                            <div className="flex gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            {postData?.user?.userName}
                                        </span>

                                        {
                                            postData?.caption
                                        }

                                    </p>

                                    <p className="text-xs text-gray-400 mt-2">
                                        2 HOURS AGO
                                    </p>

                                </div>

                            </div>

                            {/* Comment 1 */}
                            {
                                postData?.comments?.map((value, index) => {
                                    return (
                                        <div className="flex gap-3">

                                            <img
                                                src="https://i.pravatar.cc/150?img=20"
                                                className="w-9 h-9 rounded-full object-cover"
                                            />

                                            <div className="flex-1">

                                                <p className="text-sm">

                                                    <span className="font-semibold mr-2">
                                                        {value.user.userName}
                                                    </span>

                                                    {value.text}

                                                </p>

                                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">

                                                    <p>1h</p>

                                                    <p className="cursor-pointer">
                                                        Reply
                                                    </p>

                                                </div>

                                            </div>

                                            <FiHeart className="text-sm cursor-pointer mt-1" />

                                        </div>
                                    )
                                })
                            }





                        </div>

                        {/* ================= ACTIONS ================= */}
                        <div className="border-t border-gray-300 px-4 py-3">

                            {/* Action Icons */}
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4 text-2xl">

                                    <FiHeart className="cursor-pointer" />

                                    <FiMessageCircle className="cursor-pointer" />

                                    <FiSend className="cursor-pointer" />

                                </div>

                                <FiBookmark className="text-2xl cursor-pointer" />

                            </div>

                            {/* Likes */}
                            <p className="text-sm font-semibold mt-4">
                                {postData?.likes?.length} likes
                            </p>

                            {/* Time */}
                            <p className="text-xs text-gray-500 mt-1 uppercase">
                                {new Date(postData?.createdAt).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </p>

                        </div>

                        {/* ================= COMMENT INPUT ================= */}
                        <div className="h-16 border-t border-gray-300 flex items-center px-4 gap-3">

                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="flex-1 outline-none text-sm"
                            />

                            <button className="text-blue-500 font-semibold text-sm">
                                Post
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
