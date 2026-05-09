import React from 'react'
import {
  FiGrid,
  FiBookmark,
  FiTag,
  FiSettings,
} from "react-icons/fi";
export default function Profile() {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* ================= HEADER ================= */}
            <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">

                <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between">

                    <h1 className="text-2xl font-bold">
                        Instagram
                    </h1>

                    <FiSettings className="text-2xl cursor-pointer" />

                </div>

            </header>

            {/* ================= PROFILE SECTION ================= */}
            <div className="max-w-5xl mx-auto px-4 pt-8">

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Profile Image */}
                    <div className="flex justify-center">

                        <img
                            src="https://i.pravatar.cc/300?img=12"
                            alt="profile"
                            className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover"
                        />

                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left">

                        {/* Username Row */}
                        <div className="flex flex-col md:flex-row items-center gap-4">

                            <h2 className="text-2xl font-light">
                                john_doe
                            </h2>

                            <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-semibold">
                                Edit Profile
                            </button>

                        </div>

                        {/* Stats */}
                        <div className="flex justify-center md:justify-start gap-8 mt-6">

                            <p>
                                <span className="font-semibold">
                                    54
                                </span>{" "}
                                posts
                            </p>

                            <p>
                                <span className="font-semibold">
                                    2.3M
                                </span>{" "}
                                followers
                            </p>

                            <p>
                                <span className="font-semibold">
                                    310
                                </span>{" "}
                                following
                            </p>

                        </div>

                        {/* Bio */}
                        <div className="mt-6">

                            <h3 className="font-semibold">
                                John Doe
                            </h3>

                            <p className="text-gray-700 mt-1">
                                Travel • Photography • Lifestyle
                            </p>

                            <p className="text-blue-600 mt-1 text-sm">
                                www.johndoe.com
                            </p>

                        </div>

                    </div>

                </div>

                {/* ================= STORY HIGHLIGHTS ================= */}
                <div className="flex gap-6 mt-10 overflow-x-auto pb-2">

                    {/* Highlight 1 */}
                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=20"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Travel
                        </p>

                    </div>

                    {/* Highlight 2 */}
                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=21"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Nature
                        </p>

                    </div>

                    {/* Highlight 3 */}
                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=22"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Food
                        </p>

                    </div>

                </div>

                {/* ================= TABS ================= */}
                <div className="flex items-center justify-center gap-10 border-t border-gray-300 mt-10 h-14">

                    <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer">

                        <FiGrid />

                        <span>POSTS</span>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">

                        <FiBookmark />

                        <span>SAVED</span>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">

                        <FiTag />

                        <span>TAGGED</span>

                    </div>

                </div>

                {/* ================= POSTS GRID ================= */}
                <div className="grid grid-cols-3 gap-1 md:gap-6 mt-6 pb-24">

                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                        className="w-full h-32 md:h-80 object-cover"
                    />

                </div>

            </div>

        </div>
    )
}
