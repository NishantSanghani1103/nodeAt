
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { loginService } from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (event) => {
        const { value, name } = event.target

        setloginData({
            ...loginData,
            [name]: value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await loginService(loginData)
            toast.success(res?.data?.message)
            dispatch(logIn({ token: res?.data?.token, user: { userName: res?.data?.name, userRole: res?.data?.role } }))
            if (res?.data?.role == "seller") {
                setTimeout(() => {
                    navigate("/seller/dashboard")
                }, 2000)
            }

            if (res?.data?.role == "buyer") {
                setTimeout(() => {
                    navigate("/")
                }, 2000)
            }
            if (res?.data?.role == "admin") {
                setTimeout(() => {
                    navigate("/admin/dashboard")
                }, 2000)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ToastContainer />

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Login to EstatePro
                </h2>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name='email'
                        onChange={handleChange}
                        className="w-full border px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        onChange={handleChange}
                        className="w-full border px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                        Login
                    </button>
                </form>
                <p className="text-sm text-center mt-4 text-gray-500">
                    Don’t have an account? <span className="text-blue-600 cursor-pointer">Register</span>
                </p>

            </div>

        </div>
    )
}
