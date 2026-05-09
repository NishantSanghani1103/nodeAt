import React from 'react'
import {
  FiX,
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function PostViewModel() {
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 py-6">

            {/* Modal Container */}
            <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden">

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="flex-1 bg-black">

                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                            alt="post"
                            className="w-full h-[300px] sm:h-[500px] lg:h-[850px] object-cover"
                        />

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
                                        john_doe
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        New York
                                    </p>

                                </div>

                            </div>

                            {/* Right Icons */}
                            <div className="flex items-center gap-4">

                                <FiMoreHorizontal className="text-xl cursor-pointer" />

                                <FiX className="text-2xl cursor-pointer" />

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
                                            john_doe
                                        </span>

                                        Exploring beautiful mountains and enjoying
                                        peaceful nature vibes 🌿🏔️

                                    </p>

                                    <p className="text-xs text-gray-400 mt-2">
                                        2 HOURS AGO
                                    </p>

                                </div>

                            </div>

                            {/* Comment 1 */}
                            <div className="flex gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=20"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div className="flex-1">

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            alex
                                        </span>

                                        Amazing picture 😍

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

                            {/* Comment 2 */}
                            <div className="flex gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=22"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div className="flex-1">

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            emma
                                        </span>

                                        Love this view 🌄

                                    </p>

                                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">

                                        <p>45m</p>

                                        <p className="cursor-pointer">
                                            Reply
                                        </p>

                                    </div>

                                </div>

                                <FiHeart className="text-sm cursor-pointer mt-1" />

                            </div>

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
                                24,582 likes
                            </p>

                            {/* Time */}
                            <p className="text-xs text-gray-500 mt-1 uppercase">
                                MAY 10, 2026
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
