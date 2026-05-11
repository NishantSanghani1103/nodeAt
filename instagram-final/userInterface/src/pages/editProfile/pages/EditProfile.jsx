import React from 'react'
import { FiSettings } from 'react-icons/fi'

export default function EditProfile() {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* ================= HEADER ================= */}
            <header className="w-full h-16 bg-white border-b border-gray-300 sticky top-0 z-50">

                <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        Instagram
                    </h1>

                    {/* Settings */}
                    <FiSettings className="text-2xl cursor-pointer" />

                </div>

            </header>

            {/* ================= MAIN CONTENT ================= */}
            <div className="max-w-4xl mx-auto px-4 py-8">

                <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">

                    <div className="flex flex-col lg:flex-row">

                        {/* ================= SIDEBAR ================= */}
                        <div className="w-full lg:w-[260px] border-b lg:border-b-0 lg:border-r border-gray-300">

                            <div className="p-5 border-l-2 border-black font-semibold bg-gray-50 cursor-pointer">
                                Edit Profile
                            </div>

                            <div className="p-5 hover:bg-gray-50 transition cursor-pointer">
                                Notifications
                            </div>

                            <div className="p-5 hover:bg-gray-50 transition cursor-pointer">
                                Privacy
                            </div>

                            <div className="p-5 hover:bg-gray-50 transition cursor-pointer">
                                Security
                            </div>

                            <div className="p-5 hover:bg-gray-50 transition cursor-pointer">
                                Ads
                            </div>

                            <div className="p-5 hover:bg-gray-50 transition cursor-pointer">
                                Help
                            </div>

                        </div>

                        {/* ================= FORM SECTION ================= */}
                        <div className="flex-1 p-6 md:p-10">

                            {/* Profile Header */}
                            <div className="flex flex-col sm:flex-row items-center gap-5">

                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    alt="profile"
                                    className="w-20 h-20 rounded-full object-cover"
                                />

                                <div className="text-center sm:text-left">

                                    <h2 className="font-semibold text-lg">
                                        john_doe
                                    </h2>

                                    <button className="text-blue-500 font-semibold text-sm mt-2">
                                        Change profile photo
                                    </button>

                                </div>

                            </div>

                            {/* ================= FORM ================= */}
                            <div className="mt-10 space-y-8">

                                {/* Name */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        value="John Doe"
                                        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                                    />

                                    <p className="text-xs text-gray-500 mt-2 leading-5">
                                        Help people discover your account by using
                                        the name you're known by.
                                    </p>

                                </div>

                                {/* Username */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        value="john_doe"
                                        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                                    />

                                </div>

                            
                              

                                {/* Bio */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Bio
                                    </label>

                                    <textarea
                                        className="w-full h-28 border border-gray-300 rounded-md px-4 py-3 outline-none resize-none focus:border-gray-400"
                                    >
                                        Travel • Photography • Nature
                                    </textarea>

                                    <div className="flex justify-end mt-2">

                                        <p className="text-xs text-gray-400">
                                            24 / 150
                                        </p>

                                    </div>

                                </div>

                                {/* Email */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        value="johndoe@gmail.com"
                                        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                                    />

                                </div>

                                {/* Phone */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Phone Number
                                    </label>

                                    <input
                                        type="text"
                                        value="+1 9876543210"
                                        className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none focus:border-gray-400"
                                    />

                                </div>

                                {/* Gender */}
                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Gender
                                    </label>

                                    <select className="w-full h-11 border border-gray-300 rounded-md px-4 outline-none bg-white focus:border-gray-400">

                                        <option>Male</option>

                                        <option>Female</option>

                                        <option>Other</option>

                                    </select>

                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">

                                    <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-8 h-11 rounded-md">

                                        Submit

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
