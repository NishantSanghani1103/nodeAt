import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logOut } from '../../store/slice/userSlice'
import { useDispatch } from 'react-redux'

export default function AdminLayout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-gray-300 p-6">
                <h2 className="text-2xl font-bold text-white mb-10">
                    Admin Panel
                </h2>

                <ul className="space-y-4">
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/user'}>Users</Link>
                    </li>
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/property'}>Properties</Link>
                    </li>
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/enquiry'}>Inquiries</Link>
                    </li>
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/reports'}>Reports</Link>
                    </li>
                    <li>
                        <Link className='hover:text-white cursor-pointer' to={'/admin/Settings'}>Settings</Link>
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

            {/* Main */}
            <div className="flex-1">

                {/* Topbar */}
                <div className="bg-white px-8 py-4 flex justify-between items-center shadow">
                    <h3 className="text-xl font-semibold">Admin Dashboard</h3>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Admin</span>
                        <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
                            A
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
