import React from 'react'
import { FiFacebook } from "react-icons/fi";
export default function SignUp() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">

            {/* Main Container */}
            <div className="w-full max-w-sm">

                {/* Signup Card */}
                <div className="bg-white border border-gray-300 px-8 py-10">

                    {/* Logo */}
                    <h1 className="text-4xl font-bold text-center">
                        Instagram
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-gray-500 text-sm font-semibold mt-4 leading-5">
                        Sign up to see photos and videos
                        from your friends.
                    </p>

                    {/* Facebook Button */}
                    <button className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold rounded-md h-10 mt-6 flex items-center justify-center gap-2">

                        <FiFacebook className="text-lg" />

                        Log in with Facebook

                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center gap-4 my-6">

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                        <p className="text-gray-500 text-sm font-semibold">
                            OR
                        </p>

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                    </div>

                    {/* Form */}
                    <div className="space-y-3">

                        {/* Mobile or Email */}
                        <input
                            type="text"
                            placeholder="Mobile Number or Email"
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                        />

                        {/* Full Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                        />

                        {/* Username */}
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                        />

                    </div>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 text-center mt-5 leading-5">

                        People who use our service may have uploaded
                        your contact information to Instagram.

                    </p>

                    <p className="text-xs text-gray-500 text-center mt-4 leading-5">

                        By signing up, you agree to our Terms ,
                        Privacy Policy and Cookies Policy.

                    </p>

                    {/* Signup Button */}
                    <button className="w-full h-10 bg-blue-500 hover:bg-blue-600 transition rounded-md text-white font-semibold text-sm mt-6">

                        Sign Up

                    </button>

                </div>

                {/* Login Card */}
                <div className="bg-white border border-gray-300 mt-4 h-16 flex items-center justify-center">

                    <p className="text-sm">

                        Have an account?{" "}

                        <span className="text-blue-500 font-semibold cursor-pointer">
                            Log in
                        </span>

                    </p>

                </div>

            </div>

        </div>
    )
}
