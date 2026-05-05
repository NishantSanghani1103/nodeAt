import React from 'react'

export default function AdminDashboard() {
    return (
        <>
            <section id='main'>
                <div id='heading'>
                    <h3 className='text-[#090A0B] text-[26px] font-normal'>Admin Dashboard</h3>
                    <p className='text-sm text-[#64748B] font-normal'>Monitor overall platform performance including total cars, bookings,
                        <br />
                        revenue, and recent activities</p>
                </div>

                <div className='grid grid-cols-4 gap-5 items-center my-12'>
                    <div className='p-3 border border-[#DDE1EE] rounded-sm shadow-md'>
                        <div className='flex items-center justify-between'>
                            <main>
                                <p className='text-[#6B7280] font-normal capitalize'>Total Cars</p>
                                <h5 className='text-[#000000] font-medium text-[24px]'>8</h5>
                            </main>
                            <figure className='bg-[#EEF4FF] w-9.5 h-9.5 rounded-[50%] flex justify-center items-center'>
                                <img src="/src/assets/images/carIconColored.svg" alt="" />
                            </figure>
                        </div>
                    </div>


                    <div className='p-3 border border-[#DDE1EE] rounded-sm shadow-md'>
                        <div className='flex items-center justify-between'>
                            <main>
                                <p className='text-[#6B7280] font-normal capitalize'>Total Bookings</p>
                                <h5 className='text-[#000000] font-medium text-[24px]'>8</h5>
                            </main>
                            <figure className='bg-[#EEF4FF] w-9.5 h-9.5 rounded-[50%] flex justify-center items-center'>
                                <img src="/src/assets/images/listIconColored.svg" alt="" />
                            </figure>
                        </div>
                    </div>



                    <div className='p-3 border border-[#DDE1EE] rounded-sm shadow-md'>
                        <div className='flex items-center justify-between'>
                            <main>
                                <p className='text-[#6B7280] font-normal capitalize'>Pending Bookings</p>
                                <h5 className='text-[#000000] font-medium text-[24px]'>8</h5>
                            </main>
                            <figure className='bg-[#EEF4FF] w-9.5 h-9.5 rounded-[50%] flex justify-center items-center'>
                                <img src="/src/assets/images/cautionIconColored.svg" alt="" />
                            </figure>
                        </div>
                    </div>



                    <div className='p-3 border border-[#DDE1EE] rounded-sm shadow-md'>
                        <div className='flex items-center justify-between'>
                            <main>
                                <p className='text-[#6B7280] font-normal capitalize'>Completed Bookings</p>
                                <h5 className='text-[#000000] font-medium text-[24px]'>8</h5>
                            </main>
                            <figure className='bg-[#EEF4FF] w-9.5 h-9.5 rounded-[50%] flex justify-center items-center'>
                                <img src="/src/assets/images/listIconColored.svg" alt="" />
                            </figure>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-[60%_auto] items-start gap-5'>

                    <div className='border p-3 border-[#E2E8F0] rounded-sm  shadow-sm' id='bookingHistory'>
                        <div>
                            <h4 className='font-medium text-[#020817] leading-6 '>Recent Bookings</h4>
                            <p className='text-[#64748B] text-[12px] font-medium py-1'>Latest customer bookings</p>
                        </div>
                        <div className='grid grid-cols-2 w-full  justify-between items-center' id='booking-details'>
                            <div className='' id='dateAndModel'>
                                <ul>
                                    <li className='flex items-center gap-2 my-2' id=''>
                                        <figure className='flex items-start'>
                                            <img src="/src/assets/images/listIconColored.svg" className='' alt="" />
                                        </figure>
                                        <div>
                                            <h5 className='text-[#020817] text-sm leading-6 font-medium'>BMW 3 Series</h5>
                                            <p className='text-[#64748B] text-[12px] font-medium'>4/1/2025</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=' justify-self-end  ' id='dateAndModel'>
                                <div className='flex items-center gap-3 '>
                                    <p className='text-[#64748B] font-normal text-[12px]'>$475</p>
                                    <div className='bg-transparent text-[12px] px-2 rounde-sm border border-[#E2E8F0] rounded-lg'>
                                        <p>confirmed</p>
                                    </div>
                                </div>
                            </div>

                            <div className='' id='dateAndModel'>
                                <ul>
                                    <li className='flex items-center gap-2 my-2' id=''>
                                        <figure className='flex items-start'>
                                            <img src="/src/assets/images/listIconColored.svg" className='' alt="" />
                                        </figure>
                                        <div>
                                            <h5 className='text-[#020817] text-sm leading-6 font-medium'>Ford Explorer</h5>
                                            <p className='text-[#64748B] text-[12px] font-medium'>3/1/2025</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=' justify-self-end  ' id='dateAndModel'>
                                <div className='flex items-center gap-3 '>
                                    <p className='text-[#64748B] font-normal text-[12px]'>$425</p>
                                    <div className='bg-transparent text-[12px] px-2 rounde-sm border border-[#E2E8F0] rounded-lg'>
                                        <p>completed</p>
                                    </div>
                                </div>
                            </div>


                            <div className='' id='dateAndModel'>
                                <ul>
                                    <li className='flex items-center gap-2 my-2' id=''>
                                        <figure className='flex items-start'>
                                            <img src="/src/assets/images/listIconColored.svg" className='' alt="" />
                                        </figure>
                                        <div>
                                            <h5 className='text-[#020817] text-sm leading-6 font-medium'>Toyota Corolla</h5>
                                            <p className='text-[#64748B] text-[12px] font-medium'>4/5/2025</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=' justify-self-end  ' id='dateAndModel'>
                                <div className='flex items-center gap-3 '>
                                    <p className='text-[#64748B] font-normal text-[12px]'>$475</p>
                                    <div className='bg-transparent text-[12px] px-2 rounde-sm border border-[#E2E8F0] rounded-lg'>
                                        <p>confirmed</p>
                                    </div>
                                </div>
                            </div>


                            <div className='' id='dateAndModel'>
                                <ul>
                                    <li className='flex items-center gap-2 my-2' id=''>
                                        <figure className='flex items-start'>
                                            <img src="/src/assets/images/listIconColored.svg" className='' alt="" />
                                        </figure>
                                        <div>
                                            <h5 className='text-[#020817] text-sm leading-6 font-medium'>Tesla Model 3</h5>
                                            <p className='text-[#64748B] text-[12px] font-medium'>4/6/2025</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=' justify-self-end  ' id='dateAndModel'>
                                <div className='flex items-center gap-3 '>
                                    <p className='text-[#64748B] font-normal text-[12px]'>$360</p>
                                    <div className='bg-transparent text-[12px] px-2 rounde-sm border border-[#E2E8F0] rounded-lg'>
                                        <p>confirmed</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='border border-[#E2E8F0] rounded-lg w-[70%] bg-transparent shadow-sm p-4' id='revenue'>
                        <div className=''>
                            <h5 className='font-medium leading-6 text-[#020817]'>Monthly Revenue</h5>
                            <p className='text-[#64748B] font-normal leading-5 text-sm py-1'>Revenue for current month</p>
                            <h3 className='text-[#2563EB] leading-10 font-bold text-[30px]'>$1060</h3>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
