import React from 'react'
import Stories from '../../../components/story/Stories'
import {
    FiHeart,
    FiMessageCircle,
    FiSend,
    FiBookmark,
    FiMoreHorizontal,
} from "react-icons/fi";
export default function Home() {
    return (
        <div>
            <Stories />
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
                                traveler_world
                            </h3>

                            <p className="text-xs text-gray-500">
                                Switzerland
                            </p>
                        </div>

                    </div>

                    {/* Right Side */}
                    <FiMoreHorizontal className="text-xl cursor-pointer text-black" />

                </div>

                {/* Post Image */}
                <div className="w-full">

                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
                    <p className="text-sm font-semibold mt-4 text-black">
                        12,482 likes
                    </p>

                    {/* Caption */}
                    <div className="mt-2 text-sm text-black">

                        <span className="font-semibold mr-2">
                            traveler_world
                        </span>

                        Beautiful mountains and nature view 🌿🏔️
                    </div>

                    {/* Comments */}
                    <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                        View all 245 comments
                    </p>

                    {/* Time */}
                    <p className="text-xs text-gray-400 mt-2 uppercase">
                        2 HOURS AGO
                    </p>

                </div>

            </div>

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
                                traveler_world
                            </h3>

                            <p className="text-xs text-gray-500">
                                Switzerland
                            </p>
                        </div>

                    </div>

                    {/* Right Side */}
                    <FiMoreHorizontal className="text-xl cursor-pointer text-black" />

                </div>

                {/* Post Image */}
                <div className="w-full">

                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
                    <p className="text-sm font-semibold mt-4 text-black">
                        12,482 likes
                    </p>

                    {/* Caption */}
                    <div className="mt-2 text-sm text-black">

                        <span className="font-semibold mr-2">
                            traveler_world
                        </span>

                        Beautiful mountains and nature view 🌿🏔️
                    </div>

                    {/* Comments */}
                    <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                        View all 245 comments
                    </p>

                    {/* Time */}
                    <p className="text-xs text-gray-400 mt-2 uppercase">
                        2 HOURS AGO
                    </p>

                </div>

            </div>
        </div>
    )
}
