/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
    FiGrid,
    FiBookmark,
    FiTag,
    FiSettings,
} from "react-icons/fi";
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import { userSingleViewApi } from '../../../services/user.service';
import { useAuth } from '../../../utils/user.utils';
import PostItems from '../components/PostItems';
import Followers from '../../../components/Followers';
import { useNavigate } from 'react-router-dom';
export default function Profile() {
    const { token } = useAuth()
    const navigate = useNavigate()
    const [userData, setuserData] = useState({})
    const [postBtn, setpostBtn] = useState(1)
    const [followersBtn, setfollowersBtn] = useState(false)
    const [followList, setfollowList] = useState(1)
    useEffect(() => {
        if (token) {

            const profileView = async () => {
                try {
                    const res = await userSingleViewApi(token)

                    setuserData(res?.data?.data)

                } catch (error) {
                    console.log(error?.message);

                }
            }
            profileView()
        }
        else {
            navigate("/")
        }
    }, [])




    return (
        <>
            {
                followersBtn
                &&
                <Followers
                    followList={followList}
                    userData={userData}
                    setfollowersBtn={setfollowersBtn} />
            }
            <div className="bg-gray-100 min-h-screen">

                {/* ================= HEADER ================= */}
                <ProfileHeader />

                {/* ================= PROFILE SECTION ================= */}
                <div className="max-w-5xl mx-auto px-4 pt-8">

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                        {/* Profile Image */}
                        <div className="flex justify-center">

                            <img
                                src="https://i.pravatar.cc/300?img=12"
                                alt="profile"
                                className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover"
                            />

                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left">

                            {/* Username Row */}
                            <div className="flex flex-col md:flex-row items-center gap-4">

                                <h2 className="text-2xl font-light">
                                    {userData?.userName}
                                </h2>

                                <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-semibold">
                                    Edit Profile
                                </button>

                            </div>

                            {/* Stats */}
                            <div className="flex justify-center md:justify-start gap-8 mt-6">

                                <p>
                                    <span className="font-semibold">
                                        {userData?.posts?.length}
                                    </span>{" "}
                                    posts
                                </p>

                                <p onClick={() => {
                                    setfollowersBtn(true)
                                    setfollowList(1)
                                }} className='cursor-pointer'>
                                    <span className="font-semibold ">
                                        {userData?.followers?.length}
                                    </span>{" "}
                                    followers
                                </p>

                                <p className='cursor-pointer '
                                    onClick={() => {
                                        setfollowersBtn(true)
                                        setfollowList(2)
                                    }}
                                >
                                    <span className="font-semibold">
                                        {userData?.followings?.length}
                                    </span>{" "}
                                    following
                                </p>

                            </div>

                            {/* Bio */}
                            <div className="mt-6">

                                <h3 className="font-semibold">
                                    {userData?.userName}
                                </h3>

                                <p className="text-gray-700 mt-1">
                                    {userData?.bio}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ================= STORY HIGHLIGHTS ================= */}
                    {/* <div className="flex gap-6 mt-10 overflow-x-auto pb-2">

             
                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=20"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Travel
                        </p>

                    </div>

               
                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=21"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Nature
                        </p>

                    </div>


                    <div className="flex flex-col items-center min-w-[80px]">

                        <img
                            src="https://i.pravatar.cc/150?img=22"
                            className="w-20 h-20 rounded-full border border-gray-300 p-1 object-cover"
                        />

                        <p className="text-sm mt-2">
                            Food
                        </p>

                    </div>

                </div> */}

                    {/* ================= TABS ================= */}
                    <div className="flex items-center justify-center gap-10 border-t border-gray-300 mt-10 h-14">

                        <div className="flex items-center gap-2 text-sm font-semibold cursor-pointer">

                            <FiGrid />

                            <span onClick={() => setpostBtn(1)}>POSTS</span>

                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">

                            <FiBookmark />

                            <span onClick={() => setpostBtn(2)}>SAVED</span>

                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">

                            <FiTag />

                            <span>TAGGED</span>

                        </div>

                    </div>

                    {/* ================= POSTS GRID ================= */}
                    <div className="grid grid-cols-3 gap-1 md:gap-6 mt-6 pb-24">

                        {
                            postBtn == 1
                                ?
                                userData?.posts == 0
                                    ?
                                    <p>Post Not Found</p>
                                    :
                                    userData?.posts?.map((value, index) => <PostItems postBtn={postBtn} key={value.id} value={value} />)
                                :
                                userData?.bookMarks == 0
                                    ?
                                    <p>Post Not Saved....</p>
                                    :
                                    userData?.bookMarks?.map((value, index) => <PostItems postBtn={postBtn} key={value.id} value={value} />)
                        }


                    </div>

                </div>

            </div>

        </>
    )
}
