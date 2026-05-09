import React from 'react'
import {
  FiX,
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiSmile,
  FiMoreHorizontal,
} from "react-icons/fi";
export default function Comment() {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            {/* Modal Container */}
            <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden">

                {/* ================= MAIN CONTENT ================= */}
                <div className="flex flex-col md:flex-row">

                    {/* ================= LEFT IMAGE ================= */}
                    <div className="flex-1 bg-black">

                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                            alt="post"
                            className="w-full h-[300px] md:h-[700px] object-cover"
                        />

                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="w-full md:w-[420px] flex flex-col bg-white">

                        {/* ================= HEADER ================= */}
                        <div className="h-16 border-b border-gray-300 flex items-center justify-between px-4">

                            <div className="flex items-center gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=20"
                                    alt="profile"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div>

                                    <h3 className="text-sm font-semibold">
                                        traveler_world
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Switzerland
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <FiMoreHorizontal className="text-xl cursor-pointer" />

                                <FiX className="text-2xl cursor-pointer" />

                            </div>

                        </div>

                        {/* ================= COMMENTS ================= */}
                        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">

                            {/* Comment 1 */}
                            <div className="flex gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=11"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div className="flex-1">

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            alex
                                        </span>

                                        This place looks absolutely amazing 😍

                                    </p>

                                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">

                                        <p>2h</p>

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
                                    src="https://i.pravatar.cc/150?img=12"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div className="flex-1">

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            emma
                                        </span>

                                        Wowww the view is incredible 🌿🏔️

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

                            {/* Comment 3 */}
                            <div className="flex gap-3">

                                <img
                                    src="https://i.pravatar.cc/150?img=13"
                                    className="w-9 h-9 rounded-full object-cover"
                                />

                                <div className="flex-1">

                                    <p className="text-sm">

                                        <span className="font-semibold mr-2">
                                            david
                                        </span>

                                        Need this vacation right now ✈️

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

                            {/* Icons */}
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
                                12,482 likes
                            </p>

                            {/* Time */}
                            <p className="text-xs text-gray-500 mt-1 uppercase">
                                2 HOURS AGO
                            </p>

                        </div>

                        {/* ================= COMMENT INPUT ================= */}
                        <div className="h-16 border-t border-gray-300 flex items-center px-4 gap-3">

                            <FiSmile className="text-2xl cursor-pointer text-gray-500" />

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
