import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logOut } from '../../store/slice/userSlice'

export default function SellerLayout() {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-10">
                    EstatePro
                </h2>

                <ul className="space-y-4  text-gray-600">
                    <li className=''>
                        <NavLink to={'/seller/dashboard'} className="hover:text-blue-600 cursor-pointer">Dashboard</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to={'/seller/property'} className="hover:text-blue-600 cursor-pointer">My Properties</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to={'/seller/add-property'} className="hover:text-blue-600 cursor-pointer">Add Property</NavLink>
                    </li>

                    <li>

                        <NavLink to={'/seller/enquiry'} className="hover:text-blue-600 cursor-pointer">Inquiries</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/seller/profile'} className="hover:text-blue-600 cursor-pointer">Profile</NavLink>
                    </li>
                    <li>
                        <Link
                            onClick={() => {
                                if (confirm("Are You Sure Want To LogOut ? ")) {
                                    dispatch(logOut())
                                    navigate("/login")
                                }
                            }}
                            className='hover:text-blue-600 cursor-pointer'>LogOut</Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-1">

                {/* Topbar */}
                <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
                    <h3 className="text-xl font-semibold">Seller Panel</h3>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Hello, Nishant</span>
                        <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
                            N
                        </div>
                    </div>
                </div>

                {/* 🔥 Outlet goes here */}
                <div className="p-8">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
