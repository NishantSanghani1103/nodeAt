import React, { useEffect, useState } from 'react'
import { FiFacebook } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../../../../../services/auth.service';
import { toast } from 'react-toastify';
import { useAuth } from '../../../../../utils/user.utils';
export default function SignUp() {
    const navigation = useNavigate()
    const{user}=useAuth()
    const [registerData, setregisterData] = useState({
        email: "",
        userName: "",
        password: "",
        gender: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        console.log(event.target.value);

        setregisterData({
            ...registerData,
            [name]: value
        })
    }
    const hadleSubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await registerApi(registerData)
            toast.success(res?.data?.message)
            setTimeout(() => {
                navigation("/signin")
            }, 2000)
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message)
        }

    }

    useEffect(() => {
        if (user) {
            return navigation("/profile")
        }
    }, [])
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

                    {/* OR Divider */}
                    <div className="flex items-center gap-4 my-6">

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                        <p className="text-gray-500 text-sm font-semibold">
                            OR
                        </p>

                        <div className="flex-1 h-[1px] bg-gray-300"></div>

                    </div>

                    {/* Form */}
                    <form onSubmit={hadleSubmit} className="space-y-3">

                        {/* Mobile or Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                            onChange={handleChange}
                        />


                        {/* Username */}
                        <input
                            type="text"
                            placeholder="Username"
                            name='userName'
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                            onChange={handleChange}
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            name='password'
                            className="w-full h-10 border border-gray-300 bg-gray-50 rounded-sm px-3 text-sm outline-none focus:border-gray-400"
                            onChange={handleChange}
                        />

                        <div className='flex items-center text-gray-500 my-3  gap-4'>
                            <div className='flex items-center gap-1'>
                                <input
                                    type="radio"
                                    placeholder="Gender"
                                    name='gender'
                                    value={"male"}
                                    className=""
                                    onChange={handleChange}
                                />
                                <label htmlFor="" className='text-sm '>Male</label>
                            </div>


                            <div className='flex items-center gap-1'>
                                <input
                                    type="radio"
                                    placeholder="Gender"
                                    name='gender'
                                    value={"female"}
                                    className=""
                                    onChange={handleChange}
                                />
                                <label htmlFor="">Female</label>
                            </div>
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
                        <button type='submit' className="w-full h-10 bg-blue-500 hover:bg-blue-600 transition rounded-md text-white font-semibold text-sm mt-6 cursor-pointer">

                            Sign Up

                        </button>
                    </form>
                </div>

                {/* Login Card */}
                <div className="bg-white border border-gray-300 mt-4 h-16 flex items-center justify-center">

                    <Link to={'/signin'} className="text-sm">

                        Have an account?{" "}

                        <span className="text-blue-500 font-semibold cursor-pointer">
                            Log in
                        </span>

                    </Link>

                </div>

            </div>

        </div>
    )
}
