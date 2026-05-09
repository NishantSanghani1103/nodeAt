import React from 'react'
import {
  FiX,
  FiImage,
  FiMapPin,
  FiSmile,
} from "react-icons/fi";
export default function Post() {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

            {/* Modal Container */}
            <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden">

                {/* ================= HEADER ================= */}
                <div className="h-14 border-b border-gray-300 flex items-center justify-between px-4">

                    {/* Close Button */}
                    <FiX className="text-2xl cursor-pointer" />

                    {/* Title */}
                    <h2 className="font-semibold text-sm">
                        Create new post
                    </h2>

                    {/* Share Button */}
                    <button className="text-blue-500 font-semibold text-sm">
                        Share
                    </button>

                </div>

                {/* ================= BODY ================= */}
                <div className="flex flex-col md:flex-row">

                    {/* Left Upload Area */}
                    <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center justify-center p-10 min-h-[400px]">

                        {/* Upload Icon */}
                        <FiImage className="text-7xl text-gray-400" />

                        {/* Upload Text */}
                        <p className="text-xl mt-5 text-center">
                            Drag photos and videos here
                        </p>

                        {/* Select Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-5 py-2 rounded-md mt-6">

                            Select from computer

                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-[350px] flex flex-col">

                        {/* User Info */}
                        <div className="flex items-center gap-3 p-4">

                            <img
                                src="https://i.pravatar.cc/150?img=12"
                                alt="profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />

                            <h3 className="font-semibold text-sm">
                                john_doe
                            </h3>

                        </div>

                        {/* Caption */}
                        <div className="px-4">

                            <textarea
                                placeholder="Write a caption..."
                                className="w-full h-32 resize-none outline-none text-sm"
                            ></textarea>

                        </div>

                        {/* Emoji */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">

                            <FiSmile className="text-xl cursor-pointer text-gray-500" />

                            <p className="text-xs text-gray-400">
                                0/2,200
                            </p>

                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200 cursor-pointer">

                            <p className="text-sm">
                                Add location
                            </p>

                            <FiMapPin className="text-lg text-gray-500" />

                        </div>

                        {/* Accessibility */}
                        <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200 cursor-pointer">

                            <p className="text-sm">
                                Accessibility
                            </p>

                            <span className="text-lg text-gray-500">
                                ›
                            </span>

                        </div>

                        {/* Advanced Settings */}
                        <div className="flex items-center justify-between px-4 h-14 cursor-pointer">

                            <p className="text-sm">
                                Advanced settings
                            </p>

                            <span className="text-lg text-gray-500">
                                ›
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
