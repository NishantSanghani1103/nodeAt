import React from 'react'
import {
    FiHome,
    FiSearch,
    FiHeart,
    FiSend,
    FiPlusSquare,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate()
    return (
        <header className="w-full border-b border-gray-300 bg-white sticky top-0 z-50 ">

            {/* Main Container */}
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">

                {/* Left Side */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold tracking-tight cursor-pointer">
                        Instagram
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 h-10 w-72">
                    <FiSearch className="text-gray-500 text-lg" />

                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none ml-3 w-full text-sm"
                    />
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center gap-5 text-2xl">

                    <FiHome className="cursor-pointer hover:text-gray-500 transition" />

                    <FiSend className="cursor-pointer hover:text-gray-500 transition" />

                    <FiPlusSquare className="cursor-pointer hover:text-gray-500 transition" />

                    <FiHeart className="cursor-pointer hover:text-gray-500 transition" />

                    {/* Profile */}
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        onClick={() => {
                            navigate("/profile")
                        }}
                        alt="profile"
                        className="w-8 h-8 rounded-full object-cover cursor-pointer"
                    />
                </div>

            </div>
        </header>
    )
}
