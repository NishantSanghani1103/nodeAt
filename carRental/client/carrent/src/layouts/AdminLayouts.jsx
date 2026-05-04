import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

export default function AdminLayouts() {
    const location = useLocation();

    const isDashboard = location.pathname === "/admin/dashboard";
    const isAddcar = location.pathname === "/admin/add/car";
    const isManageCar = location.pathname === "/admin/manage/car";
    const isManageBooking = location.pathname === "/admin/manage/booking";
    return (
        <section className='max-w-full' id='admin'>
            <main className='grid grid-cols-[20%_auto]'>
                <div className='border-r min-h-screen border-gray-300' id='sideBar'>
                    <figure className='flex my-5 justify-center items-center flex-col'>
                        <img src="/src/assets/images/testimonial_image_1.png" className='w-14 h-14' alt="" />
                        <p className='text-[#1F2937C9] leading-10 text-[16px]'>Richard Sanford</p>
                    </figure>
                    <nav className={`w-full ${isDashboard && 'bg-[#DFEAFF80] border-r-[5px] border-[#4C88FF] rounded-tl rounded-bl text-[#2563EB] '} text-[#6B6B6B]`} id='menuBar'>
                        <ul>
                            <li className='my-2'>
                                <NavLink to={'/admin/dashboard'} className='flex gap-2 p-2 items-center  '>
                                    <img src="/src/assets/images/dashboardIconColored.svg" alt="" />
                                    <p className='text-sm font-medium'>Dashboard</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <nav className={`w-full ${isAddcar && 'bg-[#DFEAFF80] border-r-[5px] border-[#4C88FF] rounded-tl rounded-bl text-[#2563EB]'} text-[#6B6B6B]`} id='menuBar'>
                        <ul>
                            <li className='my-2'>
                                <NavLink to={'/admin/add/car'} className='flex gap-2 p-2 items-center  '>
                                    <img src="/src/assets/images/addIconColored.svg" alt="" />
                                    <p className=' text-sm font-medium'>Add Car</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <nav className={`w-full ${isManageCar && 'bg-[#DFEAFF80] border-r-[5px] border-[#4C88FF] rounded-tl rounded-bl text-[#2563EB]'} text-[#6B6B6B]`} id='menuBar'>
                        <ul>
                            <li className='my-2'>
                                <NavLink to={'/admin/manage/car'} className='flex gap-2 p-2 items-center  '>
                                    <img src="/src/assets/images/carIconColored.svg" alt="" />
                                    <p className=' text-sm font-medium'>Manage Cars</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>


                    <nav className={`w-full ${isManageBooking && 'bg-[#DFEAFF80] border-r-[5px] border-[#4C88FF] rounded-tl rounded-bl text-[#2563EB]'} text-[#6B6B6B]`} id='menuBar'>
                        <ul>
                            <li className='my-2'>
                                <NavLink to={'/admin/manage/booking'} className='flex gap-2 p-2 items-center  '>
                                    <img src="/src/assets/images/calendar_icon_colored.svg" alt="" />
                                    <p className=' text-sm font-medium'>Manage Bookings</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className='m-8' id='content'>
                    <Outlet />
                </main>
            </main>
        </section>
    )
}
