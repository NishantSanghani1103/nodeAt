/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { likeViewPostByIdApi } from '../services/like.service'

export default function LikeModel({ setlikeModel }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [likeData, setlikeData] = useState([])
    const getLikes = async () => {
        try {
            const res = await likeViewPostByIdApi(id)
            setlikeData(res?.data?.data)
        } catch (error) {
            console.log(error?.message);

        }
    }
    useEffect(() => {
        getLikes()
    }, [id])
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

            {/* ================= MODAL ================= */}
            <div className="w-full max-w-md bg-white rounded-xl overflow-hidden">

                {/* ================= HEADER ================= */}
                <div className="h-14 border-b border-gray-300 flex items-center justify-center relative">

                    {/* Title */}
                    <h2 className="text-sm font-semibold">
                        Likes
                    </h2>

                    {/* Close Button */}
                    <FiX onClick={() => navigate(-1)} className="absolute right-4 text-2xl cursor-pointer" />

                </div>

                {/* ================= SEARCH BAR ================= */}
                <div className="p-4 border-b border-gray-200">

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 bg-gray-100 rounded-md px-4 text-sm outline-none"
                    />

                </div>

                {/* ================= USERS LIST ================= */}
                <div className="max-h-[500px] overflow-y-auto">

                    {/* User 1 */}
                    {
                        likeData?.map((value, index) => {
                            return (
                                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition">

                                    {/* Left Side */}
                                    <div className="flex items-center gap-3">

                                        <img
                                            src="https://i.pravatar.cc/150?img=11"
                                            alt="profile"
                                            className="w-11 h-11 rounded-full object-cover"
                                        />

                                        <div>

                                            <h3 className="text-sm font-semibold">
                                                {value?.user?.userName}
                                            </h3>

                                            <p className="text-sm text-gray-500 uppercase">
                                                {value?.user?.userName}
                                            </p>

                                        </div>

                                    </div>

                                    {/* Follow Button */}
                                    <button className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm font-semibold px-4 h-8 rounded-md">

                                        Follow

                                    </button>

                                </div>
                            )
                        })
                    }




                </div>

            </div>

        </div>
    )
}
