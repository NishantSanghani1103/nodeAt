import React from 'react'
import FeaturedVehicles from '../components/FeaturedVehicles'

import CustomerReview from '../components/CustomerReview'

export default function Home() {
    return (
        <>
            <main className='max-w-full bg-gray-50 min-h-screen flex items-center justify-center'>
                <section className='max-w-330 mx-auto'>
                    <h1 className='text-[50px] font-semibold text-[#414141] text-center'>
                        Luxury Cars on Rent
                    </h1>
                    <form className='bg-white shadow-md rounded-xl p-4 grid grid-cols-[60%_auto] my-10 justify-between items-center' action="">
                        <div className='flex  justify-between '>
                            <div className='flex flex-col w-fit'>
                                <select name="" className='text-sm p-0 m-0 ' id="">
                                    <option value="" className='text-[#2B3441E5]  p-0 m-0'>Pick-up Location</option>
                                </select>
                                <p className='text-[#2B344180] text-sm pl-1  '>Banglore</p>
                            </div>

                            <div className='flex flex-col w-fit'>
                                <select name="" className='text-sm p-0 m-0 ' id="">
                                    <option value="" className='text-[#2B3441E5]  p-0 m-0'>Pick-up Date</option>
                                </select>
                                <p className='text-[#2B344180] text-sm pl-1 '>28-May-2025</p>
                            </div>

                            <div className='flex flex-col w-fit'>
                                <select name="" className='text-sm p-0 m-0 ' id="">
                                    <option value="" className='text-[#2B3441E5]  p-0 m-0'>Return Date</option>
                                </select>
                                <p className='text-[#2B344180] text-sm pl-1  '>28-May-2025</p>
                            </div>
                        </div>
                        <div className=' justify-end flex'>
                            <div className='relative'>
                                <button className='bg-[#2563EB] text-white  rounded-lg px-8 py-1 text-sm'>Search</button>
                                <div className='absolute top-1/5 left-[10px] text-white'>
                                    <img src="/src/assets/images/search_icon.svg" alt="" />
                                </div>
                            </div>

                        </div>


                    </form>
                    <figure>
                        <img src="/src/assets/images/main_car.png" className='w-[858px] ' alt="" />
                    </figure>
                </section>
            </main>
            <section className='max-w-full bg-white my-12 ' id='featuredVehicles'>
                <main className='max-w-330 mx-auto my-12 '>
                    <div className='text-center'>
                        <h2 className='text-[40px] text-[#414141] font-semibold '>Featured Vehicles</h2>
                        <p className='text-[#414141] '>Explore our selection of premium vehicles available for your next adventure.</p>
                    </div>
                    <div className=' grid grid-cols-3 justify-center gap-5 my-12' id='featuredCart-items'>

                        <FeaturedVehicles />
                        <FeaturedVehicles />
                        <FeaturedVehicles />
                    </div>

                    <div className='bg-white flex justify-center  my-12 text-[#2B3441]'>
                        <button className='border text-sm px-2 py-1 cursor-pointer rounded-md border-gray-500 flex items-center gap-2'>Explore All Cars
                            <img src="/src/assets/images/arrow_icon.svg" alt="" />
                        </button>
                    </div>

                    <div className='bg-linear-to-r from-[#0558FE] to-[#A9CFFF] rounded-lg my-12 '>
                        <div className='grid grid-cols-2 items-end'>
                            <main className=' p-8'>
                                <h4 className='text-[28px] text-white font-semibold'>Do You Own a Luxury Car?</h4>
                                <p className='text-white font-medium my-2'>Monetize your vehicle effortlessly by listing it on CarRental.We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.</p>
                                <button className='bg-white text-[#0257FF] text-sm px-4 py-1 rounded-lg my-4'>List your car</button>
                            </main>
                            <figure className=''>
                                <img src="/src/assets/images/banner_car_image.png" className='w-[393px] mx-auto' alt="" />
                            </figure>
                        </div>
                    </div>


                    <div className='my-12' id='customerSay'>
                        <div className='text-center'>
                            <h2 className='text-[40px] text-[#414141] font-semibold '>What Our Customers Say</h2>
                            <p className='text-[#6B7280E5] py-5 '>Discover why discerning travelers choose StayVenture for their luxury accommodations <br /> around the world.</p>
                        </div>

                        <div className='grid grid-cols-3 gap-5 justify-center my-12'>
                            <CustomerReview />
                            <CustomerReview />
                            <CustomerReview />

                        </div>
                    </div>

                    <div className='my-20'>
                        <div className='text-center'>
                            <h2 className='text-[40px] text-[#414141] font-semibold '>Never Miss a Deal!</h2>
                            <p className='text-[#6B7280E5] py-2 '>Subscribe to get the latest offers, new collections, and exclusive discounts.</p>
                        </div>

                        <div className=' my-12 '>
                            <div className=' max-w-[90%] mx-auto flex'>
                                <input type="text" className='w-[80%] text-sm text-[#9A9A9A] border border-gray-200 rounded-sm p-3' placeholder='Enter your email address' />
                                <button className='bg-blue-600 rounded-sm px-8 text-white'>Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
