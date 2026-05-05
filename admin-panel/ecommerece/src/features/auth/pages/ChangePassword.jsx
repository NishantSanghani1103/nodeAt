import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../utils/user.utils'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { changePasswordApi } from '../services/auth.service'

export default function ChangePassword() {
    const { user, token } = useAuth()
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        oldPassword: "",
        Password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setformData({
            ...formData,
            [name]: value
        })
    }
    const changePassword = async (event) => {
        event.preventDefault()
        try {
            const res = await changePasswordApi(formData,token)
            toast.success(res?.data?.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [])
    return (
        <section className='max-w-330 mx-auto my-12'>
            <ToastContainer />
            <div className="bg-white p-8 max-w-[50%] mx-auto  rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Change Password
                </h2>

                <form onSubmit={changePassword}>
                    <input
                        type="password"
                        placeholder="current Password"
                        onChange={handleChange}
                        name='oldPassword'
                        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name='password'
                        onChange={handleChange}
                        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </section>
    )
}
