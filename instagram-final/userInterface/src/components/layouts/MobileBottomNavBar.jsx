import React from 'react'
import {
  FiHome,
  FiSearch,
  FiVideo,
  FiHeart,
} from "react-icons/fi";
export default function MobileBottomNavBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 z-50">

            {/* Navbar Container */}
            <div className="flex items-center justify-around h-16">

                {/* Home */}
                <div className="flex flex-col items-center cursor-pointer">
                    <FiHome className="text-2xl text-black" />
                </div>

                {/* Search */}
                <div className="flex flex-col items-center cursor-pointer">
                    <FiSearch className="text-2xl text-black" />
                </div>

                {/* Reels */}
                <div className="flex flex-col items-center cursor-pointer">
                    <FiVideo className="text-2xl text-black" />
                </div>

                {/* Notifications */}
                <div className="flex flex-col items-center cursor-pointer">
                    <FiHeart className="text-2xl text-black" />
                </div>

                {/* Profile */}
                <div className="flex flex-col items-center cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                        className="w-7 h-7 rounded-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}
