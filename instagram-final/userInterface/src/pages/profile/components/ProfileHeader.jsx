import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../slice/userSlice'
import { useNavigate } from 'react-router-dom'

export default function ProfileHeader() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogOut = () => {
        if (confirm("Are You Want To Confirm Log Out ?")) {
            dispatch(logOut())
            setTimeout(() => {
                navigate("/signin")
            }, 1000)
        }
    }
    return (
        <header className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between">
                <h1 onClick={() => {
                    navigate("/home")
                }} className="text-2xl font-bold cursor-pointer">
                    Instagram
                </h1>
                <div>
                    <button className='border px-2 bg-gray-200 capitalize border-gray-200 rounded-sm cursor-pointer' onClick={handleLogOut}>Logout</button>
                </div>
            </div>
        </header>
    )
}
