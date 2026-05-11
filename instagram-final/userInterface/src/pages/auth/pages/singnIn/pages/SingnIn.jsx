import React, { useEffect, useState } from 'react'
import { FiFacebook } from "react-icons/fi";
import { toast } from 'react-toastify';
import { loginApi } from '../../../../../services/auth.service';
import { useAuth } from '../../../../../utils/user.utils';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../../../slice/userSlice';
import { useNavigate } from 'react-router-dom';
export default function SingnIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    })

    const { user, token } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log(loginData);

        try {
            const res = await loginApi(loginData)
            toast.success(res?.data?.message)
            dispatch(logIn({
                token: res?.data?.token,
                user: res?.data?.data?.email
            }))
            setTimeout(() => {
                navigate("/home")
            }, 2000)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setloginData({
            ...loginData,
            [name]: value
        })
    }

    useEffect(() => {
        if (user) {
          return  navigate("/profile")
        }
    }, [])
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">

            {/* Main Container */}
            <div className="w-full max-w-sm">

                {/* Login Card */}
                <div className="bg-white border border-gray-300 px-8 py-10">

                    {/* Instagram Logo */}
                    <h1 className="text-5xl font-bold text-center mb-10">
                        Instagram
                    </h1>

                    {/* Form */}
                    <form action="" onSubmit={handleSubmit}>
                        <div className="space-y-3">

                            {/* Username Input */}
                            <input
                                type="text"
                                placeholder="email"
                                name='email'
                                className="w-full h-11 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                                onChange={handleChange}
                            />

                            {/* Password Input */}
                            <input
                                type="password"
                                placeholder="Password"
                                name='password'
                                className="w-full h-11 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                                onChange={handleChange}
                            />

                            {/* Login Button */}
                            <button type='submit' className="w-full h-10 bg-blue-500 hover:bg-blue-600 transition rounded-md text-white font-semibold text-sm">

                                Log In

                            </button>

                        </div>
                    </form>

                    {/* OR Divider */}
                    <div className="flex items-center gap-4 my-6">

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                        <p className="text-gray-500 text-sm font-semibold">
                            OR
                        </p>

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                    </div>

                    {/* Facebook Login */}
                    <div className="flex items-center justify-center gap-2 cursor-pointer">

                        <FiFacebook className="text-blue-900 text-lg" />

                        <p className="text-sm font-semibold text-blue-900">
                            Log in with Facebook
                        </p>

                    </div>

                    {/* Forgot Password */}
                    <p className="text-center text-xs text-blue-900 mt-6 cursor-pointer">

                        Forgot password?

                    </p>

                </div>

                {/* Signup Box */}
                <div className="bg-white border border-gray-300 mt-4 h-16 flex items-center justify-center">

                    <p className="text-sm">

                        Don't have an account?{" "}

                        <span className="text-blue-500 font-semibold cursor-pointer">
                            Sign up
                        </span>

                    </p>

                </div>

                {/* Get App Section */}
                <div className="text-center mt-6">

                    <p className="text-sm">
                        Get the app.
                    </p>

                    {/* Store Buttons */}
                    <div className="flex items-center justify-center gap-3 mt-4">

                        <img
                            src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                            alt="google play"
                            className="h-10 cursor-pointer"
                        />

                        <img
                            src="https://static.cdninstagram.com/rsrc.php/v4/yG/r/4Afy-MzNX8T.png"
                            alt="microsoft store"
                            className="h-10 cursor-pointer"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}
