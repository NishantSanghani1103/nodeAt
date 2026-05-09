import React from 'react'
import {
  FiX,
} from "react-icons/fi";

export default function Followers() {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

            {/* Modal Container */}
            <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">

                {/* ================= HEADER ================= */}
                <div className="h-14 border-b border-gray-300 flex items-center justify-center relative">

                    {/* Title */}
                    <h2 className="font-semibold text-sm">
                        Followers
                    </h2>

                    {/* Close Button */}
                    <FiX className="absolute right-4 text-2xl cursor-pointer" />

                </div>

                {/* ================= SEARCH BAR ================= */}
                <div className="p-4 border-b border-gray-200">

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 bg-gray-100 rounded-md px-4 outline-none text-sm"
                    />

                </div>

                {/* ================= FOLLOWERS LIST ================= */}
                <div className="max-h-[500px] overflow-y-auto">

                    {/* User 1 */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                        {/* Left Side */}
                        <div className="flex items-center gap-3">

                            <img
                                src="https://i.pravatar.cc/150?img=11"
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    alex_john
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Alex Johnson
                                </p>

                            </div>

                        </div>

                        {/* Follow Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold px-4 h-8 rounded-md">

                            Follow

                        </button>

                    </div>

                    {/* User 2 */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                        <div className="flex items-center gap-3">

                            <img
                                src="https://i.pravatar.cc/150?img=12"
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    emma_watson
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Emma Watson
                                </p>

                            </div>

                        </div>

                        <button className="bg-gray-200 hover:bg-gray-300 transition text-black text-sm font-semibold px-4 h-8 rounded-md">

                            Following

                        </button>

                    </div>

                    {/* User 3 */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                        <div className="flex items-center gap-3">

                            <img
                                src="https://i.pravatar.cc/150?img=13"
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    david_smith
                                </h3>

                                <p className="text-sm text-gray-500">
                                    David Smith
                                </p>

                            </div>

                        </div>

                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold px-4 h-8 rounded-md">

                            Follow

                        </button>

                    </div>

                    {/* User 4 */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                        <div className="flex items-center gap-3">

                            <img
                                src="https://i.pravatar.cc/150?img=14"
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    olivia_m
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Olivia Martin
                                </p>

                            </div>

                        </div>

                        <button className="bg-gray-200 hover:bg-gray-300 transition text-black text-sm font-semibold px-4 h-8 rounded-md">

                            Following

                        </button>

                    </div>

                    {/* User 5 */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                        <div className="flex items-center gap-3">

                            <img
                                src="https://i.pravatar.cc/150?img=15"
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover"
                            />

                            <div>

                                <h3 className="text-sm font-semibold">
                                    sophia_green
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Sophia Green
                                </p>

                            </div>

                        </div>

                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold px-4 h-8 rounded-md">

                            Follow

                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}
